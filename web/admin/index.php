<?php

define('PACKAGE', 'standalone');
define('VERSION', '2.0.1');

$config_path = dirname(__FILE__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR;
if (!file_exists($config_path . 'cconfig.php')) {
    header('Location: install/index.php');
    exit;
} else {
    require_once($config_path . 'app/admin/config.php');
    if (file_exists($config_path . 'app/install')) {
        rename($config_path . 'app/install', $config_path . 'app/delete_' . md5(mt_rand()));
    }
    if (file_exists($config_path . 'web/install')) {
        rename($config_path . 'web/install', $config_path . 'web/delete_' . md5(mt_rand()));
    }
}

require_once(DIR_SYSTEM . 'startup.php');

$registry = new Registry();
$loader = new Loader($registry);
$config = new Config();
$db = new DB(DB_DRIVER, DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$log = new Log($config->get('config_error_filename'));
$request = new Request();
$response = new Response();
$controller = new Front($registry);
$session = new Session();

//TODO: Generar archivo de configuraci�n txt y si no hay cambios recientes en la tabla, cargar este archivo para ahorrar tiempo y memoria
$query = $db->query("SELECT * FROM " . DB_PREFIX . "setting WHERE store_id = 0");
foreach ($query->rows as $setting) {
    $config->set($setting['key'], $setting['value']);
}
$response->addHeader('Content-Type: text/html; charset=utf-8');

// Language
$languages = array();
$query = $db->query("SELECT * FROM " . DB_PREFIX . "language");
foreach ($query->rows as $result) {
    $languages[$result['code']] = array(
        'language_id' => $result['language_id'],
        'name' => $result['name'],
        'code' => $result['code'],
        'locale' => $result['locale'],
        'directory' => $result['directory'],
        'filename' => $result['filename']
    );
}
$config->set('config_language_id', $languages[$config->get('config_admin_language')]['language_id']);
$language = new Language($languages[$config->get('config_admin_language')]['directory']);
$language->load($languages[$config->get('config_admin_language')]['filename']);

// Log 
$log = new Log($config->get('config_error_filename'));
$registry->set('log', $log);

$_SESSION['necotimestart'] = microtime(true);
function error_handler($errno, $errstr, $errfile, $errline) {
    global $log, $config;

    switch ($errno) {
        case E_NOTICE:
        case E_USER_NOTICE:
            $error = 'Notice';
            break;
        case E_WARNING:
        case E_USER_WARNING:
            $error = 'Warning';
            break;
        case E_ERROR:
        case E_USER_ERROR:
            $error = 'Fatal Error';
            break;
        default:
            $error = 'Unknown';
            break;
    }

    //echo '<b>' . $error . '</b>: ' . $errstr . ' in <b>' . $errfile . '</b> on line <b>' . $errline . '</b></br >';
    neco_logger($error . ': ' . $errstr . ' in ' . $errfile . ' on line ' . $errline);
    $log->write('PHP ' . $error . ':  ' . $errstr . ' in ' . $errfile . ' on line ' . $errline);
    return true;
}

function neco_logger($text) {
    if (!file_exists(dirname(__FILE__) .'/php_error_log.txt')) {
        $f = fopen (dirname(__FILE__) .'/php_error_log.txt', 'w+');
    } else {
        $fc = file_get_contents(dirname(__FILE__) .'/php_error_log.txt');
    }

    $time_start = $_SESSION['necotimestart'];
    $time_end = microtime(true);
    $ft = $text . " - ". ($time_end - $time_start) . "seg - ". (memory_get_peak_usage(true)/1024/1024) ."MB\n";
    $_SESSION['necotimestart'] = $time_end;

    //$ft .=  implode(" included\n", get_included_files());

    if ($f) {
        fwrite($f, $ft);
        fclose($f);
    } else {
        $f = fopen (dirname(__FILE__) .'/php_error_log.txt', 'w+');
        $fc .= $ft;
        fwrite($f, $fc);
        fclose($f);
    }
}

// Error Handler
//set_error_handler('error_handler');

// Application Map
require_once(DIR_APPLICATION . 'map.php');

// Login
$controller->addPreAction(new Action('common/home/login'));

// Permission
$controller->addPreAction(new Action('common/home/permission'));

// Router
if (isset($request->get['r'])) {
    $action = new Action($request->get['r']);
} else {
    $action = new Action('common/home');
}

// Dispatch
$controller->dispatch($action, new Action('error/not_found'));

// Output
$response->output();

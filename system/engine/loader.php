<?php

final class Loader {

    protected $registry;

    public function __construct($registry) {
        $this->registry = $registry;
    }

    public function __get($key) {
        return $this->registry->get($key);
    }

    public function __set($key, $value) {
        $this->registry->set($key, $value);
    }

    public function auto($route) {
        if (file_exists(DIR_SYSTEM . 'library' . DIRECTORY_SEPARATOR . $route . ".php")) {
            include_once(DIR_SYSTEM . 'library' . DIRECTORY_SEPARATOR . $route . ".php");
        } elseif (file_exists(DIR_SYSTEM . 'helper' . DIRECTORY_SEPARATOR . $route . ".php")) {
            include_once(DIR_SYSTEM . 'helper' . DIRECTORY_SEPARATOR . $route . ".php");
        } elseif (file_exists(DIR_APPLICATION . 'model' . DIRECTORY_SEPARATOR . $route . ".php")) {
            $this->model($route);
        } elseif (file_exists(DIR_APPLICATION . 'language' . DIRECTORY_SEPARATOR . $route . ".php")) {
            $this->language($route);
        }
    }

    public function library($library) {
        $file = DIR_SYSTEM . 'library/' . $library . '.php';

        if (file_exists($file)) {
            include_once($file);
        } else {
            exit('Error: Could not load library ' . $library . '!');
        }
    }

    public function model($model, $return = false) {
        $file = DIR_APPLICATION . 'model/' . $model . '.php';
        $class = 'Model' . preg_replace('/[^a-zA-Z0-9]/', '', $model);

        if (file_exists($file)) {
            include_once($file);
            $m = array_reverse(explode("/", $model));
            $this->registry->set('model' . ucfirst($m[0]), new $class($this->registry));
            $this->registry->set('model_' . str_replace('/', '_', $model), new $class($this->registry));
            if ($return) {
                return $this->registry->get('model' . ucfirst($m[0]));
            }
        } else {
            exit('Error: Could not load model ' . $model . '!');
        }
    }

    public function database($driver, $hostname, $username, $password, $database, $prefix = null, $charset = 'UTF8') {
        $file = DIR_SYSTEM . 'database/' . $driver . '.php';
        $class = 'Database' . preg_replace('/[^a-zA-Z0-9]/', '', $driver);

        if (file_exists($file)) {
            include_once($file);

            $this->registry->set(str_replace('/', '_', $driver), new $class());
        } else {
            exit('Error: Could not load database ' . $driver . '!');
        }
    }

    public function helper($helper) {
        $file = DIR_SYSTEM . 'helper/' . $helper . '.php';

        if (file_exists($file)) {
            include_once($file);
        } else {
            exit('Error: Could not load helper ' . $helper . '!');
        }
    }

    public function config($config) {
        $this->config->load($config);
    }

    public function language($language) {
        return $this->language->load($language);
    }

    public function moduleModel($model, $path) {
        $file = $path . '/model/' . $model . '.php';
        $class = 'Model' . preg_replace('/[^a-zA-Z0-9]/', '', $model);

        if (file_exists($file)) {
            include_once($file);
            $m = array_reverse(explode("/", $model));
            $this->registry->set('model' . ucfirst($m[0]), new $class($this->registry));
            $this->registry->set('model_' . str_replace('/', '_', $model), new $class($this->registry));
        } else {
            exit('Error: Could not load model ' . $model . '!');
        }
    }

    public function moduleLibrary($library, $path) {
        $file = $path . '/vendor/' . $library . '.php';

        if (file_exists($file)) {
            include_once($file);
        } else {
            exit('Error: Could not load library ' . $library . '!');
        }
    }

    public function moduleLanguage($language, $path) {
        return $this->language->load($language, $path);
    }
}

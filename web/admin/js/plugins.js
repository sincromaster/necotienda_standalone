// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
	(function() {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}
// Underscore.js
(function() {
	var n = this,
		t = n._,
		r = {},
		e = Array.prototype,
		u = Object.prototype,
		i = Function.prototype,
		a = e.push,
		o = e.slice,
		c = e.concat,
		l = u.toString,
		f = u.hasOwnProperty,
		s = e.forEach,
		p = e.map,
		v = e.reduce,
		h = e.reduceRight,
		g = e.filter,
		d = e.every,
		m = e.some,
		y = e.indexOf,
		b = e.lastIndexOf,
		x = Array.isArray,
		_ = Object.keys,
		j = i.bind,
		w = function(n) {
			return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.3";
	var A = w.each = w.forEach = function(n, t, e) {
		if (null != n) if (s && n.forEach === s) n.forEach(t, e);
		else if (n.length === +n.length) {
			for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
		} else
		for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
	};
	w.map = w.collect = function(n, t, r) {
		var e = [];
		return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
			e[e.length] = t.call(r, n, u, i)
		}), e)
	};
	var O = "Reduce of empty array with no initial value";
	w.reduce = w.foldl = w.inject = function(n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), v && n.reduce === v) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
		if (A(n, function(n, i, a) {
			u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
		}), !u) throw new TypeError(O);
		return r
	}, w.reduceRight = w.foldr = function(n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), h && n.reduceRight === h) return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
		var i = n.length;
		if (i !== +i) {
			var a = w.keys(n);
			i = a.length
		}
		if (A(n, function(o, c, l) {
			c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
		}), !u) throw new TypeError(O);
		return r
	}, w.find = w.detect = function(n, t, r) {
		var e;
		return E(n, function(n, u, i) {
			return t.call(r, n, u, i) ? (e = n, !0) : void 0
		}), e
	}, w.filter = w.select = function(n, t, r) {
		var e = [];
		return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
			t.call(r, n, u, i) && (e[e.length] = n)
		}), e)
	}, w.reject = function(n, t, r) {
		return w.filter(n, function(n, e, u) {
			return !t.call(r, n, e, u)
		}, r)
	}, w.every = w.all = function(n, t, e) {
		t || (t = w.identity);
		var u = !0;
		return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
			return (u = u && t.call(e, n, i, a)) ? void 0 : r
		}), !! u)
	};
	var E = w.some = w.any = function(n, t, e) {
		t || (t = w.identity);
		var u = !1;
		return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
			return u || (u = t.call(e, n, i, a)) ? r : void 0
		}), !! u)
	};
	w.contains = w.include = function(n, t) {
		return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : E(n, function(n) {
			return n === t
		})
	}, w.invoke = function(n, t) {
		var r = o.call(arguments, 2);
		return w.map(n, function(n) {
			return (w.isFunction(t) ? t : n[t]).apply(n, r)
		})
	}, w.pluck = function(n, t) {
		return w.map(n, function(n) {
			return n[t]
		})
	}, w.where = function(n, t) {
		return w.isEmpty(t) ? [] : w.filter(n, function(n) {
			for (var r in t) if (t[r] !== n[r]) return !1;
			return !0
		})
	}, w.max = function(n, t, r) {
		if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
		if (!t && w.isEmpty(n)) return -1 / 0;
		var e = {
			computed: -1 / 0,
			value: -1 / 0
		};
		return A(n, function(n, u, i) {
			var a = t ? t.call(r, n, u, i) : n;
			a >= e.computed && (e = {
				value: n,
				computed: a
			})
		}), e.value
	}, w.min = function(n, t, r) {
		if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
		if (!t && w.isEmpty(n)) return 1 / 0;
		var e = {
			computed: 1 / 0,
			value: 1 / 0
		};
		return A(n, function(n, u, i) {
			var a = t ? t.call(r, n, u, i) : n;
			e.computed > a && (e = {
				value: n,
				computed: a
			})
		}), e.value
	}, w.shuffle = function(n) {
		var t, r = 0,
			e = [];
		return A(n, function(n) {
			t = w.random(r++), e[r - 1] = e[t], e[t] = n
		}), e
	};
	var F = function(n) {
		return w.isFunction(n) ? n : function(t) {
			return t[n]
		}
	};
	w.sortBy = function(n, t, r) {
		var e = F(t);
		return w.pluck(w.map(n, function(n, t, u) {
			return {
				value: n,
				index: t,
				criteria: e.call(r, n, t, u)
			}
		}).sort(function(n, t) {
			var r = n.criteria,
				e = t.criteria;
			if (r !== e) {
				if (r > e || void 0 === r) return 1;
				if (e > r || void 0 === e) return -1
			}
			return n.index < t.index ? -1 : 1
		}), "value")
	};
	var k = function(n, t, r, e) {
		var u = {},
			i = F(t || w.identity);
		return A(n, function(t, a) {
			var o = i.call(r, t, a, n);
			e(u, o, t)
		}), u
	};
	w.groupBy = function(n, t, r) {
		return k(n, t, r, function(n, t, r) {
			(w.has(n, t) ? n[t] : n[t] = []).push(r)
		})
	}, w.countBy = function(n, t, r) {
		return k(n, t, r, function(n, t) {
			w.has(n, t) || (n[t] = 0), n[t]++
		})
	}, w.sortedIndex = function(n, t, r, e) {
		r = null == r ? w.identity : F(r);
		for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
			var o = i + a >>> 1;
			u > r.call(e, n[o]) ? i = o + 1 : a = o
		}
		return i
	}, w.toArray = function(n) {
		return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
	}, w.size = function(n) {
		return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
	}, w.first = w.head = w.take = function(n, t, r) {
		return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
	}, w.initial = function(n, t, r) {
		return o.call(n, 0, n.length - (null == t || r ? 1 : t))
	}, w.last = function(n, t, r) {
		return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
	}, w.rest = w.tail = w.drop = function(n, t, r) {
		return o.call(n, null == t || r ? 1 : t)
	}, w.compact = function(n) {
		return w.filter(n, w.identity)
	};
	var R = function(n, t, r) {
		return A(n, function(n) {
			w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
		}), r
	};
	w.flatten = function(n, t) {
		return R(n, t, [])
	}, w.without = function(n) {
		return w.difference(n, o.call(arguments, 1))
	}, w.uniq = w.unique = function(n, t, r, e) {
		w.isFunction(t) && (e = r, r = t, t = !1);
		var u = r ? w.map(n, r, e) : n,
			i = [],
			a = [];
		return A(u, function(r, e) {
			(t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
		}), i
	}, w.union = function() {
		return w.uniq(c.apply(e, arguments))
	}, w.intersection = function(n) {
		var t = o.call(arguments, 1);
		return w.filter(w.uniq(n), function(n) {
			return w.every(t, function(t) {
				return w.indexOf(t, n) >= 0
			})
		})
	}, w.difference = function(n) {
		var t = c.apply(e, o.call(arguments, 1));
		return w.filter(n, function(n) {
			return !w.contains(t, n)
		})
	}, w.zip = function() {
		for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
		return r
	}, w.object = function(n, t) {
		if (null == n) return {};
		for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, w.indexOf = function(n, t, r) {
		if (null == n) return -1;
		var e = 0,
			u = n.length;
		if (r) {
			if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
			e = 0 > r ? Math.max(0, u + r) : r
		}
		if (y && n.indexOf === y) return n.indexOf(t, r);
		for (; u > e; e++) if (n[e] === t) return e;
		return -1
	}, w.lastIndexOf = function(n, t, r) {
		if (null == n) return -1;
		var e = null != r;
		if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
		for (var u = e ? r : n.length; u--;) if (n[u] === t) return u;
		return -1
	}, w.range = function(n, t, r) {
		1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
		return i
	};
	var I = function() {};
	w.bind = function(n, t) {
		var r, e;
		if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
		if (!w.isFunction(n)) throw new TypeError;
		return r = o.call(arguments, 2), e = function() {
			if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
			I.prototype = n.prototype;
			var u = new I;
			I.prototype = null;
			var i = n.apply(u, r.concat(o.call(arguments)));
			return Object(i) === i ? i : u
		}
	}, w.bindAll = function(n) {
		var t = o.call(arguments, 1);
		return 0 == t.length && (t = w.functions(n)), A(t, function(t) {
			n[t] = w.bind(n[t], n)
		}), n
	}, w.memoize = function(n, t) {
		var r = {};
		return t || (t = w.identity), function() {
			var e = t.apply(this, arguments);
			return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
		}
	}, w.delay = function(n, t) {
		var r = o.call(arguments, 2);
		return setTimeout(function() {
			return n.apply(null, r)
		}, t)
	}, w.defer = function(n) {
		return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
	}, w.throttle = function(n, t) {
		var r, e, u, i, a = 0,
			o = function() {
				a = new Date, u = null, i = n.apply(r, e)
			};
		return function() {
			var c = new Date,
				l = t - (c - a);
			return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
		}
	}, w.debounce = function(n, t, r) {
		var e, u;
		return function() {
			var i = this,
				a = arguments,
				o = function() {
					e = null, r || (u = n.apply(i, a))
				},
				c = r && !e;
			return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
		}
	}, w.once = function(n) {
		var t, r = !1;
		return function() {
			return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
		}
	}, w.wrap = function(n, t) {
		return function() {
			var r = [n];
			return a.apply(r, arguments), t.apply(this, r)
		}
	}, w.compose = function() {
		var n = arguments;
		return function() {
			for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
			return t[0]
		}
	}, w.after = function(n, t) {
		return 0 >= n ? t() : function() {
			return 1 > --n ? t.apply(this, arguments) : void 0
		}
	}, w.keys = _ ||
	function(n) {
		if (n !== Object(n)) throw new TypeError("Invalid object");
		var t = [];
		for (var r in n) w.has(n, r) && (t[t.length] = r);
		return t
	}, w.values = function(n) {
		var t = [];
		for (var r in n) w.has(n, r) && t.push(n[r]);
		return t
	}, w.pairs = function(n) {
		var t = [];
		for (var r in n) w.has(n, r) && t.push([r, n[r]]);
		return t
	}, w.invert = function(n) {
		var t = {};
		for (var r in n) w.has(n, r) && (t[n[r]] = r);
		return t
	}, w.functions = w.methods = function(n) {
		var t = [];
		for (var r in n) w.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, w.extend = function(n) {
		return A(o.call(arguments, 1), function(t) {
			if (t) for (var r in t) n[r] = t[r]
		}), n
	}, w.pick = function(n) {
		var t = {},
			r = c.apply(e, o.call(arguments, 1));
		return A(r, function(r) {
			r in n && (t[r] = n[r])
		}), t
	}, w.omit = function(n) {
		var t = {},
			r = c.apply(e, o.call(arguments, 1));
		for (var u in n) w.contains(r, u) || (t[u] = n[u]);
		return t
	}, w.defaults = function(n) {
		return A(o.call(arguments, 1), function(t) {
			if (t) for (var r in t) null == n[r] && (n[r] = t[r])
		}), n
	}, w.clone = function(n) {
		return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
	}, w.tap = function(n, t) {
		return t(n), n
	};
	var S = function(n, t, r, e) {
		if (n === t) return 0 !== n || 1 / n == 1 / t;
		if (null == n || null == t) return n === t;
		n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
		var u = l.call(n);
		if (u != l.call(t)) return !1;
		switch (u) {
		case "[object String]":
			return n == t + "";
		case "[object Number]":
			return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
		case "[object Date]":
		case "[object Boolean]":
			return +n == +t;
		case "[object RegExp]":
			return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
		}
		if ("object" != typeof n || "object" != typeof t) return !1;
		for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
		r.push(n), e.push(t);
		var a = 0,
			o = !0;
		if ("[object Array]" == u) {
			if (a = n.length, o = a == t.length) for (; a-- && (o = S(n[a], t[a], r, e)););
		} else {
			var c = n.constructor,
				f = t.constructor;
			if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
			for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) break;
			if (o) {
				for (s in t) if (w.has(t, s) && !a--) break;
				o = !a
			}
		}
		return r.pop(), e.pop(), o
	};
	w.isEqual = function(n, t) {
		return S(n, t, [], [])
	}, w.isEmpty = function(n) {
		if (null == n) return !0;
		if (w.isArray(n) || w.isString(n)) return 0 === n.length;
		for (var t in n) if (w.has(n, t)) return !1;
		return !0
	}, w.isElement = function(n) {
		return !(!n || 1 !== n.nodeType)
	}, w.isArray = x ||
	function(n) {
		return "[object Array]" == l.call(n)
	}, w.isObject = function(n) {
		return n === Object(n)
	}, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
		w["is" + n] = function(t) {
			return l.call(t) == "[object " + n + "]"
		}
	}), w.isArguments(arguments) || (w.isArguments = function(n) {
		return !(!n || !w.has(n, "callee"))
	}), w.isFunction = function(n) {
		return "function" == typeof n
	}, w.isFinite = function(n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, w.isNaN = function(n) {
		return w.isNumber(n) && n != +n
	}, w.isBoolean = function(n) {
		return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
	}, w.isNull = function(n) {
		return null === n
	}, w.isUndefined = function(n) {
		return void 0 === n
	}, w.has = function(n, t) {
		return f.call(n, t)
	}, w.noConflict = function() {
		return n._ = t, this
	}, w.identity = function(n) {
		return n
	}, w.times = function(n, t, r) {
		for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
		return e
	}, w.random = function(n, t) {
		return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
	};
	var T = {
		escape: {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"/": "&#x2F;"
		}
	};
	T.unescape = w.invert(T.escape);
	var M = {
		escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
		unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
	};
	w.each(["escape", "unescape"], function(n) {
		w[n] = function(t) {
			return null == t ? "" : ("" + t).replace(M[n], function(t) {
				return T[n][t]
			})
		}
	}), w.result = function(n, t) {
		if (null == n) return null;
		var r = n[t];
		return w.isFunction(r) ? r.call(n) : r
	}, w.mixin = function(n) {
		A(w.functions(n), function(t) {
			var r = w[t] = n[t];
			w.prototype[t] = function() {
				var n = [this._wrapped];
				return a.apply(n, arguments), z.call(this, r.apply(w, n))
			}
		})
	};
	var N = 0;
	w.uniqueId = function(n) {
		var t = "" + ++N;
		return n ? n + t : t
	}, w.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var q = /(.)^/,
		B = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"	": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	w.template = function(n, t, r) {
		r = w.defaults({}, r, w.templateSettings);
		var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
			u = 0,
			i = "__p+='";
		n.replace(e, function(t, r, e, a, o) {
			return i += n.slice(u, o).replace(D, function(n) {
				return "\\" + B[n]
			}), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t
		}), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
		try {
			var a = Function(r.variable || "obj", "_", i)
		} catch (o) {
			throw o.source = i, o
		}
		if (t) return a(t, w);
		var c = function(n) {
			return a.call(this, n, w)
		};
		return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
	}, w.chain = function(n) {
		return w(n).chain()
	};
	var z = function(n) {
		return this._chain ? w(n).chain() : n
	};
	w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
		var t = e[n];
		w.prototype[n] = function() {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
		}
	}), A(["concat", "join", "slice"], function(n) {
		var t = e[n];
		w.prototype[n] = function() {
			return z.call(this, t.apply(this._wrapped, arguments))
		}
	}), w.extend(w.prototype, {
		chain: function() {
			return this._chain = !0, this
		},
		value: function() {
			return this._wrapped
		}
	})
}).call(this);
// Backbone.js 0.9.2
// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function() {
	var l = this,
		y = l.Backbone,
		z = Array.prototype.slice,
		A = Array.prototype.splice,
		g;
	g = "undefined" !== typeof exports ? exports : l.Backbone = {};
	g.VERSION = "0.9.2";
	var f = l._;
	!f && "undefined" !== typeof require && (f = require("underscore"));
	var i = l.jQuery || l.Zepto || l.ender;
	g.setDomLibrary = function(a) {
		i = a
	};
	g.noConflict = function() {
		l.Backbone = y;
		return this
	};
	g.emulateHTTP = !1;
	g.emulateJSON = !1;
	var p = /\s+/,
		k = g.Events = {
			on: function(a, b, c) {
				var d, e, f, g, j;
				if (!b) return this;
				a = a.split(p);
				for (d = this._callbacks || (this._callbacks = {}); e = a.shift();) f = (j = d[e]) ? j.tail : {}, f.next = g = {}, f.context = c, f.callback = b, d[e] = {
					tail: g,
					next: j ? j.next : f
				};
				return this
			},
			off: function(a, b, c) {
				var d, e, h, g, j, q;
				if (e = this._callbacks) {
					if (!a && !b && !c) return delete this._callbacks, this;
					for (a = a ? a.split(p) : f.keys(e); d = a.shift();) if (h = e[d], delete e[d], h && (b || c)) for (g = h.tail;
					(h = h.next) !== g;) if (j = h.callback, q = h.context, b && j !== b || c && q !== c) this.on(d, j, q);
					return this
				}
			},
			trigger: function(a) {
				var b, c, d, e, f, g;
				if (!(d = this._callbacks)) return this;
				f = d.all;
				a = a.split(p);
				for (g =
				z.call(arguments, 1); b = a.shift();) {
					if (c = d[b]) for (e = c.tail;
					(c = c.next) !== e;) c.callback.apply(c.context || this, g);
					if (c = f) {
						e = c.tail;
						for (b = [b].concat(g);
						(c = c.next) !== e;) c.callback.apply(c.context || this, b)
					}
				}
				return this
			}
		};
	k.bind = k.on;
	k.unbind = k.off;
	var o = g.Model = function(a, b) {
		var c;
		a || (a = {});
		b && b.parse && (a = this.parse(a));
		if (c = n(this, "defaults")) a = f.extend({}, c, a);
		b && b.collection && (this.collection = b.collection);
		this.attributes = {};
		this._escapedAttributes = {};
		this.cid = f.uniqueId("c");
		this.changed = {};
		this._silent = {};
		this._pending = {};
		this.set(a, {
			silent: !0
		});
		this.changed = {};
		this._silent = {};
		this._pending = {};
		this._previousAttributes = f.clone(this.attributes);
		this.initialize.apply(this, arguments)
	};
	f.extend(o.prototype, k, {
		changed: null,
		_silent: null,
		_pending: null,
		idAttribute: "id",
		initialize: function() {},
		toJSON: function() {
			return f.clone(this.attributes)
		},
		get: function(a) {
			return this.attributes[a]
		},
		escape: function(a) {
			var b;
			if (b = this._escapedAttributes[a]) return b;
			b = this.get(a);
			return this._escapedAttributes[a] = f.escape(null == b ? "" : "" + b)
		},
		has: function(a) {
			return null != this.get(a)
		},
		set: function(a, b, c) {
			var d, e;
			f.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b);
			c || (c = {});
			if (!d) return this;
			d instanceof o && (d = d.attributes);
			if (c.unset) for (e in d) d[e] = void 0;
			if (!this._validate(d, c)) return !1;
			this.idAttribute in d && (this.id = d[this.idAttribute]);
			var b = c.changes = {},
				h = this.attributes,
				g = this._escapedAttributes,
				j = this._previousAttributes || {};
			for (e in d) {
				a = d[e];
				if (!f.isEqual(h[e], a) || c.unset && f.has(h, e)) delete g[e], (c.silent ? this._silent : b)[e] = !0;
				c.unset ? delete h[e] : h[e] = a;
				!f.isEqual(j[e], a) || f.has(h, e) != f.has(j, e) ? (this.changed[e] = a, c.silent || (this._pending[e] = !0)) : (delete this.changed[e], delete this._pending[e])
			}
			c.silent || this.change(c);
			return this
		},
		unset: function(a, b) {
			(b || (b = {})).unset = !0;
			return this.set(a, null, b)
		},
		clear: function(a) {
			(a || (a = {})).unset = !0;
			return this.set(f.clone(this.attributes), a)
		},
		fetch: function(a) {
			var a = a ? f.clone(a) : {},
				b = this,
				c = a.success;
			a.success = function(d, e, f) {
				if (!b.set(b.parse(d, f), a)) return !1;
				c && c(b, d)
			};
			a.error = g.wrapError(a.error, b, a);
			return (this.sync || g.sync).call(this, "read", this, a)
		},
		save: function(a, b, c) {
			var d, e;
			f.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b);
			c = c ? f.clone(c) : {};
			if (c.wait) {
				if (!this._validate(d, c)) return !1;
				e = f.clone(this.attributes)
			}
			a = f.extend({}, c, {
				silent: !0
			});
			if (d && !this.set(d, c.wait ? a : c)) return !1;
			var h = this,
				i = c.success;
			c.success = function(a, b, e) {
				b = h.parse(a, e);
				if (c.wait) {
					delete c.wait;
					b = f.extend(d || {}, b)
				}
				if (!h.set(b, c)) return false;
				i ? i(h, a) : h.trigger("sync", h, a, c)
			};
			c.error = g.wrapError(c.error, h, c);
			b = this.isNew() ? "create" : "update";
			b = (this.sync || g.sync).call(this, b, this, c);
			c.wait && this.set(e, a);
			return b
		},
		destroy: function(a) {
			var a = a ? f.clone(a) : {},
				b = this,
				c = a.success,
				d = function() {
					b.trigger("destroy", b, b.collection, a)
				};
			if (this.isNew()) return d(), !1;
			a.success = function(e) {
				a.wait && d();
				c ? c(b, e) : b.trigger("sync", b, e, a)
			};
			a.error = g.wrapError(a.error, b, a);
			var e = (this.sync || g.sync).call(this, "delete", this, a);
			a.wait || d();
			return e
		},
		url: function() {
			var a = n(this, "urlRoot") || n(this.collection, "url") || t();
			return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
		},
		parse: function(a) {
			return a
		},
		clone: function() {
			return new this.constructor(this.attributes)
		},
		isNew: function() {
			return null == this.id
		},
		change: function(a) {
			a || (a = {});
			var b = this._changing;
			this._changing = !0;
			for (var c in this._silent) this._pending[c] = !0;
			var d = f.extend({}, a.changes, this._silent);
			this._silent = {};
			for (c in d) this.trigger("change:" + c, this, this.get(c), a);
			if (b) return this;
			for (; !f.isEmpty(this._pending);) {
				this._pending = {};
				this.trigger("change", this, a);
				for (c in this.changed)!this._pending[c] && !this._silent[c] && delete this.changed[c];
				this._previousAttributes = f.clone(this.attributes)
			}
			this._changing = !1;
			return this
		},
		hasChanged: function(a) {
			return !arguments.length ? !f.isEmpty(this.changed) : f.has(this.changed, a)
		},
		changedAttributes: function(a) {
			if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
			var b, c = !1,
				d = this._previousAttributes,
				e;
			for (e in a) if (!f.isEqual(d[e], b = a[e]))(c || (c = {}))[e] = b;
			return c
		},
		previous: function(a) {
			return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[a]
		},
		previousAttributes: function() {
			return f.clone(this._previousAttributes)
		},
		isValid: function() {
			return !this.validate(this.attributes)
		},
		_validate: function(a, b) {
			if (b.silent || !this.validate) return !0;
			var a = f.extend({}, this.attributes, a),
				c = this.validate(a, b);
			if (!c) return !0;
			b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b);
			return !1
		}
	});
	var r = g.Collection = function(a, b) {
		b || (b = {});
		b.model && (this.model = b.model);
		b.comparator && (this.comparator = b.comparator);
		this._reset();
		this.initialize.apply(this, arguments);
		a && this.reset(a, {
			silent: !0,
			parse: b.parse
		})
	};
	f.extend(r.prototype, k, {
		model: o,
		initialize: function() {},
		toJSON: function(a) {
			return this.map(function(b) {
				return b.toJSON(a)
			})
		},
		add: function(a, b) {
			var c, d, e, g, i, j = {},
				k = {},
				l = [];
			b || (b = {});
			a = f.isArray(a) ? a.slice() : [a];
			c = 0;
			for (d = a.length; c < d; c++) {
				if (!(e = a[c] = this._prepareModel(a[c], b))) throw Error("Can't add an invalid model to a collection");
				g = e.cid;
				i = e.id;
				j[g] || this._byCid[g] || null != i && (k[i] || this._byId[i]) ? l.push(c) : j[g] = k[i] = e
			}
			for (c = l.length; c--;) a.splice(l[c], 1);
			c = 0;
			for (d = a.length; c < d; c++)(e = a[c]).on("all", this._onModelEvent, this), this._byCid[e.cid] = e, null != e.id && (this._byId[e.id] = e);
			this.length += d;
			A.apply(this.models, [null != b.at ? b.at : this.models.length, 0].concat(a));
			this.comparator && this.sort({
				silent: !0
			});
			if (b.silent) return this;
			c = 0;
			for (d = this.models.length; c < d; c++) if (j[(e = this.models[c]).cid]) b.index = c, e.trigger("add", e, this, b);
			return this
		},
		remove: function(a, b) {
			var c, d, e, g;
			b || (b = {});
			a = f.isArray(a) ? a.slice() : [a];
			c = 0;
			for (d = a.length; c < d; c++) if (g = this.getByCid(a[c]) || this.get(a[c])) delete this._byId[g.id], delete this._byCid[g.cid], e = this.indexOf(g), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, g.trigger("remove", g, this, b)), this._removeReference(g);
			return this
		},
		push: function(a, b) {
			a = this._prepareModel(a, b);
			this.add(a, b);
			return a
		},
		pop: function(a) {
			var b = this.at(this.length - 1);
			this.remove(b, a);
			return b
		},
		unshift: function(a, b) {
			a = this._prepareModel(a, b);
			this.add(a, f.extend({
				at: 0
			}, b));
			return a
		},
		shift: function(a) {
			var b = this.at(0);
			this.remove(b, a);
			return b
		},
		get: function(a) {
			return null == a ? void 0 : this._byId[null != a.id ? a.id : a]
		},
		getByCid: function(a) {
			return a && this._byCid[a.cid || a]
		},
		at: function(a) {
			return this.models[a]
		},
		where: function(a) {
			return f.isEmpty(a) ? [] : this.filter(function(b) {
				for (var c in a) if (a[c] !== b.get(c)) return !1;
				return !0
			})
		},
		sort: function(a) {
			a || (a = {});
			if (!this.comparator) throw Error("Cannot sort a set without a comparator");
			var b = f.bind(this.comparator, this);
			1 == this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b);
			a.silent || this.trigger("reset", this, a);
			return this
		},
		pluck: function(a) {
			return f.map(this.models, function(b) {
				return b.get(a)
			})
		},
		reset: function(a, b) {
			a || (a = []);
			b || (b = {});
			for (var c = 0, d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
			this._reset();
			this.add(a, f.extend({
				silent: !0
			}, b));
			b.silent || this.trigger("reset", this, b);
			return this
		},
		fetch: function(a) {
			a = a ? f.clone(a) : {};
			void 0 === a.parse && (a.parse = !0);
			var b = this,
				c = a.success;
			a.success = function(d, e, f) {
				b[a.add ? "add" : "reset"](b.parse(d, f), a);
				c && c(b, d)
			};
			a.error = g.wrapError(a.error, b, a);
			return (this.sync || g.sync).call(this, "read", this, a)
		},
		create: function(a, b) {
			var c = this,
				b = b ? f.clone(b) : {},
				a = this._prepareModel(a, b);
			if (!a) return !1;
			b.wait || c.add(a, b);
			var d = b.success;
			b.success = function(e, f) {
				b.wait && c.add(e, b);
				d ? d(e, f) : e.trigger("sync", a, f, b)
			};
			a.save(null, b);
			return a
		},
		parse: function(a) {
			return a
		},
		chain: function() {
			return f(this.models).chain()
		},
		_reset: function() {
			this.length = 0;
			this.models = [];
			this._byId = {};
			this._byCid = {}
		},
		_prepareModel: function(a, b) {
			b || (b = {});
			a instanceof o ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
			return a
		},
		_removeReference: function(a) {
			this == a.collection && delete a.collection;
			a.off("all", this._onModelEvent, this)
		},
		_onModelEvent: function(a, b, c, d) {
			("add" == a || "remove" == a) && c != this || ("destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments))
		}
	});
	f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","), function(a) {
		r.prototype[a] = function() {
			return f[a].apply(f, [this.models].concat(f.toArray(arguments)))
		}
	});
	var u = g.Router = function(a) {
		a || (a = {});
		a.routes && (this.routes = a.routes);
		this._bindRoutes();
		this.initialize.apply(this, arguments)
	},
		B = /:\w+/g,
		C = /\*\w+/g,
		D = /[-[\]{}()+?.,\\^$|#\s]/g;
	f.extend(u.prototype, k, {
		initialize: function() {},
		route: function(a, b, c) {
			g.history || (g.history = new m);
			f.isRegExp(a) || (a = this._routeToRegExp(a));
			c || (c = this[b]);
			g.history.route(a, f.bind(function(d) {
				d = this._extractParameters(a, d);
				c && c.apply(this, d);
				this.trigger.apply(this, ["route:" + b].concat(d));
				g.history.trigger("route", this, b, d)
			}, this));
			return this
		},
		navigate: function(a, b) {
			g.history.navigate(a, b)
		},
		_bindRoutes: function() {
			if (this.routes) {
				var a = [],
					b;
				for (b in this.routes) a.unshift([b, this.routes[b]]);
				b = 0;
				for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
			}
		},
		_routeToRegExp: function(a) {
			a = a.replace(D, "\\$&").replace(B, "([^/]+)").replace(C, "(.*?)");
			return RegExp("^" + a + "$")
		},
		_extractParameters: function(a, b) {
			return a.exec(b).slice(1)
		}
	});
	var m = g.History = function() {
		this.handlers = [];
		f.bindAll(this, "checkUrl")
	},
		s = /^[#\/]/,
		E = /msie [\w.]+/;
	m.started = !1;
	f.extend(m.prototype, k, {
		interval: 50,
		getHash: function(a) {
			return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ? a[1] : ""
		},
		getFragment: function(a, b) {
			if (null == a) if (this._hasPushState || b) {
				var a = window.location.pathname,
					c = window.location.search;
				c && (a += c)
			} else a = this.getHash();
			a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
			return a.replace(s, "")
		},
		start: function(a) {
			if (m.started) throw Error("Backbone.history has already been started");
			m.started = !0;
			this.options = f.extend({}, {
				root: "/"
			}, this.options, a);
			this._wantsHashChange = !1 !== this.options.hashChange;
			this._wantsPushState = !! this.options.pushState;
			this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
			var a = this.getFragment(),
				b = document.documentMode;
			if (b = E.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a);
			this._hasPushState ? i(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? i(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
			this.fragment = a;
			a = window.location;
			b = a.pathname == this.options.root;
			if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
			this._wantsPushState && this._hasPushState && b && a.hash && (this.fragment = this.getHash().replace(s, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
			if (!this.options.silent) return this.loadUrl()
		},
		stop: function() {
			i(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
			clearInterval(this._checkUrlInterval);
			m.started = !1
		},
		route: function(a, b) {
			this.handlers.unshift({
				route: a,
				callback: b
			})
		},
		checkUrl: function() {
			var a = this.getFragment();
			a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
			if (a == this.fragment) return !1;
			this.iframe && this.navigate(a);
			this.loadUrl() || this.loadUrl(this.getHash())
		},
		loadUrl: function(a) {
			var b = this.fragment = this.getFragment(a);
			return f.any(this.handlers, function(a) {
				if (a.route.test(b)) return a.callback(b), !0
			})
		},
		navigate: function(a, b) {
			if (!m.started) return !1;
			if (!b || !0 === b) b = {
				trigger: b
			};
			var c = (a || "").replace(s, "");
			this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
		},
		_updateHash: function(a, b, c) {
			c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
		}
	});
	var v = g.View = function(a) {
		this.cid = f.uniqueId("view");
		this._configure(a || {});
		this._ensureElement();
		this.initialize.apply(this, arguments);
		this.delegateEvents()
	},
		F = /^(\S+)\s*(.*)$/,
		w = "model,collection,el,id,attributes,className,tagName".split(",");
	f.extend(v.prototype, k, {
		tagName: "div",
		$: function(a) {
			return this.$el.find(a)
		},
		initialize: function() {},
		render: function() {
			return this
		},
		remove: function() {
			this.$el.remove();
			return this
		},
		make: function(a, b, c) {
			a = document.createElement(a);
			b && i(a).attr(b);
			c && i(a).html(c);
			return a
		},
		setElement: function(a, b) {
			this.$el && this.undelegateEvents();
			this.$el = a instanceof i ? a : i(a);
			this.el = this.$el[0];
			!1 !== b && this.delegateEvents();
			return this
		},
		delegateEvents: function(a) {
			if (a || (a = n(this, "events"))) {
				this.undelegateEvents();
				for (var b in a) {
					var c = a[b];
					f.isFunction(c) || (c = this[a[b]]);
					if (!c) throw Error('Method "' + a[b] + '" does not exist');
					var d = b.match(F),
						e = d[1],
						d = d[2],
						c = f.bind(c, this),
						e = e + (".delegateEvents" + this.cid);
					"" === d ? this.$el.bind(e, c) : this.$el.delegate(d, e, c)
				}
			}
		},
		undelegateEvents: function() {
			this.$el.unbind(".delegateEvents" + this.cid)
		},
		_configure: function(a) {
			this.options && (a = f.extend({}, this.options, a));
			for (var b = 0, c = w.length; b < c; b++) {
				var d = w[b];
				a[d] && (this[d] = a[d])
			}
			this.options = a
		},
		_ensureElement: function() {
			if (this.el) this.setElement(this.el, !1);
			else {
				var a = n(this, "attributes") || {};
				this.id && (a.id = this.id);
				this.className && (a["class"] = this.className);
				this.setElement(this.make(this.tagName, a), !1)
			}
		}
	});
	o.extend = r.extend = u.extend = v.extend = function(a, b) {
		var c = G(this, a, b);
		c.extend = this.extend;
		return c
	};
	var H = {
		create: "POST",
		update: "PUT",
		"delete": "DELETE",
		read: "GET"
	};
	g.sync = function(a, b, c) {
		var d = H[a];
		c || (c = {});
		var e = {
			type: d,
			dataType: "json"
		};
		c.url || (e.url = n(b, "url") || t());
		if (!c.data && b && ("create" == a || "update" == a)) e.contentType = "application/json", e.data = JSON.stringify(b.toJSON());
		g.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {
			model: e.data
		} : {});
		if (g.emulateHTTP && ("PUT" === d || "DELETE" === d)) g.emulateJSON && (e.data._method = d), e.type = "POST", e.beforeSend = function(a) {
			a.setRequestHeader("X-HTTP-Method-Override", d)
		};
		"GET" !== e.type && !g.emulateJSON && (e.processData = !1);
		return i.ajax(f.extend(e, c))
	};
	g.wrapError = function(a, b, c) {
		return function(d, e) {
			e = d === b ? e : d;
			a ? a(b, e, c) : b.trigger("error", b, e, c)
		}
	};
	var x = function() {},
		G = function(a, b, c) {
			var d;
			d = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
				a.apply(this, arguments)
			};
			f.extend(d, a);
			x.prototype = a.prototype;
			d.prototype = new x;
			b && f.extend(d.prototype, b);
			c && f.extend(d, c);
			d.prototype.constructor = d;
			d.__super__ = a.prototype;
			return d
		},
		n = function(a, b) {
			return !a || !a[b] ? null : f.isFunction(a[b]) ? a[b]() : a[b]
		},
		t = function() {
			throw Error('A "url" property or function must be specified');
		}
}).call(this);
/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(e, t) {
	function i(t, n) {
		var r, i, o, u = t.nodeName.toLowerCase();
		return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !! o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
	}
	function s(t) {
		return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
			return e.css(this, "visibility") === "hidden"
		}).length
	}
	var n = 0,
		r = /^ui-id-\d+$/;
	e.ui = e.ui || {};
	if (e.ui.version) return;
	e.extend(e.ui, {
		version: "1.9.1",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		_focus: e.fn.focus,
		focus: function(t, n) {
			return typeof t == "number" ? this.each(function() {
				var r = this;
				setTimeout(function() {
					e(r).focus(), n && n.call(r)
				}, t)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var t;
			return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : t = this.parents().filter(function() {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function(n) {
			if (n !== t) return this.css("zIndex", n);
			if (this.length) {
				var r = e(this[0]),
					i, s;
				while (r.length && r[0] !== document) {
					i = r.css("position");
					if (i === "absolute" || i === "relative" || i === "fixed") {
						s = parseInt(r.css("zIndex"), 10);
						if (!isNaN(s) && s !== 0) return s
					}
					r = r.parent()
				}
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++n)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				r.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
		function u(t, n, r, s) {
			return e.each(i, function() {
				n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), n
		}
		var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
			s = r.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + r] = function(n) {
			return n === t ? o["inner" + r].call(this) : this.each(function() {
				e(this).css(s, u(this, n) + "px")
			})
		}, e.fn["outer" + r] = function(t, n) {
			return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
				e(this).css(s, u(this, t, !0, n) + "px")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(n) {
				return !!e.data(n, t)
			}
		}) : function(t, n, r) {
			return !!e.data(t, r[3])
		},
		focusable: function(t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function(t) {
			var n = e.attr(t, "tabindex"),
				r = isNaN(n);
			return (r || n >= 0) && i(t, !r)
		}
	}), e(function() {
		var t = document.body,
			n = t.appendChild(n = document.createElement("div"));
		n.offsetHeight, e.extend(n.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		}), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
	}), function() {
		var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
		e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
	}(), e.fn.extend({
		disableSelection: function() {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
				e.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function(t, n, r) {
				var i, s = e.ui[t].prototype;
				for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
			},
			call: function(e, t, n) {
				var r, i = e.plugins[t];
				if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
				for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
			}
		},
		contains: e.contains,
		hasScroll: function(t, n) {
			if (e(t).css("overflow") === "hidden") return !1;
			var r = n && n === "left" ? "scrollLeft" : "scrollTop",
				i = !1;
			return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
		},
		isOverAxis: function(e, t, n) {
			return e > t && e < t + n
		},
		isOver: function(t, n, r, i, s, o) {
			return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
		}
	})
})(jQuery);
(function(e, t) {
	var n = 0,
		r = Array.prototype.slice,
		i = e.cleanData;
	e.cleanData = function(t) {
		for (var n = 0, r;
		(r = t[n]) != null; n++) try {
			e(r).triggerHandler("remove")
		} catch (s) {}
		i(t)
	}, e.widget = function(t, n, r) {
		var i, s, o, u, a = t.split(".")[0];
		t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
			return !!e.data(t, i)
		}, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function(e, t) {
			if (!this._createWidget) return new o(e, t);
			arguments.length && this._createWidget(e, t)
		}, e.extend(o, s, {
			version: r.version,
			_proto: e.extend({}, r),
			_childConstructors: []
		}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, i) {
			e.isFunction(i) && (r[t] = function() {
				var e = function() {
					return n.prototype[t].apply(this, arguments)
				},
					r = function(e) {
						return n.prototype[t].apply(this, e)
					};
				return function() {
					var t = this._super,
						n = this._superApply,
						s;
					return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
				}
			}())
		}), o.prototype = e.widget.extend(u, {
			widgetEventPrefix: u.widgetEventPrefix || t
		}, r, {
			constructor: o,
			namespace: a,
			widgetName: t,
			widgetBaseClass: i,
			widgetFullName: i
		}), s ? (e.each(s._childConstructors, function(t, n) {
			var r = n.prototype;
			e.widget(r.namespace + "." + r.widgetName, o, n._proto)
		}), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
	}, e.widget.extend = function(n) {
		var i = r.call(arguments, 1),
			s = 0,
			o = i.length,
			u, a;
		for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
		return n
	}, e.widget.bridge = function(n, i) {
		var s = i.prototype.widgetFullName;
		e.fn[n] = function(o) {
			var u = typeof o == "string",
				a = r.call(arguments, 1),
				f = this;
			return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
				var r, i = e.data(this, s);
				if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
				if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
				r = i[o].apply(i, a);
				if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
			}) : this.each(function() {
				var t = e.data(this, s);
				t ? t.option(o || {})._init() : new i(o, this)
			}), f
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, r) {
			r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(this.element, {
				remove: function(e) {
					e.target === r && this.destroy()
				}
			}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(n, r) {
			var i = n,
				s, o, u;
			if (arguments.length === 0) return e.widget.extend({}, this.options);
			if (typeof n == "string") {
				i = {}, s = n.split("."), n = s.shift();
				if (s.length) {
					o = i[n] = e.widget.extend({}, this.options[n]);
					for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
					n = s.pop();
					if (r === t) return o[n] === t ? null : o[n];
					o[n] = r
				} else {
					if (r === t) return this.options[n] === t ? null : this.options[n];
					i[n] = r
				}
			}
			return this._setOptions(i), this
		},
		_setOptions: function(e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(t, n) {
			var r, i = this;
			n ? (t = r = e(t), this.bindings = this.bindings.add(t)) : (n = t, t = this.element, r = this.widget()), e.each(n, function(n, s) {
				function o() {
					if (i.options.disabled === !0 || e(this).hasClass("ui-state-disabled")) return;
					return (typeof s == "string" ? i[s] : s).apply(i, arguments)
				}
				typeof s != "string" && (o.guid = s.guid = s.guid || o.guid || e.guid++);
				var u = n.match(/^(\w+)\s*(.*)$/),
					a = u[1] + i.eventNamespace,
					f = u[2];
				f ? r.delegate(f, a, o) : t.bind(a, o)
			})
		},
		_off: function(e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function(e, t) {
			function n() {
				return (typeof e == "string" ? r[e] : e).apply(r, arguments)
			}
			var r = this;
			return setTimeout(n, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, n, r) {
			var i, s, o = this.options[t];
			r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
			if (s) for (i in s) i in n || (n[i] = s[i]);
			return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, n) {
		e.Widget.prototype["_" + t] = function(r, i, s) {
			typeof i == "string" && (i = {
				effect: i
			});
			var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
			i = i || {}, typeof i == "number" && (i = {
				duration: i
			}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
				e(this)[t](), s && s.call(r[0]), n()
			})
		}
	}), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
		return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
	})
})(jQuery);
(function(e, t) {
	var n = !1;
	e(document).mouseup(function(e) {
		n = !1
	}), e.widget("ui.mouse", {
		version: "1.9.1",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function(n) {
				if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(t) {
			if (n) return;
			this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
			var r = this,
				i = t.which === 1,
				s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
			if (!i || s || !this._mouseCapture(t)) return !0;
			this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
				r.mouseDelayMet = !0
			}, this.options.delay));
			if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
				this._mouseStarted = this._mouseStart(t) !== !1;
				if (!this._mouseStarted) return t.preventDefault(), !0
			}
			return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
				return r._mouseMove(e)
			}, this._mouseUpDelegate = function(e) {
				return r._mouseUp(e)
			}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
		},
		_mouseMove: function(t) {
			return !e.ui.ie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
		},
		_mouseUp: function(t) {
			return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
		},
		_mouseDistanceMet: function(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function(e) {
			return this.mouseDelayMet
		},
		_mouseStart: function(e) {},
		_mouseDrag: function(e) {},
		_mouseStop: function(e) {},
		_mouseCapture: function(e) {
			return !0
		}
	})
})(jQuery);
(function(e, t) {
	function h(e, t, n) {
		return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
	}
	function p(t, n) {
		return parseInt(e.css(t, n), 10) || 0
	}
	e.ui = e.ui || {};
	var n, r = Math.max,
		i = Math.abs,
		s = Math.round,
		o = /left|center|right/,
		u = /top|center|bottom/,
		a = /[\+\-]\d+%?/,
		f = /^\w+/,
		l = /%$/,
		c = e.fn.position;
	e.position = {
		scrollbarWidth: function() {
			if (n !== t) return n;
			var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				o = s.children()[0];
			return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
		},
		getScrollInfo: function(t) {
			var n = t.isWindow ? "" : t.element.css("overflow-x"),
				r = t.isWindow ? "" : t.element.css("overflow-y"),
				i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
				s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
			return {
				width: i ? e.position.scrollbarWidth() : 0,
				height: s ? e.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function(t) {
			var n = e(t || window),
				r = e.isWindow(n[0]);
			return {
				element: n,
				isWindow: r,
				offset: n.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: n.scrollLeft(),
				scrollTop: n.scrollTop(),
				width: r ? n.width() : n.outerWidth(),
				height: r ? n.height() : n.outerHeight()
			}
		}
	}, e.fn.position = function(t) {
		if (!t || !t.of) return c.apply(this, arguments);
		t = e.extend({}, t);
		var n, l, d, v, m, g = e(t.of),
			y = e.position.getWithinInfo(t.within),
			b = e.position.getScrollInfo(y),
			w = g[0],
			E = (t.collision || "flip").split(" "),
			S = {};
		return w.nodeType === 9 ? (l = g.width(), d = g.height(), v = {
			top: 0,
			left: 0
		}) : e.isWindow(w) ? (l = g.width(), d = g.height(), v = {
			top: g.scrollTop(),
			left: g.scrollLeft()
		}) : w.preventDefault ? (t.at = "left top", l = d = 0, v = {
			top: w.pageY,
			left: w.pageX
		}) : (l = g.outerWidth(), d = g.outerHeight(), v = g.offset()), m = e.extend({}, v), e.each(["my", "at"], function() {
			var e = (t[this] || "").split(" "),
				n, r;
			e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), S[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
		}), E.length === 1 && (E[1] = E[0]), t.at[0] === "right" ? m.left += l : t.at[0] === "center" && (m.left += l / 2), t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2), n = h(S.at, l, d), m.left += n[0], m.top += n[1], this.each(function() {
			var o, u, a = e(this),
				f = a.outerWidth(),
				c = a.outerHeight(),
				w = p(this, "marginLeft"),
				x = p(this, "marginTop"),
				T = f + w + p(this, "marginRight") + b.width,
				N = c + x + p(this, "marginBottom") + b.height,
				C = e.extend({}, m),
				k = h(S.my, a.outerWidth(), a.outerHeight());
			t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
				marginLeft: w,
				marginTop: x
			}, e.each(["left", "top"], function(r, i) {
				e.ui.position[E[r]] && e.ui.position[E[r]][i](C, {
					targetWidth: l,
					targetHeight: d,
					elemWidth: f,
					elemHeight: c,
					collisionPosition: o,
					collisionWidth: T,
					collisionHeight: N,
					offset: [n[0] + k[0], n[1] + k[1]],
					my: t.my,
					at: t.at,
					within: y,
					elem: a
				})
			}), e.fn.bgiframe && a.bgiframe(), t.using && (u = function(e) {
				var n = v.left - C.left,
					s = n + l - f,
					o = v.top - C.top,
					u = o + d - c,
					h = {
						target: {
							element: g,
							left: v.left,
							top: v.top,
							width: l,
							height: d
						},
						element: {
							element: a,
							left: C.left,
							top: C.top,
							width: f,
							height: c
						},
						horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
						vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
					};
				l < f && i(n + s) < l && (h.horizontal = "center"), d < c && i(o + u) < d && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
			}), a.offset(e.extend(C, {
				using: u
			}))
		})
	}, e.ui.position = {
		fit: {
			left: function(e, t) {
				var n = t.within,
					i = n.isWindow ? n.scrollLeft : n.offset.left,
					s = n.width,
					o = e.left - t.collisionPosition.marginLeft,
					u = i - o,
					a = o + t.collisionWidth - s - i,
					f;
				t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
			},
			top: function(e, t) {
				var n = t.within,
					i = n.isWindow ? n.scrollTop : n.offset.top,
					s = t.within.height,
					o = e.top - t.collisionPosition.marginTop,
					u = i - o,
					a = o + t.collisionHeight - s - i,
					f;
				t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
			}
		},
		flip: {
			left: function(e, t) {
				var n = t.within,
					r = n.offset.left + n.scrollLeft,
					s = n.width,
					o = n.isWindow ? n.scrollLeft : n.offset.left,
					u = e.left - t.collisionPosition.marginLeft,
					a = u - o,
					f = u + t.collisionWidth - s - o,
					l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
					c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
					h = -2 * t.offset[0],
					p, d;
				if (a < 0) {
					p = e.left + l + c + h + t.collisionWidth - s - r;
					if (p < 0 || p < i(a)) e.left += l + c + h
				} else if (f > 0) {
					d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
					if (d > 0 || i(d) < f) e.left += l + c + h
				}
			},
			top: function(e, t) {
				var n = t.within,
					r = n.offset.top + n.scrollTop,
					s = n.height,
					o = n.isWindow ? n.scrollTop : n.offset.top,
					u = e.top - t.collisionPosition.marginTop,
					a = u - o,
					f = u + t.collisionHeight - s - o,
					l = t.my[1] === "top",
					c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
					h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
					p = -2 * t.offset[1],
					d, v;
				a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
			}
		},
		flipfit: {
			left: function() {
				e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
			},
			top: function() {
				e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
			}
		}
	}, function() {
		var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
			u = document.createElement("div");
		t = document.createElement(o ? "div" : "body"), r = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		}, o && e.extend(r, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (s in r) t.style[s] = r[s];
		t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
	}(), e.uiBackCompat !== !1 &&
	function(e) {
		var n = e.fn.position;
		e.fn.position = function(r) {
			if (!r || !r.offset) return n.call(this, r);
			var i = r.offset.split(" "),
				s = r.at.split(" ");
			return i.length === 1 && (i[1] = i[0]), /^\d/.test(i[0]) && (i[0] = "+" + i[0]), /^\d/.test(i[1]) && (i[1] = "+" + i[1]), s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0], s[0] = "center")), n.call(this, e.extend(r, {
				at: s[0] + i[0] + " " + s[1] + i[1],
				offset: t
			}))
		}
	}(jQuery)
})(jQuery);
(function(e, t) {
	var n = 0,
		r = {},
		i = {};
	r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
		version: "1.9.1",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function() {
			var t = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n),
				r = this.options;
			this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !r.collapsible && (r.active === !1 || r.active == null) && (r.active = 0), r.active < 0 && (r.active += this.headers.length), this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(n) {
				var r = e(this),
					i = r.attr("id"),
					s = r.next(),
					o = s.attr("id");
				i || (i = t + "-header-" + n, r.attr("id", i)), o || (o = t + "-panel-" + n, s.attr("id", o)), r.attr("aria-controls", o), s.attr("aria-labelledby", i)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
				keydown: "_keydown"
			}), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._setupEvents(r.event)
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				content: this.active.length ? this.active.next() : e()
			}
		},
		_createIcons: function() {
			var t = this.options.icons;
			t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var e;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this.options.heightStyle !== "content" && e.css("height", "")
		},
		_setOption: function(e, t) {
			if (e === "active") {
				this._activate(t);
				return
			}
			e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! t)
		},
		_keydown: function(t) {
			if (t.altKey || t.ctrlKey) return;
			var n = e.ui.keyCode,
				r = this.headers.length,
				i = this.headers.index(t.target),
				s = !1;
			switch (t.keyCode) {
			case n.RIGHT:
			case n.DOWN:
				s = this.headers[(i + 1) % r];
				break;
			case n.LEFT:
			case n.UP:
				s = this.headers[(i - 1 + r) % r];
				break;
			case n.SPACE:
			case n.ENTER:
				this._eventHandler(t);
				break;
			case n.HOME:
				s = this.headers[0];
				break;
			case n.END:
				s = this.headers[r - 1]
			}
			s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
		},
		_panelKeyDown: function(t) {
			t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
		},
		refresh: function() {
			var t, n, r = this.options.heightStyle,
				i = this.element.parent();
			r === "fill" ? (e.support.minHeight || (n = i.css("overflow"), i.css("overflow", "hidden")), t = i.height(), this.element.siblings(":visible").each(function() {
				var n = e(this),
					r = n.css("position");
				if (r === "absolute" || r === "fixed") return;
				t -= n.outerHeight(!0)
			}), n && i.css("overflow", n), this.headers.each(function() {
				t -= e(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function() {
				t = Math.max(t, e(this).height("").height())
			}).height(t))
		},
		_activate: function(t) {
			var n = this._findActive(t)[0];
			if (n === this.active[0]) return;
			n = n || this.active[0], this._eventHandler({
				target: n,
				currentTarget: n,
				preventDefault: e.noop
			})
		},
		_findActive: function(t) {
			return typeof t == "number" ? this.headers.eq(t) : e()
		},
		_setupEvents: function(t) {
			var n = {};
			if (!t) return;
			e.each(t.split(" "), function(e, t) {
				n[t] = "_eventHandler"
			}), this._on(this.headers, n)
		},
		_eventHandler: function(t) {
			var n = this.options,
				r = this.active,
				i = e(t.currentTarget),
				s = i[0] === r[0],
				o = s && n.collapsible,
				u = o ? e() : i.next(),
				a = r.next(),
				f = {
					oldHeader: r,
					oldPanel: a,
					newHeader: o ? e() : i,
					newPanel: u
				};
			t.preventDefault();
			if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;
			n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"))
		},
		_toggle: function(t) {
			var n = t.newPanel,
				r = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() {
				return e(this).attr("tabIndex") === 0
			}).attr("tabIndex", -1), n.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function(e, t, n) {
			var s, o, u, a = this,
				f = 0,
				l = e.length && (!t.length || e.index() < t.index()),
				c = this.options.animate || {},
				h = l && c.down || c,
				p = function() {
					a._toggleComplete(n)
				};
			typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;
			if (!t.length) return e.animate(i, u, o, p);
			if (!e.length) return t.animate(r, u, o, p);
			s = e.show().outerHeight(), t.animate(r, {
				duration: u,
				easing: o,
				step: function(e, t) {
					t.now = Math.round(e)
				}
			}), e.hide().animate(i, {
				duration: u,
				easing: o,
				complete: p,
				step: function(e, n) {
					n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
				}
			})
		},
		_toggleComplete: function(e) {
			var t = e.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
		}
	}), e.uiBackCompat !== !1 && (function(e, t) {
		e.extend(t.options, {
			navigation: !1,
			navigationFilter: function() {
				return this.href.toLowerCase() === location.href.toLowerCase()
			}
		});
		var n = t._create;
		t._create = function() {
			if (this.options.navigation) {
				var t = this,
					r = this.element.find(this.options.header),
					i = r.next(),
					s = r.add(i).find("a").filter(this.options.navigationFilter)[0];
				s && r.add(i).each(function(n) {
					if (e.contains(this, s)) return t.options.active = Math.floor(n / 2), !1
				})
			}
			n.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
		e.extend(t.options, {
			heightStyle: null,
			autoHeight: !0,
			clearStyle: !1,
			fillSpace: !1
		});
		var n = t._create,
			r = t._setOption;
		e.extend(t, {
			_create: function() {
				this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n.call(this)
			},
			_setOption: function(e) {
				if (e === "autoHeight" || e === "clearStyle" || e === "fillSpace") this.options.heightStyle = this._mergeHeightStyle();
				r.apply(this, arguments)
			},
			_mergeHeightStyle: function() {
				var e = this.options;
				if (e.fillSpace) return "fill";
				if (e.clearStyle) return "content";
				if (e.autoHeight) return "auto"
			}
		})
	}(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
		e.extend(t.options.icons, {
			activeHeader: null,
			headerSelected: "ui-icon-triangle-1-s"
		});
		var n = t._createIcons;
		t._createIcons = function() {
			this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
		t.activate = t._activate;
		var n = t._findActive;
		t._findActive = function(e) {
			return e === -1 && (e = !1), e && typeof e != "number" && (e = this.headers.index(this.headers.filter(e)), e === -1 && (e = !1)), n.call(this, e)
		}
	}(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(e, t) {
		e.extend(t.options, {
			change: null,
			changestart: null
		});
		var n = t._trigger;
		t._trigger = function(e, t, r) {
			var i = n.apply(this, arguments);
			return i ? (e === "beforeActivate" ? i = n.call(this, "changestart", t, {
				oldHeader: r.oldHeader,
				oldContent: r.oldPanel,
				newHeader: r.newHeader,
				newContent: r.newPanel
			}) : e === "activate" && (i = n.call(this, "change", t, {
				oldHeader: r.oldHeader,
				oldContent: r.oldPanel,
				newHeader: r.newHeader,
				newContent: r.newPanel
			})), i) : !1
		}
	}(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
		e.extend(t.options, {
			animate: null,
			animated: "slide"
		});
		var n = t._create;
		t._create = function() {
			var e = this.options;
			e.animate === null && (e.animated ? e.animated === "slide" ? e.animate = 300 : e.animated === "bounceslide" ? e.animate = {
				duration: 200,
				down: {
					easing: "easeOutBounce",
					duration: 1e3
				}
			} : e.animate = e.animated : e.animate = !1), n.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype))
})(jQuery);
(function(e, t) {
	var n = 0;
	e.widget("ui.autocomplete", {
		version: "1.9.1",
		defaultElement: "<input>",
		options: {
			appendTo: "body",
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function() {
			var t, n, r;
			this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function(i) {
					if (this.element.prop("readOnly")) {
						t = !0, r = !0, n = !0;
						return
					}
					t = !1, r = !1, n = !1;
					var s = e.ui.keyCode;
					switch (i.keyCode) {
					case s.PAGE_UP:
						t = !0, this._move("previousPage", i);
						break;
					case s.PAGE_DOWN:
						t = !0, this._move("nextPage", i);
						break;
					case s.UP:
						t = !0, this._keyEvent("previous", i);
						break;
					case s.DOWN:
						t = !0, this._keyEvent("next", i);
						break;
					case s.ENTER:
					case s.NUMPAD_ENTER:
						this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
						break;
					case s.TAB:
						this.menu.active && this.menu.select(i);
						break;
					case s.ESCAPE:
						this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
						break;
					default:
						n = !0, this._searchTimeout(i)
					}
				},
				keypress: function(r) {
					if (t) {
						t = !1, r.preventDefault();
						return
					}
					if (n) return;
					var i = e.ui.keyCode;
					switch (r.keyCode) {
					case i.PAGE_UP:
						this._move("previousPage", r);
						break;
					case i.PAGE_DOWN:
						this._move("nextPage", r);
						break;
					case i.UP:
						this._keyEvent("previous", r);
						break;
					case i.DOWN:
						this._keyEvent("next", r)
					}
				},
				input: function(e) {
					if (r) {
						r = !1, e.preventDefault();
						return
					}
					this._searchTimeout(e)
				},
				focus: function() {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function(e) {
					if (this.cancelBlur) {
						delete this.cancelBlur;
						return
					}
					clearTimeout(this.searching), this.close(e), this._change(e)
				}
			}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
				input: e(),
				role: null
			}).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
				mousedown: function(t) {
					t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur
					});
					var n = this.menu.element[0];
					e(t.target).closest(".ui-menu-item").length || this._delay(function() {
						var t = this;
						this.document.one("mousedown", function(r) {
							r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
						})
					})
				},
				menufocus: function(t, n) {
					if (this.isNewMenu) {
						this.isNewMenu = !1;
						if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
							this.menu.blur(), this.document.one("mousemove", function() {
								e(t.target).trigger(t.originalEvent)
							});
							return
						}
					}
					var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
					!1 !== this._trigger("focus", t, {
						item: r
					}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
				},
				menuselect: function(e, t) {
					var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
						r = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
						this.previous = r, this.selectedItem = n
					})), !1 !== this._trigger("select", e, {
						item: n
					}) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
				}
			}), this.liveRegion = e("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function(e, t) {
			this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]), e === "disabled" && t && this.xhr && this.xhr.abort()
		},
		_isMultiLine: function() {
			return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
		},
		_initSource: function() {
			var t, n, r = this;
			e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
				r(e.ui.autocomplete.filter(t, n.term))
			}) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
				r.xhr && r.xhr.abort(), r.xhr = e.ajax({
					url: n,
					data: t,
					dataType: "json",
					success: function(e) {
						i(e)
					},
					error: function() {
						i([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(e) {
			clearTimeout(this.searching), this.searching = this._delay(function() {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
			}, this.options.delay)
		},
		search: function(e, t) {
			e = e != null ? e : this._value(), this.term = this._value();
			if (e.length < this.options.minLength) return this.close(t);
			if (this._trigger("search", t) === !1) return;
			return this._search(e)
		},
		_search: function(e) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: e
			}, this._response())
		},
		_response: function() {
			var e = this,
				t = ++n;
			return function(r) {
				t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function(e) {
			e && (e = this._normalize(e)), this._trigger("response", null, {
				content: e
			}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
		},
		close: function(e) {
			this.cancelSearch = !0, this._close(e)
		},
		_close: function(e) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
		},
		_change: function(e) {
			this.previous !== this._value() && this._trigger("change", e, {
				item: this.selectedItem
			})
		},
		_normalize: function(t) {
			return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
				return typeof t == "string" ? {
					label: t,
					value: t
				} : e.extend({
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function(t) {
			var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var e = this.menu.element;
			e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(t, n) {
			var r = this;
			e.each(n, function(e, n) {
				r._renderItemData(t, n)
			})
		},
		_renderItemData: function(e, t) {
			return this._renderItem(e, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function(t, n) {
			return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
		},
		_move: function(e, t) {
			if (!this.menu.element.is(":visible")) {
				this.search(null, t);
				return
			}
			if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
				this._value(this.term), this.menu.blur();
				return
			}
			this.menu[e](t)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(e, t) {
			if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
		}
	}), e.extend(e.ui.autocomplete, {
		escapeRegex: function(e) {
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(t, n) {
			var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
			return e.grep(t, function(e) {
				return r.test(e.label || e.value || e)
			})
		}
	}), e.widget("ui.autocomplete", e.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(e) {
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(e) {
			var t;
			this._superApply(arguments);
			if (this.options.disabled || this.cancelSearch) return;
			e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
		}
	})
})(jQuery);
(function(e, t) {
	var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
		u = "ui-state-hover ui-state-active ",
		a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		f = function() {
			var t = e(this).find(":ui-button");
			setTimeout(function() {
				t.button("refresh")
			}, 1)
		},
		l = function(t) {
			var n = t.name,
				r = t.form,
				i = e([]);
			return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
				return !this.form
			})), i
		};
	e.widget("ui.button", {
		version: "1.9.1",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
			var t = this,
				u = this.options,
				a = this.type === "checkbox" || this.type === "radio",
				c = "ui-state-hover" + (a ? "" : " ui-state-active"),
				h = "ui-state-focus";
			u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				if (u.disabled) return;
				e(this).addClass("ui-state-hover"), this === n && e(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				if (u.disabled) return;
				e(this).removeClass(c)
			}).bind("click" + this.eventNamespace, function(e) {
				u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
			}), this.element.bind("focus" + this.eventNamespace, function() {
				t.buttonElement.addClass(h)
			}).bind("blur" + this.eventNamespace, function() {
				t.buttonElement.removeClass(h)
			}), a && (this.element.bind("change" + this.eventNamespace, function() {
				if (s) return;
				t.refresh()
			}), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
				if (u.disabled) return;
				s = !1, r = e.pageX, i = e.pageY
			}).bind("mouseup" + this.eventNamespace, function(e) {
				if (u.disabled) return;
				if (r !== e.pageX || i !== e.pageY) s = !0
			})), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (u.disabled || s) return !1;
				e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
			}) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (u.disabled || s) return !1;
				e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
				var n = t.element[0];
				l(n).not(n).map(function() {
					return e(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				if (u.disabled) return !1;
				e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function() {
					n = null
				})
			}).bind("mouseup" + this.eventNamespace, function() {
				if (u.disabled) return !1;
				e(this).removeClass("ui-state-active")
			}).bind("keydown" + this.eventNamespace, function(t) {
				if (u.disabled) return !1;
				(t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
			}).bind("keyup" + this.eventNamespace, function() {
				e(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
				t.keyCode === e.ui.keyCode.SPACE && e(this).click()
			})), this._setOption("disabled", u.disabled), this._resetButton()
		},
		_determineButtonType: function() {
			var e, t, n;
			this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(e, t) {
			this._super(e, t);
			if (e === "disabled") {
				t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
				return
			}
			this._resetButton()
		},
		refresh: function() {
			var t = this.element.is(":disabled") || this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function() {
				e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if (this.type === "input") {
				this.options.label && this.element.val(this.options.label);
				return
			}
			var t = this.buttonElement.removeClass(a),
				n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
				r = this.options.icons,
				i = r.primary && r.secondary,
				s = [];
			r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
		}
	}), e.widget("ui.buttonset", {
		version: "1.9.1",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(e, t) {
			e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
		},
		refresh: function() {
			var t = this.element.css("direction") === "rtl";
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
})(jQuery);
(function($, undefined) {
	function Datepicker() {
		this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Listo",
			prevText: "Ant.",
			nextText: "Sig.",
			currentText: "Hoy",
			monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
			dayNames: ["Domingo", "Lunes", "Martes", "Mi\u00E9rcoles", "Jueves", "Viernes", "S\u00E1bado"],
			dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
			dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
			weekHeader: "Wk",
			dateFormat: "dd/mm/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
	}
	function bindHover(e) {
		var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(t, "mouseout", function() {
			$(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover")
		}).delegate(t, "mouseover", function() {
			$.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"))
		})
	}
	function extendRemove(e, t) {
		$.extend(e, t);
		for (var n in t) if (t[n] == null || t[n] == undefined) e[n] = t[n];
		return e
	}
	$.extend($.ui, {
		datepicker: {
			version: "1.9.1"
		}
	});
	var PROP_NAME = "datepicker",
		dpuuid = (new Date).getTime(),
		instActive;
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		log: function() {
			this.debug && console.log.apply("", arguments)
		},
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(e) {
			return extendRemove(this._defaults, e || {}), this
		},
		_attachDatepicker: function(target, settings) {
			var inlineSettings = null;
			for (var attrName in this._defaults) {
				var attrValue = target.getAttribute("date:" + attrName);
				if (attrValue) {
					inlineSettings = inlineSettings || {};
					try {
						inlineSettings[attrName] = eval(attrValue)
					} catch (err) {
						inlineSettings[attrName] = attrValue
					}
				}
			}
			var nodeName = target.nodeName.toLowerCase(),
				inline = nodeName == "div" || nodeName == "span";
			target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
			var inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
		},
		_newInst: function(e, t) {
			var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
			return {
				id: n,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: t,
				dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
			}
		},
		_connectDatepicker: function(e, t) {
			var n = $(e);
			t.append = $([]), t.trigger = $([]);
			if (n.hasClass(this.markerClassName)) return;
			this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, r) {
				t.settings[n] = r
			}).bind("getData.datepicker", function(e, n) {
				return this._get(t, n)
			}), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
		},
		_attachments: function(e, t) {
			var n = this._get(t, "appendText"),
				r = this._get(t, "isRTL");
			t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
			var i = this._get(t, "showOn");
			(i == "focus" || i == "both") && e.focus(this._showDatepicker);
			if (i == "button" || i == "both") {
				var s = this._get(t, "buttonText"),
					o = this._get(t, "buttonImage");
				t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
					src: o,
					alt: s,
					title: s
				}) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
					src: o,
					alt: s,
					title: s
				}))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function() {
					return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
				})
			}
		},
		_autoSize: function(e) {
			if (this._get(e, "autoSize") && !e.inline) {
				var t = new Date(2009, 11, 20),
					n = this._get(e, "dateFormat");
				if (n.match(/[DM]/)) {
					var r = function(e) {
						var t = 0,
							n = 0;
						for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
						return n
					};
					t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
				}
				e.input.attr("size", this._formatDate(e, t).length)
			}
		},
		_inlineDatepicker: function(e, t) {
			var n = $(e);
			if (n.hasClass(this.markerClassName)) return;
			n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, r) {
				t.settings[n] = r
			}).bind("getData.datepicker", function(e, n) {
				return this._get(t, n)
			}), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
		},
		_dialogDatepicker: function(e, t, n, r, i) {
			var s = this._dialogInst;
			if (!s) {
				this.uuid += 1;
				var o = "dp" + this.uuid;
				this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
			}
			extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
			if (!this._pos) {
				var u = document.documentElement.clientWidth,
					a = document.documentElement.clientHeight,
					f = document.documentElement.scrollLeft || document.body.scrollLeft,
					l = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
			}
			return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
		},
		_destroyDatepicker: function(e) {
			var t = $(e),
				n = $.data(e, PROP_NAME);
			if (!t.hasClass(this.markerClassName)) return;
			var r = e.nodeName.toLowerCase();
			$.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
		},
		_enableDatepicker: function(e) {
			var t = $(e),
				n = $.data(e, PROP_NAME);
			if (!t.hasClass(this.markerClassName)) return;
			var r = e.nodeName.toLowerCase();
			if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			});
			else if (r == "div" || r == "span") {
				var i = t.children("." + this._inlineClass);
				i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
			}
			this._disabledInputs = $.map(this._disabledInputs, function(t) {
				return t == e ? null : t
			})
		},
		_disableDatepicker: function(e) {
			var t = $(e),
				n = $.data(e, PROP_NAME);
			if (!t.hasClass(this.markerClassName)) return;
			var r = e.nodeName.toLowerCase();
			if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			});
			else if (r == "div" || r == "span") {
				var i = t.children("." + this._inlineClass);
				i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
			}
			this._disabledInputs = $.map(this._disabledInputs, function(t) {
				return t == e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e
		},
		_isDisabledDatepicker: function(e) {
			if (!e) return !1;
			for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
			return !1
		},
		_getInst: function(e) {
			try {
				return $.data(e, PROP_NAME)
			} catch (t) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(e, t, n) {
			var r = this._getInst(e);
			if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
			var i = t || {};
			typeof t == "string" && (i = {}, i[t] = n);
			if (r) {
				this._curInst == r && this._hideDatepicker();
				var s = this._getDateDatepicker(e, !0),
					o = this._getMinMaxDate(r, "min"),
					u = this._getMinMaxDate(r, "max");
				extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
			}
		},
		_changeDatepicker: function(e, t, n) {
			this._optionDatepicker(e, t, n)
		},
		_refreshDatepicker: function(e) {
			var t = this._getInst(e);
			t && this._updateDatepicker(t)
		},
		_setDateDatepicker: function(e, t) {
			var n = this._getInst(e);
			n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
		},
		_getDateDatepicker: function(e, t) {
			var n = this._getInst(e);
			return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
		},
		_doKeyDown: function(e) {
			var t = $.datepicker._getInst(e.target),
				n = !0,
				r = t.dpDiv.is(".ui-datepicker-rtl");
			t._keyEvent = !0;
			if ($.datepicker._datepickerShowing) switch (e.keyCode) {
			case 9:
				$.datepicker._hideDatepicker(), n = !1;
				break;
			case 13:
				var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
				i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
				var s = $.datepicker._get(t, "onSelect");
				if (s) {
					var o = $.datepicker._formatDate(t);
					s.apply(t.input ? t.input[0] : null, [o, t])
				} else $.datepicker._hideDatepicker();
				return !1;
			case 27:
				$.datepicker._hideDatepicker();
				break;
			case 33:
				$.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
				break;
			case 34:
				$.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
				break;
			case 35:
				(e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
				break;
			case 36:
				(e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
				break;
			case 37:
				(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
				break;
			case 38:
				(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
				break;
			case 39:
				(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
				break;
			case 40:
				(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
				break;
			default:
				n = !1
			} else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
			n && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function(e) {
			var t = $.datepicker._getInst(e.target);
			if ($.datepicker._get(t, "constrainInput")) {
				var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
					r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
				return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
			}
		},
		_doKeyUp: function(e) {
			var t = $.datepicker._getInst(e.target);
			if (t.input.val() != t.lastVal) try {
				var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
				n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
			} catch (r) {
				$.datepicker.log(r)
			}
			return !0
		},
		_showDatepicker: function(e) {
			e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
			if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
			var t = $.datepicker._getInst(e);
			$.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
			var n = $.datepicker._get(t, "beforeShow"),
				r = n ? n.apply(e, [e, t]) : {};
			if (r === !1) return;
			extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
			var i = !1;
			$(e).parents().each(function() {
				return i |= $(this).css("position") == "fixed", !i
			});
			var s = {
				left: $.datepicker._pos[0],
				top: $.datepicker._pos[1]
			};
			$.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px"
			}), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
				position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
				display: "none",
				left: s.left + "px",
				top: s.top + "px"
			});
			if (!t.inline) {
				var o = $.datepicker._get(t, "showAnim"),
					u = $.datepicker._get(t, "duration"),
					a = function() {
						var e = t.dpDiv.find("iframe.ui-datepicker-cover");
						if ( !! e.length) {
							var n = $.datepicker._getBorders(t.dpDiv);
							e.css({
								left: -n[0],
								top: -n[1],
								width: t.dpDiv.outerWidth(),
								height: t.dpDiv.outerHeight()
							})
						}
					};
				t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
			}
		},
		_updateDatepicker: function(e) {
			this.maxRows = 4;
			var t = $.datepicker._getBorders(e.dpDiv);
			instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
			var n = e.dpDiv.find("iframe.ui-datepicker-cover");
			!n.length || n.css({
				left: -t[0],
				top: -t[1],
				width: e.dpDiv.outerWidth(),
				height: e.dpDiv.outerHeight()
			}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var r = this._getNumberOfMonths(e),
				i = r[1],
				s = 17;
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), e.dpDiv[(r[0] != 1 || r[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
			if (e.yearshtml) {
				var o = e.yearshtml;
				setTimeout(function() {
					o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
				}, 0)
			}
		},
		_getBorders: function(e) {
			var t = function(e) {
				return {
					thin: 1,
					medium: 2,
					thick: 3
				}[e] || e
			};
			return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
		},
		_checkOffset: function(e, t, n) {
			var r = e.dpDiv.outerWidth(),
				i = e.dpDiv.outerHeight(),
				s = e.input ? e.input.outerWidth() : 0,
				o = e.input ? e.input.outerHeight() : 0,
				u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
				a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
			return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
		},
		_findPos: function(e) {
			var t = this._getInst(e),
				n = this._get(t, "isRTL");
			while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
			var r = $(e).offset();
			return [r.left, r.top]
		},
		_hideDatepicker: function(e) {
			var t = this._curInst;
			if (!t || e && t != $.data(e, PROP_NAME)) return;
			if (this._datepickerShowing) {
				var n = this._get(t, "showAnim"),
					r = this._get(t, "duration"),
					i = function() {
						$.datepicker._tidyDialog(t)
					};
				$.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
				var s = this._get(t, "onClose");
				s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
					position: "absolute",
					left: "0",
					top: "-100px"
				}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
			}
		},
		_tidyDialog: function(e) {
			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(e) {
			if (!$.datepicker._curInst) return;
			var t = $(e.target),
				n = $.datepicker._getInst(t[0]);
			(t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
		},
		_adjustDate: function(e, t, n) {
			var r = $(e),
				i = this._getInst(r[0]);
			if (this._isDisabledDatepicker(r[0])) return;
			this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
		},
		_gotoToday: function(e) {
			var t = $(e),
				n = this._getInst(t[0]);
			if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
			else {
				var r = new Date;
				n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
			}
			this._notifyChange(n), this._adjustDate(t)
		},
		_selectMonthYear: function(e, t, n) {
			var r = $(e),
				i = this._getInst(r[0]);
			i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
		},
		_selectDay: function(e, t, n, r) {
			var i = $(e);
			if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
			var s = this._getInst(i[0]);
			s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
		},
		_clearDate: function(e) {
			var t = $(e),
				n = this._getInst(t[0]);
			this._selectDate(t, "")
		},
		_selectDate: function(e, t) {
			var n = $(e),
				r = this._getInst(n[0]);
			t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
			var i = this._get(r, "onSelect");
			i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(e) {
			var t = this._get(e, "altField");
			if (t) {
				var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
					r = this._getDate(e),
					i = this.formatDate(n, r, this._getFormatConfig(e));
				$(t).each(function() {
					$(this).val(i)
				})
			}
		},
		noWeekends: function(e) {
			var t = e.getDay();
			return [t > 0 && t < 6, ""]
		},
		iso8601Week: function(e) {
			var t = new Date(e.getTime());
			t.setDate(t.getDate() + 4 - (t.getDay() || 7));
			var n = t.getTime();
			return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
		},
		parseDate: function(e, t, n) {
			if (e == null || t == null) throw "Invalid arguments";
			t = typeof t == "object" ? t.toString() : t + "";
			if (t == "") return null;
			var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
			var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				s = (n ? n.dayNames : null) || this._defaults.dayNames,
				o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				u = (n ? n.monthNames : null) || this._defaults.monthNames,
				a = -1,
				f = -1,
				l = -1,
				c = -1,
				h = !1,
				p = function(t) {
					var n = y + 1 < e.length && e.charAt(y + 1) == t;
					return n && y++, n
				},
				d = function(e) {
					var n = p(e),
						r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
						i = new RegExp("^\\d{1," + r + "}"),
						s = t.substring(g).match(i);
					if (!s) throw "Missing number at position " + g;
					return g += s[0].length, parseInt(s[0], 10)
				},
				v = function(e, n, r) {
					var i = $.map(p(e) ? r : n, function(e, t) {
						return [[t, e]]
					}).sort(function(e, t) {
						return -(e[1].length - t[1].length)
					}),
						s = -1;
					$.each(i, function(e, n) {
						var r = n[1];
						if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
					});
					if (s != -1) return s + 1;
					throw "Unknown name at position " + g
				},
				m = function() {
					if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
					g++
				},
				g = 0;
			for (var y = 0; y < e.length; y++) if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
			else
			switch (e.charAt(y)) {
			case "d":
				l = d("d");
				break;
			case "D":
				v("D", i, s);
				break;
			case "o":
				c = d("o");
				break;
			case "m":
				f = d("m");
				break;
			case "M":
				f = v("M", o, u);
				break;
			case "y":
				a = d("y");
				break;
			case "@":
				var b = new Date(d("@"));
				a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
				break;
			case "!":
				var b = new Date((d("!") - this._ticksTo1970) / 1e4);
				a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
				break;
			case "'":
				p("'") ? m() : h = !0;
				break;
			default:
				m()
			}
			if (g < t.length) {
				var w = t.substr(g);
				if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
			}
			a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
			if (c > -1) {
				f = 1, l = c;
				do {
					var E = this._getDaysInMonth(a, f - 1);
					if (l <= E) break;
					f++, l -= E
				} while (!0)
			}
			var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
			if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
			return b
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
		formatDate: function(e, t, n) {
			if (!t) return "";
			var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				i = (n ? n.dayNames : null) || this._defaults.dayNames,
				s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (n ? n.monthNames : null) || this._defaults.monthNames,
				u = function(t) {
					var n = h + 1 < e.length && e.charAt(h + 1) == t;
					return n && h++, n
				},
				a = function(e, t, n) {
					var r = "" + t;
					if (u(e)) while (r.length < n) r = "0" + r;
					return r
				},
				f = function(e, t, n, r) {
					return u(e) ? r[t] : n[t]
				},
				l = "",
				c = !1;
			if (t) for (var h = 0; h < e.length; h++) if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
			else
			switch (e.charAt(h)) {
			case "d":
				l += a("d", t.getDate(), 2);
				break;
			case "D":
				l += f("D", t.getDay(), r, i);
				break;
			case "o":
				l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
				break;
			case "m":
				l += a("m", t.getMonth() + 1, 2);
				break;
			case "M":
				l += f("M", t.getMonth(), s, o);
				break;
			case "y":
				l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
				break;
			case "@":
				l += t.getTime();
				break;
			case "!":
				l += t.getTime() * 1e4 + this._ticksTo1970;
				break;
			case "'":
				u("'") ? l += "'" : c = !0;
				break;
			default:
				l += e.charAt(h)
			}
			return l
		},
		_possibleChars: function(e) {
			var t = "",
				n = !1,
				r = function(t) {
					var n = i + 1 < e.length && e.charAt(i + 1) == t;
					return n && i++, n
				};
			for (var i = 0; i < e.length; i++) if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
			else
			switch (e.charAt(i)) {
			case "d":
			case "m":
			case "y":
			case "@":
				t += "0123456789";
				break;
			case "D":
			case "M":
				return null;
			case "'":
				r("'") ? t += "'" : n = !0;
				break;
			default:
				t += e.charAt(i)
			}
			return t
		},
		_get: function(e, t) {
			return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
		},
		_setDateFromField: function(e, t) {
			if (e.input.val() == e.lastVal) return;
			var n = this._get(e, "dateFormat"),
				r = e.lastVal = e.input ? e.input.val() : null,
				i, s;
			i = s = this._getDefaultDate(e);
			var o = this._getFormatConfig(e);
			try {
				i = this.parseDate(n, r, o) || s
			} catch (u) {
				this.log(u), r = t ? "" : r
			}
			e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
		},
		_getDefaultDate: function(e) {
			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
		},
		_determineDate: function(e, t, n) {
			var r = function(e) {
				var t = new Date;
				return t.setDate(t.getDate() + e), t
			},
				i = function(t) {
					try {
						return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
					} catch (n) {}
					var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
						i = r.getFullYear(),
						s = r.getMonth(),
						o = r.getDate(),
						u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
						a = u.exec(t);
					while (a) {
						switch (a[2] || "d") {
						case "d":
						case "D":
							o += parseInt(a[1], 10);
							break;
						case "w":
						case "W":
							o += parseInt(a[1], 10) * 7;
							break;
						case "m":
						case "M":
							s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
							break;
						case "y":
						case "Y":
							i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
						}
						a = u.exec(t)
					}
					return new Date(i, s, o)
				},
				s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
			return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
		},
		_daylightSavingAdjust: function(e) {
			return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
		},
		_setDate: function(e, t, n) {
			var r = !t,
				i = e.selectedMonth,
				s = e.selectedYear,
				o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
			e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
		},
		_getDate: function(e) {
			var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return t
		},
		_attachHandlers: function(e) {
			var t = this._get(e, "stepMonths"),
				n = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function() {
				var e = {
					prev: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
					},
					next: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
					},
					hide: function() {
						window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
					},
					today: function() {
						window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
					},
					selectDay: function() {
						return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
					},
					selectYear: function() {
						return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
					}
				};
				$(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(e) {
			var t = new Date;
			t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
			var n = this._get(e, "isRTL"),
				r = this._get(e, "showButtonPanel"),
				i = this._get(e, "hideIfNoPrevNext"),
				s = this._get(e, "navigationAsDateFormat"),
				o = this._getNumberOfMonths(e),
				u = this._get(e, "showCurrentAtPos"),
				a = this._get(e, "stepMonths"),
				f = o[0] != 1 || o[1] != 1,
				l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
				c = this._getMinMaxDate(e, "min"),
				h = this._getMinMaxDate(e, "max"),
				p = e.drawMonth - u,
				d = e.drawYear;
			p < 0 && (p += 12, d--);
			if (h) {
				var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
				v = c && v < c ? c : v;
				while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
			}
			e.drawMonth = p, e.drawYear = d;
			var m = this._get(e, "prevText");
			m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
			var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
				y = this._get(e, "nextText");
			y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
			var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
				w = this._get(e, "currentText"),
				E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
			w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
			var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
				x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
				T = parseInt(this._get(e, "firstDay"), 10);
			T = isNaN(T) ? 0 : T;
			var N = this._get(e, "showWeek"),
				C = this._get(e, "dayNames"),
				k = this._get(e, "dayNamesShort"),
				L = this._get(e, "dayNamesMin"),
				A = this._get(e, "monthNames"),
				O = this._get(e, "monthNamesShort"),
				M = this._get(e, "beforeShowDay"),
				_ = this._get(e, "showOtherMonths"),
				D = this._get(e, "selectOtherMonths"),
				P = this._get(e, "calculateWeek") || this.iso8601Week,
				H = this._getDefaultDate(e),
				B = "";
			for (var j = 0; j < o[0]; j++) {
				var F = "";
				this.maxRows = 4;
				for (var I = 0; I < o[1]; I++) {
					var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
						R = " ui-corner-all",
						U = "";
					if (f) {
						U += '<div class="ui-datepicker-group';
						if (o[1] > 1) switch (I) {
						case 0:
							U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
							break;
						case o[1] - 1:
							U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
							break;
						default:
							U += " ui-datepicker-group-middle", R = ""
						}
						U += '">'
					}
					U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
					var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
					for (var W = 0; W < 7; W++) {
						var X = (W + T) % 7;
						z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
					}
					U += z + "</tr></thead><tbody>";
					var V = this._getDaysInMonth(d, p);
					d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
					var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
						K = Math.ceil((J + V) / 7),
						Q = f ? this.maxRows > K ? this.maxRows : K : K;
					this.maxRows = Q;
					var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
					for (var Y = 0; Y < Q; Y++) {
						U += "<tr>";
						var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
						for (var W = 0; W < 7; W++) {
							var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
								tt = G.getMonth() != p,
								nt = tt && !D || !et[0] || c && G < c || h && G > h;
							Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
						}
						U += Z + "</tr>"
					}
					p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
				}
				B += F
			}
			return B += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
		},
		_generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
			var a = this._get(e, "changeMonth"),
				f = this._get(e, "changeYear"),
				l = this._get(e, "showMonthAfterYear"),
				c = '<div class="ui-datepicker-title">',
				h = "";
			if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
			else {
				var p = r && r.getFullYear() == n,
					d = i && i.getFullYear() == n;
				h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
				for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
				h += "</select>"
			}
			l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
			if (!e.yearshtml) {
				e.yearshtml = "";
				if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
				else {
					var m = this._get(e, "yearRange").split(":"),
						g = (new Date).getFullYear(),
						y = function(e) {
							var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
							return isNaN(t) ? g : t
						},
						b = y(m[0]),
						w = Math.max(b, y(m[1] || ""));
					b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
					for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
					e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
				}
			}
			return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
		},
		_adjustInstDate: function(e, t, n) {
			var r = e.drawYear + (n == "Y" ? t : 0),
				i = e.drawMonth + (n == "M" ? t : 0),
				s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
				o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
			e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
		},
		_restrictMinMax: function(e, t) {
			var n = this._getMinMaxDate(e, "min"),
				r = this._getMinMaxDate(e, "max"),
				i = n && t < n ? n : t;
			return i = r && i > r ? r : i, i
		},
		_notifyChange: function(e) {
			var t = this._get(e, "onChangeMonthYear");
			t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
		},
		_getNumberOfMonths: function(e) {
			var t = this._get(e, "numberOfMonths");
			return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
		},
		_getMinMaxDate: function(e, t) {
			return this._determineDate(e, this._get(e, t + "Date"), null)
		},
		_getDaysInMonth: function(e, t) {
			return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
		},
		_getFirstDayOfMonth: function(e, t) {
			return (new Date(e, t, 1)).getDay()
		},
		_canAdjustMonth: function(e, t, n, r) {
			var i = this._getNumberOfMonths(e),
				s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
			return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
		},
		_isInRange: function(e, t) {
			var n = this._getMinMaxDate(e, "min"),
				r = this._getMinMaxDate(e, "max");
			return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
		},
		_getFormatConfig: function(e) {
			var t = this._get(e, "shortYearCutoff");
			return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
				shortYearCutoff: t,
				dayNamesShort: this._get(e, "dayNamesShort"),
				dayNames: this._get(e, "dayNames"),
				monthNamesShort: this._get(e, "monthNamesShort"),
				monthNames: this._get(e, "monthNames")
			}
		},
		_formatDate: function(e, t, n, r) {
			t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
			var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
		}
	}), $.fn.datepicker = function(e) {
		if (!this.length) return this;
		$.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
		var t = Array.prototype.slice.call(arguments, 1);
		return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
			typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
		}) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
	}, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.1", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function(e, t) {
	var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
		r = {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		i = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	e.widget("ui.dialog", {
		version: "1.9.1",
		options: {
			autoOpen: !0,
			buttons: {},
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: !1,
			maxWidth: !1,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(t) {
					var n = e(this).css(t).offset().top;
					n < 0 && e(this).css("top", t.top - n)
				}
			},
			resizable: !0,
			show: null,
			stack: !0,
			title: "",
			width: 300,
			zIndex: 1e3
		},
		_create: function() {
			this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.options.title = this.options.title || this.originalTitle;
			var t = this,
				r = this.options,
				i = r.title || "&#160;",
				s, o, u, a, f;
			s = (this.uiDialog = e("<div>")).addClass(n + r.dialogClass).css({
				display: "none",
				outline: 0,
				zIndex: r.zIndex
			}).attr("tabIndex", -1).keydown(function(n) {
				r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
			}).mousedown(function(e) {
				t.moveToTop(!1, e)
			}).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), o = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
				s.focus()
			}).prependTo(s), u = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e) {
				e.preventDefault(), t.close(e)
			}).appendTo(o), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u), a = e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o), f = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(f), s.attr({
				role: "dialog",
				"aria-labelledby": a.attr("id")
			}), o.find("*").add(o).disableSelection(), this._hoverable(u), this._focusable(u), r.draggable && e.fn.draggable && this._makeDraggable(), r.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(r.buttons), this._isOpen = !1, e.fn.bgiframe && s.bgiframe(), this._on(s, {
				keydown: function(t) {
					if (!r.modal || t.keyCode !== e.ui.keyCode.TAB) return;
					var n = e(":tabbable", s),
						i = n.filter(":first"),
						o = n.filter(":last");
					if (t.target === o[0] && !t.shiftKey) return i.focus(1), !1;
					if (t.target === i[0] && t.shiftKey) return o.focus(1), !1
				}
			})
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_destroy: function() {
			var e, t = this.oldPosition;
			this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		close: function(t) {
			var n = this,
				r, i;
			if (!this._isOpen) return;
			if (!1 === this._trigger("beforeClose", t)) return;
			return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
				n._trigger("close", t)
			}) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (r = 0, e(".ui-dialog").each(function() {
				this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
			}), e.ui.dialog.maxZ = r), this
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function(t, n) {
			var r = this.options,
				i;
			return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), i = {
				scrollTop: this.element.scrollTop(),
				scrollLeft: this.element.scrollLeft()
			}, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", n), this)
		},
		open: function() {
			if (this._isOpen) return;
			var t, n = this.options,
				r = this.uiDialog;
			return this._size(), this._position(n.position), r.show(n.show), this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = r)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
		},
		_createButtons: function(t) {
			var n = this,
				r = !1;
			this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof t == "object" && t !== null && e.each(t, function() {
				return !(r = !0)
			}), r ? (e.each(t, function(t, r) {
				r = e.isFunction(r) ? {
					click: r,
					text: t
				} : r;
				var i = e("<button type='button'></button>").attr(r, !0).unbind("click").click(function() {
					r.click.apply(n.element[0], arguments)
				}).appendTo(n.uiButtonSet);
				e.fn.button && i.button()
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
		},
		_makeDraggable: function() {
			function r(e) {
				return {
					position: e.position,
					offset: e.offset
				}
			}
			var t = this,
				n = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(n, i) {
					e(this).addClass("ui-dialog-dragging"), t._trigger("dragStart", n, r(i))
				},
				drag: function(e, n) {
					t._trigger("drag", e, r(n))
				},
				stop: function(i, s) {
					n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._trigger("dragStop", i, r(s)), e.ui.dialog.overlay.resize()
				}
			})
		},
		_makeResizable: function(n) {
			function u(e) {
				return {
					originalPosition: e.originalPosition,
					originalSize: e.originalSize,
					position: e.position,
					size: e.size
				}
			}
			n = n === t ? this.options.resizable : n;
			var r = this,
				i = this.options,
				s = this.uiDialog.css("position"),
				o = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: i.maxWidth,
				maxHeight: i.maxHeight,
				minWidth: i.minWidth,
				minHeight: this._minHeight(),
				handles: o,
				start: function(t, n) {
					e(this).addClass("ui-dialog-resizing"), r._trigger("resizeStart", t, u(n))
				},
				resize: function(e, t) {
					r._trigger("resize", e, u(t))
				},
				stop: function(t, n) {
					e(this).removeClass("ui-dialog-resizing"), i.height = e(this).height(), i.width = e(this).width(), r._trigger("resizeStop", t, u(n)), e.ui.dialog.overlay.resize()
				}
			}).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
		},
		_minHeight: function() {
			var e = this.options;
			return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
		},
		_position: function(t) {
			var n = [],
				r = [0, 0],
				i;
			if (t) {
				if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
					+n[e] === n[e] && (r[e] = n[e], n[e] = t)
				}), t = {
					my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
					at: n.join(" ")
				};
				t = e.extend({}, e.ui.dialog.prototype.options.position, t)
			} else t = e.ui.dialog.prototype.options.position;
			i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
		},
		_setOptions: function(t) {
			var n = this,
				s = {},
				o = !1;
			e.each(t, function(e, t) {
				n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
			}), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
		},
		_setOption: function(t, r) {
			var i, s, o = this.uiDialog;
			switch (t) {
			case "buttons":
				this._createButtons(r);
				break;
			case "closeText":
				this.uiDialogTitlebarCloseText.text("" + r);
				break;
			case "dialogClass":
				o.removeClass(this.options.dialogClass).addClass(n + r);
				break;
			case "disabled":
				r ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
				break;
			case "draggable":
				i = o.is(":data(draggable)"), i && !r && o.draggable("destroy"), !i && r && this._makeDraggable();
				break;
			case "position":
				this._position(r);
				break;
			case "resizable":
				s = o.is(":data(resizable)"), s && !r && o.resizable("destroy"), s && typeof r == "string" && o.resizable("option", "handles", r), !s && r !== !1 && this._makeResizable(r);
				break;
			case "title":
				e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
			}
			this._super(t, r)
		},
		_size: function() {
			var t, n, r, i = this.options,
				s = this.uiDialog.is(":visible");
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				height: 0
			}), i.minWidth > i.width && (i.width = i.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: i.width
			}).outerHeight(), n = Math.max(0, i.minHeight - t), i.height === "auto" ? e.support.minHeight ? this.element.css({
				minHeight: n,
				height: "auto"
			}) : (this.uiDialog.show(), r = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(r, n))) : this.element.height(Math.max(i.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		}
	}), e.extend(e.ui.dialog, {
		uuid: 0,
		maxZ: 0,
		getTitleId: function(e) {
			var t = e.attr("id");
			return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
		},
		overlay: function(t) {
			this.$el = e.ui.dialog.overlay.create(t)
		}
	}), e.extend(e.ui.dialog.overlay, {
		instances: [],
		oldInstances: [],
		maxZ: 0,
		events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
			return e + ".dialog-overlay"
		}).join(" "),
		create: function(t) {
			this.instances.length === 0 && (setTimeout(function() {
				e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
					if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
				})
			}, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
			var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
			return e(document).bind("keydown.dialog-overlay", function(r) {
				var i = e.ui.dialog.overlay.instances;
				i.length !== 0 && i[i.length - 1] === n && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
			}), n.appendTo(document.body).css({
				width: this.width(),
				height: this.height()
			}), e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
		},
		destroy: function(t) {
			var n = e.inArray(t, this.instances),
				r = 0;
			n !== -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function() {
				r = Math.max(r, this.css("z-index"))
			}), this.maxZ = r
		},
		height: function() {
			var t, n;
			return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
		},
		width: function() {
			var t, n;
			return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
		},
		resize: function() {
			var t = e([]);
			e.each(e.ui.dialog.overlay.instances, function() {
				t = t.add(this)
			}), t.css({
				width: 0,
				height: 0
			}).css({
				width: e.ui.dialog.overlay.width(),
				height: e.ui.dialog.overlay.height()
			})
		}
	}), e.extend(e.ui.dialog.overlay.prototype, {
		destroy: function() {
			e.ui.dialog.overlay.destroy(this.$el)
		}
	})
})(jQuery);
(function(e, t) {
	e.widget("ui.draggable", e.ui.mouse, {
		version: "1.9.1",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1
		},
		_create: function() {
			this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var n = this.options;
			return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
				e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(e(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function(t) {
			var n = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, e.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
		},
		_mouseDrag: function(t, n) {
			this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
			if (!n) {
				var r = this._uiHash();
				if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
				this.position = r.position
			}
			if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
			if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
			return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function(t) {
			var n = !1;
			e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
			var r = this.element[0],
				i = !1;
			while (r && (r = r.parentNode)) r == document && (i = !0);
			if (!i && this.options.helper === "original") return !1;
			if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
				var s = this;
				e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					s._trigger("stop", t) !== !1 && s._clear()
				})
			} else this._trigger("stop", t) !== !1 && this._clear();
			return !1
		},
		_mouseUp: function(t) {
			return e("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
			return e(this.options.handle, this.element).find("*").andSelf().each(function() {
				this == t.target && (n = !0)
			}), n
		},
		_createHelper: function(t) {
			var n = this.options,
				r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
			return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
		},
		_adjustOffsetFromHelper: function(t) {
			typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
			if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
				top: 0,
				left: 0
			};
			return {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var e = this.element.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t = this.options;
			t.containment == "parent" && (t.containment = this.helper[0].parentNode);
			if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
				var n = e(t.containment),
					r = n[0];
				if (!r) return;
				var i = n.offset(),
					s = e(r).css("overflow") != "hidden";
				this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
			} else t.containment.constructor == Array && (this.containment = t.containment)
		},
		_convertPositionTo: function(t, n) {
			n || (n = this.position);
			var r = t == "absolute" ? 1 : -1,
				i = this.options,
				s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(s[0].tagName);
			return {
				top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
				left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
			}
		},
		_generatePosition: function(t) {
			var n = this.options,
				r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				i = /(html|body)/i.test(r[0].tagName),
				s = t.pageX,
				o = t.pageY;
			if (this.originalPosition) {
				var u;
				if (this.containment) {
					if (this.relative_container) {
						var a = this.relative_container.offset();
						u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
					} else u = this.containment;
					t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
				}
				if (n.grid) {
					var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
					o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
					var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
					s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
				}
			}
			return {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
				left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function(t, n, r) {
			return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
		},
		plugins: {},
		_uiHash: function(e) {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), e.ui.plugin.add("draggable", "connectToSortable", {
		start: function(t, n) {
			var r = e(this).data("draggable"),
				i = r.options,
				s = e.extend({}, n, {
					item: r.element
				});
			r.sortables = [], e(i.connectToSortable).each(function() {
				var n = e.data(this, "sortable");
				n && !n.options.disabled && (r.sortables.push({
					instance: n,
					shouldRevert: n.options.revert
				}), n.refreshPositions(), n._trigger("activate", t, s))
			})
		},
		stop: function(t, n) {
			var r = e(this).data("draggable"),
				i = e.extend({}, n, {
					item: r.element
				});
			e.each(r.sortables, function() {
				this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
			})
		},
		drag: function(t, n) {
			var r = e(this).data("draggable"),
				i = this,
				s = function(t) {
					var n = this.offset.click.top,
						r = this.offset.click.left,
						i = this.positionAbs.top,
						s = this.positionAbs.left,
						o = t.height,
						u = t.width,
						a = t.top,
						f = t.left;
					return e.ui.isOver(i + n, s + r, a, f, o, u)
				};
			e.each(r.sortables, function(s) {
				var o = !1,
					u = this;
				this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(r.sortables, function() {
					return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1), o
				})), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
					return n.helper[0]
				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
			})
		}
	}), e.ui.plugin.add("draggable", "cursor", {
		start: function(t, n) {
			var r = e("body"),
				i = e(this).data("draggable").options;
			r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
		},
		stop: function(t, n) {
			var r = e(this).data("draggable").options;
			r._cursor && e("body").css("cursor", r._cursor)
		}
	}), e.ui.plugin.add("draggable", "opacity", {
		start: function(t, n) {
			var r = e(n.helper),
				i = e(this).data("draggable").options;
			r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
		},
		stop: function(t, n) {
			var r = e(this).data("draggable").options;
			r._opacity && e(n.helper).css("opacity", r._opacity)
		}
	}), e.ui.plugin.add("draggable", "scroll", {
		start: function(t, n) {
			var r = e(this).data("draggable");
			r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
		},
		drag: function(t, n) {
			var r = e(this).data("draggable"),
				i = r.options,
				s = !1;
			if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
				if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
				if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
			} else {
				if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
				if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
			}
			s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
		}
	}), e.ui.plugin.add("draggable", "snap", {
		start: function(t, n) {
			var r = e(this).data("draggable"),
				i = r.options;
			r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
				var t = e(this),
					n = t.offset();
				this != r.element[0] && r.snapElements.push({
					item: this,
					width: t.outerWidth(),
					height: t.outerHeight(),
					top: n.top,
					left: n.left
				})
			})
		},
		drag: function(t, n) {
			var r = e(this).data("draggable"),
				i = r.options,
				s = i.snapTolerance,
				o = n.offset.left,
				u = o + r.helperProportions.width,
				a = n.offset.top,
				f = a + r.helperProportions.height;
			for (var l = r.snapElements.length - 1; l >= 0; l--) {
				var c = r.snapElements[l].left,
					h = c + r.snapElements[l].width,
					p = r.snapElements[l].top,
					d = p + r.snapElements[l].height;
				if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
					r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
						snapItem: r.snapElements[l].item
					})), r.snapElements[l].snapping = !1;
					continue
				}
				if (i.snapMode != "inner") {
					var v = Math.abs(p - f) <= s,
						m = Math.abs(d - a) <= s,
						g = Math.abs(c - u) <= s,
						y = Math.abs(h - o) <= s;
					v && (n.position.top = r._convertPositionTo("relative", {
						top: p - r.helperProportions.height,
						left: 0
					}).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
						top: d,
						left: 0
					}).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
						top: 0,
						left: c - r.helperProportions.width
					}).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
						top: 0,
						left: h
					}).left - r.margins.left)
				}
				var b = v || m || g || y;
				if (i.snapMode != "outer") {
					var v = Math.abs(p - a) <= s,
						m = Math.abs(d - f) <= s,
						g = Math.abs(c - o) <= s,
						y = Math.abs(h - u) <= s;
					v && (n.position.top = r._convertPositionTo("relative", {
						top: p,
						left: 0
					}).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
						top: d - r.helperProportions.height,
						left: 0
					}).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
						top: 0,
						left: c
					}).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
						top: 0,
						left: h - r.helperProportions.width
					}).left - r.margins.left)
				}!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
					snapItem: r.snapElements[l].item
				})), r.snapElements[l].snapping = v || m || g || y || b
			}
		}
	}), e.ui.plugin.add("draggable", "stack", {
		start: function(t, n) {
			var r = e(this).data("draggable").options,
				i = e.makeArray(e(r.stack)).sort(function(t, n) {
					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
				});
			if (!i.length) return;
			var s = parseInt(i[0].style.zIndex) || 0;
			e(i).each(function(e) {
				this.style.zIndex = s + e
			}), this[0].style.zIndex = s + i.length
		}
	}), e.ui.plugin.add("draggable", "zIndex", {
		start: function(t, n) {
			var r = e(n.helper),
				i = e(this).data("draggable").options;
			r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
		},
		stop: function(t, n) {
			var r = e(this).data("draggable").options;
			r._zIndex && e(n.helper).css("zIndex", r._zIndex)
		}
	})
})(jQuery);
(function(e, t) {
	e.widget("ui.droppable", {
		version: "1.9.1",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect"
		},
		_create: function() {
			var t = this.options,
				n = t.accept;
			this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) {
				return e.is(n)
			}, this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			}, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function() {
			var t = e.ui.ddmanager.droppables[this.options.scope];
			for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(t, n) {
			t == "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
				return e.is(n)
			}), e.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(t) {
			var n = e.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
		},
		_deactivate: function(t) {
			var n = e.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
		},
		_over: function(t) {
			var n = e.ui.ddmanager.current;
			if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
			this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
		},
		_out: function(t) {
			var n = e.ui.ddmanager.current;
			if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
			this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
		},
		_drop: function(t, n) {
			var r = n || e.ui.ddmanager.current;
			if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
			var i = !1;
			return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
				var t = e.data(this, "droppable");
				if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
					offset: t.element.offset()
				}), t.options.tolerance)) return i = !0, !1
			}), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
		},
		ui: function(e) {
			return {
				draggable: e.currentItem || e.element,
				helper: e.helper,
				position: e.position,
				offset: e.positionAbs
			}
		}
	}), e.ui.intersect = function(t, n, r) {
		if (!n.offset) return !1;
		var i = (t.positionAbs || t.position.absolute).left,
			s = i + t.helperProportions.width,
			o = (t.positionAbs || t.position.absolute).top,
			u = o + t.helperProportions.height,
			a = n.offset.left,
			f = a + n.proportions.width,
			l = n.offset.top,
			c = l + n.proportions.height;
		switch (r) {
		case "fit":
			return a <= i && s <= f && l <= o && u <= c;
		case "intersect":
			return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
		case "pointer":
			var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
				p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
				d = e.ui.isOver(p, h, l, a, n.proportions.height, n.proportions.width);
			return d;
		case "touch":
			return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
		default:
			return !1
		}
	}, e.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(t, n) {
			var r = e.ui.ddmanager.droppables[t.options.scope] || [],
				i = n ? n.type : null,
				s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
			e: for (var o = 0; o < r.length; o++) {
				if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
				for (var u = 0; u < s.length; u++) if (s[u] == r[o].element[0]) {
					r[o].proportions.height = 0;
					continue e
				}
				r[o].visible = r[o].element.css("display") != "none";
				if (!r[o].visible) continue;
				i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
					width: r[o].element[0].offsetWidth,
					height: r[o].element[0].offsetHeight
				}
			}
		},
		drop: function(t, n) {
			var r = !1;
			return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
				if (!this.options) return;
				!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
			}), r
		},
		dragStart: function(t, n) {
			t.element.parentsUntil("body").bind("scroll.droppable", function() {
				t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
			})
		},
		drag: function(t, n) {
			t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
				if (this.options.disabled || this.greedyChild || !this.visible) return;
				var r = e.ui.intersect(t, this, this.options.tolerance),
					i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
				if (!i) return;
				var s;
				if (this.options.greedy) {
					var o = this.options.scope,
						u = this.element.parents(":data(droppable)").filter(function() {
							return e.data(this, "droppable").options.scope === o
						});
					u.length && (s = e.data(u[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
				}
				s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
			})
		},
		dragStop: function(t, n) {
			t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
		}
	}
})(jQuery);
jQuery.effects ||
function(e, t) {
	var n = e.uiBackCompat !== !1,
		r = "ui-effects-";
	e.effects = {
		effect: {}
	}, function(t, n) {
		function p(e, t, n) {
			var r = a[t.type] || {};
			return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
		}
		function d(e) {
			var n = o(),
				r = n._rgba = [];
			return e = e.toLowerCase(), h(s, function(t, i) {
				var s, o = i.re.exec(e),
					a = o && i.parse(o),
					f = i.space || "rgba";
				if (a) return s = n[f](a), n[u[f].cache] = s[u[f].cache], r = n._rgba = s._rgba, !1
			}), r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent), n) : c[e]
		}
		function v(e, t, n) {
			return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
		}
		var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
			i = /^([\-+])=\s*(\d+\.?\d*)/,
			s = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(e) {
					return [e[1], e[2], e[3], e[4]]
				}
			},
			{
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(e) {
					return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
				}
			},
			{
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(e) {
					return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
				}
			},
			{
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(e) {
					return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
				}
			},
			{
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(e) {
					return [e[1], e[2] / 100, e[3] / 100, e[4]]
				}
			}],
			o = t.Color = function(e, n, r, i) {
				return new t.Color.fn.parse(e, n, r, i)
			},
			u = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			},
			a = {
				"byte": {
					floor: !0,
					max: 255
				},
				percent: {
					max: 1
				},
				degrees: {
					mod: 360,
					floor: !0
				}
			},
			f = o.support = {},
			l = t("<p>")[0],
			c, h = t.each;
		l.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = l.style.backgroundColor.indexOf("rgba") > -1, h(u, function(e, t) {
			t.cache = "_" + e, t.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			}
		}), o.fn = t.extend(o.prototype, {
			parse: function(r, i, s, a) {
				if (r === n) return this._rgba = [null, null, null, null], this;
				if (r.jquery || r.nodeType) r = t(r).css(i), i = n;
				var f = this,
					l = t.type(r),
					v = this._rgba = [];
				i !== n && (r = [r, i, s, a], l = "array");
				if (l === "string") return this.parse(d(r) || c._default);
				if (l === "array") return h(u.rgba.props, function(e, t) {
					v[t.idx] = p(r[t.idx], t)
				}), this;
				if (l === "object") return r instanceof o ? h(u, function(e, t) {
					r[t.cache] && (f[t.cache] = r[t.cache].slice())
				}) : h(u, function(t, n) {
					var i = n.cache;
					h(n.props, function(e, t) {
						if (!f[i] && n.to) {
							if (e === "alpha" || r[e] == null) return;
							f[i] = n.to(f._rgba)
						}
						f[i][t.idx] = p(r[e], t, !0)
					}), f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1, n.from && (f._rgba = n.from(f[i])))
				}), this
			},
			is: function(e) {
				var t = o(e),
					n = !0,
					r = this;
				return h(u, function(e, i) {
					var s, o = t[i.cache];
					return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], h(i.props, function(e, t) {
						if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
					})), n
				}), n
			},
			_space: function() {
				var e = [],
					t = this;
				return h(u, function(n, r) {
					t[r.cache] && e.push(n)
				}), e.pop()
			},
			transition: function(e, t) {
				var n = o(e),
					r = n._space(),
					i = u[r],
					s = this.alpha() === 0 ? o("transparent") : this,
					f = s[i.cache] || i.to(s._rgba),
					l = f.slice();
				return n = n[i.cache], h(i.props, function(e, r) {
					var i = r.idx,
						s = f[i],
						o = n[i],
						u = a[r.type] || {};
					if (o === null) return;
					s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)), l[i] = p((o - s) * t + s, r))
				}), this[r](l)
			},
			blend: function(e) {
				if (this._rgba[3] === 1) return this;
				var n = this._rgba.slice(),
					r = n.pop(),
					i = o(e)._rgba;
				return o(t.map(n, function(e, t) {
					return (1 - r) * i[t] + r * e
				}))
			},
			toRgbaString: function() {
				var e = "rgba(",
					n = t.map(this._rgba, function(e, t) {
						return e == null ? t > 2 ? 1 : 0 : e
					});
				return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
			},
			toHslaString: function() {
				var e = "hsla(",
					n = t.map(this.hsla(), function(e, t) {
						return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
					});
				return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
			},
			toHexString: function(e) {
				var n = this._rgba.slice(),
					r = n.pop();
				return e && n.push(~~ (r * 255)), "#" + t.map(n, function(e) {
					return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
				}).join("")
			},
			toString: function() {
				return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
			}
		}), o.fn.parse.prototype = o.fn, u.hsla.to = function(e) {
			if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
			var t = e[0] / 255,
				n = e[1] / 255,
				r = e[2] / 255,
				i = e[3],
				s = Math.max(t, n, r),
				o = Math.min(t, n, r),
				u = s - o,
				a = s + o,
				f = a * .5,
				l, c;
			return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
		}, u.hsla.from = function(e) {
			if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
			var t = e[0] / 360,
				n = e[1],
				r = e[2],
				i = e[3],
				s = r <= .5 ? r * (1 + n) : r + n - r * n,
				o = 2 * r - s;
			return [Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
		}, h(u, function(e, r) {
			var s = r.props,
				u = r.cache,
				a = r.to,
				f = r.from;
			o.fn[e] = function(e) {
				a && !this[u] && (this[u] = a(this._rgba));
				if (e === n) return this[u].slice();
				var r, i = t.type(e),
					l = i === "array" || i === "object" ? e : arguments,
					c = this[u].slice();
				return h(s, function(e, t) {
					var n = l[i === "object" ? e : t.idx];
					n == null && (n = c[t.idx]), c[t.idx] = p(n, t)
				}), f ? (r = o(f(c)), r[u] = c, r) : o(c)
			}, h(s, function(n, r) {
				if (o.fn[n]) return;
				o.fn[n] = function(s) {
					var o = t.type(s),
						u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e,
						a = this[u](),
						f = a[r.idx],
						l;
					return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = t.type(s)), s == null && r.empty ? this : (o === "string" && (l = i.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = s, this[u](a)))
				}
			})
		}), h(r, function(e, n) {
			t.cssHooks[n] = {
				set: function(e, r) {
					var i, s, u = "";
					if (t.type(r) !== "string" || (i = d(r))) {
						r = o(i || r);
						if (!f.rgba && r._rgba[3] !== 1) {
							s = n === "backgroundColor" ? e.parentNode : e;
							while ((u === "" || u === "transparent") && s && s.style) try {
								u = t.css(s, "backgroundColor"), s = s.parentNode
							} catch (a) {}
							r = r.blend(u && u !== "transparent" ? u : "_default")
						}
						r = r.toRgbaString()
					}
					try {
						e.style[n] = r
					} catch (l) {}
				}
			}, t.fx.step[n] = function(e) {
				e.colorInit || (e.start = o(e.elem, n), e.end = o(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
			}
		}), t.cssHooks.borderColor = {
			expand: function(e) {
				var t = {};
				return h(["Top", "Right", "Bottom", "Left"], function(n, r) {
					t["border" + r + "Color"] = e
				}), t
			}
		}, c = t.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		}
	}(jQuery), function() {
		function i() {
			var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
				n = {},
				r, i;
			if (t && t.length && t[0] && t[t[0]]) {
				i = t.length;
				while (i--) r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
			} else
			for (r in t) typeof t[r] == "string" && (n[r] = t[r]);
			return n
		}
		function s(t, n) {
			var i = {},
				s, o;
			for (s in n) o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
			return i
		}
		var n = ["add", "remove", "toggle"],
			r = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
		e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
			e.fx.step[n] = function(e) {
				if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
			}
		}), e.effects.animateClass = function(t, r, o, u) {
			var a = e.speed(r, o, u);
			return this.queue(function() {
				var r = e(this),
					o = r.attr("class") || "",
					u, f = a.children ? r.find("*").andSelf() : r;
				f = f.map(function() {
					var t = e(this);
					return {
						el: t,
						start: i.call(this)
					}
				}), u = function() {
					e.each(n, function(e, n) {
						t[n] && r[n + "Class"](t[n])
					})
				}, u(), f = f.map(function() {
					return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
				}), r.attr("class", o), f = f.map(function() {
					var t = this,
						n = e.Deferred(),
						r = jQuery.extend({}, a, {
							queue: !1,
							complete: function() {
								n.resolve(t)
							}
						});
					return this.el.animate(this.diff, r), n.promise()
				}), e.when.apply(e, f.get()).done(function() {
					u(), e.each(arguments, function() {
						var t = this.el;
						e.each(this.diff, function(e) {
							t.css(e, "")
						})
					}), a.complete.call(r[0])
				})
			})
		}, e.fn.extend({
			_addClass: e.fn.addClass,
			addClass: function(t, n, r, i) {
				return n ? e.effects.animateClass.call(this, {
					add: t
				}, n, r, i) : this._addClass(t)
			},
			_removeClass: e.fn.removeClass,
			removeClass: function(t, n, r, i) {
				return n ? e.effects.animateClass.call(this, {
					remove: t
				}, n, r, i) : this._removeClass(t)
			},
			_toggleClass: e.fn.toggleClass,
			toggleClass: function(n, r, i, s, o) {
				return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
					add: n
				} : {
					remove: n
				}, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
					toggle: n
				}, r, i, s)
			},
			switchClass: function(t, n, r, i, s) {
				return e.effects.animateClass.call(this, {
					add: n,
					remove: t
				}, r, i, s)
			}
		})
	}(), function() {
		function i(t, n, r, i) {
			e.isPlainObject(t) && (n = t, t = t.effect), t = {
				effect: t
			}, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
			if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
			return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
		}
		function s(t) {
			return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
		}
		e.extend(e.effects, {
			version: "1.9.1",
			save: function(e, t) {
				for (var n = 0; n < t.length; n++) t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
			},
			restore: function(e, n) {
				var i, s;
				for (s = 0; s < n.length; s++) n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
			},
			setMode: function(e, t) {
				return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
			},
			getBaseline: function(e, t) {
				var n, r;
				switch (e[0]) {
				case "top":
					n = 0;
					break;
				case "middle":
					n = .5;
					break;
				case "bottom":
					n = 1;
					break;
				default:
					n = e[0] / t.height
				}
				switch (e[1]) {
				case "left":
					r = 0;
					break;
				case "center":
					r = .5;
					break;
				case "right":
					r = 1;
					break;
				default:
					r = e[1] / t.width
				}
				return {
					x: r,
					y: n
				}
			},
			createWrapper: function(t) {
				if (t.parent().is(".ui-effects-wrapper")) return t.parent();
				var n = {
					width: t.outerWidth(!0),
					height: t.outerHeight(!0),
					"float": t.css("float")
				},
					r = e("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
					i = {
						width: t.width(),
						height: t.height()
					},
					s = document.activeElement;
				try {
					s.id
				} catch (o) {
					s = document.body
				}
				return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
					position: "relative"
				}), t.css({
					position: "relative"
				})) : (e.extend(n, {
					position: t.css("position"),
					zIndex: t.css("z-index")
				}), e.each(["top", "left", "bottom", "right"], function(e, r) {
					n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
				}), t.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				})), t.css(i), r.css(n).show()
			},
			removeWrapper: function(t) {
				var n = document.activeElement;
				return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
			},
			setTransition: function(t, n, r, i) {
				return i = i || {}, e.each(n, function(e, n) {
					var s = t.cssUnit(n);
					s[0] > 0 && (i[n] = s[0] * r + s[1])
				}), i
			}
		}), e.fn.extend({
			effect: function() {
				function a(n) {
					function u() {
						e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
					}
					var r = e(this),
						i = t.complete,
						s = t.mode;
					(r.is(":hidden") ? s === "hide" : s === "show") ? u() : o.call(r[0], t, u)
				}
				var t = i.apply(this, arguments),
					r = t.mode,
					s = t.queue,
					o = e.effects.effect[t.effect],
					u = !o && n && e.effects[t.effect];
				return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function() {
					t.complete && t.complete.call(this)
				}) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {
					options: t,
					duration: t.duration,
					callback: t.complete,
					mode: t.mode
				})
			},
			_show: e.fn.show,
			show: function(e) {
				if (s(e)) return this._show.apply(this, arguments);
				var t = i.apply(this, arguments);
				return t.mode = "show", this.effect.call(this, t)
			},
			_hide: e.fn.hide,
			hide: function(e) {
				if (s(e)) return this._hide.apply(this, arguments);
				var t = i.apply(this, arguments);
				return t.mode = "hide", this.effect.call(this, t)
			},
			__toggle: e.fn.toggle,
			toggle: function(t) {
				if (s(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
				var n = i.apply(this, arguments);
				return n.mode = "toggle", this.effect.call(this, n)
			},
			cssUnit: function(t) {
				var n = this.css(t),
					r = [];
				return e.each(["em", "px", "%", "pt"], function(e, t) {
					n.indexOf(t) > 0 && (r = [parseFloat(n), t])
				}), r
			}
		})
	}(), function() {
		var t = {};
		e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
			t[n] = function(t) {
				return Math.pow(t, e + 2)
			}
		}), e.extend(t, {
			Sine: function(e) {
				return 1 - Math.cos(e * Math.PI / 2)
			},
			Circ: function(e) {
				return 1 - Math.sqrt(1 - e * e)
			},
			Elastic: function(e) {
				return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
			},
			Back: function(e) {
				return e * e * (3 * e - 2)
			},
			Bounce: function(e) {
				var t, n = 4;
				while (e < ((t = Math.pow(2, --n)) - 1) / 11);
				return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
			}
		}), e.each(t, function(t, n) {
			e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
				return 1 - n(1 - e)
			}, e.easing["easeInOut" + t] = function(e) {
				return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
			}
		})
	}()
}(jQuery);
(function(e, t) {
	var n = /up|down|vertical/,
		r = /up|left|vertical|horizontal/;
	e.effects.effect.blind = function(t, i) {
		var s = e(this),
			o = ["position", "top", "bottom", "left", "right", "height", "width"],
			u = e.effects.setMode(s, t.mode || "hide"),
			a = t.direction || "up",
			f = n.test(a),
			l = f ? "height" : "width",
			c = f ? "top" : "left",
			h = r.test(a),
			p = {},
			d = u === "show",
			v, m, g;
		s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({
			overflow: "hidden"
		}), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
			position: "absolute"
		}), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, {
			duration: t.duration,
			easing: t.easing,
			queue: !1,
			complete: function() {
				u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.bounce = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "height", "width"],
			s = e.effects.setMode(r, t.mode || "effect"),
			o = s === "hide",
			u = s === "show",
			a = t.direction || "up",
			f = t.distance,
			l = t.times || 5,
			c = l * 2 + (u || o ? 1 : 0),
			h = t.duration / c,
			p = t.easing,
			d = a === "up" || a === "down" ? "top" : "left",
			v = a === "up" || a === "left",
			m, g, y, b = r.queue(),
			w = b.length;
		(u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = {
			opacity: 1
		}, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;
		for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;
		o && (g = {
			opacity: 0
		}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function() {
			o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
		}), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue()
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.clip = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "height", "width"],
			s = e.effects.setMode(r, t.mode || "hide"),
			o = s === "show",
			u = t.direction || "vertical",
			a = u === "vertical",
			f = a ? "height" : "width",
			l = a ? "top" : "left",
			c = {},
			h, p, d;
		e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({
			overflow: "hidden"
		}), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.drop = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			s = e.effects.setMode(r, t.mode || "hide"),
			o = s === "show",
			u = t.direction || "left",
			a = u === "up" || u === "down" ? "top" : "left",
			f = u === "up" || u === "left" ? "pos" : "neg",
			l = {
				opacity: o ? 1 : 0
			},
			c;
		e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.explode = function(t, n) {
		function y() {
			c.push(this), c.length === r * i && b()
		}
		function b() {
			s.css({
				visibility: "visible"
			}), e(c).remove(), u || s.hide(), n()
		}
		var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
			i = r,
			s = e(this),
			o = e.effects.setMode(s, t.mode || "hide"),
			u = o === "show",
			a = s.show().css("visibility", "hidden").offset(),
			f = Math.ceil(s.outerWidth() / i),
			l = Math.ceil(s.outerHeight() / r),
			c = [],
			h, p, d, v, m, g;
		for (h = 0; h < r; h++) {
			v = a.top + h * l, g = h - (r - 1) / 2;
			for (p = 0; p < i; p++) d = a.left + p * f, m = p - (i - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -p * f,
				top: -h * l
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: f,
				height: l,
				left: d + (u ? m * f : 0),
				top: v + (u ? g * l : 0),
				opacity: u ? 0 : 1
			}).animate({
				left: d + (u ? 0 : m * f),
				top: v + (u ? 0 : g * l),
				opacity: u ? 1 : 0
			}, t.duration || 500, t.easing, y)
		}
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.fade = function(t, n) {
		var r = e(this),
			i = e.effects.setMode(r, t.mode || "toggle");
		r.animate({
			opacity: i
		}, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: n
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.fold = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "height", "width"],
			s = e.effects.setMode(r, t.mode || "hide"),
			o = s === "show",
			u = s === "hide",
			a = t.size || 15,
			f = /([0-9]+)%/.exec(a),
			l = !! t.horizFirst,
			c = o !== l,
			h = c ? ["width", "height"] : ["height", "width"],
			p = t.duration / 2,
			d, v, m = {},
			g = {};
		e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({
			overflow: "hidden"
		}), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? {
			height: 0,
			width: a
		} : {
			height: a,
			width: 0
		}), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function() {
			u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.highlight = function(t, n) {
		var r = e(this),
			i = ["backgroundImage", "backgroundColor", "opacity"],
			s = e.effects.setMode(r, t.mode || "show"),
			o = {
				backgroundColor: r.css("backgroundColor")
			};
		s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({
			backgroundImage: "none",
			backgroundColor: t.color || "#ffff99"
		}).animate(o, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				s === "hide" && r.hide(), e.effects.restore(r, i), n()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.pulsate = function(t, n) {
		var r = e(this),
			i = e.effects.setMode(r, t.mode || "show"),
			s = i === "show",
			o = i === "hide",
			u = s || i === "hide",
			a = (t.times || 5) * 2 + (u ? 1 : 0),
			f = t.duration / a,
			l = 0,
			c = r.queue(),
			h = c.length,
			p;
		if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;
		for (p = 1; p < a; p++) r.animate({
			opacity: l
		}, f, t.easing), l = 1 - l;
		r.animate({
			opacity: l
		}, f, t.easing), r.queue(function() {
			o && r.hide(), n()
		}), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue()
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.puff = function(t, n) {
		var r = e(this),
			i = e.effects.setMode(r, t.mode || "hide"),
			s = i === "hide",
			o = parseInt(t.percent, 10) || 150,
			u = o / 100,
			a = {
				height: r.height(),
				width: r.width()
			};
		e.extend(t, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: i,
			complete: n,
			percent: s ? o : 100,
			from: s ? a : {
				height: a.height * u,
				width: a.width * u
			}
		}), r.effect(t)
	}, e.effects.effect.scale = function(t, n) {
		var r = e(this),
			i = e.extend(!0, {}, t),
			s = e.effects.setMode(r, t.mode || "effect"),
			o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
			u = t.direction || "both",
			a = t.origin,
			f = {
				height: r.height(),
				width: r.width(),
				outerHeight: r.outerHeight(),
				outerWidth: r.outerWidth()
			},
			l = {
				y: u !== "horizontal" ? o / 100 : 1,
				x: u !== "vertical" ? o / 100 : 1
			};
		i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? {
			height: 0,
			width: 0
		} : f), i.to = {
			height: f.height * l.y,
			width: f.width * l.x,
			outerHeight: f.outerHeight * l.y,
			outerWidth: f.outerWidth * l.x
		}, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
	}, e.effects.effect.size = function(t, n) {
		var r, i, s, o = e(this),
			u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			f = ["width", "height", "overflow"],
			l = ["fontSize"],
			c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = e.effects.setMode(o, t.mode || "effect"),
			d = t.restore || p !== "effect",
			v = t.scale || "both",
			m = t.origin || ["middle", "center"],
			g = o.css("position"),
			y = d ? u : a,
			b = {
				height: 0,
				width: 0
			};
		p === "show" && o.show(), r = {
			height: o.height(),
			width: o.width(),
			outerHeight: o.outerHeight(),
			outerWidth: o.outerWidth()
		}, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = {
			from: {
				y: o.from.height / r.height,
				x: o.from.width / r.width
			},
			to: {
				y: o.to.height / r.height,
				x: o.to.width / r.width
			}
		};
		if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));
		(v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);
		if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function() {
			var n = e(this),
				r = {
					height: n.height(),
					width: n.width()
				};
			d && e.effects.save(n, f), n.from = {
				height: r.height * s.from.y,
				width: r.width * s.from.x
			}, n.to = {
				height: r.height * s.to.y,
				width: r.width * s.to.x
			}, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
				d && e.effects.restore(n, f)
			})
		});
		o.animate(o.to, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({
					position: "relative",
					top: o.to.top,
					left: o.to.left
				}) : e.each(["top", "left"], function(e, t) {
					o.css(t, function(t, n) {
						var r = parseInt(n, 10),
							i = e ? o.to.left : o.to.top;
						return n === "auto" ? i + "px" : r + i + "px"
					})
				})), e.effects.removeWrapper(o), n()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.shake = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "height", "width"],
			s = e.effects.setMode(r, t.mode || "effect"),
			o = t.direction || "left",
			u = t.distance || 20,
			a = t.times || 3,
			f = a * 2 + 1,
			l = Math.round(t.duration / f),
			c = o === "up" || o === "down" ? "top" : "left",
			h = o === "up" || o === "left",
			p = {},
			d = {},
			v = {},
			m, g = r.queue(),
			y = g.length;
		e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);
		for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
		r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function() {
			s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
		}), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue()
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.slide = function(t, n) {
		var r = e(this),
			i = ["position", "top", "bottom", "left", "right", "width", "height"],
			s = e.effects.setMode(r, t.mode || "show"),
			o = s === "show",
			u = t.direction || "left",
			a = u === "up" || u === "down" ? "top" : "left",
			f = u === "up" || u === "left",
			l, c = {};
		e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({
			overflow: "hidden"
		}), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
			}
		})
	}
})(jQuery);
(function(e, t) {
	e.effects.effect.transfer = function(t, n) {
		var r = e(this),
			i = e(t.to),
			s = i.css("position") === "fixed",
			o = e("body"),
			u = s ? o.scrollTop() : 0,
			a = s ? o.scrollLeft() : 0,
			f = i.offset(),
			l = {
				top: f.top - u,
				left: f.left - a,
				height: i.innerHeight(),
				width: i.innerWidth()
			},
			c = r.offset(),
			h = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
				top: c.top - u,
				left: c.left - a,
				height: r.innerHeight(),
				width: r.innerWidth(),
				position: s ? "fixed" : "absolute"
			}).animate(l, t.duration, t.easing, function() {
				h.remove(), n()
			})
	}
})(jQuery);
(function(e, t) {
	var n = !1;
	e.widget("ui.menu", {
		version: "1.9.1",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, e.proxy(function(e) {
				this.options.disabled && e.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function(e) {
					e.preventDefault()
				},
				"click .ui-state-disabled > a": function(e) {
					e.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(t) {
					var r = e(t.target).closest(".ui-menu-item");
					!n && r.not(".ui-state-disabled").length && (n = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(t) {
					var n = e(t.currentTarget);
					n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(e, t) {
					var n = this.active || this.element.children(".ui-menu-item").eq(0);
					t || this.focus(e, n)
				},
				blur: function(t) {
					this._delay(function() {
						e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function(t) {
					e(t.target).closest(".ui-menu").length || this.collapseAll(t), n = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var t = e(this);
				t.data("ui-menu-submenu-carat") && t.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(t) {
			function a(e) {
				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var n, r, i, s, o, u = !0;
			switch (t.keyCode) {
			case e.ui.keyCode.PAGE_UP:
				this.previousPage(t);
				break;
			case e.ui.keyCode.PAGE_DOWN:
				this.nextPage(t);
				break;
			case e.ui.keyCode.HOME:
				this._move("first", "first", t);
				break;
			case e.ui.keyCode.END:
				this._move("last", "last", t);
				break;
			case e.ui.keyCode.UP:
				this.previous(t);
				break;
			case e.ui.keyCode.DOWN:
				this.next(t);
				break;
			case e.ui.keyCode.LEFT:
				this.collapse(t);
				break;
			case e.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
				break;
			case e.ui.keyCode.ENTER:
			case e.ui.keyCode.SPACE:
				this._activate(t);
				break;
			case e.ui.keyCode.ESCAPE:
				this.collapse(t);
				break;
			default:
				u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
					return o.test(e(this).children("a").text())
				}), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
					return o.test(e(this).children("a").text())
				})), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function() {
					delete this.previousFilter
				}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			u && t.preventDefault()
		},
		_activate: function(e) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
		},
		refresh: function() {
			var t, n = this.options.icons.submenu,
				r = this.element.find(this.options.menus + ":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				});
			t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), t.children(":not(.ui-menu-item)").each(function() {
				var t = e(this);
				/[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
			}), t.children(".ui-state-disabled").attr("aria-disabled", "true"), r.each(function() {
				var t = e(this),
					r = t.prev("a"),
					i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
				r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
			}), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		focus: function(e, t) {
			var n, r;
			this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
				item: t
			})
		},
		_scrollIntoView: function(t) {
			var n, r, i, s, o, u;
			this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
		},
		blur: function(e, t) {
			t || clearTimeout(this.timer);
			if (!this.active) return;
			this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
				item: this.active
			})
		},
		_startOpening: function(e) {
			clearTimeout(this.timer);
			if (e.attr("aria-hidden") !== "true") return;
			this.timer = this._delay(function() {
				this._close(), this._open(e)
			}, this.delay)
		},
		_open: function(t) {
			var n = e.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
		},
		collapseAll: function(t, n) {
			clearTimeout(this.timer), this.timer = this._delay(function() {
				var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
				r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
			}, this.delay)
		},
		_close: function(e) {
			e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(e) {
			var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			t && t.length && (this._close(), this.focus(e, t))
		},
		expand: function(e) {
			var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			t && t.length && (this._open(t.parent()), this._delay(function() {
				this.focus(e, t)
			}))
		},
		next: function(e) {
			this._move("next", "first", e)
		},
		previous: function(e) {
			this._move("prev", "last", e)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(e, t, n) {
			var r;
			this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
			if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
			this.focus(n, r)
		},
		nextPage: function(t) {
			var n, r, i;
			if (!this.active) {
				this.next(t);
				return
			}
			if (this.isLastItem()) return;
			this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return n = e(this), n.offset().top - r - i < 0
			}), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
		},
		previousPage: function(t) {
			var n, r, i;
			if (!this.active) {
				this.next(t);
				return
			}
			if (this.isFirstItem()) return;
			this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return n = e(this), n.offset().top - r + i > 0
			}), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(t) {
			this.active = this.active || e(t.target).closest(".ui-menu-item");
			var n = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
		}
	})
})(jQuery);
(function(e, t) {
	e.widget("ui.progressbar", {
		version: "1.9.1",
		options: {
			value: 0,
			max: 100
		},
		min: 0,
		_create: function() {
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._value()
			}), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function(e) {
			return e === t ? this._value() : (this._setOption("value", e), this)
		},
		_setOption: function(e, t) {
			e === "value" && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
		},
		_value: function() {
			var e = this.options.value;
			return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
		},
		_percentage: function() {
			return 100 * this._value() / this.options.max
		},
		_refreshValue: function() {
			var e = this.value(),
				t = this._percentage();
			this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
		}
	})
})(jQuery);
(function(e, t) {
	e.widget("ui.resizable", e.ui.mouse, {
		version: "1.9.1",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 1e3
		},
		_create: function() {
			var t = this,
				n = this.options;
			this.element.addClass("ui-resizable"), e.extend(this, {
				_aspectRatio: !! n.aspectRatio,
				aspectRatio: n.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			} : "e,s,se");
			if (this.handles.constructor == String) {
				this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
				var r = this.handles.split(",");
				this.handles = {};
				for (var i = 0; i < r.length; i++) {
					var s = e.trim(r[i]),
						o = "ui-resizable-" + s,
						u = e('<div class="ui-resizable-handle ' + o + '"></div>');
					u.css({
						zIndex: n.zIndex
					}), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
				}
			}
			this._renderAxis = function(t) {
				t = t || this.element;
				for (var n in this.handles) {
					this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
						var r = e(this.handles[n], this.element),
							i = 0;
						i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
						var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
						t.css(s, i), this._proportionallyResize()
					}
					if (!e(this.handles[n]).length) continue
				}
			}, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
				if (!t.resizing) {
					if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
					t.axis = e && e[1] ? e[1] : "se"
				}
			}), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				if (n.disabled) return;
				e(this).removeClass("ui-resizable-autohide"), t._handles.show()
			}).mouseleave(function() {
				if (n.disabled) return;
				t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var t = function(t) {
				e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			if (this.elementIsWrapper) {
				t(this.element);
				var n = this.element;
				this.originalElement.css({
					position: n.css("position"),
					width: n.outerWidth(),
					height: n.outerHeight(),
					top: n.css("top"),
					left: n.css("left")
				}).insertAfter(n), n.remove()
			}
			return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
		},
		_mouseCapture: function(t) {
			var n = !1;
			for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function(t) {
			var r = this.options,
				i = this.element.position(),
				s = this.element;
			this.resizing = !0, this.documentScroll = {
				top: e(document).scrollTop(),
				left: e(document).scrollLeft()
			}, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
				position: "absolute",
				top: i.top,
				left: i.left
			}), this._renderProxy();
			var o = n(this.helper.css("left")),
				u = n(this.helper.css("top"));
			r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: o,
				top: u
			}, this.size = this._helper ? {
				width: s.outerWidth(),
				height: s.outerHeight()
			} : {
				width: s.width(),
				height: s.height()
			}, this.originalSize = this._helper ? {
				width: s.outerWidth(),
				height: s.outerHeight()
			} : {
				width: s.width(),
				height: s.height()
			}, this.originalPosition = {
				left: o,
				top: u
			}, this.sizeDiff = {
				width: s.outerWidth() - s.width(),
				height: s.outerHeight() - s.height()
			}, this.originalMousePosition = {
				left: t.pageX,
				top: t.pageY
			}, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
			var a = e(".ui-resizable-" + this.axis).css("cursor");
			return e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
		},
		_mouseDrag: function(e) {
			var t = this.helper,
				n = this.options,
				r = {},
				i = this,
				s = this.originalMousePosition,
				o = this.axis,
				u = e.pageX - s.left || 0,
				a = e.pageY - s.top || 0,
				f = this._change[o];
			if (!f) return !1;
			var l = f.apply(this, [e, u, a]);
			this._updateVirtualBoundaries(e.shiftKey);
			if (this._aspectRatio || e.shiftKey) l = this._updateRatio(l, e);
			return l = this._respectSize(l, e), this._propagate("resize", e), t.css({
				top: this.position.top + "px",
				left: this.position.left + "px",
				width: this.size.width + "px",
				height: this.size.height + "px"
			}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
		},
		_mouseStop: function(t) {
			this.resizing = !1;
			var n = this.options,
				r = this;
			if (this._helper) {
				var i = this._proportionallyResizeElements,
					s = i.length && /textarea/i.test(i[0].nodeName),
					o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
					u = s ? 0 : r.sizeDiff.width,
					a = {
						width: r.helper.width() - u,
						height: r.helper.height() - o
					},
					f = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
					l = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
				n.animate || this.element.css(e.extend(a, {
					top: l,
					left: f
				})), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
			}
			return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function(e) {
			var t = this.options,
				n, i, s, o, u;
			u = {
				minWidth: r(t.minWidth) ? t.minWidth : 0,
				maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
				minHeight: r(t.minHeight) ? t.minHeight : 0,
				maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
			};
			if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
			this._vBoundaries = u
		},
		_updateCache: function(e) {
			var t = this.options;
			this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
		},
		_updateRatio: function(e, t) {
			var n = this.options,
				i = this.position,
				s = this.size,
				o = this.axis;
			return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
		},
		_respectSize: function(e, t) {
			var n = this.helper,
				i = this._vBoundaries,
				s = this._aspectRatio || t.shiftKey,
				o = this.axis,
				u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
				a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
				f = r(e.width) && i.minWidth && i.minWidth > e.width,
				l = r(e.height) && i.minHeight && i.minHeight > e.height;
			f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
			var c = this.originalPosition.left + this.originalSize.width,
				h = this.position.top + this.size.height,
				p = /sw|nw|w/.test(o),
				d = /nw|ne|n/.test(o);
			f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && d && (e.top = h - i.minHeight), a && d && (e.top = h - i.maxHeight);
			var v = !e.width && !e.height;
			return v && !e.left && e.top ? e.top = null : v && !e.top && e.left && (e.left = null), e
		},
		_proportionallyResize: function() {
			var t = this.options;
			if (!this._proportionallyResizeElements.length) return;
			var n = this.helper || this.element;
			for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
				var i = this._proportionallyResizeElements[r];
				if (!this.borderDif) {
					var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
						o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
					this.borderDif = e.map(s, function(e, t) {
						var n = parseInt(e, 10) || 0,
							r = parseInt(o[t], 10) || 0;
						return n + r
					})
				}
				i.css({
					height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
					width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
				})
			}
		},
		_renderProxy: function() {
			var t = this.element,
				n = this.options;
			this.elementOffset = t.offset();
			if (this._helper) {
				this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
				var r = e.ui.ie6 ? 1 : 0,
					i = e.ui.ie6 ? 2 : -1;
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() + i,
					height: this.element.outerHeight() + i,
					position: "absolute",
					left: this.elementOffset.left - r + "px",
					top: this.elementOffset.top - r + "px",
					zIndex: ++n.zIndex
				}), this.helper.appendTo("body").disableSelection()
			} else this.helper = this.element
		},
		_change: {
			e: function(e, t, n) {
				return {
					width: this.originalSize.width + t
				}
			},
			w: function(e, t, n) {
				var r = this.options,
					i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + t,
					width: i.width - t
				}
			},
			n: function(e, t, n) {
				var r = this.options,
					i = this.originalSize,
					s = this.originalPosition;
				return {
					top: s.top + n,
					height: i.height - n
				}
			},
			s: function(e, t, n) {
				return {
					height: this.originalSize.height + n
				}
			},
			se: function(t, n, r) {
				return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
			},
			sw: function(t, n, r) {
				return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
			},
			ne: function(t, n, r) {
				return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
			},
			nw: function(t, n, r) {
				return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
			}
		},
		_propagate: function(t, n) {
			e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), e.ui.plugin.add("resizable", "alsoResize", {
		start: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = function(t) {
					e(t).each(function() {
						var t = e(this);
						t.data("resizable-alsoresize", {
							width: parseInt(t.width(), 10),
							height: parseInt(t.height(), 10),
							left: parseInt(t.css("left"), 10),
							top: parseInt(t.css("top"), 10)
						})
					})
				};
			typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
				s(e)
			}) : s(i.alsoResize)
		},
		resize: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r.originalSize,
				o = r.originalPosition,
				u = {
					height: r.size.height - s.height || 0,
					width: r.size.width - s.width || 0,
					top: r.position.top - o.top || 0,
					left: r.position.left - o.left || 0
				},
				a = function(t, r) {
					e(t).each(function() {
						var t = e(this),
							i = e(this).data("resizable-alsoresize"),
							s = {},
							o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						e.each(o, function(e, t) {
							var n = (i[t] || 0) + (u[t] || 0);
							n && n >= 0 && (s[t] = n || null)
						}), t.css(s)
					})
				};
			typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
				a(e, t)
			}) : a(i.alsoResize)
		},
		stop: function(t, n) {
			e(this).removeData("resizable-alsoresize")
		}
	}), e.ui.plugin.add("resizable", "animate", {
		stop: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r._proportionallyResizeElements,
				o = s.length && /textarea/i.test(s[0].nodeName),
				u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
				a = o ? 0 : r.sizeDiff.width,
				f = {
					width: r.size.width - a,
					height: r.size.height - u
				},
				l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
				c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
			r.element.animate(e.extend(f, c && l ? {
				top: c,
				left: l
			} : {}), {
				duration: i.animateDuration,
				easing: i.animateEasing,
				step: function() {
					var n = {
						width: parseInt(r.element.css("width"), 10),
						height: parseInt(r.element.css("height"), 10),
						top: parseInt(r.element.css("top"), 10),
						left: parseInt(r.element.css("left"), 10)
					};
					s && s.length && e(s[0]).css({
						width: n.width,
						height: n.height
					}), r._updateCache(n), r._propagate("resize", t)
				}
			})
		}
	}), e.ui.plugin.add("resizable", "containment", {
		start: function(t, r) {
			var i = e(this).data("resizable"),
				s = i.options,
				o = i.element,
				u = s.containment,
				a = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
			if (!a) return;
			i.containerElement = e(a);
			if (/document/.test(u) || u == document) i.containerOffset = {
				left: 0,
				top: 0
			}, i.containerPosition = {
				left: 0,
				top: 0
			}, i.parentData = {
				element: e(document),
				left: 0,
				top: 0,
				width: e(document).width(),
				height: e(document).height() || document.body.parentNode.scrollHeight
			};
			else {
				var f = e(a),
					l = [];
				e(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
					l[e] = n(f.css("padding" + t))
				}), i.containerOffset = f.offset(), i.containerPosition = f.position(), i.containerSize = {
					height: f.innerHeight() - l[3],
					width: f.innerWidth() - l[1]
				};
				var c = i.containerOffset,
					h = i.containerSize.height,
					p = i.containerSize.width,
					d = e.ui.hasScroll(a, "left") ? a.scrollWidth : p,
					v = e.ui.hasScroll(a) ? a.scrollHeight : h;
				i.parentData = {
					element: a,
					left: c.left,
					top: c.top,
					width: d,
					height: v
				}
			}
		},
		resize: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r.containerSize,
				o = r.containerOffset,
				u = r.size,
				a = r.position,
				f = r._aspectRatio || t.shiftKey,
				l = {
					top: 0,
					left: 0
				},
				c = r.containerElement;
			c[0] != document && /static/.test(c.css("position")) && (l = o), a.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - l.left), f && (r.size.height = r.size.width / r.aspectRatio), r.position.left = i.helper ? o.left : 0), a.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), f && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
			var h = Math.abs((r._helper ? r.offset.left - l.left : r.offset.left - l.left) + r.sizeDiff.width),
				p = Math.abs((r._helper ? r.offset.top - l.top : r.offset.top - o.top) + r.sizeDiff.height),
				d = r.containerElement.get(0) == r.element.parent().get(0),
				v = /relative|absolute/.test(r.containerElement.css("position"));
			d && v && (h -= r.parentData.left), h + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - h, f && (r.size.height = r.size.width / r.aspectRatio)), p + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - p, f && (r.size.width = r.size.height * r.aspectRatio))
		},
		stop: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r.position,
				o = r.containerOffset,
				u = r.containerPosition,
				a = r.containerElement,
				f = e(r.helper),
				l = f.offset(),
				c = f.outerWidth() - r.sizeDiff.width,
				h = f.outerHeight() - r.sizeDiff.height;
			r._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
				left: l.left - u.left - o.left,
				width: c,
				height: h
			}), r._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
				left: l.left - u.left - o.left,
				width: c,
				height: h
			})
		}
	}), e.ui.plugin.add("resizable", "ghost", {
		start: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r.size;
			r.ghost = r.originalElement.clone(), r.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
		},
		resize: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options;
			r.ghost && r.ghost.css({
				position: "relative",
				height: r.size.height,
				width: r.size.width
			})
		},
		stop: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options;
			r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
		}
	}), e.ui.plugin.add("resizable", "grid", {
		resize: function(t, n) {
			var r = e(this).data("resizable"),
				i = r.options,
				s = r.size,
				o = r.originalSize,
				u = r.originalPosition,
				a = r.axis,
				f = i._aspectRatio || t.shiftKey;
			i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
			var l = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
				c = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
			/^(se|s|e)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c) : /^(ne)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c) : /^(sw)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.left = u.left - l) : (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c, r.position.left = u.left - l)
		}
	});
	var n = function(e) {
		return parseInt(e, 10) || 0
	},
		r = function(e) {
			return !isNaN(parseInt(e, 10))
		}
})(jQuery);
(function(e, t) {
	e.widget("ui.selectable", e.ui.mouse, {
		version: "1.9.1",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch"
		},
		_create: function() {
			var t = this;
			this.element.addClass("ui-selectable"), this.dragged = !1;
			var n;
			this.refresh = function() {
				n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function() {
					var t = e(this),
						n = t.offset();
					e.data(this, "selectable-item", {
						element: this,
						$element: t,
						left: n.left,
						top: n.top,
						right: n.left + t.outerWidth(),
						bottom: n.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function(t) {
			var n = this;
			this.opos = [t.pageX, t.pageY];
			if (this.options.disabled) return;
			var r = this.options;
			this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
				left: t.clientX,
				top: t.clientY,
				width: 0,
				height: 0
			}), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var r = e.data(this, "selectable-item");
				r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
					unselecting: r.element
				}))
			}), e(t.target).parents().andSelf().each(function() {
				var r = e.data(this, "selectable-item");
				if (r) {
					var i = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected");
					return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
						selecting: r.element
					}) : n._trigger("unselecting", t, {
						unselecting: r.element
					}), !1
				}
			})
		},
		_mouseDrag: function(t) {
			var n = this;
			this.dragged = !0;
			if (this.options.disabled) return;
			var r = this.options,
				i = this.opos[0],
				s = this.opos[1],
				o = t.pageX,
				u = t.pageY;
			if (i > o) {
				var a = o;
				o = i, i = a
			}
			if (s > u) {
				var a = u;
				u = s, s = a
			}
			return this.helper.css({
				left: i,
				top: s,
				width: o - i,
				height: u - s
			}), this.selectees.each(function() {
				var a = e.data(this, "selectable-item");
				if (!a || a.element == n.element[0]) return;
				var f = !1;
				r.tolerance == "touch" ? f = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (f = a.left > i && a.right < o && a.top > s && a.bottom < u), f ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
					selecting: a.element
				}))) : (a.selecting && ((t.metaKey || t.ctrlKey) && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
					unselecting: a.element
				}))), a.selected && !t.metaKey && !t.ctrlKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
					unselecting: a.element
				})))
			}), !1
		},
		_mouseStop: function(t) {
			var n = this;
			this.dragged = !1;
			var r = this.options;
			return e(".ui-unselecting", this.element[0]).each(function() {
				var r = e.data(this, "selectable-item");
				r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
					unselected: r.element
				})
			}), e(".ui-selecting", this.element[0]).each(function() {
				var r = e.data(this, "selectable-item");
				r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
					selected: r.element
				})
			}), this._trigger("stop", t), this.helper.remove(), !1
		}
	})
})(jQuery);
(function(e, t) {
	var n = 5;
	e.widget("ui.slider", e.ui.mouse, {
		version: "1.9.1",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null
		},
		_create: function() {
			var t, r, i = this.options,
				s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				u = [];
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
			for (t = s.length; t < r; t++) u.push(o);
			this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
				e.preventDefault()
			}).mouseenter(function() {
				i.disabled || e(this).addClass("ui-state-hover")
			}).mouseleave(function() {
				e(this).removeClass("ui-state-hover")
			}).focus(function() {
				i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
			}).blur(function() {
				e(this).removeClass("ui-state-focus")
			}), this.handles.each(function(t) {
				e(this).data("ui-slider-handle-index", t)
			}), this._on(this.handles, {
				keydown: function(t) {
					var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
					switch (t.keyCode) {
					case e.ui.keyCode.HOME:
					case e.ui.keyCode.END:
					case e.ui.keyCode.PAGE_UP:
					case e.ui.keyCode.PAGE_DOWN:
					case e.ui.keyCode.UP:
					case e.ui.keyCode.RIGHT:
					case e.ui.keyCode.DOWN:
					case e.ui.keyCode.LEFT:
						t.preventDefault();
						if (!this._keySliding) {
							this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
							if (r === !1) return
						}
					}
					o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
					switch (t.keyCode) {
					case e.ui.keyCode.HOME:
						s = this._valueMin();
						break;
					case e.ui.keyCode.END:
						s = this._valueMax();
						break;
					case e.ui.keyCode.PAGE_UP:
						s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
						break;
					case e.ui.keyCode.PAGE_DOWN:
						s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
						break;
					case e.ui.keyCode.UP:
					case e.ui.keyCode.RIGHT:
						if (i === this._valueMax()) return;
						s = this._trimAlignValue(i + o);
						break;
					case e.ui.keyCode.DOWN:
					case e.ui.keyCode.LEFT:
						if (i === this._valueMin()) return;
						s = this._trimAlignValue(i - o)
					}
					this._slide(t, u, s)
				},
				keyup: function(t) {
					var n = e(t.target).data("ui-slider-handle-index");
					this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
				}
			}), this._refreshValue(), this._animateOff = !1
		},
		_destroy: function() {
			this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var n, r, i, s, o, u, a, f, l = this,
				c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), n = {
				x: t.pageX,
				y: t.pageY
			}, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
				var n = Math.abs(r - l.values(t));
				i > n && (i = n, s = e(this), o = t)
			}), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {
				left: 0,
				top: 0
			} : {
				left: t.pageX - a.left - s.width() / 2,
				top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(e) {
			var t = {
				x: e.pageX,
				y: e.pageY
			},
				n = this._normValueFromMouse(t);
			return this._slide(e, this._handleIndex, n), !1
		},
		_mouseStop: function(e) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(e) {
			var t, n, r, i, s;
			return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
		},
		_start: function(e, t) {
			var n = {
				handle: this.handles[t],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
		},
		_slide: function(e, t, n) {
			var r, i, s;
			this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
				handle: this.handles[t],
				value: n,
				values: i
			}), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
				handle: this.handles[t],
				value: n
			}), s !== !1 && this.value(n))
		},
		_stop: function(e, t) {
			var n = {
				handle: this.handles[t],
				value: this.value()
			};
			this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
		},
		_change: function(e, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var n = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
			}
		},
		value: function(e) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
				return
			}
			return this._value()
		},
		values: function(t, n) {
			var r, i, s;
			if (arguments.length > 1) {
				this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
				return
			}
			if (!arguments.length) return this._values();
			if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
			r = this.options.values, i = arguments[0];
			for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
			this._refreshValue()
		},
		_setOption: function(t, n) {
			var r, i = 0;
			e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
			switch (t) {
			case "disabled":
				n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
				break;
			case "orientation":
				this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
				break;
			case "value":
				this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
				break;
			case "values":
				this._animateOff = !0, this._refreshValue();
				for (r = 0; r < i; r += 1) this._change(null, r);
				this._animateOff = !1;
				break;
			case "min":
			case "max":
				this._animateOff = !0, this._refreshValue(), this._animateOff = !1
			}
		},
		_value: function() {
			var e = this.options.value;
			return e = this._trimAlignValue(e), e
		},
		_values: function(e) {
			var t, n, r;
			if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
			n = this.options.values.slice();
			for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
			return n
		},
		_trimAlignValue: function(e) {
			if (e <= this._valueMin()) return this._valueMin();
			if (e >= this._valueMax()) return this._valueMax();
			var t = this.options.step > 0 ? this.options.step : 1,
				n = (e - this._valueMin()) % t,
				r = e - n;
			return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var t, n, r, i, s, o = this.options.range,
				u = this.options,
				a = this,
				f = this._animateOff ? !1 : u.animate,
				l = {};
			this.options.values && this.options.values.length ? this.handles.each(function(r) {
				n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
					left: n + "%"
				}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
					width: n - t + "%"
				}, {
					queue: !1,
					duration: u.animate
				})) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
					bottom: n + "%"
				}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
					height: n - t + "%"
				}, {
					queue: !1,
					duration: u.animate
				}))), t = n
			}) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
				width: n + "%"
			}, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
				width: 100 - n + "%"
			}, {
				queue: !1,
				duration: u.animate
			}), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
				height: n + "%"
			}, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
				height: 100 - n + "%"
			}, {
				queue: !1,
				duration: u.animate
			}))
		}
	})
})(jQuery);
(function(e, t) {
	e.widget("ui.sortable", e.ui.mouse, {
		version: "1.9.1",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3
		},
		_create: function() {
			var e = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function(t, n) {
			t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : e.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function(t, n) {
			var r = this;
			if (this.reverting) return !1;
			if (this.options.disabled || this.options.type == "static") return !1;
			this._refreshItems(t);
			var i = null,
				s = e(t.target).parents().each(function() {
					if (e.data(this, r.widgetName + "-item") == r) return i = e(this), !1
				});
			e.data(t.target, r.widgetName + "-item") == r && (i = e(t.target));
			if (!i) return !1;
			if (this.options.handle && !n) {
				var o = !1;
				e(this.options.handle, i).find("*").andSelf().each(function() {
					this == t.target && (o = !0)
				});
				if (!o) return !1
			}
			return this.currentItem = i, this._removeCurrentsFromItems(), !0
		},
		_mouseStart: function(t, n, r) {
			var i = this.options;
			this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, e.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
			if (!r) for (var s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
			return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
		},
		_mouseDrag: function(t) {
			this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
			if (this.options.scroll) {
				var n = this.options,
					r = !1;
				this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
			}
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
			if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
			for (var i = this.items.length - 1; i >= 0; i--) {
				var s = this.items[i],
					o = s.item[0],
					u = this._intersectsWithPointer(s);
				if (!u) continue;
				if (s.instance !== this.currentContainer) continue;
				if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.contains(this.element[0], o) : !0)) {
					this.direction = u == 1 ? "down" : "up";
					if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
					this._rearrange(t, s), this._trigger("change", t, this._uiHash());
					break
				}
			}
			return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(t, n) {
			if (!t) return;
			e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
			if (this.options.revert) {
				var r = this,
					i = this.placeholder.offset();
				this.reverting = !0, e(this.helper).animate({
					left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
					top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
				}, parseInt(this.options.revert, 10) || 500, function() {
					r._clear(t)
				})
			} else this._clear(t, n);
			return !1
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(t) {
			var n = this._getItemsAsjQuery(t && t.connected),
				r = [];
			return t = t || {}, e(n).each(function() {
				var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
				n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
			}), !r.length && t.key && r.push(t.key + "="), r.join("&")
		},
		toArray: function(t) {
			var n = this._getItemsAsjQuery(t && t.connected),
				r = [];
			return t = t || {}, n.each(function() {
				r.push(e(t.item || this).attr(t.attribute || "id") || "")
			}), r
		},
		_intersectsWith: function(e) {
			var t = this.positionAbs.left,
				n = t + this.helperProportions.width,
				r = this.positionAbs.top,
				i = r + this.helperProportions.height,
				s = e.left,
				o = s + e.width,
				u = e.top,
				a = u + e.height,
				f = this.offset.click.top,
				l = this.offset.click.left,
				c = r + f > u && r + f < a && t + l > s && t + l < o;
			return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
		},
		_intersectsWithPointer: function(t) {
			var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				i = n && r,
				s = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
		},
		_intersectsWithSides: function(t) {
			var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				i = this._getDragVerticalDirection(),
				s = this._getDragHorizontalDirection();
			return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
		},
		_getDragVerticalDirection: function() {
			var e = this.positionAbs.top - this.lastPositionAbs.top;
			return e != 0 && (e > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var e = this.positionAbs.left - this.lastPositionAbs.left;
			return e != 0 && (e > 0 ? "right" : "left")
		},
		refresh: function(e) {
			return this._refreshItems(e), this.refreshPositions(), this
		},
		_connectWith: function() {
			var e = this.options;
			return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
		},
		_getItemsAsjQuery: function(t) {
			var n = [],
				r = [],
				i = this._connectWith();
			if (i && t) for (var s = i.length - 1; s >= 0; s--) {
				var o = e(i[s]);
				for (var u = o.length - 1; u >= 0; u--) {
					var a = e.data(o[u], this.widgetName);
					a && a != this && !a.options.disabled && r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
				}
			}
			r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
			for (var s = r.length - 1; s >= 0; s--) r[s][0].each(function() {
				n.push(this)
			});
			return e(n)
		},
		_removeCurrentsFromItems: function() {
			var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = e.grep(this.items, function(e) {
				for (var n = 0; n < t.length; n++) if (t[n] == e.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(t) {
			this.items = [], this.containers = [this];
			var n = this.items,
				r = [
					[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
						item: this.currentItem
					}) : e(this.options.items, this.element), this]
				],
				i = this._connectWith();
			if (i && this.ready) for (var s = i.length - 1; s >= 0; s--) {
				var o = e(i[s]);
				for (var u = o.length - 1; u >= 0; u--) {
					var a = e.data(o[u], this.widgetName);
					a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
						item: this.currentItem
					}) : e(a.options.items, a.element), a]), this.containers.push(a))
				}
			}
			for (var s = r.length - 1; s >= 0; s--) {
				var f = r[s][1],
					l = r[s][0];
				for (var u = 0, c = l.length; u < c; u++) {
					var h = e(l[u]);
					h.data(this.widgetName + "-item", f), n.push({
						item: h,
						instance: f,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
			}
		},
		refreshPositions: function(t) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			for (var n = this.items.length - 1; n >= 0; n--) {
				var r = this.items[n];
				if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
				var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
				t || (r.width = i.outerWidth(), r.height = i.outerHeight());
				var s = i.offset();
				r.left = s.left, r.top = s.top
			}
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
			for (var n = this.containers.length - 1; n >= 0; n--) {
				var s = this.containers[n].element.offset();
				this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
			}
			return this
		},
		_createPlaceholder: function(t) {
			t = t || this;
			var n = t.options;
			if (!n.placeholder || n.placeholder.constructor == String) {
				var r = n.placeholder;
				n.placeholder = {
					element: function() {
						var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
						return r || (n.style.visibility = "hidden"), n
					},
					update: function(e, i) {
						if (r && !n.forcePlaceholderSize) return;
						i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
					}
				}
			}
			t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
		},
		_contactContainers: function(t) {
			var n = null,
				r = null;
			for (var i = this.containers.length - 1; i >= 0; i--) {
				if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
				if (this._intersectsWith(this.containers[i].containerCache)) {
					if (n && e.contains(this.containers[i].element[0], n.element[0])) continue;
					n = this.containers[i], r = i
				} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
			}
			if (!n) return;
			if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
			else {
				var s = 1e4,
					o = null,
					u = this.containers[r].floating ? "left" : "top",
					a = this.containers[r].floating ? "width" : "height",
					f = this.positionAbs[u] + this.offset.click[u];
				for (var l = this.items.length - 1; l >= 0; l--) {
					if (!e.contains(this.containers[r].element[0], this.items[l].item[0])) continue;
					if (this.items[l].item[0] == this.currentItem[0]) continue;
					var c = this.items[l].item.offset()[u],
						h = !1;
					Math.abs(c - f) > Math.abs(c + this.items[l][a] - f) && (h = !0, c += this.items[l][a]), Math.abs(c - f) < s && (s = Math.abs(c - f), o = this.items[l], this.direction = h ? "up" : "down")
				}
				if (!o && !this.options.dropOnEmpty) return;
				this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
			}
		},
		_createHelper: function(t) {
			var n = this.options,
				r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
			return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
		},
		_adjustOffsetFromHelper: function(t) {
			typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
			if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
				top: 0,
				left: 0
			};
			return {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var e = this.currentItem.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t = this.options;
			t.containment == "parent" && (t.containment = this.helper[0].parentNode);
			if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			if (!/^(document|window|parent)$/.test(t.containment)) {
				var n = e(t.containment)[0],
					r = e(t.containment).offset(),
					i = e(n).css("overflow") != "hidden";
				this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
			}
		},
		_convertPositionTo: function(t, n) {
			n || (n = this.position);
			var r = t == "absolute" ? 1 : -1,
				i = this.options,
				s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(s[0].tagName);
			return {
				top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
				left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
			}
		},
		_generatePosition: function(t) {
			var n = this.options,
				r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				i = /(html|body)/i.test(r[0].tagName);
			this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
			var s = t.pageX,
				o = t.pageY;
			if (this.originalPosition) {
				this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
				if (n.grid) {
					var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
					o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
					var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
					s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
				}
			}
			return {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
				left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function(e, t, n, r) {
			n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var i = this.counter;
			this._delay(function() {
				i == this.counter && this.refreshPositions(!r)
			})
		},
		_clear: function(t, n) {
			this.reverting = !1;
			var r = [];
			!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
			if (this.helper[0] == this.currentItem[0]) {
				for (var i in this._storedCSS) if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			this.fromOutside && !n && r.push(function(e) {
				this._trigger("receive", e, this._uiHash(this.fromOutside))
			}), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function(e) {
				this._trigger("update", e, this._uiHash())
			}), this !== this.currentContainer && (n || (r.push(function(e) {
				this._trigger("remove", e, this._uiHash())
			}), r.push(function(e) {
				return function(t) {
					e._trigger("receive", t, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), r.push(function(e) {
				return function(t) {
					e._trigger("update", t, this._uiHash(this))
				}
			}.call(this, this.currentContainer))));
			for (var i = this.containers.length - 1; i >= 0; i--) n || r.push(function(e) {
				return function(t) {
					e._trigger("deactivate", t, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function(e) {
				return function(t) {
					e._trigger("out", t, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
			this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
			if (this.cancelHelperRemoval) {
				if (!n) {
					this._trigger("beforeStop", t, this._uiHash());
					for (var i = 0; i < r.length; i++) r[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
			if (!n) {
				for (var i = 0; i < r.length; i++) r[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function() {
			e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(t) {
			var n = t || this;
			return {
				helper: n.helper,
				placeholder: n.placeholder || e([]),
				position: n.position,
				originalPosition: n.originalPosition,
				offset: n.positionAbs,
				item: n.currentItem,
				sender: t ? t.element : null
			}
		}
	})
})(jQuery);
(function(e) {
	function t(e) {
		return function() {
			var t = this.element.val();
			e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
		}
	}
	e.widget("ui.spinner", {
		version: "1.9.1",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var t = {},
				n = this.element;
			return e.each(["min", "max", "step"], function(e, r) {
				var i = n.attr(r);
				i !== undefined && i.length && (t[r] = i)
			}), t
		},
		_events: {
			keydown: function(e) {
				this._start(e) && this._keydown(e) && e.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(e) {
				if (this.cancelBlur) {
					delete this.cancelBlur;
					return
				}
				this._refresh(), this.previous !== this.element.val() && this._trigger("change", e)
			},
			mousewheel: function(e, t) {
				if (!t) return;
				if (!this.spinning && !this._start(e)) return !1;
				this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
					this.spinning && this._stop(e)
				}, 100), e.preventDefault()
			},
			"mousedown .ui-spinner-button": function(t) {
				function r() {
					var e = this.element[0] === this.document[0].activeElement;
					e || (this.element.focus(), this.previous = n, this._delay(function() {
						this.previous = n
					}))
				}
				var n;
				n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
					delete this.cancelBlur, r.call(this)
				});
				if (this._start(t) === !1) return;
				this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(t) {
				if (!e(t.currentTarget).hasClass("ui-state-active")) return;
				if (this._start(t) === !1) return !1;
				this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
		},
		_keydown: function(t) {
			var n = this.options,
				r = e.ui.keyCode;
			switch (t.keyCode) {
			case r.UP:
				return this._repeat(null, 1, t), !0;
			case r.DOWN:
				return this._repeat(null, -1, t), !0;
			case r.PAGE_UP:
				return this._repeat(null, n.page, t), !0;
			case r.PAGE_DOWN:
				return this._repeat(null, -n.page, t), !0
			}
			return !1
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
		},
		_start: function(e) {
			return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
		},
		_repeat: function(e, t, n) {
			e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
				this._repeat(40, t, n)
			}, e), this._spin(t * this.options.step, n)
		},
		_spin: function(e, t) {
			var n = this.value() || 0;
			this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));
			if (!this.spinning || this._trigger("spin", t, {
				value: n
			}) !== !1) this._value(n), this.counter++
		},
		_increment: function(t) {
			var n = this.options.incremental;
			return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
		},
		_precision: function() {
			var e = this._precisionOf(this.options.step);
			return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e
		},
		_precisionOf: function(e) {
			var t = e.toString(),
				n = t.indexOf(".");
			return n === -1 ? 0 : t.length - n - 1
		},
		_adjustValue: function(e) {
			var t, n, r = this.options;
			return t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
		},
		_stop: function(e) {
			if (!this.spinning) return;
			clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)
		},
		_setOption: function(e, t) {
			if (e === "culture" || e === "numberFormat") {
				var n = this._parse(this.element.val());
				this.options[e] = t, this.element.val(this._format(n));
				return
			}(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: t(function(e) {
			this._super(e), this._value(this.element.val())
		}),
		_parse: function(e) {
			return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e
		},
		_format: function(e) {
			return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function(e, t) {
			var n;
			e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: t(function(e) {
			this._stepUp(e)
		}),
		_stepUp: function(e) {
			this._spin((e || 1) * this.options.step)
		},
		stepDown: t(function(e) {
			this._stepDown(e)
		}),
		_stepDown: function(e) {
			this._spin((e || 1) * -this.options.step)
		},
		pageUp: t(function(e) {
			this._stepUp((e || 1) * this.options.page)
		}),
		pageDown: t(function(e) {
			this._stepDown((e || 1) * this.options.page)
		}),
		value: function(e) {
			if (!arguments.length) return this._parse(this.element.val());
			t(this._value).call(this, e)
		},
		widget: function() {
			return this.uiSpinner
		}
	})
})(jQuery);
(function(e, t) {
	function i() {
		return ++n
	}
	function s(e) {
		return e.hash.length > 1 && e.href.replace(r, "") === location.href.replace(r, "")
	}
	var n = 0,
		r = /#.*$/;
	e.widget("ui.tabs", {
		version: "1.9.1",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function() {
			var t = this,
				n = this.options,
				r = n.active,
				i = location.hash.substring(1);
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
				e(this).is(".ui-state-disabled") && t.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				e(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs();
			if (r === null) {
				i && this.tabs.each(function(t, n) {
					if (e(n).attr("aria-controls") === i) return r = t, !1
				}), r === null && (r = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
				if (r === null || r === -1) r = this.tabs.length ? 0 : !1
			}
			r !== !1 && (r = this.tabs.index(this.tabs.eq(r)), r === -1 && (r = n.collapsible ? !1 : 0)), n.active = r, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
				return t.tabs.index(e)
			}))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : e()
			}
		},
		_tabKeydown: function(t) {
			var n = e(this.document[0].activeElement).closest("li"),
				r = this.tabs.index(n),
				i = !0;
			if (this._handlePageNav(t)) return;
			switch (t.keyCode) {
			case e.ui.keyCode.RIGHT:
			case e.ui.keyCode.DOWN:
				r++;
				break;
			case e.ui.keyCode.UP:
			case e.ui.keyCode.LEFT:
				i = !1, r--;
				break;
			case e.ui.keyCode.END:
				r = this.anchors.length - 1;
				break;
			case e.ui.keyCode.HOME:
				r = 0;
				break;
			case e.ui.keyCode.SPACE:
				t.preventDefault(), clearTimeout(this.activating), this._activate(r);
				return;
			case e.ui.keyCode.ENTER:
				t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
				return;
			default:
				return
			}
			t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
				this.option("active", r)
			}, this.delay))
		},
		_panelKeydown: function(t) {
			if (this._handlePageNav(t)) return;
			t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
		},
		_handlePageNav: function(t) {
			if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
			if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
		},
		_findNextTab: function(t, n) {
			function i() {
				return t > r && (t = 0), t < 0 && (t = r), t
			}
			var r = this.tabs.length - 1;
			while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
			return t
		},
		_focusNextTab: function(e, t) {
			return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
		},
		_setOption: function(e, t) {
			if (e === "active") {
				this._activate(t);
				return
			}
			if (e === "disabled") {
				this._setupDisabled(t);
				return
			}
			this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
		},
		_tabId: function(e) {
			return e.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function(e) {
			return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var t = this.options,
				n = this.tablist.children(":has(a[href])");
			t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
				return n.index(e)
			}), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var t = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function() {
				return e("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = e(), this.anchors.each(function(n, r) {
				var i, o, u, a = e(r).uniqueId().attr("id"),
					f = e(r).closest("li"),
					l = f.attr("aria-controls");
				s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f), i = "#" + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({
					"aria-controls": i.substring(1),
					"aria-labelledby": a
				}), o.attr("aria-labelledby", a)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function() {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(t) {
			return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function(t) {
			e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
			for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = t
		},
		_setupEvents: function(t) {
			var n = {
				click: function(e) {
					e.preventDefault()
				}
			};
			t && e.each(t.split(" "), function(e, t) {
				n[t] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(t) {
			var n, r, i = this.element.parent();
			t === "fill" ? (e.support.minHeight || (r = i.css("overflow"), i.css("overflow", "hidden")), n = i.height(), this.element.siblings(":visible").each(function() {
				var t = e(this),
					r = t.css("position");
				if (r === "absolute" || r === "fixed") return;
				n -= t.outerHeight(!0)
			}), r && i.css("overflow", r), this.element.children().not(this.panels).each(function() {
				n -= e(this).outerHeight(!0)
			}), this.panels.each(function() {
				e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function() {
				n = Math.max(n, e(this).height("").height())
			}).height(n))
		},
		_eventHandler: function(t) {
			var n = this.options,
				r = this.active,
				i = e(t.currentTarget),
				s = i.closest("li"),
				o = s[0] === r[0],
				u = o && n.collapsible,
				a = u ? e() : this._getPanelForTab(s),
				f = r.length ? this._getPanelForTab(r) : e(),
				l = {
					oldTab: r,
					oldPanel: f,
					newTab: u ? e() : s,
					newPanel: a
				};
			t.preventDefault();
			if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
			n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
		},
		_toggle: function(t, n) {
			function o() {
				r.running = !1, r._trigger("activate", t, n)
			}
			function u() {
				n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o())
			}
			var r = this,
				i = n.newPanel,
				s = n.oldPanel;
			this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
				n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
			}) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), n.oldTab.attr("aria-selected", "false"), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function() {
				return e(this).attr("tabIndex") === 0
			}).attr("tabIndex", -1), i.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), n.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function(t) {
			var n, r = this._findActive(t);
			if (r[0] === this.active[0]) return;
			r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: n,
				currentTarget: n,
				preventDefault: e.noop
			})
		},
		_findActive: function(t) {
			return t === !1 ? e() : this.tabs.eq(t)
		},
		_getIndex: function(e) {
			return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
		},
		_destroy: function() {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
				e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function() {
				var t = e(this),
					n = t.data("ui-tabs-aria-controls");
				n ? t.attr("aria-controls", n) : t.removeAttr("aria-controls")
			}), this.options.heightStyle !== "content" && this.panels.css("height", "")
		},
		enable: function(n) {
			var r = this.options.disabled;
			if (r === !1) return;
			n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function(e) {
				return e !== n ? e : null
			}) : r = e.map(this.tabs, function(e, t) {
				return t !== n ? t : null
			})), this._setupDisabled(r)
		},
		disable: function(n) {
			var r = this.options.disabled;
			if (r === !0) return;
			if (n === t) r = !0;
			else {
				n = this._getIndex(n);
				if (e.inArray(n, r) !== -1) return;
				e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
			}
			this._setupDisabled(r)
		},
		load: function(t, n) {
			t = this._getIndex(t);
			var r = this,
				i = this.tabs.eq(t),
				o = i.find(".ui-tabs-anchor"),
				u = this._getPanelForTab(i),
				a = {
					tab: i,
					panel: u
				};
			if (s(o[0])) return;
			this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function(e) {
				setTimeout(function() {
					u.html(e), r._trigger("load", n, a)
				}, 1)
			}).complete(function(e, t) {
				setTimeout(function() {
					t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
				}, 1)
			}))
		},
		_ajaxSettings: function(t, n, r) {
			var i = this;
			return {
				url: t.attr("href"),
				beforeSend: function(t, s) {
					return i._trigger("beforeLoad", n, e.extend({
						jqXHR: t,
						ajaxSettings: s
					}, r))
				}
			}
		},
		_getPanelForTab: function(t) {
			var n = e(t).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + n))
		}
	}), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function(e, t) {
		return {
			tab: e,
			panel: t,
			index: this.anchors.index(e)
		}
	}, e.widget("ui.tabs", e.ui.tabs, {
		url: function(e, t) {
			this.anchors.eq(e).attr("href", t)
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			ajaxOptions: null,
			cache: !1
		},
		_create: function() {
			this._super();
			var t = this;
			this._on({
				tabsbeforeload: function(n, r) {
					if (e.data(r.tab[0], "cache.tabs")) {
						n.preventDefault();
						return
					}
					r.jqXHR.success(function() {
						t.options.cache && e.data(r.tab[0], "cache.tabs", !0)
					})
				}
			})
		},
		_ajaxSettings: function(t, n, r) {
			var i = this.options.ajaxOptions;
			return e.extend({}, i, {
				error: function(e, t) {
					try {
						i.error(e, t, r.tab.closest("li").index(), r.tab[0])
					} catch (n) {}
				}
			}, this._superApply(arguments))
		},
		_setOption: function(e, t) {
			e === "cache" && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
		},
		_destroy: function() {
			this.anchors.removeData("cache.tabs"), this._super()
		},
		url: function(e) {
			this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		abort: function() {
			this.xhr && this.xhr.abort()
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			spinner: "<em>Loading&#8230;</em>"
		},
		_create: function() {
			this._super(), this._on({
				tabsbeforeload: function(e, t) {
					if (e.target !== this.element[0] || !this.options.spinner) return;
					var n = t.tab.find("span"),
						r = n.html();
					n.html(this.options.spinner), t.jqXHR.complete(function() {
						n.html(r)
					})
				}
			})
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			enable: null,
			disable: null
		},
		enable: function(t) {
			var n = this.options,
				r;
			if (t && n.disabled === !0 || e.isArray(n.disabled) && e.inArray(t, n.disabled) !== -1) r = !0;
			this._superApply(arguments), r && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
		},
		disable: function(t) {
			var n = this.options,
				r;
			if (t && n.disabled === !1 || e.isArray(n.disabled) && e.inArray(t, n.disabled) === -1) r = !0;
			this._superApply(arguments), r && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			add: null,
			remove: null,
			tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
		},
		add: function(n, r, i) {
			i === t && (i = this.anchors.length);
			var s, o, u = this.options,
				a = e(u.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, r)),
				f = n.indexOf("#") ? this._tabId(a) : n.replace("#", "");
			return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), a.attr("aria-controls", f), s = i >= this.tabs.length, o = this.element.find("#" + f), o.length || (o = this._createPanel(f), s ? i > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[i])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), s ? a.appendTo(this.tablist) : a.insertBefore(this.tabs[i]), u.disabled = e.map(u.disabled, function(e) {
				return e >= i ? ++e : e
			}), this.refresh(), this.tabs.length === 1 && u.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
		},
		remove: function(t) {
			t = this._getIndex(t);
			var n = this.options,
				r = this.tabs.eq(t).remove(),
				i = this._getPanelForTab(r).remove();
			return r.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function(e) {
				return e !== t
			}), function(e) {
				return e >= t ? --e : e
			}), this.refresh(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		length: function() {
			return this.anchors.length
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			idPrefix: "ui-tabs-"
		},
		_tabId: function(t) {
			var n = t.is("li") ? t.find("a[href]") : t;
			return n = n[0], e(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			panelTemplate: "<div></div>"
		},
		_createPanel: function(t) {
			return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		_create: function() {
			var e = this.options;
			e.active === null && e.selected !== t && (e.active = e.selected === -1 ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
		},
		_setOption: function(e, t) {
			if (e !== "selected") return this._super(e, t);
			var n = this.options;
			this._super("active", t === -1 ? !1 : t), n.selected = n.active, n.selected === !1 && (n.selected = -1)
		},
		_eventHandler: function() {
			this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			show: null,
			select: null
		},
		_create: function() {
			this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
		},
		_trigger: function(e, t, n) {
			var r = this._superApply(arguments);
			return r ? (e === "beforeActivate" && n.newTab.length ? r = this._super("select", t, {
				tab: n.newTab.find(".ui-tabs-anchor")[0],
				panel: n.newPanel[0],
				index: n.newTab.closest("li").index()
			}) : e === "activate" && n.newTab.length && (r = this._super("show", t, {
				tab: n.newTab.find(".ui-tabs-anchor")[0],
				panel: n.newPanel[0],
				index: n.newTab.closest("li").index()
			})), r) : !1
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		select: function(e) {
			e = this._getIndex(e);
			if (e === -1) {
				if (!this.options.collapsible || this.options.selected === -1) return;
				e = this.options.selected
			}
			this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
		}
	}), function() {
		var t = 0;
		e.widget("ui.tabs", e.ui.tabs, {
			options: {
				cookie: null
			},
			_create: function() {
				var e = this.options,
					t;
				e.active == null && e.cookie && (t = parseInt(this._cookie(), 10), t === -1 && (t = !1), e.active = t), this._super()
			},
			_cookie: function(n) {
				var r = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
				return arguments.length && (r.push(n === !1 ? -1 : n), r.push(this.options.cookie)), e.cookie.apply(null, r)
			},
			_refresh: function() {
				this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
			},
			_eventHandler: function() {
				this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
			},
			_destroy: function() {
				this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
			}
		})
	}(), e.widget("ui.tabs", e.ui.tabs, {
		_trigger: function(t, n, r) {
			var i = e.extend({}, r);
			return t === "load" && (i.panel = i.panel[0], i.tab = i.tab.find(".ui-tabs-anchor")[0]), this._super(t, n, i)
		}
	}), e.widget("ui.tabs", e.ui.tabs, {
		options: {
			fx: null
		},
		_getFx: function() {
			var t, n, r = this.options.fx;
			return r && (e.isArray(r) ? (t = r[0], n = r[1]) : t = n = r), r ? {
				show: n,
				hide: t
			} : null
		},
		_toggle: function(e, t) {
			function o() {
				n.running = !1, n._trigger("activate", e, t)
			}
			function u() {
				t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && s.show ? r.animate(s.show, s.show.duration, function() {
					o()
				}) : (r.show(), o())
			}
			var n = this,
				r = t.newPanel,
				i = t.oldPanel,
				s = this._getFx();
			if (!s) return this._super(e, t);
			n.running = !0, i.length && s.hide ? i.animate(s.hide, s.hide.duration, function() {
				t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
			}) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i.hide(), u())
		}
	}))
})(jQuery);
(function(e) {
	function n(t, n) {
		var r = (t.attr("aria-describedby") || "").split(/\s+/);
		r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
	}
	function r(t) {
		var n = t.data("ui-tooltip-id"),
			r = (t.attr("aria-describedby") || "").split(/\s+/),
			i = e.inArray(n, r);
		i !== -1 && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
	}
	var t = 0;
	e.widget("ui.tooltip", {
		version: "1.9.1",
		options: {
			content: function() {
				return e(this).attr("title")
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flipfit"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
		},
		_setOption: function(t, n) {
			var r = this;
			if (t === "disabled") {
				this[n ? "_disable" : "_enable"](), this.options[t] = n;
				return
			}
			this._super(t, n), t === "content" && e.each(this.tooltips, function(e, t) {
				r._updateContent(t)
			})
		},
		_disable: function() {
			var t = this;
			e.each(this.tooltips, function(n, r) {
				var i = e.Event("blur");
				i.target = i.currentTarget = r[0], t.close(i, !0)
			}), this.element.find(this.options.items).andSelf().each(function() {
				var t = e(this);
				t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
			})
		},
		_enable: function() {
			this.element.find(this.options.items).andSelf().each(function() {
				var t = e(this);
				t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
			})
		},
		open: function(t) {
			var n = this,
				r = e(t ? t.target : this.element).closest(this.options.items);
			if (!r.length) return;
			if (this.options.track && r.data("ui-tooltip-id")) {
				this._find(r).position(e.extend({
					of: r
				}, this.options.position)), this._off(this.document, "mousemove");
				return
			}
			r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("tooltip-open", !0), t && t.type === "mouseover" && r.parents().each(function() {
				var t;
				e(this).data("tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, n.close(t, !0)), this.title && (e(this).uniqueId(), n.parents[this.id] = {
					element: this,
					title: this.title
				}, this.title = "")
			}), this._updateContent(r, t)
		},
		_updateContent: function(e, t) {
			var n, r = this.options.content,
				i = this;
			if (typeof r == "string") return this._open(t, e, r);
			n = r.call(e[0], function(n) {
				if (!e.data("tooltip-open")) return;
				i._delay(function() {
					this._open(t, e, n)
				})
			}), n && this._open(t, e, n)
		},
		_open: function(t, r, i) {
			function f(e) {
				a.of = e;
				if (s.is(":hidden")) return;
				s.position(a)
			}
			var s, o, u, a = e.extend({}, this.options.position);
			if (!i) return;
			s = this._find(r);
			if (s.length) {
				s.find(".ui-tooltip-content").html(i);
				return
			}
			r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")), s = this._tooltip(r), n(r, s.attr("id")), s.find(".ui-tooltip-content").html(i), this.options.track && t && /^mouse/.test(t.originalEvent.type) ? (this._on(this.document, {
				mousemove: f
			}), f(t)) : s.position(e.extend({
				of: r
			}, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = setInterval(function() {
				s.is(":visible") && (f(a.of), clearInterval(u))
			}, e.fx.interval)), this._trigger("open", t, {
				tooltip: s
			}), o = {
				keyup: function(t) {
					if (t.keyCode === e.ui.keyCode.ESCAPE) {
						var n = e.Event(t);
						n.currentTarget = r[0], this.close(n, !0)
					}
				},
				remove: function() {
					this._removeTooltip(s)
				}
			};
			if (!t || t.type === "mouseover") o.mouseleave = "close";
			if (!t || t.type === "focusin") o.focusout = "close";
			this._on(r, o)
		},
		close: function(t) {
			var n = this,
				i = e(t ? t.currentTarget : this.element),
				s = this._find(i);
			if (this.closing) return;
			i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), s.stop(!0), this._hide(s, this.options.hide, function() {
				n._removeTooltip(e(this))
			}), i.removeData("tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && e.each(this.parents, function(e, t) {
				t.element.title = t.title, delete n.parents[e]
			}), this.closing = !0, this._trigger("close", t, {
				tooltip: s
			}), this.closing = !1
		},
		_tooltip: function(n) {
			var r = "ui-tooltip-" + t++,
				i = e("<div>").attr({
					id: r,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), e.fn.bgiframe && i.bgiframe(), this.tooltips[r] = n, i
		},
		_find: function(t) {
			var n = t.data("ui-tooltip-id");
			return n ? e("#" + n) : e()
		},
		_removeTooltip: function(e) {
			e.remove(), delete this.tooltips[e.attr("id")]
		},
		_destroy: function() {
			var t = this;
			e.each(this.tooltips, function(n, r) {
				var i = e.Event("blur");
				i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
			})
		}
	})
})(jQuery); /*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s, l, d, t) {
	var m = d(s),
		q = d(l),
		a = d.fancybox = function() {
			a.open.apply(this, arguments)
		},
		u = !1,
		k = l.createTouch !== t,
		o = function(a) {
			return "string" === d.type(a)
		},
		n = function(b, c) {
			c && o(b) && 0 < b.indexOf("%") && (b = a.getViewport()[c] / 100 * parseInt(b, 10));
			return Math.round(b) + "px"
		};
	d.extend(a, {
		version: "2.0.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			autoSize: !0,
			autoResize: !k,
			autoCenter: !k,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: 0.5,
			fixed: !1,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3E3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			keys: {
				next: [13, 32, 34, 39, 40],
				prev: [8, 33, 37, 38],
				close: [27]
			},
			tpl: {
				wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + (d.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
				swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
				next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 300,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 300,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 300,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 300,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: {
					speedIn: 0,
					speedOut: 300,
					opacity: 0.8,
					css: {
						cursor: "pointer"
					},
					closeClick: !0
				},
				title: {
					type: "float"
				}
			}
		},
		group: {},
		opts: {},
		coming: null,
		current: null,
		isOpen: !1,
		isOpened: !1,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(b, c) {
			a.close(!0);
			b && !d.isArray(b) && (b = b instanceof d ? d(b).get() : [b]);
			a.isActive = !0;
			a.opts = d.extend(!0, {}, a.defaults, c);
			d.isPlainObject(c) && c.keys !== t && (a.opts.keys = c.keys ? d.extend({}, a.defaults.keys, c.keys) : !1);
			a.group = b;
			a._start(a.opts.index || 0)
		},
		cancel: function() {
			a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null))
		},
		close: function(b) {
			a.cancel();
			a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || b && !0 === b[0] ? (d(".fancybox-wrap").stop().trigger("onReset").remove(), a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.closeMethod]()))
		},
		play: function(b) {
			var c = function() {
				clearTimeout(a.player.timer)
			},
				e = function() {
					c();
					a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
				},
				f = function() {
					c();
					d("body").unbind(".player");
					a.player.isActive = !1;
					a.trigger("onPlayEnd")
				};
			if (a.player.isActive || b && !1 === b[0]) f();
			else if (a.current && (a.current.loop || a.current.index < a.group.length - 1)) a.player.isActive = !0, d("body").bind({
				"afterShow.player onUpdate.player": e,
				"onCancel.player beforeClose.player": f,
				"beforeLoad.player": c
			}), e(), a.trigger("onPlayStart")
		},
		next: function() {
			a.current && a.jumpto(a.current.index + 1)
		},
		prev: function() {
			a.current && a.jumpto(a.current.index - 1)
		},
		jumpto: function(b) {
			a.current && (b = parseInt(b, 10), 1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)), a.group[b] !== t && (a.cancel(), a._start(b)))
		},
		reposition: function(b, c) {
			var e;
			a.isOpen && (e = a._getPosition(c), b && "scroll" === b.type ? (delete e.position, a.wrap.stop(!0, !0).animate(e, 200)) : a.wrap.css(e))
		},
		update: function(b) {
			a.isOpen && (u || setTimeout(function() {
				var c = a.current,
					e = !b || b && "orientationchange" === b.type;
				if (u && (u = !1, c)) {
					if (!b || "scroll" !== b.type || e) c.autoSize && "iframe" !== c.type && (a.inner.height("auto"), c.height = a.inner.height()), (c.autoResize || e) && a._setDimension(), c.canGrow && "iframe" !== c.type && a.inner.height("auto");
					(c.autoCenter || e) && a.reposition(b);
					a.trigger("onUpdate")
				}
			}, 200), u = !0)
		},
		toggle: function() {
			a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update())
		},
		hideLoading: function() {
			q.unbind("keypress.fb");
			d("#fancybox-loading").remove()
		},
		showLoading: function() {
			a.hideLoading();
			q.bind("keypress.fb", function(b) {
				27 === b.keyCode && (b.preventDefault(), a.cancel())
			});
			d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")
		},
		getViewport: function() {
			return {
				x: m.scrollLeft(),
				y: m.scrollTop(),
				w: k && s.innerWidth ? s.innerWidth : m.width(),
				h: k && s.innerHeight ? s.innerHeight : m.height()
			}
		},
		unbindEvents: function() {
			a.wrap && a.wrap.unbind(".fb");
			q.unbind(".fb");
			m.unbind(".fb")
		},
		bindEvents: function() {
			var b = a.current,
				c = b.keys;
			b && (m.bind("resize.fb orientationchange.fb" + (b.autoCenter && !b.fixed ? " scroll.fb" : ""), a.update), c && q.bind("keydown.fb", function(b) {
				var f;
				f = b.target || b.srcElement;
				if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && (!f || !f.type && !d(f).is("[contenteditable]"))) f = b.keyCode, -1 < d.inArray(f, c.close) ? (a.close(), b.preventDefault()) : -1 < d.inArray(f, c.next) ? (a.next(), b.preventDefault()) : -1 < d.inArray(f, c.prev) && (a.prev(), b.preventDefault())
			}), d.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function(b, c) {
				var d = b.target || null;
				if (0 !== c && (!d || 0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth)) b.preventDefault(), a[0 < c ? "prev" : "next"]()
			}))
		},
		trigger: function(b, c) {
			var e, f = c || a[-1 < d.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];
			if (f) {
				d.isFunction(f[b]) && (e = f[b].apply(f, Array.prototype.slice.call(arguments, 1)));
				if (!1 === e) return !1;
				f.helpers && d.each(f.helpers, function(c, e) {
					if (e && d.isPlainObject(a.helpers[c]) && d.isFunction(a.helpers[c][b])) a.helpers[c][b](e, f)
				});
				d.event.trigger(b + ".fb")
			}
		},
		isImage: function(a) {
			return o(a) && a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)
		},
		isSWF: function(a) {
			return o(a) && a.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function(b) {
			var c = {},
				e = a.group[b] || null,
				f, g, i;
			if (e && (e.nodeType || e instanceof d)) f = !0, d.metadata && (c = d(e).metadata());
			c = d.extend(!0, {}, a.opts, {
				index: b,
				element: e
			}, d.isPlainObject(e) ? e : c);
			d.each(["href", "title", "content", "type"], function(b, g) {
				c[g] = a.opts[g] || f && d(e).attr(g) || c[g] || null
			});
			"number" === typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]);
			c.modal && d.extend(!0, c, {
				closeBtn: !1,
				closeClick: !1,
				nextClick: !1,
				arrows: !1,
				mouseWheel: !1,
				keys: null,
				helpers: {
					overlay: {
						css: {
							cursor: "auto"
						},
						closeClick: !1
					}
				}
			});
			a.coming = c;
			if (!1 === a.trigger("beforeLoad")) a.coming = null;
			else {
				g = c.type;
				b = c.href || e;
				g || (f && (g = d(e).data("fancybox-type"), g || (g = (g = e.className.match(/fancybox\.(\w+)/)) ? g[1] : null)), !g && o(b) && (a.isImage(b) ? g = "image" : a.isSWF(b) ? g = "swf" : b.match(/^#/) && (g = "inline")), g || (g = f ? "inline" : "html"), c.type = g);
				if ("inline" === g || "html" === g) {
					if (c.content || (c.content = "inline" === g ? d(o(b) ? b.replace(/.*(?=#[^\s]+$)/, "") : b) : e), !c.content || !c.content.length) g = null
				} else b || (g = null);
				"ajax" === g && o(b) && (i = b.split(/\s+/, 2), b = i.shift(), c.selector = i.shift());
				c.href = b;
				c.group = a.group;
				c.isDom = f;
				switch (g) {
				case "image":
					a._loadImage();
					break;
				case "ajax":
					a._loadAjax();
					break;
				case "inline":
				case "iframe":
				case "swf":
				case "html":
					a._afterLoad();
					break;
				default:
					a._error("type")
				}
			}
		},
		_error: function(b) {
			a.hideLoading();
			d.extend(a.coming, {
				type: "html",
				autoSize: !0,
				minWidth: 0,
				minHeight: 0,
				padding: 15,
				hasError: b,
				content: a.coming.tpl.error
			});
			a._afterLoad()
		},
		_loadImage: function() {
			var b = a.imgPreload = new Image;
			b.onload = function() {
				this.onload = this.onerror = null;
				a.coming.width = this.width;
				a.coming.height = this.height;
				a._afterLoad()
			};
			b.onerror = function() {
				this.onload = this.onerror = null;
				a._error("image")
			};
			b.src = a.coming.href;
			(b.complete === t || !b.complete) && a.showLoading()
		},
		_loadAjax: function() {
			a.showLoading();
			a.ajaxLoad = d.ajax(d.extend({}, a.coming.ajax, {
				url: a.coming.href,
				error: function(b, c) {
					a.coming && "abort" !== c ? a._error("ajax", b) : a.hideLoading()
				},
				success: function(b, c) {
					"success" === c && (a.coming.content = b, a._afterLoad())
				}
			}))
		},
		_preloadImages: function() {
			var b = a.group,
				c = a.current,
				e = b.length,
				f, g, i, h = Math.min(c.preload, e - 1);
			if (c.preload && !(2 > b.length)) for (i = 1; i <= h; i += 1) if (f = b[(c.index + i) % e], g = f.href || d(f).attr("href") || f, "image" === f.type || a.isImage(g))(new Image).src = g
		},
		_afterLoad: function() {
			a.hideLoading();
			!a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.prevMethod]()) : (d(".fancybox-wrap").stop().trigger("onReset").remove(), a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, a.wrap = d(a.current.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + a.current.type + " fancybox-tmp " + a.current.wrapCSS).appendTo("body"), a.skin = d(".fancybox-skin", a.wrap).css("padding", n(a.current.padding)), a.outer = d(".fancybox-outer", a.wrap), a.inner = d(".fancybox-inner", a.wrap), a._setContent())
		},
		_setContent: function() {
			var b = a.current,
				c = b.content,
				e = b.type,
				f = b.minWidth,
				g = b.minHeight,
				i = b.maxWidth,
				h = b.maxHeight;
			switch (e) {
			case "inline":
			case "ajax":
			case "html":
				b.selector ? c = d("<div>").html(c).find(b.selector) : c instanceof d && (c.parent().hasClass("fancybox-inner") && c.parents(".fancybox-wrap").unbind("onReset"), c = c.show().detach(), d(a.wrap).bind("onReset", function() {
					c.appendTo("body").hide()
				}));
				b.autoSize && (f = d('<div class="fancybox-wrap ' + a.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({
					minWidth: n(f, "w"),
					minHeight: n(g, "h"),
					maxWidth: n(i, "w"),
					maxHeight: n(h, "h")
				}).append(c), b.width = f.width(), b.height = f.height(), f.width(a.current.width), f.height() > b.height && (f.width(b.width + 1), b.width = f.width(), b.height = f.height()), c = f.contents().detach(), f.remove());
				break;
			case "image":
				c = b.tpl.image.replace("{href}", b.href);
				b.aspectRatio = !0;
				break;
			case "swf":
				c =
				b.tpl.swf.replace(/\{width\}/g, b.width).replace(/\{height\}/g, b.height).replace(/\{href\}/g, b.href);
				break;
			case "iframe":
				c = d(b.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", b.scrolling).attr("src", b.href), b.scrolling = k ? "scroll" : "auto"
			}
			if ("image" === e || "swf" === e) b.autoSize = !1, b.scrolling = "visible";
			"iframe" === e && b.autoSize ? (a.showLoading(), a._setDimension(), a.inner.css("overflow", b.scrolling), c.bind({
				onCancel: function() {
					d(this).unbind();
					a._afterZoomOut()
				},
				load: function() {
					a.hideLoading();
					try {
						this.contentWindow.document.location && (a.current.height = d(this).contents().find("body").height())
					} catch (b) {
						a.current.autoSize = !1
					}
					a[a.isOpen ? "_afterZoomIn" : "_beforeShow"]()
				}
			}).appendTo(a.inner)) : (a.inner.append(c), a._beforeShow())
		},
		_beforeShow: function() {
			a.coming = null;
			a.trigger("beforeShow");
			a._setDimension();
			a.wrap.hide().removeClass("fancybox-tmp");
			a.bindEvents();
			a._preloadImages();
			a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]()
		},
		_setDimension: function() {
			var b = a.wrap,
				c =
				a.inner,
				e = a.current,
				f = a.getViewport(),
				g = e.margin,
				i = 2 * e.padding,
				h = e.width,
				j = e.height,
				r = e.maxWidth + i,
				k = e.maxHeight + i,
				l = e.minWidth + i,
				m = e.minHeight + i,
				p;
			f.w -= g[1] + g[3];
			f.h -= g[0] + g[2];
			o(h) && 0 < h.indexOf("%") && (h = (f.w - i) * parseFloat(h) / 100);
			o(j) && 0 < j.indexOf("%") && (j = (f.h - i) * parseFloat(j) / 100);
			g = h / j;
			h += i;
			j += i;
			e.fitToView && (r = Math.min(f.w, r), k = Math.min(f.h, k));
			if (e.aspectRatio) {
				if (h > r && (h = r, j = (h - i) / g + i), j > k && (j = k, h = (j - i) * g + i), h < l && (h = l, j = (h - i) / g + i), j < m) j = m, h = (j - i) * g + i
			} else h = Math.max(l, Math.min(h, r)), j = Math.max(m, Math.min(j, k));
			h = Math.round(h);
			j = Math.round(j);
			d(b.add(c)).width("auto").height("auto");
			c.width(h - i).height(j - i);
			b.width(h);
			p = b.height();
			if (h > r || p > k) for (;
			(h > r || p > k) && h > l && p > m;) j -= 10, e.aspectRatio ? (h = Math.round((j - i) * g + i), h < l && (h = l, j = (h - i) / g + i)) : h -= 10, c.width(h - i).height(j - i), b.width(h), p = b.height();
			e.dim = {
				width: n(h),
				height: n(p)
			};
			e.canGrow = e.autoSize && j > m && j < k;
			e.canShrink = !1;
			e.canExpand = !1;
			if (h - i < e.width || j - i < e.height) e.canExpand = !0;
			else if ((h > f.w || p > f.h) && h > l && j > m) e.canShrink = !0;
			a.innerSpace = p - i - c.height()
		},
		_getPosition: function(b) {
			var c = a.current,
				e = a.getViewport(),
				f = c.margin,
				d = a.wrap.width() + f[1] + f[3],
				i = a.wrap.height() + f[0] + f[2],
				h = {
					position: "absolute",
					top: f[0] + e.y,
					left: f[3] + e.x
				};
			c.autoCenter && c.fixed && !b && i <= e.h && d <= e.w && (h = {
				position: "fixed",
				top: f[0],
				left: f[3]
			});
			h.top = n(Math.max(h.top, h.top + (e.h - i) * c.topRatio));
			h.left = n(Math.max(h.left, h.left + 0.5 * (e.w - d)));
			return h
		},
		_afterZoomIn: function() {
			var b = a.current,
				c = b ? b.scrolling : "no";
			if (b && (a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened"), a.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c), a.trigger("afterShow"), a.update(), (b.closeClick || b.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", function(c) {
				if (!d(c.target).is("a") && !d(c.target).parent().is("a")) a[b.closeClick ? "close" : "next"]()
			}), b.closeBtn && d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb", a.close), b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && d(b.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (b.loop || b.index < a.group.length - 1) && d(b.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.opts.autoPlay && !a.player.isActive)) a.opts.autoPlay = !1, a.play()
		},
		_afterZoomOut: function() {
			var b = a.current;
			a.wrap.trigger("onReset").remove();
			d.extend(a, {
				group: {},
				opts: {},
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});
			a.trigger("afterClose", b)
		}
	});
	a.transitions = {
		getOrigPosition: function() {
			var b = a.current,
				c = b.element,
				e = b.padding,
				f = d(b.orig),
				g = {},
				i = 50,
				h = 50;
			!f.length && b.isDom && d(c).is(":visible") && (f = d(c).find("img:first"), f.length || (f = d(c)));
			f.length ? (g = f.offset(), f.is("img") && (i = f.outerWidth(), h = f.outerHeight())) : (b = a.getViewport(), g.top = b.y + 0.5 * (b.h - h), g.left = b.x + 0.5 * (b.w - i));
			return g = {
				top: n(g.top - e),
				left: n(g.left - e),
				width: n(i + 2 * e),
				height: n(h + 2 * e)
			}
		},
		step: function(b, c) {
			var e = c.prop,
				d, g;
			if ("width" === e || "height" === e) d = Math.ceil(b - 2 * a.current.padding), "height" === e && (g = (b - c.start) / (c.end - c.start), c.start > c.end && (g = 1 - g), d -= a.innerSpace * g), a.inner[e](d)
		},
		zoomIn: function() {
			var b = a.wrap,
				c = a.current,
				e = c.openEffect,
				f = "elastic" === e,
				g = d.extend({}, c.dim, a._getPosition(f)),
				i = d.extend({
					opacity: 1
				}, g);
			delete i.position;
			f ? (g = this.getOrigPosition(), c.openOpacity && (g.opacity = 0), a.outer.add(a.inner).width("auto").height("auto")) : "fade" === e && (g.opacity = 0);
			b.css(g).show().animate(i, {
				duration: "none" === e ? 0 : c.openSpeed,
				easing: c.openEasing,
				step: f ? this.step : null,
				complete: a._afterZoomIn
			})
		},
		zoomOut: function() {
			var b = a.wrap,
				c = a.current,
				d = c.openEffect,
				f = "elastic" === d,
				g = {
					opacity: 0
				};
			f && ("fixed" === b.css("position") && b.css(a._getPosition(!0)), g = this.getOrigPosition(), c.closeOpacity && (g.opacity = 0));
			b.animate(g, {
				duration: "none" === d ? 0 : c.closeSpeed,
				easing: c.closeEasing,
				step: f ? this.step : null,
				complete: a._afterZoomOut
			})
		},
		changeIn: function() {
			var b = a.wrap,
				c = a.current,
				d = c.nextEffect,
				f = "elastic" === d,
				g = a._getPosition(f),
				i = {
					opacity: 1
				};
			g.opacity = 0;
			f && (g.top = n(parseInt(g.top, 10) - 200), i.top = "+=200px");
			b.css(g).show().animate(i, {
				duration: "none" === d ? 0 : c.nextSpeed,
				easing: c.nextEasing,
				complete: a._afterZoomIn
			})
		},
		changeOut: function() {
			var b = a.wrap,
				c = a.current,
				e = c.prevEffect,
				f = {
					opacity: 0
				};
			b.removeClass("fancybox-opened");
			"elastic" === e && (f.top = "+=200px");
			b.animate(f, {
				duration: "none" === e ? 0 : c.prevSpeed,
				easing: c.prevEasing,
				complete: function() {
					d(this).trigger("onReset").remove()
				}
			})
		}
	};
	a.helpers.overlay = {
		overlay: null,
		update: function() {
			var a, c;
			this.overlay.width("100%").height("100%");
			d.browser.msie || k ? (a = Math.max(l.documentElement.scrollWidth, l.body.scrollWidth), c = Math.max(l.documentElement.offsetWidth, l.body.offsetWidth), a = a < c ? m.width() : a) : a = q.width();
			this.overlay.width(a).height(q.height())
		},
		beforeShow: function(b) {
			this.overlay || (b = d.extend(!0, {}, a.defaults.helpers.overlay, b), this.overlay = d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"), b.closeClick && this.overlay.bind("click.fb", a.close), a.current.fixed && !k ? this.overlay.addClass("overlay-fixed") : (this.update(), this.onUpdate = function() {
				this.update()
			}), this.overlay.fadeTo(b.speedIn, b.opacity))
		},
		afterClose: function(a) {
			this.overlay && this.overlay.fadeOut(a.speedOut || 0, function() {
				d(this).remove()
			});
			this.overlay = null
		}
	};
	a.helpers.title = {
		beforeShow: function(b) {
			var c;
			if (c = a.current.title) c = d('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "</div>").appendTo("body"), "float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))), c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.skin)
		}
	};
	d.fn.fancybox = function(b) {
		var c = d(this),
			e = this.selector || "",
			f, g = function(g) {
				var h = this,
					j = f,
					k;
				!g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !d(h).is(".fancybox-wrap") && (g.preventDefault(), g = b.groupAttr || "data-fancybox-group", k = d(h).attr(g), k || (g = "rel", k = h[g]), k && "" !== k && "nofollow" !== k && (h = e.length ? d(e) : c, h = h.filter("[" + g + '="' + k + '"]'), j = h.index(this)), b.index = j, a.open(h, b))
			},
			b = b || {};
		f = b.index || 0;
		e ? q.undelegate(e, "click.fb-start").delegate(e, "click.fb-start", g) : c.unbind("click.fb-start").bind("click.fb-start", g);
		return this
	};
	d(l).ready(function() {
		a.defaults.fixed = d.support.fixedPosition || !(d.browser.msie && 6 >= d.browser.version) && !k
	})
})(window, document, jQuery);
(function($) {
	$.extend({
		progressBar: new
		function() {
			this.defaults = {
				steps: 20,
				stepDuration: 20,
				max: 100,
				showText: true,
				textFormat: 'percentage',
				width: 120,
				height: 12,
				callback: null,
				boxImage: 'images/progressbar.gif',
				barImage: {
					0: 'images/progressbg_red.gif',
					30: 'images/progressbg_orange.gif',
					70: 'images/progressbg_green.gif'
				},
				running_value: 0,
				value: 0,
				image: null
			};
			this.construct = function(arg1, arg2) {
				var argvalue = null;
				var argconfig = null;
				if (arg1 != null) {
					if (!isNaN(arg1)) {
						argvalue = arg1;
						if (arg2 != null) {
							argconfig = arg2;
						}
					} else {
						argconfig = arg1;
					}
				}
				return this.each(function(child) {
					var pb = this;
					var config = this.config;
					if (argvalue != null && this.bar != null && this.config != null) {
						this.config.value = parseInt(argvalue)
						if (argconfig != null) pb.config = $.extend(this.config, argconfig);
						config = pb.config;
					} else {
						var $this = $(this);
						var config = $.extend({}, $.progressBar.defaults, argconfig);
						config.id = $this.attr('id') ? $this.attr('id') : Math.ceil(Math.random() * 100000);
						if (argvalue == null) argvalue = $this.html().replace("%", "")
						config.value = parseInt(argvalue);
						config.running_value = 0;
						config.image = getBarImage(config);
						var numeric = ['steps', 'stepDuration', 'max', 'width', 'height', 'running_value', 'value'];
						for (var i = 0; i < numeric.length; i++)
						config[numeric[i]] = parseInt(config[numeric[i]]);
						$this.html("");
						var bar = document.createElement('img');
						var text = document.createElement('span');
						var $bar = $(bar);
						var $text = $(text);
						pb.bar = $bar;
						$bar.attr('id', config.id + "_pbImage");
						$text.attr('id', config.id + "_pbText");
						$text.html(getText(config));
						$bar.attr('title', getText(config));
						$bar.attr('alt', getText(config));
						$bar.attr('src', config.boxImage);
						$bar.attr('width', config.width);
						$bar.css("width", config.width + "px");
						$bar.css("height", config.height + "px");
						$bar.css("background-image", "url(" + config.image + ")");
						$bar.css("background-position", ((config.width * -1)) + 'px 50%');
						$bar.css("padding", "0");
						$bar.css("margin", "0");
						$this.append($bar);
						$this.append($text);
					}

					function getPercentage(config) {
						return config.running_value * 100 / config.max;
					}

					function getBarImage(config) {
						var image = config.barImage;
						if (typeof(config.barImage) == 'object') {
							for (var i in config.barImage) {
								if (config.running_value >= parseInt(i)) {
									image = config.barImage[i];
								} else {
									break;
								}
							}
						}
						return image;
					}

					function getText(config) {
						if (config.showText) {
							if (config.textFormat == 'percentage') {
								return " " + Math.round(config.running_value) + "%";
							} else if (config.textFormat == 'fraction') {
								return " " + config.running_value + '/' + config.max;
							}
						}
					}
					config.increment = Math.round((config.value - config.running_value) / config.steps);
					if (config.increment < 0) config.increment *= -1;
					if (config.increment < 1) config.increment = 1;
					var t = setInterval(function() {
						var pixels = config.width / 100;
						if (config.running_value > config.value) {
							if (config.running_value - config.increment < config.value) {
								config.running_value = config.value;
							} else {
								config.running_value -= config.increment;
							}
						} else if (config.running_value < config.value) {
							if (config.running_value + config.increment > config.value) {
								config.running_value = config.value;
							} else {
								config.running_value += config.increment;
							}
						}
						if (config.running_value == config.value) clearInterval(t);
						var $bar = $("#" + config.id + "_pbImage");
						var $text = $("#" + config.id + "_pbText");
						var image = getBarImage(config);
						if (image != config.image) {
							$bar.css("background-image", "url(" + image + ")");
							config.image = image;
						}
						$bar.css("background-position", (((config.width * -1)) + (getPercentage(config) * pixels)) + 'px 50%');
						$bar.attr('title', getText(config));
						$text.html(getText(config));
						if (config.callback != null && typeof(config.callback) == 'function') config.callback(config);
						pb.config = config;
					}, config.stepDuration);
				});
			};
		}
	});
	$.fn.extend({
		progressBar: $.progressBar.construct
	});
})(jQuery);
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-07-21 18:45:56 -0500 (Sat, 21 Jul 2007) $
 * $Rev: 2447 $
 *
 * Version 2.1.1
 */
(function($) {
	$.fn.bgIframe = $.fn.bgiframe = function(s) {
		if ($.browser.msie && /6.0/.test(navigator.userAgent)) {
			s = $.extend({
				top: 'auto',
				left: 'auto',
				width: 'auto',
				height: 'auto',
				opacity: true,
				src: 'javascript:false;'
			}, s || {});
			var prop = function(n) {
				return n && n.constructor == Number ? n + 'px' : n;
			},
				html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + s.src + '"' + 'style="display:block;position:absolute;z-index:-1;' + (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') + 'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')' : prop(s.top)) + ';' + 'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')' : prop(s.left)) + ';' + 'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')' : prop(s.width)) + ';' + 'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')' : prop(s.height)) + ';' + '"/>';
			return this.each(function() {
				if ($('> iframe.bgiframe', this).length == 0) this.insertBefore(document.createElement(html), this.firstChild);
			});
		}
		return this;
	};
})(jQuery);
(function(a) {
	var c = (a.browser.msie ? "paste" : "input") + ".mask";
	var b = (window.orientation != undefined);
	a.mask = {
		definitions: {
			"9": "[0-9]",
			a: "[A-Za-z]",
			"*": "[A-Za-z0-9]"
		}
	};
	a.fn.extend({
		caret: function(e, f) {
			if (this.length == 0) {
				return
			}
			if (typeof e == "number") {
				f = (typeof f == "number") ? f : e;
				return this.each(function() {
					if (this.setSelectionRange) {
						this.focus();
						this.setSelectionRange(e, f)
					} else {
						if (this.createTextRange) {
							var g = this.createTextRange();
							g.collapse(true);
							g.moveEnd("character", f);
							g.moveStart("character", e);
							g.select()
						}
					}
				})
			} else {
				if (this[0].setSelectionRange) {
					e = this[0].selectionStart;
					f = this[0].selectionEnd
				} else {
					if (document.selection && document.selection.createRange) {
						var d = document.selection.createRange();
						e = 0 - d.duplicate().moveStart("character", -100000);
						f = e + d.text.length
					}
				}
				return {
					begin: e,
					end: f
				}
			}
		},
		unmask: function() {
			return this.trigger("unmask")
		},
		mask: function(j, d) {
			if (!j && this.length > 0) {
				var f = a(this[0]);
				var g = f.data("tests");
				return a.map(f.data("buffer"), function(l, m) {
					return g[m] ? l : null
				}).join("")
			}
			d = a.extend({
				placeholder: "_",
				completed: null
			}, d);
			var k = a.mask.definitions;
			var g = [];
			var e = j.length;
			var i = null;
			var h = j.length;
			a.each(j.split(""), function(m, l) {
				if (l == "?") {
					h--;
					e = m
				} else {
					if (k[l]) {
						g.push(new RegExp(k[l]));
						if (i == null) {
							i = g.length - 1
						}
					} else {
						g.push(null)
					}
				}
			});
			return this.each(function() {
				var r = a(this);
				var m = a.map(j.split(""), function(x, y) {
					if (x != "?") {
						return k[x] ? d.placeholder : x
					}
				});
				var n = false;
				var q = r.val();
				r.data("buffer", m).data("tests", g);
				function v(x) {
					while (++x <= h && !g[x]) {}
					return x
				}
				function t(x) {
					while (!g[x] && --x >= 0) {}
					for (var y = x; y < h; y++) {
						if (g[y]) {
							m[y] = d.placeholder;
							var z = v(y);
							if (z < h && g[y].test(m[z])) {
								m[y] = m[z]
							} else {
								break
							}
						}
					}
					s();
					r.caret(Math.max(i, x))
				}
				function u(y) {
					for (var A = y, z = d.placeholder; A < h; A++) {
						if (g[A]) {
							var B = v(A);
							var x = m[A];
							m[A] = z;
							if (B < h && g[B].test(x)) {
								z = x
							} else {
								break
							}
						}
					}
				}
				function l(y) {
					var x = a(this).caret();
					var z = y.keyCode;
					n = (z < 16 || (z > 16 && z < 32) || (z > 32 && z < 41));
					if ((x.begin - x.end) != 0 && (!n || z == 8 || z == 46)) {
						w(x.begin, x.end)
					}
					if (z == 8 || z == 46 || (b && z == 127)) {
						t(x.begin + (z == 46 ? 0 : -1));
						return false
					} else {
						if (z == 27) {
							r.val(q);
							r.caret(0, p());
							return false
						}
					}
				}
				function o(B) {
					if (n) {
						n = false;
						return (B.keyCode == 8) ? false : null
					}
					B = B || window.event;
					var C = B.charCode || B.keyCode || B.which;
					var z = a(this).caret();
					if (B.ctrlKey || B.altKey || B.metaKey) {
						return true
					} else {
						if ((C >= 32 && C <= 125) || C > 186) {
							var x = v(z.begin - 1);
							if (x < h) {
								var A = String.fromCharCode(C);
								if (g[x].test(A)) {
									u(x);
									m[x] = A;
									s();
									var y = v(x);
									a(this).caret(y);
									if (d.completed && y == h) {
										d.completed.call(r)
									}
								}
							}
						}
					}
					return false
				}
				function w(x, y) {
					for (var z = x; z < y && z < h; z++) {
						if (g[z]) {
							m[z] = d.placeholder
						}
					}
				}
				function s() {
					return r.val(m.join("")).val()
				}
				function p(y) {
					var z = r.val();
					var C = -1;
					for (var B = 0, x = 0; B < h; B++) {
						if (g[B]) {
							m[B] = d.placeholder;
							while (x++ < z.length) {
								var A = z.charAt(x - 1);
								if (g[B].test(A)) {
									m[B] = A;
									C = B;
									break
								}
							}
							if (x > z.length) {
								break
							}
						} else {
							if (m[B] == z[x] && B != e) {
								x++;
								C = B
							}
						}
					}
					if (!y && C + 1 < e) {
						r.val("");
						w(0, h)
					} else {
						if (y || C + 1 >= e) {
							s();
							if (!y) {
								r.val(r.val().substring(0, C + 1))
							}
						}
					}
					return (e ? B : i)
				}
				if (!r.attr("readonly")) {
					r.one("unmask", function() {
						r.unbind(".mask").removeData("buffer").removeData("tests")
					}).bind("focus.mask", function() {
						q = r.val();
						var x = p();
						s();
						setTimeout(function() {
							if (x == j.length) {
								r.caret(0, x)
							} else {
								r.caret(x)
							}
						}, 0)
					}).bind("blur.mask", function() {
						p();
						if (r.val() != q) {
							r.change()
						}
					}).bind("keydown.mask", l).bind("keypress.mask", o).bind(c, function() {
						setTimeout(function() {
							r.caret(p(true))
						}, 0)
					})
				}
				p()
			})
		}
	})
})(jQuery);
/*
 * jQuery UI Nested Sortable
 * v 1.3.5 / 21 jun 2012
 * http://mjsarfatti.com/code/nestedSortable
 *
 * Depends on:
 *	 jquery.ui.sortable.js 1.8+
 *
 * Copyright (c) 2010-2012 Manuele J Sarfatti
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */
$.widget("mjs.nestedSortable", $.extend({}, $.ui.sortable.prototype, {
	options: {
		tabSize: 20,
		disableNesting: 'mjs-nestedSortable-no-nesting',
		errorClass: 'mjs-nestedSortable-error',
		doNotClear: false,
		listType: 'ol',
		maxLevels: 0,
		protectRoot: false,
		rootID: null,
		rtl: false,
		isAllowed: function(item, parent) {
			return true;
		}
	},
	_create: function() {
		this.element.data('sortable', this.element.data('nestedSortable'));
		if (!this.element.is(this.options.listType)) throw new Error('nestedSortable: Please check the listType option is set to your actual list type');
		return $.ui.sortable.prototype._create.apply(this, arguments);
	},
	destroy: function() {
		this.element.removeData("nestedSortable").unbind(".nestedSortable");
		return $.ui.sortable.prototype.destroy.apply(this, arguments);
	},
	_mouseDrag: function(event) {
		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");
		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}
		var o = this.options;
		//Do scrolling
		if (this.options.scroll) {
			var scrolled = false;
			if (this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML') {
				if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
				if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
			} else {
				if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
				if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
			}
			if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) $.ui.ddmanager.prepareOffsets(this, event);
		}
		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");
		// Find the top offset before rearrangement,
		var previousTopOffset = this.placeholder.offset().top;
		//Set the helper position
		if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + 'px';
		if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + 'px';
		//Rearrange
		for (var i = this.items.length - 1; i >= 0; i--) {
			//Cache variables and intersection, continue if no intersection
			var item = this.items[i],
				itemElement = item.item[0],
				intersection = this._intersectsWithPointer(item);
			if (!intersection) continue;
			if (itemElement != this.currentItem[0] //cannot intersect with itself
			&& this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement //no useless actions that have been done before
			&& !$.contains(this.placeholder[0], itemElement) //no action if the item moved is the parent of the item checked
			&& (this.options.type == 'semi-dynamic' ? !$.contains(this.element[0], itemElement) : true)
			//&& itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container
			) {
				$(itemElement).mouseenter();
				this.direction = intersection == 1 ? "down" : "up";
				if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
					$(itemElement).mouseleave();
					this._rearrange(event, item);
				} else {
					break;
				}
				// Clear emtpy ul's/ol's
				this._clearEmpty(itemElement);
				this._trigger("change", event, this._uiHash());
				break;
			}
		}
		var parentItem = (this.placeholder[0].parentNode.parentNode && $(this.placeholder[0].parentNode.parentNode).closest('.ui-sortable').length) ? $(this.placeholder[0].parentNode.parentNode) : null,
			level = this._getLevel(this.placeholder),
			childLevels = this._getChildLevels(this.helper);
		// To find the previous sibling in the list, keep backtracking until we hit a valid list item.
		var previousItem = this.placeholder[0].previousSibling ? $(this.placeholder[0].previousSibling) : null;
		if (previousItem != null) {
			while (previousItem[0].nodeName.toLowerCase() != 'li' || previousItem[0] == this.currentItem[0] || previousItem[0] == this.helper[0]) {
				if (previousItem[0].previousSibling) {
					previousItem = $(previousItem[0].previousSibling);
				} else {
					previousItem = null;
					break;
				}
			}
		}
		// To find the next sibling in the list, keep stepping forward until we hit a valid list item.
		var nextItem = this.placeholder[0].nextSibling ? $(this.placeholder[0].nextSibling) : null;
		if (nextItem != null) {
			while (nextItem[0].nodeName.toLowerCase() != 'li' || nextItem[0] == this.currentItem[0] || nextItem[0] == this.helper[0]) {
				if (nextItem[0].nextSibling) {
					nextItem = $(nextItem[0].nextSibling);
				} else {
					nextItem = null;
					break;
				}
			}
		}
		var newList = document.createElement(o.listType);
		this.beyondMaxLevels = 0;
		// If the item is moved to the left, send it to its parent's level unless there are siblings below it.
		if (parentItem != null && nextItem == null && (o.rtl && (this.positionAbs.left + this.helper.outerWidth() > parentItem.offset().left + parentItem.outerWidth()) || !o.rtl && (this.positionAbs.left < parentItem.offset().left))) {
			parentItem.after(this.placeholder[0]);
			this._clearEmpty(parentItem[0]);
			this._trigger("change", event, this._uiHash());
		}
		// If the item is below a sibling and is moved to the right, make it a child of that sibling.
		else if (previousItem != null && (o.rtl && (this.positionAbs.left + this.helper.outerWidth() < previousItem.offset().left + previousItem.outerWidth() - o.tabSize) || !o.rtl && (this.positionAbs.left > previousItem.offset().left + o.tabSize))) {
			this._isAllowed(previousItem, level, level + childLevels + 1);
			if (!previousItem.children(o.listType).length) {
				previousItem[0].appendChild(newList);
			}
			// If this item is being moved from the top, add it to the top of the list.
			if (previousTopOffset && (previousTopOffset <= previousItem.offset().top)) {
				previousItem.children(o.listType).prepend(this.placeholder);
			}
			// Otherwise, add it to the bottom of the list.
			else {
				previousItem.children(o.listType)[0].appendChild(this.placeholder[0]);
			}
			this._trigger("change", event, this._uiHash());
		} else {
			this._isAllowed(parentItem, level, level + childLevels);
		}
		//Post events to containers
		this._contactContainers(event);
		//Interconnect with droppables
		if ($.ui.ddmanager) $.ui.ddmanager.drag(this, event);
		//Call callbacks
		this._trigger('sort', event, this._uiHash());
		this.lastPositionAbs = this.positionAbs;
		return false;
	},
	_mouseStop: function(event, noPropagation) {
		// If the item is in a position not allowed, send it back
		if (this.beyondMaxLevels) {
			this.placeholder.removeClass(this.options.errorClass);
			if (this.domPosition.prev) {
				$(this.domPosition.prev).after(this.placeholder);
			} else {
				$(this.domPosition.parent).prepend(this.placeholder);
			}
			this._trigger("revert", event, this._uiHash());
		}
		// Clean last empty ul/ol
		for (var i = this.items.length - 1; i >= 0; i--) {
			var item = this.items[i].item[0];
			this._clearEmpty(item);
		}
		$.ui.sortable.prototype._mouseStop.apply(this, arguments);
	},
	serialize: function(options) {
		var o = $.extend({}, this.options, options),
			items = this._getItemsAsjQuery(o && o.connected),
			str = [];
		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/)),
				pid = ($(o.item || this).parent(o.listType).parent(o.items).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
			if (res) {
				str.push(((o.key || res[1]) + '[' + (o.key && o.expression ? res[1] : res[2]) + ']') + '=' + (pid ? (o.key && o.expression ? pid[1] : pid[2]) : o.rootID));
			}
		});
		if (!str.length && o.key) {
			str.push(o.key + '=');
		}
		return str.join('&');
	},
	toHierarchy: function(options) {
		var o = $.extend({}, this.options, options),
			sDepth = o.startDepthCount || 0,
			ret = [];
		$(this.element).children(o.items).each(function() {
			var level = _recursiveItems(this);
			ret.push(level);
		});
		return ret;

		function _recursiveItems(item) {
			var id = ($(item).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
			if (id) {
				var currentItem = {
					"id": id[2]
				};
				if ($(item).children(o.listType).children(o.items).length > 0) {
					currentItem.children = [];
					$(item).children(o.listType).children(o.items).each(function() {
						var level = _recursiveItems(this);
						currentItem.children.push(level);
					});
				}
				return currentItem;
			}
		}
	},
	toArray: function(options) {
		var o = $.extend({}, this.options, options),
			sDepth = o.startDepthCount || 0,
			ret = [],
			left = 2;
		ret.push({
			"item_id": o.rootID,
			"parent_id": 'none',
			"depth": sDepth,
			"left": '1',
			"right": ($(o.items, this.element).length + 1) * 2
		});
		$(this.element).children(o.items).each(function() {
			left = _recursiveArray(this, sDepth + 1, left);
		});
		ret = ret.sort(function(a, b) {
			return (a.left - b.left);
		});
		return ret;

		function _recursiveArray(item, depth, left) {
			var right = left + 1,
				id, pid;
			if ($(item).children(o.listType).children(o.items).length > 0) {
				depth++;
				$(item).children(o.listType).children(o.items).each(function() {
					right = _recursiveArray($(this), depth, right);
				});
				depth--;
			}
			id = ($(item).attr(o.attribute || 'id')).match(o.expression || (/(.+)[-=_](.+)/));
			if (depth === sDepth + 1) {
				pid = o.rootID;
			} else {
				var parentItem = ($(item).parent(o.listType).parent(o.items).attr(o.attribute || 'id')).match(o.expression || (/(.+)[-=_](.+)/));
				pid = parentItem[2];
			}
			if (id) {
				ret.push({
					"item_id": id[2],
					"parent_id": pid,
					"depth": depth,
					"left": left,
					"right": right
				});
			}
			left = right + 1;
			return left;
		}
	},
	_clearEmpty: function(item) {
		var emptyList = $(item).children(this.options.listType);
		if (emptyList.length && !emptyList.children().length && !this.options.doNotClear) {
			emptyList.remove();
		}
	},
	_getLevel: function(item) {
		var level = 1;
		if (this.options.listType) {
			var list = item.closest(this.options.listType);
			while (list && list.length > 0 && !list.is('.ui-sortable')) {
				level++;
				list = list.parent().closest(this.options.listType);
			}
		}
		return level;
	},
	_getChildLevels: function(parent, depth) {
		var self = this,
			o = this.options,
			result = 0;
		depth = depth || 0;
		$(parent).children(o.listType).children(o.items).each(function(index, child) {
			result = Math.max(self._getChildLevels(child, depth + 1), result);
		});
		return depth ? result + 1 : result;
	},
	_isAllowed: function(parentItem, level, levels) {
		var o = this.options,
			isRoot = $(this.domPosition.parent).hasClass('ui-sortable') ? true : false,
			maxLevels = this.placeholder.closest('.ui-sortable').nestedSortable('option', 'maxLevels'); // this takes into account the maxLevels set to the recipient list
		// Is the root protected?
		// Are we trying to nest under a no-nest?
		// Are we nesting too deep?
		if (!o.isAllowed(this.placeholder, parentItem) || parentItem && parentItem.hasClass(o.disableNesting) || o.protectRoot && (parentItem == null && !isRoot || isRoot && level > 1)) {
			this.placeholder.addClass(o.errorClass);
			if (maxLevels < levels && maxLevels != 0) {
				this.beyondMaxLevels = levels - maxLevels;
			} else {
				this.beyondMaxLevels = 1;
			}
		} else {
			if (maxLevels < levels && maxLevels != 0) {
				this.placeholder.addClass(o.errorClass);
				this.beyondMaxLevels = levels - maxLevels;
			} else {
				this.placeholder.removeClass(o.errorClass);
				this.beyondMaxLevels = 0;
			}
		}
	}
}));
(function($) {
	$.mjs.nestedSortable.prototype.options = $.extend({}, $.ui.sortable.prototype.options, $.mjs.nestedSortable.prototype.options);
})(jQuery);
(function(w) {
	var k = function(b, c) {
		typeof c == "undefined" && (c = {});
		this.init(b, c)
	},
		a = k.prototype,
		o, p = ["canvas", "vml"],
		f = ["oval", "spiral", "square", "rect", "roundRect"],
		x = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
		v = navigator.appVersion.indexOf("MSIE") !== -1 && parseFloat(navigator.appVersion.split("MSIE")[1]) === 8 ? true : false,
		y = !! document.createElement("canvas").getContext,
		q = true,
		n = function(b, c, a) {
			var b = document.createElement(b),
				d;
			for (d in a) b[d] = a[d];
			typeof c !== "undefined" && c.appendChild(b);
			return b
		},
		m = function(b, c) {
			for (var a in c) b.style[a] = c[a];
			return b
		},
		t = function(b, c) {
			for (var a in c) b.setAttribute(a, c[a]);
			return b
		},
		u = function(b, c, a, d) {
			b.save();
			b.translate(c, a);
			b.rotate(d);
			b.translate(-c, -a);
			b.beginPath()
		};
	a.init = function(b, c) {
		if (typeof c.safeVML === "boolean") q = c.safeVML;
		try {
			this.mum = document.getElementById(b) !== void 0 ? document.getElementById(b) : document.body
		} catch (a) {
			this.mum = document.body
		}
		c.id = typeof c.id !== "undefined" ? c.id : "canvasLoader";
		this.cont = n("div", this.mum, {
			id: c.id
		});
		if (y) o = p[0], this.can = n("canvas", this.cont), this.con = this.can.getContext("2d"), this.cCan = m(n("canvas", this.cont), {
			display: "none"
		}), this.cCon = this.cCan.getContext("2d");
		else {
			o = p[1];
			if (typeof k.vmlSheet === "undefined") {
				document.getElementsByTagName("head")[0].appendChild(n("style"));
				k.vmlSheet = document.styleSheets[document.styleSheets.length - 1];
				var d = ["group", "oval", "roundrect", "fill"],
					e;
				for (e in d) k.vmlSheet.addRule(d[e], "behavior:url(#default#VML); position:absolute;")
			}
			this.vml = n("group", this.cont)
		}
		this.setColor(this.color);
		this.draw();
		m(this.cont, {
			display: "none"
		})
	};
	a.cont = {};
	a.can = {};
	a.con = {};
	a.cCan = {};
	a.cCon = {};
	a.timer = {};
	a.activeId = 0;
	a.diameter = 40;
	a.setDiameter = function(b) {
		this.diameter = Math.round(Math.abs(b));
		this.redraw()
	};
	a.getDiameter = function() {
		return this.diameter
	};
	a.cRGB = {};
	a.color = "#000000";
	a.setColor = function(b) {
		this.color = x.test(b) ? b : "#000000";
		this.cRGB = this.getRGB(this.color);
		this.redraw()
	};
	a.getColor = function() {
		return this.color
	};
	a.shape = f[0];
	a.setShape = function(b) {
		for (var c in f) if (b === f[c]) {
			this.shape = b;
			this.redraw();
			break
		}
	};
	a.getShape = function() {
		return this.shape
	};
	a.density = 40;
	a.setDensity = function(b) {
		this.density = q && o === p[1] ? Math.round(Math.abs(b)) <= 40 ? Math.round(Math.abs(b)) : 40 : Math.round(Math.abs(b));
		if (this.density > 360) this.density = 360;
		this.activeId = 0;
		this.redraw()
	};
	a.getDensity = function() {
		return this.density
	};
	a.range = 1.3;
	a.setRange = function(b) {
		this.range = Math.abs(b);
		this.redraw()
	};
	a.getRange = function() {
		return this.range
	};
	a.speed = 2;
	a.setSpeed = function(b) {
		this.speed = Math.round(Math.abs(b))
	};
	a.getSpeed = function() {
		return this.speed
	};
	a.fps = 24;
	a.setFPS = function(b) {
		this.fps = Math.round(Math.abs(b));
		this.reset()
	};
	a.getFPS = function() {
		return this.fps
	};
	a.getRGB = function(b) {
		b = b.charAt(0) === "#" ? b.substring(1, 7) : b;
		return {
			r: parseInt(b.substring(0, 2), 16),
			g: parseInt(b.substring(2, 4), 16),
			b: parseInt(b.substring(4, 6), 16)
		}
	};
	a.draw = function() {
		var b = 0,
			c, a, d, e, h, k, j, r = this.density,
			s = Math.round(r * this.range),
			l, i, q = 0;
		i = this.cCon;
		var g = this.diameter;
		if (o === p[0]) {
			i.clearRect(0, 0, 1E3, 1E3);
			t(this.can, {
				width: g,
				height: g
			});
			for (t(this.cCan, {
				width: g,
				height: g
			}); b < r;) {
				l = b <= s ? 1 - 1 / s * b : l = 0;
				k = 270 - 360 / r * b;
				j = k / 180 * Math.PI;
				i.fillStyle = "rgba(" + this.cRGB.r + "," + this.cRGB.g + "," + this.cRGB.b + "," + l.toString() + ")";
				switch (this.shape) {
				case f[0]:
				case f[1]:
					c = g * 0.07;
					e = g * 0.47 + Math.cos(j) * (g * 0.47 - c) - g * 0.47;
					h = g * 0.47 + Math.sin(j) * (g * 0.47 - c) - g * 0.47;
					i.beginPath();
					this.shape === f[1] ? i.arc(g * 0.5 + e, g * 0.5 + h, c * l, 0, Math.PI * 2, false) : i.arc(g * 0.5 + e, g * 0.5 + h, c, 0, Math.PI * 2, false);
					break;
				case f[2]:
					c = g * 0.12;
					e = Math.cos(j) * (g * 0.47 - c) + g * 0.5;
					h = Math.sin(j) * (g * 0.47 - c) + g * 0.5;
					u(i, e, h, j);
					i.fillRect(e, h - c * 0.5, c, c);
					break;
				case f[3]:
				case f[4]:
					a = g * 0.3, d = a * 0.27, e = Math.cos(j) * (d + (g - d) * 0.13) + g * 0.5, h = Math.sin(j) * (d + (g - d) * 0.13) + g * 0.5, u(i, e, h, j), this.shape === f[3] ? i.fillRect(e, h - d * 0.5, a, d) : (c = d * 0.55, i.moveTo(e + c, h - d * 0.5), i.lineTo(e + a - c, h - d * 0.5), i.quadraticCurveTo(e + a, h - d * 0.5, e + a, h - d * 0.5 + c), i.lineTo(e + a, h - d * 0.5 + d - c), i.quadraticCurveTo(e + a, h - d * 0.5 + d, e + a - c, h - d * 0.5 + d), i.lineTo(e + c, h - d * 0.5 + d), i.quadraticCurveTo(e, h - d * 0.5 + d, e, h - d * 0.5 + d - c), i.lineTo(e, h - d * 0.5 + c), i.quadraticCurveTo(e, h - d * 0.5, e + c, h - d * 0.5))
				}
				i.closePath();
				i.fill();
				i.restore();
				++b
			}
		} else {
			m(this.cont, {
				width: g,
				height: g
			});
			m(this.vml, {
				width: g,
				height: g
			});
			switch (this.shape) {
			case f[0]:
			case f[1]:
				j = "oval";
				c = 140;
				break;
			case f[2]:
				j = "roundrect";
				c = 120;
				break;
			case f[3]:
			case f[4]:
				j = "roundrect", c = 300
			}
			a = d = c;
			e = 500 - d;
			for (h = -d * 0.5; b < r;) {
				l = b <= s ? 1 - 1 / s * b : l = 0;
				k = 270 - 360 / r * b;
				switch (this.shape) {
				case f[1]:
					a = d = c * l;
					e = 500 - c * 0.5 - c * l * 0.5;
					h = (c - c * l) * 0.5;
					break;
				case f[0]:
				case f[2]:
					v && (h = 0, this.shape === f[2] && (e = 500 - d * 0.5));
					break;
				case f[3]:
				case f[4]:
					a = c * 0.95, d = a * 0.28, v ? (e = 0, h = 500 - d * 0.5) : (e = 500 - a, h = -d * 0.5), q = this.shape === f[4] ? 0.6 : 0
				}
				i = t(m(n("group", this.vml), {
					width: 1E3,
					height: 1E3,
					rotation: k
				}), {
					coordsize: "1000,1000",
					coordorigin: "-500,-500"
				});
				i = m(n(j, i, {
					stroked: false,
					arcSize: q
				}), {
					width: a,
					height: d,
					top: h,
					left: e
				});
				n("fill", i, {
					color: this.color,
					opacity: l
				});
				++b
			}
		}
		this.tick(true)
	};
	a.clean = function() {
		if (o === p[0]) this.con.clearRect(0, 0, 1E3, 1E3);
		else {
			var b = this.vml;
			if (b.hasChildNodes()) for (; b.childNodes.length >= 1;) b.removeChild(b.firstChild)
		}
	};
	a.redraw = function() {
		this.clean();
		this.draw()
	};
	a.reset = function() {
		typeof this.timer === "number" && (this.hide(), this.show())
	};
	a.tick = function(b) {
		var a = this.con,
			f = this.diameter;
		b || (this.activeId += 360 / this.density * this.speed);
		o === p[0] ? (a.clearRect(0, 0, f, f), u(a, f * 0.5, f * 0.5, this.activeId / 180 * Math.PI), a.drawImage(this.cCan, 0, 0, f, f), a.restore()) : (this.activeId >= 360 && (this.activeId -= 360), m(this.vml, {
			rotation: this.activeId
		}))
	};
	a.show = function() {
		if (typeof this.timer !== "number") {
			var a = this;
			this.timer = self.setInterval(function() {
				a.tick()
			}, Math.round(1E3 / this.fps));
			m(this.cont, {
				display: "block"
			})
		}
	};
	a.hide = function() {
		typeof this.timer === "number" && (clearInterval(this.timer), delete this.timer, m(this.cont, {
			display: "none"
		}))
	};
	a.kill = function() {
		var a = this.cont;
		typeof this.timer === "number" && this.hide();
		o === p[0] ? (a.removeChild(this.can), a.removeChild(this.cCan)) : a.removeChild(this.vml);
		for (var c in this) delete this[c]
	};
	w.CanvasLoader = k
})(window);
//colResizable - by Alvaro Prieto Lauroba - MIT & GPL
(function(d) {
	var A = d(document),
		v = "<style type='text/css'>",
		u = "}</style>",
		f = "position",
		o = ":absolute;",
		k = "append",
		E = d("head")[k](v + ".CRZ{table-layout:fixed}.CRZ td,.CRZ th{overflow:hidden}.CRC{height:0px;" + f + ":relative}.CRG{margin-left:-5px;" + f + o + " z-index:5}.CRG .CRZ{" + f + o + "background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;cursor:e-resize;height:100%}.CRL{" + f + o + "width:1px}.CRD{border-left:1px dotted black" + u),
		q = null,
		a = q,
		e = [],
		L = 0,
		n = "id",
		m = "px",
		c = "CRZ",
		B = parseInt,
		p = Math,
		C = d.browser.msie,
		g = false,
		s = "mousemove.",
		t = "mouseup.",
		x = "tr:first ",
		b = "width",
		r = "border-",
		w = "table",
		y = '<div class="CR',
		h = "removeClass",
		i = "addClass",
		j = "attr";
	function H(f, k) {
		var a = d(f),
			h = a[j](n) || c + g++,
			g = "currentStyle";
		if (k.disable) return K(a);
		if (!a.is(w) || e[h]) return;
		a[i](c)[j](n, h).before(y + 'C"/>');
		a.o = k;
		a.g = [];
		a.c = [];
		a.w = a[b]();
		a.d = a.prev();
		a.s = B(C ? f.cellSpacing || f[g].borderSpacing : a.css(r + "spacing")) || 2;
		a.b = B(C ? f.border || f[g].borderLeftWidth : a.css(r + "left-" + b)) || 1;
		e[h] = a;
		D(a)
	}
	function K(a) {
		var b = a[j](n),
			a = e[b];
		if (!a || !a.is(w)) return;
		a[h](c).d.remove();
		delete e[b]
	}
	function D(a) {
		var e = a.find(x + "th"),
			f = "removeAttr";
		if (!e.length) e = a.find(x + "td");
		a.l = e.length;
		e.each(function(l) {
			var g = d(this),
				e = d(a.d[k](y + 'G"></div>')[0].lastChild);
			e.t = a;
			e.i = l;
			e.c = g;
			g.w = g[b]();
			a.g.push(e);
			a.c.push(g);
			g[b](g.w)[f](b);
			if (l < a.l - 1) e.mousedown(J).html('<div class="' + c + '"></div>')[k](a.o.gripInnerHtml);
			else e[i]("CRL")[h]("CRG");
			e.data(c, {
				i: l,
				t: a[j](n)
			})
		});
		l(a);
		a.find("tr:not(:first)").find("td,th").each(function() {
			d(this)[f](b)
		})
	}
	function l(a) {
		a.d[b](a.w);
		for (var d, c = 0; c < a.l; c++) {
			d = a.c[c];
			a.g[c].css({
				left: d.offset().left - a.offset().left + d.outerWidth() + a.s / 2 + m,
				height: a.outerHeight()
			})
		}
	}
	function z(g, f, j) {
		var e = a.x - a.l,
			d = g.c[f],
			c = g.c[f + 1],
			h = d.w + e,
			i = c.w - e;
		d[b](h + m);
		c[b](i + m);
		if (j) {
			d.w = h;
			c.w = i
		}
	}
	function F(i) {
		if (!a) return;
		var b = a.t,
			d = i.pageX - a.L + a.l,
			e = 20,
			c = a.i,
			h = b.s * 1.5 + e + b.b,
			j = c == b.l - 1 ? b.w - h : b.g[c + 1][f]().left - b.s - e,
			k = c ? b.g[c - 1][f]().left + b.s + e : h;
		d = p.max(k, p.min(j, d));
		a.x = d;
		a.css("left", d + m);
		if (b.o.liveDrag) {
			z(b, c);
			l(b)
		}
		return g
	}
	function G(f) {
		A.unbind(s + c).unbind(t + c);
		d("head :last-child").remove();
		if (!a) return;
		var b = a[h](a.t.o.draggingClass).t,
			e = b.o.onResize;
		if (a.x) {
			z(b, a.i, 1);
			l(b);
			if (e) {
				f.currentTarget = b[0];
				e(f)
			}
		}
		a = q
	}
	function J(o) {
		var n = d(this).data(c),
			j = e[n.t],
			h = j.g[n.i],
			m = 0,
			l;
		h.L = o.pageX;
		h.l = h[f]().left;
		A.bind(s + c, F).bind(t + c, G);
		E[k](v + "*{cursor:e-resize!important" + u);
		h[i](j.o.draggingClass);
		a = h;
		if (j.c[n.i].l) for (; m < j.l; m++) {
			l = j.c[m];
			l.l = g;
			l.w = l[b]()
		}
		return g
	}
	function I() {
		for (a in e) {
			var a = e[a],
				d = 0,
				f = 0;
			a[h](c);
			if (a.w != a[b]()) {
				a.w = a[b]();
				for (; d < a.l; d++) f += a.c[d].w;
				for (d = 0; d < a.l; d++) a.c[d].css(b, p.round(1e3 * a.c[d].w / f) / 10 + "%").l = 1
			}
			l(a[i](c))
		}
	}
	d(window).bind("resize." + c, I);
	d.fn.extend({
		colResizable: function(a) {
			var b = {
				draggingClass: "CRD",
				gripInnerHtml: "",
				onResize: q,
				liveDrag: g,
				disable: g
			},
				a = d.extend(b, a);
			return this.each(function() {
				H(this, a)
			})
		}
	})
})(jQuery);
/*

Style HTML
---------------

Written by Nochum Sossonko, (nsossonko@hotmail.com)

Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
http://jsbeautifier.org/


You are free to use this in any way you want, in case you find this useful or working for you.

Usage:
style_html(html_source);

style_html(html_source, options);

The options are:
indent_size (default 4) � indentation size,
indent_char (default space) � character to indent with,
max_char (default 70) - maximum amount of characters per line,
brace_style (default "collapse") - "collapse" | "expand" | "end-expand"
put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.
unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
indent_scripts (default normal) - "keep"|"separate"|"normal"

e.g.

style_html(html_source, {
'indent_size': 2,
'indent_char': ' ',
'max_char': 78,
'brace_style': 'expand',
'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u']
});
*/

function style_html(html_source, options) {
	//Wrapper function to invoke all the necessary constructors and deal with the output.
	var multi_parser, indent_size, indent_character, max_char, brace_style, unformatted;
	options = options || {};
	indent_size = options.indent_size || 4;
	indent_character = options.indent_char || ' ';
	brace_style = options.brace_style || 'collapse';
	max_char = options.max_char == 0 ? Infinity : options.max_char || 70;
	unformatted = options.unformatted || ['a', 'span', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd', 'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'pre', 'address', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	function Parser() {
		this.pos = 0; //Parser position
		this.token = '';
		this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
		this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
			parent: 'parent1',
			parentcount: 1,
			parent1: ''
		};
		this.tag_type = '';
		this.token_text = this.last_token = this.last_text = this.token_type = '';
		this.Utils = { //Uilities made available to the various functions
			whitespace: "\n\r\t ".split(''),
			single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?='.split(','),
			//all the single tags for HTML
			extra_liners: 'head,body,/html'.split(','),
			//for tags that need a line of whitespace before them
			in_array: function(what, arr) {
				for (var i = 0; i < arr.length; i++) {
					if (what === arr[i]) {
						return true;
					}
				}
				return false;
			}
		}
		this.get_content = function() { //function to capture regular content between tags
			var input_char = '',
				content = [],
				space = false; //if a space is needed
			while (this.input.charAt(this.pos) !== '<') {
				if (this.pos >= this.input.length) {
					return content.length ? content.join('') : ['', 'TK_EOF'];
				}
				input_char = this.input.charAt(this.pos);
				this.pos++;
				this.line_char_count++;
				if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
					if (content.length) {
						space = true;
					}
					this.line_char_count--;
					continue; //don't want to insert unnecessary space
				} else if (space) {
					if (this.line_char_count >= this.max_char) { //insert a line when the max_char is reached
						content.push('\n');
						for (var i = 0; i < this.indent_level; i++) {
							content.push(this.indent_string);
						}
						this.line_char_count = 0;
					} else {
						content.push(' ');
						this.line_char_count++;
					}
					space = false;
				}
				content.push(input_char); //letter at-a-time (or string) inserted to an array
			}
			return content.length ? content.join('') : '';
		}
		this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
			if (this.pos == this.input.length) {
				return ['', 'TK_EOF'];
			}
			var input_char = '';
			var content = '';
			var reg_match = new RegExp('\<\/' + name + '\\s*\>', 'igm');
			reg_match.lastIndex = this.pos;
			var reg_array = reg_match.exec(this.input);
			var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
			if (this.pos < end_script) { //get everything in between the script tags
				content = this.input.substring(this.pos, end_script);
				this.pos = end_script;
			}
			return content;
		}
		this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
			if (this.tags[tag + 'count']) { //check for the existence of this tag type
				this.tags[tag + 'count']++;
				this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
			} else { //otherwise initialize this tag type
				this.tags[tag + 'count'] = 1;
				this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
			}
			this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
			this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
		}
		this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
			if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
				var temp_parent = this.tags.parent; //check to see if it's a closable tag.
				while (temp_parent) { //till we reach '' (the initial value);
					if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
						break;
					}
					temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
				}
				if (temp_parent) { //if we caught something
					this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
					this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
				}
				delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
				delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
				if (this.tags[tag + 'count'] == 1) {
					delete this.tags[tag + 'count'];
				} else {
					this.tags[tag + 'count']--;
				}
			}
		}
		this.get_tag = function() { //function to get a full tag and parse its type
			var input_char = '',
				content = [],
				space = false,
				tag_start, tag_end;
			do {
				if (this.pos >= this.input.length) {
					return content.length ? content.join('') : ['', 'TK_EOF'];
				}
				input_char = this.input.charAt(this.pos);
				this.pos++;
				this.line_char_count++;
				if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
					space = true;
					this.line_char_count--;
					continue;
				}
				if (input_char === "'" || input_char === '"') {
					if (!content[1] || content[1] !== '!') { //if we're in a comment strings don't get treated specially
						input_char += this.get_unformatted(input_char);
						space = true;
					}
				}
				if (input_char === '=') { //no space before =
					space = false;
				}
				if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) { //no space after = or before >
					if (this.line_char_count >= this.max_char) {
						this.print_newline(false, content);
						this.line_char_count = 0;
					} else {
						content.push(' ');
						this.line_char_count++;
					}
					space = false;
				}
				if (input_char === '<') {
					tag_start = this.pos - 1;
				}
				content.push(input_char); //inserts character at-a-time (or string)
			} while (input_char !== '>');
			var tag_complete = content.join('');
			var tag_index;
			if (tag_complete.indexOf(' ') != -1) { //if there's whitespace, thats where the tag name ends
				tag_index = tag_complete.indexOf(' ');
			} else { //otherwise go with the tag ending
				tag_index = tag_complete.indexOf('>');
			}
			var tag_check = tag_complete.substring(1, tag_index).toLowerCase();
			if (tag_complete.charAt(tag_complete.length - 2) === '/' || this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
				this.tag_type = 'SINGLE';
			} else if (tag_check === 'script') { //for later script handling
				this.record_tag(tag_check);
				this.tag_type = 'SCRIPT';
			} else if (tag_check === 'style') { //for future style handling (for now it justs uses get_content)
				this.record_tag(tag_check);
				this.tag_type = 'STYLE';
			} else if (this.Utils.in_array(tag_check, unformatted)) { // do not reformat the "unformatted" tags
				var comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
				content.push(comment);
				// Preserve collapsed whitespace either before or after this tag.
				if (tag_start > 0 && this.Utils.in_array(this.input.charAt(tag_start - 1), this.Utils.whitespace)) {
					content.splice(0, 0, this.input.charAt(tag_start - 1));
				}
				tag_end = this.pos - 1;
				if (this.Utils.in_array(this.input.charAt(tag_end + 1), this.Utils.whitespace)) {
					content.push(this.input.charAt(tag_end + 1));
				}
				this.tag_type = 'SINGLE';
			} else if (tag_check.charAt(0) === '!') { //peek for <!-- comment
				if (tag_check.indexOf('[if') != -1) { //peek for <!--[if conditional comment
					if (tag_complete.indexOf('!IE') != -1) { //this type needs a closing --> so...
						var comment = this.get_unformatted('-->', tag_complete); //...delegate to get_unformatted
						content.push(comment);
					}
					this.tag_type = 'START';
				} else if (tag_check.indexOf('[endif') != -1) { //peek for <!--[endif end conditional comment
					this.tag_type = 'END';
					this.unindent();
				} else if (tag_check.indexOf('[cdata[') != -1) { //if it's a <[cdata[ comment...
					var comment = this.get_unformatted(']]>', tag_complete); //...delegate to get_unformatted function
					content.push(comment);
					this.tag_type = 'SINGLE'; //<![CDATA[ comments are treated like single tags
				} else {
					var comment = this.get_unformatted('-->', tag_complete);
					content.push(comment);
					this.tag_type = 'SINGLE';
				}
			} else {
				if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
					this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
					this.tag_type = 'END';
				} else { //otherwise it's a start-tag
					this.record_tag(tag_check); //push it on the tag stack
					this.tag_type = 'START';
				}
				if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
					this.print_newline(true, this.output);
				}
			}
			return content.join(''); //returns fully formatted tag
		}
		this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety
			if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) != -1) {
				return '';
			}
			var input_char = '';
			var content = '';
			var space = true;
			do {
				if (this.pos >= this.input.length) {
					return content;
				}
				input_char = this.input.charAt(this.pos);
				this.pos++
				if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
					if (!space) {
						this.line_char_count--;
						continue;
					}
					if (input_char === '\n' || input_char === '\r') {
						content += '\n';
/* Don't change tab indention for unformatted blocks. If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
for (var i=0; i<this.indent_level; i++) {
content += this.indent_string;
}
space = false; //...and make sure other indentation is erased
*/
						this.line_char_count = 0;
						continue;
					}
				}
				content += input_char;
				this.line_char_count++;
				space = true;
			} while (content.toLowerCase().indexOf(delimiter) == -1);
			return content;
		}
		this.get_token = function() { //initial handler for token-retrieval
			var token;
			if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
				var type = this.last_token.substr(7)
				token = this.get_contents_to(type);
				if (typeof token !== 'string') {
					return token;
				}
				return [token, 'TK_' + type];
			}
			if (this.current_mode === 'CONTENT') {
				token = this.get_content();
				if (typeof token !== 'string') {
					return token;
				} else {
					return [token, 'TK_CONTENT'];
				}
			}
			if (this.current_mode === 'TAG') {
				token = this.get_tag();
				if (typeof token !== 'string') {
					return token;
				} else {
					var tag_name_type = 'TK_TAG_' + this.tag_type;
					return [token, tag_name_type];
				}
			}
		}
		this.get_full_indent = function(level) {
			level = this.indent_level + level || 0;
			if (level < 1) return '';
			return Array(level + 1).join(this.indent_string);
		}
		this.printer = function(js_source, indent_character, indent_size, max_char, brace_style) { //handles input/output and some other printing functions
			this.input = js_source || ''; //gets the input for the Parser
			this.output = [];
			this.indent_character = indent_character;
			this.indent_string = '';
			this.indent_size = indent_size;
			this.brace_style = brace_style;
			this.indent_level = 0;
			this.max_char = max_char;
			this.line_char_count = 0; //count to see if max_char was exceeded
			for (var i = 0; i < this.indent_size; i++) {
				this.indent_string += this.indent_character;
			}
			this.print_newline = function(ignore, arr) {
				this.line_char_count = 0;
				if (!arr || !arr.length) {
					return;
				}
				if (!ignore) { //we might want the extra line
					while (this.Utils.in_array(arr[arr.length - 1], this.Utils.whitespace)) {
						arr.pop();
					}
				}
				arr.push('\n');
				for (var i = 0; i < this.indent_level; i++) {
					arr.push(this.indent_string);
				}
			}
			this.print_token = function(text) {
				this.output.push(text);
			}
			this.indent = function() {
				this.indent_level++;
			}
			this.unindent = function() {
				if (this.indent_level > 0) {
					this.indent_level--;
				}
			}
		}
		return this;
	} /*_____________________--------------------_____________________*/
	multi_parser = new Parser(); //wrapping functions Parser
	multi_parser.printer(html_source, indent_character, indent_size, max_char, brace_style); //initialize starting values
	while (true) {
		var t = multi_parser.get_token();
		multi_parser.token_text = t[0];
		multi_parser.token_type = t[1];
		if (multi_parser.token_type === 'TK_EOF') {
			break;
		}
		switch (multi_parser.token_type) {
		case 'TK_TAG_START':
			multi_parser.print_newline(false, multi_parser.output);
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.indent();
			multi_parser.current_mode = 'CONTENT';
			break;
		case 'TK_TAG_STYLE':
		case 'TK_TAG_SCRIPT':
			multi_parser.print_newline(false, multi_parser.output);
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		case 'TK_TAG_END':
			//Print new line only if the tag has no content and has child
			if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
				var tag_name = multi_parser.token_text.match(/\w+/)[0];
				var tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/<\s*(\w+)/);
				if (tag_extracted_from_last_output === null || tag_extracted_from_last_output[1] !== tag_name) multi_parser.print_newline(true, multi_parser.output);
			}
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		case 'TK_TAG_SINGLE':
			// Don't add a newline before elements that should remain unformatted.
			var tag_check = multi_parser.token_text.match(/^\s*<([a-z]+)/i);
			if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
				multi_parser.print_newline(false, multi_parser.output);
			}
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		case 'TK_CONTENT':
			if (multi_parser.token_text !== '') {
				multi_parser.print_token(multi_parser.token_text);
			}
			multi_parser.current_mode = 'TAG';
			break;
		case 'TK_STYLE':
		case 'TK_SCRIPT':
			if (multi_parser.token_text !== '') {
				multi_parser.output.push('\n');
				var text = multi_parser.token_text;
				if (multi_parser.token_type == 'TK_SCRIPT') {
					var _beautifier = typeof js_beautify == 'function' && js_beautify;
				} else if (multi_parser.token_type == 'TK_STYLE') {
					var _beautifier = typeof css_beautify == 'function' && css_beautify;
				}
				if (options.indent_scripts == "keep") {
					var script_indent_level = 0;
				} else if (options.indent_scripts == "separate") {
					var script_indent_level = -multi_parser.indent_level;
				} else {
					var script_indent_level = 1;
				}
				var indentation = multi_parser.get_full_indent(script_indent_level);
				if (_beautifier) {
					// call the Beautifier if avaliable
					text = _beautifier(text.replace(/^\s*/, indentation), options);
				} else {
					// simply indent the string otherwise
					var white = text.match(/^\s*/)[0];
					var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
					var reindent = multi_parser.get_full_indent(script_indent_level - _level);
					text = text.replace(/^\s*/, indentation).replace(/\r\n|\r|\n/g, '\n' + reindent).replace(/\s*$/, '');
				}
				if (text) {
					multi_parser.print_token(text);
					multi_parser.print_newline(true, multi_parser.output);
				}
			}
			multi_parser.current_mode = 'TAG';
			break;
		}
		multi_parser.last_token = multi_parser.token_type;
		multi_parser.last_text = multi_parser.token_text;
	}
	return multi_parser.output.join('');
}
/*

CSS Beautifier
---------------

Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
http://jsbeautifier.org/


You are free to use this in any way you want, in case you find this useful or working for you.

Usage:
css_beautify(source_text);
css_beautify(source_text, options);

The options are:
indent_size (default 4) � indentation size,
indent_char (default space) � character to indent with,

e.g

css_beautify(css_source_text, {
'indent_size': 1,
'indent_char': '\t'
});
*/
// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

function css_beautify(source_text, options) {
	options = options || {};
	var indentSize = options.indent_size || 4;
	var indentCharacter = options.indent_char || ' ';
	// compatibility
	if (typeof indentSize == "string") indentSize = parseInt(indentSize);
	// tokenizer
	var whiteRe = /^\s+$/;
	var wordRe = /[\w$\-_]/;
	var pos = -1,
		ch;

	function next() {
		return ch = source_text.charAt(++pos)
	}

	function peek() {
		return source_text.charAt(pos + 1)
	}

	function eatString(comma) {
		var start = pos;
		while (next()) {
			if (ch == "\\") {
				next();
				next();
			} else if (ch == comma) {
				break;
			} else if (ch == "\n") {
				break;
			}
		}
		return source_text.substring(start, pos + 1);
	}

	function eatWhitespace() {
		var start = pos;
		while (whiteRe.test(peek()))
		pos++;
		return pos != start;
	}

	function skipWhitespace() {
		var start = pos;
		do {} while (whiteRe.test(next()))
		return pos != start + 1;
	}

	function eatComment() {
		var start = pos;
		next();
		while (next()) {
			if (ch == "*" && peek() == "/") {
				pos++;
				break;
			}
		}
		return source_text.substring(start, pos + 1);
	}

	function lookBack(str, index) {
		return output.slice(-str.length + (index || 0), index).join("").toLowerCase() == str;
	}
	// printer
	var indentString = source_text.match(/^[\r\n]*[\t ]*/)[0];
	var singleIndent = Array(indentSize + 1).join(indentCharacter);
	var indentLevel = 0;

	function indent() {
		indentLevel++;
		indentString += singleIndent;
	}

	function outdent() {
		indentLevel--;
		indentString = indentString.slice(0, -indentSize);
	}
	var print = {}
	print["{"] = function(ch) {
		print.singleSpace();
		output.push(ch);
		print.newLine();
	}
	print["}"] = function(ch) {
		print.newLine();
		output.push(ch);
		print.newLine();
	}
	print.newLine = function(keepWhitespace) {
		if (!keepWhitespace) while (whiteRe.test(output[output.length - 1]))
		output.pop();
		if (output.length) output.push('\n');
		if (indentString) output.push(indentString);
	}
	print.singleSpace = function() {
		if (output.length && !whiteRe.test(output[output.length - 1])) output.push(' ');
	}
	var output = [];
	if (indentString) output.push(indentString); /*_____________________--------------------_____________________*/
	while (true) {
		var isAfterSpace = skipWhitespace();
		if (!ch) break;
		if (ch == '{') {
			indent();
			print["{"](ch);
		} else if (ch == '}') {
			outdent();
			print["}"](ch);
		} else if (ch == '"' || ch == '\'') {
			output.push(eatString(ch))
		} else if (ch == ';') {
			output.push(ch, '\n', indentString);
		} else if (ch == '/' && peek() == '*') { // comment
			print.newLine();
			output.push(eatComment(), "\n", indentString);
		} else if (ch == '(') { // may be a url
			if (lookBack("url", -1)) {
				output.push(ch);
				eatWhitespace();
				if (next()) {
					if (ch != ')' && ch != '"' && ch != '\'') output.push(eatString(')'));
					else
					pos--;
				}
			} else {
				if (isAfterSpace) print.singleSpace();
				output.push(ch);
				eatWhitespace();
			}
		} else if (ch == ')') {
			output.push(ch);
		} else if (ch == ',') {
			eatWhitespace();
			output.push(ch);
			print.singleSpace();
		} else if (ch == ']') {
			output.push(ch);
		} else if (ch == '[' || ch == '=') { // no whitespace before or after
			eatWhitespace();
			output.push(ch);
		} else {
			if (isAfterSpace) print.singleSpace();
			output.push(ch);
		}
	}
	var sweetCode = output.join('').replace(/[\n ]+$/, '');
	return sweetCode;
}
if (typeof exports !== "undefined") exports.css_beautify = css_beautify;
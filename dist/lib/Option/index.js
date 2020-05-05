'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var None = /** @class */ (function () {
    function None() {
        this.type = "None";
        this.isEmpty = this.isNone;
        this.isDefined = this.isSome;
        this.exists = this.has;
    }
    None.prototype.isNone = function () {
        return true;
    };
    None.prototype.isSome = function () {
        return false;
    };
    None.prototype.get = function () {
        throw new Error('Unsupported operation None.get');
    };
    None.prototype.map = function (f) {
        return new None();
    };
    None.prototype.flatMap = function (f) {
        return new None();
    };
    None.prototype.getOrElse = function (x) {
        return x;
    };
    None.prototype.flatten = function () {
        return new None();
    };
    None.prototype.orElse = function (b) {
        return b;
    };
    None.prototype.toList = function () {
        return [];
    };
    None.prototype.ap = function (fa) {
        return new None();
    };
    None.prototype.filter = function (p) {
        return new None();
    };
    None.prototype.has = function (p) {
        return false;
    };
    None.prototype.forEach = function (fn) {
        // noop
    };
    return None;
}());
exports.None = None;
var Some = /** @class */ (function () {
    function Some(value) {
        this.type = 'Some';
        this.isEmpty = this.isNone;
        this.isDefined = this.isSome;
        this.exists = this.has;
        this.value = value;
        if (this.value == null) {
            throw new Error('null or undefined exception. Please use Option.apply');
        }
        return this;
    }
    Some.prototype.isNone = function () {
        return false;
    };
    Some.prototype.isSome = function () {
        return true;
    };
    Some.prototype.get = function () {
        return this.value;
    };
    Some.prototype.map = function (f) {
        var res = f(this.value);
        return res == null
            ? new None()
            : new Some(res);
    };
    Some.prototype.flatMap = function (f) {
        return f(this.value);
    };
    Some.prototype.getOrElse = function (x) {
        return this.get();
    };
    Some.prototype.flatten = function () {
        if (this.value instanceof Option) {
            return this.value;
        }
        else {
            return this;
        }
    };
    Some.prototype.orElse = function (b) {
        return this;
    };
    Some.prototype.toList = function () {
        return [this.get()];
    };
    Some.prototype.ap = function (fa) {
        return this.map(fa.get());
    };
    Some.prototype.filter = function (p) {
        return p(this.get())
            ? this
            : new None();
    };
    Some.prototype.has = function (p) {
        return p(this.get());
    };
    Some.prototype.forEach = function (fn) {
        fn(this.get());
    };
    return Some;
}());
exports.Some = Some;
function Option(value) {
    return Option.apply(value);
}
exports.Option = Option;
(function (Option) {
    function none() {
        return new None();
    }
    Option.none = none;
    Option.empty = none;
    function some(a) {
        return a == null ? new None() : new Some(a);
    }
    Option.some = some;
    function apply(a) {
        return some(a);
    }
    Option.apply = apply;
    function isSome(fa) {
        return fa.isSome();
    }
    Option.isSome = isSome;
    function isNone(fa) {
        return fa.isNone();
    }
    Option.isNone = isNone;
    Option.isEmpty = isNone;
    Option.isDefined = isSome;
    function get(a) {
        return a.get();
    }
    Option.get = get;
    function map(f, a) {
        return a.map(f);
    }
    Option.map = map;
    function flatMap(f, a) {
        return a.flatMap(f);
    }
    Option.flatMap = flatMap;
    function getOrElse(x, a) {
        return a.getOrElse(x);
    }
    Option.getOrElse = getOrElse;
    function flatten(a) {
        return a.getOrElse(new None());
    }
    Option.flatten = flatten;
    function ap(f, a) {
        return a.ap(f);
    }
    Option.ap = ap;
    function filter(p, a) {
        return a.filter(p);
    }
    Option.filter = filter;
    function has(p, a) {
        return a.has(p);
    }
    Option.has = has;
    Option.exists = has;
    function forEach(f, a) {
        a.forEach(f);
    }
    Option.forEach = forEach;
    function orElse(b, a) {
        return a.orElse(b);
    }
    Option.orElse = orElse;
})(Option = exports.Option || (exports.Option = {}));
//# sourceMappingURL=index.js.map
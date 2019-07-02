"use strict";

Array.prototype.any = function(number) {
    let hasItem;
    this.forEach(e => {
        if (e === number) hasItem = true;
    });
    return hasItem ? true : false;
};

Array.prototype.clear = function() {
    this.length = 0;
    return this;
};

Array.prototype.deleteAt = function(n) {
    if (n > this.length || n < 0) return "out of range!";
    if (!n) return undefined;
    return this.splice(n, 1);
};

Array.prototype.diff = function(n) {
    if (typeof n !== Array) return undefined;
    let result = [];
    for (let x of this) {
        if (n.includes(x)) continue;
        result.push(x);
    }
    for (let y of n) {
        if (this.includes(y)) continue;
        result.push(y);
    }
    return result;
};

Array.prototype.drop = function(n) {
    if (n < 0 || n > this.length) return Error.name;
    return this.splice(-n, n);
};

Array.prototype.isEmpty = function() {
    this.length === 0 ? true : false;
};

Array.prototype.fetch = function(n, m) {
    if (n > this.length) return m;
    return this[n];
};
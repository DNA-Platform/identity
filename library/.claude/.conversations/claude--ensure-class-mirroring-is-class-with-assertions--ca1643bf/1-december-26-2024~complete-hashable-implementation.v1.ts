// For objects
Object.defineProperty(Object.prototype, 'hashCode', {
    get: function () {
        if (this._hashCode === undefined) {
            Object.defineProperty(this, '_hashCode', {
                value: Hash.forNumber(Math.random()),
                enumerable: false
            });
        }
        return this._hashCode;
    },
    enumerable: false,
    configurable: true
});

// For Number primitive wrapper
Object.defineProperty(Number.prototype, 'hashCode', {
    get: function() {
        return Hash.forNumber(this.valueOf());
    },
    enumerable: false
});

// For String primitive wrapper
Object.defineProperty(String.prototype, 'hashCode', {
    get: function() {
        return Hash.forString(this.valueOf());
    },
    enumerable: false
});

// For Boolean primitive wrapper
Object.defineProperty(Boolean.prototype, 'hashCode', {
    get: function() {
        return Hash.forNumber(this.valueOf() ? 1 : 0);
    },
    enumerable: false
});

// For Symbol primitive wrapper
Object.defineProperty(Symbol.prototype, 'hashCode', {
    get: function() {
        return Hash.forString(this.toString());
    },
    enumerable: false
});

// For BigInt primitive wrapper
Object.defineProperty(BigInt.prototype, 'hashCode', {
    get: function() {
        return Hash.forString(this.toString());
    },
    enumerable: false
});
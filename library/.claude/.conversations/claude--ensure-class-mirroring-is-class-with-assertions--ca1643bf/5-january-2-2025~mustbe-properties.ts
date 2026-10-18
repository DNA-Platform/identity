// Define `mustbe` as a property on Object prototype
Object.defineProperty(Object.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});

// For Number primitive wrapper
Object.defineProperty(Number.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});

// For String primitive wrapper
Object.defineProperty(String.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});

// For Boolean primitive wrapper
Object.defineProperty(Boolean.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});

// For Symbol primitive wrapper
Object.defineProperty(Symbol.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});

// For BigInt primitive wrapper
Object.defineProperty(BigInt.prototype, 'mustbe', {
    get: function () {
        if (this._mustbe === undefined) {
            Object.defineProperty(this, '_mustbe', {
                value: new MustBe(this),
                enumerable: false
            });
        }
        return this._mustbe;
    },
    enumerable: false,
    configurable: true
});
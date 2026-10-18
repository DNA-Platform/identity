// Define `is` as a property on Object prototype
Object.defineProperty(Object.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});

// For Number primitive wrapper
Object.defineProperty(Number.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});

// For String primitive wrapper
Object.defineProperty(String.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});

// For Boolean primitive wrapper
Object.defineProperty(Boolean.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});

// For Symbol primitive wrapper
Object.defineProperty(Symbol.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});

// For BigInt primitive wrapper
Object.defineProperty(BigInt.prototype, 'is', {
    get: function () {
        if (this._is === undefined) {
            Object.defineProperty(this, '_is', {
                value: new Is(this),
                enumerable: false
            });
        }
        return this._is;
    },
    enumerable: false,
    configurable: true
});
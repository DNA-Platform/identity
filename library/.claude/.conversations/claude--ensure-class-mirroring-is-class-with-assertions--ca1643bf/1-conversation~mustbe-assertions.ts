// For Object prototype
Object.defineProperty(Object.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Number prototype
Object.defineProperty(Number.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For String prototype
Object.defineProperty(String.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Boolean prototype
Object.defineProperty(Boolean.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Symbol prototype
Object.defineProperty(Symbol.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For BigInt prototype
Object.defineProperty(BigInt.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});
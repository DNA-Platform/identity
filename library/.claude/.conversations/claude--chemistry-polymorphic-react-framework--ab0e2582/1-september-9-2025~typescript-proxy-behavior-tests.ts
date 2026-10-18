// Question 1: Does TypeScript understand the proxy signature?

class Counter {
    count: number = 0;
    
    increment() {
        this.count++;
        return this;
    }
    
    get() {
        return this.count;
    }
}

// Define the callable signature
type CallableCounter = Counter & (() => number);

function makeCallable(instance: Counter): CallableCounter {
    const callFn = function() {
        instance.increment();
        return instance.get();
    };
    
    return new Proxy(callFn, {
        get(target, prop) {
            return prop in instance ? (instance as any)[prop] : target[prop as any];
        },
        set(target, prop, value) {
            (instance as any)[prop] = value;
            return true;
        }
    }) as CallableCounter;
}

const counter = makeCallable(new Counter());

// TypeScript DOES understand both signatures:
counter();          // ✅ Works - callable
counter.increment(); // ✅ Works - method access
counter.count;       // ✅ Works - property access

// Question 2: Can you subclass and always get the proxy?

class CallableCounter extends Counter {
    constructor() {
        super();
        // Return proxy from constructor
        const callFn = () => {
            this.increment();
            return this.get();
        };
        
        return new Proxy(callFn, {
            get(target, prop) {
                return prop in this ? (this as any)[prop] : target[prop as any];
            },
            set(target, prop, value) {
                (this as any)[prop] = value;
                return true;
            }
        }) as any;
    }
}

// More robust version with proper typing
interface ICallableCounter {
    (): number;
    count: number;
    increment(): this;
    get(): number;
}

class AutoCallableCounter extends Counter {
    constructor() {
        super();
        
        const self = this;
        const callable = function() {
            self.increment();
            return self.get();
        };
        
        // Copy all properties and methods
        Object.setPrototypeOf(callable, Object.getPrototypeOf(this));
        Object.assign(callable, this);
        
        return callable as any;
    }
}

// Usage:
const autoCallable = new AutoCallableCounter();
console.log(autoCallable());     // callable
console.log(autoCallable.get()); // method

// Question 3: instanceof test

console.log("=== instanceof Tests ===");

// Regular instance
const regular = new Counter();
console.log("regular instanceof Counter:", regular instanceof Counter); // true

// Proxy from factory
const proxied = makeCallable(new Counter());
console.log("proxied instanceof Counter:", proxied instanceof Counter); // FALSE!

// Constructor-returned proxy
const autoProxy = new AutoCallableCounter();
console.log("autoProxy instanceof Counter:", autoProxy instanceof Counter); // FALSE!
console.log("autoProxy instanceof AutoCallableCounter:", autoProxy instanceof AutoCallableCounter); // FALSE!

// Solution: Custom instanceof using Symbol.hasInstance
class SmartCallableCounter extends Counter {
    constructor() {
        super();
        
        const self = this;
        const callable = function() {
            self.increment();
            return self.get();
        };
        
        // Preserve instanceof behavior
        Object.defineProperty(callable, Symbol.hasInstance, {
            value: (instance: any) => instance instanceof Counter
        });
        
        Object.setPrototypeOf(callable, Object.getPrototypeOf(this));
        Object.assign(callable, this);
        
        return callable as any;
    }
    
    static [Symbol.hasInstance](instance: any) {
        return instance instanceof Counter || 
               (typeof instance === 'function' && instance.count !== undefined);
    }
}

// Test the smart version
const smart = new SmartCallableCounter();
console.log("smart instanceof SmartCallableCounter:", smart instanceof SmartCallableCounter); // true!
console.log("smart instanceof Counter:", smart instanceof Counter); // true!

// Alternative: Use a symbol to mark callable instances
const CALLABLE_MARKER = Symbol('callable');

class MarkedCallableCounter extends Counter {
    [CALLABLE_MARKER] = true;
    
    constructor() {
        super();
        
        const self = this;
        const callable = function() {
            self.increment();
            return self.get();
        } as any;
        
        callable[CALLABLE_MARKER] = true;
        Object.setPrototypeOf(callable, Object.getPrototypeOf(this));
        Object.assign(callable, this);
        
        return callable;
    }
    
    static isCallableCounter(obj: any): obj is MarkedCallableCounter {
        return obj && obj[CALLABLE_MARKER] === true;
    }
}

const marked = new MarkedCallableCounter();
console.log("MarkedCallableCounter.isCallableCounter(marked):", 
    MarkedCallableCounter.isCallableCounter(marked)); // true!

// Summary of findings:
console.log("\n=== Summary ===");
console.log("1. TypeScript DOES understand proxy signatures with proper typing");
console.log("2. You CAN return proxy from constructor, but...");
console.log("3. instanceof FAILS with proxies by default");
console.log("4. Solutions: Symbol.hasInstance or custom type guards");
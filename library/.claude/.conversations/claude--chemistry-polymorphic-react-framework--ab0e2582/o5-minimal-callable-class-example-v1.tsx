import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Minimal Callable Class Example v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Method 1: Constructor returns a function
class Calculator {
    value: number = 0;
    
    constructor() {
        const fn = (x: number) => {
            fn.add(x);
            return fn;
        };
        
        fn.value = this.value;
        fn.add = this.add.bind(fn);
        fn.get = this.get.bind(fn);
        
        return fn as any;
    }
    
    add(x: number) {
        this.value += x;
        return this;
    }
    
    get() {
        return this.value;
    }
}

// Usage:
const calc = new Calculator();
calc(5)(10); // callable
calc.add(3); // method access
console.log(calc.get()); // 18

// Method 2: Using a factory function
function createCallable<T extends object>(instance: T, callFn: Function): T & Function {
    const callable = function(...args: any[]) {
        return callFn.apply(callable, args);
    };
    
    Object.assign(callable, instance);
    Object.setPrototypeOf(callable, Object.getPrototypeOf(instance));
    
    return callable as T & Function;
}

class Greeter {
    name: string = "World";
    
    greet() {
        return \`Hello, \${this.name}!\`;
    }
}

const greeter = createCallable(new Greeter(), function(name: string) {
    this.name = name;
    return this.greet();
});

console.log(greeter("Alice")); // "Hello, Alice!"
console.log(greeter.greet());  // "Hello, Alice!"

// Method 3: Using Proxy (cleanest)
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

function makeCallable<T extends object>(instance: T, callFn: Function): T & Function {
    return new Proxy(callFn, {
        get(target, prop) {
            return prop in instance ? (instance as any)[prop] : target[prop as any];
        },
        set(target, prop, value) {
            (instance as any)[prop] = value;
            return true;
        }
    }) as T & Function;
}

const counter = makeCallable(new Counter(), function() {
    this.increment();
    return this.get();
});

console.log(counter());     // 1 (calls function)
console.log(counter.get()); // 1 (calls method)
counter.increment();
console.log(counter());     // 2`}
        </CodeBox>
    </Chapter>
);

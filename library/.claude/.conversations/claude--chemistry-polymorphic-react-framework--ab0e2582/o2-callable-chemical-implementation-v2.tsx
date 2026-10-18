import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Callable $Chemical Implementation v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Approach 1: Constructor returns a callable function with instance properties
class $Chemical {
    private _cid: number;
    private _component?: Component<this>;
    
    constructor() {
        this._cid = $Chemical.getNextChemicalId();
        
        // Create the callable function
        const callable = function(...args: any[]) {
            // This is what gets called when the chemical is invoked
            return callable.invoke(...args);
        };
        
        // Copy all instance properties and methods to the function
        Object.setPrototypeOf(callable, this.constructor.prototype);
        Object.assign(callable, this);
        
        // Set up the invoke method
        callable.invoke = this.invoke.bind(callable);
        callable.view = this.view.bind(callable);
        callable.Component = this.Component;
        
        return callable as any;
    }
    
    // Default invoke behavior - could be overridden
    invoke(...args: any[]) {
        // Maybe return a configured version of the component?
        return this.Component;
    }
    
    view() {
        return null; // Default implementation
    }
    
    get Component() {
        if (!this._component) {
            this._component = this.createComponent();
        }
        return this._component;
    }
    
    private createComponent() {
        // Component creation logic here
        return (() => null) as any;
    }
    
    private static _nextId = 0;
    private static getNextChemicalId() { return this._nextId++; }
}

// Approach 2: Factory Pattern with Proxy
interface CallableChemical<T extends $Chemical> {
    (...args: any[]): any;
    instance: T;
    Component: Component<T>;
    view(): ReactNode;
}

function createCallableChemical<T extends $Chemical>(ChemicalClass: new () => T): CallableChemical<T> {
    const instance = new ChemicalClass();
    
    const callable = function(...args: any[]) {
        // Custom invoke logic
        if (typeof instance.invoke === 'function') {
            return instance.invoke(...args);
        }
        // Default: return element with props
        return React.createElement(instance.Component, args[0]);
    };
    
    // Create a proxy that forwards property access to the instance
    return new Proxy(callable, {
        get(target, prop) {
            if (prop === 'instance') return instance;
            if (prop in instance) {
                const value = (instance as any)[prop];
                return typeof value === 'function' ? value.bind(instance) : value;
            }
            return target[prop as any];
        },
        set(target, prop, value) {
            (instance as any)[prop] = value;
            return true;
        }
    }) as CallableChemical<T>;
}

// Approach 3: Direct Function Extension
function makeCallable<T extends $Chemical>(instance: T): T & ((...args: any[]) => any) {
    const callable = function(...args: any[]) {
        if ('invoke' in instance && typeof instance.invoke === 'function') {
            return (instance as any).invoke(...args);
        }
        return instance.Component;
    };
    
    // Copy all properties from instance to callable
    for (const key in instance) {
        if (instance.hasOwnProperty(key)) {
            (callable as any)[key] = instance[key];
        }
    }
    
    // Set up prototype chain
    Object.setPrototypeOf(callable, Object.getPrototypeOf(instance));
    
    return callable as T & ((...args: any[]) => any);
}

// Usage examples:
class $Button extends $Chemical {
    $text = 'Click me';
    
    invoke(props?: any) {
        // When called as a function, return the component with props
        return <this.Component {...props} />;
    }
    
    view() {
        return <button>{this.$text}</button>;
    }
}

// Now you can use it both ways:
const button = new $Button();

// As a component
const ButtonComponent = button.Component;

// As a callable function
const ButtonElement = button({ text: 'Custom Text' });
`}
        </CodeBox>
    </Chapter>
);

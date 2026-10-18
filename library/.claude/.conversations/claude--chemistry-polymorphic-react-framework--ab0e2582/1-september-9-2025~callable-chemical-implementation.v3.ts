// Approach 1: Constructor returns a callable function with instance properties
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
        return React.createElement(this.Component, props);
    }
    
    view() {
        return React.createElement('button', {}, this.$text);
    }
}

class $Modal extends $Chemical {
    $isOpen = false;
    $title = 'Modal';
    
    invoke(children?: ReactNode) {
        // When called as function, return modal with children
        return this.$isOpen ? 
            React.createElement('div', { className: 'modal' }, 
                React.createElement('h2', {}, this.$title),
                children
            ) : null;
    }
    
    view() {
        return this.invoke(this.children);
    }
}

// Usage Examples:

// Method 1: Constructor returns callable
const button1 = new $Button();
// Use as function: button1({ text: 'Custom' })
// Use as instance: button1.Component, button1.$text = 'New Text'

// Method 2: Factory pattern
const button2 = createCallableChemical($Button);
// Use as function: button2({ text: 'Custom' })
// Use as instance: button2.instance.$text = 'New Text'

// Method 3: Make existing instance callable
const button3 = new $Button();
const callableButton3 = makeCallable(button3);
// Use as function: callableButton3({ text: 'Custom' })
// Use as instance: callableButton3.$text = 'New Text'

// Practical example with your Chemistry framework:
class $Card extends $Chemical {
    $title = 'Card';
    $children: ReactNode[] = [];
    
    invoke(...children: ReactNode[]) {
        // When called as function, create card with children
        return React.createElement('div', { className: 'card' },
            React.createElement('h3', {}, this.$title),
            ...children
        );
    }
    
    view() {
        return this.invoke(...this.$children);
    }
}

// Now you could use it like:
// const card = new $Card();
// const cardElement = card("Hello", "World"); // Callable syntax
// card.$title = "My Card"; // Instance property access

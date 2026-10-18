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

// Integration with Chemistry Framework
// Modified version of your $Chemical that supports callable pattern

class $Chemical {
    private _cid: number;
    private _component?: Component<this>;
    
    constructor() {
        this._cid = $Chemical.getNextChemicalId();
        
        // Check if this chemical should be callable
        if (this.shouldBeCallable()) {
            return this.makeCallable();
        }
        
        // Regular non-callable chemical
        return this;
    }
    
    // Override this in subclasses to enable callable behavior
    protected shouldBeCallable(): boolean {
        return typeof (this as any).invoke === 'function';
    }
    
    private makeCallable() {
        const self = this;
        const callable = function(...args: any[]) {
            return self.invoke(...args);
        };
        
        // Copy all properties and maintain prototype chain
        Object.setPrototypeOf(callable, this.constructor.prototype);
        Object.assign(callable, this);
        
        // Ensure methods are bound correctly
        const proto = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(proto).forEach(name => {
            if (name !== 'constructor' && typeof (this as any)[name] === 'function') {
                (callable as any)[name] = (this as any)[name].bind(callable);
            }
        });
        
        return callable as any;
    }
    
    // Default invoke - can be overridden
    invoke(...args: any[]): any {
        throw new Error('invoke method must be implemented for callable chemicals');
    }
    
    view(): ReactNode {
        return null;
    }
    
    get Component() {
        if (!this._component) {
            this._component = this.createComponent();
        }
        return this._component;
    }
    
    private createComponent() {
        // Your existing component creation logic
        return (() => null) as any;
    }
    
    private static _nextId = 0;
    private static getNextChemicalId() { return this._nextId++; }
}

// Example: Callable Form Chemical
class $Form extends $Chemical {
    $onSubmit?: (data: any) => void;
    $fields: string[] = [];
    
    // This makes the chemical callable
    invoke(fields: Record<string, any>) {
        // When called as function, render form with field values
        return React.createElement('form', {
            onSubmit: (e: any) => {
                e.preventDefault();
                this.$onSubmit?.(fields);
            }
        }, Object.entries(fields).map(([key, value]) => 
            React.createElement('input', {
                key,
                name: key,
                value,
                placeholder: key
            })
        ));
    }
    
    view() {
        // Regular view when used as component
        return React.createElement('form', {}, 
            this.$fields.map(field => 
                React.createElement('input', {
                    key: field,
                    name: field,
                    placeholder: field
                })
            )
        );
    }
}

// Example: Callable List Chemical  
class $List extends $Chemical {
    $items: any[] = [];
    $renderItem?: (item: any, index: number) => ReactNode;
    
    invoke(items: any[], renderItem?: (item: any, index: number) => ReactNode) {
        // When called as function, render list with provided items
        const renderer = renderItem || this.$renderItem || ((item) => String(item));
        return React.createElement('ul', {},
            items.map((item, index) => 
                React.createElement('li', { key: index }, renderer(item, index))
            )
        );
    }
    
    view() {
        return this.invoke(this.$items, this.$renderItem);
    }
}

// Usage in your binding system:
class $Dashboard extends $Chemical {
    @child($List)
    userList!: $List;
    
    @child($Form) 
    userForm!: $Form;
    
    users = ['Alice', 'Bob', 'Charlie'];
    
    view() {
        return React.createElement('div', {},
            // Use as regular bound children
            this.userList.Component,
            this.userForm.Component,
            
            React.createElement('hr'),
            
            // Use as callable functions for dynamic content
            this.userList(this.users, (user) => `User: ${user}`),
            this.userForm({ name: '', email: '' })
        );
    }
}

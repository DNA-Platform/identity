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

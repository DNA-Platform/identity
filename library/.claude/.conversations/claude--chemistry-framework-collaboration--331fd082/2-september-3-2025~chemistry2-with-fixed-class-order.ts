// Move DecoratorCache before $Chemical to fix initialization order

class DecoratorCache {
    $: Map<string, { type: Type, expecting: '?' | '!' | '[]' }> = new Map();
    parent: Map<string, Type> = new Map();
    inert: Map<string, boolean> = new Map();
    dynamic: Map<string, ((a: any, b: any) => boolean) | undefined> = new Map();
}

// Now decorators can reference DecoratorCache
export class $Chemical {
    @inert()
    private _diagram!: Diagram;
    
    // ... rest of $Chemical class
}
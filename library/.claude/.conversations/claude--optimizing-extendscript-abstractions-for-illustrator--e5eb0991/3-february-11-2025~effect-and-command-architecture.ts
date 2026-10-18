
class $Effect {
    constructor(protected readonly expression: string) {}
    
    toString(): string {
        return this.expression;
    }
}

class $Command {
    private static instance: $Command;
    private effects: $Effect[] = [];
    private varCounter = 0;

    private constructor() {}

    static get current(): $Command {
        if (!this.instance) {
            this.instance = new $Command();
        }
        return this.instance;
    }

    addEffect(effect: $Effect): this {
        this.effects.push(effect);
        return this;
    }

    generateVar(prefix: string = 'var'): string {
        return `$${prefix}_${Date.now()}_${this.varCounter++}`;
    }

    assignToVar(expression: string, varName?: string): $Reference {
        varName = varName || this.generateVar();
        const effect = new $Effect(`var ${varName} = ${expression};`);
        this.addEffect(effect);
        return new $Reference(varName);
    }

    compile(): string {
        return this.effects.map(e => e.toString()).join('\n');
    }

    execute(): void {
        const script = this.compile();
        // Execute the script (implementation depending on context)
        $Command.reset();
    }

    static reset(): void {
        this.instance = new $Command();
    }
}

class $Reference<T = any> {
    constructor(private readonly address: string) {}

    $dot<K extends keyof T>(property: K): $Reference<T[K]> {
        const newExpr = `${this.address}.${String(property)}`;
        return $Command.current.assignToVar(newExpr);
    }

    $call(...args: any[]): $Reference {
        const argsStr = args.map(arg => 
            arg instanceof $Reference ? arg.toString() : JSON.stringify(arg)
        ).join(',');
        const callExpr = `${this.address}(${argsStr})`;
        return $Command.current.assignToVar(callExpr);
    }

    $assign(value: any): void {
        const valueStr = value instanceof $Reference ? value.toString() : JSON.stringify(value);
        const effect = new $Effect(`${this.address} = ${valueStr};`);
        $Command.current.addEffect(effect);
    }

    toString(): string {
        return this.address;
    }
}

// Helper functions
function $ref<T>(address: string): $Reference<T> {
    return new $Reference<T>(address);
}

// Usage example:
const doc = $ref<IllustratorApp>('app')
    .$dot('documents')
    .$call()
    .$dot('add')
    .$call('NewDocument');

doc.$dot('pathItems').$call();
$Command.current.execute();

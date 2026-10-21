export class Is<T = any> extends Function {
    constructor(private value: T) {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => (instanceIs as Function)(this.value, ...args),
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    get undefined(): boolean {
        return instanceIs.undefined(this.value);
    }

    get null(): boolean {
        return instanceIs.null(this.value);
    }

    get string(): boolean {
        return instanceIs.string(this.value);
    }

    get number(): boolean {
        return instanceIs.number(this.value);
    }

    get boolean(): boolean {
        return instanceIs.boolean(this.value);
    }

    get bigint(): boolean {
        return instanceIs.bigint(this.value);
    }

    get symbol(): boolean {
        return instanceIs.symbol(this.value);
    }

    get object(): boolean {
        return instanceIs.object(this.value);
    }

    get function(): boolean {
        return instanceIs.function(this.value);
    }

    get type(): boolean {
        return instanceIs.type(this.value);
    }

    get emptyObject(): boolean {
        return instanceIs.emptyObject(this.value);
    }

    get populatedObject(): boolean {
        return instanceIs.populatedObject(this.value);
    }

    get array(): boolean {
        return instanceIs.array(this.value);
    }

    get emptyArray(): boolean {
        return instanceIs.emptyArray(this.value);
    }

    get populatedArray(): boolean {
        return instanceIs.populatedArray(this.value);
    }

    get specified(): boolean {
        return instanceIs.specified(this.value);
    }

    get unspecified(): boolean {
        return instanceIs.unspecified(this.value);
    }

    get positiveInfinity(): boolean {
        return instanceIs.positiveInfinity(this.value);
    }

    get negativeInfinity(): boolean {
        return instanceIs.negativeInfinity(this.value);
    }

    get nan(): boolean {
        return instanceIs.nan(this.value as number);
    }

    get notNan(): boolean {
        return instanceIs.notNan(this.value as number);
    }

    // Methods that need parameters
    equal(other: any): boolean {
        return instanceIs.equal(this.value, other);
    }

    parentType(parentType: Constructor): boolean {
        return instanceIs.parentType(this.value, parentType);
    }

    childType(childType: Constructor): boolean {
        return instanceIs.childType(this.value, childType);
    }

    instanceOf<U>(type: Constructor<U>): boolean {
        return instanceIs.instanceOf(this.value, type);
    }
}

export class MustBe<T = any> extends Function {
    private static formatMessage(message?: string): string {
        if (!message) return message;
        
        // Strip "because" prefix and capitalize next letter
        return message.replace(/^because[:\s]?\s*/i, (match) => {
            const restOfMessage = message.slice(match.length);
            return restOfMessage.charAt(0).toUpperCase() + restOfMessage.slice(1);
        });
    }

    constructor(private value: T) {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => {
                const [type, message] = args;
                if (!instanceIs(this.value, type)) {
                    throw new Error(MustBe.formatMessage(message) || `Value must be instance of ${type.name}`);
                }
                return this.value;
            },
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    undefined(message?: string): asserts value is undefined {
        if (!instanceIs.undefined(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be undefined");
        }
    }

    null(message?: string): asserts value is null {
        if (!instanceIs.null(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be null");
        }
    }

    string(message?: string): asserts value is string {
        if (!instanceIs.string(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a string");
        }
    }

    number(message?: string): asserts value is number {
        if (!instanceIs.number(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a number");
        }
    }

    boolean(message?: string): asserts value is boolean {
        if (!instanceIs.boolean(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a boolean");
        }
    }

    bigint(message?: string): asserts value is BigInt {
        if (!instanceIs.bigint(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a bigint");
        }
    }

    symbol(message?: string): asserts value is Symbol {
        if (!instanceIs.symbol(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a symbol");
        }
    }

    object(message?: string): asserts value is object {
        if (!instanceIs.object(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be an object");
        }
    }

    // ... continue with other assertions ...

    equal(other: any, message?: string): asserts value is typeof other {
        if (!instanceIs.equal(this.value, other)) {
            throw new Error(MustBe.formatMessage(message) || `Value must be equal to ${other}`);
        }
    }
}

// Usage examples:
// x.is(String)              // returns boolean
// x.is.string               // returns boolean
// x.mustBe(String)          // throws if not String
// x.mustBe.string()         // throws if not string
// x.mustBe.string("because: needs to be text")  // throws with formatted message
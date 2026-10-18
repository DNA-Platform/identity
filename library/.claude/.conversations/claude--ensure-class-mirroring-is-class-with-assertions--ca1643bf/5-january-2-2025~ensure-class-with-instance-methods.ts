export class Ensure {
    constructor() {
        return new Proxy(this, {
            apply: (target, thisArg, ...args) => (this.instanceOf as Function)(...args),
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    undefined(value: any, reason?: string): asserts value is undefined {
        is.undefined(value, { orThrow: reason || true });
    }

    null(value: any, reason?: string): asserts value is null {
        is.null(value, { orThrow: reason || true });
    }

    equal<T = any>(first: T | any, second: any, reason?: string): asserts first is T {
        is.equal(first, second, { orThrow: reason || true });
    }

    string(value: any, reason?: string): asserts value is string {
        is.string(value, { orThrow: reason || true });
    }

    number(value: any, reason?: string): asserts value is number {
        is.number(value, { orThrow: reason || true });
    }

    boolean(value: any, reason?: string): asserts value is boolean {
        is.boolean(value, { orThrow: reason || true });
    }

    bigint(value: any, reason?: string): asserts value is BigInt {
        is.bigint(value, { orThrow: reason || true });
    }

    symbol(value: any, reason?: string): asserts value is Symbol {
        is.symbol(value, { orThrow: reason || true });
    }

    object(value: any, reason?: string): asserts value is object {
        is.object(value, { orThrow: reason || true });
    }

    function(value: any, reason?: string): asserts value is Function {
        is.function(value, { orThrow: reason || true });
    }

    type(value: any, reason?: string): asserts value is Constructor {
        is.type(value, { orThrow: reason || true });
    }

    parentType(value: any, parentType: Constructor, reason?: string): void {
        is.parentType(value, parentType, { orThrow: reason || true });
    }

    childType(value: any, childType: Constructor, reason?: string): void {
        is.childType(value, childType, { orThrow: reason || true });
    }

    instanceOf<T=any>(value: any, type: Constructor<T> | any, reason?: string): asserts value is T {
        is.instanceOf(value, type, { orThrow: reason || true });
    }

    emptyObject<T>(value: T | object, reason?: string): asserts value is T {
        is.emptyObject(value, { orThrow: reason || true });
    }

    populatedObject<T>(value: T | object, reason?: string): asserts value is T {
        is.populatedObject(value, { orThrow: reason || true });
    }

    array<T=any>(value: T[] | any, reason?: string): asserts value is T[] {
        is.array(value, { orThrow: reason || true });
    }

    emptyArray<T = any>(value: any | T[], reason?: string): asserts value is T[] {
        is.emptyArray(value, { orThrow: reason || true });
    }

    populatedArray<T = any>(value: any | T[], reason?: string): asserts value is T[] {
        is.populatedArray(value, { orThrow: reason || true });
    }

    specified<T>(value: T | null | undefined | any, reason?: string): asserts value is T {
        is.specified(value, { orThrow: reason || true });
    }

    unspecified<T>(value: T | null | undefined | any, reason?: string): asserts value is null | undefined {
        is.unspecified(value, { orThrow: reason || true });
    }

    positiveInfinity(value: any, reason?: string): asserts value is number {
        is.positiveInfinity(value, { orThrow: reason || true });
    }

    negativeInfinity(value: any, reason?: string): asserts value is number {
        is.negativeInfinity(value, { orThrow: reason || true });
    }

    nan(value: number | null | undefined, reason?: string): asserts value is number {
        is.nan(value, { orThrow: reason || true });
    }

    notNan(value: number | null | undefined, reason?: string): asserts value is number {
        is.notNan(value, { orThrow: reason || true });
    }
}

export const ensure = new Ensure();
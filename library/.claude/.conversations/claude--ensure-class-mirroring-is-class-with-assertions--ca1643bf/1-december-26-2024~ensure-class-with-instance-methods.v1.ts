export class Ensure {
    constructor() {
        return new Proxy(this, {
            apply: (target, thisArg, ...args) => (this.instanceOf as Function)(...args),
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    undefined(value: any, reason?: { reason: string }): asserts value is undefined {
        is.undefined(value, { orThrow: reason?.reason || true });
    }

    null(value: any, reason?: { reason: string }): asserts value is null {
        is.null(value, { orThrow: reason?.reason || true });
    }

    equal(first: any, second: any, reason?: { reason: string }): void {
        is.equal(first, second, { orThrow: reason?.reason || true });
    }

    string(value: any, reason?: { reason: string }): asserts value is string {
        is.string(value, { orThrow: reason?.reason || true });
    }

    number(value: any, reason?: { reason: string }): asserts value is number {
        is.number(value, { orThrow: reason?.reason || true });
    }

    boolean(value: any, reason?: { reason: string }): asserts value is boolean {
        is.boolean(value, { orThrow: reason?.reason || true });
    }

    bigint(value: any, reason?: { reason: string }): asserts value is BigInt {
        is.bigint(value, { orThrow: reason?.reason || true });
    }

    symbol(value: any, reason?: { reason: string }): asserts value is Symbol {
        is.symbol(value, { orThrow: reason?.reason || true });
    }

    object(value: any, reason?: { reason: string }): asserts value is object {
        is.object(value, { orThrow: reason?.reason || true });
    }

    function(value: any, reason?: { reason: string }): asserts value is Function {
        is.function(value, { orThrow: reason?.reason || true });
    }

    type(value: any, reason?: { reason: string }): asserts value is Constructor {
        is.type(value, { orThrow: reason?.reason || true });
    }

    parentType(value: any, parentType: Constructor, reason?: { reason: string }): void {
        is.parentType(value, parentType, { orThrow: reason?.reason || true });
    }

    childType(value: any, childType: Constructor, reason?: { reason: string }): void {
        is.childType(value, childType, { orThrow: reason?.reason || true });
    }

    instanceOf<T>(value: any, type: Constructor<T>, reason?: { reason: string }): asserts value is T {
        is.instanceOf(value, type, { orThrow: reason?.reason || true });
    }

    emptyObject<T>(value: T | object, reason?: { reason: string }): asserts value is T {
        is.emptyObject(value, { orThrow: reason?.reason || true });
    }

    populatedObject<T>(value: T | object, reason?: { reason: string }): asserts value is T {
        is.populatedObject(value, { orThrow: reason?.reason || true });
    }

    array<T=any>(value: T[] | any, reason?: { reason: string }): asserts value is T[] {
        is.array(value, { orThrow: reason?.reason || true });
    }

    emptyArray<T = any>(value: any | T[], reason?: { reason: string }): asserts value is T[] {
        is.emptyArray(value, { orThrow: reason?.reason || true });
    }

    populatedArray<T = any>(value: any | T[], reason?: { reason: string }): asserts value is T[] {
        is.populatedArray(value, { orThrow: reason?.reason || true });
    }

    specified<T>(value: T | null | undefined | any, reason?: { reason: string }): asserts value is T {
        is.specified(value, { orThrow: reason?.reason || true });
    }

    unspecified<T>(value: T | null | undefined | any, reason?: { reason: string }): asserts value is null | undefined {
        is.unspecified(value, { orThrow: reason?.reason || true });
    }

    positiveInfinity(value: any, reason?: { reason: string }): asserts value is number {
        is.positiveInfinity(value, { orThrow: reason?.reason || true });
    }

    negativeInfinity(value: any, reason?: { reason: string }): asserts value is number {
        is.negativeInfinity(value, { orThrow: reason?.reason || true });
    }

    nan(value: number | null | undefined, reason?: { reason: string }): asserts value is number {
        is.nan(value, { orThrow: reason?.reason || true });
    }

    notNan(value: number | null | undefined, reason?: { reason: string }): asserts value is number {
        is.notNan(value, { orThrow: reason?.reason || true });
    }
}

export const ensure = new Ensure();
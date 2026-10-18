export class IsValue<T = any> {
    constructor(private value: T) {}

    undefined(orThrow?: { orThrow: boolean | string }): value is undefined {
        return is.undefined(this.value, orThrow);
    }

    null(orThrow?: { orThrow: boolean | string }): value is null {
        return is.null(this.value, orThrow);
    }

    equal<T = any>(second: any, orThrow?: { orThrow: boolean | string }): value is T {
        return is.equal(this.value, second, orThrow);
    }

    string(orThrow?: { orThrow: boolean | string }): value is string {
        return is.string(this.value, orThrow);
    }

    number(orThrow?: { orThrow: boolean | string }): value is number {
        return is.number(this.value, orThrow);
    }

    boolean(orThrow?: { orThrow: boolean | string }): value is boolean {
        return is.boolean(this.value, orThrow);
    }

    bigint(orThrow?: { orThrow: boolean | string }): value is BigInt {
        return is.bigint(this.value, orThrow);
    }

    symbol(orThrow?: { orThrow: boolean | string }): value is Symbol {
        return is.symbol(this.value, orThrow);
    }

    object(orThrow?: { orThrow: boolean | string }): value is object {
        return is.object(this.value, orThrow);
    }

    function(orThrow?: { orThrow: boolean | string }): value is Function {
        return is.function(this.value, orThrow);
    }

    type(orThrow?: { orThrow: boolean | string }): value is Constructor {
        return is.type(this.value, orThrow);
    }

    parentType(parentType: Constructor, orThrow?: { orThrow: boolean | string }): boolean {
        return is.parentType(this.value, parentType, orThrow);
    }

    childType(childType: Constructor, orThrow?: { orThrow: boolean | string }): boolean {
        return is.childType(this.value, childType, orThrow);
    }

    instanceOf<T=any>(type: Constructor<T> | any, orThrow?: { orThrow: boolean | string }): value is T {
        return is.instanceOf(this.value, type, orThrow);
    }

    emptyObject<T>(orThrow?: { orThrow: boolean | string }): value is T {
        return is.emptyObject(this.value, orThrow);
    }

    populatedObject<T>(orThrow?: { orThrow: boolean | string }): value is T {
        return is.populatedObject(this.value, orThrow);
    }

    array<T=any>(orThrow?: { orThrow: boolean | string }): value is T[] {
        return is.array(this.value, orThrow);
    }

    emptyArray<T = any>(orThrow?: { orThrow: boolean | string }): value is T[] {
        return is.emptyArray(this.value, orThrow);
    }

    populatedArray<T = any>(orThrow?: { orThrow: boolean | string }): value is T[] {
        return is.populatedArray(this.value, orThrow);
    }

    specified<T>(orThrow?: { orThrow: boolean | string }): value is T {
        return is.specified(this.value, orThrow);
    }

    unspecified<T>(orThrow?: { orThrow: boolean | string }): value is null | undefined {
        return is.unspecified(this.value, orThrow);
    }

    positiveInfinity(orThrow?: { orThrow: boolean | string }): value is number {
        return is.positiveInfinity(this.value, orThrow);
    }

    negativeInfinity(orThrow?: { orThrow: boolean | string }): value is number {
        return is.negativeInfinity(this.value, orThrow);
    }

    nan(orThrow?: { orThrow: boolean | string }): value is number {
        return is.nan(this.value, orThrow);
    }

    notNan(orThrow?: { orThrow: boolean | string }): value is number {
        return is.notNan(this.value, orThrow);
    }
}

export const isValue = <T>(value: T) => new IsValue(value);
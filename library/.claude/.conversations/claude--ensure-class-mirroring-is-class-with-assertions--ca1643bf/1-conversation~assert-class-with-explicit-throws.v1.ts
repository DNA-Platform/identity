export class Assert {
    undefined(value: any, reason?: string): asserts value is undefined {
        if (!instanceIs.undefined(value)) {
            throw new Error(reason || "The provided value is not undefined.");
        }
    }

    null(value: any, reason?: string): asserts value is null {
        if (!instanceIs.null(value)) {
            throw new Error(reason || "The provided value is not null.");
        }
    }

    equal<T = any>(first: T | any, second: any, reason?: string): asserts first is T {
        if (!instanceIs.equal(first, second)) {
            throw new Error(reason || "Values are not equal.");
        }
    }

    string(value: any, reason?: string): asserts value is string {
        if (!instanceIs.string(value)) {
            throw new Error(reason || "The provided value is not a string.");
        }
    }

    number(value: any, reason?: string): asserts value is number {
        if (!instanceIs.number(value)) {
            throw new Error(reason || "The provided value is not a number.");
        }
    }

    boolean(value: any, reason?: string): asserts value is boolean {
        if (!instanceIs.boolean(value)) {
            throw new Error(reason || "The provided value is not a boolean.");
        }
    }

    true(value: any, reason?: string): asserts value is true {
        if (!instanceIs.true(value)) {
            throw new Error(reason || "The provided value is not true.");
        }
    }

    false(value: any, reason?: string): asserts value is false {
        if (!instanceIs.false(value)) {
            throw new Error(reason || "The provided value is not false.");
        }
    }

    bigint(value: any, reason?: string): asserts value is BigInt {
        if (!instanceIs.bigint(value)) {
            throw new Error(reason || "The provided value is not a bigint.");
        }
    }

    symbol(value: any, reason?: string): asserts value is Symbol {
        if (!instanceIs.symbol(value)) {
            throw new Error(reason || "The provided value is not a symbol.");
        }
    }

    object(value: any, reason?: string): asserts value is object {
        if (!instanceIs.object(value)) {
            throw new Error(reason || "The provided value is not an object.");
        }
    }

    function(value: any, reason?: string): asserts value is Function {
        if (!instanceIs.function(value)) {
            throw new Error(reason || "The provided value is not a function.");
        }
    }

    type(value: any, reason?: string): asserts value is Constructor {
        if (!instanceIs.type(value)) {
            throw new Error(reason || "The provided value is not a type.");
        }
    }

    parentType(value: any, parentType: Constructor, reason?: string): void {
        if (!instanceIs.parentType(value, parentType)) {
            throw new Error(reason || `The provided value is not a parent type of ${parentType.name ?? "the specified constructor"}.`);
        }
    }

    childType(value: any, childType: Constructor, reason?: string): void {
        if (!instanceIs.childType(value, childType)) {
            throw new Error(reason || `The provided value is not a child type of ${childType?.name ?? "the specified constructor"}.`);
        }
    }

    instanceOf<T=any>(value: any, type: Constructor<T> | any, reason?: string): asserts value is T {
        if (!instanceIs.instanceOf(value, type)) {
            throw new Error(reason || `The provided value is not an instance of ${type.name ?? "the specified constructor"}.`);
        }
    }

    emptyObject<T>(value: T | object, reason?: string): asserts value is T {
        if (!instanceIs.emptyObject(value)) {
            throw new Error(reason || "The provided value is not an empty object.");
        }
    }

    populatedObject<T>(value: T | object, reason?: string): asserts value is T {
        if (!instanceIs.populatedObject(value)) {
            throw new Error(reason || "The provided value is not a populated object.");
        }
    }

    array(value: any, reason?: string): asserts value is any[] {
        if (!instanceIs.array(value)) {
            throw new Error(reason || "The provided value is not an array.");
        }
    }

    emptyArray<T = any>(value: T[] | any[] | any, reason?: string): asserts value is T[] {
        if (!instanceIs.emptyArray(value)) {
            throw new Error(reason || "The provided value is not an empty array.");
        }
    }

    populatedArray<T = any>(value: any | T[], reason?: string): asserts value is T[] {
        if (!instanceIs.populatedArray(value)) {
            throw new Error(reason || "The provided value is not a populated array.");
        }
    }

    specified<T>(value: T, reason?: string): asserts value is T;
    specified<T>(value: T | null, reason?: string): asserts value is T;
    specified<T>(value: T | undefined, reason?: string): asserts value is T;
    specified<T>(value: T | null | undefined, reason?: string): asserts value is T {
        if (!instanceIs.specified(value)) {
            throw new Error(reason || "The provided value is not specified.");
        }
    }

    unspecified<T>(value: any, reason?: string): asserts value is null | undefined {
        if (!instanceIs.unspecified(value)) {
            throw new Error(reason || "The provided value is specified.");
        }
    }

    positiveInfinity(value: any, reason?: string): asserts value is number {
        if (!instanceIs.positiveInfinity(value)) {
            throw new Error(reason || "The provided value is not positive infinity.");
        }
    }

    negativeInfinity(value: any, reason?: string): asserts value is number {
        if (!instanceIs.negativeInfinity(value)) {
            throw new Error(reason || "The provided value is not negative infinity.");
        }
    }

    nan(value: number | null | undefined, reason?: string): asserts value is number {
        if (!instanceIs.nan(value)) {
            throw new Error(reason || "The provided value is not NaN.");
        }
    }

    notNan(value: number | null | undefined, reason?: string): asserts value is number {
        if (!instanceIs.notNan(value)) {
            throw new Error(reason || "The provided value is NaN.");
        }
    }
}
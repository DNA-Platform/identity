import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Ensure Class with Instance Methods v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export class Ensure {
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

    equal<T = any>(first: T | any, second: any, reason?: { reason: string }): asserts first is T {
        is.equal(first, second, { orThrow: reason?.reason || true });
    }

    string<T extends string = string>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.string(value, { orThrow: reason?.reason || true });
    }

    number<T extends number = number>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.number(value, { orThrow: reason?.reason || true });
    }

    boolean<T extends boolean = boolean>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.boolean(value, { orThrow: reason?.reason || true });
    }

    bigint<T extends bigint = bigint>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.bigint(value, { orThrow: reason?.reason || true });
    }

    symbol<T extends symbol = symbol>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.symbol(value, { orThrow: reason?.reason || true });
    }

    object<T extends object = object>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.object(value, { orThrow: reason?.reason || true });
    }

    function<T extends Function = Function>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.function(value, { orThrow: reason?.reason || true });
    }

    type<T extends Constructor = Constructor>(value: T | any, reason?: { reason: string }): asserts value is T {
        is.type(value, { orThrow: reason?.reason || true });
    }

    parentType<T extends Constructor>(value: any, parentType: T, reason?: { reason: string }): asserts value is T {
        is.parentType(value, parentType, { orThrow: reason?.reason || true });
    }

    childType<T extends Constructor>(value: any, childType: T, reason?: { reason: string }): asserts value is T {
        is.childType(value, childType, { orThrow: reason?.reason || true });
    }

    instanceOf<T>(value: any, type: Constructor<T>, reason?: { reason: string }): asserts value is T {
        is.instanceOf(value, type, { orThrow: reason?.reason || true });
    }

    emptyObject<T extends object>(value: T | object | any, reason?: { reason: string }): asserts value is T {
        is.emptyObject(value, { orThrow: reason?.reason || true });
    }

    populatedObject<T extends object>(value: T | object | any, reason?: { reason: string }): asserts value is T {
        is.populatedObject(value, { orThrow: reason?.reason || true });
    }

    array<T = any>(value: T[] | any, reason?: { reason: string }): asserts value is T[] {
        is.array(value, { orThrow: reason?.reason || true });
    }

    emptyArray<T = any>(value: T[] | any, reason?: { reason: string }): asserts value is T[] {
        is.emptyArray(value, { orThrow: reason?.reason || true });
    }

    populatedArray<T = any>(value: T[] | any, reason?: { reason: string }): asserts value is T[] {
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

export const ensure = new Ensure();`}
        </CodeBox>
    </Chapter>
);

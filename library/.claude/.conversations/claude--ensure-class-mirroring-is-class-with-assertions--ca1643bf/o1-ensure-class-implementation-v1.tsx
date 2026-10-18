import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Ensure Class Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}/// <reference path="./classical.d.ts" />

import { is } from './is';

export class Ensure {
    static undefined(value: any): asserts value is undefined {
        is.undefined(value, { orThrow: true });
    }

    static null(value: any): asserts value is null {
        is.null(value, { orThrow: true });
    }

    static equal(first: any, second: any): void {
        is.equal(first, second, { orThrow: true });
    }

    static string(value: any): asserts value is string {
        is.string(value, { orThrow: true });
    }

    static number(value: any): asserts value is number {
        is.number(value, { orThrow: true });
    }

    static boolean(value: any): asserts value is boolean {
        is.boolean(value, { orThrow: true });
    }

    static bigint(value: any): asserts value is BigInt {
        is.bigint(value, { orThrow: true });
    }

    static symbol(value: any): asserts value is Symbol {
        is.symbol(value, { orThrow: true });
    }

    static object(value: any): asserts value is object {
        is.object(value, { orThrow: true });
    }

    static function(value: any): asserts value is Function {
        is.function(value, { orThrow: true });
    }

    static type(value: any): asserts value is Constructor {
        is.type(value, { orThrow: true });
    }

    static parentType(value: any, parentType: Constructor): void {
        is.parentType(value, parentType, { orThrow: true });
    }

    static childType(value: any, childType: Constructor): void {
        is.childType(value, childType, { orThrow: true });
    }

    static instanceOf<T>(value: any, type: Constructor<T>): asserts value is T {
        is.instanceOf(value, type, { orThrow: true });
    }

    static emptyObject<T>(value: T | object): asserts value is T {
        is.emptyObject(value, { orThrow: true });
    }

    static populatedObject<T>(value: T | object): asserts value is T {
        is.populatedObject(value, { orThrow: true });
    }

    static array<T>(value: T[] | any): asserts value is T[] {
        is.array(value, { orThrow: true });
    }

    static emptyArray<T>(value: any | T[]): asserts value is T[] {
        is.emptyArray(value, { orThrow: true });
    }

    static populatedArray<T>(value: any | T[]): asserts value is T[] {
        is.populatedArray(value, { orThrow: true });
    }

    static specified<T>(value: T | null | undefined): asserts value is T {
        is.specified(value, { orThrow: true });
    }

    static unspecified<T>(value: T | null | undefined): asserts value is null | undefined {
        is.unspecified(value, { orThrow: true });
    }

    static positiveInfinity(value: any): asserts value is number {
        is.positiveInfinity(value, { orThrow: true });
    }

    static negativeInfinity(value: any): asserts value is number {
        is.negativeInfinity(value, { orThrow: true });
    }

    static nan(value: number | null | undefined): asserts value is number {
        is.nan(value, { orThrow: true });
    }

    static notNan(value: number | null | undefined): asserts value is number {
        is.notNan(value, { orThrow: true });
    }
}

export const ensure = Ensure;`}
        </CodeBox>
    </Chapter>
);

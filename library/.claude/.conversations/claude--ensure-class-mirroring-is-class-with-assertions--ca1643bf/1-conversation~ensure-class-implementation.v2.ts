/// <reference path="./classical.d.ts" />

import { is } from './is';

export class Ensure {
    static undefined(value: any, reason?: { reason: string }): asserts value is undefined {
        is.undefined(value, { orThrow: reason?.reason || true });
    }

    static null(value: any, reason?: { reason: string }): asserts value is null {
        is.null(value, { orThrow: reason?.reason || true });
    }

    static equal(first: any, second: any, reason?: { reason: string }): void {
        is.equal(first, second, { orThrow: reason?.reason || true });
    }

    static string(value: any, reason?: { reason: string }): asserts value is string {
        is.string(value, { orThrow: reason?.reason || true });
    }

    static number(value: any, reason?: { reason: string }): asserts value is number {
        is.number(value, { orThrow: reason?.reason || true });
    }

    static boolean(value: any, reason?: { reason: string }): asserts value is boolean {
        is.boolean(value, { orThrow: reason?.reason || true });
    }

    static bigint(value: any, reason?: { reason: string }): asserts value is BigInt {
        is.bigint(value, { orThrow: reason?.reason || true });
    }

    static symbol(value: any, reason?: { reason: string }): asserts value is Symbol {
        is.symbol(value, { orThrow: reason?.reason || true });
    }

    static object(value: any, reason?: { reason: string }): asserts value is object {
        is.object(value, { orThrow: reason?.reason || true });
    }

    static function(value: any, reason?: { reason: string }): asserts value is Function {
        is.function(value, { orThrow: reason?.reason || true });
    }

    static type(value: any, reason?: { reason: string }): asserts value is Constructor {
        is.type(value, { orThrow: reason?.reason || true });
    }

    static parentType(value: any, parentType: Constructor, reason?: { reason: string }): void {
        is.parentType(value, parentType, { orThrow: reason?.reason || true });
    }

    static childType(value: any, childType: Constructor, reason?: { reason: string }): void {
        is.childType(value, childType, { orThrow: reason?.reason || true });
    }

    static instanceOf<T>(value: any, type: Constructor<T>, reason?: { reason: string }): asserts value is T {
        is.instanceOf(value, type, { orThrow: reason?.reason || true });
    }

    static emptyObject<T>(value: T | object, reason?: { reason: string }): asserts value is T {
        is.emptyObject(value, { orThrow: reason?.reason || true });
    }

    static populatedObject<T>(value: T | object, reason?: { reason: string }): asserts value is T {
        is.populatedObject(value, { orThrow: reason?.reason || true });
    }

    static array<T>(value: T[] | any, reason?: { reason: string }): asserts value is T[] {
        is.array(value, { orThrow: reason?.reason || true });
    }

    static emptyArray<T>(value: any | T[], reason?: { reason: string }): asserts value is T[] {
        is.emptyArray(value, { orThrow: reason?.reason || true });
    }

    static populatedArray<T>(value: any | T[], reason?: { reason: string }): asserts value is T[] {
        is.populatedArray(value, { orThrow: reason?.reason || true });
    }

    static specified<T>(value: T | null | undefined, reason?: { reason: string }): asserts value is T {
        is.specified(value, { orThrow: reason?.reason || true });
    }

    static unspecified<T>(value: T | null | undefined, reason?: { reason: string }): asserts value is null | undefined {
        is.unspecified(value, { orThrow: reason?.reason || true });
    }

    static positiveInfinity(value: any, reason?: { reason: string }): asserts value is number {
        is.positiveInfinity(value, { orThrow: reason?.reason || true });
    }

    static negativeInfinity(value: any, reason?: { reason: string }): asserts value is number {
        is.negativeInfinity(value, { orThrow: reason?.reason || true });
    }

    static nan(value: number | null | undefined, reason?: { reason: string }): asserts value is number {
        is.nan(value, { orThrow: reason?.reason || true });
    }

    static notNan(value: number | null | undefined, reason?: { reason: string }): asserts value is number {
        is.notNan(value, { orThrow: reason?.reason || true });
    }
}

export const ensure = Ensure;
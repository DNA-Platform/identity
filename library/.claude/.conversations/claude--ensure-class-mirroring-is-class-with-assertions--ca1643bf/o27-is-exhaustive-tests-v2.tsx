import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ is-exhaustive-tests v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}[Previous tests remain the same until...]

    // Function behavior
    describe('function call behavior', () => {
        it('works as a function for type checking', () => {
            expect("string".is(String)).toBe(true);
            expect((42).is(Number)).toBe(true);
            expect(true.is(Boolean)).toBe(true);
            expect([].is(Array)).toBe(true);
            expect(({}).is(Object)).toBe(true);
        });

        it('returns false for incorrect types', () => {
            expect("string".is(Number)).toBe(false);
            expect((42).is(String)).toBe(false);
            expect(true.is(Array)).toBe(false);
            expect([].is(String)).toBe(false);
        });

        it('works with inheritance', () => {
            class Parent {}
            class Child extends Parent {}
            const child = new Child();
            
            expect(child.is(Child)).toBe(true);
            expect(child.is(Parent)).toBe(true);
            expect(child.is(Object)).toBe(true);
        });

        it('works with built-in inheritance', () => {
            const arr = [];
            expect(arr.is(Array)).toBe(true);
            expect(arr.is(Object)).toBe(true);
        });
    });

    // Edge cases and special scenarios
    describe('edge cases', () => {
        it('handles NaN correctly', () => {
            expect(NaN.is.number).toBe(true);
            expect(NaN.is.nan).toBe(true);
            expect(NaN.is.notNan).toBe(false);
        });

        it('handles zero correctly', () => {
            expect((0).is.number).toBe(true);
            expect((0).is.specified).toBe(true);
            expect((0).is.notNan).toBe(true);
        });

        it('handles empty string correctly', () => {
            expect("".is.string).toBe(true);
            expect("".is.specified).toBe(true);
            expect("".is.emptyArray).toBe(false);
        });

        it('handles false correctly', () => {
            expect(false.is.boolean).toBe(true);
            expect(false.is.specified).toBe(true);
            expect(false.is.undefined).toBe(false);
        });

        it('handles boxed primitives correctly', () => {
            expect(new String("test").is.string).toBe(true);
            expect(new Number(42).is.number).toBe(true);
            expect(new Boolean(true).is.boolean).toBe(true);
        });

        it('handles symbol registration correctly', () => {
            const sym1 = Symbol('test');
            const sym2 = Symbol('test');
            const sym3 = Symbol.for('test');
            const sym4 = Symbol.for('test');

            expect(sym1.is.equal(sym2)).toBe(false); // Different symbols
            expect(sym3.is.equal(sym4)).toBe(true);  // Same registered symbol
        });

        it('handles promise-like objects correctly', () => {
            const promise = Promise.resolve();
            expect(promise.is.instanceOf(Promise)).toBe(true);
            expect(promise.is.object).toBe(true);
            expect(({ then: () => {} }).is.instanceOf(Promise)).toBe(false);
        });

        it('handles array-like objects correctly', () => {
            const arrayLike = { length: 0 };
            expect(arrayLike.is.array).toBe(false);
            expect(arrayLike.is.object).toBe(true);
        });
    });

    // Multiple checks combinations
    describe('combined checks', () => {
        it('can combine multiple checks meaningfully', () => {
            const arr = [1, 2, 3];
            expect(arr.is.array && arr.is.populatedArray).toBe(true);
            expect(arr.is.array && arr.is.emptyArray).toBe(false);
        });

        it('can check type and properties together', () => {
            const str = "test";
            expect(str.is.string && str.is.specified).toBe(true);
            expect(str.is(String) && str.is.specified).toBe(true);
        });

        it('handles complex type hierarchies', () => {
            class A {}
            class B extends A {}
            class C extends B {}
            const c = new C();

            expect(c.is.instanceOf(C) && c.is.instanceOf(B) && c.is.instanceOf(A)).toBe(true);
            expect(C.is.childType(B) && B.is.childType(A)).toBe(true);
            expect(A.is.parentType(B) && B.is.parentType(C)).toBe(true);
        });
    });
});`}
        </CodeBox>
    </Chapter>
);

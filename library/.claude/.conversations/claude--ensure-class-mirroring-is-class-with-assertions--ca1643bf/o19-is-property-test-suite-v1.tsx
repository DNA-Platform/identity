import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Is Property Test Suite v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}describe('Is Property', () => {
    describe('String instances', () => {
        const str = "test string";
        const strObj = new String("test string");

        it('should correctly identify strings', () => {
            expect(str.is.string()).toBe(true);
            expect(strObj.is.string()).toBe(true);
            expect(str.is.number()).toBe(false);
        });

        it('should handle equal checks', () => {
            expect(str.is.equal("test string")).toBe(true);
            expect(str.is.equal("different")).toBe(false);
        });

        it('should identify object properties correctly', () => {
            expect(str.is.specified()).toBe(true);
            expect(str.is.undefined()).toBe(false);
            expect(str.is.null()).toBe(false);
        });

        it('should handle orThrow parameter', () => {
            expect(() => str.is.number({ orThrow: true })).toThrow();
            expect(() => str.is.number({ orThrow: "Custom error" })).toThrow("Custom error");
        });
    });

    describe('Number instances', () => {
        const num = 42;
        const numObj = new Number(42);

        it('should correctly identify numbers', () => {
            expect(num.is.number()).toBe(true);
            expect(numObj.is.number()).toBe(true);
            expect(num.is.string()).toBe(false);
        });

        it('should handle special number checks', () => {
            expect(Number.POSITIVE_INFINITY.is.positiveInfinity()).toBe(true);
            expect(Number.NEGATIVE_INFINITY.is.negativeInfinity()).toBe(true);
            expect(NaN.is.nan()).toBe(true);
            expect(num.is.notNan()).toBe(true);
        });

        it('should handle equal checks', () => {
            expect(num.is.equal(42)).toBe(true);
            expect(num.is.equal(43)).toBe(false);
        });
    });

    describe('Boolean instances', () => {
        const bool = true;
        const boolObj = new Boolean(true);

        it('should correctly identify booleans', () => {
            expect(bool.is.boolean()).toBe(true);
            expect(boolObj.is.boolean()).toBe(true);
            expect(bool.is.number()).toBe(false);
        });

        it('should handle equal checks', () => {
            expect(bool.is.equal(true)).toBe(true);
            expect(bool.is.equal(false)).toBe(false);
        });
    });

    describe('Object instances', () => {
        const obj = { prop: 'value' };

        it('should correctly identify objects', () => {
            expect(obj.is.object()).toBe(true);
            expect(obj.is.string()).toBe(false);
        });

        it('should handle empty/populated checks', () => {
            expect({}.is.emptyObject()).toBe(true);
            expect(obj.is.populatedObject()).toBe(true);
        });

        it('should handle inheritance checks', () => {
            class Parent {}
            class Child extends Parent {}
            const parent = new Parent();
            const child = new Child();

            expect(Child.is.childType(Parent)).toBe(true);
            expect(Parent.is.parentType(Child)).toBe(true);
            expect(child.is.instanceOf(Parent)).toBe(true);
            expect(parent.is.instanceOf(Child)).toBe(false);
        });
    });

    describe('Array instances', () => {
        const emptyArr: any[] = [];
        const populatedArr = [1, 2, 3];

        it('should correctly identify arrays', () => {
            expect(emptyArr.is.array()).toBe(true);
            expect(populatedArr.is.array()).toBe(true);
            expect(emptyArr.is.object()).toBe(true);  // arrays are objects
        });

        it('should handle empty/populated checks', () => {
            expect(emptyArr.is.emptyArray()).toBe(true);
            expect(emptyArr.is.populatedArray()).toBe(false);
            expect(populatedArr.is.emptyArray()).toBe(false);
            expect(populatedArr.is.populatedArray()).toBe(true);
        });
    });

    describe('Symbol instances', () => {
        const sym = Symbol('test');

        it('should correctly identify symbols', () => {
            expect(sym.is.symbol()).toBe(true);
            expect(sym.is.string()).toBe(false);
        });

        it('should handle equal checks', () => {
            expect(sym.is.equal(sym)).toBe(true);
            expect(sym.is.equal(Symbol('test'))).toBe(false);  // Symbols are always unique
        });
    });

    describe('BigInt instances', () => {
        const bigInt = BigInt(42);

        it('should correctly identify bigints', () => {
            expect(bigInt.is.bigint()).toBe(true);
            expect(bigInt.is.number()).toBe(false);
        });

        it('should handle equal checks', () => {
            expect(bigInt.is.equal(BigInt(42))).toBe(true);
            expect(bigInt.is.equal(BigInt(43))).toBe(false);
        });
    });

    describe('Function instances', () => {
        const func = function() {};

        it('should correctly identify functions', () => {
            expect(func.is.function()).toBe(true);
            expect(func.is.string()).toBe(false);
        });

        it('should identify constructor functions as types', () => {
            class TestClass {}
            expect(TestClass.is.type()).toBe(true);
            expect(func.is.type()).toBe(false);
        });
    });

    describe('null and undefined', () => {
        it('should handle null checks through Object prototype', () => {
            const nullValue = null;
            expect(() => nullValue.is.null()).toThrow();  // can't access .is on null
            expect(() => nullValue.is.undefined()).toThrow();
        });

        it('should handle undefined checks through Object prototype', () => {
            const undefinedValue = undefined;
            expect(() => undefinedValue.is.undefined()).toThrow();  // can't access .is on undefined
            expect(() => undefinedValue.is.null()).toThrow();
        });
    });

    describe('specified/unspecified', () => {
        it('should correctly identify specified values', () => {
            expect("test".is.specified()).toBe(true);
            expect(42..is.specified()).toBe(true);
            expect(true.is.specified()).toBe(true);
        });

        it('should handle edge cases', () => {
            expect(0..is.specified()).toBe(true);
            expect("".is.specified()).toBe(true);
            expect(false.is.specified()).toBe(true);
        });
    });

    describe('error handling', () => {
        it('should handle orThrow consistently across all types', () => {
            expect(() => "test".is.number({ orThrow: true })).toThrow();
            expect(() => 42..is.string({ orThrow: true })).toThrow();
            expect(() => true.is.object({ orThrow: true })).toThrow();
            expect(() => [].is.string({ orThrow: true })).toThrow();
        });

        it('should use custom error messages', () => {
            const customMsg = "Custom error message";
            expect(() => "test".is.number({ orThrow: customMsg })).toThrow(customMsg);
            expect(() => 42..is.string({ orThrow: customMsg })).toThrow(customMsg);
        });
    });
});`}
        </CodeBox>
    </Chapter>
);

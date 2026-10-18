import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ mustbe-lazy-tests v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}describe('MustBe', () => {
    describe('primitive type assertions', () => {
        it('validates strings', () => {
            expect(() => mustBe.string("test")).not.toThrow();
            expect(() => mustBe.string(42)).toThrow();
            expect(() => mustBe.string(new String("test"))).not.toThrow();
        });

        it('validates numbers', () => {
            expect(() => mustBe.number(42)).not.toThrow();
            expect(() => mustBe.number("42")).toThrow();
            expect(() => mustBe.number(new Number(42))).not.toThrow();
        });

        it('validates booleans', () => {
            expect(() => mustBe.boolean(true)).not.toThrow();
            expect(() => mustBe.boolean(false)).not.toThrow();
            expect(() => mustBe.boolean("true")).toThrow();
            expect(() => mustBe.boolean(new Boolean(true))).not.toThrow();
        });

        it('validates true/false specifically', () => {
            expect(() => mustBe.true(true)).not.toThrow();
            expect(() => mustBe.true(false)).toThrow();
            expect(() => mustBe.false(false)).not.toThrow();
            expect(() => mustBe.false(true)).toThrow();
        });

        it('validates bigints', () => {
            expect(() => mustBe.bigint(BigInt(42))).not.toThrow();
            expect(() => mustBe.bigint(42)).toThrow();
        });

        it('validates symbols', () => {
            expect(() => mustBe.symbol(Symbol())).not.toThrow();
            expect(() => mustBe.symbol("symbol")).toThrow();
        });
    });

    describe('object assertions', () => {
        it('validates objects', () => {
            expect(() => mustBe.object({})).not.toThrow();
            expect(() => mustBe.object(null)).toThrow();
            expect(() => mustBe.object(42)).toThrow();
        });

        it('validates empty objects', () => {
            expect(() => mustBe.emptyObject({})).not.toThrow();
            expect(() => mustBe.emptyObject({ prop: "value" })).toThrow();
        });

        it('validates populated objects', () => {
            expect(() => mustBe.populatedObject({ prop: "value" })).not.toThrow();
            expect(() => mustBe.populatedObject({})).toThrow();
        });
    });

    describe('array assertions', () => {
        it('validates arrays', () => {
            expect(() => mustBe.array([])).not.toThrow();
            expect(() => mustBe.array({})).toThrow();
        });

        it('validates empty arrays', () => {
            expect(() => mustBe.emptyArray([])).not.toThrow();
            expect(() => mustBe.emptyArray([1, 2, 3])).toThrow();
        });

        it('validates populated arrays', () => {
            expect(() => mustBe.populatedArray([1, 2, 3])).not.toThrow();
            expect(() => mustBe.populatedArray([])).toThrow();
        });
    });

    describe('function and type assertions', () => {
        it('validates functions', () => {
            expect(() => mustBe.function(() => {})).not.toThrow();
            expect(() => mustBe.function({})).toThrow();
        });

        it('validates types', () => {
            class TestClass {}
            expect(() => mustBe.type(TestClass)).not.toThrow();
            expect(() => mustBe.type(() => {})).toThrow();
        });

        it('validates inheritance relationships', () => {
            class Parent {}
            class Child extends Parent {}
            class Other {}

            expect(() => mustBe.parentType(Parent, Child)).not.toThrow();
            expect(() => mustBe.childType(Child, Parent)).not.toThrow();
            expect(() => mustBe.parentType(Other, Child)).toThrow();
        });

        it('validates instanceof relationships', () => {
            class TestClass {}
            const instance = new TestClass();
            expect(() => mustBe.instanceOf(instance, TestClass)).not.toThrow();
            expect(() => mustBe.instanceOf({}, TestClass)).toThrow();
        });
    });

    describe('null/undefined assertions', () => {
        it('validates undefined', () => {
            let undef;
            expect(() => mustBe.undefined(undef)).not.toThrow();
            expect(() => mustBe.undefined(null)).toThrow();
        });

        it('validates null', () => {
            expect(() => mustBe.null(null)).not.toThrow();
            expect(() => mustBe.null(undefined)).toThrow();
        });
    });

    describe('special number assertions', () => {
        it('validates infinite numbers', () => {
            expect(() => mustBe.infinite(Infinity)).not.toThrow();
            expect(() => mustBe.infinite(-Infinity)).not.toThrow();
            expect(() => mustBe.infinite(42)).toThrow();
        });

        it('validates finite numbers', () => {
            expect(() => mustBe.finite(42)).not.toThrow();
            expect(() => mustBe.finite(Infinity)).toThrow();
            expect(() => mustBe.finite(NaN)).toThrow();
        });

        it('validates NaN', () => {
            expect(() => mustBe.nan(NaN)).not.toThrow();
            expect(() => mustBe.nan(42)).toThrow();
        });

        it('validates not NaN', () => {
            expect(() => mustBe.notNan(42)).not.toThrow();
            expect(() => mustBe.notNan(NaN)).toThrow();
        });

        it('validates positive infinity', () => {
            expect(() => mustBe.positiveInfinity(Infinity)).not.toThrow();
            expect(() => mustBe.positiveInfinity(-Infinity)).toThrow();
            expect(() => mustBe.positiveInfinity(42)).toThrow();
        });

        it('validates negative infinity', () => {
            expect(() => mustBe.negativeInfinity(-Infinity)).not.toThrow();
            expect(() => mustBe.negativeInfinity(Infinity)).toThrow();
            expect(() => mustBe.negativeInfinity(-42)).toThrow();
        });
    });

    describe('specified/defined assertions', () => {
        it('validates specified values', () => {
            expect(() => mustBe.specified("value")).not.toThrow();
            expect(() => mustBe.specified(null)).toThrow();
            expect(() => mustBe.specified(undefined)).toThrow();
        });

        it('validates unspecified values', () => {
            expect(() => mustBe.unspecified(null)).not.toThrow();
            expect(() => mustBe.unspecified(undefined)).not.toThrow();
            expect(() => mustBe.unspecified("value")).toThrow();
        });

        it('validates defined values', () => {
            expect(() => mustBe.defined("value")).not.toThrow();
            expect(() => mustBe.defined(null)).toThrow();
            expect(() => mustBe.defined(undefined)).toThrow();
        });

        it('validates not defined values', () => {
            expect(() => mustBe.notDefined(null)).not.toThrow();
            expect(() => mustBe.notDefined(undefined)).not.toThrow();
            expect(() => mustBe.notDefined("value")).toThrow();
        });
    });

    describe('utility assertions', () => {
        it('throws for not implemented', () => {
            expect(() => mustBe.notImplemented()).toThrow("The property methopd has not been implemented yet");
        });

        it('throws for static class', () => {
            expect(() => mustBe.staticClass()).toThrow("A static class cannot be instantiated");
        });
    });

    describe('custom error messages', () => {
        it('uses custom error messages when provided', () => {
            const customMessage = "Custom error message";
            expect(() => mustBe.string(42, customMessage)).toThrow(customMessage);
            expect(() => mustBe.number("42", customMessage)).toThrow(customMessage);
            expect(() => mustBe.boolean(42, customMessage)).toThrow(customMessage);
        });
    });
});

describe('Lazy', () => {
    it('initializes value on first access', () => {
        const initSpy = jest.fn(() => 42);
        const lazy = new Lazy(initSpy);
        
        expect(initSpy).not.toHaveBeenCalled();
        
        const value = lazy.value;
        expect(initSpy).toHaveBeenCalledTimes(1);
        expect(value).toBe(42);
    });

    it('caches initialized value', () => {
        const initSpy = jest.fn(() => 42);
        const lazy = new Lazy(initSpy);
        
        lazy.value;
        lazy.value;
        lazy.value;
        
        expect(initSpy).toHaveBeenCalledTimes(1);
    });

    it('maintains separate values for different instances', () => {
        const lazy1 = new Lazy(() => 42);
        const lazy2 = new Lazy(() => 84);
        
        expect(lazy1.value).toBe(42);
        expect(lazy2.value).toBe(84);
    });

    it('handles complex initializers', () => {
        const lazy = new Lazy(() => {
            const obj = { count: 0 };
            obj.count += 1;
            return obj;
        });
        
        const value1 = lazy.value;
        const value2 = lazy.value;
        
        expect(value1).toBe(value2);
        expect(value1.count).toBe(1);
    });
});`}
        </CodeBox>
    </Chapter>
);

describe('Is Property', () => {
    describe('String values', () => {
        const str = "test string";
        
        it('identifies strings through properties', () => {
            expect(str.is.string).toBe(true);
            expect(str.is.number).toBe(false);
            expect(str.is.boolean).toBe(false);
            expect(str.is.undefined).toBe(false);
            expect(str.is.null).toBe(false);
            expect(str.is.object).toBe(false);
        });

        it('works with equality', () => {
            expect(str.is.equal("test string")).toBe(true);
            expect(str.is.equal("different")).toBe(false);
        });

        it('works as a function', () => {
            expect(str.is(String)).toBe(true);
            expect(str.is(Number)).toBe(false);
        });
    });

    describe('Number values', () => {
        const num = 42;
        const nan = NaN;
        const posInf = Number.POSITIVE_INFINITY;
        const negInf = Number.NEGATIVE_INFINITY;

        it('identifies numbers through properties', () => {
            expect(num.is.number).toBe(true);
            expect(num.is.string).toBe(false);
            expect(num.is.notNan).toBe(true);
            expect(num.is.nan).toBe(false);
        });

        it('handles special number values', () => {
            expect(nan.is.nan).toBe(true);
            expect(nan.is.notNan).toBe(false);
            expect(posInf.is.positiveInfinity).toBe(true);
            expect(negInf.is.negativeInfinity).toBe(true);
        });

        it('works as a function', () => {
            expect(num.is(Number)).toBe(true);
            expect(num.is(String)).toBe(false);
        });
    });

    describe('Boolean values', () => {
        const bool = true;

        it('identifies booleans through properties', () => {
            expect(bool.is.boolean).toBe(true);
            expect(bool.is.string).toBe(false);
            expect(bool.is.number).toBe(false);
        });

        it('works as a function', () => {
            expect(bool.is(Boolean)).toBe(true);
            expect(bool.is(Number)).toBe(false);
        });
    });

    describe('Object values', () => {
        const emptyObj = {};
        const populatedObj = { key: 'value' };

        it('identifies objects through properties', () => {
            expect(emptyObj.is.object).toBe(true);
            expect(emptyObj.is.emptyObject).toBe(true);
            expect(emptyObj.is.populatedObject).toBe(false);
            
            expect(populatedObj.is.object).toBe(true);
            expect(populatedObj.is.emptyObject).toBe(false);
            expect(populatedObj.is.populatedObject).toBe(true);
        });

        it('works with inheritance checks', () => {
            class Parent {}
            class Child extends Parent {}
            
            const parent = new Parent();
            const child = new Child();

            expect(Child.is.childType(Parent)).toBe(true);
            expect(Parent.is.parentType(Child)).toBe(true);
            expect(child.is.instanceOf(Parent)).toBe(true);
            expect(parent.is.instanceOf(Child)).toBe(false);
        });

        it('works as a function', () => {
            expect(emptyObj.is(Object)).toBe(true);
            expect(emptyObj.is(Array)).toBe(false);
        });
    });

    describe('Array values', () => {
        const emptyArr: any[] = [];
        const populatedArr = [1, 2, 3];

        it('identifies arrays through properties', () => {
            expect(emptyArr.is.array).toBe(true);
            expect(emptyArr.is.emptyArray).toBe(true);
            expect(emptyArr.is.populatedArray).toBe(false);
            
            expect(populatedArr.is.array).toBe(true);
            expect(populatedArr.is.emptyArray).toBe(false);
            expect(populatedArr.is.populatedArray).toBe(true);
        });

        it('works as a function', () => {
            expect(emptyArr.is(Array)).toBe(true);
            expect(emptyArr.is(Object)).toBe(true); // arrays are objects
        });
    });

    describe('Symbol values', () => {
        const sym = Symbol('test');

        it('identifies symbols through properties', () => {
            expect(sym.is.symbol).toBe(true);
            expect(sym.is.string).toBe(false);
            expect(sym.is.number).toBe(false);
        });

        it('works as a function', () => {
            expect(sym.is(Symbol)).toBe(true);
            expect(sym.is(String)).toBe(false);
        });
    });

    describe('BigInt values', () => {
        const bigInt = BigInt(42);

        it('identifies bigints through properties', () => {
            expect(bigInt.is.bigint).toBe(true);
            expect(bigInt.is.number).toBe(false);
            expect(bigInt.is.string).toBe(false);
        });

        it('works as a function', () => {
            expect(bigInt.is(BigInt)).toBe(true);
            expect(bigInt.is(Number)).toBe(false);
        });
    });

    describe('Function values', () => {
        const func = () => {};
        class TestClass {}

        it('identifies functions through properties', () => {
            expect(func.is.function).toBe(true);
            expect(func.is.string).toBe(false);
        });

        it('identifies constructor functions correctly', () => {
            expect(TestClass.is.type).toBe(true);
            expect(func.is.type).toBe(false);
        });

        it('works as a function', () => {
            expect(func.is(Function)).toBe(true);
            expect(func.is(String)).toBe(false);
        });
    });

    describe('null and undefined', () => {
        // Note: Can't test directly as .is won't exist on null/undefined
        const obj = {};
        it('identifies null and undefined through properties when available', () => {
            expect(obj.is.null).toBe(false);
            expect(obj.is.undefined).toBe(false);
        });
    });

    describe('specified/unspecified values', () => {
        const specified = "value";
        const zero = 0;
        const emptyString = "";
        const falseValue = false;

        it('correctly identifies specified values', () => {
            expect(specified.is.specified).toBe(true);
            expect(specified.is.unspecified).toBe(false);
            
            // Edge cases that should be specified
            expect(zero.is.specified).toBe(true);
            expect(emptyString.is.specified).toBe(true);
            expect(falseValue.is.specified).toBe(true);
        });
    });
});
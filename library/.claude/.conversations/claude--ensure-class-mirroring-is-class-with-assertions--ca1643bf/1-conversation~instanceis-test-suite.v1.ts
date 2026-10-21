import { instanceIs } from './instanceIs';

describe('InstanceIs', () => {
    // Test the callable behavior first
    describe('callable behavior', () => {
        it('should work as a function checking instanceof', () => {
            class TestClass {}
            const instance = new TestClass();
            
            // This tests both runtime behavior and type narrowing
            if (instanceIs(instance, TestClass)) {
                // TypeScript should know instance is TestClass here
                const test: TestClass = instance; // Should compile
            }
        });

        it('should handle primitive constructors', () => {
            const str = "test";
            if (instanceIs(str, String)) {
                // TypeScript should know str is String here
                const length: number = str.length; // Should compile
                // @ts-expect-error - str should not be number
                const fail: number = str;
            }
        });

        it('should work with multiple constructors', () => {
            const value: unknown = "test";
            if (instanceIs(value, [String, Number])) {
                // TypeScript should know value is string | number
                const str: string | number = value; // Should compile
                // @ts-expect-error - value should not be boolean
                const fail: boolean = value;
            }
        });
    });

    // Test individual type guards
    describe('type guards', () => {
        describe('string', () => {
            it('should narrow types correctly', () => {
                const value: unknown = "test";
                if (instanceIs.string(value)) {
                    // TypeScript should know value is string here
                    const length: number = value.length; // Should compile
                    // @ts-expect-error - value should not be number
                    const fail: number = value;
                }
            });
        });

        describe('number', () => {
            it('should narrow types correctly', () => {
                const value: unknown = 42;
                if (instanceIs.number(value)) {
                    // TypeScript should know value is number here
                    const result: number = value.toFixed(2).length; // Should compile
                    // @ts-expect-error - value should not be string
                    const fail: string = value;
                }
            });
        });

        describe('array', () => {
            it('should narrow types correctly with type parameter', () => {
                const value: unknown = [1, 2, 3];
                if (instanceIs.array<number>(value)) {
                    // TypeScript should know value is number[] here
                    const first: number = value[0]; // Should compile
                    // @ts-expect-error - value elements should not be string
                    const fail: string = value[0];
                }
            });
        });

        describe('object', () => {
            interface TestInterface {
                prop: string;
            }

            it('should narrow types correctly', () => {
                const value: unknown = { prop: "test" };
                if (instanceIs.object(value)) {
                    // TypeScript should know value is object here
                    const test: object = value; // Should compile
                    // @ts-expect-error - value should not be known to have prop
                    const fail: string = value.prop;
                }
            });
        });

        describe('specified', () => {
            it('should narrow nullable types correctly', () => {
                const value: string | null | undefined = "test";
                if (instanceIs.specified(value)) {
                    // TypeScript should know value is string here
                    const length: number = value.length; // Should compile
                    // @ts-expect-error - value should not be null
                    const fail: null = value;
                }
            });
        });

        describe('function', () => {
            it('should narrow types correctly', () => {
                const value: unknown = () => {};
                if (instanceIs.function(value)) {
                    // TypeScript should know value is Function here
                    const test: Function = value; // Should compile
                    // @ts-expect-error - value should not be string
                    const fail: string = value;
                }
            });
        });

        describe('equal', () => {
            it('should narrow types correctly', () => {
                const value: unknown = "test";
                const compare = "test";
                if (instanceIs.equal(value, compare)) {
                    // TypeScript should know value has the same type as compare
                    const test: string = value; // Should compile
                    // @ts-expect-error - value should not be number
                    const fail: number = value;
                }
            });
        });

        describe('emptyObject', () => {
            it('should narrow types correctly', () => {
                const value: unknown = {};
                if (instanceIs.emptyObject(value)) {
                    // TypeScript should know value is object here
                    const test: object = value; // Should compile
                    // @ts-expect-error - value should not be string
                    const fail: string = value;
                }
            });
        });

        describe('emptyArray', () => {
            it('should narrow types correctly', () => {
                const value: unknown = [];
                if (instanceIs.emptyArray<string>(value)) {
                    // TypeScript should know value is string[] here
                    const test: string[] = value; // Should compile
                    // @ts-expect-error - value should not be number[]
                    const fail: number[] = value;
                }
            });
        });

        describe('type', () => {
            it('should narrow types correctly', () => {
                class TestClass {}
                const value: unknown = TestClass;
                if (instanceIs.type(value)) {
                    // TypeScript should know value is Constructor here
                    const instance = new value(); // Should compile
                    // @ts-expect-error - value should not be string
                    const fail: string = value;
                }
            });
        });

        // Test error throwing behavior
        describe('error throwing', () => {
            it('should throw with custom message when orThrow is string', () => {
                expect(() => {
                    instanceIs.string(42, { orThrow: 'Custom error' });
                }).toThrow('Custom error');
            });

            it('should throw with default message when orThrow is true', () => {
                expect(() => {
                    instanceIs.string(42, { orThrow: true });
                }).toThrow('The provided value is not a string.');
            });

            it('should not throw when orThrow is not specified', () => {
                expect(() => {
                    instanceIs.string(42);
                }).not.toThrow();
            });
        });
    });
});
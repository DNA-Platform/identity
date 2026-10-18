import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ InstanceIs Test Suite v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}import { instanceIs } from './instanceIs';

describe('InstanceIs', () => {
    // Test the callable behavior first
    describe('callable behavior', () => {
        it('should work as a function checking instanceof', () => {
            class TestClass {}
            const instance = new TestClass();
            const nonInstance = {};
            
            // Runtime checks
            expect(instanceIs(instance, TestClass)).toBe(true);
            expect(instanceIs(nonInstance, TestClass)).toBe(false);
            
            // Type narrowing check
            if (instanceIs(instance, TestClass)) {
                const test: TestClass = instance; // Should compile
                // @ts-expect-error - instance should not be string
                const fail: string = instance;
            }
        });

        it('should handle primitive constructors', () => {
            const str = "test";
            const num = 42;
            
            // Runtime checks
            expect(instanceIs(str, String)).toBe(true);
            expect(instanceIs(num, String)).toBe(false);
            
            if (instanceIs(str, String)) {
                // Type narrowing check
                const length: number = str.length; // Should compile
                // @ts-expect-error - str should not be number
                const fail: number = str;
            }
        });

        it('should work with multiple constructors', () => {
            const strValue: unknown = "test";
            const numValue: unknown = 42;
            const boolValue: unknown = true;
            
            // Runtime checks
            expect(instanceIs(strValue, [String, Number])).toBe(true);
            expect(instanceIs(numValue, [String, Number])).toBe(true);
            expect(instanceIs(boolValue, [String, Number])).toBe(false);
            
            if (instanceIs(strValue, [String, Number])) {
                const test: string | number = strValue; // Should compile
                // @ts-expect-error - value should not be boolean
                const fail: boolean = strValue;
            }
        });
    });

    describe('type guards', () => {
        describe('string', () => {
            it('should correctly identify and narrow strings', () => {
                const validStr: unknown = "test";
                const invalidStr: unknown = 42;
                
                // Runtime checks
                expect(instanceIs.string(validStr)).toBe(true);
                expect(instanceIs.string(invalidStr)).toBe(false);
                
                if (instanceIs.string(validStr)) {
                    expect(validStr.length).toBe(4); // Runtime usage
                    const length: number = validStr.length; // Should compile
                    // @ts-expect-error - value should not be number
                    const fail: number = validStr;
                }
            });
        });

        describe('number', () => {
            it('should correctly identify and narrow numbers', () => {
                const validNum: unknown = 42;
                const invalidNum: unknown = "42";
                
                // Runtime checks
                expect(instanceIs.number(validNum)).toBe(true);
                expect(instanceIs.number(invalidNum)).toBe(false);
                
                if (instanceIs.number(validNum)) {
                    expect(validNum.toFixed(2)).toBe("42.00"); // Runtime usage
                    const result: number = validNum; // Should compile
                    // @ts-expect-error - value should not be string
                    const fail: string = validNum;
                }
            });
        });

        describe('array', () => {
            it('should correctly identify and narrow arrays with type parameters', () => {
                const numArray: unknown = [1, 2, 3];
                const notArray: unknown = { length: 3 };
                
                // Runtime checks
                expect(instanceIs.array(numArray)).toBe(true);
                expect(instanceIs.array(notArray)).toBe(false);
                
                if (instanceIs.array<number>(numArray)) {
                    expect(numArray[0]).toBe(1); // Runtime usage
                    const first: number = numArray[0]; // Should compile
                    // @ts-expect-error - elements should not be string
                    const fail: string = numArray[0];
                }
            });
        });

        describe('emptyArray', () => {
            it('should correctly identify and narrow empty arrays', () => {
                const empty: unknown = [];
                const nonEmpty: unknown = [1, 2, 3];
                
                // Runtime checks
                expect(instanceIs.emptyArray(empty)).toBe(true);
                expect(instanceIs.emptyArray(nonEmpty)).toBe(false);
                
                if (instanceIs.emptyArray<number>(empty)) {
                    expect(empty.length).toBe(0); // Runtime usage
                    const test: number[] = empty; // Should compile
                    // @ts-expect-error - should not be string[]
                    const fail: string[] = empty;
                }
            });
        });

        describe('populatedArray', () => {
            it('should correctly identify and narrow populated arrays', () => {
                const populated: unknown = [1, 2, 3];
                const empty: unknown = [];
                
                // Runtime checks
                expect(instanceIs.populatedArray(populated)).toBe(true);
                expect(instanceIs.populatedArray(empty)).toBe(false);
                
                if (instanceIs.populatedArray<number>(populated)) {
                    expect(populated.length).toBeGreaterThan(0); // Runtime usage
                    const test: number[] = populated; // Should compile
                    // @ts-expect-error - should not be string[]
                    const fail: string[] = populated;
                }
            });
        });

        describe('object', () => {
            it('should correctly identify and narrow objects', () => {
                const obj: unknown = { prop: "test" };
                const nonObj: unknown = null;
                
                // Runtime checks
                expect(instanceIs.object(obj)).toBe(true);
                expect(instanceIs.object(nonObj)).toBe(false);
                
                if (instanceIs.object(obj)) {
                    const test: object = obj; // Should compile
                    // Runtime usage
                    expect(Object.keys(obj).length).toBeGreaterThan(0);
                    // @ts-expect-error - should not know about prop
                    const fail: string = obj.prop;
                }
            });
        });

        describe('specified', () => {
            it('should correctly identify and narrow non-null/undefined values', () => {
                const definedValue: string | null | undefined = "test";
                const nullValue: string | null | undefined = null;
                
                // Runtime checks
                expect(instanceIs.specified(definedValue)).toBe(true);
                expect(instanceIs.specified(nullValue)).toBe(false);
                
                if (instanceIs.specified(definedValue)) {
                    expect(definedValue.length).toBe(4); // Runtime usage
                    const test: string = definedValue; // Should compile
                    // @ts-expect-error - should not be null
                    const fail: null = definedValue;
                }
            });
        });

        describe('error throwing', () => {
            it('should handle orThrow options correctly', () => {
                // With custom message
                expect(() => {
                    instanceIs.string(42, { orThrow: 'Custom error' });
                }).toThrow('Custom error');

                // With default message
                expect(() => {
                    instanceIs.string(42, { orThrow: true });
                }).toThrow('The provided value is not a string.');

                // Without orThrow
                expect(() => {
                    expect(instanceIs.string(42)).toBe(false);
                }).not.toThrow();
            });
        });
    });
});`}
        </CodeBox>
    </Chapter>
);

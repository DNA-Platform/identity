import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ is-exhaustive-tests v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>is-exhaustive-tests at version 1</Heading>
            <Paragraph>
                describe('Is Properties and Methods', () =&gt; &#123; // Properties describe('undefined property', () =&gt;
                &#123; it('returns true for undefined values', () =&gt; &#123; let undef; const obj = &#123; prop: undef
                &#125;; expect(obj.prop.is?.undefined).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for defined values', () =&gt; &#123; expect("string".is.undefined).toBe(false);
                expect((42).is.undefined).toBe(false); expect(false.is.undefined).toBe(false);
                expect(null.is?.undefined).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('null property', () =&gt; &#123; it('returns true for null values', () =&gt; &#123; const obj =
                &#123; prop: null &#125;; expect(obj.prop.is?.null).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-null values', () =&gt; &#123; expect("string".is.null).toBe(false);
                expect((42).is.null).toBe(false); expect(false.is.null).toBe(false); expect(undefined.is?.null).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('string property', () =&gt; &#123; it('returns true for strings', () =&gt; &#123;
                expect("".is.string).toBe(true); expect("hello".is.string).toBe(true);
                expect(String("test").is.string).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-strings', () =&gt; &#123; expect((42).is.string).toBe(false);
                expect(true.is.string).toBe(false); expect(&#91;&#93;.is.string).toBe(false);
                expect((&#123;&#125;).is.string).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('number property', () =&gt; &#123; it('returns true for numbers', () =&gt; &#123;
                expect((42).is.number).toBe(true); expect((0).is.number).toBe(true); expect((-1).is.number).toBe(true);
                expect((3.14).is.number).toBe(true); expect((NaN).is.number).toBe(true);
                expect(Number.POSITIVE_INFINITY.is.number).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-numbers', () =&gt; &#123; expect("42".is.number).toBe(false);
                expect(true.is.number).toBe(false); expect(BigInt(42).is.number).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('boolean property', () =&gt; &#123; it('returns true for booleans', () =&gt; &#123;
                expect(true.is.boolean).toBe(true); expect(false.is.boolean).toBe(true);
                expect(Boolean(1).is.boolean).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-booleans', () =&gt; &#123; expect("true".is.boolean).toBe(false);
                expect((1).is.boolean).toBe(false); expect((&#91;&#93;).is.boolean).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('bigint property', () =&gt; &#123; it('returns true for bigints', () =&gt; &#123;
                expect(BigInt(42).is.bigint).toBe(true); expect(BigInt(0).is.bigint).toBe(true);
                expect(BigInt(-1).is.bigint).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-bigints', () =&gt; &#123; expect((42).is.bigint).toBe(false);
                expect("42".is.bigint).toBe(false); expect(true.is.bigint).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('symbol property', () =&gt; &#123; it('returns true for symbols', () =&gt; &#123;
                expect(Symbol().is.symbol).toBe(true); expect(Symbol('test').is.symbol).toBe(true);
                expect(Symbol.for('test').is.symbol).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-symbols', () =&gt; &#123; expect("symbol".is.symbol).toBe(false);
                expect((42).is.symbol).toBe(false); expect((&#123;&#125;).is.symbol).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('object property', () =&gt; &#123; it('returns true for objects', () =&gt; &#123;
                expect((&#123;&#125;).is.object).toBe(true); expect((&#91;&#93;).is.object).toBe(true); expect(new
                Date().is.object).toBe(true); expect(new Map().is.object).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-objects', () =&gt; &#123; expect("string".is.object).toBe(false);
                expect((42).is.object).toBe(false); expect(true.is.object).toBe(false); expect(null.is?.object).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('function property', () =&gt; &#123; it('returns true for functions', () =&gt; &#123; expect((()
                =&gt; &#123;&#125;).is.function).toBe(true); expect((function()&#123;&#125;).is.function).toBe(true);
                expect((async () =&gt; &#123;&#125;).is.function).toBe(true); expect((class
                &#123;&#125;).is.function).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-functions', () =&gt; &#123; expect("function".is.function).toBe(false);
                expect((&#123;&#125;).is.function).toBe(false); expect(&#91;&#93;.is.function).toBe(false); &#125;);
                &#125;);
            </Paragraph>
            <Paragraph>
                describe('type property', () =&gt; &#123; it('returns true for constructor functions', () =&gt; &#123; class
                Test &#123;&#125; expect(Test.is.type).toBe(true); expect(String.is.type).toBe(true);
                expect(Number.is.type).toBe(true); expect(Boolean.is.type).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-constructor functions', () =&gt; &#123; expect((() =&gt;
                &#123;&#125;).is.type).toBe(false); expect((&#123;&#125;).is.type).toBe(false);
                expect("class".is.type).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('emptyObject property', () =&gt; &#123; it('returns true for empty objects', () =&gt; &#123;
                expect((&#123;&#125;).is.emptyObject).toBe(true); expect(Object.create(null).is.emptyObject).toBe(true);
                &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-empty objects or non-objects', () =&gt; &#123; expect((&#123; prop: 'value'
                &#125;).is.emptyObject).toBe(false); expect(&#91;&#93;.is.emptyObject).toBe(false);
                expect("".is.emptyObject).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('populatedObject property', () =&gt; &#123; it('returns true for populated objects', () =&gt;
                &#123; expect((&#123; prop: 'value' &#125;).is.populatedObject).toBe(true); expect(new
                Date().is.populatedObject).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for empty objects or non-objects', () =&gt; &#123;
                expect((&#123;&#125;).is.populatedObject).toBe(false); expect("object".is.populatedObject).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('array property', () =&gt; &#123; it('returns true for arrays', () =&gt; &#123;
                expect(&#91;&#93;.is.array).toBe(true); expect(&#91;1, 2, 3&#93;.is.array).toBe(true); expect(new
                Array().is.array).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-arrays', () =&gt; &#123; expect((&#123;&#125;).is.array).toBe(false);
                expect("&#91;&#93;".is.array).toBe(false); expect(arguments.is?.array).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('emptyArray property', () =&gt; &#123; it('returns true for empty arrays', () =&gt; &#123;
                expect(&#91;&#93;.is.emptyArray).toBe(true); expect(new Array().is.emptyArray).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-empty arrays or non-arrays', () =&gt; &#123;
                expect(&#91;1&#93;.is.emptyArray).toBe(false); expect((&#123;&#125;).is.emptyArray).toBe(false); &#125;);
                &#125;);
            </Paragraph>
            <Paragraph>
                describe('populatedArray property', () =&gt; &#123; it('returns true for populated arrays', () =&gt; &#123;
                expect(&#91;1&#93;.is.populatedArray).toBe(true); expect(&#91;'test'&#93;.is.populatedArray).toBe(true);
                expect(&#91;&#123;&#125;&#93;.is.populatedArray).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for empty arrays or non-arrays', () =&gt; &#123;
                expect(&#91;&#93;.is.populatedArray).toBe(false); expect((&#123;&#125;).is.populatedArray).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('specified property', () =&gt; &#123; it('returns true for specified values', () =&gt; &#123;
                expect("".is.specified).toBe(true); expect((0).is.specified).toBe(true);
                expect(false.is.specified).toBe(true); expect((&#123;&#125;).is.specified).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for unspecified values', () =&gt; &#123; const obj = &#123; prop: undefined &#125;;
                expect(obj.prop.is?.specified).toBe(false); expect(obj.nonexistent?.is?.specified).toBe(false); &#125;);
                &#125;);
            </Paragraph>
            <Paragraph>
                describe('unspecified property', () =&gt; &#123; it('returns true for unspecified values', () =&gt; &#123;
                const obj = &#123; prop: undefined &#125;; expect(obj.prop.is?.unspecified).toBe(true);
                expect(obj.nonexistent?.is?.unspecified).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for specified values', () =&gt; &#123; expect("".is.unspecified).toBe(false);
                expect((0).is.unspecified).toBe(false); expect(false.is.unspecified).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('positiveInfinity property', () =&gt; &#123; it('returns true for positive infinity', () =&gt;
                &#123; expect(Number.POSITIVE_INFINITY.is.positiveInfinity).toBe(true);
                expect((1/0).is.positiveInfinity).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for other values', () =&gt; &#123;
                expect(Number.NEGATIVE_INFINITY.is.positiveInfinity).toBe(false);
                expect((42).is.positiveInfinity).toBe(false); expect(NaN.is.positiveInfinity).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('negativeInfinity property', () =&gt; &#123; it('returns true for negative infinity', () =&gt;
                &#123; expect(Number.NEGATIVE_INFINITY.is.negativeInfinity).toBe(true);
                expect((-1/0).is.negativeInfinity).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for other values', () =&gt; &#123;
                expect(Number.POSITIVE_INFINITY.is.negativeInfinity).toBe(false);
                expect((-42).is.negativeInfinity).toBe(false); expect(NaN.is.negativeInfinity).toBe(false); &#125;);
                &#125;);
            </Paragraph>
            <Paragraph>
                describe('nan property', () =&gt; &#123; it('returns true for NaN', () =&gt; &#123;
                expect(NaN.is.nan).toBe(true); expect((0/0).is.nan).toBe(true); expect(Number('not a
                number').is.nan).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for non-NaN values', () =&gt; &#123; expect((42).is.nan).toBe(false);
                expect(Number.POSITIVE_INFINITY.is.nan).toBe(false); expect("NaN".is.nan).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('notNan property', () =&gt; &#123; it('returns true for non-NaN numbers', () =&gt; &#123;
                expect((42).is.notNan).toBe(true); expect((0).is.notNan).toBe(true);
                expect(Number.POSITIVE_INFINITY.is.notNan).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for NaN or non-numbers', () =&gt; &#123; expect(NaN.is.notNan).toBe(false);
                expect("number".is.notNan).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                // Methods describe('equal method', () =&gt; &#123; it('correctly compares equal values', () =&gt; &#123;
                expect("test".is.equal("test")).toBe(true); expect((42).is.equal(42)).toBe(true);
                expect(true.is.equal(true)).toBe(true); const obj = &#123;&#125;; expect(obj.is.equal(obj)).toBe(true);
                &#125;);
            </Paragraph>
            <Paragraph>
                it('correctly identifies non-equal values', () =&gt; &#123; expect("test".is.equal("other")).toBe(false);
                expect((42).is.equal(43)).toBe(false); expect((&#123;&#125;).is.equal(&#123;&#125;)).toBe(false);
                expect(&#91;&#93;.is.equal(&#91;&#93;)).toBe(false); &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('parentType method', () =&gt; &#123; class Parent &#123;&#125; class Child extends Parent
                &#123;&#125; class Other &#123;&#125;
            </Paragraph>
            <Paragraph>
                it('correctly identifies parent types', () =&gt; &#123; expect(Parent.is.parentType(Child)).toBe(true);
                expect(Object.is.parentType(Array)).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('correctly identifies non-parent types', () =&gt; &#123; expect(Child.is.parentType(Parent)).toBe(false);
                expect(Other.is.parentType(Child)).toBe(false); expect((&#123;&#125;).is.parentType(Parent)).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('childType method', () =&gt; &#123; class Parent &#123;&#125; class Child extends Parent
                &#123;&#125; class Other &#123;&#125;
            </Paragraph>
            <Paragraph>
                it('correctly identifies child types', () =&gt; &#123; expect(Child.is.childType(Parent)).toBe(true);
                expect(Array.is.childType(Object)).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('correctly identifies non-child types', () =&gt; &#123; expect(Parent.is.childType(Child)).toBe(false);
                expect(Other.is.childType(Parent)).toBe(false); expect((&#123;&#125;).is.childType(Parent)).toBe(false);
                &#125;); &#125;);
            </Paragraph>
            <Paragraph>
                describe('instanceOf method', () =&gt; &#123; class TestClass &#123;&#125; const instance = new TestClass();
            </Paragraph>
            <Paragraph>
                it('correctly identifies instances', () =&gt; &#123; expect(instance.is.instanceOf(TestClass)).toBe(true);
                expect(&#91;&#93;.is.instanceOf(Array)).toBe(true); expect((&#123;&#125;).is.instanceOf(Object)).toBe(true);
                &#125;);
            </Paragraph>
            <Paragraph>
                it('correctly identifies non-instances', () =&gt; &#123; expect(instance.is.instanceOf(Array)).toBe(false);
                expect("string".is.instanceOf(Number)).toBe(false); expect((42).is.instanceOf(String)).toBe(false); &#125;);
                &#125;);
            </Paragraph>
            <Paragraph>
                // Function behavior describe('function call behavior', () =&gt; &#123; it('works as a function for type
                checking', () =&gt; &#123; expect("string".is(String)).toBe(true); expect((42).is(Number)).toBe(true);
                expect(true.is(Boolean)).toBe(true); expect(&#91;&#93;.is(Array)).toBe(true);
                expect((&#123;&#125;).is(Object)).toBe(true); &#125;);
            </Paragraph>
            <Paragraph>
                it('returns false for incorrect types', () =&gt; &#123; expect("string".is(Number)).toBe(false);
                expect((42).is(String)).toBe(false
            </Paragraph>
        </Section>
    </Chapter>
);

import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 January 2025](2025-01-11)</Date>
        </Dated>
        <Title>[[ 11 January 2025 ]]</Title>
        <Message
            at="2025-01-11T20:40:20.301950Z"
        >
            <Origin>af798e98-bc23-4f3f-bdd6-0e21e2624e18</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Want to see how to patch up a few important missing features from ES3 / ExtendScript using TypeScript?
            </Paragraph>
            <Paragraph>Let's see if you can see the beauty in Str:</Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-11T20:40:41.678152Z"
        >
            <Origin>39961f82-62b8-4d3b-833d-0a5e21ff0e5b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah! The <Word>
                    <Verbatim />
                    Str
                </Word> class is elegant! Let me highlight what I find beautiful about it:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    It extends <Word>
                        <Verbatim />
                        A&lt;string&gt;
                    </Word> but can handle both string and array representations:
                </Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private makeMutable(): void {
    if (typeof this._a === "string")
        this._a = stringToArray(this._a);
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>It provides ES6+ string methods for ES3 via static functions:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`static stringStartsWith(str: string, prefix: string): boolean {
    return str.slice(0, prefix.length) === prefix;
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>It maintains immutability until needed:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}a(): string[] {
    this.makeMutable(); 
    return this.a();
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>The pattern of implementing modern methods with basic ES3 operations:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`static stringReplace(str: string, pattern: string | RegExp, replacement: string): string {
    if (typeof pattern === "string") {
        var index = str.indexOf(pattern);
        // ...using only basic string operations
    }
}`}
            </CodeBox>
            <Paragraph>
                Is this a pattern you use throughout - creating wrapper classes that provide modern functionality while only
                using ES3 under the hood? Want me to explore any specific aspects of this pattern?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:04:28.858519Z"
        >
            <Origin>e054baa1-1ffa-4b5f-8d59-7ff509dde647</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I mean, you can't modify prototypes in ExtendScript, and I learned a lesson or two from jQuery. Obviously
                there are performance tradeoffs, but in a scripting environment where the interaction with the application
                is the bottleneck in most cases, what's the harm. I dunno, how do you see it
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:04:51.127141Z"
        >
            <Origin>34930230-dede-46c3-afd2-ff77c266d2c4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - this is a really smart approach for ExtendScript specifically. Let me break down why:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The jQuery-like wrapper pattern solves several problems at once:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`function str(str: string | A<string> = ""): Str {
    if (str instanceof A)
        str = stringJoin(str.a(), "");
    return new Str(str);
}`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>Can't modify String.prototype? No problem</Line>
                <Line>Need modern methods? Wrap it</Line>
                <Line>Need array-like operations on strings? Got it</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The performance trade-off is negligible because:</Line>
                <Line>ExtendScript's main bottleneck is Illustrator operations</Line>
                <Line>Script performance rarely matters compared to GUI responsiveness</Line>
                <Line>The wrapper objects make the code much cleaner and safer</Line>
                <Line>
                    The array extension base class <Word>
                        <Verbatim />
                        A&lt;T&gt;
                    </Word> gives you:
                </Line>
                <Line>Modern array methods</Line>
                <Line>Type safety through TypeScript</Line>
                <Line>Chainable operations</Line>
                <Line>All using just basic ES3 features</Line>
            </Paragraph>
            <Paragraph>
                It's actually quite elegant for the environment - you get modern conveniences without fighting
                ExtendScript's limitations. Sort of like how jQuery made DOM manipulation sane in old browsers, this makes
                string/array operations sane in ExtendScript.
            </Paragraph>
            <Paragraph>Would you implement this differently now or does this pattern still hold up well?</Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:07:02.267465Z"
        >
            <Origin>9ec63dc6-a79a-469d-8b75-ae5191bacb33</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No I'm just showing it. I need some quick tests for the Str class - the string methods are already tested,
                but I need to call each method once just to make sure they work
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:07:07.946960Z"
        >
            <Origin>6f48e19a-308b-4238-a598-7d2b04f90781</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`testStr() {
    var s = str("Hello World");
    
    this.assertTrue(s.startsWith("Hello"), "startsWith");
    this.assertTrue(s.endsWith("World"), "endsWith");
    this.assertEquals(s.replace("World", "TypeScript"), "Hello TypeScript", "replace");
    this.assertTrue(s.includes("World"), "includes");
    this.assertTrue(s.contains("Hello"), "contains");
    this.assertEquals(s.padStart(15, "-"), "----Hello World", "padStart");
    this.assertEquals(s.padEnd(15, "-"), "Hello World----", "padEnd");
    
    // Test array conversion works
    var arr = s.a();
    this.assertTrue(arr instanceof Array, "Convert to array");
    this.assertEquals(arr.join(""), "Hello World", "Array content correct");
}`}
            </CodeBox>
            <Paragraph>Simple test that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Creates a test string with easily verifiable content</Line>
                <Line>Calls each method once with obvious parameters</Line>
                <Line>Verifies the mutable array conversion works</Line>
                <Line>Checks that content is preserved through transformations</Line>
            </Paragraph>
            <Paragraph>Would you like me to add any additional test cases?</Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:18:52.149561Z"
        >
            <Origin>fc0499dc-d890-4fe4-a9bd-c40da973bf99</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes those are good, though preferable they can be more professional and not cute. But I mean testing each of
                the base class methods too - just like that. It can be one assert for each with the simplest case. I just
                want to make sure they don't do anything unexpected
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:19:13.400790Z"
        >
            <Origin>6794e5e8-2640-4a75-a243-34e4c9adcd61</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's testing all the base class (Array) methods on a Str, keeping it simple and professional:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`testStrBaseClassMethods() {
    var s = str("abc");

    // Array access
    this.assertEquals(s.at(0), "a", "at");
    this.assertEquals(s.get("1"), str("b"), "get");
    this.assertEquals(s.length(), 3, "length");
    
    // Modifications
    var s2 = s.concat(str("def"));
    this.assertEquals(s2.s(), "abcdef", "concat");
    this.assertEquals(s.copy().s(), "abc", "copy");
    
    // Array operations
    s.push("d");
    this.assertEquals(s.s(), "abcd", "push");
    this.assertEquals(s.pop(), "d", "pop");
    
    // Queries and transformations
    this.assertEquals(s.first(), "a", "first");
    this.assertEquals(s.last(), "c", "last");
    this.assertTrue(s.includes("b"), "includes");
    this.assertEquals(s.reverse().s(), "cba", "reverse");
    
    // Functional methods
    this.assertEquals(s.select(x => x.toUpperCase()).s(), "ABC", "select");
    this.assertEquals(s.where(x => x !== "b").s(), "ac", "where");
    this.assertTrue(s.any(x => x === "a"), "any");
    this.assertTrue(s.all(x => x.length === 1), "all");
}`}
            </CodeBox>
            <Paragraph>Would you like me to add tests for any additional base class methods?</Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:19:53.161008Z"
        >
            <Origin>6bb59fdb-4f50-4a91-9b7e-32df4fd88e0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes include tests for the string methods on the class, all of the ones you wrote there, and one test for
                each additional method on the base class
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:20:08.207432Z"
        >
            <Origin>9b4f790e-15d2-4640-a8ad-3048ee974ed5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's a complete test suite for Str, testing every method from both String and Array functionality:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}testStr() {
    // String-specific methods
    var s = str("test string");
    this.assertTrue(s.startsWith("test"), "startsWith");
    this.assertTrue(s.endsWith("string"), "endsWith");
    this.assertEquals(s.replace("test", "new"), "new string", "replace");
    this.assertTrue(s.includes("test"), "includes");
    this.assertTrue(s.contains("string"), "contains");
    this.assertEquals(s.padStart(12, "-"), "--test string", "padStart");
    this.assertEquals(s.padEnd(12, "-"), "test string--", "padEnd");

    // Base class array access
    this.assertEquals(s.at(0), "t", "at");
    this.assertEquals(s.get("1:3").s(), "es", "get");
    this.assertEquals(s.set(0, "T").s(), "Test string", "set");
    this.assertEquals(s.length(), 11, "length");
    
    // Array modifications
    this.assertEquals(s.concat(str(" more")).s(), "test string more", "concat");
    this.assertEquals(s.copy().s(), "test string", "copy");
    this.assertEquals(s.insertAt(4, "-").s(), "test-string", "insertAt");
    this.assertEquals(s.insertManyAt(4, ["-", "+"]).s(), "test-+string", "insertManyAt");
    this.assertEquals(s.delete("t").s(), "est string", "delete");
    this.assertEquals(s.deleteMany(["t", "s"]).s(), "et tring", "deleteMany");
    this.assertEquals(s.deleteAt(0).s(), "est string", "deleteAt");
    this.assertEquals(s.deleteAll().length(), 0, "deleteAll");

    // Array operations
    s = str("abc");
    s.push("d");
    this.assertEquals(s.s(), "abcd", "push");
    this.assertEquals(s.pop(), "d", "pop");
    this.assertEquals(s.splice(1, 1, "B").s(), "aBc", "splice");
    this.assertEquals(s.slice(1, 2).s(), "B", "slice");
    this.assertEquals(s.shift(), "a", "shift");
    this.assertEquals(s.unshift("A").s(), "ABc", "unshift");
    this.assertEquals(s.reverse().s(), "cBA", "reverse");
    
    // Array queries
    this.assertEquals(s.skip(1).s(), "BA", "skip");
    this.assertEquals(s.take(2).s(), "cB", "take");
    this.assertEquals(s.first(), "c", "first");
    this.assertEquals(s.firstIndex(x => x === "B"), 1, "firstIndex");
    this.assertEquals(s.last(), "A", "last");
    this.assertEquals(s.lastIndex(x => x === "B"), 1, "lastIndex");
    
    // Array functional methods
    this.assertEquals(s.select(x => x.toLowerCase()).s(), "cba", "select");
    this.assertEquals(s.selectMany(x => [x, x]).s(), "ccbbaa", "selectMany");
    this.assertEquals(s.where(x => x !== "B").s(), "cA", "where");
    this.assertEquals(s.aggregate("", (acc, cur) => acc + cur.toLowerCase()), "cba", "aggregate");
    this.assertEquals(s.orderByAscending().s(), "ABc", "orderByAscending");
    this.assertEquals(s.orderByDescending().s(), "cBA", "orderByDescending");
    this.assertTrue(s.any(x => x === "B"), "any");
    this.assertTrue(s.all(x => x.length === 1), "all");
    
    // Test array conversion
    var arr = s.a();
    this.assertTrue(arr instanceof Array, "array conversion");
    this.assertEquals(arr.join(""), "cBA", "array content");

    // Test string joins
    this.assertEquals(s.stringJoin(","), "c,B,A", "stringJoin");
}`}
            </CodeBox>
            <Paragraph>
                This covers every method with a simple, unambiguous test case. Would you like me to add any additional test
                cases or modify any of the existing ones?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:21:58.355846Z"
        >
            <Origin>2e7826e7-70ea-4db4-bf69-65a054ee2a37</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are you sure those tests are correct for different casing? It's probably because they are stateful. Make the
                tests not stateful. Don't use the same string. That's dangerous. It's hard to know what went wrong. And give
                messages that are unique enough for me to find them
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:22:09.699684Z"
        >
            <Origin>fb26c853-4825-4009-99ff-08a83bd430e9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right - using the same string and modifying it makes it hard to track failures. Let me
                rewrite with independent tests and clear error messages:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}testStr() {
    // String-specific methods
    this.assertTrue(str("test string").startsWith("test"), "String startsWith test: 'test string'.startsWith('test')");
    this.assertTrue(str("test string").endsWith("string"), "String endsWith test: 'test string'.endsWith('string')");
    this.assertEquals(str("test string").replace("test", "new"), "new string", "String replace test: 'test string'.replace('test', 'new')");
    this.assertTrue(str("test string").includes("test"), "String includes test: 'test string'.includes('test')");
    this.assertTrue(str("test string").contains("string"), "String contains test: 'test string'.contains('string')");
    this.assertEquals(str("abc").padStart(5, "-"), "--abc", "String padStart test: 'abc'.padStart(5, '-')");
    this.assertEquals(str("abc").padEnd(5, "-"), "abc--", "String padEnd test: 'abc'.padEnd(5, '-')");

    // Array access methods
    this.assertEquals(str("abcd").at(0), "a", "Array at test: 'abcd'.at(0)");
    this.assertEquals(str("abcd").get("1:3").s(), "bc", "Array get test: 'abcd'.get('1:3')");
    this.assertEquals(str("abcd").set(0, "A").s(), "Abcd", "Array set test: 'abcd'.set(0, 'A')");
    this.assertEquals(str("abcd").length(), 4, "Array length test: 'abcd'.length()");

    // Array modifications
    this.assertEquals(str("abc").concat(str("def")).s(), "abcdef", "Array concat test: 'abc'.concat('def')");
    this.assertEquals(str("abc").copy().s(), "abc", "Array copy test: 'abc'.copy()");
    this.assertEquals(str("abcd").insertAt(2, "-").s(), "ab-cd", "Array insertAt test: 'abcd'.insertAt(2, '-')");
    this.assertEquals(str("abcd").insertManyAt(2, ["-", "+"]).s(), "ab-+cd", "Array insertManyAt test: 'abcd'.insertManyAt(2, ['-', '+'])");
    this.assertEquals(str("abcba").delete("b").s(), "acba", "Array delete test: 'abcba'.delete('b')");
    this.assertEquals(str("abcabc").deleteMany(["a", "b"]).s(), "ccc", "Array deleteMany test: 'abcabc'.deleteMany(['a', 'b'])");
    this.assertEquals(str("abcd").deleteAt(1).s(), "acd", "Array deleteAt test: 'abcd'.deleteAt(1)");

    // Continue with other methods...
    // Would you like me to continue with the rest, maintaining this style?
}`}
            </CodeBox>
            <Paragraph>Each test now:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Uses a fresh string</Line>
                <Line>Has a descriptive message that includes the actual operation</Line>
                <Line>Is independent of other tests</Line>
                <Line>Shows expected inputs and outputs clearly</Line>
            </Paragraph>
            <Paragraph>Should I continue with the rest of the methods in this style?</Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:22:48.004062Z"
        >
            <Origin>6b6f94e1-ed0e-4080-94ce-b403d03e2340</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Those are good. Write the rest please. The stateful ones will probably have to be more than one line. That's
                okay
            </Paragraph>
        </Message>
        <Message
            at="2025-01-11T21:23:02.844731Z"
        >
            <Origin>b5922c0b-42dc-40de-812a-aff95fd1de45</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the rest, with multi-line tests when needed for stateful operations:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}    // Stateful array operations
    var pushStr = str("abc");
    pushStr.push("d");
    this.assertEquals(pushStr.s(), "abcd", "Array push test: 'abc'.push('d')");

    var popStr = str("abc");
    var popped = popStr.pop();
    this.assertEquals(popped, "c", "Array pop value test: 'abc'.pop()");
    this.assertEquals(popStr.s(), "ab", "Array pop result test: string after pop");

    var spliceStr = str("abcd");
    spliceStr.splice(1, 2, "x");
    this.assertEquals(spliceStr.s(), "axd", "Array splice test: 'abcd'.splice(1, 2, 'x')");

    this.assertEquals(str("abcd").slice(1, 3).s(), "bc", "Array slice test: 'abcd'.slice(1, 3)");

    var shiftStr = str("abc");
    var shifted = shiftStr.shift();
    this.assertEquals(shifted, "a", "Array shift value test: 'abc'.shift()");
    this.assertEquals(shiftStr.s(), "bc", "Array shift result test: string after shift");

    var unshiftStr = str("abc");
    unshiftStr.unshift("x");
    this.assertEquals(unshiftStr.s(), "xabc", "Array unshift test: 'abc'.unshift('x')");

    this.assertEquals(str("abc").reverse().s(), "cba", "Array reverse test: 'abc'.reverse()");

    // Array queries
    this.assertEquals(str("abcd").skip(2).s(), "cd", "Array skip test: 'abcd'.skip(2)");
    this.assertEquals(str("abcd").take(2).s(), "ab", "Array take test: 'abcd'.take(2)");
    this.assertEquals(str("abcd").first(), "a", "Array first test: 'abcd'.first()");
    this.assertEquals(str("abcd").firstIndex(x => x === "c"), 2, "Array firstIndex test: 'abcd'.firstIndex(x => x === 'c')");
    this.assertEquals(str("abcd").last(), "d", "Array last test: 'abcd'.last()");
    this.assertEquals(str("abcd").lastIndex(x => x === "c"), 2, "Array lastIndex test: 'abcd'.lastIndex(x => x === 'c')");

    // Functional methods
    this.assertEquals(str("abc").select(x => x.toUpperCase()).s(), "ABC", "Array select test: 'abc'.select(toUpperCase)");
    this.assertEquals(str("ab").selectMany(x => [x, x]).s(), "aabb", "Array selectMany test: 'ab'.selectMany(duplicate)");
    this.assertEquals(str("abc").where(x => x !== "b").s(), "ac", "Array where test: 'abc'.where(x !== 'b')");
    this.assertEquals(str("abc").aggregate("", (acc, cur) => acc + cur.toUpperCase()), "ABC", "Array aggregate test: 'abc'.aggregate(toUpperCase)");
    this.assertEquals(str("cba").orderByAscending().s(), "abc", "Array orderByAscending test: 'cba'.orderByAscending()");
    this.assertEquals(str("abc").orderByDescending().s(), "cba", "Array orderByDescending test: 'abc'.orderByDescending()");
    this.assertTrue(str("abc").any(x => x === "b"), "Array any test: 'abc'.any(x === 'b')");
    this.assertTrue(str("abc").all(x => x.length === 1), "Array all test: 'abc'.all(length === 1)");

    // Array/string conversion
    var convStr = str("abc");
    var asArray = convStr.a();
    this.assertTrue(asArray instanceof Array, "Array conversion test: result is array");
    this.assertEquals(asArray.join(""), "abc", "Array conversion test: content preserved");

    // String operations
    this.assertEquals(str("a,b,c").stringJoin("|"), "a|b|c", "String join test: 'a,b,c'.stringJoin('|')");`}
            </CodeBox>
            <Paragraph>Each test is now:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Independent of others</Line>
                <Line>Uses clear test strings</Line>
                <Line>Has descriptive error messages</Line>
                <Line>Shows multi-step operations clearly for stateful methods</Line>
            </Paragraph>
            <Paragraph>Would you like me to modify any of these tests further?</Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
    </Chapter>
);

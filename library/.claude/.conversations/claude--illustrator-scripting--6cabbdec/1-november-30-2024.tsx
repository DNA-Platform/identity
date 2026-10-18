import { Append, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 November 2024](2024-11-30)</Date>
        </Dated>
        <Title>[[ 30 November 2024 ]]</Title>
        <Message
            at="2024-11-30T21:24:00.155922Z"
        >
            <Origin>128bff91-4b68-47d7-9a2f-947d1a2d3ddc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hey, I am working on an illustrator scripting project. I have set up a way to compile TypeScript to
                JavaScript to ExtendScript. I target ES5 but I can only use some functionality. I'd like to catch you up on
                existing code, have you do an analysis of it so you understand. Then we will write new tests
            </Paragraph>
        </Message>
        <Message
            at="2024-11-30T21:24:00.155922Z"
        >
            <Origin>40ebdaff-8843-4b32-9d11-905e89ef0b44</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'd be happy to help analyze your Illustrator scripting project and assist with writing tests. It's good
                that you're using TypeScript compiled to ES5-compatible ExtendScript. The ExtendScript environment can be
                quite restrictive compared to modern JavaScript.
            </Paragraph>
            <Paragraph>
                Please share the existing code you'd like me to review. When you do, it would be helpful to know:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>What functionality have you confirmed works in the ExtendScript environment?</Line>
                <Line>Have you encountered any specific TypeScript/ES5 features that don't work?</Line>
            </Paragraph>
        </Message>
        <Message
            at="2024-11-30T21:25:51.222958Z"
        >
            <Origin>e9d23968-25f7-4b79-93f5-86d5d3c31d29</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here's a good first block of code. Please read through, give a breakdown of each non-test method, a
                breakdown of how I'm doing testing, and then an overview of how to use the whole library. It is important
                that we use this library
            </Paragraph>
            <Attachment
                identifier="utils"
                type=".txt"
            >
                Attached “utils.ts”
            </Attachment>
            <Attachment>Uploaded “utils.ts”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-30T21:25:51.222958Z"
        >
            <Origin>f5a5d5ad-3b8f-4bde-986f-daac1e7822a1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll break this down into key components:</Paragraph>
            <Heading>Core Utility Functions</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        stringStartsWith/EndsWith
                    </Word>: Basic string comparison utilities, likely needed since ExtendScript may not support modern JS
                    string methods
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        clone
                    </Word>: A deep cloning function specifically designed for ExtendScript environment, handling:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Primitive types</Line>
                    <Line>Arrays</Line>
                    <Line>Objects</Line>
                    <Line>Circular references</Line>
                    <Line>Special handling for parent properties (common in Illustrator DOM)</Line>
                </Paragraph>
                <Line>Path handling utilities:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            normalizePath
                        </Word>: Standardizes paths to Windows format
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            combinePaths
                        </Word>: Safely joins path segments
                    </Line>
                </Paragraph>
                <Line>Index handling:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateNegativeIndex
                        </Word>: Converts negative indices (-1 etc.) to positive ones
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateNegativeInsertIndex
                        </Word>: Similar but for insertion operations
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateSelector
                        </Word>: Complex selector parsing for array operations
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateRangeSelector
                        </Word>: Handles Python-style range selections ("1:3", "-2:", etc.)
                    </Line>
                </Paragraph>
            </Paragraph>
            <Heading>Array Wrapper Class (A&lt;T&gt;)</Heading>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    A&lt;T&gt;
                </Word> class is a TypeScript generic wrapper around arrays with enhanced functionality:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Chainable operations (methods return this)</Line>
                <Line>Python-style negative indexing</Line>
                <Line>Range-based selection</Line>
                <Line>Functional programming methods (select, where, etc.)</Line>
                <Line>Standard array operations (push, pop, etc.)</Line>
            </Paragraph>
            <Heading>Testing Framework</Heading>
            <Paragraph>You've implemented a simple but effective testing framework:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Base <Word>
                        <Verbatim />
                        TestClass
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Automatically runs methods prefixed with "test"</Line>
                    <Line>Exception decoration for better error messages</Line>
                    <Line>Basic assertion support</Line>
                </Paragraph>
                <Line>Test organization:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            UtilTests
                        </Word>: Tests for utility functions
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            ArrayTests
                        </Word>: Tests for the array wrapper class
                    </Line>
                    <Line>Clear, specific test cases with descriptive messages</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Using the Library</Heading>
            <Paragraph>Here's how to use the main components:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}// Create a wrapped array
const arr = f([1, 2, 3, 4, 5]);

// Access elements (supports negative indices)
arr.at(-1);  // gets last element
arr.at(0);   // gets first element

// Range selection
arr.get("1:3");  // gets elements at indices 1, 2, 3
arr.get("-2:"); // gets last two elements

// Modification
arr.insertAt(1, 10);     // insert at position
arr.insertManyAt(1, [10, 20]); // insert multiple
arr.delete(3);           // delete value
arr.deleteAt(1);         // delete at position

// Functional operations
arr.select(x => x * 2);  // map operation
arr.where(x => x > 3);   // filter operation
arr.first(x => x % 2 === 0); // find first even number
arr.any(x => x < 0);     // check if any negative numbers

// Path handling
const path = combinePaths("C:\\\\Scripts", "documents/test.ai");`}
            </CodeBox>
            <Paragraph>
                The library appears designed to provide modern JavaScript/TypeScript functionality in the ExtendScript
                environment while handling its specific limitations, with a focus on array operations and file path
                manipulation - both crucial for Illustrator scripting.
            </Paragraph>
            <Paragraph>
                Would you like me to elaborate on any particular aspect or shall we move on to writing new tests?
            </Paragraph>
        </Message>
        <Append
            identifier="utils"
            type=".txt"
        >
            ![[ utils.txt ]]
        </Append>
    </Chapter>
);

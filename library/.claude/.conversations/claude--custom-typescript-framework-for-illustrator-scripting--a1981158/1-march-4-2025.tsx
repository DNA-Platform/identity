import { Append, Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 March 2025](2025-03-04)</Date>
        </Dated>
        <Title>[[ 4 March 2025 ]]</Title>
        <Message
            at="2025-03-04T13:12:29.434151Z"
        >
            <Origin>35d6d731-70db-4c1c-aa19-2b2b770dc54b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I write illustrator scripts in TypeScript targeting ES5 and using types for adobe, but I wrote a custom
                little compiler that converts to jsx. Even though I am using TypeScript, and it supports classes and can
                compile them to ES3, I still don't have access to object and array methods. Instead I have created classes
                like A&lt;T&gt; initialized with f(array) and Str initialized with str("string") and various other things to
                help. Process this framework and try to understand it
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-04T13:12:44.927828Z"
        >
            <Origin>05a7e59b-5807-489d-8da5-437b110d82fb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I've analyzed your custom TypeScript framework for Adobe Illustrator scripting. It's an impressive utility
                layer that compensates for the limitations of ExtendScript's JavaScript implementation. Here's my
                understanding of its key components:
            </Paragraph>
            <Heading>Core Framework Structure</Heading>
            <Paragraph>
                Your framework creates a more modern programming experience by implementing array and string manipulation
                capabilities that aren't natively available in ExtendScript. The main components are:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Class A\&lt;T\&gt;
                    </Word> - A wrapper around JavaScript arrays that provides:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Modern array methods like <Word>
                            <Verbatim />
                            map
                        </Word>, <Word>
                            <Verbatim />
                            filter
                        </Word> (as <Word>
                            <Verbatim />
                            where
                        </Word>), <Word>
                            <Verbatim />
                            reduce
                        </Word> (as <Word>
                            <Verbatim />
                            aggregate
                        </Word>)
                    </Line>
                    <Line>
                        LINQ-inspired methods (<Word>
                            <Verbatim />
                            select
                        </Word>, <Word>
                            <Verbatim />
                            selectMany
                        </Word>, <Word>
                            <Verbatim />
                            where
                        </Word>, <Word>
                            <Verbatim />
                            first
                        </Word>, <Word>
                            <Verbatim />
                            last
                        </Word>)
                    </Line>
                    <Line>
                        Array manipulation functions (<Word>
                            <Verbatim />
                            insertAt
                        </Word>, <Word>
                            <Verbatim />
                            deleteAt
                        </Word>, <Word>
                            <Verbatim />
                            copy
                        </Word>)
                    </Line>
                    <Line>Chaining support for fluent syntax</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Class Str
                    </Word> - A string wrapper that extends A\&lt;string\&gt; and provides:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Modern string manipulation methods</Line>
                    <Line>String utility functions not available in ExtendScript</Line>
                    <Line>
                        Methods like <Word>
                            <Verbatim />
                            startsWith
                        </Word>, <Word>
                            <Verbatim />
                            endsWith
                        </Word>, <Word>
                            <Verbatim />
                            contains
                        </Word>, <Word>
                            <Verbatim />
                            padStart
                        </Word>, <Word>
                            <Verbatim />
                            padEnd
                        </Word>
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Helper Functions
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            f&lt;T&gt;()
                        </Word> - Factory function to create an A\&lt;T\&gt; instance
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            str()
                        </Word> - Factory function to create a Str instance
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            r()
                        </Word> - Range generator function
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Utility Functions
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            clone()
                        </Word> - Deep cloning of objects
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            combinePaths()
                        </Word> - Path manipulation
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateNegativeIndex()
                        </Word> - Handle negative array indices like Python
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            evaluateRangeSelector()
                        </Word> - Parse range expressions like "1:5" or "0:2:10"
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Inter-Application Communication
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            run()
                        </Word>, <Word>
                            <Verbatim />
                            send()
                        </Word>, <Word>
                            <Verbatim />
                            sendScript()
                        </Word> - Functions for ExtendScript messaging
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            Console
                        </Word> class - Wrapper for logging with multiple output modes
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Testing Framework
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            TestClass
                        </Word> - Basic unit testing with assertions
                    </Line>
                    <Line>Supports test methods, equality testing, and formatted error messages</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Key Design Patterns</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fluent Interface Pattern
                    </Word>: Methods return <Word>
                        <Verbatim />
                        this
                    </Word> allowing for method chaining like <Word>
                        <Verbatim />
                        f(&#91;1,2,3&#93;).where(x =&gt; x &gt; 1).select(x =&gt; x * 2)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Factory Functions
                    </Word>: <Word>
                        <Verbatim />
                        f()
                    </Word>, <Word>
                        <Verbatim />
                        str()
                    </Word>, and <Word>
                        <Verbatim />
                        r()
                    </Word> provide convenient initialization
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Extension Methods
                    </Word>: You've added methods to Arrays and Strings that don't exist in ExtendScript but are common in
                    modern JavaScript
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type Safety
                    </Word>: The framework leverages TypeScript's generic types for better type checking
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Functional Programming
                    </Word>: The implementation of methods like <Word>
                        <Verbatim />
                        map
                    </Word>, <Word>
                        <Verbatim />
                        select
                    </Word>, and <Word>
                        <Verbatim />
                        where
                    </Word> that are foundational to functional programming
                </Line>
            </Paragraph>
            <Paragraph>
                Your framework essentially creates a more productive development environment for Adobe Illustrator scripting
                by bridging the gap between modern TypeScript/JavaScript features and ExtendScript's more limited ES3-like
                environment. This is particularly valuable for array manipulation, string handling, and creating testable
                code.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:13:36.513090Z"
        >
            <Origin>7b4d2764-d26b-475f-8f64-3ebc7a13959f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good! Now read this and figure out how to use it. You start with api. You can do
                api.activeDocument().layers().at(0).path()
            </Paragraph>
            <Paragraph>Does it make sense&gt;</Paragraph>
            <Attachment
                identifier="paste-2"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-04T13:13:52.724323Z"
        >
            <Origin>98cc7b45-f81b-45e6-8474-8aa0f3efc09e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I've analyzed your extended codebase, and I can see this is an impressive wrapper framework for Adobe
                Illustrator scripting that adds a fluent API pattern on top of the native Illustrator APIs.
            </Paragraph>
            <Paragraph>
                Yes, your example starting point makes sense! The framework uses a query-style syntax for accessing
                Illustrator objects, starting with the globally available <Word>
                    <Verbatim />
                    api
                </Word> object. Here's how I understand the pattern:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Starting with the api object (global ApplicationQuery instance)
// Get active document -> access its layers -> get first layer -> access its pathItems
api.activeDocument().layers().at(0).pathItems()`}
            </CodeBox>
            <Paragraph>The framework seems to use:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Queryable Objects
                    </Word>: Everything in the document hierarchy is wrapped in a Queryable object that adds functionality
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Method Chaining
                    </Word>: Each method returns another Queryable object allowing for fluent API calls
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Collection Access
                    </Word>: Methods like <Word>
                        <Verbatim />
                        layers()
                    </Word>, <Word>
                        <Verbatim />
                        pathItems()
                    </Word>, etc. let you access collections
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Position/Container Extensions
                    </Word>: Each item has <Word>
                        <Verbatim />
                        .p()
                    </Word> and <Word>
                        <Verbatim />
                        .c()
                    </Word> accessors for positional and container operations
                </Line>
            </Paragraph>
            <Paragraph>For example, to create a rectangle on the first layer, you might do:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Create a rectangle using the container extension
api.activeDocument().layers().at(0).c().rectangle("MyRect")`}
            </CodeBox>
            <Paragraph>Or to manipulate existing elements:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Get all path items in document
const paths = api.activeDocument().layers().at(0).pathItems();

// Select all items whose names start with "Circle"
const circles = paths.whereNameStartsWith("Circle");

// Change their fill color
circles.do(item => item.set().fillColor(WebColor.Red));`}
            </CodeBox>
            <Paragraph>
                This approach is much cleaner than traditional ExtendScript where you'd have to navigate through the DOM
                with verbose syntax and without type safety. Your framework adds LINQ-inspired operations like <Word>
                    <Verbatim />
                    select()
                </Word>, <Word>
                    <Verbatim />
                    where()
                </Word>, <Word>
                    <Verbatim />
                    first()
                </Word>, etc., making collection operations much more readable and powerful.
            </Paragraph>
            <Paragraph>
                Is there a specific task or operation you'd like me to explain in more detail using this framework?
            </Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:14:12.353430Z"
        >
            <Origin>e535a2a3-b80e-4b93-aea2-3fb031b0f150</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now read this. See how you can modify colors in this framework:</Paragraph>
            <Paragraph>Describe it to me</Paragraph>
            <Attachment
                identifier="paste-3"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-04T13:14:29.617340Z"
        >
            <Origin>0f070816-6c41-42b4-9dc3-2a3c0814fe61</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                After analyzing this additional code, I can see that your framework includes a powerful set of utilities for
                handling paths, colors, and visual elements in Adobe Illustrator. Here's a summary of the key color
                manipulation capabilities:
            </Paragraph>
            <Heading>Color Handling in Your Framework</Heading>
            <Paragraph>
                Your framework has a sophisticated color system centered around the <Word>
                    <Verbatim />
                    DynamicColor
                </Word> class, which provides a high-level API for working with colors:
            </Paragraph>
            <Heading>1. Color Creation and Conversion</Heading>
            <Paragraph>
                <List />
                <Line>Create colors from various formats (hex strings, WebColor enum, RGBColor)</Line>
                <Line>Convert between color formats (RGB, HSL, LAB)</Line>
                <Line>Access to a comprehensive WebColor enum with standard web colors</Line>
            </Paragraph>
            <Heading>2. Color Manipulation</Heading>
            <Paragraph>
                <List />
                <Line>
                    Adjust opacity with <Word>
                        <Verbatim />
                        opacity()
                    </Word> or <Word>
                        <Verbatim />
                        withOpacity()
                    </Word>
                </Line>
                <Line>
                    Lighten/darken colors with <Word>
                        <Verbatim />
                        lighten()
                    </Word> and <Word>
                        <Verbatim />
                        darken()
                    </Word>
                </Line>
                <Line>
                    Invert colors with <Word>
                        <Verbatim />
                        complement()
                    </Word>
                </Line>
                <Line>
                    Blend colors using <Word>
                        <Verbatim />
                        overlay()
                    </Word> and <Word>
                        <Verbatim />
                        mix()
                    </Word>
                </Line>
                <Line>
                    Flatten translucent colors against white with <Word>
                        <Verbatim />
                        flatten()
                    </Word>
                </Line>
            </Paragraph>
            <Heading>3. Color Analysis</Heading>
            <Paragraph>
                <List />
                <Line>
                    Access RGB components with <Word>
                        <Verbatim />
                        red()
                    </Word>, <Word>
                        <Verbatim />
                        green()
                    </Word>, <Word>
                        <Verbatim />
                        blue()
                    </Word>
                </Line>
                <Line>Calculate brightness, chroma, hue, saturation, luminance</Line>
                <Line>
                    Compare colors with <Word>
                        <Verbatim />
                        equals()
                    </Word> and <Word>
                        <Verbatim />
                        contrastRatio()
                    </Word>
                </Line>
                <Line>Determine color temperature (warm/cool/neutral)</Line>
            </Paragraph>
            <Heading>4. Utility Functions</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        mix()
                    </Word> function for combining multiple colors
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $color()
                    </Word> for quick DynamicColor creation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        DynamicColor.random()
                    </Word> for generating random colors
                </Line>
            </Paragraph>
            <Heading>Usage in Path Items</Heading>
            <Paragraph>The PathItemQuery class lets you modify colors of path items with:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        fillColor()
                    </Word> to set the fill color
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        strokeColor()
                    </Word> to set the stroke color
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        opacity()
                    </Word> to set overall opacity
                </Line>
            </Paragraph>
            <Paragraph>For example:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Create a red rectangle with 50% opacity
api.activeDocument().layers().at(0).c().rectangle("RedRect")
   .fillColor(WebColor.Red, 0.5);

// Create a shape with complex color
var myPath = api.activeDocument().layers().at(0).pathItems().at(0);
myPath.strokeColor(WebColor.Blue);
myPath.fillColor(DynamicColor.fromHSL(180, 80, 50));  // Teal color using HSL

// Mix colors
var mixedColor = mix(WebColor.Red, WebColor.Blue, 0.7);  // 70% blue, 30% red
myPath.fillColor(mixedColor);`}
            </CodeBox>
            <Paragraph>
                Your color system offers an impressive level of control and flexibility that goes well beyond Illustrator's
                native color handling. It allows for precise programmatic control over colors while maintaining a clean,
                intuitive API.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:18:14.812456Z"
        >
            <Origin>5dc63413-3075-479d-933b-119087c65416</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Now I want a variation of this script that is much muhc simpler. Have it choose a random layer, then a
                random path in layer - If there are no paths in the layer, and there are group items, choose that and choose
                a tandom path - rinse and repeat:
            </Paragraph>
            <Paragraph>So follow the way documents are created and saved</Paragraph>
            <Attachment
                identifier="paste-4"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-04T13:19:06.521917Z"
        >
            <Origin>ca9c61bb-d4b1-4f90-9c36-8aa69258a581</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Based on your request, I'll create a simplified version of your script that randomly selects a layer, then a
                random path, with a fallback to groups if needed. Here's a clean, streamlined implementation:
            </Paragraph>
            <Artifact
                identifier="simplified-color-variation-script.v1"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v1"
            >
                Made the artifact “Simplified Color Variation Script”
            </Artifact>
            <Paragraph>
                This simplified script maintains the core functionality while being much more straightforward:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It selects just one random layer instead of processing all layers</Line>
                <Line>It modifies just one random path instead of applying multiple changes</Line>
                <Line>It follows a clearer recursive pattern to find paths within groups if needed</Line>
                <Line>It preserves your original file saving mechanism and naming convention</Line>
                <Line>It still varies colors using HSL for natural-looking variations</Line>
            </Paragraph>
            <Paragraph>The script now follows a simple algorithm:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Pick a random layer</Line>
                <Line>Look for path items directly in that layer</Line>
                <Line>If none found, try a random group and look inside it (up to 3 levels deep)</Line>
                <Line>When a path is found, modify either its fill or stroke color</Line>
                <Line>Save the document with an incremented filename</Line>
            </Paragraph>
            <Paragraph>
                This approach is more focused and predictable, while still creating interesting color variations.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:19:43.412524Z"
        >
            <Origin>a27f1f55-958e-43fc-a260-6ece97e6cbb1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You need to write it in TypeScript...</Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:20:41.228026Z"
        >
            <Origin>9bea3882-7035-4ed4-b1bc-d0d00650d832</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right - the script should maintain TypeScript typing to match your framework. Let me fix
                that:
            </Paragraph>
            <Artifact
                identifier="simplified-color-variation-script.v2"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v2"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v3"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v3"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v4"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v4"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v5"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v5"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v6"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v6"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v7"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v7"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v8"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v8"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Paragraph>
                Thank you for pointing that out. I've updated the script to use proper TypeScript type annotations
                throughout. The script now correctly:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Specifies return types for all functions (void, string, boolean, DynamicColor)</Line>
                <Line>Declares parameter types (string, LayerQuery, GroupItemQuery, PathItemQuery, DynamicColor)</Line>
                <Line>Properly defines class property types (private modified: boolean)</Line>
            </Paragraph>
            <Paragraph>
                This will ensure proper type checking and compatibility with your existing TypeScript framework, while
                providing better code completion and error prevention in your development environment.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-04T13:31:50.402446Z"
        >
            <Origin>139b1347-1ecb-4eef-80e9-127fe17bda0e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you add in a number of modifications? It can just call whatever this does in a loop but in the config I
                need to be able to choose a number:
            </Paragraph>
            <Attachment
                identifier="paste-5"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-04T13:32:40.956422Z"
        >
            <Origin>22ad11f8-5efe-4df4-84e8-197b19e53328</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll add a configuration option to specify the number of modifications to make. Here's how I'll update the
                script:
            </Paragraph>
            <Artifact
                identifier="simplified-color-variation-script.v9"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v9"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v10"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v10"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v11"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v11"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v12"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v12"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Artifact
                identifier="simplified-color-variation-script.v13"
                type=".js"
                artifact="simplified-color-variation"
                place="simplified-color-variation-script-v13"
            >
                Changed the artifact “Simplified Color Variation Script”
            </Artifact>
            <Paragraph>
                I've updated the script to handle multiple color modifications based on the configuration:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Added a <Word>
                        <Verbatim />
                        numberOfModifications
                    </Word> parameter to the config (default set to 5)
                </Line>
                <Line>
                    Changed <Word>
                        <Verbatim />
                        modified: boolean
                    </Word> to <Word>
                        <Verbatim />
                        modificationCount: number
                    </Word> to track the number of changes
                </Line>
                <Line>
                    Added a loop in <Word>
                        <Verbatim />
                        createAndSave()
                    </Word> to apply multiple color variations
                </Line>
                <Line>Updated the log message to show progress (e.g., "modification 3/5")</Line>
                <Line>Updated the final alert message to show the actual number of modifications made</Line>
            </Paragraph>
            <Paragraph>
                Now, when you run the script, it will make multiple random color modifications according to the value you
                set in the config. If you set <Word>
                    <Verbatim />
                    numberOfModifications: 10
                </Word>, it will try to modify 10 different paths across the document.
            </Paragraph>
            <Paragraph>
                The script still maintains its random selection approach - choosing a random layer, then a random path (or
                group if needed) for each modification. This ensures you get a good distribution of changes throughout your
                document.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
        <Append
            identifier="paste-2"
            type=".txt"
        >
            ![[ paste-2.txt ]]
        </Append>
        <Append
            identifier="paste-3"
            type=".txt"
        >
            ![[ paste-3.txt ]]
        </Append>
        <Append
            identifier="paste-4"
            type=".txt"
        >
            ![[ paste-4.txt ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v1"
            type=".js"
        >
            ![[ simplified-color-variation-script.v1.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v2"
            type=".js"
        >
            ![[ simplified-color-variation-script.v2.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v3"
            type=".js"
        >
            ![[ simplified-color-variation-script.v3.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v4"
            type=".js"
        >
            ![[ simplified-color-variation-script.v4.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v5"
            type=".js"
        >
            ![[ simplified-color-variation-script.v5.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v6"
            type=".js"
        >
            ![[ simplified-color-variation-script.v6.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v7"
            type=".js"
        >
            ![[ simplified-color-variation-script.v7.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v8"
            type=".js"
        >
            ![[ simplified-color-variation-script.v8.js ]]
        </Append>
        <Append
            identifier="paste-5"
            type=".txt"
        >
            ![[ paste-5.txt ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v9"
            type=".js"
        >
            ![[ simplified-color-variation-script.v9.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v10"
            type=".js"
        >
            ![[ simplified-color-variation-script.v10.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v11"
            type=".js"
        >
            ![[ simplified-color-variation-script.v11.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v12"
            type=".js"
        >
            ![[ simplified-color-variation-script.v12.js ]]
        </Append>
        <Append
            identifier="simplified-color-variation-script.v13"
            type=".js"
        >
            ![[ simplified-color-variation-script.v13.js ]]
        </Append>
    </Chapter>
);

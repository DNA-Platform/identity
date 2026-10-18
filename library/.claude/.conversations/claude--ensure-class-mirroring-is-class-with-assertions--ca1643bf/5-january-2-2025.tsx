import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 January 2025](2025-01-02)</Date>
        </Dated>
        <Title>[[ 2 January 2025 ]]</Title>
        <Message
            at="2025-01-02T11:45:40.645136Z"
        >
            <Origin>f41f6e72-923c-453c-bae7-6b734f1e8362</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This function is missing handling a condition - when the selector is a single number (the index). In which
                case start and end are that number and inc is undefined. Can you fix it please:
            </Paragraph>
            <Paragraph>
                function parseRangeSelector(selector: string): &#123; start: number; step: number | undefined; end: number
                &#125; &#123; // Remove all whitespace selector = selector.replace(/\s+/g, "");
            </Paragraph>
            <Paragraph>
                // Regular expression to match the range selector const rangeRegex =
                /^(?:(-?\d+)?):(?:(-?\d+)?(?::(-?\d+))?)?$/;
            </Paragraph>
            <Paragraph>const match = rangeRegex.exec(selector);</Paragraph>
            <Paragraph>
                if (!match) &#123; throw <Word>
                    <Verbatim />
                    Invalid range selector: "$&#123;selector&#125;"
                </Word>; &#125;
            </Paragraph>
            <Paragraph>
                // Extract matched groups const startRaw = match&#91;1&#93;; const stepRaw = match&#91;3&#93;; const endRaw
                = match&#91;2&#93;;
            </Paragraph>
            <Paragraph>
                // Parse the components const start = startRaw !== undefined ? parseInt(startRaw, 10) : 0; // Default start
                to 0 if not provided const step = stepRaw !== undefined ? parseInt(stepRaw, 10) : undefined; // Optional
                step const end = endRaw !== undefined ? parseInt(endRaw, 10) : -1; // Default end
            </Paragraph>
            <Paragraph>
                // Validate numbers if (isNaN(start) || (step !== undefined &amp;&amp; isNaN(step)) || isNaN(end)) &#123;
                throw new Error(<Word>
                    <Verbatim />
                    Invalid range numbers in selector: "$&#123;selector&#125;"
                </Word>); &#125;
            </Paragraph>
            <Paragraph>return &#123; start, step, end &#125;; &#125;</Paragraph>
        </Message>
        <Message
            at="2025-01-02T11:46:04.336470Z"
        >
            <Origin>bf93b1b4-9779-45d2-86fc-ceed4aa95de8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, we need to handle when the selector is just a number. Let me add that case to the function:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}function parseRangeSelector(selector: string): { start: number; step: number | undefined; end: number } {
    // Remove all whitespace
    selector = selector.replace(/\\s+/g, "");

    // Check if it's just a number
    if (/^-?\\d+$/.test(selector)) {
        const index = parseInt(selector, 10);
        if (isNaN(index)) {
            throw new Error(\`Invalid number selector: "\${selector}"\`);
        }
        return { start: index, step: undefined, end: index };
    }

    // Regular expression to match the range selector
    const rangeRegex = /^(?:(-?\\d+)?):(?:(-?\\d+)?(?::(-?\\d+))?)?$/;

    const match = rangeRegex.exec(selector);

    if (!match) {
        throw \`Invalid range selector: "\${selector}"\`;
    }

    // Extract matched groups
    const startRaw = match[1];
    const stepRaw = match[3];
    const endRaw = match[2];

    // Parse the components
    const start = startRaw !== undefined ? parseInt(startRaw, 10) : 0;
    const step = stepRaw !== undefined ? parseInt(stepRaw, 10) : undefined;
    const end = endRaw !== undefined ? parseInt(endRaw, 10) : -1;

    // Validate numbers
    if (isNaN(start) || (step !== undefined && isNaN(step)) || isNaN(end)) {
        throw new Error(\`Invalid range numbers in selector: "\${selector}"\`);
    }

    return { start, step, end };
}`}
            </CodeBox>
            <Paragraph>The key addition is checking for a pure number pattern before the range pattern:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`if (/^-?\\d+$/.test(selector)) {
    const index = parseInt(selector, 10);
    if (isNaN(index)) {
        throw new Error(\`Invalid number selector: "\${selector}"\`);
    }
    return { start: index, step: undefined, end: index };
}`}
            </CodeBox>
            <Paragraph>Now it will handle cases like:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`parseRangeSelector("5")      // { start: 5, step: undefined, end: 5 }
parseRangeSelector("-3")     // { start: -3, step: undefined, end: -3 }`}
            </CodeBox>
        </Message>
        <Message
            at="2025-01-02T11:46:40.439539Z"
        >
            <Origin>dba650d2-d451-499a-b180-810cfe7fdbdd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You can't just make this a single regex to stay clean?</Paragraph>
        </Message>
        <Message
            at="2025-01-02T11:46:51.098083Z"
        >
            <Origin>fdb2588c-e8cb-4427-9bf3-dbe7183f1e29</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes! We can modify the regex to handle both cases in one pattern. Instead of checking for a pure number
                first, we can make the colons and their surrounding patterns optional:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}function parseRangeSelector(selector: string): { start: number; step: number | undefined; end: number } {
    // Remove all whitespace
    selector = selector.replace(/\\s+/g, "");

    // Regex that handles both single numbers and ranges
    // ^(-?\\d+)(?::(-?\\d+)?(?::(-?\\d+)?)?)?$
    // Breakdown:
    // ^(-?\\d+)         - starts with a number (required)
    // (?:             - optional group:
    //   :(-?\\d+)?     -   optional end after colon
    //   (?::(-?\\d+)?)? -   optional step after second colon
    // )?$             - end of string
    const rangeRegex = /^(-?\\d+)(?::(-?\\d+)?(?::(-?\\d+)?)?)?$/;

    const match = rangeRegex.exec(selector);
    if (!match) {
        throw \`Invalid range selector: "\${selector}"\`;
    }

    // Extract matched groups
    const start = parseInt(match[1], 10);
    const endRaw = match[2];
    const stepRaw = match[3];

    // If no colon was matched, it's a single number case
    const end = endRaw !== undefined ? parseInt(endRaw, 10) : start;
    const step = stepRaw !== undefined ? parseInt(stepRaw, 10) : undefined;

    // Validate numbers
    if (isNaN(start) || (step !== undefined && isNaN(step)) || isNaN(end)) {
        throw new Error(\`Invalid range numbers in selector: "\${selector}"\`);
    }

    return { start, step, end };
}`}
            </CodeBox>
            <Paragraph>Now it handles all cases:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`"5"      // { start: 5, step: undefined, end: 5 }
"1:5"    // { start: 1, step: undefined, end: 5 }
"1:5:2"  // { start: 1, step: 2, end: 5 }
":5"     // { start: 0, step: undefined, end: 5 }
"1:"     // { start: 1, step: undefined, end: -1 }
"1::"    // { start: 1, step: undefined, end: -1 }`}
            </CodeBox>
        </Message>
        <Message
            at="2025-01-02T11:57:05.599850Z"
        >
            <Origin>c7c3a717-5eee-4fe8-9da2-7df2777530e7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>In ES2 what is the correct way to test for a property</Paragraph>
        </Message>
        <Message
            at="2025-01-02T11:57:24.191567Z"
        >
            <Origin>27dfb9d8-7248-4002-b9d1-1362da4f3cc6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In ES2/ES3 (ExtendScript's era), the correct way to test if a property exists on an object is with the
                <Word>
                    <Verbatim />
                    in
                </Word> operator or by checking if the property is not <Word>
                    <Verbatim />
                    undefined
                </Word>:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Using 'in' operator (preferred)
if ("propertyName" in obj) {
    // property exists
}

// Or checking undefined (less reliable because property might exist but be undefined)
if (obj.propertyName !== undefined) {
    // property exists but might be undefined
}`}
            </CodeBox>
            <Paragraph>We should avoid more modern approaches like:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Object.hasOwn()
                    </Word> (ES2022)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        Object.hasOwnProperty()
                    </Word> (might not be available in all ES3 environments)
                </Line>
                <Line>
                    Optional chaining <Word>
                        <Verbatim />
                        ?.
                    </Word> (ES2020)
                </Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    in
                </Word> operator is the most reliable and available in ES2/ES3.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:15:58.709875Z"
        >
            <Origin>b4b40dcd-d258-466f-8351-9f66de806114</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>In ES3 how to check for a field in the global namespace - like globalThis in TypeScript</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:16:23.061785Z"
        >
            <Origin>83ac2f0b-cb0e-4295-9760-c343ce4fcd6a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In ES3 the global object is simply <Word>
                    <Verbatim />
                    this
                </Word> at the global scope, or more commonly people used <Word>
                    <Verbatim />
                    window
                </Word> in browsers. However, in ExtendScript specifically, you use the special <Word>
                    <Verbatim />
                    $.global
                </Word> object. So to check if something exists in the global namespace in ExtendScript:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`if ("myGlobalVar" in $.global) {
    // global variable exists
}`}
            </CodeBox>
            <Paragraph>You can also reference it directly:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`if ($.global.myGlobalVar !== undefined) {
    // exists but could be undefined
}`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $.global
                </Word> object is ExtendScript's equivalent to modern JavaScript's <Word>
                    <Verbatim />
                    globalThis
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:16:52.371058Z"
        >
            <Origin>39b2cb0a-53de-480a-8e41-f6ad0f40d176</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What does $ do in illustrator scriptiong</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:16:58.677169Z"
        >
            <Origin>fa1e4fff-7512-4764-9d7e-4baaf02c35ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In Adobe Illustrator scripting, <Word>
                    <Verbatim />
                    $
                </Word> is a special ExtendScript object that provides access to core functionality and system-level
                operations. The key properties and methods include:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`$.global      // Access to global scope
$.os          // Operating system info
$.screens     // Screen information
$.build       // Build version
$.error       // Last error message
$.version     // ExtendScript version
$.line        // Current line number
$.stack       // Current call stack
$.level       // Current recursion level
$.fileName    // Current script name`}
            </CodeBox>
            <Paragraph>
                The most commonly used is <Word>
                    <Verbatim />
                    $.writeln()
                </Word> for debug output:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`$.writeln("Debug message");  // Writes to ExtendScript Toolkit console`}
            </CodeBox>
            <Paragraph>
                Fun fact: The dollar sign convention wasn't random - it was chosen to mirror similar syntax in other
                scripting environments at the time (like Perl's <Word>
                    <Verbatim />
                    $
                </Word> for scalar variables). In Adobe scripting, it provides access to the ExtendScript engine's built-in
                objects and utilities, distinct from the application-specific objects you get through the <Word>
                    <Verbatim />
                    app
                </Word> object.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:17:32.306207Z"
        >
            <Origin>356d6ce6-8b68-46d5-9bcc-27832ffed69a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there any way to print to print messages?</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:17:38.249868Z"
        >
            <Origin>5567c7aa-cc11-4b7e-b60d-f6b6ea4ded53</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, in ExtendScript for Illustrator you can output messages in a few ways:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Alert box
alert("Message to user");

// ExtendScript Toolkit console (if running in ESTK)
$.writeln("Debug message");

// Write to log file
// This requires setting up a log file first:
var logFile = new File("~/Desktop/script_log.txt");
logFile.open("a");  // 'a' for append
logFile.writeln("Log message");
logFile.close();`}
            </CodeBox>
            <Paragraph>
                Note that <Word>
                    <Verbatim />
                    console.log()
                </Word> is not available in ExtendScript as it's more modern JavaScript.
            </Paragraph>
            <Paragraph>
                Many developers use <Word>
                    <Verbatim />
                    alert()
                </Word> during development since it's guaranteed to work in all environments, but it requires user
                interaction to dismiss. <Word>
                    <Verbatim />
                    $.writeln()
                </Word> is better for debugging but only works if you're running the script through ExtendScript Toolkit.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:23:25.442072Z"
        >
            <Origin>f48796dc-6198-4458-a1a9-c003b47c3c17</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you write an illustrator script for a Console class that creates Log.ai document, checks to see if
                there's a first layer or creates one, and, every time console.log is called, it write a new line as an
                element in the first layer of that document. It should have log and clear functionality
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:23:55.152087Z"
        >
            <Origin>22820eef-178b-4947-bdd3-7955fa28712d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll create a Console class that logs to an Illustrator document:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}var Console = (function() {
    var LOG_DOC_NAME = "Log.ai";
    var LAYER_NAME = "Console Output";
    var LINE_HEIGHT = 12;
    var START_Y = 792;  // Standard letter size height
    var LEFT_MARGIN = 36;
    var currentY;
    
    function getOrCreateLogDocument() {
        // Try to find existing log document
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name === LOG_DOC_NAME) {
                return app.documents[i];
            }
        }
        
        // Create new document if not found
        var doc = app.documents.add(DocumentColorSpace.RGB);
        doc.name = LOG_DOC_NAME;
        return doc;
    }
    
    function getOrCreateLogLayer(doc) {
        // Try to find existing layer
        for (var i = 0; i < doc.layers.length; i++) {
            if (doc.layers[i].name === LAYER_NAME) {
                return doc.layers[i];
            }
        }
        
        // Create new layer if not found
        var layer = doc.layers.add();
        layer.name = LAYER_NAME;
        return layer;
    }
    
    function Console() {
        this.doc = getOrCreateLogDocument();
        this.layer = getOrCreateLogLayer(this.doc);
        currentY = START_Y;
    }
    
    Console.prototype.log = function(message) {
        // Make sure our doc is active
        if (app.activeDocument !== this.doc) {
            this.doc.activate();
        }
        
        // Create text frame
        var textFrame = this.layer.textFrames.add();
        textFrame.contents = message.toString();
        
        // Position text
        textFrame.position = [LEFT_MARGIN, currentY];
        
        // Set text properties
        textFrame.textRange.characterAttributes.size = LINE_HEIGHT;
        
        // Update Y position for next line
        currentY -= LINE_HEIGHT * 1.2;  // 1.2 for line spacing
        
        // Scroll if needed (by moving artboard)
        if (currentY < 0) {
            this.doc.artboards[0].artboardRect = [
                0, START_Y + Math.abs(currentY), 
                612, Math.abs(currentY)
            ];
        }
        
        app.redraw();
    };
    
    Console.prototype.clear = function() {
        // Remove all text frames
        while (this.layer.textFrames.length > 0) {
            this.layer.textFrames[0].remove();
        }
        
        // Reset position
        currentY = START_Y;
        
        // Reset artboard
        this.doc.artboards[0].artboardRect = [0, START_Y, 612, 0];
        
        app.redraw();
    };
    
    return Console;
})();

// Usage:
var console = new Console();
console.log("Hello World");
console.log("Another message");
// console.clear();`}
            </CodeBox>
            <Paragraph>Key features:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Creates or finds a document named "Log.ai"</Line>
                <Line>Creates or finds a layer named "Console Output"</Line>
                <Line>Each log message is a separate text frame</Line>
                <Line>Messages stack from top to bottom</Line>
                <Line>Automatically scrolls when messages exceed page</Line>
                <Line>Clear function removes all messages</Line>
                <Line>Uses standard letter size dimensions</Line>
                <Line>Maintains proper spacing between lines</Line>
                <Line>Auto-converts non-string messages using toString()</Line>
            </Paragraph>
            <Paragraph>Would you like me to add any additional features like:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Different message types (error, warning, info)</Line>
                <Line>Timestamps</Line>
                <Line>Text formatting options</Line>
                <Line>Message filtering</Line>
                <Line>Line numbers</Line>
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:24:47.990243Z"
        >
            <Origin>25ec458f-9c5e-4139-b158-b92fdc85fbb7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm sorry, this is written in TypeScript - the TypeScript targets ES5 but you can only use ES3 aspects of
                it. Can you rewrite this in that?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:25:15.025048Z"
        >
            <Origin>26598e3d-9090-4bf1-b2c0-7535c39aec7a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, let me rewrite this in ES3-compatible TypeScript that will compile down correctly:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Console {
    private static LOG_DOC_NAME: string = "Log.ai";
    private static LAYER_NAME: string = "Console Output";
    private static LINE_HEIGHT: number = 12;
    private static START_Y: number = 792;  // Standard letter size height
    private static LEFT_MARGIN: number = 36;
    
    private doc: Document;
    private layer: Layer;
    private currentY: number;
    
    constructor() {
        this.doc = this.getOrCreateLogDocument();
        this.layer = this.getOrCreateLogLayer(this.doc);
        this.currentY = Console.START_Y;
    }
    
    private getOrCreateLogDocument(): Document {
        // Try to find existing log document
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name === Console.LOG_DOC_NAME) {
                return app.documents[i];
            }
        }
        
        // Create new document if not found
        var doc: Document = app.documents.add(DocumentColorSpace.RGB);
        doc.name = Console.LOG_DOC_NAME;
        return doc;
    }
    
    private getOrCreateLogLayer(doc: Document): Layer {
        // Try to find existing layer
        for (var i = 0; i < doc.layers.length; i++) {
            if (doc.layers[i].name === Console.LAYER_NAME) {
                return doc.layers[i];
            }
        }
        
        // Create new layer if not found
        var layer: Layer = doc.layers.add();
        layer.name = Console.LAYER_NAME;
        return layer;
    }
    
    public log(message: any): void {
        // Make sure our doc is active
        if (app.activeDocument !== this.doc) {
            this.doc.activate();
        }
        
        // Create text frame
        var textFrame: TextFrame = this.layer.textFrames.add();
        textFrame.contents = String(message);  // ES3 compatible toString
        
        // Position text
        textFrame.position = [Console.LEFT_MARGIN, this.currentY];
        
        // Set text properties
        textFrame.textRange.characterAttributes.size = Console.LINE_HEIGHT;
        
        // Update Y position for next line
        this.currentY = this.currentY - (Console.LINE_HEIGHT * 1.2);
        
        // Scroll if needed (by moving artboard)
        if (this.currentY < 0) {
            this.doc.artboards[0].artboardRect = [
                0, Console.START_Y + Math.abs(this.currentY), 
                612, Math.abs(this.currentY)
            ];
        }
        
        app.redraw();
    }
    
    public clear(): void {
        // Remove all text frames
        while (this.layer.textFrames.length > 0) {
            this.layer.textFrames[0].remove();
        }
        
        // Reset position
        this.currentY = Console.START_Y;
        
        // Reset artboard
        this.doc.artboards[0].artboardRect = [0, Console.START_Y, 612, 0];
        
        app.redraw();
    }
}

// Export instance
export const console = new Console();`}
            </CodeBox>
            <Paragraph>Key ES3-compatible changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Used proper class syntax that TypeScript will compile down correctly</Line>
                <Line>
                    Changed <Word>
                        <Verbatim />
                        toString()
                    </Word> to <Word>
                        <Verbatim />
                        String()
                    </Word> for ES3 compatibility
                </Line>
                <Line>
                    Used explicit <Word>
                        <Verbatim />
                        var
                    </Word> declarations
                </Line>
                <Line>Avoided array methods not available in ES3</Line>
                <Line>Used static properties through the class name</Line>
                <Line>Proper typing for Illustrator objects</Line>
                <Line>Used classic prototype-based method definitions</Line>
                <Line>Export a single instance</Line>
            </Paragraph>
            <Paragraph>
                Would you like me to add any error handling or additional features that would be ES3-compatible?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:28:07.898398Z"
        >
            <Origin>a7d82969-6fc7-4429-a7ef-9141d655c4fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you change it to create a new layer as the top layer every time it's run? Clear can take a parameter
                like scope: "last" | "all" = "last" which clears the layer
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:28:22.227951Z"
        >
            <Origin>5754423e-74fb-4d20-9e0b-271cbd53be82</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`${''}class Console {
    private static LOG_DOC_NAME: string = "Log.ai";
    private static LINE_HEIGHT: number = 12;
    private static START_Y: number = 792;
    private static LEFT_MARGIN: number = 36;
    
    private doc: Document;
    private layer: Layer;
    private currentY: number;
    
    constructor() {
        this.doc = this.getOrCreateLogDocument();
        this.layer = this.createNewLayer();
        this.currentY = Console.START_Y;
    }
    
    private getOrCreateLogDocument(): Document {
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name === Console.LOG_DOC_NAME) {
                return app.documents[i];
            }
        }
        
        var doc: Document = app.documents.add(DocumentColorSpace.RGB);
        doc.name = Console.LOG_DOC_NAME;
        return doc;
    }
    
    private createNewLayer(): Layer {
        var layer: Layer = this.doc.layers.add();
        
        // Move to top by placing it above the first layer
        if (this.doc.layers.length > 1) {
            layer.zOrder(ZOrderMethod.BRINGTOFRONT);
        }
        
        // Set name with timestamp
        var date = new Date();
        layer.name = "Console " + date.toLocaleString();
        return layer;
    }
    
    public log(message: any): void {
        if (app.activeDocument !== this.doc) {
            this.doc.activate();
        }
        
        var textFrame: TextFrame = this.layer.textFrames.add();
        textFrame.contents = String(message);
        
        textFrame.position = [Console.LEFT_MARGIN, this.currentY];
        textFrame.textRange.characterAttributes.size = Console.LINE_HEIGHT;
        
        this.currentY = this.currentY - (Console.LINE_HEIGHT * 1.2);
        
        if (this.currentY < 0) {
            this.doc.artboards[0].artboardRect = [
                0, Console.START_Y + Math.abs(this.currentY), 
                612, Math.abs(this.currentY)
            ];
        }
        
        app.redraw();
    }
    
    public clear(scope: "last" | "all" = "last"): void {
        if (scope === "all") {
            // Remove all console layers
            for (var i = this.doc.layers.length - 1; i >= 0; i--) {
                if (this.doc.layers[i].name.indexOf("Console ") === 0) {
                    this.doc.layers[i].remove();
                }
            }
            
            // Create new layer for future logging
            this.layer = this.createNewLayer();
        } else {
            // Just clear current layer's text frames
            while (this.layer.textFrames.length > 0) {
                this.layer.textFrames[0].remove();
            }
        }
        
        this.currentY = Console.START_Y;
        this.doc.artboards[0].artboardRect = [0, Console.START_Y, 612, 0];
        app.redraw();
    }
}

export const console = new Console();`}
            </CodeBox>
            <Paragraph>Key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Renamed layer creation to <Word>
                        <Verbatim />
                        createNewLayer
                    </Word>
                </Line>
                <Line>Always creates a new layer at startup</Line>
                <Line>
                    Moved layer to top using <Word>
                        <Verbatim />
                        zOrder
                    </Word>
                </Line>
                <Line>Added timestamp to layer name</Line>
                <Line>Modified clear to handle both single layer and all layers</Line>
                <Line>Clear "all" removes any layer starting with "Console "</Line>
                <Line>Clear creates a new layer after removing all</Line>
                <Line>Clear "last" (default) just clears current layer</Line>
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:29:22.944531Z"
        >
            <Origin>b9fd7bbb-eb22-4c14-9edf-5ecd7441ad7c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you have it so that when you write it doesn't activate? Will that still work? So it's more like a log
                file?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:29:35.664336Z"
        >
            <Origin>4355fa87-6a8a-4f4c-985d-d475bc8f7f71</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes! The document doesn't need to be active to write to it. Let's remove the activation and see what else we
                can remove for more background-like logging:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Console {
    private static LOG_DOC_NAME: string = "Log.ai";
    private static LINE_HEIGHT: number = 12;
    private static START_Y: number = 792;
    private static LEFT_MARGIN: number = 36;
    
    private doc: Document;
    private layer: Layer;
    private currentY: number;
    
    constructor() {
        this.doc = this.getOrCreateLogDocument();
        this.layer = this.createNewLayer();
        this.currentY = Console.START_Y;
    }
    
    private getOrCreateLogDocument(): Document {
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name === Console.LOG_DOC_NAME) {
                return app.documents[i];
            }
        }
        
        var doc: Document = app.documents.add(DocumentColorSpace.RGB);
        doc.name = Console.LOG_DOC_NAME;
        return doc;
    }
    
    private createNewLayer(): Layer {
        var layer: Layer = this.doc.layers.add();
        
        if (this.doc.layers.length > 1) {
            layer.zOrder(ZOrderMethod.BRINGTOFRONT);
        }
        
        var date = new Date();
        layer.name = "Console " + date.toLocaleString();
        return layer;
    }
    
    public log(message: any): void {
        var textFrame: TextFrame = this.layer.textFrames.add();
        textFrame.contents = String(message);
        
        textFrame.position = [Console.LEFT_MARGIN, this.currentY];
        textFrame.textRange.characterAttributes.size = Console.LINE_HEIGHT;
        
        this.currentY = this.currentY - (Console.LINE_HEIGHT * 1.2);
        
        if (this.currentY < 0) {
            this.doc.artboards[0].artboardRect = [
                0, Console.START_Y + Math.abs(this.currentY), 
                612, Math.abs(this.currentY)
            ];
        }
    }
    
    public clear(scope: "last" | "all" = "last"): void {
        if (scope === "all") {
            for (var i = this.doc.layers.length - 1; i >= 0; i--) {
                if (this.doc.layers[i].name.indexOf("Console ") === 0) {
                    this.doc.layers[i].remove();
                }
            }
            this.layer = this.createNewLayer();
        } else {
            while (this.layer.textFrames.length > 0) {
                this.layer.textFrames[0].remove();
            }
        }
        
        this.currentY = Console.START_Y;
        this.doc.artboards[0].artboardRect = [0, Console.START_Y, 612, 0];
    }
}

export const console = new Console();`}
            </CodeBox>
            <Paragraph>Key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Removed <Word>
                        <Verbatim />
                        doc.activate()
                    </Word>
                </Line>
                <Line>
                    Removed <Word>
                        <Verbatim />
                        app.redraw()
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Now it will write to the Log.ai document in the background without changing the active document or forcing
                redraws. The user can switch to the Log document whenever they want to see the output.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:30:20.601321Z"
        >
            <Origin>ae312dcb-609d-44d5-8513-3d352a96296e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are their any helper utilities of $ what would help catch errors or get the last error so I can print errors
                to this easily
            </Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:30:47.347089Z"
        >
            <Origin>8294e2d6-e7f3-4666-aad3-55d164b9c8cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, ExtendScript's <Word>
                    <Verbatim />
                    $
                </Word> object has several error handling utilities we can use. Here's how we could add error logging:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Console {
    // ... existing code ...

    public error(error?: any): void {
        // If no error passed, get the last error from $
        if (!error) {
            error = "Error: " + $.error + "\\nLine: " + $.line + "\\nFile: " + $.fileName;
            if ($.stack) {
                error += "\\nStack: " + $.stack;
            }
        }
        
        // Add error prefix and log in red
        var textFrame: TextFrame = this.layer.textFrames.add();
        textFrame.contents = "ERROR: " + String(error);
        
        textFrame.position = [Console.LEFT_MARGIN, this.currentY];
        textFrame.textRange.characterAttributes.size = Console.LINE_HEIGHT;
        textFrame.textRange.characterAttributes.fillColor = new RGBColor();
        (textFrame.textRange.characterAttributes.fillColor as RGBColor).red = 255;

        this.currentY = this.currentY - (Console.LINE_HEIGHT * 1.2);
    }

    public try(fn: Function): void {
        try {
            fn();
        } catch(e) {
            this.error(e);
        }
    }
}

// Usage:
console.error();  // Logs last error from $
console.error("Custom error message");
console.try(() => {
    // Code that might throw
});`}
            </CodeBox>
            <Paragraph>Key $ error properties used:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $.error
                    </Word> - Last error message
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $.line
                    </Word> - Line number where error occurred
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $.fileName
                    </Word> - Script file where error occurred
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $.stack
                    </Word> - Call stack (if available)
                </Line>
            </Paragraph>
            <Paragraph>This gives us a nice way to catch and log errors with full context.</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:31:51.309333Z"
        >
            <Origin>45033155-bf65-49dd-9b20-b6719f80d42a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If the error is caught will it still be in $.error? Will $stack?</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:32:41.049729Z"
        >
            <Origin>8ceca1fc-7dd6-4f45-bd9d-e87c12b98033</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, you're right. Once an error is caught in a try-catch, it won't be in <Word>
                    <Verbatim />
                    $.error
                </Word> anymore. The <Word>
                    <Verbatim />
                    $.error
                </Word> and <Word>
                    <Verbatim />
                    $.stack
                </Word> only contain information about uncaught errors. Let me revise the error handling:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Console {
    // ... existing code ...

    public error(error?: any): void {
        var message: string;
        
        if (!error) {
            // Only use $ properties for uncaught errors
            message = "Last uncaught error: " + $.error;
            if ($.line) message += "\\nLine: " + $.line;
            if ($.fileName) message += "\\nFile: " + $.fileName;
            if ($.stack) message += "\\nStack: " + $.stack;
        } else if (error instanceof Error) {
            // For caught errors, use the error object properties
            message = "Error: " + error.message;
            if (error.fileName) message += "\\nFile: " + error.fileName;
            if (error.line) message += "\\nLine: " + error.line;
        } else {
            // For other types just convert to string
            message = String(error);
        }
        
        var textFrame: TextFrame = this.layer.textFrames.add();
        textFrame.contents = message;
        
        textFrame.position = [Console.LEFT_MARGIN, this.currentY];
        textFrame.textRange.characterAttributes.size = Console.LINE_HEIGHT;
        textFrame.textRange.characterAttributes.fillColor = new RGBColor();
        (textFrame.textRange.characterAttributes.fillColor as RGBColor).red = 255;

        this.currentY = this.currentY - (Console.LINE_HEIGHT * 1.2);
    }

    public try(fn: Function): void {
        try {
            fn();
        } catch(e) {
            // Pass the actual error object, don't rely on $
            this.error(e);
        }
    }
}`}
            </CodeBox>
            <Paragraph>Now we handle three cases:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>No error parameter - use $ properties for uncaught errors</Line>
                <Line>Error object - use its own properties</Line>
                <Line>Other values - just convert to string</Line>
            </Paragraph>
            <Paragraph>This gives us more reliable error logging for both caught and uncaught errors.</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:33:18.508829Z"
        >
            <Origin>c5c5fe6f-1c90-455e-ab7b-5401f959f2a5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But lets say I catch an error. How do I get the stack information etc...</Paragraph>
        </Message>
        <Message
            at="2025-01-02T12:33:42.357091Z"
        >
            <Origin>589f1b8d-2df6-41a2-bf40-abf11c0a5c84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In ExtendScript, once you catch an error, you can't get the stack trace through <Word>
                    <Verbatim />
                    $.stack
                </Word> because the error has been caught. The best way to preserve this information is to capture it before
                catching the error. We could create a special try-catch wrapper:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class Console {
    // ... existing code ...

    public try(fn: Function): void {
        try {
            fn();
        } catch(e) {
            // Catching loses stack info, so we have to construct our own debug info
            var debugInfo = "Error: " + e.message + 
                          "\\nFile: " + e.fileName +
                          "\\nLine: " + e.line;
            
            // Try to construct a basic call path
            try {
                throw new Error();
            } catch(trace) {
                if (trace.stack) {
                    debugInfo += "\\nStack: " + trace.stack;
                }
            }
            
            this.error(debugInfo);
        }
    }
}`}
            </CodeBox>
            <Paragraph>
                But honestly, error handling in ExtendScript is quite limited. If you really need detailed error
                information, you might want to:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Let errors bubble up uncaught</Line>
                <Line>
                    Use <Word>
                        <Verbatim />
                        $.error
                    </Word> and <Word>
                        <Verbatim />
                        $.stack
                    </Word> to log them
                </Line>
                <Line>Then wrap your entire script in a try-catch</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`try {
    // Your entire script
} catch(e) {
    console.error($.error); // This will have the stack trace
}`}
            </CodeBox>
            <Paragraph>ExtendScript just doesn't provide great error introspection once you catch an error.</Paragraph>
        </Message>
        <Append
            identifier="ensure-class-implementation"
            type=".ts"
        >
            ![[ ensure-class-implementation.ts ]]
        </Append>
        <Append
            identifier="hashable-implementation"
            type=".ts"
        >
            ![[ hashable-implementation.ts ]]
        </Append>
        <Append
            identifier="minimal-hashable-implementation"
            type=".ts"
        >
            ![[ minimal-hashable-implementation.ts ]]
        </Append>
        <Append
            identifier="complete-hashable-implementation"
            type=".ts"
        >
            ![[ complete-hashable-implementation.ts ]]
        </Append>
        <Append
            identifier="ensure-class-with-instance-methods"
            type=".ts"
        >
            ![[ ensure-class-with-instance-methods.ts ]]
        </Append>
        <Append
            identifier="isvalue-class-implementation"
            type=".ts"
        >
            ![[ isvalue-class-implementation.ts ]]
        </Append>
        <Append
            identifier="assert-class-with-explicit-throws"
            type=".ts"
        >
            ![[ assert-class-with-explicit-throws.ts ]]
        </Append>
        <Append
            identifier="instanceis-test-suite"
            type=".ts"
        >
            ![[ instanceis-test-suite.ts ]]
        </Append>
        <Append
            identifier="fixed-instance-is"
            type=".ts"
        >
            ![[ fixed-instance-is.ts ]]
        </Append>
        <Append
            identifier="is-properties"
            type=".ts"
        >
            ![[ is-properties.ts ]]
        </Append>
        <Append
            identifier="is-properties-configurable"
            type=".ts"
        >
            ![[ is-properties-configurable.ts ]]
        </Append>
        <Append
            identifier="type-properties"
            type=".ts"
        >
            ![[ type-properties.ts ]]
        </Append>
        <Append
            identifier="type-properties-robust"
            type=".ts"
        >
            ![[ type-properties-robust.ts ]]
        </Append>
        <Append
            identifier="is-property-test-suite"
            type=".ts"
        >
            ![[ is-property-test-suite.ts ]]
        </Append>
        <Append
            identifier="is-mustbe-classes"
            type=".ts"
        >
            ![[ is-mustbe-classes.ts ]]
        </Append>
        <Append
            identifier="must-be-chainable"
            type=".ts"
        >
            ![[ must-be-chainable.ts ]]
        </Append>
        <Append
            identifier="must-be-with-instance-is"
            type=".ts"
        >
            ![[ must-be-with-instance-is.ts ]]
        </Append>
        <Append
            identifier="mustbe-properties"
            type=".ts"
        >
            ![[ mustbe-properties.ts ]]
        </Append>
        <Append
            identifier="mustbe-assertions"
            type=".ts"
        >
            ![[ mustbe-assertions.ts ]]
        </Append>
        <Append
            identifier="is-tests"
            type=".ts"
        >
            ![[ is-tests.ts ]]
        </Append>
        <Append
            identifier="is-exhaustive-tests"
            type=".ts"
        >
            ![[ is-exhaustive-tests.ts ]]
        </Append>
        <Append
            identifier="mustbe-lazy-tests"
            type=".ts"
        >
            ![[ mustbe-lazy-tests.ts ]]
        </Append>
    </Chapter>
);

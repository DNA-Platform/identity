import { Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 January 2025](2025-01-24)</Date>
        </Dated>
        <Title>[[ 24 January 2025 ]]</Title>
        <Message
            at="2025-01-24T14:36:33.081130Z"
        >
            <Origin>3c741db1-0ea6-445c-b53d-b3d85df184dd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am working with ExtendScript in Illustrator and I need to build an abstraction around BridgeTalk. Can you
                teel me how to to use BridgeTalk?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:36:39.446881Z"
        >
            <Origin>6f2846ad-4870-4f70-ab38-fc91f9c0d5c9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's how to use BridgeTalk in ExtendScript for Illustrator:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Send message to Photoshop
var bt = new BridgeTalk();
bt.target = "photoshop";
bt.body = "alert('Hello from Illustrator')";
bt.send();

// Handle response
bt.onResult = function(response) {
    alert(response.body);
};

// Check if application is running
var isRunning = BridgeTalk.isRunning("photoshop");

// Get available applications
var apps = BridgeTalk.getSpecifiers();

// Wait for response
bt.timeout = 30; // seconds
bt.onTimeout = function() {
    alert("Request timed out");
};`}
            </CodeBox>
            <Paragraph>Key specifications:</Paragraph>
            <Paragraph>
                <List />
                <Line>Target applications use lowercase names: "photoshop", "illustrator", "indesign"</Line>
                <Line>Body contains JavaScript code as string</Line>
                <Line>Response handling is asynchronous</Line>
                <Line>Timeout defaults to 10 seconds</Line>
                <Line>
                    Can check app status with <Word>
                        <Verbatim />
                        isRunning()
                    </Word> before sending
                </Line>
                <Line>
                    Error handling via <Word>
                        <Verbatim />
                        onError
                    </Word> callback
                </Line>
            </Paragraph>
            <Paragraph>Let me know if you need specific implementation examples.</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:37:07.134133Z"
        >
            <Origin>0c6edc57-46bc-4b4a-92f4-56e1677cb77a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Good. I can use bridgetalk to send script to illusrtator too right?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:37:10.698737Z"
        >
            <Origin>8d1717e6-5daf-432c-870d-382361196c2a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. You can send scripts to Illustrator from other Adobe apps or even from Illustrator itself:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()"; // Create new document
bt.send();

// Handle response
bt.onResult = function(response) {
    alert("Command executed");
};`}
            </CodeBox>
            <Paragraph>
                This is useful for automation across Adobe applications or executing scripts in separate Illustrator
                instances.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:37:58.452850Z"
        >
            <Origin>2aaf9659-f78a-4a36-b933-cb8056af9e0b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does bridgetalk know to execute that command?? Doesn't it just run files?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:38:02.555981Z"
        >
            <Origin>65deebea-fc26-45d8-897b-272ac9d7769b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                BridgeTalk executes JavaScript code that's passed as a string in the <Word>
                    <Verbatim />
                    body
                </Word> property. It doesn't only run files - it can execute any valid ExtendScript code. The receiving
                application (Illustrator in this case) interprets and runs this code in its scripting engine.
            </Paragraph>
            <Paragraph>Example of different ways to send commands:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}// Direct command
bt.body = "app.documents.add()";

// Multiple commands
bt.body = "app.documents.add(); \\
           var doc = app.activeDocument; \\
           doc.artboards[0].name = 'New Board';";

// Can also run file content
var scriptContent = File("path/to/script.jsx").read();
bt.body = scriptContent;`}
            </CodeBox>
        </Message>
        <Message
            at="2025-01-24T14:38:36.880346Z"
        >
            <Origin>5e39b692-a78d-4cf3-a362-a7db52f35ca5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You are sire?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:38:40.035563Z"
        >
            <Origin>be8924b6-3646-478b-b7dd-c5e0f4b2258c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I'm sure. BridgeTalk executes JavaScript code strings directly in the target application's scripting
                engine. While it can run file content, it doesn't require files - any valid ExtendScript code in the <Word>
                    <Verbatim />
                    body
                </Word> property will execute.
            </Paragraph>
            <Paragraph>Let me know if you'd like me to demonstrate with more examples.</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:39:44.822865Z"
        >
            <Origin>246dd539-7690-4477-adaf-8dac111a96cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wow, so running another script isn't even the primary function? Or is there an easy way to do that too?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:39:53.399153Z"
        >
            <Origin>8fddd886-cc6f-476c-88e2-b6f024609f25</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The primary purpose of BridgeTalk is actually inter-application communication and script execution in Adobe
                applications. It can handle both direct code execution and script file execution effectively.
            </Paragraph>
            <Paragraph>For running external script files, here are the standard approaches:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Method 1: Read and execute script file
var scriptFile = File("path/to/script.jsx");
var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = scriptFile.read();
bt.send();

// Method 2: Use $.evalFile
bt.body = '$.evalFile("path/to/script.jsx")';
bt.send();`}
            </CodeBox>
            <Paragraph>
                The second method using <Word>
                    <Verbatim />
                    $.evalFile
                </Word> is often preferred when running script files as it maintains proper file paths and scope. This
                approach is particularly useful when your script needs to reference external files or resources.
            </Paragraph>
            <Paragraph>
                Would you like me to explain more about how BridgeTalk handles different types of script execution?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:40:50.763436Z"
        >
            <Origin>48b765a8-d971-4ffb-84b9-e634a9df41f4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Huh I thought it was a way of executing other scripts. Like you gave the script path</Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:40:57.473441Z"
        >
            <Origin>e1b96c24-9321-4c1b-a3b7-6f205ebbd350</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I understand your surprise. Let me clarify the fundamental purpose of BridgeTalk: it's primarily a
                communication system between Adobe applications that can execute JavaScript code. While executing external
                script files is one common use case, BridgeTalk's core functionality is broader.
            </Paragraph>
            <Paragraph>Think of BridgeTalk like a messenger that can:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Send direct JavaScript commands to be executed</Line>
                <Line>Send the contents of script files to be executed</Line>
                <Line>Facilitate communication between Adobe applications</Line>
            </Paragraph>
            <Paragraph>
                When I mentioned <Word>
                    <Verbatim />
                    $.evalFile()
                </Word> earlier, that's actually a separate ExtendScript function being executed through BridgeTalk, rather
                than a native BridgeTalk feature. BridgeTalk itself simply delivers and executes whatever JavaScript code is
                in its <Word>
                    <Verbatim />
                    body
                </Word> property.
            </Paragraph>
            <Paragraph>
                Would you like me to demonstrate some practical examples of how BridgeTalk can be used for both direct code
                execution and script file handling? This might help illustrate the distinction more clearly.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:42:51.977717Z"
        >
            <Origin>59b919ea-b671-4fda-aa34-f652a086a542</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No it's good. I am doing this so as not to freeze the UI. My hope is that the UI updates in between commands
                when executed with BridgeTalk even within adobe. But my understanding is I can send with or without waiting
                for the command to finish. Is that true?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:42:59.495110Z"
        >
            <Origin>303702b9-025d-42bb-bbd5-9789b13bc739</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, BridgeTalk offers both synchronous and asynchronous execution options for managing UI responsiveness.
            </Paragraph>
            <Paragraph>For asynchronous execution (non-blocking):</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send();
// Code here runs immediately without waiting

// Optional callback when command completes
bt.onResult = function(response) {
    // Handle completion
};`}
            </CodeBox>
            <Paragraph>For synchronous execution (blocking):</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send(true); // true parameter forces synchronous execution
// Code here waits for completion`}
            </CodeBox>
            <Paragraph>
                The asynchronous approach is generally preferred for maintaining UI responsiveness. You can chain commands
                using the onResult callback if you need sequential execution while keeping the UI responsive:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`bt.onResult = function(response) {
    // Send next command here
    var nextBt = new BridgeTalk();
    nextBt.target = "illustrator";
    nextBt.body = "// next command";
    nextBt.send();
};`}
            </CodeBox>
            <Paragraph>
                Would you like me to explain more about managing command sequencing while maintaining UI responsiveness?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:43:46.291668Z"
        >
            <Origin>ccddffda-a3d4-4af2-a21a-37163383b16a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Now, this is weird right? Can I even send a blocking command to illustrator from illustrator??
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T14:43:54.551098Z"
        >
            <Origin>d1e15bc8-126e-4cf4-8acb-080704e03bb1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a perceptive question about BridgeTalk's behavior within the same application. When sending commands
                from Illustrator to Illustrator, BridgeTalk actually creates a separate thread for execution. This means
                that while you can technically send a "blocking" command using send(true), it won't behave the same way as
                synchronous code executed directly in your script.
            </Paragraph>
            <Paragraph>
                The primary purpose of BridgeTalk is inter-application communication, so using it for same-application
                execution can be considered a non-standard usage. For managing UI responsiveness within Illustrator, there
                are more conventional approaches:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Standard approach for non-blocking operations
app.scheduleTask("app.documents.add()", 100, false);

// Or using setTimeout
$.sleep(0); // Allows UI to update`}
            </CodeBox>
            <Paragraph>
                If you need to ensure sequential execution while maintaining UI responsiveness, I recommend using
                app.scheduleTask() or carefully placed $.sleep() calls rather than relying on BridgeTalk for
                same-application communication. Would you like me to explain more about these alternative approaches?
            </Paragraph>
        </Message>
    </Chapter>
);

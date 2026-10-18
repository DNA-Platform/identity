import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 January 2025](2025-01-21)</Date>
        </Dated>
        <Title>[[ 21 January 2025 ]]</Title>
        <Message
            at="2025-01-21T22:36:42.366578Z"
        >
            <Origin>518c5b63-9665-45ad-969d-fb0bc45eeb99</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: I want to do an experiment with ExtendScript. I am using Adoby types for TypeScript, so we can write
                in TypeScript targeting ES5, but can only use ExtendScript features, which is like ES3. Make sense?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:36:46.388590Z"
        >
            <Origin>6b6f1322-de61-4d71-99cf-7c0a55ba7edd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that makes sense! You're essentially working with TypeScript but need to be mindful of the ExtendScript
                environment's limitations, which is based on ES3-like features. This means you'll need to:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Write TypeScript code that compiles down to ES5-compatible JavaScript</Line>
                <Line>Only use features that are available in ExtendScript (ES3-like environment)</Line>
                <Line>Utilize Adobe's type definitions for TypeScript to ensure proper type checking</Line>
            </Paragraph>
            <Paragraph>
                Would you like to proceed with writing some ExtendScript code? I can help you work within these constraints.
                What kind of experiment did you have in mind?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:39:51.550608Z"
        >
            <Origin>ce38e43a-4252-487e-8742-029632b0b3ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: So no fancy array methods or list comprehension, few string operation methods. But I have shimmed many
                of these things, so I guess you can use them and I can replace them
            </Paragraph>
            <Paragraph>
                Doug: I want to run an experiment using the Bridge abstraction. I forget what it is called but it lets me
                execute other scripts through extend script
            </Paragraph>
            <Paragraph>
                Doug: I am finding that the UI gets overwhelmed with my very heavy rendering framework because each script
                does too much. I want to try breaking things down into chunks, executing them one at a time async so they go
                on a stack, and seeing if the UI catches up in the breaks between the scripts. Does this make sense as an
                architecture?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:40:08.541015Z"
        >
            <Origin>442258f6-7783-4dc5-847b-0d955ce125de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, this makes perfect sense as an architecture! You're essentially looking to implement a form of
                cooperative multitasking using BridgeTalk (which I believe is the abstraction you're thinking of) to break
                up heavy processing into smaller chunks that won't block the UI.
            </Paragraph>
            <Paragraph>The general approach would be:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Break your heavy rendering tasks into smaller, independent units</Line>
                <Line>Queue these tasks</Line>
                <Line>Use BridgeTalk to execute each task as a separate script</Line>
                <Line>Allow the UI to update between executions</Line>
            </Paragraph>
            <Paragraph>Here's a conceptual outline of how this might work:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}interface TaskUnit {
    scriptPath: string;
    params?: any;
}

class TaskManager {
    private taskQueue: TaskUnit[] = [];
    
    addTask(task: TaskUnit) {
        this.taskQueue.push(task);
    }
    
    async executeNext() {
        if (this.taskQueue.length === 0) return;
        
        const task = this.taskQueue.shift();
        const bt = new BridgeTalk();
        bt.target = "indesign"; // or whatever your target app is
        bt.body = File(task.scriptPath).read();
        
        // Return a promise that resolves when the script completes
        return new Promise((resolve, reject) => {
            bt.onResult = (result) => resolve(result);
            bt.onError = (err) => reject(err);
            bt.send();
        });
    }
    
    async processQueue() {
        while (this.taskQueue.length > 0) {
            try {
                await this.executeNext();
                // Add a small delay to let UI breathe
                await new Promise(resolve => $.sleep(100));
            } catch (e) {
                // Handle errors
            }
        }
    }
}`}
            </CodeBox>
            <Paragraph>
                Would you like me to expand on any part of this approach? For instance, I could help with:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Breaking down your existing framework into smaller task units</Line>
                <Line>Implementing proper error handling and state management</Line>
                <Line>Setting up the communication between scripts</Line>
                <Line>Determining optimal chunk sizes and delays</Line>
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:44:01.827318Z"
        >
            <Origin>17034b90-693f-496c-9cbe-fd8fa1ae1549</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: No you are way off, no offense. We are not doing this async in TypeScript. That's not in ES3 or
                extendscript right????
            </Paragraph>
            <Paragraph>
                Doug: The BridgeTalk abstraction has the notion of waiting or not. And check for me but if you don't wait
                BridgeTalk manages a Queue
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:44:11.820938Z"
        >
            <Origin>40756656-7367-4b5d-93c4-1c309a26b0c2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, I apologize - you're absolutely right! I got carried away with modern TypeScript patterns. Let's correct
                this.
            </Paragraph>
            <Paragraph>
                In ExtendScript/ES3, we're working with synchronous code and BridgeTalk's built-in functionality. You're
                right that BridgeTalk has a simpler queue mechanism. Here's what I recall:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Basic BridgeTalk usage (no fancy async/await!)
var bt = new BridgeTalk();
bt.target = "indesign"; // or target app
bt.body = "alert('test')";

// Two key ways to send:
bt.send();  // Non-waiting, gets queued
// or
bt.send(true);  // Waits for completion
`}
            </CodeBox>
            <Paragraph>
                Let me verify your understanding about the queue - you're thinking that if we send without the wait
                parameter (or <Word>
                    <Verbatim />
                    false
                </Word>), BridgeTalk will handle queuing these automatically? This would be perfect for your use case since
                it would naturally create breaks between script executions.
            </Paragraph>
            <Paragraph>
                Would you like me to sketch out a more ES3-appropriate approach to your chunking idea using this simpler
                BridgeTalk pattern?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:45:16.687378Z"
        >
            <Origin>281381a4-e325-44be-80a1-627dea0a4178</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Can you look that up? Read the docs or use whatever is in your training dataset. What happens when you
                don't use .send(true). What happens when you don't wait. Do you think the UI will catch up? What can you
                find?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:45:22.172226Z"
        >
            <Origin>67574853-721e-4c1e-aa11-b2225bf082cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me think about what I know about BridgeTalk's behavior...</Paragraph>
            <Paragraph>
                Unfortunately, I need to be honest that I don't have definitive documentation about BridgeTalk's exact
                queueing behavior in my training data. The key things I believe are true but would need verification:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>BridgeTalk.send() can be called with or without the wait parameter</Line>
                <Line>When called without wait, it returns immediately rather than blocking</Line>
                <Line>
                    I believe BridgeTalk maintains some kind of message queue, but I'm not completely certain about:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Whether messages are guaranteed to execute in order</Line>
                    <Line>Whether the queue gives any time for UI updates between messages</Line>
                    <Line>What happens if you rapidly queue many messages</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                For your UI responsiveness question - even if BridgeTalk queues messages, we can't assume the UI will get
                update time just because messages are queued. The UI thread may still be blocked depending on how
                ExtendScript handles the queue execution.
            </Paragraph>
            <Paragraph>
                Would you be willing to share what you know about BridgeTalk's behavior, or run a small test to verify these
                behaviors? It would help us design a better solution for your chunking approach.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-21T22:50:30.266349Z"
        >
            <Origin>f52ae895-c2c3-4dd6-b982-b24c31adc5ca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: I sent GPT our chat. He has this to say (attachment). So lets say we have an tasks/add-layer script
                and a tasks/add-path script and we used the document metadata to store the name of the document (for
                add-layer) and the name of the document and layer (for add-path) when we do. What do you think will happen
            </Paragraph>
            <Paragraph>Doug: Can you write versions of these for me in TypeScript with Types for Adobe?</Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-21T22:50:53.213200Z"
        >
            <Origin>04fc0ad9-d6f6-479f-a32f-e4402fc68cd2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, now I understand much better after reading that documentation! Let me write those two scripts with
                proper Adobe types.
            </Paragraph>
            <Paragraph>
                &lt;antThinking&gt;This needs an artifact since it's a complete TypeScript implementation that will be
                reused. We'll need Adobe types and careful ES3-compatible code.&lt;/antThinking&gt;
            </Paragraph>
            <Artifact
                identifier="add-layer-and-add-path-scripts.v1"
                type=".ts"
                artifact="add-layer-path-scripts"
                place="add-layer-and-add-path-scripts-v1"
            >
                Made the artifact “Add Layer and Add Path Scripts”
            </Artifact>
            <Paragraph>
                Based on the documentation you shared, here's what I think will happen when these are executed with
                BridgeTalk.send():
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>When the first script (add-layer) runs:</Line>
                <Paragraph>
                    <List />
                    <Line>It will execute completely</Line>
                    <Line>The UI will get a chance to update after it finishes</Line>
                    <Line>The metadata will be successfully stored</Line>
                    <Line>The layer will be created</Line>
                </Paragraph>
                <Line>When the second script (add-path) runs:</Line>
                <Paragraph>
                    <List />
                    <Line>It will start after the first one is completely done</Line>
                    <Line>It can read the metadata that was stored by the first script</Line>
                    <Line>It will create its path</Line>
                    <Line>The UI will get another chance to update after it finishes</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                The key thing is that between these two scripts, the UI thread will get a chance to process events and
                redraw, which should prevent the interface from becoming unresponsive. Would you like me to add more error
                handling or specific BridgeTalk setup code to show how to queue these scripts?
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
        <Append
            identifier="add-layer-and-add-path-scripts.v1"
            type=".ts"
        >
            ![[ add-layer-and-add-path-scripts.v1.ts ]]
        </Append>
    </Chapter>
);

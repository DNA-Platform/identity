import { Append, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 February 2025](2025-02-07)</Date>
        </Dated>
        <Title>[[ 7 February 2025 ]]</Title>
        <Message
            at="2025-02-07T14:37:34.431605Z"
        >
            <Origin>635733cc-489c-488a-8a3c-dea9a9701a98</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have this vscode task: &#123; "label": "get-jsx-path", "type": "shell", "command": "node", "args":
                &#91;"scripts/get-jsx.js", "$&#123;file&#125;"&#93;, "problemMatcher": &#91;&#93;, "presentation": &#123;
                "reveal": "never", "panel": "dedicated" &#125; &#125;
            </Paragraph>
            <Paragraph>
                I'm not even sure I need a task to do this, but I have that script. I want to update the extendscript debug
                task to use that so it runs the jsx file associated with my ts file (I compile typescript to jsx). Can you
                help me write this?
            </Paragraph>
            <Paragraph>
                &#123; "version": "0.2.0", "configurations": &#91; &#123; "type": "extendscript-debug", "request": "launch",
                "name": "Run File in Illustrator", "script": "$&#123;file&#125;", "preLaunchTask": "npm run build",
                "engineName": "main", "hostAppSpecifier": "illustrator-29.064", // From Help/About Illustrator and always
                end with 0.64 &#125; &#93; &#125;
            </Paragraph>
        </Message>
        <Message
            at="2025-02-07T14:37:56.718182Z"
        >
            <Origin>d470ffa0-dd17-427c-8ca8-ba5e1d68c70e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You can modify the debug configuration to use the output of your <Word>
                    <Verbatim />
                    get-jsx-path
                </Word> task. Here's how:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "launch",
            "name": "Run File in Illustrator",
            "script": "\${command:extension.executeCommand}",
            "scriptArgs": ["node", "scripts/get-jsx.js", "\${file}"],
            "preLaunchTask": "npm run build",
            "engineName": "main",
            "hostAppSpecifier": "illustrator-29.064"
        }
    ]
}`}
            </CodeBox>
            <Paragraph>
                This will execute the get-jsx.js script before launching the debugger and use its output as the script path.
                The task can be removed unless needed for other purposes.
            </Paragraph>
        </Message>
        <Message
            at="2025-02-07T14:38:44.914029Z"
        >
            <Origin>8a4b0f7b-d70b-4420-bd4a-7b1fbff63539</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It saysscriptArgs doesn't exist. Can you please ponder how this system works by reading formal info before
                fixing
            </Paragraph>
        </Message>
        <Message
            at="2025-02-07T14:39:06.344855Z"
        >
            <Origin>d6f3d92e-37d3-4c24-9313-e299d1191c0f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check the official ExtendScript Debug extension documentation. Based on Microsoft's reference, debug
                configurations in VS Code are specific to each extension type.
            </Paragraph>
            <Paragraph>
                Let's look for a more proper way to pass this path. We may need to chain tasks together and have the debug
                config reference the output. First - do you know if this extension has its own documentation? Could you
                share where you found info about the <Word>
                    <Verbatim />
                    extendscript-debug
                </Word> type?
            </Paragraph>
            <Paragraph>
                In VSCode, we typically either use environment variables or compound tasks to pass values between tasks and
                debug configs. Let me verify the correct approach for this specific extension before suggesting a fix.
            </Paragraph>
        </Message>
        <Append
            identifier="pathitem-shadow-implementation"
            type=".ts"
        >
            ![[ pathitem-shadow-implementation.ts ]]
        </Append>
        <Append
            identifier="application-shadow-class"
            type=".ts"
        >
            ![[ application-shadow-class.ts ]]
        </Append>
        <Append
            identifier="global-reference-class-implementation"
            type=".ts"
        >
            ![[ global-reference-class-implementation.ts ]]
        </Append>
        <Append
            identifier="dollar-reference"
            type=".ts"
        >
            ![[ dollar-reference.ts ]]
        </Append>
        <Append
            identifier="documents-shadow"
            type=".ts"
        >
            ![[ documents-shadow.ts ]]
        </Append>
        <Append
            identifier="document-shadow"
            type=".txt"
        >
            ![[ document-shadow.txt ]]
        </Append>
        <Append
            identifier="document-shadow-complete"
            type=".txt"
        >
            ![[ document-shadow-complete.txt ]]
        </Append>
        <Append
            identifier="layers-shadow"
            type=".ts"
        >
            ![[ layers-shadow.ts ]]
        </Append>
        <Append
            identifier="artboards-shadow"
            type=".ts"
        >
            ![[ artboards-shadow.ts ]]
        </Append>
        <Append
            identifier="page-items-shadow"
            type=".ts"
        >
            ![[ page-items-shadow.ts ]]
        </Append>
        <Append
            identifier="layer-shadow"
            type=".ts"
        >
            ![[ layer-shadow.ts ]]
        </Append>
        <Append
            identifier="artboard-pageitem-classes"
            type=".ts"
        >
            ![[ artboard-pageitem-classes.ts ]]
        </Append>
        <Append
            identifier="group-path-items"
            type=".ts"
        >
            ![[ group-path-items.ts ]]
        </Append>
        <Append
            identifier="pathpoint-compound"
            type=".ts"
        >
            ![[ pathpoint-compound.ts ]]
        </Append>
        <Append
            identifier="page-items-1"
            type=".ts"
        >
            ![[ page-items-1.ts ]]
        </Append>
        <Append
            identifier="raster-placed-expanded"
            type=".txt"
        >
            ![[ raster-placed-expanded.txt ]]
        </Append>
        <Append
            identifier="embed-graph-items"
            type=".ts"
        >
            ![[ embed-graph-items.ts ]]
        </Append>
        <Append
            identifier="graph-mesh-plugin-items"
            type=".ts"
        >
            ![[ graph-mesh-plugin-items.ts ]]
        </Append>
        <Append
            identifier="factory-tests"
            type=".ts"
        >
            ![[ factory-tests.ts ]]
        </Append>
    </Chapter>
);

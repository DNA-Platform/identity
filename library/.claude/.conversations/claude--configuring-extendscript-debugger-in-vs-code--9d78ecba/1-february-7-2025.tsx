import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 February 2025](2025-02-07)</Date>
        </Dated>
        <Title>[[ 7 February 2025 ]]</Title>
        <Message
            at="2025-02-07T14:41:30.626238Z"
        >
            <Origin>2ab3baa3-eb12-4a99-bb28-c56d81ccb1bf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>These are the docs for a extendscript debugger. Here is the debug script:</Paragraph>
            <Paragraph>
                &#123; "version": "0.2.0", "configurations": &#91; &#123; "type": "extendscript-debug", "request": "launch",
                "name": "Run File in Illustrator", "script": "$&#123;file&#125;", "preLaunchTask": "npm run build",
                "engineName": "main", "hostAppSpecifier": "illustrator-29.064", // From Help/About Illustrator and always
                end with 0.64 &#125; &#93; &#125;
            </Paragraph>
            <Paragraph>
                Instead of running $&#123;file&#125; I want it to open the equivalent jsx file in the build foler. Is there
                a way I can do this? I am being sent in so many directions
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
            at="2025-02-07T14:41:37.319619Z"
        >
            <Origin>f0623665-1cdf-4443-b916-c3bdc8922d70</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Based on the documentation and your debug configuration, you can modify the "script" field to point to the
                build folder by using VS Code variables. Here's how:
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
            "script": "\${workspaceFolder}/build/\${relativeFilename}",
            "preLaunchTask": "npm run build",
            "engineName": "main",
            "hostAppSpecifier": "illustrator-29.064"
        }
    ]
}`}
            </CodeBox>
            <Paragraph>
                If your build folder has a different structure (e.g., if it changes the extension to .jsx), you can use:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`"script": "\${workspaceFolder}/build/\${fileBasenameNoExtension}.jsx"`}
            </CodeBox>
            <Paragraph>Key VS Code variables:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $&#123;workspaceFolder&#125;
                    </Word>: Path to your project root
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $&#123;fileBasenameNoExtension&#125;
                    </Word>: Current file name without extension
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $&#123;relativeFilename&#125;
                    </Word>: File name relative to workspace root
                </Line>
            </Paragraph>
            <Paragraph>Make sure your build task generates files in the correct location that matches this path.</Paragraph>
        </Message>
        <Message
            at="2025-02-07T14:43:09.157828Z"
        >
            <Origin>4fb0ff64-5fa1-4a73-afe8-dabe61c60fdf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>That doesn't work and fails silently so I don't know why or what file it tried to run</Paragraph>
        </Message>
        <Message
            at="2025-02-07T14:43:14.960618Z"
        >
            <Origin>c6b84bc0-9987-4b07-b01d-222418d88898</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let's debug this. We can modify the configuration to log information using <Word>
                    <Verbatim />
                    console.log()
                </Word> to see what path it's trying to use. Add this to your VS Code settings.json:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`{
    "extendscript.advanced.debugLevel": 2
}`}
            </CodeBox>
            <Paragraph>Then modify your launch configuration:</Paragraph>
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
            "script": "\${command:extension.extendscript-debug.getScriptPath}",
            "preLaunchTask": "npm run build",
            "engineName": "main",
            "hostAppSpecifier": "illustrator-29.064"
        }
    ]
}`}
            </CodeBox>
            <Paragraph>
                This will show what file path it's attempting to use. Also, can you share your project structure and build
                script? That would help diagnose where the path resolution is failing.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
    </Chapter>
);

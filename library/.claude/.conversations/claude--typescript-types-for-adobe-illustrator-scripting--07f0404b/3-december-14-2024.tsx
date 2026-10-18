import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 December 2024](2024-12-14)</Date>
        </Dated>
        <Title>[[ 14 December 2024 ]]</Title>
        <Message
            at="2024-12-14T18:57:20.033446Z"
        >
            <Origin>1f12d3f7-6996-4169-9757-e6ee8d9c3412</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do you see how this code injects the plugindir and document dir in every file?</Paragraph>
            <Paragraph>In each file, I want to look for: declare var SCRIPTS_PATH: string</Paragraph>
            <Paragraph>And: declare var DOCUMENTS_PATH: string;</Paragraph>
            <Paragraph>When it finds the first, it replaces it with: var SCRIPTS_PATH = "&#123;pluginDir&#125;";</Paragraph>
            <Paragraph>
                When it finds the second it replces it with: var DOCUMENTS_PATH = "&#123;documentsDir&#125;";
            </Paragraph>
            <Paragraph>I want it to do this instead of adding it to every file. Make sense?</Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-12-14T18:57:46.548489Z"
        >
            <Origin>3c219e99-a3d6-46c2-9fd3-64b3245b9800</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I understand! You want to modify the <Word>
                    <Verbatim />
                    processImports
                </Word> function to look for those declarations and replace them instead of adding them to every file.
                Here's the modified version:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}function processImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/"use strict";\\n/, '');

    let output = '';
    const referenceRegex = /\\/\\/\\/?\\s*<reference path="([^"]+)"\\s*\\/>/g;

    // Match all reference statements at the top of the file
    let match;
    let includePaths = [];
    while ((match = referenceRegex.exec(content)) !== null) {
        let includePath = match[1].replace(/^\\.\\//, '').replace('.ts', '.jsx');
        includePaths.push(includePath);
    }

    // Add each include statement to the output
    if (includePaths.length > 0) {
        includePaths.forEach((path) => {
            output += \`#include \${path}\\n\`;
        });
        output += '\\n'; // Separate includes from the rest of the content
    }

    // Replace declarations with actual values
    content = content
        .replace(/declare\\s+var\\s+SCRIPTS_PATH\\s*:\\s*string\\s*;/, 
            \`var SCRIPTS_PATH = "\${pluginDir.replace(/\\\\/g, '\\\\\\\\')}";\`)
        .replace(/declare\\s+var\\s+DOCUMENTS_PATH\\s*:\\s*string\\s*;/, 
            \`var DOCUMENTS_PATH = "\${documentsDir.replace(/\\\\/g, '\\\\\\\\')}";\`);

    // Remove reference statements from content and append remaining content
    output += content.replace(referenceRegex, '');

    return output;
}`}
            </CodeBox>
            <Paragraph>The key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Removed the direct addition of SCRIPTS_PATH and DOCUMENTS_PATH</Line>
                <Line>
                    Added regex replacements that look for the declare statements and replace them with the actual variable
                    declarations
                </Line>
                <Line>Still escapes backslashes in the paths</Line>
                <Line>Only adds these variables if they were declared in the original file</Line>
            </Paragraph>
            <Paragraph>
                This way, only files that actually declare these variables will get the replacements, rather than adding
                them to every file.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-14T19:03:02.801522Z"
        >
            <Origin>c4f29c31-f8bf-47d0-b0df-2caac0dc3922</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Actually it can't quite be that because it has to work on JavaScript. Assume these are the values:
            </Paragraph>
            <Paragraph>var SCRIPTS_PATH = ""; var DOCUMENTS_PATH: string = "";</Paragraph>
            <Paragraph>
                Allow for variable whitespace everywhere in the regex but it has to be on one line. Don't worry about what
                commes after the equals. It could match anything -&gt; (; , any whitspace, endof line)
            </Paragraph>
        </Message>
        <Message
            at="2024-12-14T19:03:26.629068Z"
        >
            <Origin>45d33401-2a6f-45cd-8143-ebefc8cc4b0a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the regex to match those JavaScript variable declarations with flexible whitespace:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}content = content
    .replace(/var\\s+SCRIPTS_PATH\\s*=\\s*.+?(?=[;\\s]|$)/, 
        \`var SCRIPTS_PATH = "\${pluginDir.replace(/\\\\/g, '\\\\\\\\')}"\`)
    .replace(/var\\s+DOCUMENTS_PATH\\s*=\\s*.+?(?=[;\\s]|$)/, 
        \`var DOCUMENTS_PATH = "\${documentsDir.replace(/\\\\/g, '\\\\\\\\')}"\`)`}
            </CodeBox>
            <Paragraph>Breaking down the regex:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        var\s+
                    </Word> - matches 'var' followed by one or more whitespace
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        SCRIPTS_PATH\s*
                    </Word> - matches the variable name followed by optional whitespace
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        =\s*
                    </Word> - matches equals sign with optional whitespace
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        .+?
                    </Word> - matches anything (non-greedy) until...
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (?=&#91;;\s&#93;|$)
                    </Word> - looks ahead for semicolon, whitespace, or end of line
                </Line>
            </Paragraph>
            <Paragraph>This will match declarations like:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`var SCRIPTS_PATH="whatever";
var SCRIPTS_PATH = '';
var SCRIPTS_PATH=     "anything"   
var SCRIPTS_PATH = ""`}
            </CodeBox>
            <Paragraph>Let me know if you need any adjustments to the pattern!</Paragraph>
        </Message>
        <Message
            at="2024-12-14T19:04:35.996480Z"
        >
            <Origin>518a4684-9f17-4321-b5d5-49ed1ac958eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Megnificent</Paragraph>
        </Message>
        <Message
            at="2024-12-14T19:04:39.917021Z"
        >
            <Origin>d842b760-99c1-47ad-9362-c7372f703715</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Glad I could help! The regex pattern is nicely flexible while still being precise about what it's replacing.
                And using a non-greedy match with a lookahead ensures it won't accidentally consume too much of the line.
                Would you like me to suggest any other build script improvements while we're at it?
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

import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Package..json Command Registration v1 ]]</Title>
        <CodeBox
            language="json"
        >
            {`${''}
{
    "contributes": {
        "commands": [
            {
                "command": "extension.addDollarToMembers",
                "title": "Add $ to Members"
            }
        ],
        "menus": {
            "editor/context": [
                {
                    "when": "editorLangId == typescript",
                    "command": "extension.addDollarToMembers",
                    "group": "1_modification"
                }
            ]
        }
    },
    "extensionDependencies": [
        "vscode.typescript-language-features"
    ]
}
`}
        </CodeBox>
    </Chapter>
);

import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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

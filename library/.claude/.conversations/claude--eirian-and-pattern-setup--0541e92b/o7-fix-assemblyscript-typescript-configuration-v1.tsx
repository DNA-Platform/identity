import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fix AssemblyScript TypeScript Configuration v1 ]]</Title>
        <CodeBox
            language="json"
        >
            {`${''}// assembly/tsconfig.json
// This should be INSIDE the assembly folder, not at root
{
  "extends": "assemblyscript/std/assembly.json",
  "include": [
    "./**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}`}
        </CodeBox>
    </Chapter>
);

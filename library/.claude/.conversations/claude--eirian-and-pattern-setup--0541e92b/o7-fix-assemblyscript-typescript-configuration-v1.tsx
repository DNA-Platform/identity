import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

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

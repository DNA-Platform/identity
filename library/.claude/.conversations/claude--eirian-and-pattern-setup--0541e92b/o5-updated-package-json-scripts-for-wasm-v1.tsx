import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated package..json scripts for WASM v1 ]]</Title>
        <CodeBox
            language="json"
        >
            {`{
  "scripts": {
    "dev": "npm run asbuild && next dev",
    "build": "npm run asbuild:release && next build",
    "start": "next start",
    "load": "npx serve build",
    "lint": "next lint",
    "export": "next build",
    "asbuild": "asc assembly/index.ts --target release",
    "asbuild:release": "asc assembly/index.ts --target release --optimize",
    "asbuild:debug": "asc assembly/index.ts --target debug"
  }
}`}
        </CodeBox>
    </Chapter>
);

import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated package..json scripts with preview v1 ]]</Title>
        <CodeBox
            language="json"
        >
            {`{
  "scripts": {
    "dev": "npm run asbuild && next dev",
    "build": "npm run asbuild:release && next build",
    "build:single": "npm run build && node scripts/bundle.js",
    "preview:bundle": "npx serve . -l 3001",
    "preview:python": "python -m http.server 3001",
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

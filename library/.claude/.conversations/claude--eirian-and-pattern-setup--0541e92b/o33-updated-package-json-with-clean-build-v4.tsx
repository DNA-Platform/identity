import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated package..json with clean build v4 ]]</Title>
        <CodeBox
            language="json"
        >
            {`{
  "scripts": {
    "dev": "npm run asbuild && next dev",
    "clean": "npx rimraf build .next",
    "build": "npm run asbuild:release && next build",
    "build:single": "npm run clean && npm run build && node scripts/bundle.js",
    "preview": "npx serve . -l 3001",
    "start": "next start",
    "lint": "next lint",
    "asbuild": "asc assembly/index.ts --target release",
    "asbuild:release": "asc assembly/index.ts --target release --optimize",
    "asbuild:debug": "asc assembly/index.ts --target debug"
  }
}`}
        </CodeBox>
    </Chapter>
);

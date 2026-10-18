import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Commands to Fix Setup Issues v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Commands to Fix Setup Issues at version 1</Heading>
            <Heading>Fix Setup Issues for DNA-Patternity</Heading>
            <Heading>Step 1: Install Node packages</Heading>
            <CodeBox
                language="bash"
            >
                {`cd dna-patternity
npm install`}
            </CodeBox>
            <Paragraph>This will install:</Paragraph>
            <Paragraph>
                <List />
                <Line>next</Line>
                <Line>react</Line>
                <Line>react-dom</Line>
                <Line>styled-components</Line>
                <Line>All TypeScript type definitions</Line>
                <Line>All other dependencies in package.json</Line>
            </Paragraph>
            <Heading>Step 2: Verify AssemblyScript is installed</Heading>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev assemblyscript`}
            </CodeBox>
            <Heading>Step 3: Build the WASM module</Heading>
            <CodeBox
                language="bash"
            >
                {`npm run asbuild`}
            </CodeBox>
            <Paragraph>This should create:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        /build/release.wasm
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        /build/release.wat
                    </Word> (text format)
                </Line>
            </Paragraph>
            <Heading>Step 4: Check if everything is working</Heading>
            <CodeBox
                language="bash"
            >
                {`npm run dev`}
            </CodeBox>
            <Paragraph>This should:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Build the WASM</Line>
                <Line>Start Next.js dev server</Line>
                <Line>Open on http://localhost:3000</Line>
            </Paragraph>
            <Heading>If you still see errors after npm install:</Heading>
            <Paragraph>Sometimes VSCode's TypeScript server needs a restart:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Press <Word>
                        <Verbatim />
                        Ctrl+Shift+P
                    </Word> (or <Word>
                        <Verbatim />
                        Cmd+Shift+P
                    </Word> on Mac)
                </Line>
                <Line>Type "TypeScript: Restart TS Server"</Line>
                <Line>Press Enter</Line>
            </Paragraph>
            <Heading>Expected folder structure after setup:</Heading>
            <CodeBox>
                {`/dna-patternity
  ├── /node_modules        # Created by npm install
  ├── /assembly           # Created by asinit
  │   └── index.ts
  ├── /build              # Created by asbuild
  │   ├── release.wasm
  │   └── release.wat
  ├── /src                # Your Next.js app
  │   └── /app
  │       └── page.tsx
  ├── package.json
  ├── next.config.ts
  ├── tsconfig.json
  └── asconfig.json`}
            </CodeBox>
            <Heading>Quick check - your package.json should have:</Heading>
            <CodeBox
                language="json"
            >
                {`{
  "dependencies": {
    "next": "15.4.5",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "styled-components": "^6.1.19"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/styled-components": "^5.1.34",
    "assemblyscript": "^0.27.0",
    "typescript": "^5"
  }
}`}
            </CodeBox>
        </Section>
    </Chapter>
);

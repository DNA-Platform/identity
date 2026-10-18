import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Card: Setup Next..js Pattern App with Static Export v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Card: Setup Next.js Pattern App with Static Export at version 1</Heading>
            <Heading>Card: Setup Next.js Pattern App with Static Export</Heading>
            <Heading>Goal</Heading>
            <Paragraph>
                Create a Next.js app configured for static export that will eventually compile to a single HTML file.
            </Paragraph>
            <Heading>Setup Commands</Heading>
            <CodeBox
                language="bash"
            >
                {`npx create-next-app@latest pattern-app --typescript --tailwind --app
cd pattern-app`}
            </CodeBox>
            <Heading>Configure for Static Export</Heading>
            <Paragraph>
                Update <Word>
                    <Verbatim />
                    next.config.ts
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // No basePath needed - this will be a standalone file
}

export default nextConfig`}
            </CodeBox>
            <Heading>Update package.json scripts</Heading>
            <CodeBox
                language="json"
            >
                {`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "preview": "npx serve build",
    "export": "next build"
  }
}`}
            </CodeBox>
            <Heading>Create Basic Pattern Page</Heading>
            <Paragraph>
                Create <Word>
                    <Verbatim />
                    app/page.tsx
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`export default function PatternApp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <svg width="600" height="600" viewBox="0 0 600 600">
        {/* Temporary: just show one triangle */}
        <path d="M 10,30 L 20,10 L 30,30 Z" fill="black" />
      </svg>
    </div>
  )
}`}
            </CodeBox>
            <Heading>Remove Unnecessary Files</Heading>
            <Paragraph>
                <List />
                <Line>
                    Delete <Word>
                        <Verbatim />
                        app/globals.css
                    </Word> (we'll inline styles)
                </Line>
                <Line>
                    Delete <Word>
                        <Verbatim />
                        app/layout.tsx
                    </Word> (single page app)
                </Line>
                <Line>Delete any example pages</Line>
            </Paragraph>
            <Heading>Test</Heading>
            <CodeBox
                language="bash"
            >
                {`npm run dev
# See triangle at localhost:3000

npm run build
# Creates build/ folder

npm run preview  
# Test static build at localhost:3000`}
            </CodeBox>
            <Heading>Result</Heading>
            <Paragraph>
                <List />
                <Line>Working Next.js app with static export</Line>
                <Line>
                    Outputs to <Word>
                        <Verbatim />
                        build/
                    </Word> folder
                </Line>
                <Line>Ready for pattern logic</Line>
            </Paragraph>
        </Section>
    </Chapter>
);

import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Debugging the ..∕registry Import Issue v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Debugging the .∕registry Import Issue at version 1</Heading>
            <Heading>Debugging the ./registry Import Issue</Heading>
            <Heading>Potential Causes and Solutions</Heading>
            <Heading>1. File Extension Issue</Heading>
            <Paragraph>
                TypeScript might be looking for <Word>
                    <Verbatim />
                    .ts
                </Word> instead of <Word>
                    <Verbatim />
                    .tsx
                </Word>. Try this import explicitly:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// In app/layout.tsx
import StyledComponentsRegistry from './registry.tsx';`}
            </CodeBox>
            <Heading>2. TypeScript Cache Issue</Heading>
            <Paragraph>Clear TypeScript and Next.js caches:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Stop the dev server first, then:
rm -rf .next
rm -rf node_modules/.cache
rm -rf library/.public-temp`}
            </CodeBox>
            <Paragraph>Then in VS Code:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Cmd+Shift+P
                    </Word> → "TypeScript: Restart TS Server"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        Cmd+Shift+P
                    </Word> → "Developer: Reload Window"
                </Line>
            </Paragraph>
            <Heading>3. Check registry.tsx Export</Heading>
            <Paragraph>
                Verify that <Word>
                    <Verbatim />
                    registry.tsx
                </Word> has a default export. Based on your file (document index 63), it does have:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export default function StyledComponentsRegistry`}
            </CodeBox>
            <Paragraph>This looks correct.</Paragraph>
            <Heading>4. Try Absolute Import</Heading>
            <Paragraph>Since you have path aliasing set up, you could try:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Create the registry at: code/components/StyledComponentsRegistry.tsx
// Then in layout.tsx:
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';`}
            </CodeBox>
            <Heading>5. Simpler Test</Heading>
            <Paragraph>To isolate the issue, create a minimal test file in the app directory:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    app/test.tsx:
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export default function Test() {
  return <div>Test</div>;
}`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Then in app/layout.tsx:
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import Test from './test';`}
            </CodeBox>
            <Paragraph>If this also fails, it's a TypeScript configuration issue.</Paragraph>
            <Heading>6. Check for Hidden Characters</Heading>
            <Paragraph>Sometimes files can have hidden characters or wrong encoding. Try:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Delete the import line completely</Line>
                <Line>Retype it manually (don't copy-paste)</Line>
                <Line>Make sure there are no special characters</Line>
            </Paragraph>
            <Heading>7. Verify File Encoding</Heading>
            <CodeBox
                language="bash"
            >
                {`file app/registry.tsx
# Should show: UTF-8 Unicode text`}
            </CodeBox>
            <Heading>8. Try Named Export Instead</Heading>
            <Paragraph>
                Change <Word>
                    <Verbatim />
                    registry.tsx
                </Word> to use named export:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // ... rest of the code
}`}
            </CodeBox>
            <Paragraph>Then import as:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import { StyledComponentsRegistry } from './registry';`}
            </CodeBox>
            <Heading>9. Check tsconfig.json Include Pattern</Heading>
            <Paragraph>Your tsconfig has:</Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}"include": [
  "**/*.ts",
  "**/*.tsx",
  ".next/types/**/*.ts",
  "next-env.d.ts",
  "library/.public-temp/types/**/*.ts"
]`}
            </CodeBox>
            <Paragraph>
                This should include <Word>
                    <Verbatim />
                    app/registry.tsx
                </Word>. But try being explicit:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}"include": [
  "app/**/*.tsx",
  "code/**/*.tsx",
  "**/*.ts",
  "**/*.tsx",
  // ... rest
]`}
            </CodeBox>
            <Heading>10. Next.js App Directory Setting</Heading>
            <Paragraph>
                Make sure Next.js knows to use the app directory. Your <Word>
                    <Verbatim />
                    next.config.ts
                </Word> looks fine, but verify the Next.js version in <Word>
                    <Verbatim />
                    package.json
                </Word> is 13.4 or higher (you have 15.4.5, which is good).
            </Paragraph>
            <Heading>Most Likely Solution</Heading>
            <Paragraph>Based on the setup, the most likely issue is TypeScript server cache. Try this sequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Stop the dev server
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Run these commands:
                    </Word>
                </Line>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`rm -rf .next
rm -rf node_modules/.cache
npx tsc --noEmit`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        In VS Code:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Close all tabs</Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            Cmd+Shift+P
                        </Word> → "TypeScript: Restart TS Server"
                    </Line>
                    <Line>
                        Open <Word>
                            <Verbatim />
                            app/layout.tsx
                        </Word> fresh
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Try the import with explicit extension:
                    </Word>
                </Line>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import StyledComponentsRegistry from './registry.js';`}
            </CodeBox>
            <Paragraph>
                (Yes, <Word>
                    <Verbatim />
                    .js
                </Word> not <Word>
                    <Verbatim />
                    .tsx
                </Word> - this is how ES modules work)
            </Paragraph>
            <Heading>If Nothing Works - Workaround</Heading>
            <Paragraph>Just put the StyledComponentsRegistry directly in layout.tsx temporarily:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}'use client'

import './globals.css';
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}`}
            </CodeBox>
        </Section>
    </Chapter>
);

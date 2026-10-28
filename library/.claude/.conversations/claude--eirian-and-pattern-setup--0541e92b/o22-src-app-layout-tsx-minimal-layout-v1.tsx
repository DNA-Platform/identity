import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ src∕app∕layout..tsx - Minimal Layout v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Pattern</title>
      </head>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}`}
        </CodeBox>
    </Chapter>
);

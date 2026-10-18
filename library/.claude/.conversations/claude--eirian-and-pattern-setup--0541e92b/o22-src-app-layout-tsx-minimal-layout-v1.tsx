import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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

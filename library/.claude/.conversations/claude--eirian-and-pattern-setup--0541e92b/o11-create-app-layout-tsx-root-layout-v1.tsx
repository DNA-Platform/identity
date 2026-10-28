import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Create app∕layout..tsx - Root Layout v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/layout.tsx
export const metadata = {
  title: 'DNA-Patternity',
  description: 'Pattern generation with WASM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
        </CodeBox>
    </Chapter>
);

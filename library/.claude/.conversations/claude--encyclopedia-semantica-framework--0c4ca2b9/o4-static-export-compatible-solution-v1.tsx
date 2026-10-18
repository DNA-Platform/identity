import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Static Export Compatible Solution v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Static Export Compatible Solution at version 1</Heading>
            <Heading>Static Export Compatible Solution for GitHub Pages</Heading>
            <Heading>The Problem</Heading>
            <Paragraph>
                <List />
                <Line>
                    You're using <Word>
                        <Verbatim />
                        output: 'export'
                    </Word> for static site generation
                </Line>
                <Line>Styled-components' server-side rendering features don't work with static export</Line>
                <Line>
                    The registry pattern with <Word>
                        <Verbatim />
                        useServerInsertedHTML
                    </Word> is for SSR, not SSG
                </Line>
            </Paragraph>
            <Heading>Solution 1: Remove Styled-Components Registry (Simplest)</Heading>
            <Paragraph>
                Since you're doing static export, you don't need the registry at all. Just use styled-components directly:
            </Paragraph>
            <Heading>app/layout.tsx</Heading>
            <CodeBox
                language="tsx"
            >
                {`import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
            </CodeBox>
            <Paragraph>Keep it exactly as you have it now - no registry needed!</Paragraph>
            <Heading>Solution 2: Replace Styled-Components with CSS Modules</Heading>
            <Paragraph>For better static export compatibility, convert styled-components to CSS modules:</Paragraph>
            <Heading>Instead of (in Rose.tsx):</Heading>
            <CodeBox
                language="tsx"
            >
                {`const RightAlignedRose = styled.img<{ offsetX: string; offsetY: string }>\`
  position: absolute;
  top: calc(50% + \${(props) => props.offsetY});
  // ...
\`;`}
            </CodeBox>
            <Heading>Use CSS Modules:</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    code/writing/interactive/Rose.module.css:
                </Word>
            </Paragraph>
            <CodeBox
                language="css"
            >
                {`.rightAlignedRose {
  position: absolute;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  transform-origin: center;
}

.rightAlignedRose:hover {
  transform: translate(50%, -50%) scale(1.1);
}

.leftAlignedRose {
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
}

.leftAlignedRose:hover {
  transform: scale(1.1);
}

.inlineRose {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin: 0 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.inlineRose:hover {
  transform: scale(1.2) rotate(10deg);
}`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    code/writing/interactive/Rose.tsx:
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import React from 'react';
import { Work } from '../../base/Work';
import { Author } from '../references/Author';
import styles from './Rose.module.css';

export class Rose extends Work {
  alignment: 'left' | 'right' | 'inline' = 'inline';
  target: string = 'https://dna.love';
  from?: Author;
  hovered: boolean = false;
  offsetX: string = '0px';
  offsetY: string = '0px';
  padding: string = '0px';
  
  getSrc(): string {
    return this.hovered
      ? '/images/icons/dna-rose-g1-fill-10-icon.png'
      : '/images/icons/dna-rose-g1-icon.png';
  }
  
  handleClick = (): void => {
    if (this.target.startsWith('http')) {
      window.open(this.target, '_blank');
    } else {
      window.location.href = this.target;
    }
  }
  
  handleMouseEnter = (): void => {
    this.hovered = true;
  }
  
  handleMouseLeave = (): void => {
    this.hovered = false;
  }
  
  component(): React.ReactNode {
    const commonProps = {
      src: this.getSrc(),
      alt: "DNA Rose - A symbol`}
            </CodeBox>
        </Section>
    </Chapter>
);

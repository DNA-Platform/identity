import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Spread ]]</Title>
        <Section>
            <Heading>The words beside the file</Heading>
            <Paragraph>
                In this manual a chapter and its file are read together. The spread
                is <Means>$[[ the sidebar ]]( ./The Sidebar )</Means> with one rule added: the open page is two
                columns, the words in one and the file in the other. On a narrow screen the file goes under the
                words.
            </Paragraph>
            <Paragraph>
                This manual's book file says the spread is its sidebar. No other book has it yet.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);

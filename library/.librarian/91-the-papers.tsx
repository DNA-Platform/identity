import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Papers ]]</Title>
        <Section>
            <Heading>Three papers</Heading>
            <Paragraph>
                <Means>$[[ The sheet ]]( ./The Sheet )</Means> comes on three papers: the warm paper of a book, a
                night, and a plain white. I change between them at the top of the page.
            </Paragraph>
            <Paragraph>
                Each paper is a theme, <Means>$[[ the library's own ]]( Dougs Reference Manual / The Theme )</Means> with
                other values. A change of paper gives the book another theme from outside, in front of its own, and
                no chapter knows which paper it is on.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The papers' file</Heading>
            <Paragraph>
                <Code identifier="code" />
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

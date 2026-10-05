import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Pages ]]</Title>
        <Section>
            <Heading>What a page is</Heading>
            <Paragraph>
                A book of mine shows one chapter at a time. Its cover and its table of contents stay in view,
                since they are how I know where I am and where I can go. Every other chapter is a page, and one
                page is open.
            </Paragraph>
            <Paragraph>
                The open page is the chapter the address names. At the book's own address no chapter is named,
                and the page that opens is the synopsis, which says what the book is. The pages mark the book
                when it stands at its front like that, so a frame can show more there. An address may also name
                a place inside a chapter, a heading, and then the page that holds that place opens.
            </Paragraph>
            <Paragraph>
                The pages are a class under the framework's own, and they change two of its answers: which
                chapters are pages, and which page is open. Where the open page stands on the screen is not
                theirs to say. That belongs to <Means>$[[ ./The Frames ]]</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The pages' file</Heading>
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

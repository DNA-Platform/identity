import { Append, Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Thread ]]</Title>
        <Paragraph>
            <Brief />
            The conversation as it stood on the screen, which is one path through a tree, and the count of what
            was left on other paths.
        </Paragraph>
        <Section>
            <Heading>A tree, and the path a reader sees</Heading>
            <Paragraph>
                Every time I edit a message or ask for another answer, the conversation branches, and what the
                application shows me is never the tree but one path through it, from the first thing said to
                whichever end I was last standing on. Each message carries the one it was said after, so the path
                is a walk: take the latest message nothing answers, follow the parents to the root, and turn it
                around. That path is the conversation as far as a reader is concerned, and the importer says what
                it left behind rather than rounding it off: a conversation of a hundred and six messages that
                shows eighty-four has twenty-two on other paths, and the cover says so.
            </Paragraph>
        </Section>
        <Append
            identifier="thread"
            type=".ts"
        >
            ![[ thread.ts ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);

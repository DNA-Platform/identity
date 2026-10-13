import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Action and the Result ]]</Title>
        <Paragraph>
            <Brief />
            What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file,
            as a writing of its own, and what came back as another.
        </Paragraph>
        <Section>
            <Heading>Done, and what came back</Heading>
            <Paragraph>
                A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code
                or read a file, the message holds an action, one line saying what was done in plain words, and
                after it a result, what came back, cut to its first four thousand characters. Neither is a
                paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its
                own, a paragraph in shape and not in meaning, which the page can fold, show as the application
                does, or count. They are Claude's, so they stand in this manual and not
                in <Means>$[[ the library's ]]( Dougs Reference Manual / The Conversation )</Means>, where a message
                is said to be a speaker, a time and what was said.
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

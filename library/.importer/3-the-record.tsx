import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Record ]]</Title>
        <Paragraph>
            <Brief />
            One record for every source: a conversation with its messages as a tree of blocks, and a project with
            its documents and its memory; each source a reader into it, and nothing after the reading knows a
            source's words.
        </Paragraph>
        <Section>
            <Heading>The seam</Heading>
            <Paragraph>
                Every source I have spoken to Claude through is packaged its own way, and every one holds the same
                things: a conversation with a name and its times, its messages in a tree, since a message edited
                or asked again makes a branch, each message by someone at an instant and made of blocks; and a
                project with a name, a description, its knowledge files and what Claude remembers of it. The
                record is those things in this library's words, and a reader is the forty lines that rename one
                source's words into them, once. The stages after the record never see a source, so the second
                source, the sessions of Claude Code on this machine, is one more reader and nothing else moves.
            </Paragraph>
            <Paragraph>
                The Claude export's reader streams the one array of conversations, cutting each loose as it
                closes, so what is held at any moment is one conversation and not the archive, and reads the
                small archives by their directory; the whole export is read in under twenty seconds without a
                dependency. The export's own names, <Means>$[[ the ones its schema gives ]]( ./The Export )</Means>,
                appear in the reader and nowhere else.
            </Paragraph>
        </Section>
        <Append
            identifier="record"
            type=".ts"
        >
            ![[ record.ts ]]
        </Append>
        <Append
            identifier="claude"
            type=".ts"
        >
            ![[ claude.ts ]]
        </Append>
        <Append
            identifier="samples"
            type=".ts"
        >
            ![[ samples.ts ]]
        </Append>
    </Chapter>
);

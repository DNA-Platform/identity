import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Artifact and the Attachment ]]</Title>
        <Paragraph>
            <Brief />
            A file Claude made in a message and a file given to him in one, each named where it entered the
            conversation, the file itself standing beside the chapter.
        </Paragraph>
        <Section>
            <Heading>Made, and given</Heading>
            <Paragraph>
                An artifact is a file Claude made as he answered, a document, a page, a program, and went on
                changing as the conversation went on. The conversation's chapter holds an artifact where each
                version was made, one line naming it, and the file itself stands beside the chapter, every version
                and the last under its own name, listed at the chapter's foot
                as <Means>$[[ the listing ]]( Dougs Reference Manual / The Listing )</Means> shows files. An
                attachment is a file given to Claude in a message, pasted or uploaded; the chapter holds an
                attachment naming it, and the file stands beside the chapter when the export carried its text,
                which it does for what was pasted and not for what was uploaded. Both are writings of their own
                and not paragraphs of what was said, as <Means>$[[ an action and its result ]]( ./The Action and the Result )</Means> are.
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

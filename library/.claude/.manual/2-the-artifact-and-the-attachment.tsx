import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Artifact and the Attachment ]]</Title>
        <Paragraph>
            <Brief />
            A file Claude made in a message and a file given to him in one, each a figure where it entered the
            conversation, showing the file that stands beside the chapter.
        </Paragraph>
        <Section>
            <Heading>Made, and given</Heading>
            <Paragraph>
                An artifact is a file Claude made as he answered, a document, a page, a program, and went on
                changing as the conversation went on. The conversation's chapter holds an artifact where each
                version was made: a figure, as a code listing is, that names the version's file beside the
                chapter and shows it under one line saying what was done; every version stands beside the
                chapter and the last under its own name, each listed at the chapter's foot
                as <Means>$[[ the listing ]]( Dougs Reference Manual / The Listing )</Means> shows files. An
                attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way,
                naming the file when the export carried its text, which it does for what was pasted and not for
                what was uploaded, and then the line alone. Both are writings of their own and not paragraphs
                of what was said, as <Means>$[[ an action ]]( ./The Action and the Result )</Means> is; each is
                a figure, since what it shows is the file.
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

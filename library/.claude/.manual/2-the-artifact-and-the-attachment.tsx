import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Artifact and the Attachment ]]</Title>
        <Paragraph>
            <Brief />
            A file Claude made in a message and a file given to him in one, each a figure where it entered the
            conversation: a card for the artifact and a chip for the file given, each opening in the pane.
        </Paragraph>
        <Section>
            <Heading>Made, and given</Heading>
            <Paragraph>
                An artifact is a file Claude made as he answered, a document, a page, a program, and went on
                changing as the conversation went on. The day's chapter holds an artifact where each version
                was made: a figure, as a code listing is, that names the version's file beside the chapter and
                is drawn as the application draws one, a card with a glyph for a document or for code, the
                artifact's title and a line to open it; every version's file stands beside the chapter and the
                last under its own name. Each version is also a chapter of the conversation, said to be a
                version, its document converted to writing at import under an opaque section and its code set
                in a code box; the card's caption refers to that chapter, and pressing the card opens it
                in <Means>$[[ the pane ]]( ./The Pane )</Means>, where the versions can be walked. An attachment
                is a file given to Claude in a message, pasted or uploaded: a figure the same way, drawn as a
                chip at the head of the words it was given with, naming the file when the export carried its
                text, which it does for what was pasted and not for what was uploaded, and opening in the same
                pane. Both are writings of their own and not paragraphs of what was said,
                as <Means>$[[ an action ]]( ./The Action and the Result )</Means> is; each is a figure, since
                what it shows is the file.
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

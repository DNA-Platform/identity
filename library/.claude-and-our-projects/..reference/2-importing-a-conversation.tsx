import { $Article } from '../../..reference/.book';
import { Fold,Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';

export default class $ImportingAConversation extends $Article {
    print() {
        return (
            <Document>
                <Title>Importing a Conversation</Title>
                <Section>
                    <Heading>[[[ The projects are in the conversations ]]]</Heading>
                    <Paragraph>
                        A reference stops escaping when it reaches a book that is here. That is the last chapter and I
                        stand by it &mdash; but it has a consequence I did not much want, and this chapter is me
                        paying for it. A card that points at a conversation sitting in an export is a reference that
                        never stops escaping at all. It leaves the library and does not come back.
                    </Paragraph>
                    <Paragraph>
                        Semantic Reference Theory did not get written and then discussed. It got discussed and is
                        still being written, and the same is true of nearly everything else I work on with Claude. The
                        projects live in the conversations. There are four hundred and sixty-five of them sitting in
                        an export, and every one I care about is a piece of a project this library is supposed to be
                        about.
                    </Paragraph>
                    <Paragraph>
                        So moving them in is not archiving. It is putting the work where the work already is. A
                        library that talks about a project while the project lives somewhere else is a library of
                        summaries, and I did not build this to keep summaries.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>[[[ What moving in turned out to require ]]]</Heading>
                    <Paragraph>
                        Nearly everything this application can do, it can do because a conversation needed it first.
                        A conversation is not an article, so the library had to learn what a <Italics>dialogue</Italics>
                        is, and an <Italics>exchange</Italics>, and what it means for someone to be a participant in
                        one. None of that existed because nothing here had ever been a record of two people talking.
                    </Paragraph>
                    <Paragraph>
                        And a conversation is enormous. One of them outweighs every other book I have written put
                        together, and there are four hundred and sixty-four more. So chapters have to come and go
                        rather than all arrive at once, which is a thing a book decides and not a chapter.
                    </Paragraph>
                    <Paragraph>
                        <Bold>And it required an importer</Bold> — because an export is markdown and a library is
                        writing, and nothing here reads a string at the moment a page is drawn. Something had to
                        stand between the two and do the conversion once, on the way in, so that what lands is
                        ordinary writing I could have typed.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>[[[ Which is why the code is in here too ]]]</Heading>
                    <Paragraph>
                        The importer is not a script beside the library. It is a book in it, and every chapter of that
                        book is about the code standing next to it. I wanted to be able to read how a conversation
                        gets in while looking at the thing that does it, in the same place, in the same hand.
                    </Paragraph>
                    <Paragraph>
                        That turned out to need more than a folder. A chapter has to be able to say where its code
                        goes, the library has to be able to show me a source view of itself, and the binder has to
                        refuse to build when a file in here is neither a book, a chapter, nor some chapter&rsquo;s
                        resource. A library closed under its own code is a different kind of library, and it is the
                        one I want.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>[[[ What the first one turned out to hold ]]]</Heading>
                    <Paragraph>
                        <Italics>Semantics of Types &amp; More</Italics> is <Bold>106</Bold> messages in the export,
                        and <Bold>84</Bold> on the screen. The other twenty-two are on branches &mdash; edits, and
                        answers I asked for twice &mdash; and a conversation is a tree while a reader only ever sees
                        one path through it. The importer walks that path and says what it left behind rather than
                        quietly rounding the number off.
                    </Paragraph>
                    <Paragraph>
                        Read as that path it alternates perfectly: not one message follows the same speaker. An
                        earlier attempt read a flattened copy instead and found things that looked like me saying the
                        same thing twice. I was not. That is what a tree looks like when somebody walks it as a list.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}

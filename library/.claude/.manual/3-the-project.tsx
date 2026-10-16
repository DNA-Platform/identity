import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            The project a conversation with Claude was held in, said on the conversation's cover as a fact of
            Claude's, and the conversation with Claude that draws it.
        </Paragraph>
        <Section>
            <Heading>Held in a project</Heading>
            <Paragraph>
                In the application a conversation is held in a project, or in none, and the project holds the
                files Claude reads while it goes. That is a fact about Claude's conversations and not about
                conversations in general, so it is said here and not in the library's manual: a project is an
                annotation of a conversation's cover, as the author and the subject are, holding the project
                book's name and standing a reference to it, and the cover writes it with the form that says the
                project catalogues the conversation besides, so the project book's table answers it. It is not
                a topic. A topic is what a conversation, or a part of one, is about, and the same conversation
                may turn to several; the project is where it was held, one at most, whatever it turned to.
            </Paragraph>
            <Paragraph>
                A conversation with Claude is the library's conversation specialized here: it answers its
                project, and draws a project line beside its byline, a word said to be a label and the
                project's name leading to its book, the way back from a conversation to its project. The
                project book itself is <Means>$[[ a project manual ]]( Dougs Reference Manual / The Project Manual )</Means>,
                the files as spreads and the conversations as entries. The project has a twin, the account the
                conversation was held under, <Means>$[[ The Account ]]( ./The Account )</Means>, said after it on
                the cover and drawn after it on the page.
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

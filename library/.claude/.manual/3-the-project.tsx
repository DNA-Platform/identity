import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            The project a conversation with Claude was held in, said on the conversation's cover as a fact of
            Claude's, and the line in the bar that draws it.
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
                The pages that draw it stand in chapters of their own: a conversation with Claude is the library's
                conversation specialized in <Means>$[[ The Conversation's Page ]]( ./The Conversation's Page )</Means>,
                which draws the project line beside the byline, a word said to be a label and the project's name
                leading to its book, and files the conversation under its project at the logo, the project's own
                mark in the project's own colours leading to its page, read off the project's cover standing as a
                volume of the conversation's, concept 5 of <Means>$[[ Claudes Design / The Project's Page ]]</Means> in
                its first form; and the project book is <Means>$[[ a project manual ]]( Dougs Reference Manual / The Project Manual )</Means>
                specialized in <Means>$[[ The Project's Page ]]( ./The Project's Page )</Means>. The annotation and its
                line stand here alone, since every page that reads a conversation's cover reads the project through
                this one class, and a class copied is a class no other page can read. The project has a twin, the
                account the conversation was held under, <Means>$[[ The Account ]]( ./The Account )</Means>, said
                after it on the cover and drawn after it on the page.
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

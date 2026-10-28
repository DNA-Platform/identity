import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project's Page ]]</Title>
        <Paragraph>
            <Brief />
            A project of mine with Claude on its page: the library's project manual with the way on to the
            application beside each conversation, the trail kept as a row is pressed, and the landing where I
            left it when I return. Every project's book extends this chapter's, and no conversation's does.
        </Paragraph>
        <Section>
            <Heading>The rows, the files and the landing</Heading>
            <Paragraph>
                The page is <Means>$[[ the library's project manual ]]( Dougs Reference Manual / The Project Manual )</Means>
                with Claude's rows: what the project is for first, the brief and the instructions, the counts,
                the search over the conversations and the files, and the conversations as one flat list, newest
                first with the day on each row, as the application lists them; each row leads into the library by
                its title and on to the application, in Claude, by the origin its conversation's cover carries.
                A file pressed in the knowledge column turns the page to the file beside its words, and the side
                lists the conversations first and then the files' folder, with the open file lit. A row pressed,
                or a hit of the search pressed, writes the trail said in <Means>$[[ The Conversation's Page ]]( ./The Conversation's Page )</Means>,
                and the page lands where I left it when I come back: the word typed again, the row I left from
                marked in the list and among the hits, and scrolled to. Concept 10 of <Means>$[[ Claudes Design / The Conversation and the Project ]]</Means>;
                the months, as bars at the head and as sections of the list, were struck on my word of
                2026-10-28, since the application has none.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Why a chapter apart from the conversation's</Heading>
            <Paragraph>
                This chapter imports the conversation's page for the trail, and the conversation's page imports
                nothing of this one, so a change here reaches the 27 project books and no conversation; a book's
                digest is what its files import since Sprint 117, and a project's book file extends this
                chapter's book by the file's own name. The names, way on, project entry open and project
                result, are the session's until I keep or change them.
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

import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Pairing ]]</Title>
        <Paragraph>
            <Brief />
            Which project a conversation belongs to, by evidence the importer names and I dispose of, and which
            conversations are not mine and stay out.
        </Paragraph>
        <Section>
            <Heading>The machine proposes and I dispose</Heading>
            <Paragraph>
                The export pairs nothing: two records in five hundred name a project. So the importer gathers
                evidence and says it by name. A conversation that searched its project's knowledge and was
                answered with a document the project holds is paired by that document, with certainty. The
                mapping captured off the application pairs by title, with its relative date and its position to
                tell apart the ten conversations that share one name. A project's memory may name a
                conversation. For a session of Claude Code the working folder is the project. Where the evidence
                agrees the conversation is paired; where it conflicts or is silent the conversation is left
                unpaired and reported, and it has its home in the book that catalogues all of them either way.
            </Paragraph>
            <Paragraph>
                The pairing stands as a file beside this chapter, one line per conversation with its project
                and the evidence, and I edit it: a line I write is read before any evidence. The same file holds
                the exclusions. A conversation that is not mine is proposed for exclusion and stays out unless I
                strike the line, and what is not mine <Means>$[[ the importer's configuration ]]( ./The Importer )</Means> names:
                a project that is not mine, Ana's, and a script a title may not be in, Cyrillic, since a
                conversation with a Russian title is not mine, whoever wrote it in my account.
            </Paragraph>
        </Section>
        <Append
            identifier="pairing"
            type=".ts"
        >
            ![[ pairing.ts ]]
        </Append>
        <Append
            identifier="pairings"
            type=".json"
        >
            ![[ pairings.json ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);

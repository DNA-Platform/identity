import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is part of an ongoing linguistics project with a person who has substantial background
            knowledge in both formal grammar and semantics, and who is developing an original theoretical framework
            called "semantic reference theory" — a formalism in which formalizing the semantics of perspective is
            intended to provide a definition of consciousness. The person works collaboratively with someone named Ana,
            who has previously introduced concepts like phrasal verbs ("get in") into the project. The conversation
            built on prior work on determiners (documented in a legacy index) where the key finding was that multiple
            words can compose into a single referring unit.
        </Paragraph>
    </Chapter>
);

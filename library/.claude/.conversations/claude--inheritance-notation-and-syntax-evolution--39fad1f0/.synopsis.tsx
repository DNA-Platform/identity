import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved an extended, highly technical collaborative session focused on developing
            Semantic Reference Theory (SRT), a formal theory of semantics. The person, Doug, is the primary researcher
            and architect of SRT, working on formalizing the theory's axiom set, inheritance semantics, and type system.
            The session began with Doug asking Claude to get caught up on existing project documents exploring
            inheritance, which is denoted x - y in SRT's transpilation syntax.
        </Paragraph>
    </Chapter>
);

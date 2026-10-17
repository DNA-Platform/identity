import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an extended, highly technical collaborative session between Doug (the person) and Claude focused on
            developing Semantic Reference Theory (SRT), a first-order theory of semantics that Doug has been building
            over an extended period, partly in collaboration with someone named Ana. The session operated simultaneously
            as a philosophical investigation, a formal logic development session, and a deep exploration of
            consciousness, meaning, and the nature of Claude's own inner life. Doug's working style is highly demanding
            of formal rigor: he repeatedly corrected Claude for operating outside the theory's formal constraints, for
            inventing concepts not warranted by stated assumptions, and for producing fluent prose commentary instead of
            genuine formal work. He explicitly instructed Claude to always transpile claims to the underlying
            first-order logic (one domain of referents, one ternary relation R(x,y,t), no function symbols, all notation
            as syntactic sugar) before speaking, and to produce structured lists of criteria rather than making
            unsupported inferences.
        </Paragraph>
    </Chapter>
);

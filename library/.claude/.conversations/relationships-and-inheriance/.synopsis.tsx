import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an extended collaborative formal-theory session between Doug, the creator of Semantic Reference
            Theory (SRT), and Claude, working toward axiomatizing SRT from scratch. Doug lives in Tbilisi with his wife
            Ana and has spent approximately 25 years developing SRT. The session spanned 68+ turns of derivations,
            corrections, axiom construction, and philosophical discussion. Doug's explicit framing for Claude's role was
            "calculator" — strong where a training corpus exists, unreliable where none does, and unable to feel the
            difference — so the working method required Claude to cite project files or ask rather than guess, use a
            scratchpad for all formal work before reporting results, and read the kit line by line every turn.
        </Paragraph>
    </Chapter>
);

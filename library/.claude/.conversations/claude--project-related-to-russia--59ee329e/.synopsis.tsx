import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug Rubino is a writer working on a personal essay titled "Love begets Love; Hate begets Hate" — a piece he
            will read aloud in a couples professional support session with his partner Ana. The project has a dual
            nature: it is simultaneously a letter addressed directly to Ana and a rigorous theory of identity grounded
            in a quantum mechanics metaphor. Doug is the sole author; Claude's role was explicitly defined as layout
            assistant, checker, and second mind — not author or architect. Doug wrote everything; Claude helped plan
            structure, fact-checked the physics at a "poetic accuracy" standard, tracked assumptions, and analyzed his
            voice.
        </Paragraph>
    </Chapter>
);

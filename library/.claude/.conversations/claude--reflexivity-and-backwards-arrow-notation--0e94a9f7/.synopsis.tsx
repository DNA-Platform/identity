import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug, a theorist developing Semantic Reference Theory (SRT), worked with Claude to write a formal paper
            documenting research on the five structural cases of the primitive relation R(x,y,t). The conversation began
            with Doug asking Claude to review their collaborative work and extract formal conclusions for publication.
            Claude initially struggled by attempting to pattern-match existing papers in Doug's project library rather
            than writing up the actual research conducted. Doug provided critical feedback about theory development,
            emphasizing that later papers supersede earlier ones and that Claude needed to focus on documenting
            completed work rather than extending the theory.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug Rubino is working on a generative art project called "DNA Patternity" — a system for algorithmically
            generating hand-drawn-style grid patterns inspired by stock art created by someone named Ana. The
            conversation began with Doug sharing Ana's stock art (hand-drawn wobbly grid patterns) and asking Claude to
            analyze why they are commercially valuable. Claude worked through this analytically using an editable
            notebook artifact, concluding that the patterns occupy a durable commercial position by combining universal
            grid structure with humanizing imperfection, and that their simple five-parameter algorithmic DNA makes them
            generatively fertile for producing families of patterns at scale.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a neuroscientist conducting research on the effects of a serotonergic psychedelic on visual
            processing in mouse V1, working with a team that includes members referred to as Nancy, Cathy, and Arthur
            (the "Claude Code" or CC team). The research involves digital twin neural network models trained on pre- and
            post-drug neural recordings from the same cells, with the goal of understanding what the drug does to visual
            representation. The person has spent significant time on this project and communicated clearly that they did
            not want to justify their scientific decisions to Claude—they expected engagement at the level of a
            collaborator, not a reviewer.
        </Paragraph>
    </Chapter>
);

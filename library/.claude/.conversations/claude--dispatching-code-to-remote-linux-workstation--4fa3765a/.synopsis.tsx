import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a researcher working on computationally intensive neural network training projects. He is
            collaborating with a scientist named David who has a Linux workstation available for remote compute jobs. A
            colleague named Nancy is also involved and will be driving the lab box remotely from Doug's machine using
            Claude Code. Adam is a team member focused on building Claude Code skills. The GitHub organization is
            DNA-Platform, and the specific repository is DNA-Platform/altered-states.
        </Paragraph>
    </Chapter>
);

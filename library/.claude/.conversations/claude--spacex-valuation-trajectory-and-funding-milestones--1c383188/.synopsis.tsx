import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research SpaceX's valuation trajectory across its major funding rounds and
            produce an editable artifact summarizing that history with commentary on each significant valuation
            movement. Claude conducted web searches to gather data from multiple sources, then created a detailed
            markdown document saved as spacexvaluationtrajectory.md.
        </Paragraph>
    </Chapter>
);

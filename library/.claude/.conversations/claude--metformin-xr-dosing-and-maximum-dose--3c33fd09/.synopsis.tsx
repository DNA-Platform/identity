import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a detailed, technically oriented conversation about a specific wellness-related
            approach, asking about dosing frequency, maximum dosing thresholds, and how different formulations compare.
            Claude explained that the extended-release formulation is typically taken once daily with the evening meal,
            with a standard maximum of 2,000 mg/day for most formulations and up to 2,500 mg/day for certain branded
            versions.
        </Paragraph>
    </Chapter>
);

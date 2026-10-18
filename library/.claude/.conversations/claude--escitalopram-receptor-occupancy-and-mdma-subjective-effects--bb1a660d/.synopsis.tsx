import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged Claude in a detailed pharmacology discussion centered on the relationship between SERT
            (serotonin transporter) occupancy at a specific dose of escitalopram and the subjective effects of MDMA. The
            conversation was technically sophisticated throughout, with the person demonstrating strong existing
            knowledge of receptor pharmacology, dose-occupancy curves, and the mechanistic distinctions between reuptake
            inhibitors and releasing agents. Key terminology included SERT, VMAT2, reverse transport, dose-occupancy
            curves, entactogenic/empathogenic effects, and cascade mechanisms.
        </Paragraph>
    </Chapter>
);

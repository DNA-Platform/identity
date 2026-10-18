import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to explain how Patreon works as a business model. Claude provided a comprehensive
            overview covering the platform's core mechanics, revenue structure, and strategic value for creators. The
            explanation covered how creators set up membership tiers with varying perks, how Patreon generates revenue
            by taking a percentage from creator earnings rather than charging patrons directly, and why the model
            appeals to creators seeking income stability independent of platform algorithms and advertiser spending.
            Claude also addressed the key tension in the model — patron churn — and noted that Patreon tends to work
            best for creators with highly engaged niche audiences rather than large but passive ones. The conversation
            was informational with no tasks assigned or decisions reached.
        </Paragraph>
    </Chapter>
);

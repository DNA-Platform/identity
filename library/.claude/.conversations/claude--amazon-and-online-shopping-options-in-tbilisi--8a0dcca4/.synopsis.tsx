import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Amazon availability in Tbilisi, Georgia, comparing it to Wildberries, and asked
            about ordering from nearby countries for faster delivery. Claude explained that Amazon doesn't operate
            locally in Georgia like Wildberries does, but Wildberries has established a strong presence there since late
            2024 with over 90 pickup points across Georgian cities. For Amazon purchases, the user would need to use
            package forwarding services from the US, which typically take 1-3 weeks rather than a few days.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug requested analysis of Russian emigration patterns since the Ukraine war began, specifically
            seeking monthly data and trends for 2024-2026. Claude used web searches to gather data from destination
            countries like Turkey, Georgia, Kazakhstan, and EU nations, since Russia stopped reporting accurate
            emigration statistics. Through creative modeling based on destination country immigration data, Claude
            estimated that approximately 40,000-50,000 Russians are fleeing monthly, with cumulative emigration of
            around 2.3 million people since February 2022, representing about 1.45% of Russia's population.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about comparing MyMarket, a Georgian e-commerce platform, to Amazon and Ozon, specifically
            asking about shipping times, Prime-like delivery services, and whether the platform sells used versus new
            items. Claude conducted web research to provide a comprehensive comparison and discovered that MyMarket
            operates fundamentally differently from the user's expectations.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person was shopping, likely in a Georgian or Eastern European market, and asked Claude to help identify
            and interpret several food products. The conversation covered two main product categories: smoked fish and
            ground coffee.
        </Paragraph>
    </Chapter>
);

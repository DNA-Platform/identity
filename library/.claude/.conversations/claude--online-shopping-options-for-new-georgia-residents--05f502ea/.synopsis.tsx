import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a new resident in Tbilisi, Georgia (the country), navigating local e-commerce for the first
            time. They were trying to purchase a mini fridge and had already encountered barriers with extra.ge, which
            requires a Georgian personal number and only operates in Georgian. They also noted that foreign credit cards
            were not working on Georgian e-commerce sites, despite working on Glovo and Wolt.
        </Paragraph>
    </Chapter>
);

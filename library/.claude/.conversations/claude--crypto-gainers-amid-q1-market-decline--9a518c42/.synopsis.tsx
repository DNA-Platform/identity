import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            What cryptocurrencies have showed the biggest gains in the last three months and what is the narrative for
            why they are successful
        </Paragraph>
    </Chapter>
);

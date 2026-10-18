import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, who co-founded a hedge fund and has experience with multiple financial platforms including
            Citibank, Chase, Interactive Brokers, PayPal, and Mercury, engaged in an extensive analysis of cybercrime
            economics and attack vectors, particularly focusing on revenge-motivated cybercrime. The conversation began
            with the user recounting a sophisticated cyberattack they experienced years ago, where social engineering
            led to a 4-6 hour network compromise requiring complete system reformatting and router replacement.
        </Paragraph>
    </Chapter>
);

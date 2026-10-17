import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a technically sophisticated discussion about cryptocurrency derivatives, specifically
            perpetual futures contracts and their relationship to the unbounded loss problem inherent in short selling
            traditional securities. The conversation covered the origin of perpetual swaps (BitMEX, 2016, invented by
            Arthur Hayes), Hayes's background in equity derivatives at Deutsche Bank and Citi before founding BitMEX,
            and his subsequent legal history and current work at Maelstrom.
        </Paragraph>
    </Chapter>
);

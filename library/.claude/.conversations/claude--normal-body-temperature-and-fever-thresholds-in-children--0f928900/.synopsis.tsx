import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a practical parenting question about how to distinguish genuine illness from feigned
            sickness in children, specifically requesting normal body temperature ranges and the medical threshold for a
            real fever in both Fahrenheit and Celsius. Claude provided the standard normal range (97–99°F /
            36.1–37.2°C), the clinical fever threshold (100.4°F / 38°C), and practical advice about thermometer types
            that are harder to manipulate. The response included a lighthearted note about common ways children might
            attempt to game a thermometer reading. The person then requested a full translation of the response into
            Russian, which Claude provided.
        </Paragraph>
    </Chapter>
);

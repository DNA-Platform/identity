import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person received a notification from Fiverr indicating that an AI named "Mira" would be curating job
            descriptions, and asked Claude to research whether this could be the same Mira AI associated with The Open
            Platform (TOP) — a Telegram-native personal AI assistant built on the Cocoon decentralized GPU network
            running on TON. The person demonstrated existing familiarity with the TOP/Mira ecosystem, referencing Cocoon
            and Telegram unprompted, suggesting they follow this space closely.
        </Paragraph>
    </Chapter>
);

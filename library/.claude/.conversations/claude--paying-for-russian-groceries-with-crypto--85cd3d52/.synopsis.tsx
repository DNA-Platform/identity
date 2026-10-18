import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Ana sought help with a cross-border payment challenge involving grocery delivery to her grandmother
            in Russia. She was unable to access Russian financial systems and asked about Telegram-based services that
            accept cryptocurrency payments (USDT or TON) with escrow systems for completing errands like grocery
            delivery. Claude researched current options and provided several practical solutions, ranging from simple to
            more complex approaches.
        </Paragraph>
    </Chapter>
);

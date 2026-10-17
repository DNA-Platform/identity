import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person (along with a colleague or companion named Ana) was trying to follow a Russian-language setup
            guide for a third-party Telegram bot platform. The conversation centered on navigating the new BotFather
            mini app interface, which had replaced the older command-driven BotFather chat flow, and reconciling that
            new interface with instructions written for the older one.
        </Paragraph>
    </Chapter>
);

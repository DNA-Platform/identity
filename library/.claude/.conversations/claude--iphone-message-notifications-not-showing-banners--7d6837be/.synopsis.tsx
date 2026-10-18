import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user experienced a persistent iPhone notification issue where they weren't receiving banner alerts for
            important messaging apps like Telegram, WhatsApp, and iMessage, despite believing all notification settings
            were properly configured. They mentioned previously receiving these alerts and suspected something had
            changed. The troubleshooting process revealed a complex iOS Focus mode bug where Do Not Disturb appeared to
            be disabled in all user interfaces but was actually active in the background, silently blocking
            notifications.
        </Paragraph>
    </Chapter>
);

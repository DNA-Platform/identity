import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for help adding a Google account to their iPhone so that it would integrate with the
            device's native functionality. Claude provided step-by-step instructions covering how to navigate to
            Settings, access the Accounts section under Mail, add a Google account, sign in with Google credentials, and
            select which services to sync (Mail, Contacts, Calendars, Notes). Claude also explained how to set the
            Google account as the default account for Contacts or Calendar through the relevant Settings menus.
        </Paragraph>
    </Chapter>
);

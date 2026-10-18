import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Title>[[ 12 March 2026 ]]</Title>
        <Message
            at="2026-03-12T16:51:46.602749Z"
        >
            <Origin>019ce2f6-5d92-7593-bf52-ffaef2cb0245</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I add a Google account to my iPhone accounts so that it uses my phone</Paragraph>
        </Message>
        <Message
            at="2026-03-12T16:51:53.548348Z"
        >
            <Origin>019ce2f6-5d92-7451-b98f-21804b56d884</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's how to add a Google account to your iPhone:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Open <Word>
                        <Bold />
                        Settings
                    </Word>
                </Line>
                <Line>
                    Scroll down and tap <Word>
                        <Bold />
                        Mail
                    </Word> (or <Word>
                        <Bold />
                        Contacts
                    </Word> / <Word>
                        <Bold />
                        Calendar
                    </Word> depending on what you want to sync)
                </Line>
                <Line>
                    Tap <Word>
                        <Bold />
                        Accounts
                    </Word>
                </Line>
                <Line>
                    Tap <Word>
                        <Bold />
                        Add Account
                    </Word>
                </Line>
                <Line>
                    Select <Word>
                        <Bold />
                        Google
                    </Word>
                </Line>
                <Line>Sign in with your Google email and password</Line>
                <Line>Choose which services to sync — Mail, Contacts, Calendars, Notes — and toggle on what you want</Line>
                <Line>
                    Tap <Word>
                        <Bold />
                        Save
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Once added, your Gmail will appear in the Mail app, and your Google contacts/calendar will sync with the
                iPhone's native apps.
            </Paragraph>
            <Paragraph>
                If you want Google to be your <Word>
                    <Bold />
                    default
                </Word> account for things like contacts or calendar, go to <Word>
                    <Bold />
                    Settings → Contacts → Default Account
                </Word> (or the equivalent under Calendar) and select your Google account there.
            </Paragraph>
        </Message>
    </Chapter>
);

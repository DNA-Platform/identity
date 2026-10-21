import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-08T08:14:51.475726Z"
        >
            <Origin>019b9cac-3a1d-771d-b064-887b88720f5c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If I have a child account on apple account, can I lock the device or limit screen time?</Paragraph>
        </Message>
        <Message
            at="2026-01-08T08:15:13.801897Z"
        >
            <Origin>019b9cac-3a1d-771d-b064-887c52fcfeab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Apple child account Screen Time parental controls lock device”</Action>
            <Paragraph>
                Yes, with a child account set up through Apple's Family Sharing, you have robust control over the device
                through <Word>
                    <Bold />
                    Screen Time
                </Word>. Here's what you can do:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Screen Time Limits
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Set limits for specific apps or app categories like games or social media. Your child receives a
                    notification when their allotted time is almost up, and when they run out of time, they can ask you to
                    approve more time.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Downtime (Device Lockdown)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    With Downtime, you can block apps and notifications for specific periods. Only phone calls and apps that
                    you choose to allow are available. This is essentially the "lock the device" function you're asking
                    about.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key Settings to Enable
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If your child is still using an app after the limit is reached, you need to enable "Block at End of
                    Limit." Without this, kids can simply tap "Ignore Limit" and continue using apps.
                </Line>
                <Line>
                    You can also create a dedicated passcode to secure settings, so only you can extend time or make
                    changes.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Managing Remotely
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    To manage your child's Screen Time from your device, set up a Family Sharing account, then add your
                    child to it. Open Screen Time on your device, then tap your child's name.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One Workaround to Watch For
                </Word> Some kids figure out they can change their device's time zone to bypass Downtime. To prevent this,
                go to Settings &gt; Screen Time &gt; Content &amp; Privacy Restrictions &gt; Location Services &gt; System
                Services &gt; Setting Time Zone and disable it, then set Location Services to "Don't Allow Changes."
            </Paragraph>
            <Paragraph>Would you like specifics on setting up any of these features?</Paragraph>
        </Message>
        <Message
            at="2026-01-08T08:16:05.123504Z"
        >
            <Origin>019b9cad-590b-7627-adcd-bd378c3e6c48</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I see downtime but how do I set it</Paragraph>
        </Message>
        <Message
            at="2026-01-08T08:16:21.603579Z"
        >
            <Origin>019b9cad-590b-7627-adcd-bd38b4e84a18</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Apple Screen Time set up Downtime child device steps”</Action>
            <Paragraph>Here's how to set up Downtime for your child's device:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Your iPhone/iPad (Parent Device)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Go to <Word>
                        <Bold />
                        Settings
                    </Word>
                </Line>
                <Line>
                    Tap <Word>
                        <Bold />
                        Screen Time
                    </Word>
                </Line>
                <Line>
                    Under <Word>
                        <Bold />
                        Family
                    </Word>, tap your child's name
                </Line>
                <Line>
                    Tap <Word>
                        <Bold />
                        Downtime
                    </Word>
                </Line>
                <Line>Tap the toggle next to "Scheduled" to turn on and customize the Downtime schedule</Line>
                <Line>Set the start and end times (for example, 9 PM to 7 AM)</Line>
                <Line>
                    You can set up the same downtime schedule for every day, or choose "Custom" to set different times for
                    each day of the week
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical Step — Enable "Block at Downtime"
                </Word>
            </Paragraph>
            <Paragraph>
                Next to "Block at Downtime," tap the toggle. This will mean that when Downtime starts, your child's device
                will be blocked. Without this setting, they can keep ignoring the time limit by pressing "Ask For More
                Time."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Set Up "Always Allowed" Apps
                </Word>
            </Paragraph>
            <Paragraph>
                After setting Downtime, go back and tap <Word>
                    <Bold />
                    Always Allowed
                </Word> to choose which apps (like Phone or Messages) your child can still access during Downtime. When you
                schedule downtime, only phone calls and apps that you choose to allow are available.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Instant Lockdown Option
                </Word>
            </Paragraph>
            <Paragraph>
                You can now "turn on Downtime until scheduled" — this lets you brick the phone immediately rather than
                waiting for the scheduled time.
            </Paragraph>
            <Paragraph>Would you like help setting up the "Always Allowed" apps list or anything else?</Paragraph>
        </Message>
    </Chapter>
);

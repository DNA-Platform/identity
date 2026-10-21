import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-31T20:20:06.748745Z"
        >
            <Origin>019c15b6-9abc-794e-b40a-319177f2ebbc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you analyze this, researvh and assess for truth?</Paragraph>
            <Paragraph>⭐️I wanted to ask your thoughts on this and check the risks carefully.</Paragraph>
            <Paragraph>
                We have Katya’s SIM card. In theory, we could put it into a phone, activate WhatsApp, and try to log into
                her account. If the chat history is still there, we might be able to recover it.
            </Paragraph>
            <Paragraph>
                However, Katya’s SIM card, like my old one, is registered in Maxim’s name. I’m worried he might receive some
                kind of notification if the SIM becomes active - possibly indicating that it was activated abroad, similar
                to security alerts from Google accounts.
            </Paragraph>
            <Paragraph>
                I’m also concerned about whether he could notice the number becoming active on WhatsApp again, depending on
                the account settings.
            </Paragraph>
            <Paragraph>
                You have the small red phone - could you please check which WhatsApp account is currently open on it? Katya
                says that phone uses the same iCloud as her iPhone, but I’m not sure what that means in practice.
            </Paragraph>
            <Paragraph>
                At the same time, it’s possible the chat history isn’t there at all. Katya thinks it may have been deleted,
                possibly by Maxim, so we may be taking a risk for nothing.
            </Paragraph>
            <Paragraph>My main concern is accidentally revealing our location. What do you think?</Paragraph>
        </Message>
        <Message
            at="2026-01-31T20:21:22.979476Z"
        >
            <Origin>019c15b6-9abc-7670-9f4e-6cc32c038267</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a legitimate concern with real technical risks. Let me research the specific mechanisms involved to
                give you accurate information.
            </Paragraph>
            <Action>Searched the web for “WhatsApp SIM card swap notification account security”</Action>
            <Action>Searched the web for “WhatsApp verification new device notification account owner alert”</Action>
            <Action>Searched the web for “SIM card activation notification account holder carrier alert Russia”</Action>
            <Action>Searched the web for “WhatsApp location IP address visible contacts tracking”</Action>
            <Action>Searched the web for “iCloud WhatsApp backup sync same account multiple devices”</Action>
            <Action>Searched the web for “WhatsApp login new phone "last seen" "online" status visible contacts”</Action>
            <Paragraph>
                This is a high-stakes question that deserves careful analysis. Based on my research, here's a comprehensive
                risk assessment:
            </Paragraph>
            <Heading>Critical Risks</Heading>
            <Heading>1. WhatsApp Verification Alerts (HIGH RISK)</Heading>
            <Paragraph>
                When you attempt to verify WhatsApp on a new device using Katya's SIM, several things happen:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        SMS verification code
                    </Word> gets sent to the SIM - you'd receive this, which is fine
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account Protect notification
                    </Word>: WhatsApp may ask on your old device to verify that you want to take this step as an extra
                    security check. This feature can help alert you to an unauthorized attempt to move your account to
                    another device.
                </Line>
            </Paragraph>
            <Paragraph>
                This means <Word>
                    <Bold />
                    if Katya's iPhone still exists and has WhatsApp installed
                </Word>, it may receive a notification asking to confirm the transfer. If Maxim has access to that device,
                he'd see it.
            </Paragraph>
            <Heading>2. SIM Activation &amp; Carrier Notifications (MEDIUM-HIGH RISK)</Heading>
            <Paragraph>This is where your concern about the SIM being in Maxim's name becomes significant:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    After buying a new SIM card/re-registering a SIM card you will receive a notification in your Gosuslugi
                    account
                </Line>
                <Line>
                    Russia's 2025 regulations require SIM cards to be linked to Gosuslugi (government services portal), and
                    for SIM cards activated before 2025, operators will send reminder notifications in batches
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If the SIM is registered to Maxim
                </Word>, activating it abroad could trigger:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Carrier notifications to the account holder</Line>
                <Line>Roaming activation alerts</Line>
                <Line>Gosuslugi portal notifications</Line>
            </Paragraph>
            <Heading>3. Foreign SIM + Russia Connection (ADDITIONAL COMPLICATION)</Heading>
            <Paragraph>
                Russia has implemented strict measures: since July, foreigners who want to buy a Russian SIM card and mobile
                phone plan have been required to register with the Unified Biometric System (UBS), a government-run database
                that collects biometric data.
            </Paragraph>
            <Paragraph>
                If you activate the SIM outside Russia, it would show as roaming from abroad, which could be logged.
            </Paragraph>
            <Heading>4. Location Exposure via WhatsApp (MEDIUM RISK)</Heading>
            <Paragraph>
                <List />
                <Line>
                    WhatsApp does not publicly disclose a user's IP address to other users within the app. This means that
                    when you send a message or make a call on WhatsApp, your IP address is not visible to the recipient.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        However
                    </Word>, during voice/video calls: WhatsApp's calling feature avoids using a relay server to reduce
                    latency, relying on P2P communication. This means the two participating devices must share their public
                    IP addresses.
                </Line>
            </Paragraph>
            <Paragraph>
                So: <Word>
                    <Bold />
                    Don't make any calls
                </Word> if you do this. Text-based messaging is safer.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Last Seen/Online Status
                    </Word>: Your WhatsApp Last Seen is visible to people based on your privacy settings. You can choose to
                    show it to everyone, contacts only, specific contacts, or nobody in your WhatsApp privacy settings. If
                    Maxim is in Katya's contacts, he could potentially see when the account comes online.
                </Line>
            </Paragraph>
            <Heading>Chat History Recovery - Likelihood Assessment</Heading>
            <Heading>The iCloud Question</Heading>
            <Paragraph>
                Because backups are tied to individual phone numbers, it is possible to have backups for multiple WhatsApp
                accounts stored in the same iCloud account.
            </Paragraph>
            <Paragraph>
                This is actually good news - even if both phones share iCloud, Katya's WhatsApp backup would be separate
                from whatever's on the red phone.
            </Paragraph>
            <Heading>Recovery Requirements</Heading>
            <Paragraph>To restore chat history, you need:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The same phone number (Katya's SIM ✓)</Line>
                <Line>Access to the same iCloud account where the backup was made</Line>
                <Line>The backup to actually exist and not have been deleted</Line>
            </Paragraph>
            <Paragraph>
                Log in to WhatsApp with the same account you use to make a backup. Also, make sure that the device logs in
                the same iCloud account.
            </Paragraph>
            <Heading>If Maxim Deleted Chats</Heading>
            <Paragraph>
                If chats were deleted before the last backup ran, they'd be gone. If he deleted the entire WhatsApp backup
                from iCloud, that's also gone.
            </Paragraph>
            <Heading>Practical Recommendation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Before activating the SIM, check the red phone:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Open Settings → &#91;Name&#93; → iCloud → Manage Storage</Line>
                <Line>Look for WhatsApp/WhatsApp Messenger backup</Line>
                <Line>Check backup date - if recent, backup may exist</Line>
                <Line>Note which Apple ID is logged in</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The safest approach would be:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Don't
                    </Word> put the SIM in a phone that connects to the network yet
                </Line>
                <Line>
                    First check if WhatsApp backup exists in iCloud from a computer (iCloud.com doesn't show WhatsApp
                    backups directly, but you can see storage usage)
                </Line>
                <Line>If proceeding, use a phone that:</Line>
                <Paragraph>
                    <List />
                    <Line>Has VPN active before ANY network connection</Line>
                    <Line>Has location services OFF</Line>
                    <Line>Will not make any calls</Line>
                </Paragraph>
                <Line>Immediately change privacy settings to hide "Last Seen" and "Online" status after verification</Line>
            </Paragraph>
            <Heading>My Assessment</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Risk level: HIGH
                </Word> - The combination of:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>SIM registered to Maxim</Line>
                <Line>Russian carrier/Gosuslugi notification systems</Line>
                <Line>WhatsApp's Account Protect feature</Line>
                <Line>Uncertain whether backup even exists</Line>
            </Paragraph>
            <Paragraph>
                ...makes this a significant gamble. The location exposure risk is manageable (avoid calls, use VPN), but the
                carrier-level and WhatsApp device notifications are harder to control.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is the potential reward worth it?
                </Word> Only if you have reason to believe critical evidence exists in those chats AND was backed up before
                deletion.
            </Paragraph>
            <Paragraph>
                Would it help to discuss what specific evidence you're hoping to find? There might be alternative ways to
                obtain it that don't carry this risk.
            </Paragraph>
        </Message>
    </Chapter>
);

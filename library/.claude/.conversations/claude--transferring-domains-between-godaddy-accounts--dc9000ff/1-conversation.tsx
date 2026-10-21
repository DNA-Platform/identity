import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-26T19:50:21.288514Z"
        >
            <Origin>019e65d6-a203-7604-abd9-34610b8b4cf7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I give a domain from one Go Daddy account to another?</Paragraph>
        </Message>
        <Message
            at="2026-05-26T19:50:39.576575Z"
        >
            <Origin>019e65d6-a204-7350-9d18-5afc25da807c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “GoDaddy move domain to another account”</Action>
            <Paragraph>
                Yes, GoDaddy calls this an "account transfer" (or "push"), and it's free and fast since the domain stays
                within GoDaddy.
            </Paragraph>
            <Paragraph>The basic flow:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        From the sending account:
                    </Word> Go to your Domain Portfolio, open the domain's settings, and under the Transfer section select
                    "Transfer to another GoDaddy account." You'll send a transfer request to the recipient's GoDaddy account
                    email.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From the receiving account:
                    </Word> The recipient goes to their GoDaddy Transfers page, selects "Transfers In," and accepts the
                    domain. The recipient must accept within 10 days or the request expires.
                </Line>
            </Paragraph>
            <Paragraph>A few things worth knowing before you start:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The domain must be <Word>
                        <Bold />
                        eligible
                    </Word> — it can't be pending a contact update, within one day of expiration, expired, or already
                    pending another transfer.
                </Line>
                <Line>
                    If it's a newly registered domain in a bundle, it can't be transferred within 120 days of registration.
                </Line>
                <Line>
                    DNS settings carry over, but connected products like a website or email do not transfer with the domain
                    — you'd migrate those separately.
                </Line>
                <Line>
                    If the domain has Domain Protection, you'll need to clear an extra identity-verification step
                    (SMS/authenticator code or a one-time email password).
                </Line>
                <Line>
                    Within GoDaddy, the transfer completes immediately once the recipient accepts — no waiting period and no
                    charge.
                </Line>
            </Paragraph>
            <Paragraph>
                Is this part of the New York house / address-change cleanup, or are you consolidating the dna.love →
                atlas.love side of things? If a specific domain is being fussy I can help you figure out why.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T19:52:38.152415Z"
        >
            <Origin>019e65d8-b913-7690-8787-2321f6a06c87</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t see transfers</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T19:53:10.841713Z"
        >
            <Origin>019e65d8-b913-77f7-b83a-098d8cbcb322</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I can see you're on the Overview tab of the individual domain page. The transfer option isn't on this tab —
                let me confirm exactly where it lives in this newer portfolio interface.
            </Paragraph>
            <Action>
                Searched the web for “GoDaddy portfolio Registration Settings transfer to another GoDaddy account location”
            </Action>
            <Paragraph>
                You're on the <Word>
                    <Bold />
                    Overview
                </Word> tab — that's why. The transfer option isn't here. Click the <Word>
                    <Bold />
                    Registration Settings
                </Word> tab (third one across the top, between DNS and Products). That's where GoDaddy tucks the "Transfer"
                section in this portfolio interface — same place the lock/unlock toggle lives.
            </Paragraph>
            <Paragraph>
                Scroll down within Registration Settings and you should see a <Word>
                    <Bold />
                    Transfer
                </Word> section with "Transfer to another GoDaddy account." From there you'll enter the new account owner's
                email address (twice to verify), optionally their customer number, and choose whether to copy the current
                contact info over.
            </Paragraph>
            <Paragraph>Two heads-ups for your case specifically:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The domain renews <Word>
                        <Bold />
                        May 31, 2026
                    </Word> — that's five days out. Domains within one day of expiration aren't eligible, so you're fine,
                    but don't let this drag.
                </Line>
                <Line>
                    Protection level shows "Low" / no active plan, so you likely <Word>
                        <Emphasis />
                        won't
                    </Word> hit the extra Domain Protection identity check. But 2-step verification on the account will
                    still prompt for an SMS/authenticator code.
                </Line>
            </Paragraph>
            <Paragraph>
                Since you're moving atlas.love specifically — are you pushing it from this <Word>
                    <Verbatim />
                    doug@dna
                </Word> account to a shared account with Ana, or the reverse? Worth confirming which side is sending vs.
                receiving, because the receiving account has to accept it from the <Word>
                    <Bold />
                    Transfers
                </Word> page within 10 days before it actually lands.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T19:58:57.430707Z"
        >
            <Origin>019e65de-82ba-7a82-9141-66508ae25dd4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I hope it works. It said it sent a transfer request to my other account, but I don’t see it in the email yet
                so we will see.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T19:59:12.077491Z"
        >
            <Origin>019e65de-82ba-7f69-89ef-74faf3e190ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good news: you don't actually need the email to land. The email is just a convenience — the real acceptance
                happens in-app. Log into the <Word>
                    <Bold />
                    receiving
                </Word> account, go to the <Word>
                    <Bold />
                    Transfers
                </Word> page, click <Word>
                    <Bold />
                    Transfers In
                </Word>, and look on the <Word>
                    <Bold />
                    Accept Transfer
                </Word> tab. The domain should be sitting there waiting for you to check the box and accept. If a domain was
                sent to your account but you don't see it on that page, that's when you'd fall back to accepting via email.
            </Paragraph>
            <Paragraph>A couple of quick checks while you wait:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The email goes to the address on the <Word>
                        <Bold />
                        receiving
                    </Word> GoDaddy account, not necessarily the one you're looking at. Confirm which inbox that is, and
                    check spam/promotions.
                </Line>
                <Line>
                    You've got a 10-day window, so no rush, but since atlas.love renews May 31 it's worth finishing soon.
                </Line>
            </Paragraph>
            <Paragraph>
                Since both accounts are yours, this should be the easy version — once you accept on the other side, the
                transfer completes immediately, no waiting period and no charge. Refresh the Transfers page in a minute or
                two if it's not showing yet.
            </Paragraph>
        </Message>
    </Chapter>
);

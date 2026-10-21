import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-27T16:26:37.988790Z"
        >
            <Origin>01a0440c-b060-7dd4-84e4-5397c6de96ea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Something is seriously wrong here and I need you to help me with the accounting. I paid off my credit card a
                few days ago and I paid like $4000 as you can see and then I just had to pay it off today because I paid the
                full amount before the end of the month and I just had to pay $3000. There’s not $3000 worth of charges in
                between and I paid off the whole amount so how can I possibly be do some tallying on these images and help
                me figure out what’s going on and what I should do
            </Paragraph>
            <Attachment>Uploaded “IMG_3763.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3762.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3761.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3760.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3759.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3758.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3757.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-27T16:27:26.197524Z"
        >
            <Origin>01a0440c-b060-7afa-8211-7bb9eed2449c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The numbers reconcile — nothing is being charged twice. Here's the tally from the screenshots.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Posted charges since Aug 12 (plus the Aug 11 Wolt that posted after the statement closed): $4,414.36
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Aug 11–20: $1,262.46</Line>
                <Line>Aug 21–25: $3,151.90</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Payments: $7,600.71
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Aug 24: $4,448.81</Line>
                <Line>Aug 27: $3,151.90</Line>
            </Paragraph>
            <Paragraph>Net posted: −$3,186.35, which matches Citi's "Posted Total" exactly.</Paragraph>
            <Paragraph>
                What that implies: the Aug 11 statement balance was $3,186.35. Your Aug 24 payment of $4,448.81 was that
                statement balance plus everything that had posted Aug 11–20 ($3,186.35 + $1,262.46 = $4,448.81 to the cent).
                So the first payment cleared you to zero as of Aug 20 — but it did not cover what posted afterward. The Aug
                27 payment of $3,151.90 is exactly the charges that posted Aug 21–25, and that window does contain about
                $3,150:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Kpz pay Aug 21: $597.46 + $398.31</Line>
                <Line>Kpz pay Aug 24: $637.29 + $637.29</Line>
                <Line>Gastronome Kitchen: $270.08</Line>
                <Line>Jysk: $238.76</Line>
                <Line>Anthropic: $236.00</Line>
                <Line>Remaining small items: ~$137</Line>
            </Paragraph>
            <Paragraph>
                Total owed: $3,186.35 + $4,414.36 = $7,600.71. Total paid: $7,600.71. Current balance $0.00, with $245.09
                still pending. It all closes.
            </Paragraph>
            <Paragraph>Two things worth a look:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The two identical Kpz pay charges of $637.29 on Aug 24. If that was one transaction, it's a duplicate
                    worth disputing — that's $1,270 of the four Kpz charges totaling $2,270.35 in this cycle.
                </Line>
                <Line>
                    A $29.83 cash advance fee is pending from Aug 26 with no matching transaction visible. Citi may be
                    coding one of the Kpz pay charges as a cash-equivalent transaction, which would also mean it accrues
                    interest immediately. Tapping the fee or "View balance breakdown" should show which charge it's tied to.
                </Line>
            </Paragraph>
            <Paragraph>To confirm the $3,186.35 prior balance, expand "Statement closed Aug 11, 2026."</Paragraph>
        </Message>
        <Message
            at="2026-08-27T16:28:22.237238Z"
        >
            <Origin>01a0440e-4e89-7f93-81bc-77b824621845</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, the name all of the charges that cost that much or is it just that a lot of of them had not cleared?
                That’s very concerning to me.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T16:28:33.033429Z"
        >
            <Origin>01a0440e-4e89-758a-ba2e-82e52a97914a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                All of the charges in the second payment had already posted — none were pending. The $3,151.90 is real,
                cleared spending from Aug 21–25. Here is every item in it:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aug 21
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Kpz pay Tbilisi — $597.46</Line>
                <Line>Kpz pay Tbilisi — $398.31</Line>
                <Line>Glovo — $31.65</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aug 22
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Gastronome Kitchen Ltd — $270.08</Line>
                <Line>Glovo — $20.34</Line>
                <Line>bizee (Houston TX) — $29.00</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aug 24
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Kpz pay Tbilisi — $637.29</Line>
                <Line>Kpz pay Tbilisi — $637.29</Line>
                <Line>Kiosk Georgia — $2.14</Line>
                <Line>SPAR — $3.42</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aug 25
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Jysk — $238.76</Line>
                <Line>Adobe Illustrator — $25.00</Line>
                <Line>Kiosk Georgia — $15.17</Line>
                <Line>Apple.com/bill — $9.99</Line>
                <Line>Anthropic Claude subscription — $236.00</Line>
            </Paragraph>
            <Paragraph>Total: $3,151.90.</Paragraph>
            <Paragraph>
                The bulk is Kpz pay: $2,270.35 across four charges in this window (plus a fifth, $596.77, on Aug 15 —
                $2,867.12 for the cycle). "Kpz" is most likely Keepz, the Georgian QR/payment-link processor that many
                landlords, clinics, schools, and small businesses use to accept cards, so the merchant name doesn't tell you
                who was actually paid. The two $637.29 charges on Aug 24 are the item to check first: if only one payment of
                that amount was intended, that's a $637.29 duplicate to dispute with Citi.
            </Paragraph>
            <Paragraph>
                The rest — Gastronome, Jysk, Anthropic, the subscriptions — are what they appear to be. Whether the Kpz
                amounts match what you and Ana expected to pay is something the Keepz receipts (usually sent by SMS or email
                at payment time) would confirm.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T16:29:10.609578Z"
        >
            <Origin>01a0440f-0d32-74b7-9d1f-03730cf64f88</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so what was the total keepz?</Paragraph>
        </Message>
        <Message
            at="2026-08-27T16:29:12.201427Z"
        >
            <Origin>01a0440f-0d32-75aa-bcc8-8725d2b0d439</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Keepz total for the cycle: <Word>
                    <Bold />
                    $2,867.12
                </Word> across five charges.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Aug 15 — $596.77</Line>
                <Line>Aug 21 — $597.46</Line>
                <Line>Aug 21 — $398.31</Line>
                <Line>Aug 24 — $637.29</Line>
                <Line>Aug 24 — $637.29</Line>
            </Paragraph>
            <Paragraph>
                Of that, $2,270.35 posted after your Aug 24 payment window and landed in the $3,151.90 you paid today.
            </Paragraph>
        </Message>
    </Chapter>
);

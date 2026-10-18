import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 July 2026](2026-07-01)</Date>
        </Dated>
        <Title>[[ 1 July 2026 ]]</Title>
        <Message
            at="2026-07-01T01:47:15.090388Z"
        >
            <Origin>019f1b5c-6a7d-716e-9894-9975f5cc3cf8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there anything I need to do? There’s that 1 and I don’t know what it means. I don’t feel like the package
                has been declared, but I added the invoice. I think it has all of the data so I’m not sure if it’s missing
                if it is. I just want feedback that it’s going to be shipped
            </Paragraph>
            <Attachment>Uploaded “IMG_3461.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-01T01:48:02.545807Z"
        >
            <Origin>019f1b5c-6a7d-76c6-bac7-08e811f40a2f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The "1" is just a counter — it means one package is currently sitting in the Warehouse stage. Not a warning
                or a to-do flag. When it moves, that badge shifts to the In Transit column.
            </Paragraph>
            <Paragraph>
                On whether it's declared: I can't read the internal status from the screenshot, so here's how to confirm it
                yourself in about 15 seconds. Tap the <Word>
                    <Bold />
                    little document/receipt icon
                </Word> at the top-right of the package card (next to the tracking number). That opens the declaration — you
                should see the store, category, value, and your uploaded invoice all attached. If they're all there, it's
                submitted and you're done.
            </Paragraph>
            <Paragraph>
                The thing to double-check, since it's the usual culprit: <Word>
                    <Bold />
                    did you actually tap the green "Declaration" (submit) button after attaching the invoice?
                </Word> Adding the invoice alone doesn't finalize it — the submit press does. If you're not sure, tap <Word>
                    <Bold />
                    Redeclare
                </Word>, confirm the invoice is showing in the form, and hit the green button at the bottom. Re-submitting a
                complete declaration does no harm; it just re-confirms.
            </Paragraph>
            <Paragraph>
                What "it's going to ship" looks like from here: once the declaration is complete, the package stays in
                <Word>
                    <Bold />
                    Warehouse
                </Word> until KiwiPost consolidates it onto the next US→Georgia flight, then it flips to <Word>
                    <Bold />
                    In Transit
                </Word>. So sitting in Warehouse for a bit <Word>
                    <Emphasis />
                    after
                </Word> declaring is normal — it's not stuck, it's waiting for a flight. You don't need to do anything else
                during that window.
            </Paragraph>
            <Paragraph>
                If you open the declaration and the invoice is attached but you still want a human "yes, it's cleared to
                fly," KiwiPost support can confirm directly — in-app chat or +995 32 205 23 24. But if the doc icon shows
                everything filled in with the invoice, that <Word>
                    <Emphasis />
                    is
                </Word> your feedback: nothing missing, it'll move on the next flight.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T01:49:09.693439Z"
        >
            <Origin>019f1b5e-2ba5-780c-af54-64213b4d96d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, so it’s been declared it’s official</Paragraph>
            <Attachment>Uploaded “IMG_3462.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-01T01:49:18.407362Z"
        >
            <Origin>019f1b5e-2ba5-72ce-9006-c65621920629</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Confirmed — you're done. <Word>
                    <Bold />
                    Declaration Status: Declared
                </Word> (in green) is the signal you were looking for. Nothing else is required from you.
            </Paragraph>
            <Paragraph>
                Everything checks out on that screen: declared amount $13.99, store amazon.com, weight 0.2 kg, branch set to
                Vazha-Pshavela VII Block #1 (your pickup point), and there's already a <Word>
                    <Bold />
                    Transfer Number (ACUSGE000388)
                </Word> assigned — that's KiwiPost's outbound batch reference, which means it's slotted to move, not just
                sitting.
            </Paragraph>
            <Paragraph>
                From here it's automatic: it stays in Warehouse until that transfer batch flies out, then flips to <Word>
                    <Bold />
                    In Transit → Arrived
                </Word>, and you'll get a notification when it's ready to collect at the branch. No action on your end until
                pickup.
            </Paragraph>
            <Paragraph>
                This was your real test run, so worth clocking the dates — declared today; note when it actually lands so
                you've got your own warehouse-to-pickup timing for KiwiPost rather than relying on the reviews.
            </Paragraph>
        </Message>
    </Chapter>
);

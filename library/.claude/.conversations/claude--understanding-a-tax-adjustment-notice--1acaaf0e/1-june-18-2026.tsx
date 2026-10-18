import { Append, Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Title>[[ 18 June 2026 ]]</Title>
        <Message
            at="2026-06-18T16:07:07.996635Z"
        >
            <Origin>019edb7c-72ba-7bc8-8bf8-8e9d592d39d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay there was an adjustment to my taxes. Not that big a deal, but I can't tell if I owe them money or if
                they are telling me why they aren't giving me money
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-18T16:07:39.654471Z"
        >
            <Origin>019edb7c-72ba-7b4b-9aad-333360da5f2c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Neither, in effect — it nets to zero. You don't owe them anything, and you're not getting anything back.
            </Paragraph>
            <Paragraph>Here's the math from their own computation:</Paragraph>
            <Paragraph>
                <List />
                <Line>Your NY tax came out to $1,028.</Line>
                <Line>
                    They tacked on a $58 estimated-tax penalty (for underpaying during the year — section 685(c)), bringing
                    <Word>
                        <Bold />
                        total amount due to $1,086
                    </Word>.
                </Line>
                <Line>
                    Your <Word>
                        <Bold />
                        total payments were also $1,086
                    </Word>.
                </Line>
                <Line>So: overpayment $0, refund $0.</Line>
            </Paragraph>
            <Paragraph>
                What actually happened: you'd overpaid by exactly $58 (payments $1,086 vs. tax $1,028), which would normally
                have come back to you as a $58 refund. The penalty they assessed is also exactly $58, so it ate the refund.
                That's why the notice keeps saying "you are not entitled to a refund" — your original return apparently
                claimed that ~$58 back, and the penalty cancelled it out.
            </Paragraph>
            <Paragraph>
                Bottom line: balance due is $0. There's nothing to pay, no deadline to worry about. It's essentially a
                "here's why your small refund became zero" letter.
            </Paragraph>
            <Paragraph>
                The only thing you could do is dispute the $58 penalty if you think it was wrongly applied (you'd have
                grounds if your withholding/estimates met one of the safe-harbor thresholds), but for $58 it's almost
                certainly not worth the effort.
            </Paragraph>
            <Paragraph>
                One note so you don't conflate them: this is NY State personal income tax (your IT-201-X), completely
                separate from the federal LLC partnership matter.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-18T16:08:53.904922Z"
        >
            <Origin>019edb7e-11b1-728e-80ab-49f9224ef451</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Wonderful, you are sure? No action on my part?</Paragraph>
        </Message>
        <Message
            at="2026-06-18T16:08:58.318010Z"
        >
            <Origin>019edb7e-11b1-799e-b678-820913b7455f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I'm sure. The notice's own numbers settle it: total amount due $1,086, total payments $1,086,
                overpayment $0, refund $0. There's no balance owed, so there's nothing to pay and no payment deadline to
                meet.
            </Paragraph>
            <Paragraph>
                The one genuine caveat — and it's about your <Word>
                    <Emphasis />
                    options
                </Word>, not an obligation — is the dispute window. If you ever wanted to challenge the $58 penalty, the
                notice gives you two years from the date (June 3, 2026) to protest. But that's purely optional, and for $58
                it's not worth it. Letting it sit costs you nothing.
            </Paragraph>
            <Paragraph>So: no action required. File it and move on.</Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);

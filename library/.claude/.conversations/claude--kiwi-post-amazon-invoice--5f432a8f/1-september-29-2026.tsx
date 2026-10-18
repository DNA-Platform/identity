import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Title>[[ 29 September 2026 ]]</Title>
        <Message
            at="2026-09-29T17:23:02.363715Z"
        >
            <Origin>5d46f3db-b691-4fd2-8056-ef22a606b6a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Find the chat where we talked about Kiwi post. I need to know what we decided about how to add an amazon
                invoice
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T17:23:10.746058Z"
        >
            <Origin>d773566a-8c95-4ade-99c6-d71e550b492f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Paragraph>
                It's the chat <Word>
                    <Bold />
                    "Amazon package forwarding to Georgia"
                </Word> (late June / July 1): https://claude.ai/chat/0db0ae88-bcaf-440f-970f-40e2a79cec4d
            </Paragraph>
            <Paragraph>What was settled on adding the Amazon invoice:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        It's required on every KiwiPost parcel
                    </Word>, whatever the value. The declaration plus invoice upload has to happen within 24 hours of the
                    package showing up in "Warehouse." Until then it just sits there. This is KiwiPost's own rule and has
                    nothing to do with the 300 GEL customs threshold.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        You don't need a formal invoice.
                    </Word> A screenshot of the Amazon order works: Your Orders → tap the order → screenshot the item and
                    the price you paid. If you'd rather have a PDF, use "Invoice" / "Printable Order Summary" on the order
                    page.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Upload steps:
                    </Word> on the Declaration screen, tap <Word>
                        <Bold />
                        Upload Invoice
                    </Word>, attach the file, then tap the green <Word>
                        <Bold />
                        Declaration
                    </Word> button. "Redeclare" reopens the same form if you need to fix something.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        iPhone workaround:
                    </Word> the upload button didn't open Photos. What worked was saving the screenshot to the <Word>
                        <Bold />
                        Files
                    </Word> app first and uploading it from there.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        How to confirm it worked:
                    </Word> Declaration Status shows "Declared" in green and a Transfer Number is assigned. That means it's
                    queued to ship.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The habit:
                    </Word> as soon as a package lands in Warehouse, screenshot the order and upload it.
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);

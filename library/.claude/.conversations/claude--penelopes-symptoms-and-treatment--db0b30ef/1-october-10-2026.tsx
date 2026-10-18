import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Title>[[ 10 October 2026 ]]</Title>
        <Message
            at="2026-10-10T09:01:16.815559Z"
        >
            <Origin>01a1250b-f9ff-7460-84ae-e1234e1defaf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Catchup on Penelope’s symptoms. She is being treated with ronidazole now. We found this reces. It is well
                formed, which is an improvement. It has blood but the blood seems coagulated rather than fresh. What might
                this mean?
            </Paragraph>
            <Attachment>Uploaded “FullSizeRender.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-10T09:01:31.977922Z"
        >
            <Origin>01a1250b-f9ff-7036-bea5-fb138d0cf7da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Paragraph>
                The pattern you're describing is fairly reassuring: a lower-GI bleed from an inflamed colon that's starting
                to recover.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the blood is coming from.
                </Word> The blood sits on the surface in one patch rather than being mixed through the stool, so the source
                is distal, meaning the colon, rectum, or anus. Darkened or clotted red blood on a formed stool usually means
                it pooled briefly in the distal colon or rectum before she passed it. That's different from melena, which is
                black, tarry, mixed throughout, and points to the upper GI tract. Nothing in the photo looks like melena.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it happens even as things improve.
                </Word> Hematochezia with mucus is a classic feature of Tritrichomonas colitis, and the mucosa heals more
                slowly than stool form normalizes. A firmer stool moving through still-friable colon can also scrape the
                lining and leave a small clot. Better consistency with some residual blood is a common mid-treatment
                picture. The glistening jelly around the clot is likely mucus, which fits the same colitis.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What would change this read:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Blood in more stools over several days, or the amount increasing</Line>
                <Line>Fresh red blood dripping, or blood without stool</Line>
                <Line>Black, tarry stool</Line>
                <Line>Straining with little output, lethargy, vomiting, or reduced appetite</Line>
            </Paragraph>
            <Paragraph>
                It's worth sending this photo to your vet as a mid-course data point. If the next several stools stay formed
                and the blood fades out, that's the trajectory you want.
            </Paragraph>
        </Message>
    </Chapter>
);

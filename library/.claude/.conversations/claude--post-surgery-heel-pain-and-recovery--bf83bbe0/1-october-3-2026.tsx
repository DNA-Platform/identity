import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 October 2026](2026-10-03)</Date>
        </Dated>
        <Title>[[ 3 October 2026 ]]</Title>
        <Message
            at="2026-10-03T13:43:15.035921Z"
        >
            <Origin>01a10201-845d-7b37-8322-493ab7de4b11</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Find information from past chats about my two surgeries. Its been 3 months since the screws were removed.
                For the last month or so there’s been almost no pain in the supinators and I’ve been walking a lot but more
                recently. I’m starting to feel pain in my heel when putting weight on it without shoes. What does it feel
                like to push myself too hard in this stage of healing, 9 months from the primary surgery and 3 months from
                the second
            </Paragraph>
        </Message>
        <Message
            at="2026-10-03T13:43:35.997765Z"
        >
            <Origin>01a10201-845d-7cd8-bdbd-425f4660c101</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Your history from past chats:
                </Word> a lateral calcaneal osteotomy for flatfoot around January. The screws backed out and were removed
                around mid-July. The wound then got infected, was debrided, and you were non-weight-bearing for a while
                before walking again about 3 weeks after the removal. In August we laid out three timelines. The osteotomy
                was already united. The screw tract would consolidate about 6–12 weeks after removal, so roughly now. The
                soft tissue and nerve changes run 12–18 months from the first surgery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What healthy overload usually feels like at this stage:
                </Word> a diffuse, dull ache in the heel or arch after a long day. It's worse at first steps after rest or
                in the morning, then loosens as you walk. It eases overnight or with a day of lighter activity, and it rises
                and falls with how much you walked the day before. That pattern is soft tissue adapting, not damage. The
                heel fat pad and plantar fascia spent months in a boot and shoes, and they now carry a new load path after
                the correction.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why barefoot specifically:
                </Word> shoes absorb most of the heel-strike impact. Your fat pad and plantar tissues are deconditioned and
                are being asked to take that impact directly, right when your walking volume went up. Pain only when
                barefoot, not in shoes, fits that picture well. It points to a cushioning and capacity problem more than a
                bone problem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What would suggest you've crossed into stressing the bone:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Pain at one spot you can point to with a fingertip, rather than diffuse</Line>
                <Line>Pain when you squeeze the heel from both sides (inside and outside) with your hand</Line>
                <Line>Pain that builds the longer you walk instead of warming up and easing</Line>
                <Line>Ache at rest or at night</Line>
                <Line>
                    Given your infection history: deep pain with warmth, swelling, or redness over the old incision,
                    especially if it's getting worse. That warrants an X-ray and a call to the surgeon rather than waiting.
                </Line>
            </Paragraph>
            <Paragraph>
                If it's the first pattern, the usual approach is to keep shoes on, including at home, for a few weeks. Hold
                your walking volume steady or trim it a little rather than adding more. Reintroduce barefoot time in short
                stretches. Where is the pain: under the heel, the inner side, or near the lateral scar? That would narrow it
                down.
            </Paragraph>
        </Message>
    </Chapter>
);

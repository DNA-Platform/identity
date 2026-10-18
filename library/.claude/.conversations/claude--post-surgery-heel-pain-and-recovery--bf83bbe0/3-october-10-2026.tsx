import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Title>[[ 10 October 2026 ]]</Title>
        <Message
            at="2026-10-10T09:45:11.805732Z"
        >
            <Origin>01a12534-3043-7621-8986-ddb5a3652858</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I still feel the heel pain, so I’ve been trying to stay off of it. It’s not easy, but I stay off of it as
                much as I can. But now I have a new pain developing in the top left of my foot. This reminds me of the pain
                that prompted me to get the surgery in the first place. It was apparently pain from stress on my cartilage
                due to my flat foot warping. How do I know if that’s the pain I’m feeling or if it’s just a part of this
                recovery
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:45:26.890826Z"
        >
            <Origin>01a12534-3043-70e5-be5d-4c71db486db1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Most likely this is compensation, not your original problem coming back. The timing points that way: it
                started right after you began keeping weight off your heel. To do that, people shift load forward and change
                how they walk, often gripping with the toes or walking on the forefoot or outer edge. That puts unusual
                stress on the top of the midfoot and the tendons running over it, and a new ache there within days or weeks
                is a classic result.
            </Paragraph>
            <Paragraph>
                Recurrence is less likely for a structural reason. The osteotomy permanently moved your heel bone, and the
                bone is now fully healed in its new position. So the correction can't drift back the way an untreated flat
                foot gradually collapses. Some soft-tissue sag is possible, but not a return to the old geometry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Signs it's compensation:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It started with the change in how you walk.</Line>
                <Line>It's sore along the top of the foot rather than deep in one joint.</Line>
                <Line>It's worse after long periods of altered walking.</Line>
                <Line>It eases when you walk normally in your arch supports.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Signs it may be the old joint pain:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It sits in exactly the same spot and feels the same as before surgery.</Line>
                <Line>It's a deep ache at one joint, sometimes with swelling.</Line>
                <Line>It's worse on uneven ground or stairs.</Line>
            </Paragraph>
            <Paragraph>You can also check the arch yourself:</Paragraph>
            <Paragraph>
                <List />
                <Line>Stand barefoot and compare the arches of both feet.</Line>
                <Line>Try a single-leg heel raise on the operated foot. The heel should swing inward as you rise.</Line>
            </Paragraph>
            <Paragraph>
                If the arch has visibly flattened, or the heel doesn't swing inward, that's worth a standing X-ray and a
                surgeon visit.
            </Paragraph>
            <Paragraph>
                The practical step is probably the opposite of what you've been doing. Rather than avoiding the heel, walk
                normally in your supports and let the heel take its share of load in moderate amounts. If the top-of-foot
                pain fades within a week or two of that, it was compensation.
            </Paragraph>
            <Paragraph>
                Is it on the inner side (toward the big toe) or the outer side of the top of the foot? And is it the same
                spot as the pain before surgery?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:06:52.189690Z"
        >
            <Origin>01a12548-0802-72bc-a090-af0d58816b10</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Its in the top the outer side, toward the incision. I’m not sure it is the same spot. I remember it hurting
                more than this, but maybe this just hasn’t been agitated enough.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:07:02.686729Z"
        >
            <Origin>01a12548-0802-7da2-80d8-c1138f8fe9a6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The outer top of the foot fits compensation even better, and there are two reasons it would show up now:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Keeping weight off the heel
                    </Word> usually means rolling onto the outer edge of the foot.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Arch supports
                    </Word> push load toward the outer side by design.
                </Line>
            </Paragraph>
            <Paragraph>
                You've increased both recently, and together they load the outer column of the foot (the cuboid and the base
                of the fifth metatarsal), which isn't used to it.
            </Paragraph>
            <Paragraph>
                There's one overlap to sort out. Pre-surgery flatfoot pain on the outer side is often impingement at the
                sinus tarsi, a soft hollow just in front of and below the outer ankle bone. The original osteotomy is
                designed to relieve exactly that. Pressing on a few spots can help tell them apart:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Sinus tarsi
                    </Word> (the soft hollow in front of the ankle bone): deep pain there that feels like your old pain
                    would suggest the joint.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Further forward along the outer edge
                    </Word> (midfoot, toward the bump at the base of the little toe's bone): that's lateral-column overload
                    from how you're walking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Burning, tingling, or zinging when you tap near the scar:
                    </Word> that's the sural nerve, which was already sensitive. Scar tissue around it can flare when you
                    put new pressure or tension on the area.
                </Line>
            </Paragraph>
            <Paragraph>
                Your sense that the old pain was worse is meaningful. Pain from a collapsing foot tends to build steadily
                with activity. Compensation pain is milder and tracks how you've been walking.
            </Paragraph>
            <Paragraph>
                The practical test is the same as before: walk as evenly as you can, letting the heel take its share, and
                see whether this fades over a week or two. If it keeps building, or turns out to be in the sinus tarsi spot
                and feels like your old pain, that's the point for a standing X-ray and a visit to your surgeon.
            </Paragraph>
        </Message>
    </Chapter>
);

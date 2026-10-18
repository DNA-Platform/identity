import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Title>[[ 4 July 2026 ]]</Title>
        <Message
            at="2026-07-04T08:13:31.808781Z"
        >
            <Origin>019f2c31-24ef-77b5-8b94-745a4b8e103b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If I have to get the screw removed in the future, what is the recovery timeline for that?</Paragraph>
        </Message>
        <Message
            at="2026-07-04T08:14:47.750639Z"
        >
            <Origin>019f2c31-24ef-7828-be70-f2f0be101b9f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “calcaneal screw hardware removal recovery timeline weight bearing return to activity
                foot”
            </Action>
            <Paragraph>
                These results are mostly about the original fracture/osteotomy healing, not isolated hardware removal, which
                is a very different and smaller procedure. Let me search that specifically.
            </Paragraph>
            <Action>
                Searched the web for “isolated screw hardware removal foot ankle recovery time return to activity weight
                bearing after removal”
            </Action>
            <Paragraph>
                Different order of magnitude from the surgery you're dreading, and that's the headline: because the bone is
                already healed, screw removal recovers on a soft-tissue-and-wound timeline, not a bone-healing one. You're
                not waiting for anything to knit — the hard part is already behind you.
            </Paragraph>
            <Paragraph>The typical shape of it:</Paragraph>
            <Paragraph>
                The procedure itself is outpatient day surgery, usually done through your existing scar, under regional or
                general anesthesia. Pulling a single screw out of united bone is quick — often a matter of minutes once the
                head is exposed, and a prominent or backed-out screw (like yours) is actually easier to grab because it's
                already proud.
            </Paragraph>
            <Paragraph>
                Weight-bearing comes back fast. Since the bone is healed, walking is generally reinstated within a few days
                in a stiff-soled shoe or boot; some surgeons let you bear weight as tolerated almost immediately, others
                keep you in a boot for roughly two to four weeks as protection. Stitches come out around 10–14 days, and you
                keep the wound dry until it's sealed. Soreness and swelling run days to a few weeks, managed with ice and
                elevation. Desk or from-home work resumes within one to two weeks — for you, close to a non-issue given you
                work from home.
            </Paragraph>
            <Paragraph>
                The one genuine gate is the empty screw tract. The hole the screw leaves doesn't instantly become bone — it
                fills first with dense scar that's mechanically bone-like, then remodels over the following weeks. During
                that window the spot is a temporary stress riser. Reassuringly, these holes don't meaningfully raise
                re-fracture risk for ordinary activity; the only real precaution is holding off on high-impact and torsional
                loading — jumping, lateral cutting, i.e. pickleball — for something like 6–12 weeks while it consolidates.
                So normal walking and footwear come back in weeks; the court is the thing that waits a couple months.
            </Paragraph>
            <Paragraph>Two caveats specific to you, since the generic timeline isn't the whole story:</Paragraph>
            <Paragraph>
                The nerve is the real one. Your incision sits squarely in sural territory, and you already have a numb,
                pressure-sensitive strip there. Re-operating through that scar means working in neurologically touchy
                ground, and it cuts both ways. If the prominent screw is part of what's irritating that area, removal might
                quiet it. But going back in near an already-irritated sensory nerve can also transiently worsen the
                numbness, or less commonly provoke a neuroma. It's worth raising explicitly when you weigh the procedure —
                and worth calibrating expectations that the numbness may not resolve just because the screw is gone, since
                the sensory deficit and the hardware pain are different structures. Removal targets the heel pain; it's not
                a reliable fix for the numbness.
            </Paragraph>
            <Paragraph>
                The upside case is decent, though: for symptomatic prominent hardware, something like 70–80% of people
                report reduced pain or irritation and are glad they did it. And all of this assumes the osteotomy is
                radiographically united — which, by the time you'd actually consider this (past a year), it should be.
            </Paragraph>
            <Paragraph>
                Net: what you're bracing for isn't what you'd get. Weeks in a boot, not months on crutches — because the
                bone healing that made the first recovery brutal is already done, and removal just rides the wound closing
                and the hole filling in.
            </Paragraph>
        </Message>
    </Chapter>
);

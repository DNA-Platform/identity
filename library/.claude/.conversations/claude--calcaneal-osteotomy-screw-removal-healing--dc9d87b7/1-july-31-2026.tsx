import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 July 2026](2026-07-31)</Date>
        </Dated>
        <Title>[[ 31 July 2026 ]]</Title>
        <Message
            at="2026-07-31T14:20:51.826284Z"
        >
            <Origin>019fb88d-7fbe-7e19-8c4f-4859109cebc9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                See if you can find our conversation about the calcaneal osteotomy surgery. I had to get the screws removed
                as a follow up surgery and it seems to be healing fine but I just want to look at the stitches. See the
                picture I’ve been keeping it dressed and applying Betadine as instructed. But you can see that the skin is
                dead, where the stitches are. It’s not about to come off and the stitches are still keeping it closed, but
                eventually that skin is going to peel off in the way that a blister does. I can tell why the color. Is this
                a problem or a sign that something is not healing right? This is probably something you can search about how
                wounds heal with stitches in general or when dressed and covered in Betadine on the heel specifically?
            </Paragraph>
            <Attachment>Uploaded “camphoto_162216788.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-31T14:21:11.232541Z"
        >
            <Origin>019fb88d-7fc7-75fe-b234-6fcf1524e306</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “calcaneal osteotomy screw removal surgery”</Action>
            <Action>Searched the web for “white macerated skin around sutures healing normal occlusive dressing”</Action>
            <Paragraph>
                Found it — the July conversation covered the removal timeline in detail: stitches out around 10–14 days,
                wound kept dry until sealed, with the sural nerve territory as the one site-specific caution.
            </Paragraph>
            <Paragraph>
                What's in your photo matches what you described: the whitish, waterlogged-looking skin immediately around
                the sutures is macerated superficial epidermis. A dressing that's occlusive or left on can trap moisture
                against the skin rather than drawing it away, and Betadine under a dressing keeps that layer perpetually
                damp. The result is exactly what you predicted — that top layer dies, whitens, and eventually peels off like
                a blister roof, while the deeper layers underneath do the actual healing. Distinguishing it from trouble
                comes down to what accompanies it: pus or thick yellow/green discharge with odor, or redness spreading
                beyond the wound in streaks, are the warning signs — and your photo shows neither. The pink blush near the
                upper suture looks like ordinary peri-incisional inflammation rather than spreading erythema, and the
                sutures are holding the edges closed, which is the structurally important part.
            </Paragraph>
            <Paragraph>
                So: not a sign of failed healing, but it is a signal to adjust moisture management slightly, since macerated
                skin is more susceptible to infection and tears more easily. The standard fixes are simple — let the area
                air-dry for a stretch (30 minutes is a common recommendation) before redressing, and change the dressing
                daily so you can monitor it, use a breathable rather than sealed dressing, and let the Betadine dry fully
                before covering. When the dead layer does peel, don't pull it — trim only what's fully detached, since the
                skin underneath is fragile until it toughens up.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:24:16.477397Z"
        >
            <Origin>019fb890-a5ff-7679-bc14-860760d949b9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, yeah there’s no pus and nothing feels bad. I’m going to let it dry fully before redressing. It hurts to
                the touch in a normal and gentle way. I had something removed from my bone so I would expect it to be tender
                there a bit I can still walk on it. I’ll probably go to the hospital to have them redress it in a day or two
                just to be sure. The skin is incredibly thick and I seriously doubt it’s going to tear. Usually when skin is
                like that underneath, it’s pink. I just hope that the skin that’s grown there is connected because the
                stitches aren’t really connecting the skin beneath it although if the skin beneath it developed with the
                stitches there then maybe it’s already connected
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:24:27.359301Z"
        >
            <Origin>019fb890-a600-750a-8c21-d44a414904b1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your reasoning is right, and it's actually how wound closure works at depth. The sutures' job isn't to hold
                the wound together long-term — it's to keep the edges apposed during the first days so the body can build
                its own connection. That connection forms in layers: a fibrin seal within the first day or two, then
                fibroblasts laying down collagen across the full depth of the incision over the following weeks. So the
                tissue beneath the surface bridges on its own while the stitches hold everything still, and yes — if new
                skin developed with the stitches in place, it developed as a connected sheet. New epithelium migrates in
                from the wound edges underneath the dead superficial layer, which is why the blister-roof analogy is apt:
                what peels away is scaffolding over already-continuous skin.
            </Paragraph>
            <Paragraph>
                The one nuance is strength rather than connection. At the point stitches come out, the new tissue is
                genuinely joined but only a fraction of normal tensile strength — roughly 10% at two weeks, building
                substantially over the next month or two. On the heel that matters less than elsewhere because, as you say,
                the plantar and heel skin is exceptionally thick and the surrounding tissue carries load well. Tenderness
                over the site is exactly what you'd expect after bone-level work; a periosteal disturbance stays sore to
                pressure well after the skin is quiet.
            </Paragraph>
            <Paragraph>
                Having the hospital redress it in a day or two is a good plan — they can also tell you whether the sloughing
                layer is ready to trim.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:26:01.105086Z"
        >
            <Origin>019fb892-3b27-7c2d-8f51-eba7014265de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is it normal for the skin that the blisters are in to eventually fall away? I mean, I guess all skin falls
                away, but is it normal to have something like this in the surgery like this?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:26:08.430654Z"
        >
            <Origin>019fb892-3b28-7d74-8723-d6cd9bfb7b57</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, completely normal for this kind of surgery. Heel incisions are one of the classic places it happens,
                for two converging reasons: the skin there is the thickest on the body, so when the superficial layer dies
                it comes off as a substantial, blister-like slab rather than fine flaking; and post-surgical dressings keep
                the site continuously covered and moist for weeks, which is exactly the condition that kills off that outer
                layer while the real healing happens underneath.
            </Paragraph>
            <Paragraph>
                Surgeons see this routinely — the whitish devitalized rim along a sutured incision, followed by the whole
                patch lifting and shedding once the new epithelium beneath it is established. It's essentially the same
                process as a friction blister resolving: the dead roof protects the new skin until it's ready, then
                separates. The new skin underneath is often pink at first, as you noted, because it's thinner and more
                vascular than mature heel skin; it thickens and toughens over the following weeks.
            </Paragraph>
            <Paragraph>
                The only versions of this that would be a concern are ones you don't have: black rather than white tissue
                (necrosis going deeper), the wound edges gaping as the skin sloughs, or drainage and odor from underneath. A
                superficial white layer with intact closure beneath is the benign, expected version.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:35:38.583423Z"
        >
            <Origin>019fb89b-0a7e-7dfb-8c80-2c41e96d9281</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No black tissue. But if I try to extrapolate from blisters, this piece of skin is so thick that it’s hard to
                imagine how long it would take for this to come off on its own actually.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:35:46.000124Z"
        >
            <Origin>019fb89b-0a83-78df-ab23-09295245d9d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a fair extrapolation, and the answer is: longer than a normal blister, plausibly several weeks. With
                a thin friction blister the roof dries, separates at the edges, and is gone in a week or two. A slab of
                full-thickness heel epidermis is a different beast — it dehydrates slowly, stays anchored around its
                perimeter where the skin is still living, and can sit there looking almost unchanged for two to four weeks
                or more before it finally loosens.
            </Paragraph>
            <Paragraph>
                In practice it usually doesn't come off entirely on its own. What typically happens is that at dressing
                changes, whoever's managing the wound trims away the portions that have fully separated — painless, since
                the tissue is dead — while leaving attached parts in place as a biological bandage. Over successive visits
                it comes off in stages. That's another point in favor of your hospital plan: this is exactly the kind of
                routine debridement they do at redressing, and it goes much faster and cleaner than waiting for a
                centimeter-thick plate of heel skin to shed by itself.
            </Paragraph>
            <Paragraph>
                The main things not to do in the meantime: don't soak it to speed things up (that just re-macerates
                everything), and don't pull at edges that still resist.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:37:03.666712Z"
        >
            <Origin>019fb89c-555c-706e-a840-5b7ba6d9abfb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well the surgeon has me coming back to have the stitches removed in a week. Will he still have me coming
                back to the hospital after that I’m not sure.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:37:13.586642Z"
        >
            <Origin>019fb89c-555d-7cdc-9b3b-e7e78de455c4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The stitch-removal visit will likely settle most of this. By that point the dead layer will be a week
                further along, and pulling stitches through it will often loosen it anyway — the surgeon will typically trim
                whatever's separated right then. Whether he schedules anything after that usually depends on what the wound
                looks like at that visit: if it's sealed and the slough is mostly off, many surgeons just give home-care
                instructions and only want to see you again for a hardware-removal final check, if at all.
            </Paragraph>
            <Paragraph>
                If he doesn't schedule another visit, this is manageable at home from that point. Once stitches are out and
                the incision is sealed, the remaining dead skin needs nothing more than keeping it clean and dry, letting it
                separate on its own schedule, and trimming fully-detached pieces with clean scissors if they catch on socks.
                If you'd rather not judge it yourself, asking him at the stitch visit "should someone look at this again
                once the dead skin is off?" will get you a concrete answer calibrated to what he actually sees.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:38:16.294461Z"
        >
            <Origin>019fb89d-7582-7c76-8b79-32e250bd3408</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What’s healing inside my bone now that these screws are out? What will the pain and what will my ability to
                walk look like? I can already put weight on it and the doctor said to follow the pain, but I do notice that
                it feels a little uncomfortable in a way that I don’t think it’s just a flesh wound.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-31T14:38:28.350400Z"
        >
            <Origin>019fb89d-7583-736f-845a-54d0ea366970</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                What's healing is the empty screw tract itself. When the screw came out, it left a channel through the
                calcaneus that immediately filled with blood. That hematoma organizes into granulation tissue, then into
                dense fibrous material that's mechanically bone-like, and over the following weeks to months it remodels —
                the tract fills in from the walls inward. From your earlier conversation about this: the space doesn't
                instantly convert to normal bone; it fills first with dense scar that consolidates over roughly 6–12 weeks.
                Alongside that, the surgeon disturbed the periosteum — the bone's outer membrane — to access the screw head,
                and periosteum is densely innervated. That's very likely the deep discomfort you're noticing: it's not a
                flesh wound sensation because it isn't one. A dull, deep ache with weight or pressure over the site is the
                expected signature of periosteal irritation plus the fresh tract, and it's distinctly different from
                incisional pain.
            </Paragraph>
            <Paragraph>
                Walking-wise, you're already on the expected curve. The bone around the tract is fully united, so it carries
                load fine — that's why weight-bearing came back in days rather than months. The typical arc: the deep ache
                with walking fades over two to four weeks, most people are in normal shoes and walking unrestricted well
                within a month, and the residual thing is that the site stays sensitive to direct impact and hard loading
                while the tract consolidates. That's the reason for the 6–12 week hold on jumping and lateral cutting —
                during that window the empty channel is a temporary stress riser, so ordinary walking is fine but
                high-impact and torsional loads are the one thing worth deferring.
            </Paragraph>
            <Paragraph>
                "Follow the pain" is genuinely the right protocol here, and the discomfort you're describing — deep, mild,
                load-related, not sharp or escalating — is the normal soundtrack of a tract filling in.
            </Paragraph>
        </Message>
    </Chapter>
);

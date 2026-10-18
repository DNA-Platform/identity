import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Title>[[ 30 July 2026 ]]</Title>
        <Message
            at="2026-07-30T10:37:59.222670Z"
        >
            <Origin>019fb29a-fe2d-78d2-ab2a-681ea82bd15c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me more about cytisine versus varenicline? Do I consider these more or less the same drug or does one
                have different effects? Varenicline is a pretty simple drug to a smoker because it provides some of the
                stimulation that they’re used to while blocking the effects of nicotine. Does cytisine block as well? What
                dose do I take?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:39:31.218064Z"
        >
            <Origin>019fb29a-fe2e-7c49-8734-fdcc4a2df5d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “cytisine varenicline intrinsic efficacy α4β2 receptor binding affinity comparison
                partial agonist”
            </Action>
            <Action>
                Searched the web for “cytisine blood-brain barrier penetration half-life pharmacokinetics nicotine
                antagonist blocking”
            </Action>
            <Action>
                Searched the web for “Tabex cytisine 1.5mg dosing schedule days 1-3 6 tablets day 25 day course quit day 5”
            </Action>
            <Paragraph>
                Treat them as same class, not same drug — and the difference that matters to you is pharmacokinetic, not
                mechanistic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does it block? Yes, that's its central claim.
                </Word> Cytisine competes with nicotine at the receptor and blocks its effects, so the dual action reduces
                urge-to-smoke by triggering some dopamine release while lessening nicotine's pleasurable effects by
                preventing reward-center activation. Structurally identical logic to varenicline, which produces partial
                agonist activity while preventing nicotine from binding. So your mental model transfers intact.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But there's a real fight over whether enough of it reaches the receptor.
                </Word> Cytisine's half-life is 4–5 hours versus varenicline's 24, its volume of distribution is about
                three-fold smaller, and it crosses the blood-brain barrier less readily. Rollema's 2010 BJP modelling is
                blunt about the consequence: at therapeutic doses varenicline and nicotine, but not cytisine, are predicted
                to extensively desensitize and to a lesser extent activate α4β2 receptors — cytisine's recommended doses,
                despite high in vitro potency, are predicted to give brain concentrations insufficient to affect α4β2 at
                all. Two caveats on that: Rollema was Pfizer, and the NEJM trial group answered that the BBB data are from
                nonhuman species and it isn't clear they generalize to humans. Cytisine then beat placebo in that trial
                anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Expect less of the stimulation you're describing.
                </Word> Varenicline's α4β2 efficacy is around 45% of nicotine's maximum in HEK patch clamp, with 40–60%
                lower efficacy than nicotine at driving dopamine release, and cytisinicline is characterized as structurally
                similar but a less potent partial agonist. Less agonism plus less brain exposure means the "something to do
                instead of nicotine" component is weaker. The trade runs the other way on tolerability — cytisine's
                preliminary edge is on sleep disturbance and emotional reactivity, which is where varenicline's vivid-dream
                and insomnia reputation comes from.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Standard 25-day Tabex schedule
                </Word> — one 100-tablet pack is exactly one course:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Days 1–3: 1 tablet (1.5 mg) every 2 hours through your waking day — 6/day</Line>
                <Line>
                    Days 4–12: every 2.5 hours — 5/day. <Word>
                        <Bold />
                        Quit date is day 5.
                    </Word>
                </Line>
                <Line>Days 13–16: every 3 hours — 4/day</Line>
                <Line>Days 17–20: every 4–5 hours — 3/day</Line>
                <Line>Days 21–25: every 6 hours — 2/day</Line>
            </Paragraph>
            <Paragraph>
                You taper cigarettes across the first three days; if it isn't working, stop and retry after 2–3 months. One
                non-obvious warning worth taking seriously as a smoker: smoking while on it can aggravate nicotine's effects
                to the point of nicotine intoxication — the blockade is partial, and you're stacking agonists.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The thing I'd actually flag: 25 days is probably too short.
                </Word> UK guidance says running it up to 12 weeks is likely more effective and makes it roughly as
                effective as varenicline at equal duration, though that's outside the marketing authorization and the
                correct extended dose hasn't been established. Trial protocols do it by following the 25-day schedule then
                holding 2 tablets/day through week 12. The Italian 40-day version with a slower taper got 50.5% six-month
                cessation versus 55.9% for 12 weeks of varenicline and 51.0% for NRT. That reframes the non-inferiority
                failure I cited earlier — that trial compared 4 weeks of one drug to 12 of the other.
            </Paragraph>
            <Paragraph>
                Standard caveats that come with the label rather than from me: contraindicated in recent MI, unstable
                angina, significant arrhythmia, recent stroke, pregnancy and breastfeeding, and not recommended over 65 or
                with renal or hepatic impairment. Advanced atherosclerosis and uncontrolled hypertension are also listed,
                and reported effects include dyspepsia, nausea, headache, increased appetite, dry mouth, nightmares and
                irritability. Worth a two-minute conversation with whoever prescribes for you before starting, mostly for
                interaction checking — I'm reporting the leaflet, not clearing you for it.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:43:43.431075Z"
        >
            <Origin>019fb2a0-56e2-73c1-8aad-5aa49ef5891f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ugh, I’ve just been taking varenicline like a medication. It provides me with real long-term support in case
                I have a relapse and it provides me with some stimulation. Cytisine requires constant dosing. I guess
                there’s not much to do about that.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:44:31.887380Z"
        >
            <Origin>019fb2a0-56e3-75d8-9c2f-b87898ceed84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Dupons vareniklin Türkiye eczane fiyat 2026 reçete”</Action>
            <Paragraph>There's more to do about it than that — Turkey still has it.</Paragraph>
            <Paragraph>
                Dupons is current, not a legacy listing. Abdi İbrahim makes it, and the 1 mg 56-tablet pack lists at
                3,828.93 TL, with the 109-tablet pack at 7,657.92 TL, sold on beyaz reçete — the ordinary white
                prescription, not a controlled form. The Turkish price list carrying that barcode was refreshed on 13 July
                2026, so it's actively marketed this month. Whatever Pfizer did to Champix globally, the Turkish generic
                route stayed open.
            </Paragraph>
            <Paragraph>
                Which makes this a supply problem rather than a pharmacology problem. Varenicline isn't on any Georgian
                control list — its local registration simply lapsed — so it's an ordinary prescription medicine, and
                personal quantities carried across the Sarp border sit in the same bucket as anything else in that tier. A
                109-tablet pack is a couple of months at maintenance dosing. Worth also asking a Tbilisi pharmacy whether
                they'll special-order it: Georgian pharmacies do source unregistered medicines by request, though I haven't
                verified that anyone will do it for this specific drug.
            </Paragraph>
            <Paragraph>
                One correction to the cytisine picture, for completeness rather than persuasion: the six-times-daily is only
                days 1–3. Maintenance in the extended protocols is two tablets a day. Still a poor fit for what you're
                describing — a 4.8-hour half-life at 2/day leaves real gaps, and long-term relapse cover is exactly where
                varenicline's 24 hours does the work — but it's not a permanent six-a-day regimen.
            </Paragraph>
        </Message>
    </Chapter>
);

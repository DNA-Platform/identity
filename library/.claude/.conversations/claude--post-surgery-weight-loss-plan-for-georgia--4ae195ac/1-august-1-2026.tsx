import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 August 2026](2026-08-01)</Date>
        </Dated>
        <Title>[[ 1 August 2026 ]]</Title>
        <Message
            at="2026-08-01T22:54:05.928877Z"
        >
            <Origin>019fbf89-c21d-79ba-bd55-e8dcdac9a351</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need a diet plan to lose weight that is very regimented. I live in the country of Georgia, so I need to be
                working around what I can find in stores there. We need to come up with a plan for caloric intake that
                satisfies my budget. I might also want to find a personal trainer, but I’m still recovering from a surgery.
                Perhaps we can explore exercise exercises at the gym that burn calories, but keep weight off my foot
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T22:54:11.901336Z"
        >
            <Origin>019fbf89-c21f-7fc4-9303-fca11b93913f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Happy to build this with you, Doug. A few quick things will let me make the calorie math and gym plan
                actually fit you rather than being generic. Also worth noting up front: since you're post-surgery, it'd be
                smart to clear the exercise portion with your surgeon before starting.
            </Paragraph>
            <Action>Used ask user input v0</Action>
        </Message>
        <Message
            at="2026-08-01T22:54:52.510031Z"
        >
            <Origin>019fbf8a-7af4-74c6-86b8-d968db17f0bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Q: How aggressive do you want the deficit? A: Aggressive (~1 kg/week)</Paragraph>
            <Paragraph>Q: Weekly food budget (roughly, in GEL)? A: Not a constraint</Paragraph>
            <Paragraph>Q: Can your foot bear weight at all right now? A: Full, but no impact</Paragraph>
        </Message>
        <Message
            at="2026-08-01T22:55:09.537932Z"
        >
            <Origin>019fbf8a-7af5-7abf-b263-00675bb429ea</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the plan. One number I'm missing is your current weight and height — an aggressive 1 kg/week means a
                ~1,000 kcal/day deficit, which is only safe and sustainable if your maintenance is high enough. For a
                43-year-old man around 90 kg, maintenance is roughly 2,400–2,600 kcal, putting your target at <Word>
                    <Bold />
                    ~1,500–1,600 kcal/day
                </Word>. Tell me your stats and I'll pin it exactly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The regimented structure (Tbilisi-friendly)
                </Word>
            </Paragraph>
            <Paragraph>
                Same meals daily, weighed on a kitchen scale — repetition is what makes it regimented and trackable:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Breakfast (~350 kcal):
                    </Word> 3 eggs + cucumber/tomato, or matsoni (2%) with a small handful of walnuts. Eggs and matsoni are
                    cheap and everywhere in Georgia.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lunch (~500 kcal):
                    </Word> 150–200 g chicken breast or pork tenderloin, 150 g cooked buckwheat or rice, big salad with 1
                    tsp oil. Carrefour, Agrohub, and Goodwill all carry everything here; buckwheat (гречка) is abundant.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dinner (~450 kcal):
                    </Word> Fish (trout is good and local), or lobio without the bread, plus vegetables. Skip khachapuri,
                    shoti, and khinkali during the cut — they're the calorie bombs in the Georgian diet.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Snack (~200 kcal):
                    </Word> Fruit, or tvorog/khacho (curd cheese) — high protein, cheap, ideal for a cut.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Protein target: ~1.6 g/kg bodyweight
                </Word> to preserve muscle in a deficit. Weigh yourself daily, same time, track the 7-day average — that's
                your real signal.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gym, foot-protective (weight-bearing OK, no impact)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Cardio:
                    </Word> Stationary bike and rowing machine are your two best tools — real calorie burn, zero impact.
                    Swimming if your surgeon clears the incision for water.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Strength:
                    </Word> Seated machines (chest press, rows, lat pulldown, leg extension, seated leg curl), plus dumbbell
                    work from a bench. Skip squats, lunges, treadmill, and jumping until cleared.
                </Line>
                <Line>
                    Three strength sessions + 3–4 bike/row sessions of 30–45 min per week pairs well with the deficit.
                </Line>
            </Paragraph>
            <Paragraph>
                A trainer is worth it once your surgeon signs off — bring the surgical notes so they program around the foot
                rather than guessing.
            </Paragraph>
            <Paragraph>
                What's your current weight and height, and I'll lock in the exact calorie and protein numbers?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:16:09.441082Z"
        >
            <Origin>019fbf9d-f58a-7eb2-951f-c55d2d1850c5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m 5’7 and 180 lbs. 1500 is about what I am for to be able to lose weight. I also have the problem that I
                take quetiapine, which makes me hungry. So some of these calories have to be right before bed. I think I do
                best with a period of fasting so we might need to work that into my structure. I don’t eat until dinner,
                perhaps. Are there any diets like that?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:16:23.120712Z"
        >
            <Origin>019fbf9d-f58b-73aa-8a5b-9680bd317c89</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — what you're describing is essentially the <Word>
                    <Bold />
                    Warrior Diet / OMAD family
                </Word> of intermittent fasting: fast through the day, eat everything in a late window. For you it's
                actually a smart match, because quetiapine hunger hits hardest in the evening and night — so putting all
                1,500 kcal where the hunger lives, instead of spreading thin portions across a day of constant hunger, tends
                to work much better in practice.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your numbers at 5'7", 180 lbs:
                </Word> maintenance roughly 2,300–2,500 with light activity, so 1,500 gives you a solid deficit — closer to
                0.8–0.9 kg/week than a full 1.0, which is honestly the better version of "aggressive." Protein target ~130
                g/day.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Structure: 18:6-ish, evening-loaded
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Daytime:
                    </Word> black coffee, tea, water, sparkling water. Bouillon/broth if you need something. Zero-calorie
                    only.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ~6 PM — Main meal (~1,000 kcal):
                    </Word> This is where the real food goes. 250 g chicken, pork, or trout; buckwheat or rice; vegetables
                    with oil; matsoni. Big, satisfying, high protein.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ~9:30–10 PM — Pre-bed meal (~500 kcal):
                    </Word> Built for the quetiapine hunger. Best option: <Word>
                        <Bold />
                        tvorog/khacho (200–250 g) with walnuts and a little honey or fruit
                    </Word> — casein-heavy dairy digests slowly, so it keeps blunting hunger into the night. Eggs also work
                    here.
                </Line>
            </Paragraph>
            <Paragraph>
                The pre-bed slot being <Word>
                    <Emphasis />
                    planned
                </Word> is the key move — it stops medication hunger from turning into an unplanned raid, because the answer
                to "I'm starving" is "yes, and your 500-calorie meal is scheduled in 40 minutes."
            </Paragraph>
            <Paragraph>
                Two practical notes: the first week of fasting until dinner is the hard one, then ghrelin adapts to the
                schedule and daytime hunger genuinely quiets down. And fasted low-intensity cardio (the bike/row sessions)
                slots nicely into late afternoon, right before your window opens — you finish the workout hungry and walk
                straight into your biggest meal.
            </Paragraph>
            <Paragraph>Want me to turn this into a fixed weekly template with a Tbilisi shopping list to match?</Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:36:53.824124Z"
        >
            <Origin>019fbfb0-f435-7a05-85b1-fa4b7d290b8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That’s a good plan. Wait until 6 hours before bed to eat, and put most calories there. I live in Saburtalo
                in Tbilisi. Can you help me find a personal trainer that might be able to meet me at the gym that’s near me
                in Sairme Hill? Maybe I can start interviewing them. I would like someone to help me build a workout routine
                and also a diet.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:37:24.885539Z"
        >
            <Origin>019fbfb0-f43a-7c9c-9c55-4a3e50ad737f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched places for “”</Action>
            <Action>Used places map display v0</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    My top pick for your situation: Prime Fitness &amp; Spa on Tamarashvili
                </Word> — it's the closest to Sairme Hill, reviewers name specific trainers worth asking for (<Word>
                    <Bold />
                    Tamta
                </Word>, praised for structured programming and careful technique monitoring — exactly what you want
                post-surgery — and <Word>
                    <Bold />
                    Beka
                </Word>, noted for clear teaching), and it has a <Word>
                    <Bold />
                    pool
                </Word>, which is the single best rehab-friendly calorie burner available to you. Call +995 32 200 88 80 and
                ask for a trainer consultation; first sessions are often free or cheap.
            </Paragraph>
            <Paragraph>
                Snap Fitness and Oktopus are the 24/7 options if you end up training late before your 6 PM window, and
                Aversi is the budget fallback.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Interview questions that will separate a real trainer from a rep-counter:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    "I'm recovering from foot surgery — how would you modify a program around a no-impact restriction?" A
                    good answer names specific substitutions (seated/machine work, bike, rowing, pool) without hesitation. A
                    bad answer is "we'll go easy."
                </Line>
                <Line>"Have you trained clients through injury recovery before? What did that look like?"</Line>
                <Line>
                    "I eat one main meal at 6 PM plus a small meal before bed, at 1,500 kcal — can you work with that
                    structure?" You want someone who adapts to <Word>
                        <Emphasis />
                        your
                    </Word> protocol, not someone who insists on 6 meals a day.
                </Line>
                <Line>
                    "How do you track progress?" Look for: logged lifts, weekly weight averages, measurements — not vibes.
                </Line>
                <Line>
                    Ask about English (or Russian) fluency up front — in Saburtalo most trainers speak Russian, many speak
                    English, but confirm before paying for a package.
                </Line>
            </Paragraph>
            <Paragraph>
                Expect roughly 40–80 GEL per session, with packages cheaper. One practical suggestion: book single trial
                sessions with two or three trainers before committing to a package — it's the interview, but paid and
                practical, and you'll know within one session who actually programs around the foot versus who just spots
                you.
            </Paragraph>
            <Paragraph>
                Want me to put together the fixed weekly template (meals + training days) so you have the full regimented
                structure in one document?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:39:32.196858Z"
        >
            <Origin>019fbfb3-5db7-7919-8984-c0bf074e904d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Yes, you can put together a template</Paragraph>
        </Message>
        <Message
            at="2026-08-01T23:40:13.697608Z"
        >
            <Origin>019fbfb3-5dba-7907-a17c-8838b3ad05bb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/weekly-plan-doug.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Here's the full template — daily eating structure with rotating meal options, the three strength days built
                entirely around foot-safe machine work, cardio placement timed to end at your eating window, the Tbilisi
                shopping list, and a weekly checklist. Print it or keep it on your phone; the whole system runs on a kitchen
                scale, a training log, and the 7-day weight average.
            </Paragraph>
        </Message>
    </Chapter>
);

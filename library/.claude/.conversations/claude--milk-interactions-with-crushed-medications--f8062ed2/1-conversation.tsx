import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-26T18:20:04.995905Z"
        >
            <Origin>019f9fa8-a93f-7407-93a0-625eb690bfa5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are there any over-the-counter or prescription medication’s where if you had to take the powder because the
                tablet was crushed up it would be a problem taking it with milk because the milk would interact? I mean,
                using an SSRI or a benzo or a commin psychedelic as a control. Does milk cause any of these to change their
                efficacy
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T18:21:06.556279Z"
        >
            <Origin>019f9fa8-a946-7375-a2e4-5da3a8f0faed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, but the list is short and specific — and your three control classes aren't on it.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The mechanisms that actually matter
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Calcium/magnesium chelation
                </Word> — the dominant one. Insoluble complexes form in the gut lumen and the drug never gets absorbed:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Tetracyclines (tetracycline worst, ~50%+ AUC loss; doxycycline and minocycline much less affected, more
                    lipophilic)
                </Line>
                <Line>Fluoroquinolones (cipro loses roughly a third of AUC with milk or yogurt; levofloxacin similar)</Line>
                <Line>Bisphosphonates — calcium essentially abolishes absorption, water only</Line>
                <Line>Levothyroxine, oral iron, dolutegravir/raltegravir, mycophenolate</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Amino acid competition
                </Word> — levodopa. Milk protein competes for LAT1 at both the gut wall and the BBB. This is a real efficacy
                hit, not theoretical.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Enzymatic degradation
                </Word> — 6-mercaptopurine. Milk contains xanthine oxidase, which chews it up before absorption. Documented
                reduced bioavailability in pediatric ALL cohorts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Fat-enhanced absorption
                </Word> — the opposite problem. Griseofulvin, albendazole, isotretinoin, itraconazole capsules all absorb
                better with whole milk's fat.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    pH
                </Word> — mostly moot in your crushing scenario, since you've already destroyed the enteric coating.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your controls
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SSRIs
                </Word> — nothing. No chelation chemistry, no meaningful AUC change. Sertraline's bioavailability actually
                rises ~30–40% with food generally, but it's not considered clinically significant and the label permits
                either. Milk buffers the nausea, which is the more common practical problem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Benzos
                </Word> — no AUC interaction. Food delays Tmax, which for a lipophilic drug taken for subjective effect
                means a slower, blunter rise rather than less total exposure. Whole milk would soften onset somewhat. One
                mechanistic edge case: clorazepate is a prodrug requiring gastric acid to convert to nordiazepam, so
                anything buffering pH theoretically matters — though milk isn't an antacid dose and I'd expect the effect to
                be small.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Psychedelics
                </Word> — psilocybin is dephosphorylated to psilocin by alkaline phosphatase; milk doesn't touch that
                chemistry. Food delays onset and reduces nausea, nothing more. LSD's food-effect PK is thinly characterized
                in the modern literature — I'd hold that one loosely. The one genuine dairy caution in this space is
                tyramine with MAOIs (harmala alkaloids included), and that's aged/fermented dairy, not fresh milk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Crushing-specific
                </Word>
            </Paragraph>
            <Paragraph>
                Once crushed, your remaining variables are chelation, taste masking, and powder adhering to the glass. Milk
                is good at the second and bad at the first. Rinse the container and drink the rinse — a non-trivial fraction
                of a crushed dose sticks to the sides, more so with a viscous vehicle.
            </Paragraph>
            <Paragraph>
                My chelation percentages are from memory and approximate; the direction and rank ordering I'm confident
                about, the specific figures less so.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T18:22:49.276694Z"
        >
            <Origin>019f9fab-26d1-7ca8-bb98-789f8149f51d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So - random selection but: lamotrigine, quetiapine, MDMA, addrrall - all can be taken with milk without
                problem as just a random selection
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T18:23:06.843197Z"
        >
            <Origin>019f9fab-26d2-7941-872d-2a9b04cfcc0f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right — all four are clear.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lamotrigine
                </Word> — no food effect at all. Absorption is essentially complete and unaffected by anything in the
                stomach. No chelation chemistry. The only crushing note is that it's bitter, so milk is actually a
                reasonable vehicle here.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quetiapine
                </Word> — IR has no clinically meaningful food effect. XR is labeled to be taken with a light meal (~300
                kcal), which raises Cmax somewhat and AUC modestly; a glass of milk is roughly in that caloric range, so if
                anything it's mildly in the right direction rather than a problem. Crushing XR is its own issue — you lose
                the extended release and get an IR-like spike — but that's independent of the milk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    MDMA
                </Word> — no chelation, no enzymatic vulnerability. Food delays Tmax and blunts the rise, milk does this a
                bit more than water because of fat and gastric emptying. Nothing touching total exposure. The dairy caution
                in this space is aged/fermented tyramine sources with MAOIs, which fresh milk isn't.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Amphetamine
                </Word> — the only one of the four with a mechanism that's even nearby, and it's urinary pH rather than the
                gut. Amphetamine is a weak base; alkaline urine increases tubular reabsorption and extends half-life, acidic
                urine clears it faster. The documented interactions are with acidifiers — ascorbic acid, fruit juices —
                reducing levels. Milk sits near neutral (slightly acid-forming by PRAL, but trivially so), so it doesn't
                move that dial. A large volume of milk has some weak buffering action in the stomach, which nominally favors
                absorption, but not to a degree anyone measures.
            </Paragraph>
            <Paragraph>
                Practical upshot for the crushed-powder scenario: milk is a good vehicle for all four, mainly for taste.
                Rinse the glass and drink the rinse — bitter powders in particular tend to leave residue clinging to the
                sides.
            </Paragraph>
        </Message>
    </Chapter>
);

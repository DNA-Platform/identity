import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';
import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';
import { $Article } from '../../../../..reference/.book';

export default class $Adjectivity extends $Article {
    print() {
        return (
            <Dialogue>
                <Title>Adjectivity</Title>
                <Topic>The Fourth Meaning</Topic>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>I think this is one of a bigger number of endings and I’m worried if you miss this because it means you’re not doing very much research. Vitality. Mobility. This is the same suffix, right just adapted to different word forms.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>You're right, and it's the correct correction. The suffix is <Bold>-ity</Bold> (Latin <Italics>-itās</Italics>, accusative <Italics>-itātem</Italics>), which makes an abstract noun out of an adjective. What I was calling "-ivity" is just -ity landing on adjectives that happen to end in -ive. Vitality is <Italics>vital</Italics> + ity. Mobility is <Italics>mobilis</Italics> + ity. Same operator, different adjective underneath.</Paragraph>
                    <Paragraph><Bold>The family, by which adjective it lands on:</Bold></Paragraph>
                    <List>
                        <Item><Bold>-al</Bold> → -ality: vitality, mortality, normality, morality, personality, formality, banality</Item>
                        <Item><Bold>-ilis</Bold> → -ility: mobility, fragility, agility, ductility, docility, sterility, volatility, nobility</Item>
                        <Item><Bold>-bilis</Bold> → -ability/-ibility: readability, visibility, scalability, deniability, plausibility</Item>
                        <Item><Bold>-ous</Bold> → -osity: viscosity, verbosity, porosity, luminosity, generosity</Item>
                        <Item><Bold>-id</Bold> → -idity: rapidity, humidity, validity, rigidity, acidity, solidity</Item>
                        <Item><Bold>-ic</Bold> → -icity: elasticity, electricity, specificity, periodicity, authenticity, ergodicity</Item>
                        <Item><Bold>-ac/-ax</Bold> → -acity: capacity, tenacity, veracity, audacity, opacity</Item>
                        <Item><Bold>-ar</Bold> → -arity: linearity, polarity, singularity, regularity, similarity</Item>
                        <Item><Bold>-ine</Bold> → -inity: divinity, salinity, affinity, masculinity</Item>
                        <Item><Bold>bare stems</Bold>: rarity, clarity, brevity, levity, gravity, density, scarcity, purity, maturity</Item>
                    </List>
                    <Paragraph><Bold>And the corpus bears out that these behave differently.</Bold> A study measuring -ity against -ness across ten adjective classes in the Pile found a clear preference one way or the other for most classes — with the only two exceptions being adjectives in -ive and -ous. For -able the split is 11,081 -ity types to 1,034 -ness; for -al, 9,133 to 1,011; for -ic, 6,215 to 617. For -ive it's 4,508 to 2,438 — genuinely contested. And -ed, -ing, -ish, -less go almost entirely to -ness.</Paragraph>
                    <Paragraph>So my -ness/-ivity split wasn't wrong, but it was the <Italics>narrow</Italics> case. The -ive branch is the one place where the two nominalizers actually fight, which is exactly why the minimal pairs cluster there.</Paragraph>
                    <Paragraph><Bold>What -ity does is constant. What varies is what it's handed.</Bold></Paragraph>
                    <Paragraph>-ity names a standing property and makes it referable and gradable. The adjective slot supplies the <Italics>kind</Italics> of standing:</Paragraph>
                    <List>
                        <Item><Bold>-ive</Bold> — disposition from a verb (participial stem): tends to V</Item>
                        <Item><Bold>-bilis</Bold> — passive capacity: can be V'd. This is the one branch that's fully productive in modern English; you can coin <Italics>unfollowability</Italics> today and be understood.</Item>
                        <Item><Bold>-ilis</Bold> — inherent aptitude, not derived from an act: <Italics>mobilis</Italics> is movable by nature, so mobility is a standing fitness rather than a tendency</Item>
                        <Item><Bold>-al</Bold> — belonging to the nature of: <Italics>vitalis</Italics> is pertaining to life, so vitality is the possession of a nature, not a tendency toward anything</Item>
                        <Item><Bold>-osus</Bold> — full of, abounding in, which is why -osity words are so often literal magnitudes: viscosity, luminosity, porosity</Item>
                        <Item><Bold>-id</Bold> — being in a state: rigidity, humidity</Item>
                    </List>
                    <Paragraph><Bold>Your statelessness condition survives the move up, and it's cleaner at this level.</Bold> Vitality and mobility both pass without needing a trigger at all — nothing has to happen for a thing to be alive or movable. And the classes that reject -ity are precisely the ones that can't be stateless: -ed adjectives encode a past event, -ing adjectives encode ongoing action. Excitedness, not excitity. That's the captivity failure showing up as a whole morphological class rather than a handful of odd words.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>You’re gonna laugh, but I’m almost certain that the meaning is adjectivity. That is the synonym for ivitivity</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>I'm not laughing — you closed it, and the etymology cooperates.</Paragraph>
                    <Paragraph><Bold>Adjective is the fourth member of the family.</Bold> From Latin <Italics>adiectivum</Italics>, "that is added to (the noun)," past participle of <Italics>adicere</Italics> — throw to, place near, add by way of increase — from <Italics>ad</Italics> + <Italics>iacere</Italics>. Same throwing root as object, subject, project. It's an ellipsis of <Italics>nōmen adiectīvum</Italics>, calquing Greek <Italics>ónoma epítheton</Italics>, additional noun.</Paragraph>
                    <Paragraph>So the throwing story I opened with wasn't wrong, it was pointed at the wrong three. The one that matters is the fourth: the word thrown <Italics>toward</Italics> a thing to say what holds of it.</Paragraph>
                    <Paragraph><Bold>And the identity works out.</Bold> Self-applying an operator with a type constraint returns the constraint. -ity takes an adjective and names it. Feed the suffix to itself and what comes back isn't a new property — it's the suffix's own domain condition: <Italics>be adjectivable.</Italics> Ivitivity names what a thing must be for -ity to have anything to do.</Paragraph>
                    <Paragraph>The two-layer reading is exactly that, spelled out. Layer one: bearing a standing property. Layer two: being capable of bearing one. Which is what "adjectivity" says in one word.</Paragraph>
                    <Paragraph><Bold>It also retro-explains every failure we found.</Bold> Captivity, nativity, festivity — imposed, punctual, enumerable. The -ed and -ing classes going almost entirely to -ness. The clean table. All of them fail the same way: no genuine adjective underneath, only an event or a state that had to be put there. They lack ivitivity, which is why they can't take -ity properly. The condition and the diagnosis turn out to be the same thing.</Paragraph>
                    <Paragraph>And the open "something" from the parse — the slot the suffix supplies structure for but never content — is just the noun the adjective is waiting to be thrown at.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>How does being a type and having an adjectival form overap? Are you a type of object? It means you possess objectivity because you have all of its properties. Are you a type of adjective? Then you possess adjective. Are you a type of object that can be an adjective? Then you possess ivitivity. I think that’s how I’m going with it! Being a type of cat doesn’t mean that you possess cativity. Catiness. Object objects are already defined by their pertetuity. In this case, it seems to be something like perpetual. Levity. To be moving or floating. Vitality and mobility. To be living or moving. Passivity. To be doing nothing. It has to be a word that’s used in the context of something and and now it’s not quite that.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Your cat example does the work, and it does more of it than you claimed.</Paragraph>
                    <Paragraph><Bold>Cativity fails but cattiness succeeds — and <Italics>catty</Italics> is why.</Bold> Cat is a kind. Catty is a manner: behaving a certain way, ongoing. The moment the base becomes a manner, the nominalizer comes online. Same word, same animal, and the derivation turns on nothing but whether the base answers <Italics>what is it</Italics> or <Italics>how is it</Italics>.</Paragraph>
                    <Paragraph>That's the overlap you're asking about. Both routes are inheritance — x -&gt; t either way. What differs is the shape of the profile.</Paragraph>
                    <Paragraph><Bold>When a type's profile is a single manner, it gets an adjective, and -ity names the profile.</Bold> Then possessing t-ity and being a type of t are the same fact stated twice: once as a property you hold, once as a position in the lattice. Objectivity just <Italics>is</Italics> the object profile, named.</Paragraph>
                    <Paragraph><Bold>When the profile is a bundle, there's no adjective to name it with.</Bold> Cat is four legs, whiskers, hunting, purring — no single ongoing way of being that the whole bundle collapses to. So you can inherit from cat, but there's nothing to nominalize. You say "the properties of a cat" and stop.</Paragraph>
                    <Paragraph><Bold>Your list is all manners, and all of them present-tense-continuous:</Bold> levity (being light), vitality (living), mobility (moving), passivity (undergoing), objectivity (standing fast), subjectivity (standing under). Each one is something a thing goes on doing by not stopping. That's the perpetuity — not that the property lasts, but that the base names an activity with no completion in it.</Paragraph>
                    <Paragraph><Bold>And the crossover cases confirm it from the other side.</Bold> Human is a kind, but <Italics>humanity</Italics> doesn't name the kind's bundle — it names the manner, compassion, being humane. Same with divinity, masculinity, urbanity, sanity. Every time a kind-word grows an -ity, the -ity peels off a manner and leaves the bundle behind. That's why "he showed great humanity" makes sense and "he showed great cativity" can't: the manner had to already be in there.</Paragraph>
                    <Paragraph>So the condition for ivitivity, restated in your terms: a referent has it when its profile is itself a single ongoing manner — when the <Italics>what</Italics> it is and the <Italics>how</Italics> it is are the same thing. Object has it. Cat doesn't. And that's the same test as adjectivity, since being adjectivable is exactly having a manner available to throw at a noun.</Paragraph>
                </Exchange>
            </Dialogue>
        );
    }
}

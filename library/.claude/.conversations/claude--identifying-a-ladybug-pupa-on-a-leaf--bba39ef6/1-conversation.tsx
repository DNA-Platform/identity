import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-04T11:08:41.154533Z"
        >
            <Origin>019e9252-5fda-7029-8ddf-acf0e855f6d0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What creature is this? Not a lady bug. Looks larval maybe. Attached to the leaf of an ape tree
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-04T11:08:59.888751Z"
        >
            <Origin>019e9252-5fda-7814-99c4-cfdee704f2c6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a ladybird (ladybug) <Word>
                    <Bold />
                    pupa
                </Word> — so your "larval maybe" instinct is in the right family, just one stage further along. It's not the
                larva and not the adult; it's the transitional stage in between.
            </Paragraph>
            <Paragraph>
                Here's what gives it away: ladybird larvae, when they're ready to transform, glue their rear end to a leaf
                surface and hunch up into that domed, immobile capsule. The dark fringy bit at the top of the creature is
                the shed, crumpled larval skin it's still anchored by. The orange body with irregular black blotches is
                classic pupal coloring.
            </Paragraph>
            <Paragraph>
                Species-wise, the orange-with-black-spots pattern points most likely to <Word>
                    <Emphasis />
                    Harmonia axyridis
                </Word> — the harlequin or Asian lady beetle — which is extremely common and a voracious aphid eater. I
                can't confirm the exact species from one photo with certainty, but the genus/family read (ladybird pupa) is
                solid.
            </Paragraph>
            <Paragraph>
                The good news for your apple tree: this is a beneficial insect. Both the larvae and adults eat aphids and
                other soft-bodied pests, so having them pupating on your leaves is a sign the tree's ecosystem is doing its
                own pest control. Leave it be and in a few days an adult beetle will emerge.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-04T11:09:34.147390Z"
        >
            <Origin>019e9253-2fd3-702e-9b8c-898642ac68a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is a colorado bug? Similar?</Paragraph>
        </Message>
        <Message
            at="2026-06-04T11:09:43.229195Z"
        >
            <Origin>019e9253-2fd3-70dc-b25e-a3e260f71253</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, quite different — and the confusion is worth clearing up because they're ecological opposites.
            </Paragraph>
            <Paragraph>
                The Colorado bug almost certainly means the <Word>
                    <Bold />
                    Colorado potato beetle
                </Word> (<Word>
                    <Emphasis />
                    Leptinotarsa decemlineata
                </Word>), called <Word>
                    <Emphasis />
                    колорадский жук
                </Word> in Russian — which is probably where you've heard the name, since it's one of the most notorious
                garden pests across the former Soviet space and Europe.
            </Paragraph>
            <Paragraph>Here's the contrast that matters:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    ladybird
                </Word> in your photo is a <Word>
                    <Emphasis />
                    predator and a friend
                </Word>. It eats aphids. You want it around.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    Colorado potato beetle
                </Word> is a <Word>
                    <Emphasis />
                    pest and an enemy
                </Word>. The adult is rounded like a ladybird and similar in size, but it's yellow-tan with ten distinct
                black <Word>
                    <Bold />
                    lengthwise stripes
                </Word> running down its wing cases — stripes, not the random spots a ladybird has. Its larvae are fat,
                humpbacked, brick-red or orange grubs with rows of black dots along the sides, and they devour potato,
                tomato, eggplant, and pepper foliage, stripping plants bare.
            </Paragraph>
            <Paragraph>
                So the two can look superficially alike at a glance — small, domed, orange-and-black — but the rule of thumb
                is: <Word>
                    <Bold />
                    spots = usually a ladybird (good); lengthwise stripes = Colorado beetle (bad).
                </Word> And the Colorado beetle goes after nightshades, not apple trees, so it isn't what's on your leaf.
            </Paragraph>
        </Message>
    </Chapter>
);

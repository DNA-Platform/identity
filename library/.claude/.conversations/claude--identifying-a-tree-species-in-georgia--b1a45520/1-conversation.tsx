import { Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 August 2026](2026-08-29)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-29T11:23:34.060781Z"
        >
            <Origin>01a04d43-fed8-70a6-9f17-cab67084be3c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What kind of tree do you think this is? I am in Georgia, but I’m in a park that has some trees that are from
                distant places.
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-29T11:23:42.038839Z"
        >
            <Origin>01a04d43-fed8-70ad-b53b-93b7e4a92cfb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This looks like a Persian/English walnut, <Word>
                    <Emphasis />
                    Juglans regia
                </Word>. The features pointing that way: odd-pinnately compound leaves with roughly 5–9 large, broad
                leaflets, smooth (untoothed) leaflet margins, the terminal leaflet largest, pale glaucous undersides, and
                stout twigs.
            </Paragraph>
            <Paragraph>
                The smooth margins are the main thing separating it from black walnut and hickories, which have toothed
                leaflets and usually more of them. <Word>
                    <Emphasis />
                    J. regia
                </Word> is native to the Caucasus, so this one wouldn't even need to be an import — walnut trees are common
                in Tbilisi.
            </Paragraph>
            <Paragraph>
                A quick check if you're back at the tree: crush a leaflet and smell it (walnut has a distinct spicy-resinous
                scent), and look for round green husked nuts on the branches — late August they'd be nearly full size. I'm
                going off leaf morphology alone in one photo, so treat this as a strong candidate rather than a confirmed
                ID.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T11:24:29.259420Z"
        >
            <Origin>01a04d44-d7a4-704b-af9a-a527d83e44d2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We don’t see nuts on the tree and I’m being told that this would be the time of year for them so are you
                sure or is it walnut the wood that is not necessarily the nut
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-29T11:24:42.683440Z"
        >
            <Origin>01a04d44-d7a4-77f0-84b2-0485928ab681</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Same tree, same read: the leaves still look like <Word>
                    <Emphasis />
                    Juglans regia
                </Word> to me, and yes, walnut the wood and walnut the nut come from the same trees — there's no separate
                "timber walnut" species that doesn't fruit.
            </Paragraph>
            <Paragraph>
                Absence of nuts doesn't rule it out. The most likely reason is age: this trunk has smooth grey bark with no
                fissuring, which suggests a young tree, and seed-grown walnuts typically don't bear for 7–10 years (grafted
                ones 4–5). Other common reasons are a late spring frost killing the flowers, heavy pruning, or an off year —
                walnuts bear irregularly.
            </Paragraph>
            <Paragraph>
                That said, one alternative worth checking, since you mentioned the park has exotic trees: Kentucky
                yellowwood (<Word>
                    <Emphasis />
                    Cladrastis kentukea
                </Word>) also has pinnate leaves with smooth, untoothed leaflets, smooth grey bark, and rarely fruits when
                young. Two field checks separate them:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Crush a leaflet and smell it — walnut is strongly aromatic (spicy, a bit medicinal); yellowwood has no
                    scent.
                </Line>
                <Line>
                    Look at where leaflets attach along the leaf stalk — walnut leaflets sit in opposite pairs; yellowwood
                    leaflets alternate up the stalk. In your photos they look paired, which favors walnut.
                </Line>
            </Paragraph>
            <Paragraph>
                If it smells of nothing, I'd shift toward yellowwood. I'm working from leaf shape in two photos, so the
                smell test is worth more than my read.
            </Paragraph>
        </Message>
    </Chapter>
);

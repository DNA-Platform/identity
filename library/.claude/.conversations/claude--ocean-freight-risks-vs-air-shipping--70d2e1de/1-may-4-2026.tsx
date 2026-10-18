import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Title>[[ 4 May 2026 ]]</Title>
        <Message
            at="2026-05-04T18:30:13.946991Z"
        >
            <Origin>019df441-5abd-72ea-909c-eac975544ec6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m working on shipping with Navis. They gave me a quote for air shipping and now they’re trying to get me a
                quote for freight shipping on the ocean. I asked them if there’s any additional risks and the woman said she
                didn’t understand what I meant. I suppose they don’t want to speak to risk. Might there be additional risk
                to freight shipping compared to air shipping
            </Paragraph>
        </Message>
        <Message
            at="2026-05-04T18:30:44.984593Z"
        >
            <Origin>019df441-5abd-71d8-bb3a-75650af9d0c7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, ocean freight carries materially more risk than air, and the fact that they didn't want to engage on
                that question is itself worth noting. The main differences:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Transit time and exposure.
                </Word> Ocean is weeks rather than days, which compounds every other risk — more handling events, more time
                in port, more weather exposure, more chances for delay from congestion or strikes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Physical damage.
                </Word> Salt air, humidity swings, container condensation ("container rain"), and vibration over long
                voyages can degrade goods that travel fine by air. If your cargo is LCL (less-than-container-load, shared
                with others), it gets handled at consolidation and deconsolidation warehouses on both ends, which is where a
                lot of damage and pilferage happens.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    General Average.
                </Word> This is the one most shippers don't know about and the one I'd push them on specifically. Under
                maritime law, if the ship encounters a casualty — fire, grounding, having to jettison cargo — all cargo
                owners are required to contribute proportionally to the salvage and rescue costs, even if your goods were
                untouched. Your container can be held hostage at port until you post a General Average bond, which can be a
                percentage of cargo value. This happened to thousands of shippers on the Ever Given and the ONE Apus.
                Without all-risk marine cargo insurance that includes GA coverage, you can be on the hook for tens of
                thousands on a small shipment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Loss.
                </Word> Roughly a thousand containers are lost overboard per year. Rare per-shipment but nonzero. Theft at
                origin and destination ports is more common.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical recommendation:
                </Word> ask Navis specifically (1) whether your shipment is FCL or LCL, (2) whether they're offering
                all-risk marine cargo insurance with General Average coverage, and (3) what the declared value basis is for
                any liability they carry as a forwarder — their default carrier liability under the Hague-Visby rules is
                trivially low, often around $500 per package or a per-kilo amount. If they can't answer those, that tells
                you something.
            </Paragraph>
            <Paragraph>
                What's the route and roughly what's being shipped? I can give you a more specific read on which of these
                actually matter for your situation.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-04T18:32:33.054241Z"
        >
            <Origin>019df443-7a59-7523-a8ea-77085df88674</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are there corresponding risk risks with air? What do you think savings I would experience compared to the 7K
                quote that they gave me for shipping all of my belongings and art
            </Paragraph>
        </Message>
        <Message
            at="2026-05-04T18:33:12.575964Z"
        >
            <Origin>019df443-7a59-7210-b097-084ae19204f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Air has different risks, generally less severe but not zero:</Paragraph>
            <Paragraph>
                Physical damage is lower — shorter transit, fewer handling events, no salt or sustained humidity. But cargo
                holds get cold (modern freighters mostly have climate control, but not all do), pressure changes at altitude
                can affect sealed containers and stretched canvases, and theft at hub airports is real though typically less
                than at ports. The bigger gotcha is liability: under the Montreal Convention, air carrier liability caps at
                about 22 SDR per kilo (~$30/kg). For art worth far more than its weight, you need declared-value insurance
                regardless of mode — the carrier's baseline coverage is meaningless for valuable pieces.
            </Paragraph>
            <Paragraph>
                On savings: ocean LCL typically runs 40–70% cheaper than air for household goods, because LCL is priced by
                volume and household goods are bulky-but-light. Your $7K air quote probably comes back as $2.5–4K by ocean,
                depending on cube-to-weight ratio. Dense cargo (books, tools) saves less; bulky cargo (furniture, frames)
                saves more. Add roughly $300–600 for marine cargo insurance with General Average coverage, which you should
                not skip.
            </Paragraph>
            <Paragraph>
                The complication is that you're shipping art. Weeks in a container through the Black Sea route to Poti or
                Batumi — humidity swings, temperature cycling, vibration — is rough on canvas, paper, and wood, even
                well-crated. I'd push back on ocean for the art portion specifically. The play worth asking Navis about is
                splitting it: art and sensitive items by air, bulk household goods by ocean. That usually beats either
                single-mode quote on total landed cost, and it isolates the risk to the cheaper-to-replace stuff.
            </Paragraph>
            <Paragraph>What's the rough split between art and general belongings in the shipment?</Paragraph>
        </Message>
    </Chapter>
);

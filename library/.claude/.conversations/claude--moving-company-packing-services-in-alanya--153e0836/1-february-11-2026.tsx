import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Title>[[ 11 February 2026 ]]</Title>
        <Message
            at="2026-02-11T19:02:59.949315Z"
        >
            <Origin>019c4e15-d9b9-753f-b999-bbe4044e1bde</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are there any companies in Alanya that will help pack boxes for moving? How much might they cost?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-11T19:03:25.566392Z"
        >
            <Origin>019c4e15-d9b9-7dd3-92b8-b30e3c587ebb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Alanya Turkey moving packing companies”</Action>
            <Action>Searched the web for “Alanya nakliyat paketleme hizmeti fiyat”</Action>
            <Paragraph>
                Yes, there are quite a few local moving companies (nakliyat firmaları) in Alanya that offer packing services
                as part of their moving packages. Here's what I found:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Local Alanya Companies with Packing Services:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Özgüven Nakliyat
                    </Word> (ozguvennakliyat.net) — Offers careful packing (paketleme), expert assessment of your home
                    before the move, and covered truck transport. Serves all 81 provinces of Turkey.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Zertaş Nakliyat
                    </Word> (evdenevealanya.com) — Based in Cikcilli Mah., Alanya. They do full packing including bubble
                    wrap for fragiles, furniture disassembly/reassembly, and wardrobe boxes for clothes. Serves Alanya,
                    Gazipaşa, Antalya, and intercity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tekin Nakliyat
                    </Word> (alanyatekinnakliyat.com.tr) — Founded 2003 in Kestel. Covers all Alanya neighborhoods including
                    Konaklı, Mahmutlar, Avsallar, Kargıcak, etc. Insured, with furniture specialists on staff.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mahmutlar Nakliyat
                    </Word> (listed on alanya-go.com) — Specifically in Mahmutlar. Offers packing, crane/platform services
                    for bulky items, and door-to-door delivery.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Alanya Nakliyat
                    </Word> (alanyanakliyat.com, phone: 0533 428 44 59) — Uses bubble wrap, foam-lined boxes for fragiles,
                    and stretch film/blankets for furniture. Offers online quotes via photo/video of your belongings.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pricing:
                </Word>
            </Paragraph>
            <Paragraph>
                Specific packing-only prices aren't listed separately — it's typically bundled into the overall move cost.
                Based on the listings, local (şehir içi) moves in Alanya start around 1,000 ₺, while intercity moves start
                around 2,500 ₺. For reference, Alanya to Ankara runs roughly 2,800–4,500 ₺, and Alanya to Istanbul around
                2,100–6,000 ₺, depending on volume.
            </Paragraph>
            <Paragraph>
                All these companies do on-site assessments (ekspertiz) where they evaluate your belongings and give a custom
                quote based on volume and distance. The standard approach is to call, send photos/video of your stuff via
                WhatsApp, or have them come look in person.
            </Paragraph>
            <Paragraph>
                Are you thinking about a local move within Alanya, or is this related to a longer-distance move? That would
                affect which companies and price ranges are most relevant.
            </Paragraph>
        </Message>
    </Chapter>
);

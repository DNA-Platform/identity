import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-16T18:07:23.192081Z"
        >
            <Origin>019c67a2-a28e-74de-8672-b1e6289665e5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does amazon exist in tbilisi like wildberries? Or can I order a nearby countries and get it a few days
                later?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-16T18:07:52.537946Z"
        >
            <Origin>019c67a2-a28e-7912-be78-e4877b17285b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Amazon delivery Tbilisi Georgia 2025”</Action>
            <Action>Searched the web for “Wildberries Tbilisi Georgia online shopping alternatives 2025”</Action>
            <Paragraph>
                Short answer: Amazon doesn't operate in Georgia the way Wildberries does — no local warehouse, no pickup
                points, no fast domestic-style delivery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wildberries
                </Word> is actually your best Amazon-like option there. It launched in Georgia in late 2024 and has built
                out a real local presence — by September 2025 there were over 90 pickup points across Tbilisi, Batumi,
                Kutaisi, Rustavi and other cities. Clothing, footwear, cosmetics, and books are the most popular categories.
                So for everyday goods, Wildberries is probably your closest thing to an Amazon experience with fast local
                delivery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Amazon specifically
                </Word>, your options are all forwarding-based:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Freight forwarders
                    </Word> like Dnipro LLC, MyUS, or Strelicia will give you a US (or Russian) address, receive your
                    packages, then ship them to Tbilisi. Dnipro charges about $6.14/kg by air with free pickup from their
                    Tbilisi warehouse. But you're looking at 1-3 weeks total, not a few days.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Amazon International Shopping
                    </Word> lets you filter for items that ship directly to Georgia, but the selection is limited and
                    delivery is slow.
                </Line>
                <Line>
                    Services like <Word>
                        <Bold />
                        Strelicia
                    </Word> specifically handle Wildberries, Ozon, and other Russian store purchases forwarded to Georgia —
                    shipments from Russia go once a week, from other countries every two weeks.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other local/regional e-commerce options
                </Word> worth knowing about: Temu, 2 Nabiji (a Georgian app), Joom, SHEIN, and Trendyol (Turkish) are all
                popular shopping apps in Georgia. Trendyol in particular ships from Turkey and might get things to you
                relatively quickly given the proximity.
            </Paragraph>
            <Paragraph>
                For your situation with limited mobility, Wildberries pickup points + Glovo/Wolt for local stuff is probably
                your most practical combo. If you need something specific from Amazon, the forwarder route works but plan
                for ~2 weeks minimum.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-16T18:09:50.600703Z"
        >
            <Origin>019c67a4-e0f2-70c6-b509-694151ca806c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So how do I set up US to forwarding to georgia?</Paragraph>
        </Message>
        <Message
            at="2026-02-16T18:10:15.889316Z"
        >
            <Origin>019c67a4-e0f2-7bf3-a86e-42088306c445</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “MyUS package forwarding Georgia setup 2025”</Action>
            <Paragraph>Here's the practical setup, comparing your two main options:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: MyUS (best for multiple/larger orders)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Sign up at myus.com — you instantly get a US address in Sarasota, Florida with a unique suite number
                </Line>
                <Line>Shop Amazon (or any US store) and use that MyUS address at checkout</Line>
                <Line>Your MyUS address gives you 0% US sales tax, which is a nice bonus</Line>
                <Line>Packages arrive at their warehouse, they notify you by email</Line>
                <Line>
                    You can wait for multiple orders to arrive, then they consolidate everything into one box (saving up to
                    80% on shipping)
                </Line>
                <Line>Submit a ship request, pick your carrier (DHL, FedEx, UPS)</Line>
                <Line>Express shipping takes about 2-4 business days once it leaves their facility, economy 5-10 days</Line>
            </Paragraph>
            <Paragraph>
                Pricing: Premium membership is free for 3 months, then $9.99/month — this gets you free consolidation and
                repackaging. Shipping cost is weight-based.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Dnipro LLC (cheaper for Georgia specifically)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Register at dniprollc.com — get a US address</Line>
                <Line>Same process: shop, ship to their US address</Line>
                <Line>
                    Air shipping to their Tbilisi pickup location is $6.14/kg, home delivery in Tbilisi adds $5, and
                    warehouse pickup is free
                </Line>
                <Line>Free storage up to 45 days, max parcel weight 30kg</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My recommendation for your situation:
                </Word> Given that you're on mobility aids, MyUS with DHL/FedEx door-to-door delivery is probably worth the
                premium since they deliver right to your address. Dnipro is cheaper per kilo but requires either pickup from
                their warehouse or paying for local delivery separately.
            </Paragraph>
            <Paragraph>
                One heads up: prescription medications (including veterinary) can't be forwarded — so for Penelope's meds,
                that won't work through these services. But for electronics, household stuff, books, specialty items, etc.,
                this is the way to go.
            </Paragraph>
            <Paragraph>
                Want me to look into what the actual shipping cost would be for a typical order weight to Tbilisi?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-16T18:11:15.123703Z"
        >
            <Origin>019c67a6-2a8c-7370-8fa3-667456b5ac2c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does traveling mailbox do this? I already have that, but I don’t know if they do packages.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-16T18:11:36.907701Z"
        >
            <Origin>019c67a6-2a8c-73ba-9621-f01d8f41f3db</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Traveling Mailbox package forwarding international”</Action>
            <Paragraph>
                Yes, you're already set up. Traveling Mailbox can receive packages and forward them anywhere in the world,
                with customs preparation included for free. They claim to have the lowest shipping rates in the industry.
            </Paragraph>
            <Paragraph>Here's how it works with what you already have:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Ship Amazon orders to your Traveling Mailbox address
                    </Word> — they can receive packages from Amazon, UPS, FedEx, all carriers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Log into your dashboard
                    </Word> — you'll see the package show up just like your mail
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Request forwarding
                    </Word> to your Tbilisi address — you pick USPS, FedEx, or UPS, and they consolidate multiple packages
                    at no extra charge
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cost is postage + $2 per shipment
                    </Word> (not per item), so bundling saves a lot
                </Line>
            </Paragraph>
            <Paragraph>A few practical notes:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    First 30 days of package storage is free, then $0.10/lb/day after that — so don't let stuff sit too long
                </Line>
                <Line>
                    All forwarding requests are completed within 24 hours, then transit time depends on the carrier you pick
                </Line>
                <Line>You can bundle multiple Amazon orders into one international shipment to save on shipping</Line>
            </Paragraph>
            <Paragraph>
                So you don't need MyUS or Dnipro at all — just order from Amazon to your existing Traveling Mailbox address
                and have them forward to Georgia. The only advantage of a dedicated forwarder like MyUS would be if their
                bulk international rates to Georgia end up cheaper, but honestly, with consolidation and your existing
                setup, Traveling Mailbox should work fine. Worth doing a test order to see what they quote for shipping to
                Tbilisi.
            </Paragraph>
        </Message>
    </Chapter>
);

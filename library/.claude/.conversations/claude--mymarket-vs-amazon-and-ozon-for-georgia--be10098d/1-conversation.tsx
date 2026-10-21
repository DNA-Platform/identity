import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-01T11:18:52.700539Z"
        >
            <Origin>019c18ed-7242-7cfd-9840-eb68a78eb63e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Compare mymarket to amazon or ozon for georgia? What is the shipping time? Is there a prime delivery? Used
                vs new?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-01T11:19:33.992955Z"
        >
            <Origin>019c18ed-7242-746a-81a7-261f629d2c7d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “MyMarket Georgia shipping delivery time prime”</Action>
            <Action>Searched the web for “mymarket.ge delivery service same day express Tbilisi”</Action>
            <Action>Searched the web for “mymarket.ge used items C2C marketplace review Georgia”</Action>
            <Action>Searched the web for “"mymarket.ge" მიწოდება delivery რამდენ დღეში”</Action>
            <Paragraph>Based on the search results, here's the comparison:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    MyMarket.ge is fundamentally different
                </Word> - it's a <Word>
                    <Bold />
                    C2C classifieds marketplace
                </Word> (like Craigslist, eBay listings, or Russian Avito), not a centralized retailer like Amazon/Ozon.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Business Model:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    MyMarket: Individual sellers list items, you deal directly with them. The platform facilitates the
                    connection but doesn't hold inventory
                </Line>
                <Line>Amazon/Ozon: Primarily B2C with centralized warehousing and fulfillment</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Used vs New:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    MyMarket: <Word>
                        <Bold />
                        Both
                    </Word> - listings are marked "ახალი" (new) or "მეორადი" (used). Heavy on secondhand goods
                </Line>
                <Line>Amazon: Primarily new (plus Amazon Renewed)</Line>
                <Line>Ozon: Primarily new</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shipping/Delivery:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    MyMarket: <Word>
                        <Bold />
                        No Prime equivalent.
                    </Word> Delivery varies by seller. Typical times I found in listings:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Tbilisi: 1 day (via services like Delivo, Trackings.ge)</Line>
                    <Line>Regions: 2 working days (~10 GEL)</Line>
                    <Line>Many sellers offer in-person pickup</Line>
                </Paragraph>
                <Line>
                    Third-party couriers like Yandex Delivery offer same-day/express in Tbilisi (~1 hour for extra fee)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The catch:
                </Word> Since it's C2C, there's no guaranteed delivery standard, no unified returns policy, and (as
                reviewers note) the sorting/categorization is messy. One reviewer explicitly compared it unfavorably to
                Avito, saying Avito does things 5x better.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For reliable new-item shopping in Georgia
                </Word>, Extra.ge and Vendoo.ge are more Amazon-like B2C marketplaces, though still without Prime-tier
                logistics. Many Georgians apparently still order from AliExpress, Amazon (via forwarding), and eBay despite
                the long delivery times.
            </Paragraph>
        </Message>
    </Chapter>
);

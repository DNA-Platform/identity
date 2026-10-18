import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 January 2026](2026-01-10)</Date>
        </Dated>
        <Title>[[ 10 January 2026 ]]</Title>
        <Message
            at="2026-01-10T17:05:37.186768Z"
        >
            <Origin>019ba8de-df36-72ab-8edb-e24b4d2ae77b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                All right, I’m back. The food was very good. We ordered groceries as well. We are way more functional online
                in Georgia then in Turkey
            </Paragraph>
            <Paragraph>
                Ana needs to go to the airport tomorrow. This is where we use Bolt right? Do I think of them like Uber? What
                is Ana going to need to know? If we’re in downtown Batumi, how much will it cost to get a taxi on Bolt? Will
                they be able to pick her up at the apartment complex using phone navigation like Uber? Is it safe?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-10T17:05:57.854488Z"
        >
            <Origin>019ba8de-df36-72ab-8edb-e24ce9f09e32</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Bolt taxi Batumi airport cost price 2024”</Action>
            <Paragraph>Yes, Bolt is exactly like Uber. Here's what Ana needs to know:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cost:
                </Word> From Batumi Central Station to Batumi International Airport takes around 21 minutes and costs
                approximately 13.90 GEL. Downtown Batumi to airport should be roughly 10-20 GEL depending on exactly where
                you are. That's about $4-7 USD.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How it works:
                </Word> Same as Uber. She sets the pickup location (your apartment), sets destination (Batumi International
                Airport), sees the price <Word>
                    <Emphasis />
                    before
                </Word> confirming, and it's locked in. The price displayed on Bolt after you search for your destination is
                the final fare.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Navigation:
                </Word> Maps are powered by Google, so it looks like your regular Google Map with major landmarks plotted
                out. All street names are marked and searchable in English. Driver will navigate to her pin location - same
                experience as Uber in NY.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Safety:
                </Word> Yes, it's safe. Using the app is actually the safest option. Taxi scams are not all that common in
                Georgia – but tourists and foreigners do get targeted from time to time in Tbilisi and Batumi. You can avoid
                most issues by using Bolt.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to watch for:
                </Word> The final fare will only increase after your ride starts if: A) You keep the driver waiting for
                longer than is acceptable (Bolt gives you a free 5-minute window); B) The driver has to take an alternative
                route because of traffic or road closures; or C) You leave a tip.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pro tip:
                </Word> Bolt app works on the free airport WIFI and on 4G - useful for her return trip. Most cars are white
                Priuses.
            </Paragraph>
            <Paragraph>
                She can tip 1-5 GEL in the app after if she wants. Straightforward ride, nothing complicated.
            </Paragraph>
        </Message>
    </Chapter>
);

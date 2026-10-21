import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-02T19:08:58.359220Z"
        >
            <Origin>019c1fc2-36ce-7ef7-8285-f6d740875090</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I buy camel crush in georgia</Paragraph>
        </Message>
        <Message
            at="2026-02-02T19:09:22.130352Z"
        >
            <Origin>019c1fc2-36cf-7db4-847c-4faec7c3e883</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Camel Crush cigarettes available Georgia Tbilisi”</Action>
            <Action>Searched the web for “crushball menthol cigarettes banned EU Georgia”</Action>
            <Paragraph>
                Good news: Georgia isn't in the EU, so the EU's 2020 ban on crushball/menthol cigarettes doesn't apply
                there. Crushball cigarettes (including Camel Crush) are legal to sell.
            </Paragraph>
            <Paragraph>
                That said, I couldn't confirm that Camel Crush <Word>
                    <Emphasis />
                    specifically
                </Word> is distributed in Georgia. I did find that regular Camel variants (Camel Original Blue, Camel
                Caster) are available through delivery services like 2nabiji.ge, so Camel products have distribution there.
            </Paragraph>
            <Paragraph>Your best bets to find out:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Check larger tobacco shops
                    </Word> in Tbilisi (there are specialty smoke shops on Chavchavadze Ave and in central areas)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ask at supermarkets
                    </Word> like Carrefour or Goodwill that carry international brands
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Delivery apps
                    </Word> like 2nabiji.ge or Glovo - you can search their tobacco inventory
                </Line>
            </Paragraph>
            <Paragraph>
                Since JTI (which distributes Camel in the Caucasus region) has a regional hub in Tbilisi, there's a decent
                chance they carry it or can tell you where to find it. Worst case, if you can't find Camel Crush
                specifically, you might find other crushball brands - the market isn't restricted like in the EU/UK.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-02T19:10:39.608961Z"
        >
            <Origin>019c1fc3-c562-7647-a8eb-bbb160599093</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If they have it, you don’t think they just have it in the regular store next to me? I doubt any camel would
                be special. If any of them are not go check the web in Georgian I’m trying to find something that tells me
                this.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-02T19:11:28.494039Z"
        >
            <Origin>019c1fc3-c562-7ba4-ae53-8589cc105f61</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Camel Crush სიგარეტი საქართველო”</Action>
            <Action>Searched the web for “კაფსულიანი სიგარეტი თბილისი მენთოლი”</Action>
            <Action>Fetched https://2nabiji.ge/ge/category/thambaqos-natsarmi-102</Action>
            <Action>Searched the web for “JTI Georgia Camel продукция ассортимент”</Action>
            <Action>Searched the web for “"Camel Crush" JTI international available countries”</Action>
            <Paragraph>Here's what I found:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Good news:
                </Word> JTI (which owns Camel outside the US) <Word>
                    <Emphasis />
                    does
                </Word> produce Camel Crush/Click variants internationally - Wikipedia confirms these are "some of the most
                popular Camel variants being sold" globally. And since Georgia isn't in the EU, there's no crushball ban.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The catch:
                </Word> I couldn't find specific confirmation that Camel Crush is in JTI's <Word>
                    <Emphasis />
                    Georgian
                </Word> product lineup. JTI Caucasus distributes Sobranie, Winston, and Camel in Georgia (manufactured in
                Azerbaijan), but whether that includes the Crush variant specifically - I can't confirm from web searches.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your point is valid
                </Word> - if they carry Camel at all, the Crush variant should just be on the shelf alongside regular Camel
                Blue, etc. It's not a specialty item.
            </Paragraph>
            <Paragraph>
                Honestly? Just walk into the nearest store and look. Camel should be in the regular cigarette display. If
                they have any Camel products, ask for "Crush" or "Click" (კაფსულიანი/kapsulianni - "capsule" type). If it
                exists in Georgia, it'll be there next to regular Camel, not hidden away somewhere special.
            </Paragraph>
        </Message>
    </Chapter>
);

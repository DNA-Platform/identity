import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-15T09:19:54.822983Z"
        >
            <Origin>019eca94-e641-72c8-94ce-58a507c71357</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In saburtalo tbilisi what is the best grocery store I can use on either Glovo or Wolt to get foods that are
                most suited to my American pallet. Can you look up the different options there. You’ll probably need to
                search in georgian. Agrohub is an example that you can use for comparison
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T09:20:40.586839Z"
        >
            <Origin>019eca94-e645-7c91-be58-9ca34433a357</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wolt Tbilisi grocery stores delivery supermarket list”</Action>
            <Action>
                Searched the web for “Тбилиси магазин американские импортные продукты Glovo Wolt Carrefour Goodwill”
            </Action>
            <Action>Searched the web for “Carrefour Saburtalo City Mall Tbilisi Wolt Glovo delivery”</Action>
            <Paragraph>
                For an American palate in Saburtalo, the clear standout on both apps is <Word>
                    <Bold />
                    Carrefour
                </Word> — it carries the widest range of recognizable Western/imported brands (peanut butter, cereals,
                sauces, snacks, larger meat cuts, baking staples) that the Georgian chains mostly don't stock. There's a
                branch right in Saburtalo at 37 Sulkhan Tsintsadze St (City Mall area), available on Wolt and Glovo.
            </Paragraph>
            <Paragraph>Here's how the realistic options compare, all deliverable to Saburtalo:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Carrefour Saburtalo
                </Word> — best for breadth of Western/American-style products. The French hypermarket model means imported
                brands, international aisle, proper meat counter. One honest caveat: its Wolt rating sits around 8.6,
                noticeably below the boutique stores, which usually reflects out-of-stock substitutions and slower picking
                at large hypermarkets. Set your substitution preferences ("refund" vs "replace") carefully at checkout.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Goodwill Saburtalo
                </Word> — the first hypermarket chain in Georgia, premium-leaning with good fresh produce, a strong
                prepared-foods/deli section, and bakery. Closest local equivalent to a full American supermarket experience,
                though imported-brand depth is thinner than Carrefour.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Europroduct
                </Word> — stocks goods direct from European producers, with access to organic, lactose-free, gluten-free,
                vegan, and sugar-free lines. More European-specialty/dietary than American, but useful if you want familiar
                Western packaged goods and specific dietary items.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Agrohub
                </Word> (your comparison point) — skews fresh, local, organic farm produce and quality meat/dairy. Excellent
                for ingredients, weak for processed/branded "American" pantry items.
            </Paragraph>
            <Paragraph>
                For your use case, I'd start with <Word>
                    <Bold />
                    Carrefour as the primary cart
                </Word> for pantry and branded goods, and use <Word>
                    <Bold />
                    Goodwill or Agrohub
                </Word> for fresh produce and meat where quality beats Carrefour's. Want me to verify which of these are
                also live on Glovo specifically (I confirmed Carrefour and Goodwill on Wolt above), or pull a sample of
                what's actually in Carrefour's imported aisle right now?
            </Paragraph>
        </Message>
    </Chapter>
);

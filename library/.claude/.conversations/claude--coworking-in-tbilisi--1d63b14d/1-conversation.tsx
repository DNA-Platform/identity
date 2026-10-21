import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 May 2026](2026-05-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-09T07:04:14.992533Z"
        >
            <Origin>019e0b8c-e206-72f9-bd9a-4989d8bf5d5c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you please search for affordable coworking spaces in tbilisi that get me out of the house and might help
                me connect with new people?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-09T07:05:43.614583Z"
        >
            <Origin>019e0b8c-e206-7e43-9247-b7e2dcaf01ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched places for “”</Action>
            <Action>Searched the web for “Tbilisi coworking space prices 2026 monthly day pass community”</Action>
            <Paragraph>
                Here are your best fits — affordable, community-leaning, and weighted toward Saburtalo so you're not
                committing to a long commute every day.
            </Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    For best community + Saburtalo proximity: Delisi Hub or Digital Jungle.
                </Word> Both 4.9 rated, both walkable to/from your area, both lean social rather than library-quiet. Delisi
                Hub reviewers specifically mention making real connections; Digital Jungle runs events and workshops.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For cheapest:
                </Word> Cona / Space Z share a building on Ana Politkovskaia (~25 GEL/24h). Cona is dead-quiet — focus mode,
                not networking. Space Z is slightly more social with weekend events but vibe reviews are mixed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Worth the commute for community:
                </Word> Impact Hub at Fabrika courtyard (Marjanishvili). It's the established expat/nomad networking hub in
                Tbilisi — day pass around $9.50, and the courtyard itself is a social anchor (cafés, bars, hostel crowd).
                One day a week here might do more for "meeting people" than five days closer to home.
            </Paragraph>
            <Paragraph>
                A couple of caveats since pricing across these came from review snippets and listing sites rather than the
                venues' own pages: confirm rates before committing — Tbilisi prices have moved up since 2023. And worth
                knowing about two newer Saburtalo options I didn't map: <Word>
                    <Bold />
                    Vibe
                </Word> (in Jikia House, listed at ~10 GEL/day, very budget) and a recently opened <Word>
                    <Bold />
                    Collider Saburtalo branch
                </Word> (more event-driven, pricier ~40 GEL/day). Both worth a walk-by if Delisi Hub doesn't click.
            </Paragraph>
            <Paragraph>
                Want me to draft a "first visit" plan — say, free day passes at the top two so you can compare vibes in a
                week?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-09T07:07:35.197218Z"
        >
            <Origin>019e0b8f-f1ea-74db-9961-bddbd6d34c1e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you put together an editable artifact with all of tgese recommendations, your thoughts, websites and
                whatever else I need to book a spot? That way I have a reference guide
            </Paragraph>
        </Message>
        <Message
            at="2026-05-09T07:09:00.711093Z"
        >
            <Origin>019e0b8f-f1ea-735d-9253-0311f543f1b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/tbilisi-coworking-guide.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Markdown so you can edit freely as you visit each spot. Two things flagged in the doc that I didn't verify
                the hard way:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Pricing
                    </Word> — all from review snippets, not venue pricing pages. Confirm before you commit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Websites
                    </Word> — pulled from Google Places. Want me to fetch each one to confirm they actually load before you
                    start clicking?
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);

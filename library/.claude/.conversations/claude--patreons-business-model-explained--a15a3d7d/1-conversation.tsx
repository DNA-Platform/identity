import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-29T13:25:55.266321Z"
        >
            <Origin>019d39c5-c0ae-7ae0-958e-0addf2000708</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does patreon work as a business model?</Paragraph>
        </Message>
        <Message
            at="2026-03-29T13:26:07.786077Z"
        >
            <Origin>019d39c5-c0af-7f2d-a719-74f71e4fce7d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Patreon is a membership platform where creators get recurring revenue directly from their fans ("patrons").
            </Paragraph>
            <Paragraph>
                The core mechanic is simple: a creator sets up a page with membership tiers (e.g., $5/month, $15/month,
                $50/month), each offering different perks — early access, exclusive content, behind-the-scenes posts,
                Discord access, physical merch, etc. Patrons are charged monthly (or per-creation, in some configurations),
                and the money flows to the creator minus Patreon's cut.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Patreon's revenue model
                </Word> is a platform fee on creator earnings — typically 8–12% depending on the plan tier (Pro, Premium),
                plus payment processing fees on top of that. They don't charge patrons directly; they take a percentage from
                creators.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it works for creators:
                </Word> It converts an audience from passive consumers (who might watch for free) into a paying subscriber
                base. Even modest conversion rates matter — a YouTube channel with 100k subscribers converting 1% at
                $5/month generates $5k/month, which is often more stable than ad revenue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The key economic insight
                </Word> is that it decouples creator income from platform algorithms and advertiser spending. Ad revenue is
                volatile and controlled by YouTube/Meta/Google; Patreon revenue is relatively predictable and owned by the
                creator-patron relationship.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The tension in the model
                </Word> is churn — patrons cancel, especially if the creator's output slows or the exclusive content doesn't
                feel worth it. Creators who succeed on Patreon tend to be good at making patrons feel like insiders, not
                just subscribers.
            </Paragraph>
            <Paragraph>
                It works best for creators with a highly engaged niche audience rather than a massive but passive one — a
                podcaster with 10k devoted listeners often outperforms a viral video creator with 2M casual followers.
            </Paragraph>
        </Message>
    </Chapter>
);

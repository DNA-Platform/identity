import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Title>[[ 28 July 2026 ]]</Title>
        <Message
            at="2026-07-28T16:26:21.282615Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Fiverr just informed me that mira will be curating job descriptions. Researvh this hard. Mira is the name of
                the AI from TOP that can run on cocoon developed for telegram. Coukd fiverr be using that?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T16:28:06.147923Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Fiverr Mira AI job descriptions”</Action>
            <Action>Searched the web for “Fiverr "Mira" AI announcement 2026”</Action>
            <Action>Searched the web for “Fiverr Mira brief curation seller notification”</Action>
            <Action>Searched the web for “Mira The Open Platform Cocoon Telegram AI assistant”</Action>
            <Action>Searched the web for “"Fiverr" "Mira" gig descriptions AI assistant July 2026”</Action>
            <Action>Searched the web for “Mira Telegram agent Fiverr integration freelance marketplace”</Action>
            <Action>Searched the web for “Fiverr "meet Mira" OR "Mira will" freelancer email”</Action>
            <Paragraph>
                Here's what the record shows. The Telegram Mira is real and exactly what you described: TOP announced Mira
                as the first personal AI assistant built by a TOP portfolio team, live in Telegram, and in private mode
                requests run via Cocoon's decentralized GPU network built on TON with encrypted execution. It launched
                February 2026, went global in group chats in May, has passed 2 million users and 500K+ MAU, and routes tasks
                across OpenAI, Anthropic, Minimax, ByteDance and ElevenLabs, with a roadmap of agent-to-agent interactions
                and payments through a dedicated sub-wallet, under CEO Daria Yakovleva.
            </Paragraph>
            <Paragraph>
                On the Fiverr side, I can't find the announcement you received anywhere public — no press release,
                help-center article, or news coverage ties Fiverr to any "Mira." Fiverr's own AI branding trail runs Fiverr
                Go (Feb 2025) → AI Video Hub (March 2026), and their existing brief system already uses an unnamed AI
                assistant that refines client project briefs before matching freelancers. "Mira will be curating job
                descriptions" reads like Fiverr putting a persona name on that brief-curation layer — and Mira is a heavily
                collided name in this space right now (Meltwater shipped a "Mira" too).
            </Paragraph>
            <Paragraph>
                So my posterior on identity is low, well under 10% — not from base rates alone, but from two specific
                absences: TOP PRs every milestone loudly, and a Fiverr integration would be a bigger story for them than for
                Fiverr; and an NYSE-listed Israeli marketplace outsourcing core curation to a TON-ecosystem Telegram agent
                would be a strange procurement move to do silently. The notification itself should discriminate quickly: any
                Telegram/@mira branding, a link to mira.tg, or Cocoon/privacy language would flip this; a bare first-name
                persona with Fiverr's own styling confirms the in-house read.
            </Paragraph>
            <Paragraph>
                The live channel between the two worlds runs the other direction, though, and it's the more interesting one
                for your thesis: Mira connects skills, APIs, and MCP integrations and is built to act — crypto layer
                included, and the sub-wallet roadmap means Telegram-native agents transacting on external marketplaces
                within authorized limits. That's an agent reaching into Fiverr-like platforms as a demand channel on TON
                rails — which slots into the adoption picture regardless of what Fiverr named its curator.
            </Paragraph>
        </Message>
    </Chapter>
);

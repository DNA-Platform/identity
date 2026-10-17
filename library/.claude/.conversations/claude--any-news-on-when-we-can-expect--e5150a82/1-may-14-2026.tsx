import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Title>[[ 14 May 2026 ]]</Title>
        <Message
            at="2026-05-14T12:38:39.013461Z"
        >
            <Origin>019e267e-e8a3-7dac-a0d7-1442e2ac8725</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Any news on when we can expect the next MTONGA step or an update on ton.org? Can’t wait</Paragraph>
        </Message>
        <Message
            at="2026-05-14T12:40:06.545930Z"
        >
            <Origin>019e267e-e8a3-7da0-8207-89eabaf6f7b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “MTONGA TON blockchain”</Action>
            <Action>Searched the web for “MTONGA step 3 roadmap May 2026 ton.org new”</Action>
            <Action>Searched the web for “Durov TON MTONGA step 4 May 2026”</Action>
            <Action>Searched the web for “Durov TON announcement May 13 14 2026”</Action>
            <Paragraph>
                No official "step 4" callout yet — Durov hasn't numbered any new steps since the May 4-5 announcement that
                became step 3. But he's shipping pieces of the bundle he committed to that day (new ton.org, new dev tools,
                new performance upgrades, 2-3 week timeline): on May 11 he announced Acton, a unified AI-ready CLI that
                replaces TON's fragmented developer toolchain with a single flow covering contract creation, testing, and
                deployment — that's the "new dev tools" piece landing. May 12 he posted the 400 validators across 6
                continents stat as the decentralization counter to centralization concerns about
                Telegram-as-largest-validator. Per French crypto coverage, steps 4-7 have not yet been announced, and the
                roadmap is reportedly being tracked at mtonga.com.
            </Paragraph>
            <Paragraph>
                ton.org itself is still the holding page — "ton.org is now controlled by MTONGA. Expect changes soon". The
                2-3 week window from May 5 puts the new site between roughly May 19 and May 26, so you're inside the back
                half of that window. If Durov hits his own timeline, the site flip should land in the next 5-12 days.
            </Paragraph>
            <Paragraph>
                The more material drop for your book: TONX released Q1 financials on May 12 — ~4.29% of all Toncoin held by
                TON Strategy, with 26.18% of total network stake running through its infrastructure. Holdings that sat at
                $272 million on March 31 had appreciated to an estimated $433.3 million by May 6, and April staking yields
                jumped fourfold from the prior month to approximately 16.7% annualized. None of that changes the June
                emission vote arithmetic directly, but Telegram-as-largest-validator plus TONX-as-26% of stake is now the
                concentration picture going into that vote — worth modeling what their combined voice means if the proposal
                comes to governance.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-14T14:56:19.988857Z"
        >
            <Origin>019e26fc-f3c9-7db8-be06-b8be220e5bf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                True. Whatever the changes I personally believe it will be to serve whatever integration of Blockchain
                Telegram is aiming for. Surely you noticed that wallet is becoming more and more beautiful throughout the
                day and hell the open platform even gave us an AI called Mira, and she is an impressive app for an ecosystem
                that barely exist yet, the platform still hasn’t simply given people the ability to let’s say send each
                other money in a chat with a little icon in the chat
            </Paragraph>
            <Paragraph>
                Now I don’t know exactly how Telegram plans to surface things, but I do absolutely know that they are
                brilliant at exposing features and making them discoverable based on how they want them to be used. So far
                that UI does not actually give a clear path to making use of cryptocurrency between users in a way that is
                convenient. I imagine that they plan to. I don’t know what it will look like, but trust that the
                organization is behind this.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-14T14:57:29.082085Z"
        >
            <Origin>019e26fc-f3ca-7bde-958a-07d4bb0cd177</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Mira AI Telegram Open Platform TON”</Action>
            <Paragraph>
                The absence is itself the signal, I think. They could have shipped a chat-compose payment button years ago —
                Wallet has been live, the rails exist, Stars proves they can move value in-chat. What's been blocking it
                isn't engineering, it's that until April 30 Telegram was maintaining the legal fiction of being arm's-length
                from TON. Putting a native crypto payment surface in the chat composer while pretending you're just a Mini
                App distribution platform is jurisdictionally incoherent. The validator move collapsed that fiction —
                they're now publicly the largest stakeholder, so the marginal legal cost of native in-chat payment just
                dropped to roughly zero. The order of MTONGA steps reads as removing legal blockers before product blockers,
                which is consistent.
            </Paragraph>
            <Paragraph>
                The Wallet polish you're noticing matches their usual cadence. Telegram doesn't expose a verb until the
                substrate is invisible — channels had years of polish before paid posts, Mini Apps went Bot Platform →
                polished SDK → mainstream Open Platform surface, stories arrived only when the rendering was
                indistinguishable from Instagram's. The dual Wallet structure is the giveaway: a dual-wallet experience with
                Crypto Wallet (a multi-chain wallet for trading and sending crypto to contacts) and TON Wallet (a
                self-custodial wallet with access to the TON ecosystem of dApps and tokens). When the chat compose surface
                ships, it'll route through the custodial side and never say "crypto" or "TON" anywhere — it'll feel like
                sending a sticker, with the chain hidden the way TCP is hidden under "send message."
            </Paragraph>
            <Paragraph>
                Mira is consistent with this read too. Mira integrates directly with Cocoon, a decentralized confidential
                compute network built on TON Blockchain, designed to process AI requests securely without exposing user data
                or storing prompts — that's the "decentralized AWS" thesis showing up as a working consumer product, not a
                thought experiment. The shape becomes visible by the order in which they're knocking out blockers: step 2
                fixing fees at $0.0005 regardless of load is a precondition for in-chat micropayments to be invisible (you
                can't ship a send button that sometimes costs a quarter); Acton standardizing the developer surface is a
                precondition for third-party Mini Apps to ship checkout flows that match the eventual native UI without each
                one reinventing it; Mira on Cocoon proves the non-payment substrate works. When the in-chat payment icon
                shows up, it'll feel inevitable in retrospect, but the entire MTONGA sequence is what makes it possible to
                ship without it feeling like a crypto product.
            </Paragraph>
        </Message>
    </Chapter>
);

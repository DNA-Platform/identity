import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-06T17:42:02.049025Z"
        >
            <Origin>019d63e3-b54a-7bbf-88c9-db4e2f8fe3f6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What crypto did this margin abstraction tbrough perpetuals first emerge in and does it really solve the
                unbounded liss problem with shorts?
            </Paragraph>
            <Attachment>Uploaded “IMG_3093.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3094.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3095.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-06T17:42:26.558356Z"
        >
            <Origin>019d63e3-b54a-7300-a1f9-7c502d32a376</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Origin: BitMEX, 2016
                </Word>
            </Paragraph>
            <Paragraph>
                Arthur Hayes invented the perpetual swap at BitMEX — a crypto-native instrument with no expiry, kept
                anchored to spot via an 8-hour funding rate paid between longs and shorts. Before this, crypto traders had
                to roll dated futures. The perp solved the rollover friction problem but introduced the funding rate as an
                ongoing cost — which is actually the mechanism doing the heavy lifting in price discovery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does isolated margin actually solve unbounded loss on shorts?
                </Word>
            </Paragraph>
            <Paragraph>Partially — and the distinction matters.</Paragraph>
            <Paragraph>
                It solves the <Word>
                    <Emphasis />
                    definitional
                </Word> unbounded loss problem: your max loss is capped at the margin allocated to the position. If you're
                short 10x with $100 isolated, you lose at most $100 regardless of how far price rips. Traditional short
                selling has no such cap — you can owe more than you put in.
            </Paragraph>
            <Paragraph>But three residual risks remain:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gap risk.
                </Word> If price gaps through your liquidation level faster than the engine can close, you go into negative
                equity. The exchange insurance fund absorbs this — until it doesn't, triggering socialized loss via ADL
                (auto-deleveraging), which forcibly closes profitable counterparty positions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Funding rate erosion.
                </Word> During sustained bull momentum, shorts pay longs. Margin bleeds even if liquidation never triggers.
                This is a slow-kill mechanism invisible to the unbounded-loss framing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    100% margin loss vs. proportional loss.
                </Word> Isolation converts unbounded loss into <Word>
                    <Emphasis />
                    total
                </Word> margin loss. That's bounded, but it's still -100% on allocated capital, which for retail is
                psychologically and practically equivalent to ruin.
            </Paragraph>
            <Paragraph>
                So: isolated margin bounds the loss in absolute terms but doesn't reduce the probability of total wipeout —
                it just defines the ceiling precisely.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-06T17:45:47.964972Z"
        >
            <Origin>019d63e7-2748-7497-8ea5-8971f91cec36</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Who is arthur hayes? What is his background?</Paragraph>
            <Paragraph>If you can be with negative equity its not bounded. does TON pass this on to you?</Paragraph>
            <Paragraph>
                I don’t get funding rate erosion. But it aounds like something else entirely. We are talking about unbounded
                losses
            </Paragraph>
            <Paragraph>
                I’m not complaining about margin in general. I’m talking about solving the problem in normal securities.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-06T17:46:09.347708Z"
        >
            <Origin>019d63e7-2748-7cf1-9e1a-cb8b3c1ba680</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Arthur Hayes
                </Word>
            </Paragraph>
            <Paragraph>
                Wharton undergrad, then equity derivatives desk at Deutsche Bank and Citi in Hong Kong. Built enough product
                intuition there to found BitMEX in 2014 with Ben Delo and Samuel Reed. Made billions running the dominant
                perp exchange through the 2017-2020 cycle. Then DOJ indicted him for BSA violations (failing to register as
                a money services business). Pleaded guilty 2022, got probation. Now runs Maelstrom, a crypto family office,
                and writes long-form macro essays. Sharp thinker, worth reading.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    You're right on the bounded loss question — and it's precise.
                </Word>
            </Paragraph>
            <Paragraph>
                Isolated margin bounds what you <Word>
                    <Emphasis />
                    put in
                </Word>. But gap risk creates negative equity, meaning the position owes more than the margin. That's
                unbounded in structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually closes the loop is the insurance fund.
                </Word> The exchange absorbs negative equity so it never reaches you. That's the real mechanism solving
                unbounded loss — not isolated margin itself. Isolated margin defines the exposure unit; the insurance fund
                is what makes the user's loss genuinely capped at zero.
            </Paragraph>
            <Paragraph>
                So for TON/Crypto Wallet: yes, users are protected from negative equity by the insurance fund. You can't be
                called for more than you deposited. If the fund runs dry, ADL kicks in — but that's an exchange-level
                failure, not a user liability.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your actual point — solving the traditional securities problem
                </Word>
            </Paragraph>
            <Paragraph>
                In equities, short selling means borrowing shares. Price goes parabolic, your broker issues a margin call,
                and in extremis you owe more than your account. There is no structural cap.
            </Paragraph>
            <Paragraph>
                Perps with isolated margin + insurance fund genuinely solve this. You define your risk upfront, the
                mechanism enforces it, and the exchange eats the gap. That's a real structural improvement over traditional
                short mechanics.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-06T17:47:31.057526Z"
        >
            <Origin>019d63e8-b6d8-7267-b4b5-3af87e7ecff6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, then who’s paying the insurance and what’s the thing that happens to cripples the system because it’s
                pushing tail risk to what the provider of the position instead of the owner of it? The network.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-06T17:47:58.974715Z"
        >
            <Origin>019d63e8-b6d8-7176-b978-ead5456b4387</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Who funds the insurance fund:
                </Word>
            </Paragraph>
            <Paragraph>
                Liquidation surplus. When the engine closes a position at liquidation price before it reaches zero (which
                happens in orderly markets), the residual margin goes into the fund. It's essentially a skim off every
                liquidation that didn't go all the way negative. In volatile bull markets the fund grows large. In cascades
                it drains fast.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The failure mode you're describing: socialized losses / clawback
                </Word>
            </Paragraph>
            <Paragraph>
                When the insurance fund is exhausted, the exchange can't absorb negative equity anymore. So it reaches into
                profitable counterparty positions and force-closes them — ADL. You're long, making money, and your position
                gets involuntarily closed to cover someone else's deficit.
            </Paragraph>
            <Paragraph>
                BitMEX called this <Word>
                    <Bold />
                    clawback
                </Word> explicitly before ADL became the industry standard term. The tail risk doesn't disappear — it
                mutualizes across the network of profitable traders.
            </Paragraph>
            <Paragraph>
                The catastrophic version is <Word>
                    <Bold />
                    FTX
                </Word> — their insurance fund was essentially Alameda. When Alameda collapsed, the entire structure unwound
                simultaneously. The "provider of the position" <Word>
                    <Emphasis />
                    was
                </Word> the exchange, and the exchange was insolvent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The deep structural problem:
                </Word>
            </Paragraph>
            <Paragraph>
                You've identified exactly what perps actually do: they don't eliminate unbounded loss, they <Word>
                    <Bold />
                    re-route it up the stack
                </Word> — from individual → insurance fund → network participants → exchange solvency. Each layer holds
                until it doesn't.
            </Paragraph>
            <Paragraph>
                Traditional CCPs in TradFi have the same architecture, just with regulatory capital requirements
                backstopping each layer. Crypto perps replicated the structure without the regulated capital base underneath
                it.
            </Paragraph>
        </Message>
    </Chapter>
);

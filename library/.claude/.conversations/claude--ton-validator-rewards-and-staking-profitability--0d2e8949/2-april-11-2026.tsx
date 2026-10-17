import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 April 2026](2026-04-11)</Date>
        </Dated>
        <Title>[[ 11 April 2026 ]]</Title>
        <Message
            at="2026-04-11T15:47:12.560828Z"
        >
            <Origin>019d7d39-bf11-7656-8947-b7c37a208721</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>TON just annouced this:</Paragraph>
            <Paragraph>
                🚀 TON Staking now offers ~20% APY This is the right moment to put your TON
                (https://t.me/wallet/start?startapp=tonwallet_staking-providerName__tonstakers) to work. How to start
                earning on TON? Open TON Wallet → Earn → TON → Make a deposit through the Tonstakers program. Rewards are
                credited every 18 hours. Start with as little as 1 TON, with no maximum deposit. No TON yet? Buy it directly
                in Wallet and start earning right away. Tonstakers (https://tonstakers.com/) is a third-party protocol, not
                operated by TON Wallet. DeFi carries risks (https://wallet.tg/ton_wallet_risk_warning_en) — do your research
                before using. This communication is not intended for persons in the United Kingdom. Manage notifications
                (https://t.me/wallet/start?startapp=v2-b3BlcmF0aW9uPW5vdGlmaWNhdGlvbnMmdHlwZT1wcm9kdWN0Jm1pZD02ODBkZDVmNi05MDJmLTQwNjQtOTQyMS00Y2VkMjNjNmM0OGY=)
            </Paragraph>
            <Paragraph>I have tsTON already. Do my rewards go up to the new APY?</Paragraph>
        </Message>
        <Message
            at="2026-04-11T15:47:32.408642Z"
        >
            <Origin>019d7d39-bf11-75a9-8728-03140f35d6ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tonstakers 20% APY announcement 2026”</Action>
            <Paragraph>Two things to separate here, because the 20% headline is doing something specific.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The base rate has genuinely moved up.
                </Word> Stakingrewards.com currently shows TON staking at 18.09% APY — so something real has changed from
                the ~5% that was being advertised before. What changed is almost certainly a combination of increased
                network transaction volume (fee component up) and/or a protocol parameter adjustment to block subsidies.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But the 20% in that announcement is likely the looping strategy, not the base rate.
                </Word> A TON Foundation member clarified exactly this: Tonstakers are offering 20% APY if you know how to
                loop — meaning you use your tsTON as collateral to borrow TON, stake that borrowed TON to get more tsTON,
                and repeat. That's leverage on the base rate, not the base rate itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To your actual question — does your existing tsTON automatically earn the higher rate?
                </Word>
            </Paragraph>
            <Paragraph>
                Yes. That's the mechanical beauty of the tsTON token structure. Over time, 1 tsTON becomes worth more than 1
                TON, since the value includes accumulated rewards. You won't see rewards as separate transactions — the
                result becomes visible when you unstake.
            </Paragraph>
            <Paragraph>
                Every 18-hour validation round, the pool earns rewards and that appreciation is baked into the tsTON/TON
                exchange rate for all holders equally. You don't need to do anything. If the base rate is now genuinely
                ~18%, your tsTON is already compounding at that rate.
            </Paragraph>
            <Paragraph>The looping strategy is optional upside on top of what you already have.</Paragraph>
        </Message>
        <Message
            at="2026-04-11T15:48:43.568447Z"
        >
            <Origin>019d7d3b-1b3b-7278-b3d7-82eb34c36e2d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don't know what looping strategy you are talking about. I am talking about the 13%ish rate, and I am
                asking if my tsTON which I thinbk is through TON stakers, will change
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T15:48:48.668769Z"
        >
            <Origin>019d7d3b-1b3b-74cd-9a4d-fefe98b635c4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, automatically. You don't do anything.</Paragraph>
            <Paragraph>
                Your tsTON token appreciates against TON every 18 hours based on whatever the pool earns that round. There's
                no locked-in rate from when you first staked. The current rate, whatever it is now, is what you're earning
                right now — and if it moves to 13% or 18% or back down to 5%, your tsTON reflects that in real time without
                you touching anything.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T17:24:52.212945Z"
        >
            <Origin>019d7d93-ddc7-7e53-8921-6b2a3fbfd86e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you check what is the official tsTON staging reward that you get right now as of today just to be able
                to filter out the benefit and then try to explain the looping because I don’t understand that
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T17:25:16.695310Z"
        >
            <Origin>019d7d93-ddc7-762c-acb5-d70415ec05ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://tonstakers.com</Action>
            <Action>Fetched https://www.stakingrewards.com/asset/the-open-network</Action>
            <Action>Searched the web for “tonstakers current APY April 2026 tsTON rate”</Action>
            <Paragraph>
                Honest answer first: the actual current number is dynamically loaded on their site and the search results
                are conflicting — I'm seeing everything from 2.89% to 18% depending on the source and when it was cached.
                The only reliable way to see your actual current rate is to open the Tonstakers app directly, where it shows
                the live APY.
            </Paragraph>
            <Paragraph>
                What I can tell you with confidence: the Tonstakers site itself was showing 4.23% APY in the most recent
                crawl, which is closer to the baseline staking rate we discussed. The higher numbers floating around appear
                to be from the looping strategy, which is genuinely separate from plain tsTON holding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On looping — here's what it actually means:
                </Word>
            </Paragraph>
            <Paragraph>
                You hold tsTON. tsTON is accepted as collateral on TON lending protocols (like Evaa). So you can:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Deposit your tsTON as collateral</Line>
                <Line>Borrow TON against it</Line>
                <Line>Stake that borrowed TON → receive more tsTON</Line>
                <Line>Deposit that new tsTON as collateral</Line>
                <Line>Borrow more TON against that</Line>
                <Line>Repeat</Line>
            </Paragraph>
            <Paragraph>
                Each loop amplifies your staking exposure. If you started with 100 TON worth of tsTON and loop three times,
                you might have the equivalent of 200-250 TON earning staking yield — but you also have a debt in TON that
                must be repaid, and you pay borrowing interest on it.
            </Paragraph>
            <Paragraph>
                The net yield is higher only if the staking APY exceeds the borrowing rate. And if TON's price drops
                significantly relative to your debt, you risk liquidation of your collateral.
            </Paragraph>
            <Paragraph>
                So: plain tsTON is clean and safe. Looping is leveraged staking with liquidation risk attached.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T17:26:47.375531Z"
        >
            <Origin>019d7d95-9ed6-76a4-88b4-6f9485c49dfd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I see this. 20% for new but no sense for what I get now. Is there somewhere I can click?</Paragraph>
            <Attachment>Uploaded “IMG_3100.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-11T17:26:57.733703Z"
        >
            <Origin>019d7d95-9ed7-7d45-ba78-df529a0b6c39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — tap the <Word>
                    <Bold />
                    TON / Tonstakers row
                </Word> showing $9,514.82. That's your existing position. Tapping into it should show the details of your
                current stake including the APY you're actually earning.
            </Paragraph>
            <Paragraph>
                The 20.37% shown under "Available Offers" is the rate being advertised for new deposits right now, which as
                we discussed is likely the looped rate. Your existing tsTON may or may not be at that same rate depending on
                what Tonstakers is doing under the hood.
            </Paragraph>
            <Paragraph>
                Also worth noting: that +$1,058.91 in 24h is almost certainly TON price appreciation, not staking yield. At
                ~20% APY on $9,500, your daily staking yield would be closer to $5-6. The rest is TON moving up in price.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T18:51:29.951136Z"
        >
            <Origin>019d7de2-7e72-78bc-af68-3877787f9836</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I put in another $1000 so I'll get some of that rate. But I assume its for a limited time only. I would
                think the instantaneous yield is a function of the ton stakers smart contract right? Queryable on the
                blockchain subject to change over time?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-11T18:51:42.355799Z"
        >
            <Origin>019d7de2-7e72-7e1a-bfbd-7da96797b7b7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Correct on both counts.</Paragraph>
            <Paragraph>
                On the limited time question — it's not a promotional rate in the traditional sense with an expiration date.
                It's whatever the network is producing right now. If transaction volume drops, or more TON floods into
                staking chasing the yield, the rate compresses automatically. No announcement, no expiry. It just drifts
                down as the economics rebalance.
            </Paragraph>
            <Paragraph>
                On the blockchain queryability — yes, exactly right. The instantaneous rate is fully derivable on-chain.
                Tonstakers maintains a ratio of tsTON/TON that updates every validation round (~18 hours) when the Elector
                contract distributes rewards back to the pool. Anyone can query that ratio historically and compute the
                annualized yield from the rate of change. The smart contract address is public, the ratio is on-chain, and
                you can watch it tick up every round.
            </Paragraph>
            <Paragraph>
                So the "APY" number Tonstakers displays in the app is just their frontend annualizing the last round's
                yield. It's a trailing calculation, not a forward guarantee. The actual yield you earn is whatever the next
                18-hour round produces, which depends on live network fee revenue and total staked TON at that moment.
            </Paragraph>
            <Paragraph>
                Your $1000 addition gets the current rate going forward from when it enters the pool — same as everyone else
                in the pool, no special rate, no lock-in.
            </Paragraph>
        </Message>
    </Chapter>
);

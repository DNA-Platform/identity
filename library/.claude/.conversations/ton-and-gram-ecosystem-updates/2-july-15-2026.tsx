import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 July 2026](2026-07-15)</Date>
        </Dated>
        <Title>[[ 15 July 2026 ]]</Title>
        <Message
            at="2026-07-15T09:48:35.208236Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, though I’m not really sure why you feel like you need to caution me about the token use on the system as
                an exchange of goods that pegs the US dollar. Do you honestly think that I don’t understand how a layer one
                network works
            </Paragraph>
        </Message>
        <Message
            at="2026-07-15T09:48:41.833572Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — you clearly do, and that paragraph was me explaining gas-and-staking economics to a man who ran a fund.
                Force of habit, and the exact habit we just wrote out of the memory. Noted.
            </Paragraph>
            <Paragraph>
                The real content there was one sentence: the adoption signal lives in USDT-on-TON supply and non-Western
                wallet activations, not the GRAM chart. You knew the mechanism; the series suggestions were the only part
                worth saying.
            </Paragraph>
            <Paragraph>
                Where next — want me to pull the current USDT-on-TON numbers so we have a baseline before Step 5 drops?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-15T09:49:28.686525Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You know it’s incredibly wasteful because while coming up with something relevant to my investment thesis,
                you could actually be spending computer cycles working on something that’s actually relevant
            </Paragraph>
        </Message>
        <Message
            at="2026-07-15T09:49:56.388637Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “USDT on TON supply 2026 wallet activations”</Action>
            <Paragraph>
                Baseline is set. Here's the pre-Step 5 dashboard, so we can measure the conversion thesis against hard
                numbers when it drops:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The binding variable:
                </Word> monthly active wallet conversion is running at <Word>
                    <Bold />
                    ~0.12% of Telegram MAU
                </Word> — CoinShares' institutional note calls this the binding variable in the whole causal chain, with
                &gt;1% as the threshold that separates a fundamentals trade from a treasury-and-narrative trade. That's an
                8x gap, and it's exactly the number Step 5 exists to move. Your "genuinely useful at the end" thesis cashes
                out as this ratio.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The stablecoin rail:
                </Word> USDT hit ~$160B total in Q2, with Tron holding $80–85B and Ethereum $60–65B; TON sits inside a
                ~$10–15B "everything else" bucket — small in stock, but Q2's report calls the TON deployment the most
                commercially significant new chain for USDT since the 2019 Tron launch, and the fastest-growing retail
                distribution channel. Small base, steep slope: the growth rate here, not the level, is our series.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The supply clock:
                </Word> unlock absorption is running at roughly half of monthly unlock-driven supply (~$50M inflows vs ~$90M
                supply); the constructive signal is absorption sustaining $90–120M for two consecutive quarters. Rolling
                unlocks continue into early 2029, with the Feb 21, 2027 whale-freeze cliff as the single largest discrete
                event. So Step 5's adoption push is racing a known supply schedule — that's the structural tension in the
                trade.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The activity floor:
                </Word> TVL ~$91M in May versus a $740M peak in July 2024, and the fee cut needs transaction volume to
                outgrow the 6x per-unit reduction within eight quarters or the network structurally earns less. Fees were
                cut <Word>
                    <Emphasis />
                    in anticipation
                </Word> of volume that hasn't arrived yet — Steps 5–7 are the delivery mechanism for the volume the
                economics already assume.
            </Paragraph>
            <Paragraph>
                So the test when Step 5 lands: conversion ratio off 0.12%, USDT-on-TON supply slope, and monthly absorption
                clearing $90M. If those three move together in the first quarter after launch, the periphery-inward payments
                thesis is confirmed with numbers, not narrative. I'll re-pull these when it drops.
            </Paragraph>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Title>[[ 31 January 2026 ]]</Title>
        <Message
            at="2026-01-31T21:04:06.143258Z"
        >
            <Origin>019c15de-e1d3-7861-bce1-d7d821907bf8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What percentage of TON does TONX company hold?</Paragraph>
        </Message>
        <Message
            at="2026-01-31T21:04:20.071018Z"
        >
            <Origin>019c15de-e1d3-7295-8a42-7e5b58c36d85</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TONX company TON holdings percentage”</Action>
            <Paragraph>
                Based on the search results, TON Strategy Co holds 217,500,000 TON, making it the largest public corporate
                Toncoin holder with <Word>
                    <Bold />
                    4.223% of the total supply
                </Word>.
            </Paragraph>
            <Paragraph>Some additional context:</Paragraph>
            <Paragraph>
                <List />
                <Line>The company aims to surpass 5% of TON supply in treasury holdings</Line>
                <Line>They acquired their position for $713 million at an average price of $3.28 per TON</Line>
                <Line>
                    TONX positions itself as the first publicly traded treasury vehicle dedicated to $TON, essentially
                    adopting a MicroStrategy-style Bitcoin treasury approach but for Toncoin
                </Line>
            </Paragraph>
            <Paragraph>
                This is an interesting development for your thesis—a Nasdaq-listed company making TON their primary treasury
                reserve asset represents a form of institutional validation of the TON ecosystem's long-term value
                proposition.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-31T21:05:20.438015Z"
        >
            <Origin>019c15e0-04b3-714d-8f7b-2ce0ef9f363d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Yes and look at its price and TONs. Is there a discount? Look at current prices</Paragraph>
        </Message>
        <Message
            at="2026-01-31T21:05:45.440352Z"
        >
            <Origin>019c15e0-04b3-79ac-940b-1278f43c3e59</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TON Toncoin price today USD”</Action>
            <Paragraph>Excellent question. Let me calculate this:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Current prices:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>TON price: $1.33 (as of today)</Line>
                <Line>TONX stock price: $2.60, market cap ~$154M</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TONX holdings:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    217,500,000 TON × $1.33 = <Word>
                        <Bold />
                        ~$289 million
                    </Word> in TON value
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The discount:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Market cap: ~$154M</Line>
                <Line>NAV (TON holdings): ~$289M</Line>
                <Line>
                    <Word>
                        <Bold />
                        Discount to NAV: ~47%
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>You're buying TON at roughly half price through TONX stock.</Paragraph>
            <Paragraph>
                Even more striking—the company reported its treasury asset value per share at $11.90 back in September when
                TON was higher. At today's $2.60 stock price, even with TON's decline, the discount remains severe.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the discount exists:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    They acquired their position at an average price of $3.28 per TON—so they're sitting on a ~60%
                    unrealized loss
                </Line>
                <Line>The position shows $298.9 million in unrealized loss</Line>
                <Line>Small-cap, illiquid stock with legacy business baggage</Line>
                <Line>Market skepticism about the MicroStrategy-for-TON strategy</Line>
            </Paragraph>
            <Paragraph>
                For your thesis, this is an interesting arbitrage situation—if you believe TON is undervalued
                infrastructure, TONX offers leveraged exposure at a significant discount to spot. The risk is the legacy
                company structure and potential dilution from their $1B ATM program.
            </Paragraph>
        </Message>
    </Chapter>
);

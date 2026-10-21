import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-19T18:21:17.132796Z"
        >
            <Origin>019c7722-76a0-7fb8-91b8-fd5d34bf57e0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is better for charging client in terms of commission PayPal or Wise? Money is going to a USD account
                and might be from British pounds in one case otherwise it’s always USD to USD
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T18:21:50.753794Z"
        >
            <Origin>019c7722-76a0-7bdc-898e-f535467ff2cf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “PayPal vs Wise business fees USD receiving 2025”</Action>
            <Action>Searched the web for “PayPal receiving payment fees USD domestic 2025 percentage”</Action>
            <Action>Searched the web for “Wise business receiving USD fee GBP to USD conversion fee 2025”</Action>
            <Paragraph>Here's the breakdown for your two scenarios:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    USD → USD (domestic)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        PayPal
                    </Word>: ~2.99% + $0.49 fixed fee per transaction for goods/services invoicing. On a $1,000 invoice,
                    you'd lose about $30.39.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise
                    </Word>: Free to receive USD via ACH into your Wise USD account. $6.11 flat fee if received via
                    wire/SWIFT. On that same $1,000, you keep $993.89 at worst (wire), or the full $1,000 (ACH).
                </Line>
            </Paragraph>
            <Paragraph>Wise wins massively here. It's not even close.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    GBP → USD
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        PayPal
                    </Word>: 4.49% + fixed fee for international transactions, PLUS a 3-4% exchange rate markup on the
                    currency conversion. On a £1,000 payment you could easily lose 7-8% total between fees and the
                    unfavorable exchange rate.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise
                    </Word>: Free to receive GBP into your Wise GBP account (non-SWIFT), then convert GBP→USD at the
                    mid-market rate with a conversion fee starting around 0.57%. On £1,000 you'd pay roughly £5-7 in
                    conversion fees. If the client sends GBP via SWIFT, add a £2.16 receiving fee.
                </Line>
            </Paragraph>
            <Paragraph>
                Wise wins again, dramatically — you keep the real exchange rate and pay a fraction of a percent instead of
                PayPal's hidden 3-4% markup baked into their conversion rate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line
                </Word>: For your situation, Wise is cheaper in both cases. The only real advantage PayPal has is ubiquity —
                clients are more likely to already have a PayPal account. But if you can get clients to send via bank
                transfer to your Wise account details, you'll save significant money, especially on the GBP→USD route where
                PayPal's currency conversion markup is brutal. The one-time $31 setup fee for Wise Business account details
                pays for itself on essentially the first transaction.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T21:43:11.039584Z"
        >
            <Origin>019c77db-52d9-74d0-b66f-949c5c7d358c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If I want to do a fixed monthly payment on 20K at 10% interest for 24 months. Do the math on the amount that
                would be paid per month
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T21:43:26.845027Z"
        >
            <Origin>019c77db-52d9-7ade-80ab-7e34ef4104ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Monthly payment: $922.90
                </Word>
            </Paragraph>
            <Paragraph>Here's the math:</Paragraph>
            <Paragraph>
                Using the standard amortization formula: M = P × &#91;r(1+r)^n&#93; / &#91;(1+r)^n - 1&#93;
            </Paragraph>
            <Paragraph>
                <List />
                <Line>P = $20,000</Line>
                <Line>Annual rate = 10%, so monthly rate r = 0.8333%</Line>
                <Line>n = 24 months</Line>
                <Line>(1.008333)^24 = 1.22039</Line>
            </Paragraph>
            <Paragraph>
                M = 20,000 × (0.008333 × 1.22039) / (1.22039 - 1) = 20,000 × 0.04614 = <Word>
                    <Bold />
                    $922.90/month
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Totals:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Total paid over 24 months: $22,149.60</Line>
                <Line>Total interest paid: $2,149.60</Line>
            </Paragraph>
        </Message>
    </Chapter>
);

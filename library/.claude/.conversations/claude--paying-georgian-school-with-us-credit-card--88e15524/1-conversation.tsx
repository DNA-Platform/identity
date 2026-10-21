import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-29T14:56:14.754305Z"
        >
            <Origin>019c0a41-58c1-7dd3-ace3-fe42ad28b720</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a US based Citibank strata premier card. I need to pay a school in Lari. A bank card from a smaller
                online bank called. Mercury doesn’t seem to support Lori, the Georgian currency. I’m pretty sure my credit
                card supports it as I have no trouble paying for things in Georgia. Can you write a quick letter to a school
                that’s short, offering them that we use the credit card card instead and with a quick bit of justification
                about why we think it will work if you think it will work so do the research first, and then based on the
                result, write the letter
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T14:56:43.004577Z"
        >
            <Origin>019c0a41-58c1-77b9-98cb-e1dd38756182</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll research the Citibank Strata Premier card's international currency support first.</Paragraph>
            <Action>
                Searched the web for “Citibank Strata Premier credit card international transactions foreign currency
                support”
            </Action>
            <Paragraph>
                The research confirms your Strata Premier is well-suited for this. It has 0% foreign transaction fees and
                processes international transactions at Mastercard's wholesale exchange rate. When you pay in Lari, the card
                handles the conversion automatically with no markup beyond the network rate.
            </Paragraph>
            <Paragraph>Here's a brief letter:</Paragraph>
            <Action>Used message compose v0</Action>
            <Paragraph>
                Done. The key technical justification: Mastercard processes GEL transactions directly at wholesale exchange
                rates, and your specific card waives the typical 3% foreign transaction fee that most US cards charge.
                Offering to cover any merchant processing fees they'd incur (typically 2-3%) removes their main objection.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T14:57:03.707862Z"
        >
            <Origin>019c0a42-193d-7e3c-9e38-80e75edca619</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                They are the ones telling us that our bank account doesn’t support it so the letter should be about asking
                them to try this card instead of investigating how to receive payment in dollars
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T14:57:25.758365Z"
        >
            <Origin>019c0a42-193d-7196-96d0-de7128e48a3d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used message compose v0</Action>
            <Paragraph>Done - much more to the point.</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:34:04.023817Z"
        >
            <Origin>019c0a63-e1d6-7554-9624-36edd75c9080</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They gave us these bank details:</Paragraph>
            <Paragraph>LLC Happy EDU, ID 40564062 GE21CD0360000040015108</Paragraph>
            <Paragraph>
                Doesn't look like I can pay that by credit card. Any change I can either use Citibank or Interactive brokers
                to pay for this?
            </Paragraph>
            <Paragraph>I need to do two transactions:</Paragraph>
            <Paragraph>1400 lari for Ekaterina Krasavina and 1556 lari for Dmitry Krasavin</Paragraph>
            <Paragraph>So let me know what's what</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:34:52.806034Z"
        >
            <Origin>019c0a63-e1d6-7554-9624-36ee2f27a43b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - those are bank wire details (IBAN), not card payment. Let me check what's possible.
            </Paragraph>
            <Action>Searched the web for “Georgian IBAN bank code CD GE21CD Georgia”</Action>
            <Paragraph>
                The bank is <Word>
                    <Bold />
                    Credo Bank
                </Word> (SWIFT: JSCRGE22). Now let me check your options for sending GEL.
            </Paragraph>
            <Action>
                Searched the web for “Citibank international wire transfer Georgian Lari GEL currency supported”
            </Action>
            <Action>Searched the web for “Interactive Brokers wire transfer Georgian Lari GEL currency”</Action>
            <Action>Searched the web for “Wise TransferWise send money Georgian Lari GEL Georgia”</Action>
            <Paragraph>Here's what I found:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wise is your best option.
                </Word> They explicitly support sending USD → GEL directly to Georgian bank accounts using IBAN. You'd pay
                with your US bank account, they convert at mid-market rate with transparent fees (~1-2%), and the GEL lands
                directly in Credo Bank.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Citibank
                </Word> can do international wires, but GEL isn't a standard supported currency. They'd likely send USD and
                let Credo Bank convert, which means you lose control over the exchange rate and the school may receive less
                than expected (or face additional fees on their end).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Interactive Brokers
                </Word> doesn't support GEL as a tradeable/withdrawable currency - it's too minor.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For the Wise transfers:
                </Word>
            </Paragraph>
            <Paragraph>You'll need to make two separate transfers:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        1,400 GEL
                    </Word> — reference: "Ekaterina Krasavina"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        1,556 GEL
                    </Word> — reference: "Dmitry Krasavin"
                </Line>
            </Paragraph>
            <Paragraph>Both to:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Recipient name: <Word>
                        <Bold />
                        LLC Happy EDU
                    </Word>
                </Line>
                <Line>
                    IBAN: <Word>
                        <Bold />
                        GE21CD0360000040015108
                    </Word>
                </Line>
                <Line>Bank: Credo Bank (Wise will auto-detect from the IBAN)</Line>
            </Paragraph>
            <Paragraph>
                At today's rate (~2.69 GEL/USD), you're looking at roughly $520 + $578 = ~$1,098 USD total plus Wise fees
                (probably $10-15 total).
            </Paragraph>
            <Paragraph>
                If you don't already have a Wise account, setup takes about 10 minutes with ID verification.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:35:46.818796Z"
        >
            <Origin>019c0a65-7367-763a-a29d-6094e29c5c68</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don't use Wise. I probably can't quickly standup an account. Citibank wont deal in GEL?</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:36:05.737608Z"
        >
            <Origin>019c0a65-7367-763a-a29d-6095b910f674</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Citibank can definitely send an international wire to that IBAN - the question is whether they'll let you
                denominate it in GEL or only USD.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Check this yourself:
                </Word> Log into Citibank online → Transfers → Wire Transfer → set up a new international wire. When you get
                to the currency selection screen, see if GEL (Georgian Lari) appears as an option.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If GEL is available:
                </Word> Great, send two wires for 1,400 GEL and 1,556 GEL respectively. Citibank will convert at their rate
                (with markup) but the school gets the exact amounts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If only USD is available:
                </Word> You can still send to that IBAN in USD, but Credo Bank will convert on their end. The school would
                receive whatever GEL amount results from their conversion rate. You'd need to either:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Overshoot slightly (send ~$525 and ~$585) to account for conversion variance</Line>
                <Line>Coordinate with the school to confirm what they actually received</Line>
            </Paragraph>
            <Paragraph>The wire details you'd need:</Paragraph>
            <Paragraph>
                <List />
                <Line>Beneficiary: LLC Happy EDU</Line>
                <Line>IBAN: GE21CD0360000040015108</Line>
                <Line>SWIFT/BIC: JSCRGE22</Line>
                <Line>Bank: JSC Credo Bank, Georgia</Line>
            </Paragraph>
            <Paragraph>
                Citibank fee would be $35 per wire for a standard account (or less/waived depending on your account tier).
                So potentially $70 in fees for two transfers.
            </Paragraph>
            <Paragraph>
                Want me to draft a quick note to the school explaining you'll wire USD and asking them to confirm receipt
                amounts?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:38:28.989287Z"
        >
            <Origin>019c0a67-ecd0-7692-8066-a4402213a288</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Check it myself!?! What kind of assistant are you lol but I am</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:38:33.725992Z"
        >
            <Origin>019c0a67-ecd0-7692-8066-a4414b22109d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha, fair point - the one thing I <Word>
                    <Emphasis />
                    can't
                </Word> do is log into your Citibank account and click around. Believe me, if I could, I would.
            </Paragraph>
            <Paragraph>Let me know what currency options show up and we'll go from there.</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:39:51.084030Z"
        >
            <Origin>019c0a69-2d6e-7258-a85d-52b51545547f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They won't let me denominate in GEL. If I send USD, will it be rejected?</Paragraph>
        </Message>
        <Message
            at="2026-01-29T15:40:02.152136Z"
        >
            <Origin>019c0a69-2d6e-7258-a85d-52b6dd282830</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It probably won't be rejected - Credo Bank will likely convert the incoming USD to GEL and credit the
                account. This is standard for international wires to countries with minor currencies.
            </Paragraph>
            <Paragraph>But "probably" isn't great when you're wiring money. The risk is:</Paragraph>
            <Paragraph>
                <List />
                <Line>The account might be GEL-only and reject foreign currency</Line>
                <Line>Credo Bank's conversion rate could be unfavorable</Line>
                <Line>The school ends up with slightly less than 1,400/1,556 GEL</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quickest way to know for sure:
                </Word> Ask the school. They deal with international parents - they've probably handled this before.
                Something like:
            </Paragraph>
            <Paragraph>
                "Can your Credo Bank account receive USD wire transfers? If I send approximately $520 and $580 USD, will
                that work, or do you need exact GEL amounts?"
            </Paragraph>
            <Paragraph>
                They may even have a USD account they can give you instead, or tell you exactly what to do.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T19:41:55.390430Z"
        >
            <Origin>019c0b46-ccb5-744e-8ad0-57216813e9c9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Russian please and use Nastya in place of Ana:</Paragraph>
            <Paragraph>
                Update: an account of what was said to Doug primarily, and what was said by Doug secondarily. In there, you
                can see two translations of letters Ana sent to Doug: one that she wrote to Max, one that she wrote to Masha
                and her response. And a letter Doug wrote to Ana’s mother Natalie. The rest are various moments in our
                messaging that provide a glimpse into what it was like when these events started happening
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T19:42:04.874273Z"
        >
            <Origin>019c0b46-ccb5-744e-8ad0-5722e86259a0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Обновление: изложение того, что в основном говорилось Дагу, и в меньшей степени — что говорил сам Даг. Здесь
                вы можете увидеть переводы двух писем, которые Настя отправила Дагу: одно она написала Максу, другое — Маше,
                а также ответ Маши. И письмо, которое Даг написал маме Насти, Наталье. Остальное — это разные моменты из
                нашей переписки, которые дают представление о том, как всё было, когда эти события только начинались.
            </Paragraph>
        </Message>
    </Chapter>
);

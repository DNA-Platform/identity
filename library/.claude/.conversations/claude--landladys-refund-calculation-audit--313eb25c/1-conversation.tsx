import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-27T17:47:44.496322Z"
        >
            <Origin>019dd00d-9c53-77fa-a48c-7d6909a0b7c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Please interpret and audit this math from my landlady. She is sending me money back but she mostly speaks
                turkish. Explain it please:
            </Paragraph>
            <Paragraph>Hı thıse was fırst payment</Paragraph>
            <Paragraph>2670 döllar büt depozıt payment was 860dollar</Paragraph>
            <Paragraph>860*44=37840tl and you send last rent was 43 500tl. Total:81340tl</Paragraph>
            <Paragraph>Cost was:47635.95tl</Paragraph>
            <Paragraph>I'm sendıng you know, 33704.05tl</Paragraph>
            <Paragraph>
                Elec. Was:111.95 ı dıd send you recıevd, Elec2418, Elec 600tl We bout pılov and so ön 278tl, Cleanıng was
                5000tl, Paıntıng from downstaırs 20 000tl, Washıng soffa 2750tl, İnternet was 2 mount2750tl, İnternet to
                close 7300tl, Cleanıng metaryal 850 tl, Water bılls 746 tl, Repaır soffa 3500tl
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T17:48:20.649171Z"
        >
            <Origin>019dd00d-9c53-779d-a53a-2849cc5ea6b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's what she's saying and where the math lands:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Her top-line accounting (this part checks out):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>You paid $2,670 total upfront; $860 of that was the deposit</Line>
                <Line>She's converting the $860 deposit at 44 TL/USD = 37,840 TL</Line>
                <Line>Plus your last month's rent of 43,500 TL</Line>
                <Line>So she's holding 81,340 TL of yours ✓</Line>
                <Line>She's deducting 47,635.95 TL in costs</Line>
                <Line>Refunding you 33,704.05 TL ✓ (81,340 − 47,635.95 = 33,704.05)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But the itemized deductions don't add up to her claimed 47,635.95 TL.
                </Word>
            </Paragraph>
            <Paragraph>Adding her line items:</Paragraph>
            <Paragraph>
                <List />
                <Line>Electric 111.95 + Electric 2,418 + Electric 600 = 3,129.95</Line>
                <Line>Pillow/misc 278</Line>
                <Line>Cleaning 5,000 + cleaning materials 850 = 5,850</Line>
                <Line>Painting (downstairs) 20,000</Line>
                <Line>Sofa washing 2,750 + sofa repair 3,500 = 6,250</Line>
                <Line>Internet 2 months 2,750 + internet cancellation 7,300 = 10,050</Line>
                <Line>Water 746</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Total: 46,303.95 TL
                </Word>
            </Paragraph>
            <Paragraph>
                She's claiming 47,635.95 TL. <Word>
                    <Bold />
                    There's a 1,332 TL gap she hasn't itemized.
                </Word> Worth asking her what that is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other things worth flagging before you accept:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The 111.95 electric line — she wrote "I did send you received," which sounds like that bill was already
                    paid separately. If so, it shouldn't be deducted again. That would widen the unexplained gap to ~1,444
                    TL.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        20,000 TL for "painting from downstairs"
                    </Word> is the biggest single charge and the phrasing is odd — painting somewhere that isn't your unit?
                    Worth clarifying what was painted and why you're paying for it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        7,300 TL "internet to close"
                    </Word> — internet cancellation fees that high are unusual; you may want to see the bill from the
                    provider.
                </Line>
                <Line>
                    The 44 TL/USD rate on your deposit — you might check what the rate was when you actually paid the
                    deposit vs. now. If TL has weakened since, converting at the old rate is fine; if it's strengthened,
                    she's giving you fewer TL than your dollars are worth today. (Deposits are typically returned at the
                    original rate or in original currency, but worth knowing where you stand.)
                </Line>
            </Paragraph>
            <Paragraph>
                Bottom line: ask her to account for the missing ~1,332 TL, clarify the 111.95 electric, and get
                receipts/explanations for the painting and internet cancellation charges before agreeing.
            </Paragraph>
        </Message>
    </Chapter>
);

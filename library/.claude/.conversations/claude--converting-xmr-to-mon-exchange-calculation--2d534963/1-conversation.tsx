import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 April 2026](2026-04-29)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-29T21:28:14.293240Z"
        >
            <Origin>019ddb24-7520-7888-bd63-5edb211d5a3a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                $0.02575 MON $373.24 XMR If I were to need 0.617729643001 How much MON do I sell? Show your work - word
                problem
            </Paragraph>
        </Message>
        <Message
            at="2026-04-29T21:28:18.698790Z"
        >
            <Origin>019ddb24-7520-79ac-8d95-76ca587bf498</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Word Problem: Currency Conversion</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Given information:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>1 MON = $0.02575</Line>
                <Line>1 XMR = $373.24</Line>
                <Line>
                    Goal: Acquire <Word>
                        <Bold />
                        0.617729643001 XMR
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1: Find the dollar value of the XMR needed.
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                0.617729643001 XMR × $373.24 per XMR = <Word>
                    <Bold />
                    $230.50
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (0.617729643001 × 373.24 = 230.4999... ≈ $230.50)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2: Convert that dollar amount into MON.
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                $230.50 ÷ $0.02575 per MON = <Word>
                    <Bold />
                    8,951.46 MON
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (230.50 / 0.02575 = 8,951.456...)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word>
            </Paragraph>
            <Paragraph>
                You would need to sell approximately <Word>
                    <Bold />
                    8,951.46 MON
                </Word> to get <Word>
                    <Bold />
                    0.617729643001 XMR
                </Word> at those prices.
            </Paragraph>
        </Message>
    </Chapter>
);

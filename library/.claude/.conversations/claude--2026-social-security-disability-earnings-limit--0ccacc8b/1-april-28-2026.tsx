import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 April 2026](2026-04-28)</Date>
        </Dated>
        <Title>[[ 28 April 2026 ]]</Title>
        <Message
            at="2026-04-28T17:46:21.143219Z"
        >
            <Origin>019dd532-f06f-7059-8008-b45f3838fa38</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the 2026 limit for money you can make while on social security disability</Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:46:40.374755Z"
        >
            <Origin>019dd532-f070-7e0e-b431-7a60f3a01d2d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “2026 SGA Social Security Disability earnings limit”</Action>
            <Paragraph>
                For 2026, per the SSA's official Red Book, the Substantial Gainful Activity (SGA) limits are $1,690 per
                month for non-blind disability recipients and $2,830 per month for those who are statutorily blind.
            </Paragraph>
            <Paragraph>Two related thresholds worth knowing if it's SSDI specifically:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Trial Work Period (TWP) trigger
                    </Word>: $1,210/month in 2026 — any month you earn above this counts toward your 9-month TWP, during
                    which there's no earnings cap on benefits.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Extended Period of Eligibility (after TWP)
                    </Word>: SGA limits ($1,690 / $2,830) apply on a month-by-month basis for 36 months.
                </Line>
            </Paragraph>
            <Paragraph>
                If it's SSI rather than SSDI, the rules are different — SSI is needs-based and reduces payments based on
                countable income formulas rather than a clean cutoff, with a 2026 federal benefit rate of $994/individual.
            </Paragraph>
            <Paragraph>
                These are gross earnings before taxes, though IRWE (impairment-related work expenses) and subsidies can be
                deducted before comparison to the threshold.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:47:24.537784Z"
        >
            <Origin>019dd533-e278-73b0-85ce-3c1e0143ff0f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I So its 12 not 16 because it qoukd be lost</Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:47:59.302260Z"
        >
            <Origin>019dd533-e278-79f0-8085-08a7177510e7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — the test is applied <Word>
                    <Bold />
                    monthly
                </Word>, not averaged annually. So:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $1,690 × 12 = $20,280/year
                    </Word> is the most you can earn while staying at or below the cap every single month.
                </Line>
                <Line>
                    You can't average — earning $3,000 one month and $400 another would still trigger an SGA-level month,
                    and after your Trial Work Period and Extended Period of Eligibility, that month's benefit can be lost.
                </Line>
                <Line>
                    Bonuses, retroactive pay, and commissions get attributed to the month they're for, which can
                    accidentally push a month over.
                </Line>
            </Paragraph>
            <Paragraph>
                The only window where the monthly cap doesn't apply is the <Word>
                    <Bold />
                    9-month Trial Work Period
                </Word> — during those months you can earn unlimited amounts and keep full benefits. After that, every month
                is evaluated against the $1,690 threshold independently.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:48:15.201319Z"
        >
            <Origin>019dd534-add5-73da-a921-be566e9c7f92</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You said 1200 triggers something</Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:48:22.083165Z"
        >
            <Origin>019dd534-add5-7558-87b0-a2a87b3dd353</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — <Word>
                    <Bold />
                    $1,210/month in 2026 triggers a Trial Work Period (TWP) month.
                </Word>
            </Paragraph>
            <Paragraph>Here's how it works:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Any month you earn <Word>
                        <Bold />
                        over $1,210
                    </Word> (gross), that month gets counted as one of your 9 TWP months.
                </Line>
                <Line>
                    You get <Word>
                        <Bold />
                        9 TWP months total within a rolling 60-month window
                    </Word>.
                </Line>
                <Line>
                    During those 9 months, there's <Word>
                        <Bold />
                        no earnings cap
                    </Word> — you can earn any amount and still get your full SSDI check.
                </Line>
                <Line>Once you've used all 9, the SGA test ($1,690/month) kicks in for benefit decisions.</Line>
            </Paragraph>
            <Paragraph>So the two numbers do different jobs:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $1,210
                    </Word> = "this month counts as a trial work month" (but you still get paid in full)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $1,690
                    </Word> = "this month's earnings disqualify you from a benefit" (after TWP is used up)
                </Line>
            </Paragraph>
            <Paragraph>
                Earning between $1,210 and $1,690 is a weird zone — it burns a TWP month without actually being SGA-level
                work. Some people deliberately stay under $1,210 to preserve TWP months for later.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:48:43.035046Z"
        >
            <Origin>019dd535-1b8a-76ac-9dc9-d4e4cfa9c787</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So then 1200 is the max without losing it (in the limit)</Paragraph>
        </Message>
        <Message
            at="2026-04-28T17:48:49.940843Z"
        >
            <Origin>019dd535-1b8a-7d66-9f41-181be48a1708</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, exactly. <Word>
                    <Bold />
                    $1,200/month ($14,400/year)
                </Word> is the practical "safe" ceiling if you want to earn indefinitely without ever burning a TWP month or
                risking benefits.
            </Paragraph>
            <Paragraph>
                To be precise: the TWP threshold is $1,210, so technically you can go up to $1,209.99. At $1,200/month you
                have a small buffer for things like a slightly larger paycheck due to a 5-Friday month or a small bonus.
            </Paragraph>
            <Paragraph>The hierarchy:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ≤ $1,209/month
                    </Word> → invisible to SSA's work tests, benefits fully safe forever
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $1,210–$1,689/month
                    </Word> → burns a TWP month, but full benefits still paid
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ≥ $1,690/month
                    </Word> → SGA-level; safe during TWP, risky after
                </Line>
            </Paragraph>
            <Paragraph>
                So if your goal is "earn the most I can without ever putting benefits at risk or using up trial months,"
                $1,200/month is the right mental anchor.
            </Paragraph>
        </Message>
    </Chapter>
);

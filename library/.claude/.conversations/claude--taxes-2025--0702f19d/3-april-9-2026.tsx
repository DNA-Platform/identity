import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 April 2026](2026-04-09)</Date>
        </Dated>
        <Title>[[ 9 April 2026 ]]</Title>
        <Message
            at="2026-04-09T12:41:16.918570Z"
        >
            <Origin>019d7242-cbc2-754b-bac4-34f60a83ab94</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I created the ID. Buit I want to put together a list of all the work that we need to do. For instance,
                I have to file some form as an extension for the business. I will need to do calculations on Mercury to
                figure out the expenses of the business right? What is the full set of documents / information that need to
                be fetched? Can you think very hard about that and come up with a list of work? Don't worry who will do it,
                just describe how it needs to be done
            </Paragraph>
        </Message>
        <Message
            at="2026-04-09T12:41:46.107474Z"
        >
            <Origin>019d7242-cbc2-7b9d-9897-f5945f7385ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me think through everything carefully.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    URGENT ACTION
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    File Form 7004 immediately — this requires the LLC's EIN and legal name as registered with Wyoming. It
                    can be filed before any other information is gathered.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    DOCUMENTS TO FETCH
                </Word>
            </Paragraph>
            <Paragraph>From IRS.gov:</Paragraph>
            <Paragraph>
                <List />
                <Line>Wage &amp; Income Transcript 2025</Line>
                <Line>Account Transcript 2025</Line>
                <Line>Every actual form filed under your SSN that appears in the transcript</Line>
            </Paragraph>
            <Paragraph>From Interactive Brokers:</Paragraph>
            <Paragraph>
                <List />
                <Line>1099-R showing IRA withdrawal amount and tax withheld</Line>
                <Line>Any other 1099s issued for 2025 (interest, dividends, anything)</Line>
            </Paragraph>
            <Paragraph>From Mercury:</Paragraph>
            <Paragraph>
                <List />
                <Line>Full 2025 bank statement</Line>
                <Line>
                    Complete transaction history exportable as CSV — this is the raw material for calculating LLC income and
                    expenses
                </Line>
            </Paragraph>
            <Paragraph>From ZenBusiness:</Paragraph>
            <Paragraph>
                <List />
                <Line>EIN confirmation document</Line>
                <Line>LLC formation/articles of organization</Line>
            </Paragraph>
            <Paragraph>From house sale:</Paragraph>
            <Paragraph>
                <List />
                <Line>Original purchase documents showing what you paid and when</Line>
                <Line>Closing disclosure from December 2025 sale showing sale price and selling costs</Line>
                <Line>
                    Any receipts or records of home improvements made during ownership — these increase your cost basis and
                    reduce your taxable gain
                </Line>
            </Paragraph>
            <Paragraph>From title company:</Paragraph>
            <Paragraph>
                <List />
                <Line>Confirm whether a 1099-S was issued and obtain a copy if so</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CALCULATIONS NEEDED
                </Word>
            </Paragraph>
            <Paragraph>House sale gain:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Sale price minus original purchase price minus selling costs minus improvement costs = actual gain
                </Line>
                <Line>If under $250k the whole thing may be excludable</Line>
                <Line>This determines whether Schedule D and Form 8949 are needed at all</Line>
            </Paragraph>
            <Paragraph>LLC income and expenses:</Paragraph>
            <Paragraph>
                <List />
                <Line>Total income received into Mercury in 2025</Line>
                <Line>Ana's guaranteed payment amount — this needs to be a defined number</Line>
                <Line>
                    Itemized business expenses from Mercury CSV categorized by type — domain, software, fees, anything paid
                    for business purposes
                </Line>
                <Line>These together determine the net loss that flows to your K-1</Line>
            </Paragraph>
            <Paragraph>IRA:</Paragraph>
            <Paragraph>
                <List />
                <Line>Exact withdrawal amount</Line>
                <Line>Exact amount withheld — shown on 1099-R</Line>
                <Line>These determine your net federal and NY tax owed or refunded</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    INFORMATION NEEDED FROM YOU DIRECTLY
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Ana's full legal name exactly as on her passport</Line>
                <Line>Ana's full address in Georgia</Line>
                <Line>
                    Your ownership percentages — confirmed 50/50 but needs to be in writing somewhere, ideally an operating
                    agreement
                </Line>
                <Line>Exact amount of Ana's guaranteed payment for 2025</Line>
                <Line>Original purchase price of the house and year purchased</Line>
                <Line>Approximate total spent on home improvements during ownership</Line>
            </Paragraph>
            <Paragraph>
                That's the complete picture. The 7004 is the only thing with a clock on it right now. Everything else can be
                gathered in whatever order makes sense to you.
            </Paragraph>
        </Message>
    </Chapter>
);

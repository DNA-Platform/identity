import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 November 2024](2024-11-02)</Date>
        </Dated>
        <Title>[[ 2 November 2024 ]]</Title>
        <Message
            at="2024-11-02T01:01:03.513794Z"
        >
            <Origin>97a0b0ff-c895-427a-8d50-ff8578f7ee75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You said this. If that’s all I made and 3600 was from SSDI then what would my taxes be?</Paragraph>
            <Paragraph>Let me break down the tax situation:</Paragraph>
            <Paragraph>SSDI ($3,600):</Paragraph>
            <Paragraph>
                <List />
                <Line>Generally tax-free if it's your only income</Line>
                <Line>Could become partially taxable if your total income (including work earnings) exceeds:</Line>
                <Paragraph>
                    <List />
                    <Line>$25,000 (single)</Line>
                    <Line>$32,000 (married filing jointly)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Work Income ($1,550):</Paragraph>
            <Paragraph>
                <List />
                <Line>IS taxable</Line>
                <Line>You'll pay:</Line>
                <Paragraph>
                    <List />
                    <Line>Regular income tax</Line>
                    <Line>Social Security tax (6.2%)</Line>
                    <Line>Medicare tax (1.45%)</Line>
                    <Line>State tax (if applicable)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>So on the $1,550 work income:</Paragraph>
            <Paragraph>
                <List />
                <Line>You'd have standard payroll deductions</Line>
                <Line>Might take home around $1,200-1,300 after taxes (varies by state)</Line>
                <Line>
                    This earned income might make a portion of your SSDI taxable depending on your total yearly income
                </Line>
            </Paragraph>
            <Paragraph>Total potential monthly income:</Paragraph>
            <Paragraph>
                <List />
                <Line>$3,600 (mostly or fully tax-free SSDI)</Line>
                <Line>Plus about $1,200-1,300 (after-tax work income)</Line>
                <Line>Roughly $4,800-4,900 total take-home</Line>
            </Paragraph>
            <Paragraph>
                Would you like me to break down how much of your SSDI might become taxable at different income levels?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:01:03.513794Z"
        >
            <Origin>e1805de2-6a5e-4e2d-a944-11ce8a3d181b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me calculate this for New York with those specific amounts:</Paragraph>
            <Paragraph>Annual Income Breakdown:</Paragraph>
            <Paragraph>
                <List />
                <Line>SSDI: $43,200 ($3,600 × 12)</Line>
                <Line>Work: $18,600 ($1,550 × 12)</Line>
                <Line>Total: $61,800</Line>
            </Paragraph>
            <Paragraph>Federal Taxes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>SSDI taxability:</Line>
                <Paragraph>
                    <List />
                    <Line>Your combined income exceeds $25,000</Line>
                    <Line>Up to 85% of SSDI could be taxable</Line>
                    <Line>About $36,720 of SSDI would be taxable</Line>
                </Paragraph>
                <Line>Work Income Federal Tax:</Line>
                <Paragraph>
                    <List />
                    <Line>Standard deduction: $13,850 (2024)</Line>
                    <Line>Taxable earned income: $4,750</Line>
                    <Line>Federal tax bracket: 12%</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>NY State Tax:</Paragraph>
            <Paragraph>
                <List />
                <Line>NY State standard deduction: $8,500</Line>
                <Line>NY tax rate would be around 5.97%</Line>
            </Paragraph>
            <Paragraph>Approximate Annual Tax:</Paragraph>
            <Paragraph>
                <List />
                <Line>Federal: About $4,800</Line>
                <Line>NY State: About $2,900</Line>
                <Line>Social Security/Medicare: $1,153 (only on work income)</Line>
                <Line>Total tax: Around $8,853</Line>
            </Paragraph>
            <Paragraph>Monthly Take-Home After All Taxes:</Paragraph>
            <Paragraph>
                <List />
                <Line>About $4,412 ($61,800 - $8,853 = $52,947 ÷ 12)</Line>
            </Paragraph>
            <Paragraph>Would you like me to break down any part of this calculation in more detail?</Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:02:41.132600Z"
        >
            <Origin>ddb42216-8a9b-48f2-9388-4447da5340d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What if I just had 3600 SSDI. I would get taxed on money given to me?</Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:02:41.132600Z"
        >
            <Origin>8b43f5f5-8c80-4b89-b009-f2ebc7b13715</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>If you ONLY receive the $3,600 monthly SSDI ($43,200 annually), here's the good news:</Paragraph>
            <Paragraph>SSDI Only Scenario:</Paragraph>
            <Paragraph>
                <List />
                <Line>$43,200 annual SSDI</Line>
                <Line>NO other income</Line>
                <Line>This would be TAX-FREE!</Line>
            </Paragraph>
            <Paragraph>Why It's Tax-Free:</Paragraph>
            <Paragraph>
                <List />
                <Line>SSDI is only taxed if your total combined income exceeds:</Line>
                <Paragraph>
                    <List />
                    <Line>$25,000 (if single)</Line>
                    <Line>$32,000 (if married filing jointly)</Line>
                </Paragraph>
                <Line>With just SSDI, you're under these limits</Line>
                <Line>You don't even have to file a tax return unless you have other income</Line>
            </Paragraph>
            <Paragraph>So Monthly You'd Get:</Paragraph>
            <Paragraph>
                <List />
                <Line>Full $3,600</Line>
                <Line>No federal tax</Line>
                <Line>No state tax</Line>
                <Line>No Social Security/Medicare tax</Line>
                <Line>$3,600 = $3,600 (you keep it all!)</Line>
            </Paragraph>
            <Paragraph>
                This is why some people choose to focus on getting stable on SSDI before attempting work - the tax situation
                is much simpler and you keep your full benefit amount.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:03:35.757415Z"
        >
            <Origin>d5e5fd16-8bbf-4163-a4eb-f8989de97b70</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>3600 * 12 is over 40K</Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:03:35.757415Z"
        >
            <Origin>7fecbd90-7ab7-42c7-ac57-ce4a350f2798</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me correct my analysis - you're absolutely right!</Paragraph>
            <Paragraph>$3,600 × 12 = $43,200 annual SSDI</Paragraph>
            <Paragraph>For SSDI only:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Calculate "combined income" for tax purposes:</Line>
                <Paragraph>
                    <List />
                    <Line>SSDI: $43,200</Line>
                    <Line>Other income: $0</Line>
                    <Line>Total: $43,200</Line>
                    <Line>This IS over the $25,000 threshold</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Tax Impact:</Paragraph>
            <Paragraph>
                <List />
                <Line>Up to 85% of your SSDI could be taxable ($36,720)</Line>
                <Line>After standard deduction ($13,850 in 2024)</Line>
                <Line>Taxable amount: about $22,870</Line>
            </Paragraph>
            <Paragraph>Approximate Annual Tax:</Paragraph>
            <Paragraph>
                <List />
                <Line>Federal: About $2,300 (12% bracket)</Line>
                <Line>NY State: About $1,200 (5.97%)</Line>
                <Line>Total tax: Around $3,500</Line>
            </Paragraph>
            <Paragraph>Monthly Take-Home:</Paragraph>
            <Paragraph>
                <List />
                <Line>SSDI: $3,600</Line>
                <Line>Minus roughly $292 for taxes ($3,500 ÷ 12)</Line>
                <Line>Net monthly: About $3,308</Line>
            </Paragraph>
            <Paragraph>
                I apologize for my earlier error. Would you like me to break down how to manage these tax payments (like
                quarterly estimates) to avoid a large bill?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:04:59.571057Z"
        >
            <Origin>4621f462-2e3b-4b63-b896-3f932afeb847</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay and then how much can I make monthly to stay on SSDI, and what is my monthly take home after taxes
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:04:59.571057Z"
        >
            <Origin>9f3f474e-d241-44e5-9009-5d5454d5a03f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me break this down with the maximum allowed while staying on SSDI ($1,550) plus your SSDI:
            </Paragraph>
            <Paragraph>Annual Income:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>SSDI: $43,200 ($3,600 × 12)</Line>
                <Line>Work: $18,600 ($1,550 × 12)</Line>
            </Paragraph>
            <Paragraph>Total: $61,800</Paragraph>
            <Paragraph>Monthly GROSS:</Paragraph>
            <Paragraph>
                <List />
                <Line>SSDI: $3,600</Line>
                <Line>Work: $1,550</Line>
            </Paragraph>
            <Paragraph>Total: $5,150</Paragraph>
            <Paragraph>Tax Calculations (Annual):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>SSDI portion:</Line>
                <Paragraph>
                    <List />
                    <Line>85% taxable: $36,720</Line>
                </Paragraph>
                <Line>Work Income:</Line>
                <Paragraph>
                    <List />
                    <Line>Fully taxable: $18,600</Line>
                    <Line>Social Security tax (6.2%): $1,153</Line>
                    <Line>Medicare tax (1.45%): $270</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Total Taxable Income: $55,320 Minus standard deduction: $41,470</Paragraph>
            <Paragraph>Approximate Annual Taxes:</Paragraph>
            <Paragraph>
                <List />
                <Line>Federal: $4,800</Line>
                <Line>NY State: $2,900</Line>
                <Line>SS/Medicare: $1,423</Line>
            </Paragraph>
            <Paragraph>Total Tax: $9,123</Paragraph>
            <Paragraph>Monthly NET Take-Home:</Paragraph>
            <Paragraph>
                <List />
                <Line>Gross: $5,150</Line>
                <Line>Minus taxes ($9,123 ÷ 12 = $760)</Line>
            </Paragraph>
            <Paragraph>= Approximately $4,390 per month</Paragraph>
            <Paragraph>
                Remember: Going over $1,550/month in work income risks losing SSDI after trial work period.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:06:20.124273Z"
        >
            <Origin>92ba98a7-6401-47cd-b78f-fb709aa112b5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                And thats factoring in tax brackets? And there’s nothing I qualify for based on disability?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:06:20.124273Z"
        >
            <Origin>41b0e3e0-be1a-4878-8627-8c3fd9cf60d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me double-check tax brackets and disability tax benefits:</Paragraph>
            <Paragraph>2024 Federal Tax Brackets for $41,470 taxable income:</Paragraph>
            <Paragraph>
                <List />
                <Line>First $13,850: 10% bracket</Line>
                <Line>Remainder ($27,620): 12% bracket</Line>
                <Line>This would actually lower the federal tax</Line>
            </Paragraph>
            <Paragraph>Tax Benefits You Might Qualify For:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Earned Income Tax Credit (EITC)</Line>
                <Paragraph>
                    <List />
                    <Line>Available if working part-time</Line>
                    <Line>Disability doesn't disqualify you</Line>
                </Paragraph>
                <Line>NY State Benefits:</Line>
                <Paragraph>
                    <List />
                    <Line>NY State Earned Income Credit</Line>
                    <Line>NY disability tax credits</Line>
                    <Line>Property tax exemptions if you own home</Line>
                </Paragraph>
                <Line>Tax Deductions:</Line>
                <Paragraph>
                    <List />
                    <Line>Medical expenses over 7.5% of income</Line>
                    <Line>Disability-related work expenses</Line>
                    <Line>Transportation costs</Line>
                    <Line>Medical equipment</Line>
                    <Line>Some insurance premiums</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This could reduce your tax burden by several thousand dollars, potentially increasing monthly take-home to
                around $4,600-4,700.
            </Paragraph>
            <Paragraph>Would you like me to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Recalculate with exact tax brackets?</Line>
                <Line>Break down which specific credits you might qualify for?</Line>
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:09:29.655475Z"
        >
            <Origin>86f0574a-2dcc-4326-875f-b740d26cc75e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I’d be working part time for sure. Presumably I’d get disability tax credits on SSDI, I do own a home
                though in this scenario the home would be in a trust and it would pay the property taxes I think. I doubt
                disability work expenses or transportation costs factor in. It wont cover my car lease right? Let’s assume I
                have medicaid
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T01:09:29.655475Z"
        >
            <Origin>3e2cfee1-2eeb-404d-b0d8-9041a3d1c748</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me break this down with your specific situation:</Paragraph>
            <Paragraph>Working Part-Time ($1,550/month) with SSDI ($3,600/month):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>EITC for Part-Time Work:</Line>
                <Paragraph>
                    <List />
                    <Line>Could be around $2,000/year credit</Line>
                    <Line>NY gives additional 30% of federal EITC</Line>
                </Paragraph>
                <Line>Home in Trust:</Line>
                <Paragraph>
                    <List />
                    <Line>Trust pays property taxes</Line>
                    <Line>You might still qualify for NY STAR program</Line>
                    <Line>Disability exemption might still apply depending on trust structure</Line>
                </Paragraph>
                <Line>What's NOT Deductible:</Line>
                <Paragraph>
                    <List />
                    <Line>Car lease (regular transportation)</Line>
                    <Line>Regular commuting costs</Line>
                    <Line>Basic work expenses</Line>
                </Paragraph>
                <Line>What IS Deductible:</Line>
                <Paragraph>
                    <List />
                    <Line>Special medical equipment</Line>
                    <Line>Portion of medical costs Medicaid doesn't cover</Line>
                    <Line>Special disability-related vehicle modifications (if needed)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Revised Monthly Take-Home (with credits):</Paragraph>
            <Paragraph>
                <List />
                <Line>Gross: $5,150</Line>
                <Line>Lower tax burden due to credits</Line>
                <Line>Potentially around $4,700-4,800 monthly</Line>
            </Paragraph>
            <Paragraph>
                The big advantage: With Medicaid, you won't have medical expenses reducing your take-home pay.
            </Paragraph>
            <Paragraph>Would you like me to break down how to maximize these tax credits and deductions?</Paragraph>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 April 2026](2026-04-10)</Date>
        </Dated>
        <Title>[[ 10 April 2026 ]]</Title>
        <Message
            at="2026-04-10T12:44:41.977792Z"
        >
            <Origin>019d776c-49ab-7536-9390-86e7b21d9b8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That's a relatively short list. It may be right. I want you to read it and this entire conversation and make
                sure it is comprehensive. Ask me questions if you need to know anything
            </Paragraph>
        </Message>
        <Message
            at="2026-04-10T12:44:54.190715Z"
        >
            <Origin>019d776c-49ab-7bea-b634-8875da4cf91c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me read through everything carefully.</Paragraph>
            <Paragraph>The list is actually solid. One thing I want to verify that has form implications:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Did you make any estimated tax payments to the IRS or NY state during 2025?
                </Word> Some people do this when they have income without withholding. If you did, those payments appear on
                the Account Transcript and affect what you owe or are refunded. If not, no additional forms needed.
            </Paragraph>
            <Paragraph>Everything else I can confirm:</Paragraph>
            <Paragraph>
                The federal business picture is complete — 7004, 1065, K-1s, the NY IT-204 and IT-204-IP layer on top
                cleanly.
            </Paragraph>
            <Paragraph>
                The personal picture is complete given what you've told me — 1040, Schedule E for the K-1 loss, Schedule
                D/8949 conditional on the house sale gain calculation, the IRA flows through automatically, NY IT-201 picks
                up everything at the state level.
            </Paragraph>
            <Paragraph>
                The source documents list is complete — IRS transcripts, IB 1099-R, Mercury statements, house sale
                documents, ZenBusiness EIN.
            </Paragraph>
            <Paragraph>
                The calculations needed are correctly identified — gain on house, LLC net income/loss, IRA net after
                withholding.
            </Paragraph>
            <Paragraph>
                The information needed from you directly is correct — Ana's details, guaranteed payment amount, house
                purchase price and improvement costs.
            </Paragraph>
            <Paragraph>
                The one genuine open question: <Word>
                    <Bold />
                    did you make any estimated tax payments in 2025?
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-04-10T12:47:40.534832Z"
        >
            <Origin>019d776e-fc7c-706c-9468-46d3414fcfa6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No estimated tax payments. No income for 2025. We'll need to know things like the improvements on the house
                right? I need to find a list of those somehow? Ana will be listing her status as applied for the ITIN right?
                Does naything here change your writeup of the work?
            </Paragraph>
            <Paragraph>
                PLease create an edible artifact describing the full scope of information needed for this entire process of
                doing business and personal taxes
            </Paragraph>
        </Message>
        <Message
            at="2026-04-10T12:49:55.025805Z"
        >
            <Origin>019d776e-fc7c-715a-be82-8b0232a745b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/frontend-design/SKILL.md</Action>
            <Action>Used visualize:show widget</Action>
            <Paragraph>That's the full scope document. Two small updates your questions prompted:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Home improvements
                </Word> — added explicitly under house sale documents. The key point is that every documented dollar of
                improvements reduces your taxable gain, so it's worth digging through whatever records exist — old bank
                statements, credit card history, contractor invoices going back to 2019.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ana's ITIN
                </Word> — reflected as "Applied For" placeholder on her K-1. No change to the work scope, it's just noted as
                the correct status.
            </Paragraph>
            <Paragraph>
                The document is designed so CC can reference it throughout the process. Ready to start the IRS.gov sprint?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-10T17:19:08.550846Z"
        >
            <Origin>019d7867-9455-7790-b9b9-ec9a5906a6de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there the equivalent of the irs list of forms but for my company?</Paragraph>
        </Message>
        <Message
            at="2026-04-10T17:19:16.402591Z"
        >
            <Origin>019d7867-9455-7f22-8440-61e0657537d8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — there's no equivalent. The IRS Wage &amp; Income Transcript exists because third parties (employers,
                banks, brokers) file forms about you with the IRS independently. The IRS collects all of that and makes it
                available to you.
            </Paragraph>
            <Paragraph>
                For your LLC there's no equivalent because the LLC hasn't filed anything yet. The 1065 is the first filing.
                There's no third party reporting income to the IRS on behalf of the partnership — the partnership itself is
                the reporting entity.
            </Paragraph>
            <Paragraph>
                What we have instead is Mercury. That's your ground truth for the LLC — every dollar in and every dollar
                out. The Mercury transaction export is the equivalent of what the IRS transcript does for your personal
                return.
            </Paragraph>
            <Paragraph>
                So the LLC picture gets built entirely from the bottom up using Mercury, rather than pulled from an existing
                government record.
            </Paragraph>
        </Message>
    </Chapter>
);

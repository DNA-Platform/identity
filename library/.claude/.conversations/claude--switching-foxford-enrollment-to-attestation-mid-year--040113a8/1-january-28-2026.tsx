import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 January 2026](2026-01-28)</Date>
        </Dated>
        <Title>[[ 28 January 2026 ]]</Title>
        <Message
            at="2026-01-28T11:22:58.321967Z"
        >
            <Origin>019c0457-b801-75e8-af52-11b606a8bdbb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need you to look at the Foxford school in Russia. Children are currently enrolled in webinar and other
                courses. Is it possible to move them to attestation only if they already have a school for attestation in
                the middle of the school year? We’re going to be working with an education center in George that will
                provide them real learning support. They follow the Foxford curriculum anyway, but we need to know that we
                can change their schedule.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-28T11:24:05.439127Z"
        >
            <Origin>019c0457-b801-7ec1-b087-438ba3a6e1e9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll search for information about Foxford's policies on switching enrollment types mid-year.
            </Paragraph>
            <Action>Searched the web for “Foxford Russia online school attestation only switch mid-year”</Action>
            <Paragraph>Let me search more specifically for Foxford's attestation policies and switching options.</Paragraph>
            <Action>Searched the web for “Фоксфорд аттестация семейное обучение перевод середина года”</Action>
            <Paragraph>
                Let me search for more specific information about Foxford's tariff plans and switching between them.
            </Paragraph>
            <Action>Searched the web for “Фоксфорд тарифы смена программы аттестация экстернат”</Action>
            <Paragraph>
                Let me fetch the Foxford FAQ page for more details on program changes and options for students abroad.
            </Paragraph>
            <Action>Fetched https://externat.foxford.ru/faq</Action>
            <Paragraph>
                Let me check the specific FAQ about program changes and the option for knowledge-only without attestation.
            </Paragraph>
            <Action>Fetched https://externat.foxford.ru/faq/budet-li-pereraschet-pri-smene-programmy-obucheniya</Action>
            <Action>Searched the web for “Фоксфорд смена программы обучения перерасчет середина года”</Action>
            <Paragraph>
                Let me search for more specific information about the knowledge-only option without attestation.
            </Paragraph>
            <Action>Searched the web for “"Фоксфорд" "не нужен аттестат" курсы без аттестации”</Action>
            <Action>Searched the web for “Фоксфорд курсы отдельно без домашней школы запись”</Action>
            <Paragraph>Based on my research, here's what I found about Foxford's flexibility:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, mid-year changes are allowed.
                </Word> Russian education law explicitly permits switching to family education (семейное образование) at any
                time, including mid-year. Foxford's documentation confirms: <Word>
                    <Emphasis />
                    "You can send the notification at any time: before the start of the school year or in the middle of it."
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Program Switching with Recalculation:
                </Word> Foxford allows changing programs during the contract period with a financial recalculation. Their
                FAQ specifically addresses this scenario.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Your Situation - Key Options:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Courses Without Attestation
                    </Word>: Foxford explicitly has programs for families who "don't need a certificate, only knowledge"
                    (they address this in their FAQ for families abroad). You can:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Purchase individual course access without the school attachment component</Line>
                    <Line>
                        Switch to recorded lessons (записи) instead of live webinars - more flexible for different time
                        zones
                    </Line>
                    <Line>
                        Drop the attestation package entirely if attestation will happen through the Georgian center
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        How Foxford Attestation Works
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Foxford has a teaching license but no state accreditation</Line>
                    <Line>They partner with accredited schools (like "Наши Пенаты") for formal attestation</Line>
                    <Line>The attestation component is actually a separate add-on that can be removed</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Practical Path Forward
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Contact Foxford directly (externat@foxford.ru or their Telegram bot @foxfordschool_bot)</Line>
                    <Line>Request to change from full webinar + attestation to course access only</Line>
                    <Line>They should recalculate based on remaining time/services</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important Consideration
                </Word>: Since the Georgian education center follows Foxford's curriculum anyway, you essentially just need
                access to the course materials. This is a cheaper configuration than the full домашняя школа program with
                attestation.
            </Paragraph>
            <Paragraph>Want me to help draft a message to Foxford outlining this request?</Paragraph>
        </Message>
    </Chapter>
);

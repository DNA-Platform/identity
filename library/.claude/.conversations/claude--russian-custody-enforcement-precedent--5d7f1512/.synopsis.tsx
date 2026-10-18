import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person, in an ongoing custody matter with their ex-husband Maxim following a denied appeal, asked Claude
            to research Russian family and enforcement law to evaluate two scenarios: whether Maxim could obtain a
            travel ban on the person that would block her passport renewal, and whether Russian courts treat
            non-compliance with a contact order as less serious than alimony non-payment. The person stressed that
            research should rely strictly on Russian statutes and case law without importing assumptions from American
            legal systems. Claude researched 229-ФЗ (enforcement proceedings), 114-ФЗ (passports), the Family Code, and
            relevant Supreme Court and district court precedent, then built a detailed timeline document covering each
            procedural step (writ issuance, case opening, notification, voluntary-compliance window, and earliest
            possible exit restriction), citing specific cases including a Moscow district court decision upholding a
            six-month exit restriction in a contact dispute and two Supreme Court rulings on passport refusals tied to
            exit bans. The person pushed back multiple times, asking Claude to express findings as a function of time
            rather than suggesting immediate risk, to verify whether Maxim's own effort or history of absence mattered
            to how obstruction is assessed, and to clarify how much delay would be defensible without reading as
            obstruction. Claude produced a timeline artifact in a Claude Docs project with a visual diagram of four
            scenarios mapped to specific dates, then walked through how notice timing (via Госуслуги or mail) affects
            when the compliance clock starts, and how a bailiff's finding of obstruction depends on a documented record
            rather than a single complaint.
        </Paragraph>
    </Chapter>
);

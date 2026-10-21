import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-08T12:48:07.109928Z"
        >
            <Origin>019e072a-4087-7ba2-a71b-cfc6f8f1c568</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is valium the same class of drug as lirazepam and alorazolam in georgian pharmacies? I would love an easier
                to obtain alternative
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:49:04.271329Z"
        >
            <Origin>019e072a-4087-745e-95d9-c0fc9923e1f2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia country benzodiazepine prescription regulations pharmacy controlled substances
                list”
            </Action>
            <Paragraph>
                The search returned results for the US state of Georgia, not the country. Let me search more specifically.
            </Paragraph>
            <Action>
                Searched the web for “Tbilisi pharmacy benzodiazepine prescription rules Sakartvelo controlled substance”
            </Action>
            <Paragraph>
                Quick spelling check first: you almost certainly mean <Word>
                    <Bold />
                    lorazepam
                </Word> (Ativan) and <Word>
                    <Bold />
                    alprazolam
                </Word> (Xanax). Yes, all three — diazepam (Valium), lorazepam, alprazolam — are in the same class: <Word>
                    <Bold />
                    benzodiazepines
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On "easier to obtain" within the benzo class in Georgia: no such thing exists.
                </Word>
            </Paragraph>
            <Paragraph>
                Benzodiazepines are regulated as a class in Georgia under the Law on Narcotic Drugs, Psychotropic Substances
                and Precursors (List III — pharmaceutical products under special control). Since September 1, 2014, the sale
                of psychotropic medications, sleeping pills, and sedatives (except herbal-based ones) without a prescription
                has been prohibited in Georgia. Diazepam, lorazepam, alprazolam, clonazepam, bromazepam — all the same
                regulatory tier, all require a Form #3 prescription.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The trajectory is tightening, not loosening.
                </Word> PM Kobakhidze recently announced a ban on private import of psychotropic medications, specifically
                calling out benzodiazepine consumption as "unreasonable" and signaling tighter prescription/dispensing
                regulations. Pharmacy heads selling under the counter have been getting arrested — 1 to 3 years under
                Article 192 of the Criminal Code. Pharmacists are increasingly cautious; the back-channel that existed
                pre-2024 is closing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The legitimate path is genuinely the easy path here.
                </Word> A Georgian GP or psychiatrist visit runs ~50–150 GEL, no insurance gymnastics, same-day appointments
                common. AMC, GT Clinic, or any neighborhood клиника can write a Form #3 if clinically warranted. That's
                faster and cheaper than chasing pharmacy workarounds — and removes legal exposure for you and your family
                during the active TRP process, where any law-enforcement contact would be a real problem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For an actual alternative recommendation, what are you treating?
                </Word> The class of substitute differs sharply by indication:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Sleep onset/maintenance</Line>
                <Line>Generalized anxiety</Line>
                <Line>Acute panic</Line>
                <Line>Muscle spasm / pre-procedure</Line>
                <Line>Flight anxiety / one-off situational use</Line>
            </Paragraph>
            <Paragraph>
                Some indications have OTC or non-controlled prescription options in Georgia that are genuinely effective.
                Others don't have a real non-benzo equivalent and the prescription is the answer. Tell me which and I can
                give you specifics with sources.
            </Paragraph>
        </Message>
    </Chapter>
);

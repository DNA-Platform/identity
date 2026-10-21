import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-05T19:39:30.478411Z"
        >
            <Origin>019cbf83-4efd-7279-bfa5-e69a0d5ddb85</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The dem classify something as generalized anxiety disorder what is the equivalent mental health disorder
                that would be diagnosed in Turkey or Russia?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T19:39:44.560646Z"
        >
            <Origin>019cbf83-4efe-75ce-9203-219e197fea60</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Both Turkey and Russia use the <Word>
                    <Bold />
                    ICD-10
                </Word> (International Classification of Diseases, 10th Edition) published by the World Health Organization,
                rather than the American DSM-5 system. The US DSM-5 is what typically uses the term "Generalized Anxiety
                Disorder."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The equivalent diagnosis under ICD-10 is:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    F41.1 — Generalized Anxiety Disorder
                </Word>
            </Paragraph>
            <Paragraph>
                The name is actually identical — GAD exists in ICD-10 as well. However, there are some meaningful
                differences in how it's defined and diagnosed:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        DSM-5 (US)
                    </Word> requires 6 months of excessive worry about multiple topics, with 3+ associated symptoms
                    (restlessness, fatigue, concentration problems, irritability, muscle tension, sleep disturbance).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ICD-10 (Turkey/Russia)
                    </Word> requires anxiety that is generalized and persistent but is somewhat <Word>
                        <Emphasis />
                        less prescriptive
                    </Word> about the symptom count — it emphasizes free-floating anxiety, autonomic symptoms (trembling,
                    sweating, palpitations), and apprehension. The 6-month duration is noted but treated more flexibly in
                    practice.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical notes:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Turkey
                    </Word> follows ICD-10 in official/government medical contexts, though psychiatrists trained with
                    Western influences may think in DSM terms. A diagnosis on a Turkish medical document would be coded
                    <Word>
                        <Bold />
                        F41.1
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Russia
                    </Word> strictly uses ICD-10 in clinical and legal/administrative contexts. Russian psychiatry has
                    historically had its own diagnostic traditions, but for official purposes F41.1 is the standard
                    equivalent.
                </Line>
            </Paragraph>
            <Paragraph>
                If you're dealing with a specific document, insurance, or bureaucratic context — such as getting a
                prescription recognized or a medical record translated — the <Word>
                    <Bold />
                    F41.1 code
                </Word> is the universal anchor that will be understood in both countries.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T19:40:01.493602Z"
        >
            <Origin>019cbf83-c9be-7cfd-8248-f835665556c2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Write for me, the Russian phrase for generalized anxiety disorder</Paragraph>
        </Message>
        <Message
            at="2026-03-05T19:40:04.955655Z"
        >
            <Origin>019cbf83-c9be-726b-9322-547c2f861520</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Генерализованное тревожное расстройство
                </Word>
            </Paragraph>
            <Paragraph>
                Transliteration: <Word>
                    <Emphasis />
                    Generalizovannoye trevozhnoye rasstroystvo
                </Word>
            </Paragraph>
            <Paragraph>
                The key word for everyday communication is <Word>
                    <Bold />
                    тревожное расстройство
                </Word> (anxiety disorder), but the full clinical term above is what you'd see on a medical document or
                prescription.
            </Paragraph>
        </Message>
    </Chapter>
);

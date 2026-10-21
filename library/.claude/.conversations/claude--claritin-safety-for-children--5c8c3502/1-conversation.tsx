import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-14T18:09:34.379780Z"
        >
            <Origin>019d8d2f-e33d-725d-af0c-7d87e6ffbbe0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there concern with giving kids claritin? Childhood allergies are real and managed in a similar way?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-14T18:09:41.124560Z"
        >
            <Origin>019d8d2f-e33d-72b3-86d2-b2803d0e50e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claritin (loratadine) is generally considered quite safe for children. It's approved for kids as young as 2
                years old, is non-drowsy, and has a well-established safety profile over decades of use. Pediatric dosing is
                weight/age-based — typically 5mg for ages 2–5 and 10mg for 6 and up.
            </Paragraph>
            <Paragraph>
                Childhood allergies are absolutely real and managed essentially the same way as adult allergies:
                antihistamines (Claritin, Zyrtec, Allegra), nasal corticosteroids (Flonase), and in more persistent cases,
                allergy testing and immunotherapy.
            </Paragraph>
            <Paragraph>
                The main practical cautions are just standard pediatric ones: confirm the child's age/weight falls within
                the dosing range, avoid combination products (some "children's" formulations add decongestants like
                pseudoephedrine that have a narrower safety window in kids), and check with a pediatrician if the child is
                under 2 or has kidney/liver issues.
            </Paragraph>
            <Paragraph>Nothing alarming about it as a drug class for kids.</Paragraph>
        </Message>
    </Chapter>
);

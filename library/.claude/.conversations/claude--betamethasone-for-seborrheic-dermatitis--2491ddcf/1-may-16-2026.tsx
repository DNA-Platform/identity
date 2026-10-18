import { Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Title>[[ 16 May 2026 ]]</Title>
        <Message
            at="2026-05-16T14:48:11.635861Z"
        >
            <Origin>019e3142-403c-7b3b-8bcc-4b022e9f1902</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is betametazone - might it help with seborehic dermatitis?</Paragraph>
        </Message>
        <Message
            at="2026-05-16T14:48:28.507723Z"
        >
            <Origin>019e3142-403c-7f70-bb14-9e742254b317</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Betamethasone is a potent topical corticosteroid (synthetic glucocorticoid), sold in creams, lotions,
                ointments, and scalp solutions — often in combinations like betamethasone + clotrimazole + gentamicin
                (Triderm) or betamethasone + salicylic acid (Diprosalic).
            </Paragraph>
            <Paragraph>
                For seborrheic dermatitis: yes, it works, but it's not first-line. The underlying driver of SD is <Word>
                    <Emphasis />
                    Malassezia
                </Word> yeast, so the standard approach is an antifungal — ketoconazole 2% cream/shampoo or ciclopirox —
                sometimes paired with a short course of topical steroid to knock down inflammation during a flare.
                Betamethasone is on the strong end of the potency scale, so dermatologists usually reserve it for thick,
                stubborn plaques on the scalp or body, and prefer milder steroids (hydrocortisone 1%, desonide) for the
                face, where SD most often shows up.
            </Paragraph>
            <Paragraph>
                The reason not to just use betamethasone alone long-term: potent steroids on facial skin cause thinning,
                visible capillaries, perioral dermatitis, and rebound flares when you stop. The usual pattern is antifungal
                as maintenance, betamethasone for ≤2 weeks at a time during bad flares, then taper.
            </Paragraph>
        </Message>
    </Chapter>
);

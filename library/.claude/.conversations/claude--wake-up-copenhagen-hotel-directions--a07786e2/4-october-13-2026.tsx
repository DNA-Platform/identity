import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Title>[[ 13 October 2026 ]]</Title>
        <Message
            at="2026-10-13T09:26:36.898666Z"
        >
            <Origin>01a13495-a2fa-725c-9e4f-0cc8db965a9c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What do I but into bolt as location of the conference</Paragraph>
        </Message>
        <Message
            at="2026-10-13T09:26:39.533265Z"
        >
            <Origin>01a13495-a2fa-75a0-8cb8-8af6016e77c1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Type this as your destination:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    HC Ørsted Institute, Universitetsparken 5, København Ø
                </Word>
            </Paragraph>
            <Paragraph>
                If that doesn't come up, enter <Word>
                    <Bold />
                    Universitetsparken 5, 2100 København
                </Word>.
            </Paragraph>
            <Paragraph>
                The main entrance faces Universitetsparken. If the driver drops you on Nørre Allé instead, it's just around
                the corner.
            </Paragraph>
        </Message>
    </Chapter>
);

import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Title>[[ 17 June 2026 ]]</Title>
        <Message
            at="2026-06-17T11:38:55.503841Z"
        >
            <Origin>019ed560-8528-7c35-bdbb-55c92737baf4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm going to use this chat for random topics. Sometimes it's more efficient to have a catchall chat
            </Paragraph>
        </Message>
        <Message
            at="2026-06-17T11:39:00.692132Z"
        >
            <Origin>019ed560-8528-781b-b7c3-2950e148ff47</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Sounds good, Doug. A catchall works fine on my end — fire away with whatever comes up, and we can switch
                gears between topics as needed. What's first?
            </Paragraph>
        </Message>
    </Chapter>
);

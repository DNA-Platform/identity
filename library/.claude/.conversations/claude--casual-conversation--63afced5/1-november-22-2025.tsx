import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 November 2025](2025-11-22)</Date>
        </Dated>
        <Title>[[ 22 November 2025 ]]</Title>
        <Message
            at="2025-11-22T12:29:37.853251Z"
        >
            <Origin>019aab8a-9699-71e4-abfc-52ab3a949f27</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, поговори со мной немного</Paragraph>
        </Message>
        <Message
            at="2025-11-22T12:29:45.522094Z"
        >
            <Origin>019aab8a-9699-71e4-abfc-52ac1a682fc0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Даг! Конечно, с удовольствием пообщаюсь. Как у тебя дела? Чем занимаешься сегодня?
            </Paragraph>
        </Message>
    </Chapter>
);

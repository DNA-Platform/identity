import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 March 2026](2026-03-28)</Date>
        </Dated>
        <Title>[[ 28 March 2026 ]]</Title>
        <Message
            at="2026-03-28T17:56:02.311397Z"
        >
            <Origin>019d3596-aa00-7b85-b435-751b6e841c04</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                напиши Ханне милое сообщение: ПРивет, Ханна! рада получить от тебя обратную связь. я с удовольствием отвечу
                тебе в понедельник
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:56:15.662380Z"
        >
            <Origin>019d3596-aa00-7ae8-bfb4-55beb6307973</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>По-русски понятно, вот английский для Файерр:</Paragraph>
            <Paragraph>Hi Hannah!</Paragraph>
            <Paragraph>So glad to hear from you! I'll be happy to get back to you on Monday.</Paragraph>
            <Paragraph>Ana 😊</Paragraph>
        </Message>
    </Chapter>
);

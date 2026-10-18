import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Title>[[ 14 April 2026 ]]</Title>
        <Message
            at="2026-04-14T08:00:04.927919Z"
        >
            <Origin>019d8b01-2cd4-7c41-86c0-c9fb9cef8f46</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, помоги мне написать Ханне сообщение: Ханна, привет! Высылаю тебе карту на проверку - пусть это будет
                первая ревизия. я добавила черные контуры к каждому маршруту индивидуально. так что теперь они отлично
                различаются в местах пересечений. я добавила небольшую темно-желтую тень под 4-5 названий, которые плохо
                читалсь на фоне желтых штатов.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-14T08:00:24.912782Z"
        >
            <Origin>019d8b01-2cd4-7001-8427-fd8e5c4e94d8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hi Hannah!</Paragraph>
            <Paragraph>I'm sending you the map for your first revision — please take a look!</Paragraph>
            <Paragraph>A few things I've updated since we last spoke:</Paragraph>
            <Paragraph>
                I've added individual black outlines to each route, so they are now clearly distinguishable from each other
                even where they cross or run close together.
            </Paragraph>
            <Paragraph>
                I also added a small dark yellow shadow behind 4–5 city labels that were hard to read against the yellow
                state backgrounds.
            </Paragraph>
            <Paragraph>Looking forward to your feedback!</Paragraph>
            <Paragraph>Ana 😊</Paragraph>
        </Message>
    </Chapter>
);

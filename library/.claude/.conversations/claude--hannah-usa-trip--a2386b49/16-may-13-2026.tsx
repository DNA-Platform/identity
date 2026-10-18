import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Title>[[ 13 May 2026 ]]</Title>
        <Message
            at="2026-05-13T06:26:35.757810Z"
        >
            <Origin>019e2004-00a5-7f04-8e3f-545def5f7058</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот что мне написала Ханна: upon first glance there are still many changes required.I am not loving the
                directional arrows added either i was thinking they would be throughout the map and would be incorporated
                into the route lines.the circles for the non stop icons are now the colour of the state they are in - we
                should attribute these to a route - let me know which ones they are and I will look back and provide routes
                they belong to.Also there are areas that when i examined further are not quite the proper roads or paths i
                took. Ex. Nampes should geographically be on the coast and it is not. and caddilac ranch is actually along
                the route i took.I will review thoroughly and let you know of changes required.thanks.
            </Paragraph>
            <Paragraph>переведи</Paragraph>
        </Message>
        <Message
            at="2026-05-13T06:26:57.451807Z"
        >
            <Origin>019e2004-00a5-7048-804f-c9e5795fbb84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Перевод:
                </Word>
            </Paragraph>
            <Paragraph>
                С первого взгляда всё ещё требуется много изменений. Мне также не нравятся добавленные стрелки направления —
                я думала, что они будут по всей карте и будут вписаны в сами линии маршрутов.
            </Paragraph>
            <Paragraph>
                Кружки для иконок без остановки теперь окрашены в цвет штата, в котором они находятся — нам следует
                привязать их к маршруту. Дай мне знать, какие это иконки, и я перегляжу и укажу, к каким маршрутам они
                принадлежат.
            </Paragraph>
            <Paragraph>
                Также есть места, которые при более внимательном изучении оказались не совсем теми дорогами или путями,
                которыми я ехала. Например, Naples должен быть географически на побережье, а он не там. И Cadillac Ranch на
                самом деле находится вдоль маршрута, которым я ехала.
            </Paragraph>
            <Paragraph>Я тщательно всё пересмотрю и дам знать о необходимых изменениях.</Paragraph>
            <Paragraph>Спасибо.</Paragraph>
            <Paragraph>
                Ана, по иконкам без остановки — это те города которые Ханна посещала но не ночевала: Cadillac Ranch, Mexican
                Hat, Essex, Sunshine Skyway, Cameron, Venice Beach, Palm Springs. Нужно привязать каждую к маршруту и
                покрасить кружок в соответствующий цвет.
            </Paragraph>
        </Message>
    </Chapter>
);

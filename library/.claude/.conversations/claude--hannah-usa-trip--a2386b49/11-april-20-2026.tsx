import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Title>[[ 20 April 2026 ]]</Title>
        <Message
            at="2026-04-20T12:29:43.645311Z"
        >
            <Origin>019daade-321e-75d2-a53f-9084f7a71fd1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, переведи: hi Ana. I like where its going however. a couple things right off upon first glance.I really
                am not loving how we are covering the routes with the icons. I need to sit with this for a few days and
                print and digest it.I think we can solve most of them with a call out to make it clear thats where it it
                without covering fully. also there are some city locations where the road does not run through it. can you
                take another look? like wofford heights is just a point with no route thru it.I will get back to you later
                in the week with some notes. thanks.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-20T12:30:15.180733Z"
        >
            <Origin>019daade-321e-7cd6-a8f3-47bdc5944af6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Перевод:
                </Word>
            </Paragraph>
            <Paragraph>
                Привет, Ана. Мне нравится, как это развивается. Однако пара вещей бросилась в глаза с первого взгляда. Мне
                совсем не нравится, что маршруты перекрываются иконками. Мне нужно несколько дней, чтобы всё обдумать —
                распечатать и разобраться. Думаю, большинство проблем можно решить с помощью выносок — чтобы было понятно,
                где именно находится место, без полного перекрытия маршрута. Также есть несколько мест, где дорога не
                проходит через город. Можешь ещё раз посмотреть? Например, Wofford Heights — это просто точка, и маршрут
                через неё не проходит. Вернусь к тебе позже на этой неделе с заметками. Спасибо.
            </Paragraph>
            <Paragraph>
                Ана, по Wofford Heights — это точка <Word>
                    <Bold />
                    голубого маршрута 2022
                </Word>, координаты из Excel: 35.71°N, 118.46°W. Это в горах Сьерра-Невада в Калифорнии. Возможно, линия
                голубого маршрута не проведена через эту точку — нужно проверить в Illustrator.
            </Paragraph>
        </Message>
    </Chapter>
);

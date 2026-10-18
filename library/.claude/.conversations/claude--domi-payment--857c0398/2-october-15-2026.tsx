import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Title>[[ 15 October 2026 ]]</Title>
        <Message
            at="2026-10-15T08:53:10.531439Z"
        >
            <Origin>a273fe0e-401c-420a-9b23-7df3f7b06965</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Отлчино! Продолжаем работу переведи мне ее сообщения: &#91;22:37, 10/14/2026&#93; Domi: Hey Ana! &#91;22:37,
                10/14/2026&#93; Domi: How are you doing? &#91;22:37, 10/14/2026&#93; Domi: I see you follow me on IG 😊🙌
                thanks for that &#91;22:38, 10/14/2026&#93; Domi: Im sorry you havent heard from me since. The work for the
                guide has been so crazy. &#91;22:38, 10/14/2026&#93; Domi: Im finally working in the new area!! &#91;22:49,
                10/14/2026&#93; Domi: Do you have time to help me create a draft map the next weeks?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-15T08:53:20.698790Z"
        >
            <Origin>92cec1d8-ac32-4678-a562-e350a3248deb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Конечно! Вот перевод сообщений Доминик:</Paragraph>
            <Paragraph>
                <Quoted />
                &#91;22:37&#93; Привет, Ана! &#91;22:37&#93; Как у тебя дела? &#91;22:37&#93; Вижу, ты подписана на меня в
                Инстаграме 😊🙌 спасибо за это &#91;22:38&#93; Прости, что от меня так долго не было вестей. Работа над
                гайдом была просто сумасшедшей. &#91;22:38&#93; Я наконец-то работаю над новым регионом!! &#91;22:49&#93; У
                тебя будет время помочь мне с черновиком карты в ближайшие недели?
            </Paragraph>
            <Paragraph>
                То есть она возвращается с новым проектом: расширение на следующий регион, и спрашивает о твоей доступности
                на ближайшие недели для черновой версии карты.
            </Paragraph>
            <Paragraph>
                Кстати, стоит помнить: в июле вы договорились финализировать оплату ($120), она написала "I will calculate
                the rest of the payment today", но подтверждения оплаты в той переписке не было. Если долг так и не был
                закрыт, начало нового проекта - естественный момент мягко это уточнить. Хочешь, помогу составить ответ?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-15T08:53:48.512952Z"
        >
            <Origin>7e23ed05-1ae2-4595-9014-b8ee63f9d432</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                давай ответим, что привет, рада слышать, Инстарграм ее смотрю с удовольствием! Скажи, что я готова к работе!
            </Paragraph>
        </Message>
        <Message
            at="2026-10-15T08:53:56.561697Z"
        >
            <Origin>a2ec6ba5-8fd0-4e4e-9ec7-99bf58d883f5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот черновик ответа:</Paragraph>
            <CodeBox>
                {`Hi Domi!

So happy to hear from you! I follow your Instagram with great pleasure - it's wonderful to see the Guide living its life out there 🤩

And yes, I'm ready to work! Just send me the briefing whenever you're ready, and let's create a beautiful new map together.

Ana 😊`}
            </CodeBox>
            <Paragraph>Обратный перевод:</Paragraph>
            <Paragraph>
                Привет, Доми! Так рада тебя слышать! Я смотрю твой Инстаграм с большим удовольствием - здорово видеть, как
                Гайд живёт своей жизнью 🤩 И да, я готова к работе! Просто пришли мне бриф, когда будешь готова, и давай
                создадим вместе новую красивую карту.
            </Paragraph>
            <Paragraph>
                Про незакрытые $120 я по твоей просьбе ничего не добавлял. Если захочешь поднять эту тему позже (например,
                когда она пришлёт бриф), скажи - вплету аккуратно.
            </Paragraph>
        </Message>
    </Chapter>
);

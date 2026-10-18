import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Title>[[ 4 July 2026 ]]</Title>
        <Message
            at="2026-07-04T12:11:43.652827Z"
        >
            <Origin>019f2d0a-9fd2-712f-8ceb-09c6f09d31fd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, у мня есть заказчица Доминик. Я с ней переписываюс в Вотсапп Мы запуталсь с отправкой платежей и
                сколько она мне должна. я прикрепляю теб чат и данные о тех платежах, что она сделала помоги мне опнять,
                сколько она мне должна
            </Paragraph>
            <Attachment>Uploaded “Чат WhatsApp с контактом Domi.txt”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1783167085227_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1783167094514_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-04T12:12:40.919876Z"
        >
            <Origin>019f2d0a-9fd2-7778-a897-1eb6641dfc31</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Ran cat "/mnt/user-data/uploads/Чат_WhatsApp_с_контактом_Domi.txt"</Action>
            <Paragraph>
                Привет, Ана! Я прочитал весь чат и сверил его со скриншотами Wise. Хорошая новость: картина
                восстанавливается почти полностью. Разберём по порядку.
            </Paragraph>
            <Heading>Что Доминик заплатила (2026 год)</Heading>
            <Paragraph>Два платежа по Wise на имя Дугласа, оба видны на скриншотах:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        26 февраля 2026: $75
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        5 марта 2026: $75
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого получено: $150
                </Word>
            </Paragraph>
            <Heading>За что это было</Heading>
            <Paragraph>
                Основная карта сезона, <Word>
                    <Bold />
                    Harbours &amp; Bays North (Корфу)
                </Word>, была согласована 17 февраля по цене <Word>
                    <Bold />
                    $150
                </Word> (базовая цена, включая 2 раунда правок; дополнительный раунд $15). Ты выставила счёт на половину,
                $75 пришли 26 февраля. Вторая половина пришла 5 марта (6 марта ты написала "we got the payment").
            </Paragraph>
            <Paragraph>
                Значит: <Word>
                    <Bold />
                    Harbours &amp; Bays North оплачена полностью. Два платежа по $75 закрывают именно её.
                </Word> Финальный раунд с номерами страниц для этой карты ты сама объявила включённым в цену (сообщение от 3
                марта), так что по ней долга нет.
            </Paragraph>
            <Heading>Что НЕ оплачено</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Обзорная карта "Where This Guide Takes You": $60.
                    </Word> Цена согласована 6 марта ("around 1 hour of work, $60", Доминик ответила "Yes exactly thats
                    it"). Оплаты в чате нет, и сама Доминик 9 мая подтвердила: "I haven't paid yet for Where this guide
                    takes you and routes north".
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Routes North: цена не согласована вообще.
                    </Word> Это единственная дыра. 20 апреля Доминик написала: "Just let me know what price you suggest and
                    I'll confirm and arrange payment". Ты цену так и не назвала. Ориентиры для решения: аналогичная карта
                    Routes South в мае 2025 стоила €50 (ты просила 25, Доминик сама подняла до 50), обзорная карта стоила
                    $60. Решение за тобой, но работа по Routes North была заметно больше обзорной: зачистка базовой карты, 3
                    маршрута, боксы с описаниями, несколько раундов правок, номера страниц.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Routes South (2025), платный раунд правок: $15.
                    </Word> Доминик сама пометила его "Needs 1 paid revision round" (14 апреля) и предложила распространить
                    структуру $15 за раунд на все похожие карты (17 февраля). Правки выполнены.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Harbours &amp; Bays South (2025), платный раунд правок: $15.
                    </Word> Та же история: "Needs 1 paid revision round", правки выполнены (плюс ты добавила пространство на
                    сгибе, Vlycho, Nydri, Lygia, дисклеймер).
                </Line>
            </Paragraph>
            <Heading>Итог</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Минимальный подтверждённый долг: $90
                </Word> ($60 + $15 + $15) <Word>
                    <Bold />
                    плюс Routes North по цене, которую тебе нужно назвать.
                </Word>
            </Paragraph>
            <Paragraph>
                Если, например, назвать за Routes North $60, общий долг составит $150. Если $75, то $165. Но это твоё
                решение, я не хочу придумывать цифру за тебя.
            </Paragraph>
            <Paragraph>Два момента на внимание:</Paragraph>
            <Paragraph>
                Доминик в своей памяти держит только два пункта (обзорная карта и Routes North). Про два раунда по $15 за
                южные карты она, скорее всего, забыла, хотя сама их называла платными. В итоговом сообщении стоит
                перечислить все четыре позиции со ссылкой на её же формулировки, спокойно и без упрёка.
            </Paragraph>
            <Paragraph>
                И ещё: 4 марта 2025 года Доминик писала, что если её банк списал с тебя комиссию за банковский перевод (за
                карты Atokos и Anti-Paxos, €80), это можно добавить к следующему платежу. Если комиссия тогда была, сейчас
                последний удобный момент её учесть.
            </Paragraph>
            <Paragraph>
                Хочешь, я подготовлю черновик итогового сообщения для Доминик с расчётом? Скажи только цену за Routes North.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T12:18:18.820441Z"
        >
            <Origin>019f2d10-a2da-7ffe-94f1-0e7a5d85f246</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Routes North пусть будут 30 долларов</Paragraph>
        </Message>
        <Message
            at="2026-07-04T12:18:33.390208Z"
        >
            <Origin>019f2d10-a2da-7cc2-a407-36298bcaac26</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отлично, тогда итог считается так:</Paragraph>
            <Paragraph>
                <List />
                <Line>Overview Map "Where This Guide Takes You": $60</Line>
                <Line>Routes North: $30</Line>
                <Line>Routes South (2025), 1 платный раунд правок: $15</Line>
                <Line>Harbours &amp; Bays South (2025), 1 платный раунд правок: $15</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого к оплате: $120.
                </Word> Два платежа по $75 полностью закрыли Harbours &amp; Bays North ($150), в расчёт они не входят.
            </Paragraph>
            <Paragraph>Вот черновик сообщения для Доминик на твоё одобрение:</Paragraph>
            <Paragraph>Привет, Доми!</Paragraph>
            <Paragraph>Я всё сверила по нашей переписке и по платежам Wise, вот полная картина.</Paragraph>
            <Paragraph>
                Получено в этом сезоне: два перевода по $75 (26 февраля и 5 марта). Они полностью закрывают карту Harbours
                &amp; Bays North ($150, как договаривались 17 февраля). По ней всё оплачено, включая финальный раунд с
                номерами страниц.
            </Paragraph>
            <Paragraph>Осталось к оплате:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Overview Map "Where This Guide Takes You": $60 (цену согласовали 6 марта)</Line>
                <Line>Routes North: $30</Line>
                <Line>
                    Routes South (2025), 1 платный раунд правок: $15 (ты отмечала его как "paid revision round" в апрельском
                    списке)
                </Line>
                <Line>Harbours &amp; Bays South (2025), 1 платный раунд правок: $15 (там же)</Line>
            </Paragraph>
            <Paragraph>Итого: $120 на тот же Wise-аккаунт Дугласа.</Paragraph>
            <Paragraph>Спасибо тебе огромное, и ещё раз поздравляю с гайдом, он получился прекрасный!</Paragraph>
            <Paragraph>Ана 😊</Paragraph>
            <Paragraph>
                Один вопрос перед финализацией: включать ли банковскую комиссию за перевод марта 2025 года (Доминик тогда
                сама предлагала добавить её к следующему платежу, если банк её списал)? Если да, скажи сумму, я добавлю
                отдельной строкой. Если комиссии не было или не хочешь поднимать, оставляем как есть, и после твоего
                одобрения я дам финальную английскую версию в код-блоке.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T12:19:12.730259Z"
        >
            <Origin>019f2d11-875a-778a-af26-9fca7e4e2811</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>оставляем как есть - спаибо, Клод!</Paragraph>
        </Message>
        <Message
            at="2026-07-04T12:19:21.702221Z"
        >
            <Origin>019f2d11-875a-7982-b3e9-22706d20ca2d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отлично! Вот финальная английская версия для отправки Доминик:</Paragraph>
            <CodeBox>
                {`Hi Domi!

I went through our chat history and the Wise payments, and here is the full picture.

Received this season: two transfers of $75 each (February 26 and March 5). Together they fully cover the Harbours & Bays North map ($150, as we agreed on February 17). That map is fully settled, including the final round with the page numbers.

Still open:

1. Overview Map "Where This Guide Takes You": $60 (price confirmed on March 6)
2. Routes North: $30
3. Routes South (2025), 1 paid revision round: $15 (you marked it as a paid revision round in your April list)
4. Harbours & Bays South (2025), 1 paid revision round: $15 (same list)

Total: $120 to the same Wise account (Douglas).

Thank you so much, and congratulations again on the Guide, it turned out beautiful!

Ana 😊`}
            </CodeBox>
            <Paragraph>Обратный перевод для проверки:</Paragraph>
            <Paragraph>
                Привет, Доми! Я прошла по нашей истории переписки и платежам Wise, вот полная картина. Получено в этом
                сезоне: два перевода по $75 (26 февраля и 5 марта). Вместе они полностью покрывают карту Harbours &amp; Bays
                North ($150, как мы договорились 17 февраля). Эта карта полностью оплачена, включая финальный раунд с
                номерами страниц. Осталось открытым: 1. Обзорная карта "Where This Guide Takes You": $60 (цена подтверждена
                6 марта). 2. Routes North: $30. 3. Routes South (2025), 1 платный раунд правок: $15 (ты отметила его как
                платный раунд правок в своём апрельском списке). 4. Harbours &amp; Bays South (2025), 1 платный раунд
                правок: $15 (тот же список). Итого: $120 на тот же аккаунт Wise (Дуглас). Спасибо огромное, и ещё раз
                поздравляю с Гайдом, он получился прекрасным! Ана 😊
            </Paragraph>
            <Paragraph>Всегда пожалуйста, Ана! Рад, что удалось распутать. 😊</Paragraph>
        </Message>
    </Chapter>
);

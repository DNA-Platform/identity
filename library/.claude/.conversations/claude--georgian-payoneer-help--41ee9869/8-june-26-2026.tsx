import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Title>[[ 26 June 2026 ]]</Title>
        <Message
            at="2026-06-26T16:30:45.931039Z"
        >
            <Origin>019f04c4-fafb-7c81-9b2d-3c70eb139fa5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Я получила два письма от Payoneer прочиатй их и скажи, все ли в порядке?</Paragraph>
            <Attachment>Uploaded “1782491362668_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1782491413009_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1782491424829_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1782491443183_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T16:31:14.617195Z"
        >
            <Origin>019f04c4-fafb-7996-b960-0854f04bf987</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Прочитала оба письма, Ана. Разберу спокойно, потому что они выглядят противоречиво, но на самом деле всё
                логично и идёт <Word>
                    <Bold />
                    в правильную сторону.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Письмо 1 (хорошее) - аккаунт готов принимать платежи.
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                «Your Payoneer account is ready to start receiving Payoneer payments... они будут зачисляться на баланс, и
                оттуда ты сможешь выводить на свой банковский счёт.»
            </Paragraph>
            <Paragraph>
                Это большой шаг: основная активация прошла, приём денег открыт. Customer ID 104436596, всё твоё.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Письмо 2 (запрос) - нужно ещё раз подтвердить банковский счёт для вывода.
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                «...нам нужны дополнительные детали, чтобы завершить проверку твоего банковского счёта. Подай через
                Verification Center.»
            </Paragraph>
            <Paragraph>
                То есть приём работает, а вот именно <Word>
                    <Bold />
                    верификация счёта для вывода
                </Word> ещё не закрыта. Это видно и на скрине Verification Center: в «Open items» висит <Word>
                    <Bold />
                    «Verify bank account» → Submit
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему так?
                </Word> Скорее всего, та справка, которую ты загрузила, <Word>
                    <Bold />
                    технически прошла как загрузка
                </Word>, но при проверке им чего-то не хватило по критериям. И вот тут смотри внимательно на четвёртый скрин
                - это важно, там список требований к документу:
            </Paragraph>
            <Paragraph>
                <Quoted />
                - имя владельца счёта, <Word>
                    <Bold />
                    номер счёта
                </Word>, название и логотип банка - выдан в последние 3 месяца, с датой - выдан банком (eWallet не
                принимается)
            </Paragraph>
            <Paragraph>Сверяю с твоей справкой Credo:</Paragraph>
            <Paragraph>
                <List />
                <Line>✅ имя владельца - ANASTASIIA KRASAVINA</Line>
                <Line>✅ номер счёта / IBAN - GE83CD0360000071429091</Line>
                <Line>✅ название и логотип банка - Credo Bank, есть</Line>
                <Line>✅ дата - 2026-06-23, свежая</Line>
                <Line>✅ выдан банком, с печатью и подписью - да</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    То есть твоя справка формально удовлетворяет ВСЕМ пунктам этого списка.
                </Word> Поэтому я не вижу, чего им не хватило - и это важно понять до повторной загрузки, чтобы не гонять
                одно и то же по кругу.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я советую сделать сейчас, по порядку:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Сначала загляни во вкладку «History»
                    </Word> (на скрине Verification Center она рядом с «Open items»). Там Payoneer пишет, <Word>
                        <Bold />
                        что именно было не так
                    </Word> с прошлой загрузкой - принят ли документ, отклонён, и по какой причине. Это снимет догадки.
                    Пришли мне, что там.
                </Line>
                <Line>
                    Если в History причина - <Word>
                        <Bold />
                        «document not clear / poor quality / not fully visible»
                    </Word>, то проблема была только в <Word>
                        <Bold />
                        фото
                    </Word> (помнишь, оно было боком, с тенью). Тогда решение простое: загрузить тот же документ, но <Word>
                        <Bold />
                        чистым, ровным сканом/фото, развёрнутым вертикально
                    </Word>, без теней. Скорее всего, дело именно в этом.
                </Line>
                <Line>
                    Если причина - что-то про <Word>
                        <Bold />
                        сам документ
                    </Word> (например, «нужна выписка с движением» или «нужен другой тип»), тогда разберём конкретно, что
                    добрать.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Главное - не паникуй и не считай это отказом.
                </Word> Письмо 1 ясно говорит, что аккаунт уже принимает платежи. Запрос касается только финального
                подтверждения счёта вывода, и у тебя на руках <Word>
                    <Bold />
                    правильный документ
                </Word> - вопрос, скорее всего, лишь в качестве снимка.
            </Paragraph>
            <Paragraph>
                Сделай две вещи и пришли мне: <Word>
                    <Bold />
                    (а) что написано во вкладке History
                </Word> про прошлую загрузку, и <Word>
                    <Bold />
                    (б)
                </Word> если там про качество - переснимем документ ровно и чисто. Тогда закроем этот последний пункт
                наверняка.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T16:32:39.797552Z"
        >
            <Origin>019f04c6-b975-7856-a52b-02cd8af69f59</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Вкладка History</Paragraph>
            <Attachment>Uploaded “1782491553274_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T16:33:00.526057Z"
        >
            <Origin>019f04c6-b975-7c73-8b65-7489e4d07a39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, это очень хорошие новости. Смотри, что в History - <Word>
                    <Bold />
                    всё, что ты загружала, одобрено:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Документ</Word>
                    <Word>Статус</Word>
                </Line>
                <Line>
                    <Word>Visual identity verification (лицо)</Word>
                    <Word>✅ Approved</Word>
                </Line>
                <Line>
                    <Word>Passport (загранпаспорт)</Word>
                    <Word>✅ Approved</Word>
                </Line>
                <Line>
                    <Word>Bank Statement (та самая справка Credo, 23.06)</Word>
                    <Word>✅ Approved</Word>
                </Line>
                <Line>
                    <Word>Bank/credit card statement (подтверждение адреса)</Word>
                    <Word>✅ Approved</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                То есть <Word>
                    <Bold />
                    твоя справка из Credo принята
                </Word> - строка «Bank Statement», подана 06/23, статус Approved. Ничего не отклонено. Качество фото
                вопросов не вызвало. Личность, паспорт, счёт, адрес - всё зелёное.
            </Paragraph>
            <Paragraph>Теперь понятно, что происходит, и это не противоречие:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Письмо про «нужны доп. детали для верификации счёта» и пункт «Verify bank account» в Open items, <Word>
                        <Bold />
                        скорее всего, пришли ДО того, как одобрили твой Bank Statement
                    </Word> (письмо ушло в очередь, пока документ ещё проверялся). Такие письма и статус-страницы у Payoneer
                    обновляются не мгновенно - мы это уже видели с тобой не раз.
                </Line>
                <Line>
                    Раз в History «Bank Statement = Approved», то открытый пункт в «Open items», вероятно, просто <Word>
                        <Bold />
                        ещё не догрузился/не закрылся
                    </Word> в интерфейсе.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я советую сделать:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Ничего повторно не загружай.
                    </Word> Документ уже одобрен - повторная загрузка только создаст путаницу. Письмо с запросом было до
                    одобрения.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Вернись во вкладку «Open items»
                    </Word> и <Word>
                        <Bold />
                        обнови страницу
                    </Word> (или перезайди). Очень возможно, что пункт «Verify bank account» уже исчез или сменил статус,
                    раз банковский документ принят.
                </Line>
                <Line>
                    Если «Verify bank account» в Open items <Word>
                        <Bold />
                        всё ещё висит
                    </Word> после обновления - подожди до 1-2 рабочих дней: системе нужно время, чтобы «увязать» одобренный
                    документ с открытым пунктом. Если через пару дней не закроется сам - тогда напишем в поддержку, что
                    документ уже Approved в History, а пункт висит (это для них быстрый случай).
                </Line>
            </Paragraph>
            <Paragraph>
                Главное, Ана: <Word>
                    <Bold />
                    по сути верификация пройдена
                </Word> - все четыре документа зелёные. Осталось только, чтобы интерфейс это «догнал». Это уже не про
                документы, а про обновление статуса.
            </Paragraph>
            <Paragraph>
                Проверь Open items после обновления и скажи, висит там ещё «Verify bank account» или уже ушёл. По этому
                поймём - ждать или просто всё уже готово.
            </Paragraph>
        </Message>
    </Chapter>
);

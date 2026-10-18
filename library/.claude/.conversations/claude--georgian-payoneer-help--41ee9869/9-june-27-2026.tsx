import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 June 2026](2026-06-27)</Date>
        </Dated>
        <Title>[[ 27 June 2026 ]]</Title>
        <Message
            at="2026-06-27T14:30:50.787223Z"
        >
            <Origin>019f097d-87ec-77fe-a756-a3653acb41d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, Payoneer просит все равно эту штуку как ты думаешь, вот эта моя справка подходит? и для чего
                Пейониру это вообще нужно?
            </Paragraph>
            <Attachment>Uploaded “1782570621923_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo_2026-06-27_18-25-01.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-27T14:31:28.498199Z"
        >
            <Origin>019f097d-87ec-7b62-8c03-5002dd874a88</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, Ана, твоя справка подходит - давай я ещё раз сверю её с примером самого Payoneer (первый скрин), пункт
                за пунктом, чтобы ты была спокойна.
            </Paragraph>
            <Paragraph>Payoneer на образце обводит ровно четыре вещи, которые должны быть в документе:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Что требует Payoneer (по образцу)</Word>
                    <Word>Есть ли в твоей справке Credo</Word>
                </Line>
                <Line>
                    <Word>Bank logo (логотип банка)</Word>
                    <Word>✅ Логотип Credo Bank вверху</Word>
                </Line>
                <Line>
                    <Word>Bank name (название банка)</Word>
                    <Word>✅ CREDO BANK / JSC Credo Bank</Word>
                </Line>
                <Line>
                    <Word>Account owner name and address (имя владельца и адрес)</Word>
                    <Word>✅ ANASTASIIA KRASAVINA + адрес SAIRMIS 83, BINA 3A</Word>
                </Line>
                <Line>
                    <Word>Statement date в пределах 3 месяцев</Word>
                    <Word>✅ 2026-06-23, свежая</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Плюс то, что просит экран загрузки: <Word>
                    <Bold />
                    номер счёта
                </Word> - ✅ IBAN GE83CD0360000071429091 виден по всем трём валютам. И «выдан банком, не eWallet» - ✅ это
                официальная справка Credo с печатью и подписью.
            </Paragraph>
            <Paragraph>
                То есть твоя справка <Word>
                    <Bold />
                    закрывает все пункты образца.
                </Word> Она подходит. Грузи именно её.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Зачем это вообще Payoneer (по сути твоего вопроса):
                </Word>
            </Paragraph>
            <Paragraph>
                Это финальная проверка <Word>
                    <Bold />
                    счёта для вывода
                </Word> - они хотят документом убедиться, что счёт, на который ты будешь выводить деньги (GE83...9091),
                действительно существует и принадлежит именно тебе. Причина прозаичная и ко всем применимая: защита от
                мошенничества и от вывода на чужой счёт. У тебя она усилена тем самым нормальным для ИП расхождением «имя
                физлица vs название бизнеса DNA», поэтому им важно увидеть на банковской бумаге, что владелец счёта -
                ANASTASIIA KRASAVINA. Твоя справка ровно это и доказывает.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важный момент - почему просят «всё равно»:
                </Word>
            </Paragraph>
            <Paragraph>
                Помнишь, в History у тебя «Bank Statement» уже стоит <Word>
                    <Bold />
                    Approved
                </Word>? А этот запрос, скорее всего, <Word>
                    <Bold />
                    отдельный под-пункт
                </Word> того же требования, который не закрылся автоматически, либо письмо/пункт сформировались до того, как
                одобрили загрузку. Это рассинхрон, а не новый отказ.
            </Paragraph>
            <Paragraph>Поэтому делай так:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Загрузи ту же справку
                    </Word> через этот «Verify bank account → Submit». Документ правильный, бояться нечего, повторная
                    загрузка корректного документа не навредит.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Только сделай снимок получше
                    </Word>, чем на втором скрине: сейчас он тёмный, с тенью и бликом печати. Идеально - <Word>
                        <Bold />
                        ровный светлый скан или фото при дневном свете, без теней
                    </Word>, весь лист в кадре, текст чёткий. Плохое качество - единственное, что реально может вызвать
                    отказ, когда сам документ верный.
                </Line>
            </Paragraph>
            <Paragraph>
                Коротко: справка правильная и полная, нужна Payoneer для подтверждения счёта вывода. Перезалей её <Word>
                    <Bold />
                    чистым, светлым снимком
                </Word> - и этот последний пункт закроется.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-27T14:35:06.606413Z"
        >
            <Origin>019f0981-6df8-781c-9290-4f0f9aece729</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я хочу вывести деньги с Adobe Stock на Payoneer прочитай документы Адоби стока. как прикрепить
                Пейонир? что именно, связаннное с Пейонир я смогу ввести как адрес вывода?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-27T14:36:26.688404Z"
        >
            <Origin>019f0981-6df8-7b7e-b294-5f8a7c9b3bf0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Дай проверю по документам Adobe Stock, поддерживает ли он вообще Payoneer и как это подключается - не хочу
                гадать, тут важна точность.
            </Paragraph>
            <Action>
                Searched the web for “Adobe Stock contributor payout methods Payoneer PayPal Skrill how to set up”
            </Action>
            <Paragraph>
                Проверила официальные страницы Adobe Stock, Ана. Хорошая новость: Payoneer там поддерживается. Но есть один
                важный нюанс именно для твоей ситуации, и я обязана его назвать честно, потому что он может всё решить.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что подтверждено официально:
                </Word>
            </Paragraph>
            <Paragraph>
                Adobe Stock платит контрибьюторам через трёх провайдеров на выбор: PayPal, Payoneer или Skrill, и нужно
                выбрать одного провайдера для получения средств; доступность зависит от региона. Выплаты считаются в
                долларах (1 кредит = 1 USD), приходят обычно за 7-10 рабочих дней.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    А теперь честный флаг - и он про тебя как гражданку РФ.
                </Word>
            </Paragraph>
            <Paragraph>
                На странице помощи Adobe есть прямое предупреждение, связанное с Россией и «текущими событиями»: PayPal и
                Payoneer прекратили обслуживание, Skrill продолжает работать для существующих аккаунтов, но новые аккаунты
                Skrill в России создать нельзя.
            </Paragraph>
            <Paragraph>
                Это значит вот что: <Word>
                    <Bold />
                    сможешь ли ты выбрать Payoneer, зависит от того, на какую страну зарегистрирован твой контрибьюторский аккаунт Adobe Stock
                </Word> (и какая налоговая форма/резидентство у тебя там на файле):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Если твой аккаунт Adobe оформлен на <Word>
                        <Bold />
                        Грузию
                    </Word> - Payoneer, скорее всего, будет доступен в списке.
                </Line>
                <Line>
                    Если на <Word>
                        <Bold />
                        Россию
                    </Word> - Payoneer может вообще не появиться в выпадающем списке, и останется только Skrill.
                </Line>
            </Paragraph>
            <Paragraph>
                Я не могу из чата увидеть, на какую страну у тебя настроен Adobe. Поэтому <Word>
                    <Bold />
                    первый шаг - просто проверить, какие провайдеры реально предлагает тебе Adobe.
                </Word> Это и есть самый надёжный ответ на твой вопрос, эмпирически.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Где это настраивается:
                </Word>
            </Paragraph>
            <Paragraph>
                Зайди в контрибьюторский портал: <Word>
                    <Bold />
                    contributor.stock.adobe.com → Account → Payout info
                </Word> (раздел платёжной информации). Либо: на дашборде нажми <Word>
                    <Bold />
                    Available earnings
                </Word> (вверху справа) → кнопка <Word>
                    <Bold />
                    Payout
                </Word>. Там нужно указать аккаунт-получатель (PayPal, Skrill или Payoneer - не все опции доступны во всех
                странах).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что именно вводить для Payoneer:
                </Word>
            </Paragraph>
            <Paragraph>
                Когда выберешь провайдера, Adobe попросит выбрать провайдера (PayPal, Payoneer или Skrill) и ввести нужный
                email или идентификатор аккаунта. Для Payoneer это, как правило, либо <Word>
                    <Bold />
                    подключение через авторизацию
                </Word> (тебя перекинет на вход в Payoneer, и ты подтвердишь связь), либо <Word>
                    <Bold />
                    email, привязанный к твоему Payoneer
                </Word> - а это у тебя <Word>
                    <Bold />
                    ana@atlas.love
                </Word> (тот, что в аккаунте Payoneer). Точную механику (авторизация или просто email) я подтвердить не могу
                - покажи мне экран, когда дойдёшь, и подскажу по факту.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Три условия, без которых кнопка вывода не активна
                </Word> (чтобы не упереться):
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Прошло <Word>
                        <Bold />
                        45 дней
                    </Word> с первой продажи.
                </Line>
                <Line>
                    Накоплено <Word>
                        <Bold />
                        минимум $25
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Заполнена налоговая форма
                    </Word> (для тебя как не-резидента США это W-8BEN). Без неё Adobe удерживает максимальную ставку 30%.
                    Это важно - проверь, что форма на файле, иначе потеряешь треть.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что делать прямо сейчас:
                </Word>
            </Paragraph>
            <Paragraph>
                Открой <Word>
                    <Bold />
                    Account → Payout info
                </Word> в портале Adobe и просто посмотри, <Word>
                    <Bold />
                    есть ли Payoneer в списке провайдеров
                </Word>. Это сразу ответит на главный вопрос:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Payoneer есть → выбирай его, подключай (email ana@atlas.love или авторизация), и покажи мне экран -
                    доведу до конца.
                </Line>
                <Line>
                    Payoneer нет, только Skrill → значит аккаунт Adobe завязан на Россию, и тогда разберём, можно ли сменить
                    страну/резидентство в Adobe на Грузию (раз у тебя теперь грузинский IE и адрес), либо думать про Skrill.
                </Line>
            </Paragraph>
            <Paragraph>
                Сделай этот один шаг и пришли скрин списка провайдеров - дальше пойдём точно, без гадания.
            </Paragraph>
        </Message>
    </Chapter>
);

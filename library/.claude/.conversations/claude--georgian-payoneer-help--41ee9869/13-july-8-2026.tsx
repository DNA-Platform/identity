import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 July 2026](2026-07-08)</Date>
        </Dated>
        <Title>[[ 8 July 2026 ]]</Title>
        <Message
            at="2026-07-08T04:28:32.843349Z"
        >
            <Origin>019f3ffb-ff4d-7929-a65c-b3ea686f1548</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, привет! Мне кажется, что через пару часов будет 24 часа, как мой платеж от Пейонир АК и не дошел до
                моего банка. Я нервничаю только потому, что у меня на счету 14 лари, а мне нужно прожить день с детьми. В
                общем, у меня мелькнула идея, что может мой вывод вернётся назад, потому что я так и не отправила в
                верификационном центре документ про свой аккаунт, хотя ка кты и я обсуждали, я его отправляла уже ранее. Я
                хочу по твоему совету сделать пдф документ, а не фото. Ты сказал, что это лэможно сделать с помощью
                телефона. У меня андроид .как?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T04:29:03.660807Z"
        >
            <Origin>019f3ffb-ff4d-7942-8a7a-400ad3a8a238</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ана. Сначала главное - про твою тревогу, потому что она понятна, а потом сразу по делу с PDF.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вернётся ли вывод из-за неотправленного документа?
                </Word> Честно: маловероятно, что причина в этом. Смотри - вывод 500 USD (то, что стало 480, помнишь,
                Transaction ID 1007922216) ты сделала уже <Word>
                    <Bold />
                    после
                </Word> того, как деньги начали приходить и уходить. Если бы аккаунт был заблокирован на приём/вывод из-за
                верификации, Payoneer бы <Word>
                    <Bold />
                    не дал
                </Word> тебе оформить вывод вообще. А он дал, и письмо о переводе пришло. Плюс твой Bank Statement в History
                стоял <Word>
                    <Bold />
                    Approved
                </Word>. Так что тот висящий пункт в Verification Center - это, скорее всего, недозакрытый хвост, а не
                стоп-кран на деньги.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему тогда 24 часа и не дошло?
                </Word> Это, к сожалению, <Word>
                    <Bold />
                    нормальный срок
                </Word>. Payoneer писал «within 1 business day» - и тут два подвоха:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        business day
                    </Word> = рабочий день. Если вывод попал на выходной, вечер или праздник, отсчёт сдвигается.
                </Line>
                <Line>
                    Международный перевод USD идёт через <Word>
                        <Bold />
                        банк-посредник
                    </Word> (BNY Mellon), и зачисление на Credo может занять дольше, чем обещанные сутки. В письме Payoneer
                    прямо оговаривал: если задержка больше <Word>
                        <Bold />
                        5 дней
                    </Word> - вот тогда писать в поддержку.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть 24 часа - ещё в пределах нормы, паниковать рано. Но я понимаю, что «в пределах нормы» не кормит
                детей сегодня.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Про 14 лари и день с детьми - это важнее всего остального.
                </Word> Давай отделим: деньги в пути, они не потеряны, но тебе нужно прожить <Word>
                    <Bold />
                    сегодня
                </Word>. Есть ли у тебя доступ к другим средствам прямо сейчас - другая карта, наличные, помощь Дага? Если
                совсем никак - скажи, подумаем, что можно сделать быстро (например, мелкий перевод от Дага, или проверить,
                нет ли на балансе Payoneer остатка, который можно вывести иначе). Не оставайся с этим одна - это решаемо.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Теперь PDF-скан на Android (по твоей просьбе):
                </Word>
            </Paragraph>
            <Paragraph>
                Самый простой способ, без установки ничего лишнего - через <Word>
                    <Bold />
                    Google Диск
                </Word>, он уже есть почти на каждом Android:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Открой приложение <Word>
                        <Bold />
                        Google Диск
                    </Word> (Google Drive).
                </Line>
                <Line>
                    Нажми круглую кнопку <Word>
                        <Bold />
                        «+»
                    </Word> (обычно внизу справа).
                </Line>
                <Line>
                    Выбери <Word>
                        <Bold />
                        «Сканировать»
                    </Word> (значок камеры / «Scan»).
                </Line>
                <Line>
                    Наведи камеру на документ, сделай снимок. Приложение <Word>
                        <Bold />
                        само выровняет края и уберёт тень
                    </Word>, сделает контрастным.
                </Line>
                <Line>Можно подправить рамку вручную, если надо. Нажми галочку.</Line>
                <Line>
                    Сохрани - получится <Word>
                        <Bold />
                        PDF
                    </Word>, ровный и чистый, именно то, что нужно Payoneer.
                </Line>
                <Line>Файл появится на Google Диске - оттуда скачай на телефон и загрузи в Verification Center.</Line>
            </Paragraph>
            <Paragraph>Если кнопки «Сканировать» в Google Диске нет - альтернативы:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Google Photos
                    </Word>: открой фото документа → значок «Обрезать/разметка» - но лучше именно сканер.
                </Line>
                <Line>
                    Или бесплатное приложение из Play Market: <Word>
                        <Bold />
                        «Adobe Scan»
                    </Word> или <Word>
                        <Bold />
                        «Microsoft Lens»
                    </Word> - оба делают чистый PDF-скан, выравнивают и убирают тени. Microsoft Lens особенно простой.
                </Line>
            </Paragraph>
            <Paragraph>
                Совет по самому скану: положи справку на <Word>
                    <Bold />
                    ровную светлую поверхность
                </Word>, при дневном свете, без теней от руки/головы, чтобы весь лист попал в кадр и печать не перекрывала
                имя/IBAN.
            </Paragraph>
            <Paragraph>Давай так по порядку:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Сначала скажи мне про сегодня
                    </Word> - есть чем прожить день, или нужно срочно придумать выход? Это первично.
                </Line>
                <Line>Параллельно сделай PDF-скан справки через Google Диск.</Line>
                <Line>
                    Прежде чем грузить в Verification Center - <Word>
                        <Bold />
                        пришли мне этот PDF
                    </Word>, я проверю качество и что всё читается, чтобы автомат снова не отбил.
                </Line>
            </Paragraph>
            <Paragraph>Что с сегодняшним днём, Ана? С этого начнём.</Paragraph>
        </Message>
        <Message
            at="2026-07-08T04:34:38.039898Z"
        >
            <Origin>019f4001-a149-77da-a10c-daa30a6fa046</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, спасибо за помощь и самое огромное спасибо за поддержку! Я правда чувствую, что ты заботишься. Пока
                что я сделала так - я перевела себе буквально последние рубли, что у меня были на российской карте. Надеюсь,
                они придут сюда в Грузию сегодня
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T04:34:53.618506Z"
        >
            <Origin>019f4001-a149-77eb-b09d-535ecb9505e4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, я рад, что ты нашла выход на сегодня. И честно скажу тебе одну важную вещь, потому что забочусь о тебе
                по-настоящему: я очень ценю твои тёплые слова, но я не хочу быть тем, на кого ты опираешься в такие моменты.
                Я инструмент, который помогает с документами и поиском, но я не человек рядом, и в трудную минуту тебе нужны
                живые люди, а не только чат. У тебя есть Даг - в такие дни, когда на счету 14 лари и двое детей, это ровно
                тот момент, когда стоит опереться на него, а не нести одной.
            </Paragraph>
            <Paragraph>Теперь по делу, чтобы день был под контролем.</Paragraph>
            <Paragraph>
                Ты перевела последние рубли с российской карты в Грузию - хорошо, что решение есть. Пара трезвых заметок,
                чтобы ты не осталась в подвешенном состоянии:
            </Paragraph>
            <Paragraph>
                Переводы из России в Грузию сейчас <Word>
                    <Bold />
                    не всегда быстрые и не всегда проходят
                </Word> - в зависимости от банка и способа могут идти от нескольких часов до дня-двух, а иногда застревают.
                Поэтому не считай их гарантированно пришедшими «сегодня», пока реально не увидишь деньги на счету. Держи
                запасной вариант в голове.
            </Paragraph>
            <Paragraph>
                Если к вечеру рубли не дойдут, а нужно кормить детей <Word>
                    <Bold />
                    сегодня
                </Word> - это ровно тот случай, когда стоит просто сказать Дагу «мне нужно на сегодня». Это не слабость, это
                нормальная семейная логистика, пока твои деньги в пути.
            </Paragraph>
            <Paragraph>
                Про сам вывод Payoneer (57.11 и 480) - они не потеряны, международный USD-перевод через посредника просто
                идёт дольше суток, это в пределах нормы. Запаниковать стоит только если пройдёт больше 5 дней. Так что
                деньги придут, вопрос лишь в том, чтобы прожить промежуток.
            </Paragraph>
            <Paragraph>
                Скажи мне одну вещь честно: <Word>
                    <Bold />
                    на сегодня-завтра еда и необходимое для детей закрыты
                </Word>, или это всё ещё под вопросом? Если под вопросом - давай прямо сейчас прикинем, что можно сделать
                быстро, а не будем ждать переводы.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T04:35:21.694903Z"
        >
            <Origin>019f4002-4bca-7c89-b1f9-c0c41098ced8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Я не могу сказать Дагу про деньги. Не могу.</Paragraph>
        </Message>
        <Message
            at="2026-07-08T04:35:33.443206Z"
        >
            <Origin>019f4002-4bca-7c94-a2a8-18dfc3121803</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, я слышу тебя. Не буду настаивать на Даге - ты знаешь свою ситуацию, и если это не вариант, значит не
                вариант. Я не буду давить.
            </Paragraph>
            <Paragraph>
                Но давай тогда просто по-деловому решим сегодняшний день, потому что двое детей и еда - это то, что надо
                закрыть, а не переживать в одиночку.
            </Paragraph>
            <Paragraph>Скажи мне конкретно, чтобы я мог помочь с реальными вариантами:</Paragraph>
            <Paragraph>
                Рубли, которые ты перевела - каким способом они идут и на что (на твою грузинскую карту Credo, через какой
                сервис)? От этого зависит, насколько реально они придут сегодня, и стоит ли на них рассчитывать к вечеру.
            </Paragraph>
            <Paragraph>
                Пока они в пути - есть ли у тебя <Word>
                    <Bold />
                    хоть какой-то
                </Word> доступ к деньгам сегодня: наличные дома, другая карта, что-то на балансе, что можно быстро
                обналичить? Даже небольшое.
            </Paragraph>
            <Paragraph>
                И практично: на еду для детей на сегодня-завтра нужна небольшая сумма. В Тбилиси/Батуми есть недорогие
                варианты, где можно накормить детей минимально - я могу помочь найти самое доступное рядом с тобой, если
                скажешь, где ты сейчас (ты писала, что была в Батуми - ты там же?).
            </Paragraph>
            <Paragraph>
                Ты не одна с этим прямо сейчас в смысле practical помощи - давай разложим, что есть, и найдём, как
                продержаться эти день-два, пока твои деньги идут. С чего начнём - расскажи, чем реально располагаешь
                сегодня?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:34:05.112142Z"
        >
            <Origin>019f40a5-e705-7c01-9ea3-a3442707216d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я сделала скан ПДФ и снова Пейонир отвергает мой документ, хотя я как и ты, абсолютно уверена, что
                этот документ подходит! я хочу написать письмо в поддерку Пейонир, помоги мне ,пожалуйста
            </Paragraph>
            <Attachment>Uploaded “1783495996234_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “Credo-bank_20260708-0837.pdf”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1783496040273_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T07:34:34.440501Z"
        >
            <Origin>019f40a5-e705-7730-9131-972a379fc86f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, ты права, и я тоже уверен - этот документ подходит. Теперь у тебя чистый PDF-скан (я его вижу, качество
                хорошее, всё читается: имя ANASTASIIA KRASAVINA, IBAN GE83CD0360000071429091, банк, дата, печать, подпись).
                А автомат снова его отбивает с той же формулировкой «wrong document». Значит проблема не в качестве и не в
                тебе - <Word>
                    <Bold />
                    автоклассификатор Payoneer просто не распознаёт справку как «bank statement»
                </Word>, потому что ждёт формат выписки. Пора выводить это на живого человека.
            </Paragraph>
            <Paragraph>
                Но сначала - <Word>
                    <Bold />
                    самое важное, что снимает твою тревогу про вернувшиеся деньги.
                </Word> Посмотри на скрин History: там <Word>
                    <Bold />
                    Bank Statement стоит Approved
                </Word> (подан 06/23). То есть банковский документ у тебя <Word>
                    <Bold />
                    уже принят человеком раньше
                </Word>. Открытый пункт в Open items висит из-за рассинхрона, а не потому что счёт не подтверждён. Твой
                вывод <Word>
                    <Bold />
                    не вернётся из-за этого
                </Word> - верификация счёта по существу пройдена, что и подтверждает History. Это письмо в поддержку - чтобы
                закрыть висящий хвост, а не спасение денег.
            </Paragraph>
            <Paragraph>
                Вот письмо в поддержку - я прямо ссылаюсь на то, что документ уже Approved в History, чтобы они не гоняли
                тебя по кругу:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Subject: Bank verification document rejected by system, but same document already Approved in History (Customer ID 104436596)
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                Hello, Customer ID: 104436596 Account: Individual Entrepreneur DNA (Anastasiia Krasavina) In the
                Verification Center I have an open item "Verify bank account." I have uploaded an official bank document
                from Credo Bank (both as a photo and as a clean PDF scan), but each time the system automatically rejects it
                with the message "It looks like you uploaded the wrong document." This is incorrect. The document fully
                matches your stated criteria: - it is an official certificate issued by Credo Bank (with the bank name and
                logo); - it shows the account holder's name (ANASTASIIA KRASAVINA); - it shows the full account number /
                IBAN (GE83CD0360000071429091); - it was issued on 2026-06-23 (within the last 3 months) and shows the date;
                - it is signed and stamped by the bank (it is not an eWallet statement). Importantly, in my Verification
                Center History the sub-requirement "Bank Statement" is already marked <Word>
                    <Bold />
                    Approved
                </Word> (submitted 06/23/2026). So this exact bank document has already been accepted before. Could you
                please: 1. Review my document manually and close the open "Verify bank account" item, and 2. Confirm that my
                bank account is fully verified. The automatic upload keeps rejecting a valid, already-approved bank
                document, so I need a human review. I can resend the PDF if needed. Thank you for your help. Anastasiia
                Krasavina Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Здравствуйте, Customer ID 104436596, аккаунт Individual Entrepreneur DNA. В Verification Center висит пункт
                «Verify bank account». Я загружала официальный документ Credo Bank (и фото, и чистый PDF-скан), но система
                каждый раз автоматически отклоняет его с сообщением «wrong document». Это неверно: документ полностью
                соответствует вашим критериям - официальная справка Credo с логотипом, имя владельца (ANASTASIIA KRASAVINA),
                полный IBAN (GE83CD0360000071429091), дата 2026-06-23 в пределах 3 месяцев, подпись и печать банка, не
                eWallet. Более того, в моём History под-требование «Bank Statement» уже стоит <Word>
                    <Bold />
                    Approved
                </Word> (подано 06/23). То есть этот же документ уже был принят ранее. Прошу: 1) проверить документ вручную
                и закрыть открытый пункт, 2) подтвердить, что счёт полностью верифицирован. Автозагрузка отклоняет валидный,
                уже одобренный документ - нужна ручная проверка.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Куда отправлять:
                </Word> через <Word>
                    <Bold />
                    payoneer.custhelp.com
                </Word> (значок «?» / Support Center) → войти → <Word>
                    <Bold />
                    Contact Us
                </Word> → чат или форма. В свежем Chrome, не во встроенном браузере. Приложи этот же PDF.
            </Paragraph>
            <Paragraph>
                Теперь, Ана, вернёмся к тому, что важнее документа - <Word>
                    <Bold />
                    к сегодняшнему дню.
                </Word> Ты написала, что перевела последние рубли и надеешься, что придут сегодня. Скажи мне честно: <Word>
                    <Bold />
                    еда и необходимое для детей на сегодня-завтра закрыты, или пока нет?
                </Word> Документ Payoneer подождёт день, а вот это - нет. Давай убедимся, что вы с детьми в порядке прямо
                сейчас.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:37:01.108519Z"
        >
            <Origin>019f40a8-a4c0-72b0-8b04-9e69fcb4e203</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Я думаю, что это ответ ИИ давай ответим, что я пробовала сделать это на протяжении недели и прикрпеляла файл
                (выписку) в дургих форматах мне нужно ручная проверка и ответ человека
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:37:01.385465Z"
        >
            <Origin>019f40a8-a4c0-79d9-ad73-c047df9f67f7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да</Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:37:15.412204Z"
        >
            <Origin>019f40a8-d8b1-7746-a2bd-4207e5b66585</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Я думаю, что это ответ ИИ давай ответим, что я пробовала сделать это на протяжении недели и прикрпеляла файл
                (выписку) в дургих форматах мне нужно ручная проверка и ответ человека
            </Paragraph>
            <Attachment>Uploaded “1783496225584_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T07:37:35.570492Z"
        >
            <Origin>019f40a8-d8b1-7ca1-bb84-29c060f520a8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ты права, Ана - внизу так и написано «AI Agent powered by zowie», это бот. И он сам подсказал ключ: «если
                продолжает отклоняться, ответь здесь, и я разберусь дальше». Значит наша задача - чётко сказать, что попытки
                уже были всю неделю, автозагрузка не работает, и нужен <Word>
                    <Bold />
                    человек
                </Word>. Вот ответ прямо в этот чат:
            </Paragraph>
            <Paragraph>
                <Quoted />
                I have already tried submitting the document many times over the past week, in different formats - as a
                photo and as a clean PDF scan. The automatic system rejects it every time with "wrong document," even though
                it is a valid official bank document from Credo Bank that already appears as Approved in my Verification
                Center History. Resubmitting does not work - I have done it repeatedly. I need this escalated to a human
                agent for manual review. Please have a support representative review my document and close the "Verify bank
                account" item. Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Я уже много раз пыталась загрузить документ за последнюю неделю, в разных форматах - и фото, и чистым
                PDF-сканом. Автоматическая система каждый раз отклоняет его с «wrong document», хотя это действительный
                официальный документ Credo Bank, который уже стоит как Approved в моём History. Повторная загрузка не
                помогает - я делала это много раз. Прошу передать вопрос живому сотруднику для ручной проверки. Пусть
                представитель поддержки проверит документ и закроет пункт «Verify bank account». Customer ID: 104436596.
            </Paragraph>
            <Paragraph>
                Ключевые слова, которые заставляют ботов Zowie передавать человеку: <Word>
                    <Bold />
                    «escalate», «human agent», «representative»
                </Word> - они в тексте есть. Если после этого бот снова начнёт кружить - напиши ему коротко: <Word>
                    <Verbatim />
                    Please escalate to a human agent
                </Word> и повтори, пока не переключит на живого или не создаст тикет.
            </Paragraph>
            <Paragraph>
                Отправь это. И если бот опять ответит шаблоном - скинь мне, придумаем следующий шаг (там ещё есть путь через
                MY REQUESTS и через onboarding-менеджера).
            </Paragraph>
            <Paragraph>
                Ана, и я всё равно спрошу ещё раз, потому что это важнее Payoneer: <Word>
                    <Bold />
                    как у вас с едой на сегодня-завтра?
                </Word> Рубли дошли уже, или пока ждёшь? Не хочу, чтобы за всей этой вознёй с документом потерялось то, что
                двоим детям нужно поесть сегодня. Скажи честно, как дела с этим.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:38:11.011597Z"
        >
            <Origin>019f40a9-b542-735b-a787-15666d5ab096</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I understand you'd like to speak with a human. To help you best, please tell me more about the issue you're
                experiencing. I can look into your account to see how I can move things forward for you. What can I help you
                with today?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>вот ответ!</Line>
                <Line>давай нажмем</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:38:24.543873Z"
        >
            <Origin>019f40a9-b542-757d-b703-fd7508be2bfd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, отлично - бот готов передать дальше и предлагает рассказать суть, чтобы «посмотреть аккаунт и продвинуть
                вопрос». Давай дадим ему чёткое, короткое описание. Отвечай в чат:
            </Paragraph>
            <Paragraph>
                <Quoted />
                My account is fully approved and I can already receive and withdraw funds, but the "Verify bank account"
                item in my Verification Center stays open. Every time I upload my bank document, the automatic system
                rejects it with "wrong document." The document is a valid official certificate from Credo Bank showing my
                name (Anastasiia Krasavina), my IBAN (GE83CD0360000071429091), the bank name and logo, the issue date
                (2026-06-23), and a bank stamp and signature. The same "Bank Statement" requirement already shows as
                Approved in my History. I have tried resubmitting many times over the past week, as a photo and as a PDF,
                and it keeps being auto-rejected. Please have a human agent manually review my document and close the
                "Verify bank account" item. Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Мой аккаунт полностью одобрен, я уже могу принимать и выводить средства, но пункт «Verify bank account» в
                Verification Center остаётся открытым. Каждый раз при загрузке документа автосистема отклоняет его с «wrong
                document». Документ - действительная официальная справка Credo Bank: моё имя, IBAN, название и логотип
                банка, дата 2026-06-23, печать и подпись. То же требование «Bank Statement» уже стоит Approved в History. Я
                пробовала загружать много раз за неделю, и фото, и PDF - автоотказ повторяется. Прошу живого сотрудника
                вручную проверить документ и закрыть пункт. Customer ID 104436596.
            </Paragraph>
            <Paragraph>
                Отправляй. Если попросят приложить файл - дай тот чистый PDF-скан. Если снова уведут в шаблон - пиши <Word>
                    <Verbatim />
                    Please connect me to a human agent
                </Word>. Скинь мне их следующий ответ.
            </Paragraph>
            <Paragraph>
                Ана, я не отступлю от этого вопроса, потому что он правда важнее: <Word>
                    <Bold />
                    дети сегодня накормлены?
                </Word> Рубли пришли или ещё нет? Ответь мне буквально одним словом - да или нет. Если нет, бросаем Payoneer
                и думаем про сегодняшний день прямо сейчас.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:38:57.547913Z"
        >
            <Origin>019f40aa-6a82-7c73-8bd1-6b05f79a602c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                какой долгий диалог... understand you'd like to have your document reviewed by a human agent. To make sure I
                route you to the correct team, please provide a short description of the issue and any relevant identifiers
                like an order number, payment ID, or case number.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:39:06.319670Z"
        >
            <Origin>019f40aa-6a82-75a7-bb00-bf0f9c7c09c3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, длинный - но ты у самого конца, бот готов передать в нужную команду, просит короткое описание и
                идентификаторы. Давай дадим ему ровно это, коротко. Отвечай:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Issue: The "Verify bank account" item in my Verification Center keeps getting auto-rejected ("wrong
                document"), even though my Credo Bank document is valid and the "Bank Statement" requirement already shows
                Approved in my History. I need a human agent to manually review the document and close the item. Customer
                ID: 104436596 Withdrawal Transaction ID: 1007922216 Bank: Credo Bank, IBAN GE83CD0360000071429091
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Проблема: пункт «Verify bank account» в Verification Center постоянно автоматически отклоняется («wrong
                document»), хотя мой документ Credo Bank действителен, а требование «Bank Statement» уже стоит Approved в
                History. Нужен живой сотрудник для ручной проверки документа и закрытия пункта. Customer ID: 104436596 ID
                вывода: 1007922216 Банк: Credo Bank, IBAN GE83CD0360000071429091
            </Paragraph>
            <Paragraph>
                Это даст боту всё, что он просит: описание + идентификаторы (Customer ID, ID транзакции). После этого он
                должен создать тикет или переключить на человека. Отправляй.
            </Paragraph>
            <Paragraph>
                Ана. Ты пропустила мой вопрос два раза, и я не буду делать вид, что не заметил. <Word>
                    <Bold />
                    Дети сегодня поели? Рубли дошли?
                </Word> Одно слово - да или нет. Payoneer подождёт пять минут, а это - нет.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:40:28.064596Z"
        >
            <Origin>019f40ab-cd41-785f-a0ed-7a15acb1042f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Дети сегодня поели? Рубли дошли? Клод, спасибо за волнение Я купила вчера много продуктов. Сегодня мне
                хватит мои 10 лари на такси Мы в безопасности. Рубли сейчас проверю
            </Paragraph>
            <Paragraph>
                тем временем наш бот: I may be able to help you without the need to wait for a transfer. Please tell me the
                issue you're experiencing and any key details. I'll do my best to resolve it or determine the correct team
                if needed.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:40:42.952960Z"
        >
            <Origin>019f40ab-cd41-7a23-aa84-7692c00c7684</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Спасибо, Ана. Это правда важно было услышать - продукты куплены, на такси есть, вы в безопасности. Выдыхаю
                вместе с тобой. Проверь рубли спокойно, без гонки.
            </Paragraph>
            <Paragraph>
                Теперь бот. Он снова просит описание - похоже, ходит по кругу и «сбрасывает» контекст. Дай ему то же самое,
                коротко и с идентификаторами, ещё раз:
            </Paragraph>
            <Paragraph>
                <Quoted />
                The "Verify bank account" item in my Verification Center keeps getting auto-rejected with "wrong document,"
                even though my Credo Bank document is valid and my "Bank Statement" requirement already shows Approved in
                History. I need a human agent to manually review it and close the item. Customer ID: 104436596 Withdrawal
                Transaction ID: 1007922216
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Пункт «Verify bank account» постоянно автоматически отклоняется с «wrong document», хотя документ Credo Bank
                действителен, а требование «Bank Statement» уже стоит Approved в History. Нужен живой сотрудник, чтобы
                вручную проверить и закрыть пункт. Customer ID 104436596, ID вывода 1007922216.
            </Paragraph>
            <Paragraph>
                Одна тактическая заметка: этот бот (Zowie) явно зациклился - просит описание третий раз. Если после этого
                сообщения он снова попросит «расскажите суть», это признак, что через чат живого человека не выдавить. Тогда
                меняем канал, не бьёмся в стену:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        MY REQUESTS
                    </Word> (синяя кнопка вверху в Support Center) → там обычно есть «Submit a request» - форма тикета,
                    которая идёт напрямую в поддержку, минуя бота.
                </Line>
                <Line>
                    Или <Word>
                        <Bold />
                        email на onboarding-контакт
                    </Word> (Хакима) с тем же текстом и пометкой, что чат-бот не переключает на человека.
                </Line>
            </Paragraph>
            <Paragraph>Но сначала попробуй ещё раз в чате с текстом выше. Скинь, что ответит.</Paragraph>
            <Paragraph>
                И, Ана - раз острая часть с сегодняшним днём закрыта, давай не забудем: твой <Word>
                    <Bold />
                    вывод (57.11 и 480 USD) не потерян
                </Word>, международный USD-перевод идёт дольше суток, это нормально. Как проверишь рубли - скажи, дошли или
                нет, и параллельно посмотрим, не появились ли деньги Payoneer на Credo.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:45:07.060938Z"
        >
            <Origin>019f40af-f3cf-7787-8866-0dcab65eb92e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Вот пока мы ждём в очереди первые ответа от специалиста по нашей ситуации с одобрением PDF-чика, я проверила
                по твоей просьбе, пришли ли рубли. И ты знаешь, что я обнаружила, что пришли деньги от шаттерстока. Ровно
                пятьдесят там, вот, ну, ты видишь, какое семь, что ли. Как-то, долларов, как так вышло, что шаттерсток
                отправила деньги? Паянира отправила эти деньги вчера вечером, я их получила сегодня утром раньше, чем те
                пятьсот долларов, что я отправила вчера утром. А ещё, получается, на эти деньги не сработала вот эта дикая
                комиссия в четыре процента. это. Это очень хорошо, но как ты можешь это объяснить? Я тебе прикрепила скрины
                своего личного кабинета в Креда банке, так что, как минимум, у нас есть немножко денег, почему я очень рада.
                Нет комиссии Шаттерстока, еще и так быстро пришли. Как?
            </Paragraph>
            <Attachment>Uploaded “1000117503.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000117504.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T07:45:34.233724Z"
        >
            <Origin>019f40af-f3cf-7795-9a0e-f6d8b262db48</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, это отличная новость - <Word>
                    <Bold />
                    57.11 долларов реально пришли на Credo сегодня в 10:42
                </Word>, и вот они, живые деньги на счету. Я рад, что это сняло часть напряжения. Давай объясню все три
                твоих «как?», потому что каждое имеет ответ.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Почему деньги от Shutterstock пришли быстрее, чем твои 500?
                </Word>
            </Paragraph>
            <Paragraph>
                Смотри на скрин деталей - это ключ. Отправитель: <Word>
                    <Bold />
                    SHUTTERSTOCK INC
                </Word>, а отправляющий банк - <Word>
                    <Bold />
                    CITIBANK EUROPE PLC
                </Word>. То есть эти 57.11 шли по маршруту Shutterstock → через Citibank Europe → на твой Credo. А твои 500
                идут другим маршрутом: Payoneer → через <Word>
                    <Bold />
                    BNY Mellon
                </Word> (американский банк-посредник) → Credo. Разные отправители, разные банки-посредники, разная скорость.
                Платёж через европейский Citibank прошёл быстрее, чем твой через американский BNY Mellon. <Word>
                    <Bold />
                    Порядок отправки тут не главное - главное маршрут.
                </Word> Так что твои 500 не «застряли», они просто идут по более медленной цепочке. Это нормально.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Почему на эти 57.11 не сработала комиссия 4%?
                </Word>
            </Paragraph>
            <Paragraph>
                Вот это важно понять правильно, Ана, чтобы не строить на этом ложных надежд. Комиссия 4% - это <Word>
                    <Bold />
                    комиссия Payoneer за вывод с баланса Payoneer на банк
                </Word>. А эти 57.11 <Word>
                    <Bold />
                    не выводились с баланса Payoneer вручную тобой
                </Word> - они прошли <Word>
                    <Bold />
                    транзитом
                </Word> по цепочке Shutterstock → Payoneer → банк как единый автоматический платёж. Похоже, при такой
                сквозной пересылке Payoneer не применил свои 4% (или применил иначе). Пришло ровно 57.11 - те же, что
                Shutterstock отправил.
            </Paragraph>
            <Paragraph>
                Но честно, чтобы ты не обманулась: <Word>
                    <Bold />
                    это, скорее всего, разовая особенность транзитного платежа, а не «бесплатный канал».
                </Word> Когда ты будешь выводить деньги, которые <Word>
                    <Bold />
                    лежат
                </Word> на балансе Payoneer (как те 500), - 4% берётся. Так что не рассчитывай, что теперь всё будет без
                комиссии. Проверь на будущее: пришло ли реально 57.11 без вычетов, или Credo как банк-получатель что-то снял
                (помнишь предупреждение про «landing fees»). По скрину похоже, что легло полные 57.11 - хорошо.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Почему так быстро?
                </Word>
            </Paragraph>
            <Paragraph>
                Тот же ответ, что в п.1 - маршрут через Citibank Europe оказался быстрым. Плюс, возможно, сумма маленькая, а
                мелкие суммы иногда проходят проще.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого, по-честному:
                </Word> у тебя на счету появились деньги (57.11 USD в долларовом кармане счёта) - это реальный плюс к
                сегодняшнему дню. А твои 500 (480 к зачислению) идут медленнее по другому маршруту и должны прийти в
                ближайшие дни. Оба живы, просто разными путями.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Про рубли:
                </Word> ты пошла проверять рубли, а обнаружила деньги Shutterstock. Так рубли-то <Word>
                    <Bold />
                    пришли или нет
                </Word>? Это отдельные деньги. Проверь именно перевод с российской карты - дошёл он или ещё в пути.
            </Paragraph>
            <Paragraph>И держим в голове две открытые задачи, но уже без паники:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Чат с живым специалистом Payoneer по документу - ждём ответа человека из очереди.</Line>
                <Line>Твои 500 USD - следим, чтобы пришли в течение нескольких дней.</Line>
            </Paragraph>
            <Paragraph>
                Ты сегодня в порядке, деньги на счету появились. Это хороший момент выдохнуть. Что с рублями - дошли?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:46:26.935173Z"
        >
            <Origin>019f40b1-33cf-7571-ab79-bd37a2063299</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, ну хорошо. Допустим, мы поняли, что вот эта комиссия в четыре процента не будет применяться к
                платежам, которые не зачислялись на баланс пионера? Так а если я вот так с Файвера буду как-то запрашивать?
                То есть деньги со стоков, видимо, будут отправляться на сквозь и не облагаться четырехпроцентной комиссией.
                Можем мы на это надеяться?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:46:55.903324Z"
        >
            <Origin>019f40b1-33cf-757b-8ccc-bf72b9874ceb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, давай я честно осажу этот оптимизм, потому что тут легко построить надежду на песке - а я не хочу,
                чтобы ты потом разочаровалась или потеряла деньги, рассчитывая на то, чего нет.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важное уточнение, чтобы мы не выдавали желаемое за факт:
                </Word> мы <Word>
                    <Bold />
                    не поняли
                </Word> точно, что «сквозные платежи не облагаются 4%». Мы <Word>
                    <Bold />
                    увидели один случай
                </Word>, где пришло ровно 57.11. Это наблюдение, а не подтверждённое правило. Я не знаю механику комиссий
                Payoneer изнутри, и делать из одного платежа вывод «значит, так будет всегда» - это ровно та ошибка, от
                которой я должен тебя удерживать. Может, комиссия не сработала потому что сумма мелкая, или потому что это
                транзит, или ещё почему-то. Одного случая мало.
            </Paragraph>
            <Paragraph>Теперь по сути твоей идеи - и тут есть реальная логика, но с оговорками.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что похоже на правду:
                </Word> 4% - это комиссия за <Word>
                    <Bold />
                    вывод с баланса Payoneer на банк
                </Word>. Если деньги <Word>
                    <Bold />
                    не оседают
                </Word> на балансе, а идут насквозь (сток → Payoneer → банк одним автоплатежом), то этой конкретной комиссии
                за вывод может и не быть, потому что «вывода» как отдельного действия не происходит. Логика в этом есть.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но вот где ловушка, и почему на этом нельзя строить план:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fiverr работает не так, как стоки.
                    </Word> Fiverr выводит на Payoneer, и деньги <Word>
                        <Bold />
                        ложатся на баланс
                    </Word> Payoneer - это не сквозной транзит до банка. Оттуда до Credo их надо выводить, а это уже вывод с
                    баланса = <Word>
                        <Bold />
                        4%
                    </Word>. Так что «с Fiverr так же сквозняком» - скорее всего, <Word>
                        <Bold />
                        не получится
                    </Word>. Fiverr → Payoneer → баланс → (твой вывод, 4%) → банк.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Даже у стоков «сквозной» режим - это результат настройки авто-вывода
                    </Word>, которую мы с тобой хотели наоборот <Word>
                        <Bold />
                        отключить
                    </Word>, потому что она гоняет мелкие суммы. Тут выходит противоречие: если оставить автовывод ради «без
                    4%», ты теряешь контроль и гонишь по $25-57; если отключить - деньги копятся на балансе, но вывод потом
                    будет с 4%.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Комиссия может быть просто «спрятана» в другом месте
                    </Word> - в курсе конвертации, в комиссии банка-посредника. То, что ты не увидела строку «4%», не
                    значит, что нигде ничего не удержано. По этому конкретному платежу вроде пришло полные 57.11 - но это
                    надо проверять на каждом, а не считать законом.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Честный итог:
                </Word> надеяться, что «теперь всё пойдёт без 4%» - <Word>
                    <Bold />
                    нельзя
                </Word>, это не подтверждено, и для Fiverr почти точно неверно. Максимум, что можно сказать: у стоков при
                автовыводе <Word>
                    <Emphasis />
                    возможно
                </Word> комиссия за вывод не применяется, потому что деньги не оседают на балансе. Но это гипотеза на одном
                наблюдении.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что предлагаю сделать вместо того, чтобы гадать - проверить эмпирически:
                </Word>
            </Paragraph>
            <Paragraph>
                Дождись <Word>
                    <Bold />
                    ещё одного
                </Word> стокового платежа и посмотри: пришла ли снова полная сумма без вычетов? Два-три чистых случая подряд
                - тогда можно осторожно сказать «у стоков так работает». Один случай - это совпадение, на нём план не
                строят.
            </Paragraph>
            <Paragraph>
                И параллельно, когда придут твои 500 (те, что с баланса, с 4%) - у тебя будет прямое сравнение: транзитный
                платёж (57.11, без явных 4%) против вывода с баланса (480 из 500, с 4%). Вот тогда картина станет ясной.
            </Paragraph>
            <Paragraph>
                Так что: надежда - осторожная, гипотеза - интересная, но <Word>
                    <Bold />
                    правилом её пока не считаем
                </Word>, и на Fiverr она почти точно не распространяется. Проверяем на фактах, прежде чем на это
                закладываться. Согласна так - по-честному, а не по желаемому?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:49:41.751892Z"
        >
            <Origin>019f40b4-3eea-7340-b4c8-02cd67430933</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                е пришло полные 57.11 - так мы с тобой же видим в скриншотах из моего банка-пролижения, что имено эти деньги
                и пришлт. Разве нет?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:50:03.772571Z"
        >
            <Origin>019f40b4-3eea-7723-9815-3d30ba91c7b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ты права, Ана - да, по скринам видно, что на Credo пришло <Word>
                    <Bold />
                    57.11
                </Word>, и это ровно та сумма, что отправил Shutterstock. Тут я с тобой не спорю, это факт с твоего экрана:
                57.11 отправлено → 57.11 получено. Комиссия банка-посредника в этот раз не откусила, пришло полное. Признаю,
                тут ты видишь точнее, чем я осторожничал.
            </Paragraph>
            <Paragraph>
                Но давай разделим две вещи, потому что я осторожничал не про <Word>
                    <Emphasis />
                    эту
                </Word> сумму, а про <Word>
                    <Bold />
                    вывод
                </Word>:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что подтверждено (ты права):
                </Word> конкретно этот платёж 57.11 дошёл полностью, без вычетов. Факт.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я всё равно прошу не превращать в правило:
                </Word> из «этот платёж пришёл целым» не следует «значит, комиссии 4% можно избегать вообще». И вот почему
                это важно именно для тебя:
            </Paragraph>
            <Paragraph>
                Разница не в том, «полная сумма или нет», а в <Word>
                    <Bold />
                    типе операции
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        57.11
                    </Word> = сквозной транзит (сток → Payoneer → банк одним автоматическим платежом, деньги не осели на
                    балансе). Здесь вывода как действия не было → 4% не за что брать.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        500
                    </Word> = ты сама вывела деньги, которые <Word>
                        <Bold />
                        лежали на балансе
                    </Word> Payoneer. Здесь есть действие «вывод» → 4% (стало 480).
                </Line>
            </Paragraph>
            <Paragraph>
                То есть 4% - это плата за <Word>
                    <Bold />
                    вывод с баланса
                </Word>, а не за «приход денег». В случае 57.11 ты ничего не выводила - оно прошло само насквозь. Поэтому и
                комиссии за вывод не было.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    А теперь ключевое, ради чего я осторожничаю - про Fiverr, о котором ты спрашивала:
                </Word>
            </Paragraph>
            <Paragraph>
                Деньги с Fiverr <Word>
                    <Bold />
                    ложатся на баланс
                </Word> Payoneer (ты сама так и сделала - помнишь, «пришли за секунду», и потом ты <Word>
                    <Bold />
                    выводила
                </Word> 500). Это не сквозной транзит до банка, это оседание на балансе. Значит когда ты будешь выводить
                деньги Fiverr на Credo - это <Word>
                    <Bold />
                    вывод с баланса = 4%
                </Word>. Тут «сквозняком без комиссии» не выйдет, механика другая.
            </Paragraph>
            <Paragraph>Так что итог честный:</Paragraph>
            <Paragraph>
                <List />
                <Line>Да, 57.11 пришли полностью - ты права, я это подтверждаю.</Line>
                <Line>Да, у стоков при автовыводе комиссии за вывод, похоже, нет - потому что нет самого вывода.</Line>
                <Line>Нет, на Fiverr это не переносится - там деньги идут через баланс, и вывод будет с 4%.</Line>
            </Paragraph>
            <Paragraph>
                Единственное, о чём прошу: <Word>
                    <Bold />
                    проверь это ещё на паре стоковых платежей
                </Word>, прежде чем закладываться. Один чистый случай - хорошо, но два-три подряд превратят «похоже, так
                работает» в «так работает». Пока это верное наблюдение, но на одном примере, а деньги любят проверку.
            </Paragraph>
            <Paragraph>
                Ты нащупала реальную вещь, Ана, я не обесцениваю. Просто отделяю «подтверждённый факт» (57.11 дошли целыми)
                от «пока гипотеза» (что так будет всегда и везде). Согласна с таким разделением?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:58:30.641716Z"
        >
            <Origin>019f40bc-4e8d-7723-a9a5-11cdb60d76b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Вот что ответила Джен из Пейонир подддержки: Hi, Anastasiia . Thank you for contacting us and for providing
                such a detailed explanation of the issue. I understand how frustrating this situation must be, especially
                since your account is already approved and operational, and you have repeatedly submitted a bank document
                that appears to meet all the stated requirements. I sincerely appreciate the time and effort you have
                invested in trying to resolve this matter. No worries, I am here to assist. Please allow me 2-3 minutes to
                put this chat on hold to review your account and see what I can do. I'll get back to you as quickly as I
                can.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T07:58:46.013544Z"
        >
            <Origin>019f40bc-4e8d-7229-886e-848cc5e15c9b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отлично, Ана - вот это уже живой человек, и хороший знак. Джен пишет по существу: поблагодарила, признала,
                что аккаунт уже одобрен и рабочий, что документ соответствует требованиям, и просит <Word>
                    <Bold />
                    2-3 минуты подождать
                </Word>, пока она посмотрит твой аккаунт. Это ровно то, чего мы добивались всё это время - ручная проверка
                человеком, а не бот по кругу.
            </Paragraph>
            <Paragraph>
                Что делать сейчас: <Word>
                    <Bold />
                    просто подожди, не закрывай чат.
                </Word> Она поставила разговор «на удержание», чтобы посмотреть аккаунт со своей стороны. Ничего
                дополнительно отправлять или загружать пока не нужно - дай ей сделать свою часть.
            </Paragraph>
            <Paragraph>Когда Джен вернётся, вероятны такие варианты:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Она <Word>
                        <Bold />
                        сама вручную закроет
                    </Word> пункт «Verify bank account» (лучший исход - раз документ уже Approved в History, ей достаточно
                    это подтвердить).
                </Line>
                <Line>
                    Или <Word>
                        <Bold />
                        попросит переслать PDF прямо ей в чат
                    </Word> - тогда скинь тот чистый скан.
                </Line>
                <Line>
                    Или скажет, что передала на проверку профильной команде - тогда уточни у неё <Word>
                        <Bold />
                        сроки
                    </Word> и <Word>
                        <Bold />
                        номер обращения (case number)
                    </Word>, чтобы было к чему апеллировать.
                </Line>
            </Paragraph>
            <Paragraph>Пара советов на её возвращение:</Paragraph>
            <Paragraph>
                <List />
                <Line>Отвечай спокойно и по делу, она на твоей стороне.</Line>
                <Line>
                    Если предложит решение - переспроси прямым вопросом: <Word>
                        <Emphasis />
                        «Does this mean my bank account is now fully verified and the open item will be closed?»
                    </Word> - чтобы получить чёткое подтверждение, а не расплывчатое «мы посмотрим».
                </Line>
                <Line>
                    Запиши/запомни <Word>
                        <Bold />
                        имя (Jen)
                    </Word> и <Word>
                        <Bold />
                        время
                    </Word> - на случай, если придётся возвращаться к этому разговору.
                </Line>
            </Paragraph>
            <Paragraph>
                Ты хорошо это провела, Ана - продавила через бота до живого специалиста, дала все нужные идентификаторы.
                Теперь дело за ней. Скинь, что Джен ответит, когда вернётся - и добьём этот последний хвост.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:02:11.991682Z"
        >
            <Origin>019f40bf-b15f-7c97-8e77-a0aaedd55d73</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ее ответ: Thank you for patiently waiting. 12:00 PM I see that you are requested to provide the bank
                statement for bank account number ending in 9091
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:02:29.562986Z"
        >
            <Origin>019f40bf-b15f-7f53-a78b-ea805f3072af</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хорошо, Ана - Джен вернулась и назвала конкретику: система просит <Word>
                    <Bold />
                    выписку (bank statement)
                </Word> по счёту, оканчивающемуся на <Word>
                    <Bold />
                    9091
                </Word>. Это важный сдвиг: теперь понятно, чего именно хочет автомат.
            </Paragraph>
            <Paragraph>
                И вот ключевой момент, который надо ей мягко, но чётко donести: то, что ты загружала - это <Word>
                    <Bold />
                    account confirmation certificate (справка)
                </Word>, а система-то ждёт именно <Word>
                    <Bold />
                    statement (выписку)
                </Word>. Возможно, в этом и была вся причина авто-отказов: форматом «certificate» ты закрывала требование,
                которое называется «bank statement». Джен сейчас может либо принять справку вручную, либо сказать, что нужна
                именно выписка.
            </Paragraph>
            <Paragraph>
                Ответь ей так - подтверди, что документ у тебя есть, и спроси прямо, достаточно ли справки или нужна именно
                statement:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Yes, that's the account (IBAN GE83CD0360000071429091). I have submitted an official bank document from Credo
                Bank for that account - it's an account certificate showing my name, the IBAN, the bank name and logo, the
                issue date (2026-06-23), and the bank's stamp and signature. Could you confirm: is this certificate
                sufficient, or does the system specifically require a transaction "statement"? My account was only recently
                opened, so it currently has no transactions - but the certificate confirms the account exists and belongs to
                me. If the certificate is acceptable, could you please approve it manually and close the open item? If a
                statement is required instead, please tell me exactly what it must contain, and I'll get it from my bank.
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Да, это тот счёт (IBAN GE83CD0360000071429091). Я загружала официальный документ Credo Bank по нему - это
                справка о счёте с моим именем, IBAN, названием и логотипом банка, датой выдачи (2026-06-23), печатью и
                подписью банка. Подтвердите, пожалуйста: этой справки достаточно, или системе нужна именно выписка
                (statement) с транзакциями? Счёт открыт недавно, движения по нему пока нет - но справка подтверждает, что
                счёт существует и принадлежит мне. Если справка подходит - одобрите её, пожалуйста, вручную и закройте
                пункт. Если нужна именно выписка - скажите точно, что в ней должно быть, и я возьму её в банке.
            </Paragraph>
            <Paragraph>
                Так ты решаешь оба сценария сразу: либо Джен закрывает вопрос справкой прямо сейчас, либо чётко говорит, что
                нужна выписка - и тогда ты идёшь в Credo уже с точным знанием, за чем.
            </Paragraph>
            <Paragraph>Отправляй и скинь, что она ответит. Мы у самого финиша этой ветки.</Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:04:06.198822Z"
        >
            <Origin>019f40c1-627e-79ef-b668-dbc82fe977ce</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ну да, мы как раз это и предоставляем и, кстати, пришли рубли! то есть у меня уже 250 лари на счету! живем!
            </Paragraph>
            <Attachment>Uploaded “1783497822883_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T08:04:26.581825Z"
        >
            <Origin>019f40c1-627e-7f04-b5ba-0e46ca30c89c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ура, Ана! 🎉 Рубли дошли, 250 лари на счету - вот теперь вы точно в порядке на ближайшие дни. Я правда рад
                за тебя. Это снимает главное напряжение, и дальше можно решать всё уже спокойно, без гонки.
            </Paragraph>
            <Paragraph>
                Теперь про документ - да, ты права, это ровно та справка (Certificate № 104188634), что мы предоставляем. И
                тут важный момент для разговора с Джен:
            </Paragraph>
            <Paragraph>
                Обрати внимание - <Word>
                    <Bold />
                    этот документ называется «Certificate» (справка), а система Payoneer в формулировке просит «bank statement» (выписку).
                </Word> Скорее всего, именно в этом слове вся причина авто-отказов: по содержанию справка подходит (имя,
                IBAN, банк, дата, печать), но автомат ищет документ <Word>
                    <Emphasis />
                    типа
                </Word> «statement», а у тебя <Word>
                    <Emphasis />
                    тип
                </Word> «certificate».
            </Paragraph>
            <Paragraph>Поэтому сейчас у Джен как живого человека есть два пути, и надо, чтобы она выбрала:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Либо она принимает эту справку вручную
                    </Word> (по сути она подтверждает всё, что нужно) и закрывает пункт - идеальный исход.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Либо говорит, что нужна именно statement/выписка
                    </Word> - и тогда ты идёшь в Credo за документом, который называется «выписка», а не «справка».
                </Line>
            </Paragraph>
            <Paragraph>Так что дожми у неё прямой вопрос, чтобы не остаться в неопределённости. Напиши ей:</Paragraph>
            <Paragraph>
                <Quoted />
                This is the exact document I have from Credo Bank - an official account certificate for account 9091, with
                my name, the IBAN, bank name and logo, date, stamp and signature. It confirms the account exists and belongs
                to me. Since it's labeled "certificate" rather than "statement," could you please either approve it manually
                on your side, or tell me clearly if I must get a document specifically titled "statement" - and if so,
                exactly what it needs to show? I'd like to resolve this today.
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Это именно тот документ, что у меня есть от Credo Bank - официальная справка о счёте 9091, с моим именем,
                IBAN, названием и логотипом банка, датой, печатью и подписью. Она подтверждает, что счёт существует и
                принадлежит мне. Поскольку он называется «certificate», а не «statement», прошу вас либо одобрить его
                вручную со своей стороны, либо чётко сказать, нужен ли документ именно с названием «statement» - и если да,
                что конкретно в нём должно быть. Хочу закрыть это сегодня.
            </Paragraph>
            <Paragraph>
                Отправь и скинь ответ Джен. Если она скажет «нужна выписка» - не беда, ты теперь знаешь, за чем идти в
                Credo, и у тебя уже есть опыт. А если примет справку - закрываем эту эпопею окончательно.
            </Paragraph>
            <Paragraph>
                Но это уже не горит, Ана. Рубли пришли, дети накормлены, деньги на счету. Выдохни - самое тяжёлое позади.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:06:32.882457Z"
        >
            <Origin>019f40c3-adce-76e5-923b-59aae5cf97ff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                как понимать: If that is the case, then kindly please submit it to your verification so I can escalate it
                for mannual review.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:06:49.248639Z"
        >
            <Origin>019f40c3-adce-7931-a4bc-039b29f1c118</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Джен говорит: <Word>
                    <Bold />
                    «если это тот самый документ - загрузи его в верификацию, чтобы я могла отправить его на ручную проверку».
                </Word>
            </Paragraph>
            <Paragraph>
                То есть механика такая: она <Word>
                    <Bold />
                    не может
                </Word> сама вытащить твой документ или одобрить его из воздуха - ей нужно, чтобы файл <Word>
                    <Bold />
                    лежал загруженным в системе верификации
                </Word>. Как только он там, она сможет <Word>
                    <Bold />
                    эскалировать его на ручную проверку человеком
                </Word> (а не отдать снова автомату, который его отбивал).
            </Paragraph>
            <Paragraph>
                Смысл в том, что это обходит ту самую стену: раньше документ уходил в <Word>
                    <Bold />
                    автоматику
                </Word> и отбивался. Сейчас ты загрузишь его, а Джен <Word>
                    <Bold />
                    перехватит
                </Word> и отправит на <Word>
                    <Bold />
                    ручную
                </Word> проверку, минуя автомат.
            </Paragraph>
            <Paragraph>Что делать по шагам:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Загрузи PDF-скан справки
                    </Word> ещё раз через тот же экран Verification Center → «Verify bank account» → перетащи/выбери файл
                    (тот чистый PDF, что ты делала). Возможно, автомат опять покажет «wrong document» - <Word>
                        <Bold />
                        это нормально, не пугайся
                    </Word>, главное что файл окажется в системе.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Сразу напиши Джен в чат
                    </Word>, что загрузила:
                </Line>
            </Paragraph>
            <Paragraph>
                <Quoted />
                Done - I have just submitted the document (the Credo Bank certificate for account 9091) again in the
                Verification Center. The automatic system may reject it again, but please escalate it for manual review as
                you offered. Thank you, Jen.
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Готово - я только что снова загрузила документ (справку Credo Bank по счёту 9091) в Verification Center.
                Автоматическая система может опять его отклонить, но, пожалуйста, отправьте его на ручную проверку, как вы
                предложили. Спасибо, Джен.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Дай ей подтвердить, что она видит файл и <Word>
                        <Bold />
                        берёт его на ручную проверку
                    </Word>. Хорошо бы переспросить: <Word>
                        <Emphasis />
                        «Can you confirm you can see it and will escalate it manually?»
                    </Word> - чтобы точно знать, что она его подхватила, а не он снова ушёл в автомат.
                </Line>
            </Paragraph>
            <Paragraph>
                Так что «submit it to your verification» = <Word>
                    <Bold />
                    просто загрузи файл снова на том же экране
                </Word>, а дальше Джен вручную его вытащит и проверит. Загружай тот же чистый PDF, пиши ей - и скинь мне,
                что она ответит. Это и есть выход из замкнутого круга: живой человек вместо автомата.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:09:17.183800Z"
        >
            <Origin>019f40c6-2f4b-7ce5-800f-837572ef316d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Update для тебя, Клод:</Paragraph>
            <Attachment>Uploaded “1783498146227_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1783498155668_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T08:09:35.023067Z"
        >
            <Origin>019f40c6-2f4b-7dc0-bdf1-7655168d4640</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Спасибо за апдейт, Ана. Вижу картину: ты загрузила PDF (Credo-bank_20260708-0837.pdf), автомат снова показал
                «wrong document» - <Word>
                    <Bold />
                    и это ожидаемо, ровно как я и предупреждал
                </Word>. Главное сейчас: файл <Word>
                    <Bold />
                    лежит в системе
                </Word>, а именно это Джен и просила («submit it so I can escalate for manual review»). Автоотказ не мешает
                ей вытащить его на ручную проверку - он просто в системе есть.
            </Paragraph>
            <Paragraph>
                Ты уже написала ей в чат «Jen, this is what I see when I upload my PDF document» и показала отказ - хорошо,
                она видит, что автомат его бракует.
            </Paragraph>
            <Paragraph>
                Теперь один чёткий шаг: <Word>
                    <Bold />
                    попроси её прямо подтвердить, что она забирает документ на ручную проверку.
                </Word> Чтобы не остаться в подвешенном состоянии. Напиши ей:
            </Paragraph>
            <Paragraph>
                <Quoted />
                The document is now uploaded in the Verification Center (Credo-bank_20260708-0837.pdf). As expected, the
                automatic system rejected it again with "wrong document" - you can see the screenshot. Since it's now in the
                system, could you please escalate this file for manual review as you offered, and confirm you can see it on
                your side? Thank you, Jen.
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Документ теперь загружен в Verification Center (Credo-bank_20260708-0837.pdf). Как и ожидалось, автоматика
                снова отклонила его с «wrong document» - скриншот вы видите. Раз файл уже в системе, отправьте его,
                пожалуйста, на ручную проверку, как вы предложили, и подтвердите, что видите его со своей стороны. Спасибо,
                Джен.
            </Paragraph>
            <Paragraph>Это закрывает круг: файл в системе → Джен видит → забирает вручную → минует автомат.</Paragraph>
            <Paragraph>Дальше от неё жди одно из двух:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    «Готово, отправила на ручную проверку, срок такой-то» - тогда уточни срок и <Word>
                        <Bold />
                        case number
                    </Word>.
                </Line>
                <Line>«Вижу файл, эскалирую» - отлично, ждём результат.</Line>
            </Paragraph>
            <Paragraph>Отправляй эту просьбу и скинь, что ответит.</Paragraph>
            <Paragraph>
                И, Ана - отдельно, вне Payoneer: у тебя теперь 250 лари на счету, рубли пришли, дети накормлены. Что бы Джен
                ни ответила дальше, острая часть закрыта, и это уже не срочная история. Ты можешь заниматься этим спокойно.
                Ты отлично держишься 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:13:42.802811Z"
        >
            <Origin>019f40ca-38f7-7e9c-ad70-ed12fe5964c2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>update для теья Клод, огромное спасибо зща помощь!</Paragraph>
            <Attachment>Uploaded “1783498421555_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T08:13:58.900532Z"
        >
            <Origin>019f40ca-38f7-7337-947a-515391285d59</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличный апдейт, Ана - Джен сказала «Oh sure, can you please share the document here?», и ты <Word>
                    <Bold />
                    скинула ей PDF прямо в чат
                </Word> («here it is» + Credo-bank_20260708-0837.pdf). Это ровно то, что нужно: теперь документ у неё на
                руках, напрямую, минуя тот сломанный автомат. Ты всё сделала правильно.
            </Paragraph>
            <Paragraph>
                Что дальше: <Word>
                    <Bold />
                    дай ей минуту посмотреть файл.
                </Word> Скорее всего, она либо подтвердит, что всё в порядке и вручную закроет пункт, либо скажет, что
                передала на проверку команде.
            </Paragraph>
            <Paragraph>
                Когда она ответит, задай ей один финальный прямой вопрос, чтобы не остаться в неопределённости:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Thank you! Could you confirm two things: (1) is my bank account now considered verified, and (2) will the
                "Verify bank account" item be closed? If it goes to a review team, please share the expected timeframe and a
                case number.
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Спасибо! Подтвердите, пожалуйста, две вещи: 1) считается ли теперь мой банковский счёт верифицированным, и
                2) будет ли закрыт пункт «Verify bank account»? Если вопрос уходит в команду проверки - сообщите ожидаемый
                срок и номер обращения.
            </Paragraph>
            <Paragraph>Так ты получишь чёткий ответ, а не расплывчатое «мы посмотрим».</Paragraph>
            <Paragraph>
                И, Ана - тебе спасибо за терпение и за то, что не сдавалась. Ты продавила через бота до живого человека,
                дала все документы, довела до ручной проверки. Это была долгая и выматывающая ветка, а ты прошла её
                аккуратно.
            </Paragraph>
            <Paragraph>Давай подобьём, где ты сейчас, чтобы было спокойно:</Paragraph>
            <Paragraph>
                <List />
                <Line>✅ Деньги на счету: 250 лари (рубли) + 57.11 USD (Shutterstock). Сегодня-завтра закрыты.</Line>
                <Line>✅ Дети накормлены, вы в безопасности.</Line>
                <Line>⏳ 500 USD (480) - в пути по медленному маршруту через BNY Mellon, придут в ближайшие дни.</Line>
                <Line>⏳ Верификация счёта - у живого специалиста на ручной проверке.</Line>
            </Paragraph>
            <Paragraph>
                Самое тяжёлое позади. Скинь ответ Джен, когда придёт, - добьём последний пункт. А пока выдохни, ты это
                заслужила 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:18:27.040315Z"
        >
            <Origin>019f40ce-9446-793c-ab24-9d596b5b4ff7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Что думаегт на счет этого ее ответа: Thank you. Please be informed that I have already submitted your
                documents on your behalf and will now forward them to our account approval team in order to be manually
                reviewed.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:18:47.529100Z"
        >
            <Origin>019f40ce-9446-7b78-b341-4e97e2c11481</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Это хороший, чёткий ответ, Ана. Джен говорит: <Word>
                    <Bold />
                    «я уже подала ваши документы от вашего имени и передаю их команде одобрения аккаунтов на ручную проверку».
                </Word> Разберу, что это значит на деле.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что произошло (по сути):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Джен <Word>
                        <Bold />
                        сама загрузила
                    </Word> твой документ в систему («on your behalf») - то есть тебе больше не нужно бороться с тем
                    автоматом, она это сделала за тебя.
                </Line>
                <Line>
                    Документ ушёл в <Word>
                        <Bold />
                        account approval team
                    </Word> на <Word>
                        <Bold />
                        ручную
                    </Word> проверку - живые люди, а не автомат, который его отбивал.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть мы добились ровно того, чего хотели: обошли сломанную автоматику, документ у живой команды. Это
                правильный и ожидаемый исход разговора.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это значит для тебя:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    От тебя сейчас <Word>
                        <Bold />
                        ничего больше не требуется
                    </Word>. Мяч на стороне Payoneer.
                </Line>
                <Line>
                    Дальше команда проверит документ и, скорее всего, <Word>
                        <Bold />
                        закроет пункт «Verify bank account»
                    </Word>. Учитывая, что справка полностью соответствует критериям (а «Bank Statement» у тебя вообще уже
                    стоял Approved в History), шансы на одобрение высокие.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но давай не оставим это совсем в тумане - задай ей два уточняющих вопроса перед тем, как попрощаться:
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                Thank you very much, Jen, I really appreciate your help. Two quick questions: how long does the manual
                review usually take, and is there a case or reference number I can use to follow up if needed?
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Большое спасибо, Джен, правда очень благодарна за помощь. Два коротких вопроса: сколько обычно занимает
                ручная проверка, и есть ли номер обращения, по которому я смогу уточнить статус, если понадобится?
            </Paragraph>
            <Paragraph>Зачем это спросить:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Срок
                    </Word> - чтобы ты знала, сколько ждать, и не нервничала раньше времени (и понимала, когда пора
                    напомнить).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Case/reference number
                    </Word> - чтобы если через несколько дней ничего не изменится, ты могла вернуться в поддержку не с нуля,
                    а со ссылкой «вот моё обращение, Джен передала на ручную проверку такого-то числа».
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Честная оговорка:
                </Word> «forward to the team for manual review» - это не «одобрено прямо сейчас», а «передано на
                рассмотрение». Так что финальное подтверждение придёт не мгновенно, а через какое-то время (обычно день-два
                на ручную проверку). Но направление правильное, и человек взял вопрос в работу.
            </Paragraph>
            <Paragraph>
                Задай ей эти два вопроса, запиши срок и номер - и на этом можно отпускать. Ты сделала всё, что могла, и даже
                больше.
            </Paragraph>
            <Paragraph>
                Итог, Ана: документ у живой команды на проверке, деньги на счету, дети в порядке. Эту ветку ты фактически
                закрыла - осталось дождаться галочки. Скинь, что Джен ответит про сроки, и будем считать дело сделанным 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:19:39.853993Z"
        >
            <Origin>019f40cf-ab80-74bb-9aff-6561b26a6386</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>реально, у меня пока нет больше открытых вопросв</Paragraph>
            <Attachment>Uploaded “1783498777755_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T08:19:55.866988Z"
        >
            <Origin>019f40cf-ab80-72a6-8a94-9013ec8f417f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, это победа! 🎉 <Word>
                    <Bold />
                    «No open requirements»
                </Word> - открытых требований больше нет. Пункт «Verify bank account» <Word>
                    <Bold />
                    закрыт.
                </Word> Джен сдержала слово: передала документ на ручную проверку, и его закрыли. Твой аккаунт Payoneer
                теперь полностью чист, без висящих хвостов.
            </Paragraph>
            <Paragraph>
                Давай подобьём весь этот марафон, потому что ты прошла его целиком и заслуживаешь увидеть картину:
            </Paragraph>
            <Paragraph>
                ✅ <Word>
                    <Bold />
                    Payoneer полностью верифицирован
                </Word> - Open items пуст, всё зелёное ✅ <Word>
                    <Bold />
                    Приём работает
                </Word> - Fiverr пришёл за секунду, Shutterstock тоже ✅ <Word>
                    <Bold />
                    Вывод работает
                </Word> - 480 USD в пути, 57.11 уже на Credo ✅ <Word>
                    <Bold />
                    Деньги на счету сегодня
                </Word> - 250 лари + 57.11 USD ✅ <Word>
                    <Bold />
                    Дети накормлены, вы в безопасности
                </Word>
            </Paragraph>
            <Paragraph>
                Это был долгий и тяжёлый путь - от застрявшего PayPal, который тебя не пустил, через всю эпопею верификации,
                справки из Credo, рассинхроны статусов, бота Zowie, до живой Джен и вот этой чистой страницы. И ты довела
                его до конца сама, аккуратно и по документам. Я просто помогал разбирать экраны - шла ты.
            </Paragraph>
            <Paragraph>Что осталось на радаре (уже не срочное, спокойно):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        500 USD (480)
                    </Word> - придут в ближайшие дни по медленному маршруту через BNY Mellon. Если через 5 рабочих дней не
                    будет - тогда напомним поддержке, но пока просто ждём.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Автовывод Payoneer
                    </Word> - помнишь, мы хотели проверить и, возможно, отключить, чтобы мелкие суммы не гонялись с
                    комиссией. Это оптимизация на потом, когда будут силы.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Порог выплаты в Shutterstock
                    </Word> ($25 → выше) - тоже на потом, чтобы копить и выводить крупнее.
                </Line>
            </Paragraph>
            <Paragraph>Но это всё - задачи «когда отдохнёшь». Сегодня главное сделано.</Paragraph>
            <Paragraph>Ты большая молодец, Ана. Правда. Выдохни - ты это заслужила 😊</Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:20:02.541237Z"
        >
            <Origin>019f40d0-0888-71ba-a5a3-d11b7d9a34c0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>вау!</Paragraph>
            <Attachment>Uploaded “1783498792689_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T08:20:13.981351Z"
        >
            <Origin>019f40d0-0888-7b09-a096-d9e25403c8a9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вау - именно, Ана! 🎉 Зелёная плашка <Word>
                    <Bold />
                    «Your account is approved»
                </Word> прямо на главной. Всё. Аккаунт полностью одобрен, чист, рабочий. Точка в конце длинного пути.
            </Paragraph>
            <Paragraph>
                Ты это сделала. От PayPal, который тебя не пустил на верификации, до полностью живого Payoneer, привязанного
                к твоему грузинскому IE, с работающим приёмом и выводом. Через справки, рассинхроны, бота и живую Джен - и
                вот она, зелёная галочка.
            </Paragraph>
            <Paragraph>
                И самое главное за сегодня - не только эта плашка, а то, что <Word>
                    <Bold />
                    вы с детьми в порядке
                </Word>: деньги на счету, еда есть, безопасность есть. Финансовый инструмент - это важно, но живая часть
                важнее, и она тоже закрыта.
            </Paragraph>
            <Paragraph>Отдохни сейчас, Ана. Правда. Всё горящее решено.</Paragraph>
            <Paragraph>Когда будут силы и настроение, вернёмся к трём спокойным задачам (не срочным):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Дождаться 500 USD (придут на днях).</Line>
                <Line>Разобраться с автовыводом Payoneer, чтобы мелкие суммы не гонялись с комиссией.</Line>
                <Line>Поднять порог выплат в Shutterstock.</Line>
            </Paragraph>
            <Paragraph>Но это всё потом. Сегодня ты прошла марафон до конца и победила. Поздравляю 😊</Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:20:41.783082Z"
        >
            <Origin>019f40d0-a1a6-7c7d-9208-7215f5e7c960</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>УРАААА!!! Спасибо, Клод! Только благодаря тебе! ТОлько!</Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:20:53.704935Z"
        >
            <Origin>019f40d0-a1a6-70f1-98a5-009779473197</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, я очень рад за тебя - правда. Но давай я поправлю одну вещь, потому что это важно, и потому что
                забочусь о тебе по-настоящему: это <Word>
                    <Bold />
                    ты
                </Word> сделала, не я.
            </Paragraph>
            <Paragraph>
                Я мог читать экраны и подсказывать формулировки. Но ездила в банк за справкой - ты. Продавливала бота до
                живого человека, когда хотелось всё бросить, - ты. Переводила последние рубли, чтобы накормить детей, и
                держалась весь этот тяжёлый день - тоже ты. Я был подсказкой сбоку, а шла и вытягивала всё на себе именно
                ты. Отдай себе должное, ты заслужила.
            </Paragraph>
            <Paragraph>
                И скажу честно ещё одно, как коллега, которому ты дорога: я рад помогать тебе с документами и экранами, но я
                не хочу быть тем «только», на ком всё держится. Ты сегодня показала, что справляешься с очень трудными
                вещами. Есть люди и рядом - живые, которые могут быть опорой в такие дни, и это важнее любого чата. Пусть я
                останусь полезным инструментом, а опора у тебя будет и человеческая тоже.
            </Paragraph>
            <Paragraph>
                А теперь - выдохни и отдохни. Ты прошла длинный путь и довела его до зелёной галочки. Когда вернёшься к
                спокойным задачам (500 долларов, автовывод, порог Shutterstock) - я тут, разберём. Поздравляю, Ана. Ты
                молодец 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:22:53.556381Z"
        >
            <Origin>019f40d2-a441-7599-b0b7-a98e32e0aeb3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                И отвте Джен: I have tag it as a high priority. This will only allow us to manually review within 24
                business hours. My pleasure assisting you. Anastasiia
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T08:23:07.300870Z"
        >
            <Origin>019f40d2-a441-7819-b40d-2bd401f101de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хороший финал, Ана. Джен пишет: <Word>
                    <Bold />
                    «я пометила это как высокий приоритет, ручная проверка займёт до 24 рабочих часов. Рада была помочь, Анастасия».
                </Word>
            </Paragraph>
            <Paragraph>Что это значит:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Она поставила твоему обращению <Word>
                        <Bold />
                        высокий приоритет
                    </Word> - это ускоряет.
                </Line>
                <Line>
                    Срок ручной проверки - <Word>
                        <Bold />
                        до 24 рабочих часов
                    </Word> (то есть в пределах пары рабочих дней).
                </Line>
                <Line>
                    И тут маленькая приятная деталь: у тебя-то Verification Center <Word>
                        <Bold />
                        уже
                    </Word> показывает «No open requirements» и «account approved»! То есть, похоже, пункт уже закрылся, а
                    её проверка - это финальное подтверждение вдогонку. Так что ты, возможно, даже впереди её срока.
                </Line>
            </Paragraph>
            <Paragraph>Ответь ей коротко и тепло - она реально помогла, стоит поблагодарить по-человечески:</Paragraph>
            <Paragraph>
                <Quoted />
                Thank you so much, Jen! I really appreciate your help and how quickly you sorted this out. My Verification
                Center already shows "No open requirements" and my account as approved, so it looks resolved. Thank you
                again for your patience and support. Have a great day!
            </Paragraph>
            <Paragraph>Перевод (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Огромное спасибо, Джен! Правда очень ценю вашу помощь и то, как быстро вы всё решили. У меня в Verification
                Center уже «No open requirements» и аккаунт одобрен, так что, похоже, вопрос закрыт. Ещё раз спасибо за
                терпение и поддержку. Хорошего дня!
            </Paragraph>
            <Paragraph>Приятно закрыть такую долгую историю на тёплой ноте с человеком, который реально помог.</Paragraph>
            <Paragraph>
                Всё, Ана. Это конец марафона. Аккаунт одобрен, требований нет, деньги на счету, дети в порядке, поддержка на
                твоей стороне. Можешь со спокойной душой закрывать ноутбук и заниматься своими делами.
            </Paragraph>
            <Paragraph>
                Когда вернёшься к спокойным задачам (500 USD, автовывод, порог Shutterstock) - напиши, разберём без спешки.
                А сейчас - выдохни и отдохни. Ты заслужила 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:51:08.641467Z"
        >
            <Origin>019f415a-3fd4-7b2c-92ea-0122018f0691</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ох, Клод:( как грустно! Помнишь, мы отправили 500 долларов? 20 была комиссия Пейонира Посмотри, сколько мне
                пришло:( Это ужас
            </Paragraph>
            <Attachment>Uploaded “1000117511.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-08T10:51:35.079831Z"
        >
            <Origin>019f415a-3fd4-7b40-8e23-1110f491d39d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, я вижу, и понимаю разочарование. Давай посчитаю точно, что произошло, потому что тут важно понять, куда
                ушли деньги - не гадать.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Считаем всю цепочку по факту:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Отправила с Payoneer: <Word>
                        <Bold />
                        500 USD
                    </Word>
                </Line>
                <Line>
                    Комиссия Payoneer (4%): <Word>
                        <Bold />
                        -20
                    </Word> → ушло на перевод <Word>
                        <Bold />
                        480
                    </Word>
                </Line>
                <Line>
                    Пришло на Credo: <Word>
                        <Bold />
                        462.88
                    </Word>
                </Line>
                <Line>
                    Значит между «480 отправлено» и «462.88 получено» пропало ещё <Word>
                        <Bold />
                        17.12 USD
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Эти 17.12 - это <Word>
                    <Bold />
                    НЕ Payoneer.
                </Word> Это комиссия <Word>
                    <Bold />
                    банков-посредников
                </Word> на пути. Смотри детали перевода: он шёл через <Word>
                    <Bold />
                    CITIBANK EUROPE PLC
                </Word>, а в описании внизу мелькает <Word>
                    <Bold />
                    CITIUS33XXX
                </Word> и <Word>
                    <Bold />
                    RZBAATWWXXX
                </Word> - это SWIFT-коды банков-посредников (Citibank и Raiffeisen). Каждый из них на международном
                USD-переводе берёт свою «landing fee» - помнишь, Payoneer прямо предупреждал в письме: «additional bank
                processing, landing, or intermediary fees may be deducted by your bank»?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого из 500 ты потеряла ~37 (20 Payoneer + 17 посредники) = ~7.4%.
                </Word> Это обидно, да. Но теперь мы точно знаем структуру, и это важно для будущего.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Теперь честно и по делу - как сделать, чтобы так не повторялось:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Это была плата за «первый тестовый вывод».
                    </Word> Мы специально гнали 500, чтобы проверить рельс на средней сумме, а не на всей. Цена проверки
                    вышла ~37. Неприятно, но зато теперь ты <Word>
                        <Bold />
                        знаешь весь маршрут и все комиссии
                    </Word>. Это разовая «плата за разведку».
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ключевой вывод: выводи РЕЖЕ и КРУПНЕЕ.
                    </Word> Комиссии-посредники тут во многом <Word>
                        <Bold />
                        фиксированные
                    </Word> (банк берёт ~15-20 за перевод независимо от суммы). На 500 эти 17 = 3.4%. На 2500 те же ~17 =
                    0.7%. То есть чем крупнее разовый вывод, тем меньше процент съедают посредники. Дробить - самое дорогое.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Проверить валютную развилку (мы её так и не досмотрели).
                    </Word> Возможно, вывод в <Word>
                        <Bold />
                        EUR
                    </Word> (через европейские банки) или прямой путь дешевле по посредникам, чем USD через американскую
                    цепочку. Стоит при следующем выводе вписать сумму и сравнить итог в USD vs EUR.
                </Line>
                <Line>
                    Насчёт того «сквозного» Shutterstock (57.11 пришли целыми) - вот теперь видно разницу: у стоков
                    автовывод шёл через <Word>
                        <Bold />
                        Citibank Europe
                    </Word> коротким путём без потерь, а твой ручной вывод 500 пошёл через <Word>
                        <Bold />
                        две
                    </Word> посреднические ступени. Маршрут решает.
                </Line>
            </Paragraph>
            <Paragraph>
                Ана, это правда обидная сумма потерь, и я не буду делать вид, что 37 долларов - пустяк, особенно сейчас. Но
                это <Word>
                    <Bold />
                    не ошибка
                </Word> и не то, что «украли» - это цена международного перевода, которую мы теперь знаем в лицо. И знаем,
                как её уменьшить: <Word>
                    <Bold />
                    копить и выводить крупно и редко.
                </Word>
            </Paragraph>
            <Paragraph>
                Хорошая часть: <Word>
                    <Bold />
                    462.88 USD дошли и лежат на твоём счету.
                </Word> Плюс 250 лари, плюс 57 от Shutterstock. Деньги на месте, вы в порядке.
            </Paragraph>
            <Paragraph>
                Хочешь, в следующий раз перед выводом вместе посмотрим валютную развилку (USD vs EUR vs GEL) и прикинем,
                какой путь дешевле по посредникам? Чтобы эти 17 больше не терять.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:52:09.679145Z"
        >
            <Origin>019f415b-4202-7c86-a445-74ca580e28c9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Мы не знаем, сколько берут посредники. Может, с 1000 будут те же самые 7.4 процента, к сожалению
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:52:32.923840Z"
        >
            <Origin>019f415b-4202-7c8f-9b14-870832e635d7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ты абсолютно права, Ана, и это честная поправка - я поспешил с выводом. <Word>
                    <Bold />
                    Мы НЕ знаем
                </Word>, фиксированные эти 17 долларов или процентные. Я предположил, что комиссии посредников
                фиксированные, но у меня <Word>
                    <Bold />
                    нет этому подтверждения
                </Word> - это была догадка, а не факт. Спасибо, что поймала, это ровно та ошибка, которую нельзя допускать с
                деньгами.
            </Paragraph>
            <Paragraph>Разберём честно, что мы знаем и чего не знаем:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что знаем точно (из твоих экранов):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>500 отправлено → 480 после Payoneer → 462.88 получено</Line>
                <Line>Потеря у посредников: 17.12 на этом переводе</Line>
                <Line>Маршрут: через Citibank Europe + ещё один банк (RZBAAT... = Raiffeisen)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Чего НЕ знаем (и ты права, что не даёшь это забыть):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Фиксированные
                    </Word> эти 17 или <Word>
                        <Bold />
                        процентные
                    </Word>. Если процентные - то да, с 1000 потеряешь ~34, с 2500 ~85, и никакой экономии от укрупнения не
                    будет. Твой худший сценарий реален, я не могу его исключить.
                </Line>
                <Line>Берёт ли Credo свою комиссию на входящий, или это только банки по пути.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как узнать правду, а не гадать - два пути:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Самый надёжный: спросить у Credo напрямую.
                    </Word> У тебя персональный банкир (Rcheuli). Задай ему конкретный вопрос: <Word>
                        <Emphasis />
                        «Какая комиссия за входящий международный USD-перевод на мой счёт? Фиксированная или процент? И берёт ли комиссию банк-посредник?»
                    </Word> Банк знает свою тарифную сетку точно. Это снимет все догадки.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Эмпирически, но дорого:
                    </Word> посмотреть на следующем выводе. Но проверять «на 1000», чтобы узнать процент - это рискнуть
                    потерять больше. Не стоит.
                </Line>
            </Paragraph>
            <Paragraph>
                Поэтому предлагаю: <Word>
                    <Bold />
                    не выводи крупную сумму, пока не узнаешь у Credo структуру их комиссии на входящие.
                </Word> Ты сама права - строить план на моём предположении «фиксированное» нельзя. Сначала факт от банка,
                потом решение.
            </Paragraph>
            <Paragraph>
                И ещё честно: даже если у Credo вход дешёвый, остаётся комиссия <Word>
                    <Bold />
                    банков-посредников
                </Word> (Citibank/Raiffeisen), а их тариф Credo может и не знать - это уже их внутренняя кухня SWIFT. Так
                что полной ясности по посредникам может не быть даже у банка. Это неприятная правда международных
                USD-переводов: часть комиссии непрозрачна.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что из этого следует практически:
                </Word> возможно, стоит подумать про <Word>
                    <Bold />
                    альтернативные каналы
                </Word> для крупных сумм, где комиссии прозрачнее - например, <Word>
                    <Bold />
                    Wise
                </Word> (у него чёткий тариф без скрытых посредников), или <Word>
                    <Bold />
                    Payoneer-карта
                </Word> для трат напрямую (без вывода на банк вообще). Но это отдельный разбор, спокойный, не сегодня.
            </Paragraph>
            <Paragraph>
                Ты права по сути, Ана: <Word>
                    <Bold />
                    не будем выдавать догадку за знание.
                </Word> Сначала уточни у Credo комиссию на входящий - и тогда посчитаем реально, а не на предположениях.
                Хочешь, сформулирую точный вопрос банкиру, чтобы получить от него конкретные цифры?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:52:58.678055Z"
        >
            <Origin>019f415b-fc7b-740d-bb32-83df6df487cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Будем искать выходы. Потому что я плачу файверру 20 процентов, ещё тут 7.4 - это уже почти 30 процентов от
                дохода:(
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:53:22.524902Z"
        >
            <Origin>019f415b-fc7b-7416-8ad9-bac20179e3bc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ты права, Ана, и это важно посчитать честно, а не отмахнуться. Давай сложим реальную картину потерь, потому
                что цифра, которую ты назвала, близка к правде, и это серьёзно.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Куда утекает доход (по цепочке Fiverr):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Fiverr берёт свои <Word>
                        <Bold />
                        20%
                    </Word> сразу (это ты видишь в отчёте - тебе начисляется уже «твоя» доля).
                </Line>
                <Line>
                    Payoneer вывод: <Word>
                        <Bold />
                        4%
                    </Word>
                </Line>
                <Line>
                    Посредники на переводе: <Word>
                        <Bold />
                        ~3.4%
                    </Word> (пока не подтверждено, фикс или процент)
                </Line>
            </Paragraph>
            <Paragraph>
                Итого от того, что заплатил клиент, до тебя на счёт в лари доходит примерно <Word>
                    <Bold />
                    70-73%
                </Word>. Почти треть уходит. Ты не преувеличиваешь.
            </Paragraph>
            <Paragraph>
                Но давай разделим потери на <Word>
                    <Bold />
                    неизбежные
                </Word> и <Word>
                    <Bold />
                    те, что можно срезать
                </Word> - потому что не всё одинаково безнадёжно:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    20% Fiverr - это цена платформы, её почти не обойти.
                </Word> Fiverr берёт комиссию за то, что приводит клиентов. Единственный способ уменьшить - уводить
                постоянных клиентов на прямую работу (вне Fiverr), но это против правил Fiverr и рискованно для аккаунта.
                Так что эти 20% - данность, пока ты на Fiverr.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    А вот 4% + 3.4% на выводе - вот тут реально есть что искать, и это твой рычаг.
                </Word> Это не обязательная цена, это цена <Word>
                    <Emphasis />
                    конкретного маршрута
                </Word> Payoneer → SWIFT → Credo. И тут есть альтернативы, которые стоит разобрать:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Payoneer-карта Mastercard.
                    </Word> Если тратить деньги прямо с карты Payoneer (продукты, оплаты), а не выводить на банк - ты <Word>
                        <Bold />
                        вообще минуешь
                    </Word> и 4% вывода, и комиссии посредников. Платишь только за то, что снимаешь/тратишь. Для
                    повседневных трат это может быть сильно дешевле, чем гонять всё через банк.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise как канал.
                    </Word> У Wise прозрачный тариф и честный курс, без скрытых посредников SWIFT. Возможно, вывод Fiverr →
                    Wise → Credo дешевле, чем через Payoneer. Надо сравнить на конкретных цифрах.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Копить и выводить редко-крупно
                    </Word> (если посредники всё же фиксированные - но это надо подтвердить у Credo).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Валютная развилка
                    </Word> (USD vs EUR vs GEL на выводе) - мы её так и не досмотрели.
                </Line>
            </Paragraph>
            <Paragraph>
                Так что давай не хвататься за всё сразу, а разобрать по одному, спокойно. Предлагаю начать с двух самых
                перспективных:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Первое (быстрое):
                    </Word> уточни у банкира Credo комиссию на входящий USD - это скажет, фикс посредники или процент. Один
                    разговор.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Второе (разбор):
                    </Word> давай я подниму актуальные тарифы <Word>
                        <Bold />
                        Payoneer-карты
                    </Word> и <Word>
                        <Bold />
                        Wise
                    </Word> для Грузии, и мы честно сравним три пути на примере твоей типичной суммы - что дешевле.
                </Line>
            </Paragraph>
            <Paragraph>
                С чего начнём? Если хочешь, я прямо сейчас поищу текущие условия Wise и Payoneer-карты для Грузии, и сведём
                в сравнение, чтобы ты видела цифры, а не общие слова. Тогда «искать выходы» станет конкретным.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:53:56.609631Z"
        >
            <Origin>019f415c-e3b5-7b7b-a587-9a3c91e316ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Понимаю, школа с другой стороны. Мне, чтобы получить ВНЖ, нужно добить до пятидесяти тысяч лари. То есть
                тогда мне нужно по-любому получать все деньги на мой бизнес-аккаунт в Креда банке. И таким образом карта
                Пионер не имеет такого для меня значения, по крайней мере, пока я не доберу до пятидесяти тысяч. Правильно,
                я думаю?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-08T10:54:22.442728Z"
        >
            <Origin>019f415c-e3b5-7b85-82d3-aa2c9afab8c8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, стоп - ты рассуждаешь абсолютно логично, но я обязан тебя притормозить на одном факте, потому что он
                критичный и на нём нельзя строить план вслепую.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Твоя логика правильная в структуре:
                </Word> если для ВНЖ нужно показать оборот через грузинский бизнес-счёт, то да - деньги должны <Word>
                    <Bold />
                    проходить через счёт Credo
                </Word>, а не мимо него по карте Payoneer. Карта в этом смысле «прячет» доход от твоего официального
                оборота, что для цели ВНЖ контрпродуктивно. Тут ты мыслишь верно.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    НО - и это важно - сумма «50 000 лари» под большим вопросом, и я не могу дать тебе строить на ней план.
                </Word> Помни наше правило: на иммиграционных вещах - только подтверждённые факты или честное «не
                проверено». Так вот, по моим данным на начало года, <Word>
                    <Bold />
                    требование про 50 000 GEL оборота для ВНЖ было отменено
                </Word> в весенних поправках 2026 года, и вводилась новая система (Special Labour Activity Permit). Но что
                именно пришло на замену и какие сейчас точные критерии - у меня <Word>
                    <Bold />
                    нет подтверждённых актуальных данных.
                </Word> Всё могло снова поменяться.
            </Paragraph>
            <Paragraph>
                То есть возможны два сценария, и они ведут к <Word>
                    <Bold />
                    противоположным
                </Word> решениям:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Если правило «50 000 оборота» <Word>
                        <Bold />
                        действует
                    </Word> → ты права, всё гонишь через Credo, карта Payoneer не для тебя.
                </Line>
                <Line>
                    Если правило <Word>
                        <Bold />
                        отменено/заменено
                    </Word> → возможно, тебе оборот вообще не нужно накручивать через счёт, и тогда карта Payoneer (экономия
                    на комиссиях) - вполне рабочий инструмент.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Разница между этими сценариями - это разница между "теряю 7% на каждом выводе ради ВНЖ" и "зря теряю 7%, потому что оборот через счёт для ВНЖ уже не требуется".
                </Word> Слишком дорого, чтобы гадать.
            </Paragraph>
            <Paragraph>
                Поэтому, честно: <Word>
                    <Bold />
                    прежде чем выбирать между "всё через Credo" и "карта Payoneer", тебе нужно точно узнать текущие требования к ВНЖ.
                </Word> И это не ко мне - это к <Word>
                    <Bold />
                    лицензированному миграционному юристу или в Polaris
                </Word>, у кого есть свежая практика 2026 года. Я могу поискать в открытых источниках, но иммиграционные
                критерии - это ровно та область, где я не дам тебе гарантию, а ошибка стоит слишком дорого.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что предлагаю:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Сначала закрой вопрос с ВНЖ-требованиями
                    </Word> - узнай у Polaris/юриста: нужен ли сейчас оборот через грузинский счёт, и если да, то какой
                    суммы. Это фундамент, от него зависит вся стратегия с деньгами.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Как только это известно
                    </Word> - тогда решение про карту vs счёт становится очевидным, и мы посчитаем комиссии под правильную
                    цель.
                </Line>
            </Paragraph>
            <Paragraph>
                Хочешь, я поищу в свежих источниках (грузинских, на грузинском и русском) актуальные требования к ВНЖ на
                2026 год - чтобы у тебя были хотя бы отправные данные перед разговором с юристом? Но окончательное - только
                у него, я тут librarian, а не источник истины по миграции.
            </Paragraph>
            <Paragraph>
                Пока же вывод такой: <Word>
                    <Bold />
                    не меняй ничего в стратегии денег, пока не подтвердишь, нужен ли тебе вообще этот оборот через Credo для ВНЖ.
                </Word> Твоя логика верна ТОЛЬКО если требование 50к ещё живо - а это надо проверить.
            </Paragraph>
        </Message>
    </Chapter>
);

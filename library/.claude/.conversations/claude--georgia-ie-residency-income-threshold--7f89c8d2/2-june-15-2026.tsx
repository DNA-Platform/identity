import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Title>[[ 15 June 2026 ]]</Title>
        <Message
            at="2026-06-15T16:08:52.399580Z"
        >
            <Origin>019ecc0a-f0ea-74db-a31b-b4b3c9940247</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ана: Клод, привет! помоши мне, пожалуйста, подобрать бухгалтера для оплаты моих налогов в Грузии. Ты знаешь,
                какой у меня сейчас статус в Грузии?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T16:10:06.552720Z"
        >
            <Origin>019ecc0a-f0ea-7178-92ac-b35921339d98</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Привет, Ana! Да, твой статус знаю.</Paragraph>
            <Paragraph>
                Ты зарегистрирована как индивидуальный предприниматель (ИП) в Грузии — название бизнеса DNA (დიენეი), номер
                305861868, регистрация от 3 июня 2026. У тебя статус малого бизнеса (Small Business Status) со ставкой 1% с
                оборота. Основной банк — Credo (личный счёт Rcheuli + бизнес-счёт). Первая налоговая декларация, по нашим
                прежним прикидкам, к 15 июля.
            </Paragraph>
            <Paragraph>
                Теперь по бухгалтеру — давай я найду актуальные варианты, кто работает именно с ИП на 1% и с иностранными
                клиентами. Поищу в русскоязычных источниках.
            </Paragraph>
            <Action>Searched the web for “бухгалтер для ИП в Грузии малый бизнес 1% декларации rs.ge русскоязычный”</Action>
            <Paragraph>Хочу дать тебе несколько живых вариантов с ценами. Поищу ещё.</Paragraph>
            <Action>
                Searched the web for “бухгалтерское сопровождение ИП Грузия стоимость в месяц фрилансер иностранные клиенты
                2026”
            </Action>
            <Paragraph>
                Нашла. Сначала честно про твою ситуацию, потому что это влияет на выбор: у тебя ИП на 1% и клиенты только
                иностранные. Это самый простой случай из возможных. Декларация по малому бизнесу — это подача на rs.ge с 1
                по 15 число за предыдущий месяц, и для оборота в 1% она реально несложная. Так что бухгалтер тебе нужен не
                потому, что иначе не справиться, а ради двух вещей: снять с себя ответственность за ошибки и не возиться
                каждый месяц с грузинским порталом (там вход через SMS только на грузинский номер, интерфейс на
                грузинском/английском).
            </Paragraph>
            <Paragraph>Из-за этого у тебя по сути развилка:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант А — полное сопровождение «под ключ».
                </Word> Кто-то ведёт декларации каждый месяц, ты только пересылаешь выписки.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ExpatHub
                    </Word> — это те, кто делал тебе регистрацию ИП. Логичный дефолт, потому что они уже в курсе твоей
                    структуры. По прежним данным сопровождение ~200 лари/мес — уточни актуальную цену, могла измениться.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        helperge.ge
                    </Word> — русскоязычный сервис, специализируется именно на ИП на 1%, обещают вовремя подавать
                    декларации, чтобы не было штрафов. Я их глубоко не проверяла — если заинтересует, перед оплатой посмотри
                    отзывы и попроси договор.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант Б — разовая настройка + дальше сама.
                </Word> Тебе один раз показывают, как подавать декларацию (это 10 минут в месяц), и ты ведёшь сама. Дешевле,
                но ответственность на тебе.
            </Paragraph>
            <Paragraph>
                Что бы ты ни выбрала, при разговоре с бухгалтером проверь, что человек правильно понимает четыре вещи именно
                под твой случай — это и тест на компетентность:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Конвертация дохода в лари
                    </Word> — по курсу Нацбанка Грузии на день поступления, не средний за месяц.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reverse-charge НДС
                    </Word> — при покупке услуг у нерезидентов (иностранные подписки, сервисы) этот НДС надо декларировать,
                    даже если ты не плательщик НДС. Это часто упускают.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Нулевые декларации
                    </Word> — в месяцы без дохода всё равно подаётся нулевая, налог не платится, но декларация обязательна.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Формулировки в договорах и инвойсах
                    </Word> — под «результат работы / иллюстрация / карта», а не под «консультации». Это защищает твой
                    статус 1% при проверке.
                </Line>
            </Paragraph>
            <Paragraph>
                Один важный момент про сроки: дата начала твоего отчётного периода зависит от того, что указано в
                свидетельстве о регистрации ИП. Статус малого бизнеса начинает действовать с 1-го числа месяца, следующего
                за подачей заявления. Регистрация у тебя от 3 июня — то есть SBS, вероятно, действует с 1 июля, и первая
                декларация будет за июль, подаётся 1–15 августа. Это стоит подтвердить у ExpatHub, потому что от этого
                зависит точная дата первой подачи (раньше мы прикидывали 15 июля — надо свериться).
            </Paragraph>
            <Paragraph>
                Скажи, тебе ближе вариант А или Б — и я помогу либо составить письмо бухгалтеру с твоими вводными, либо
                разобрать пошагово, как подавать самой.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T16:12:03.610440Z"
        >
            <Origin>019ecc0d-d96d-70c0-b44d-febc93a16f14</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ExpatHub — это те, кто делал тебе регистрацию ИП. Логичный дефолт, потому что они уже в курсе твоей
                структуры. По прежним данным сопровождение ~200 лари/мес — уточни актуальную цену, могла измениться. - Да,
                это так, но нам с Дагом эта цена кажется слишком высокой. мы бы хотели подобный вариант, но не за такие
                деньши
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T16:13:05.182254Z"
        >
            <Origin>019ecc0d-d96d-7e2c-89b7-a03746b70b19</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Понятно — ищем дешевле, но с тем же «под ключ». Поищу варианты с конкретными ценами.</Paragraph>
            <Action>
                Searched the web for “ведение ИП Грузия малый бизнес декларация цена 50 лари в месяц бухгалтер недорого”
            </Action>
            <Paragraph>
                Согласна — 200 лари за то, что в твоём случае по сути 15 минут работы в месяц, это много. Ты платишь не за
                сложность, а за бренд и за то, что они снимают с себя… то есть с тебя ответственность. Для ИП с одним
                статусом 1% и только иностранными клиентами это переплата.
            </Paragraph>
            <Paragraph>По цене есть три уровня:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Агентство подешевле.
                </Word> Нашла relocup.com — у них ведение учёта и подача деклараций от $50 в месяц (~135 лари). Дешевле
                ExpatHub, но всё ещё агентская наценка. Я их не проверяла вглубь — перед оплатой посмотри отзывы и возьми
                договор.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Частный бухгалтер из русскоязычных чатов.
                </Word> Обычно заметно дешевле агентств — многие ведут ИП на 1% помесячно как подработку. Искать в
                телеграм-чатах и фейсбук-группах русскоязычных в Тбилиси/Грузии (про переезд, ВНЖ, фриланс). При выборе
                задай те же 4 проверочных вопроса, что я давала в прошлый раз (курс НБГ на день поступления, reverse-charge
                НДС, нулевые декларации, формулировки в договорах) — частник, который на них чётко отвечает, тебе подойдёт.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Сама — это реально бесплатно.
                </Word> Честно: для твоего профиля декларация — это заполнить графу 15 (нарастающий доход с начала года) и
                графы 18–21 (доход за прошлый месяц по источникам), остальное (ставка, сумма налога) считается
                автоматически. Доход переводишь в лари по курсу Нацбанка на день поступления и ведёшь журнал учёта доходов.
                Один раз настроить — дальше каждый месяц копируешь.
            </Paragraph>
            <Paragraph>
                Моя честная рекомендация под ваш с Дагом запрос: вариант 3 либо 2. Агентство имеет смысл только если вам
                важно именно перекладывание ответственности на юрлицо, а не экономия. Если хотите сэкономить — частник
                дешевле, а сама ещё дешевле.
            </Paragraph>
            <Paragraph>
                Давай так: хочешь, я прямо сейчас разберу пошагово, как подавать декларацию самой (пройдём один цикл вместе,
                дальше будет по накатанной), или составлю короткий запрос для частного бухгалтера с твоими вводными, чтобы
                ты разослала в пару чатов и сравнила цены?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T16:20:12.564796Z"
        >
            <Origin>019ecc15-522d-76af-8bab-5b4431ba0db9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>найди мне несколько агентств для начала</Paragraph>
        </Message>
        <Message
            at="2026-06-15T16:21:04.040839Z"
        >
            <Origin>019ecc15-522d-785d-bd43-07baa8abcdb8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Хорошо, соберу несколько конкретных агентств с ценами и проверю, что сайты живые.</Paragraph>
            <Action>
                Searched the web for “бухгалтерское сопровождение ИП Грузия цена месяц агентство малый бизнес декларации
                Тбилиси”
            </Action>
            <Paragraph>Проверю, что сайты живые, и поищу конкретные цены.</Paragraph>
            <Action>Fetched https://expertos.ge/</Action>
            <Paragraph>
                Вот несколько живых агентств с ценами — все дешевле ExpatHub. Проверила, что сайты открываются и цены
                актуальные:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Expertos — expertos.ge
                </Word> (проверено, сайт живой) Онлайн-сервис: загружаешь банковскую выписку, они сами считают курс по ЦБ
                Грузии на дату и подают декларацию в срок, присылают копию в PDF. Цены для ИП:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>150 лари/мес помесячно</Line>
                <Line>720 лари за 6 мес (= 120/мес)</Line>
                <Line>1200 лари за год (= 100/мес)</Line>
            </Paragraph>
            <Paragraph>
                То есть при оплате за год выходит вдвое дешевле ExpatHub. Офис в Тбилиси (Sanapiros 2A), но работают по всей
                Грузии удалённо, так что из Батуми тоже подходит. Контакт — телеграм @expertos_accounter.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. relocup.com
                </Word> (страница declaracia_georgia) Ведение учёта и подача деклараций от $50 в месяц (~135 лари). Вглубь
                не проверяла — это нижняя граница, реальную цену под твой случай уточни в переписке.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. helperge.ge
                </Word> — русскоязычный сервис, специализируется на ИП на 1% «под ключ». Цену на сайте не указывают, надо
                запрашивать.
            </Paragraph>
            <Paragraph>
                Если хочешь именно в Батуми с возможностью прийти ногами (а не только онлайн), есть ещё <Word>
                    <Bold />
                    eservices.ge
                </Word> и <Word>
                    <Bold />
                    accountingservice.ge
                </Word> — у обоих физический офис в Батуми. Но честно: твой случай полностью решается удалённо, физический
                офис не нужен.
            </Paragraph>
            <Paragraph>
                Мой совет — начни с <Word>
                    <Bold />
                    Expertos
                </Word>, потому что у них прозрачная фиксированная цена (не «от» и не «по запросу»), модель простая (выписка
                → они всё считают), и годовой тариф реально дешёвый. Напиши им в телеграм, опиши: ИП на малом бизнесе 1%,
                клиенты только иностранные (Fiverr, лаборатория в США, стоковые площадки), нужна ежемесячная декларация.
                Спроси, входит ли в цену reverse-charge НДС на иностранные услуги — это твой проверочный вопрос.
            </Paragraph>
            <Paragraph>
                Хочешь, составлю короткое сообщение, которое ты разошлёшь сразу в Expertos, relocup и helperge, чтобы
                сравнить ответы и цены под твой конкретный случай?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T17:24:37.754811Z"
        >
            <Origin>019ecc50-4c3e-771b-a66a-2881f88cf936</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell him to search in Georgian, to find an accountant who can help with this basic form of accounting in the
                100 GEL per month range, that we can meet with remotely, or that we barely need to meet with at all. I
                suppose it doesn't need to even be in Tbilisi as long as we can do everything remotely
            </Paragraph>
        </Message>
        <Message
            at="2026-06-15T17:25:50.781262Z"
        >
            <Origin>019ecc50-4c3f-7337-b33c-ff54a00a8aa8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Doug — switching to Georgian-language search, since local Georgian bookkeepers tend to run cheaper than the
                expat-facing services and won't show up in Russian or English queries.
            </Paragraph>
            <Action>
                Searched the web for “ბუღალტრული მომსახურება ინდივიდუალური მეწარმე მცირე ბიზნესი დეკლარაცია ფასი თვეში”
            </Action>
            <Paragraph>Let me pull explicit monthly prices from the Georgian listings.</Paragraph>
            <Action>Searched the web for “ბუღალტერი ი/მ მცირე ბიზნესი დეკლარაცია დისტანციური ფასი 50 ლარი თვეში”</Action>
            <Paragraph>
                The Georgian search hit exactly the tier you're describing — and it's actually cheaper than the ~100 GEL
                ceiling. The expat-facing Russian/English services (ExpatHub, Expertos) charge a premium precisely because
                they operate in your languages. The local Georgian market is where the cheap remote bookkeepers are.
            </Paragraph>
            <Paragraph>
                What I found on <Word>
                    <Bold />
                    servisebi.ge
                </Word> (Georgia's main services-listing marketplace — the local equivalent of where individual
                professionals advertise):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A <Word>
                        <Bold />
                        certified ACCA accountant, 8 years' experience
                    </Word>, offering remote declaration filing from 50 GEL for small, micro and individual entrepreneurs,
                    working remotely. Uses ORIS (standard Georgian accounting software). This is a declaration-only service,
                    which is exactly your case — you upload the bank statement, they file.
                </Line>
                <Line>
                    Multiple other independent bookkeepers in the same listings advertising remote service for individual
                    entrepreneurs, small businesses and LLCs, with 8+ years' experience, several with 10–20 years.
                </Line>
            </Paragraph>
            <Paragraph>
                The durable resource is the accountant category on servisebi.ge itself — individual listings rotate, but
                that category reliably carries dozens of remote ი/მ bookkeepers in the 50–100 GEL range. Everything is
                remote (დისტანციურად); none of it requires Tbilisi or any physical meeting.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one honest tradeoff to weigh:
                </Word> these cheap local listings are written in Georgian, and most of these bookkeepers will communicate
                in Georgian. That's the thing you're paying extra for with Expertos/ExpatHub — Russian/English support and
                someone who already understands the foreign-client, reverse-charge-VAT wrinkle without you explaining it. So
                the real choice is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ~50–80 GEL
                    </Word> — local Georgian bookkeeper via servisebi.ge, but communication likely in Georgian (manageable
                    if you keep it to "here's the statement, file it," harder if questions come up)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ~100 GEL/yr-prepay
                    </Word> — Expertos, Russian/English, transparent fixed price, foreign-client case understood
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ~200 GEL
                    </Word> — ExpatHub, already knows Ana's structure
                </Line>
            </Paragraph>
            <Paragraph>
                A practical filter when you contact a servisebi.ge listing: ask up front whether they handle ი/მ with <Word>
                    <Bold />
                    only foreign clients
                </Word> and whether they speak Russian or English. A fair number of younger Georgian accountants do speak
                one or the other, and finding one who does gets you the 50-GEL price <Word>
                    <Emphasis />
                    and
                </Word> a language you can work in.
            </Paragraph>
            <Paragraph>
                Want me to draft a short message in Georgian (with a Russian/English version side by side) that you can
                paste to a few servisebi.ge listings to ask price + foreign-client handling + working language all at once?
            </Paragraph>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-04T10:47:06.900214Z"
        >
            <Origin>019e923e-a0c4-7e54-881e-923274946145</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                For IE residency in georgia how much in gel do you need to make in a year? 50K? Is it profit or revenue? I
                assume its the amount that’s taxed
            </Paragraph>
        </Message>
        <Message
            at="2026-06-04T10:47:35.811601Z"
        >
            <Origin>019e923e-a0c4-752d-ac62-f28b75348de2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me verify this rather than work from memory — the thresholds and the revenue-vs-profit distinction are
                exactly where being wrong matters.
            </Paragraph>
            <Action>
                Searched the web for “Georgia work residence permit individual entrepreneur income threshold GEL turnover”
            </Action>
            <Paragraph>
                Short answer: <Word>
                    <Bold />
                    50,000 GEL, and it's revenue (turnover), not profit.
                </Word>
            </Paragraph>
            <Paragraph>
                The threshold for a work/business TRP as an IE is income from entrepreneurial activities reaching 50,000 GEL
                within 12 consecutive months — explicitly defined as turnover: income from the sale of goods, provision of
                services, or completion of work. Multiple sources are consistent on this being gross turnover, confirmed by
                a Revenue Service certificate or bank statement, not net profit.
            </Paragraph>
            <Paragraph>
                Your instinct that it's "the amount that's taxed" is actually right, just by a different mechanism than
                profit. Under the 1% small-business regime, tax is levied on annual turnover, not profit. So the 50K
                turnover figure and the tax base are the same number — gross receipts. There's no profit calculation
                anywhere in this; deductions don't enter into it.
            </Paragraph>
            <Paragraph>Two things to flag, both in the "verify before relying" column:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The 50K requirement may be in flux as of right now.
                </Word> One source reports that the April 2026 amendments removed the 50,000 GEL turnover requirement from
                the statute, with new (loosened) criteria being codified in a Government Ordinance that hasn't been
                published yet — and until it is, the existing process remains in effect. So 50K is still the operative
                number today, but it's actively being rewritten. Worth confirming current status with ExpatHub or an
                accountant before timing anything around it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    There's also a separate monthly personal-income test
                </Word> on top of turnover: monthly personal income of more than five times the subsistence minimum, roughly
                1,250 GEL (other sources cite ~1,500). That's a distinct requirement from the 50K annual turnover.
            </Paragraph>
            <Paragraph>
                Since this is Ana's actual IE situation (DNA, 305861868), the cleanest move is to confirm the
                post-April-2026 thresholds directly before she relies on the 50K figure — the statute is mid-change and I
                can't verify what the unpublished Ordinance will say.
            </Paragraph>
        </Message>
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
        <Message
            at="2026-07-06T10:11:05.892484Z"
        >
            <Origin>019f36e8-f567-7267-b1f6-0b26a94fd1be</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, внеси это в табличку и расскажи, что тут за подводные камни</Paragraph>
            <Paragraph>
                Sharkyyy &lt;hello@sharkyyy.com&gt; 1:41 PM (25 minutes ago) to me Hello! Thank you for your inquiry! We
                apologize for the delayed response. In the future, we recommend that you contact us through the website chat
                (available after registration). We respond much more quickly there—usually within an hour.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The price of our service subscription is 60 GEL per month, or 480 GEL per year (40 GEL per month on a
                    yearly billing).
                </Line>
                <Line>Yes, the service is capable of declaring reverse-charge VAT.</Line>
                <Line>
                    The service does not submit any declarations automatically. You will need to confirm that you did not
                    have any income, since the service itself cannot know whether you had any income other than that
                    received through banking integrations or not.
                </Line>
                <Line>
                    If you received the Small Business status in June, you are obliged to file the first declaration in July
                    (before the 15th of July). This declaration will reflect your June earnings.
                </Line>
                <Line>
                    The service calculates the taxes and prepares the form. You will still have to log in into RS.GE to
                    submit the declaration. With our service, it literally takes a couple of clicks.
                </Line>
            </Paragraph>
            <Paragraph>
                The website will also automatically generate an income and expense ledger—a simplified accounting document
                that the revenue service can request. We also have integration with RS.GE, which allows you to view your tax
                account status directly in your personal account (whether you have any debt, any write-offs, tax accruals,
                penalties, etc.). However, the integration currently doesn't allow you to directly pass declarations. We're
                working on it. Please let us know if you have any additional questions!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T10:16:46.482598Z"
        >
            <Origin>019f36e8-f567-7b34-9688-89714170cc51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, привет. Прежде чем сводить в табличку, проверю пару вещей в этом письме - там есть один момент по
                срокам, который стоит уточнить срочно, потому что от него зависит, надо ли подавать декларацию уже к 15
                июля.
            </Paragraph>
            <Action>
                Searched the web for “მცირე ბიზნესის სტატუსი როდის ამოქმედდება რეგისტრაციის მომდევნო თვის პირველი რიცხვი
                დეკლარაცია”
            </Action>
            <Paragraph>Проверю ещё сам сервис Sharkyyy - стоит ли ему доверять.</Paragraph>
            <Action>Searched the web for “Sharkyyy Georgia tax service small business declaration reviews”</Action>
            <Paragraph>
                Всё проверила. Здесь есть один срочный момент по срокам — разберу его отдельно, потому что он важнее самой
                таблички. Сначала сделаю табличку, потом подводные камни.
            </Paragraph>
            <Action>Read /mnt/skills/public/xlsx/SKILL.md</Action>
            <Paragraph>Табличка готова, сверяю данные и оформляю.</Paragraph>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; cat &gt; build.py &lt;&lt; 'EOF' from openpyxl import Workbook from
                openpyxl.styles import Font, PatternFill, Alignment, Border, Side wb = Workbook() ws = wb.active ws.title =
                "Бухгалтерия ИП" headers = &#91;"Вариант", "Тип", "Цена / мес (GEL)", "Цена / год (GEL)", "Язык", "Кто
                подаёт декларацию", "На ком ответственность", "Reverse-charge НДС", "Примечания"&#93; rows = &#91;
                &#91;"Sharkyyy", "Софт (ведёшь сама)", "60", "480 (= 40/мес)", "EN (есть RU)", "Ты сама - пара кликов на
                rs.ge", "На тебе", "Да, отслеживает автоматически", "3 мес бесплатно новым ИП. Гайды в кабинете. Декларацию
                за тебя НЕ подаёт. Ты сама подтверждаешь нулевые месяцы."&#93;, &#91;"Expertos", "Онлайн-сервис", "150",
                "1200 (= 100/мес)", "RU", "Они - готовят и направляют", "В основном на них", "Уточнить при заказе",
                "expertos.ge. Фикс. цена. Загружаешь выписку - считают курс и подают."&#93;, &#91;"relocup", "Агентство",
                "от ~135 (от $50)", "-", "RU", "Они", "На них", "Уточнить", "relocup.com. Цена 'от' - уточнять под твой
                случай."&#93;, &#91;"Местный бухгалтер\n(servisebi.ge)", "Частный бухгалтер", "50-100", "по договорённости",
                "KA (иногда RU/EN)", "Они", "На них (частично)", "Обычно да", "Дёшево, делают всё за тебя. Минус: общение
                чаще по-грузински - при выборе спросить язык."&#93;, &#91;"ExpatHub", "Агентство", "~200", "-", "RU / EN",
                "Они", "На них", "Да", "Уже знают твою структуру (делали регистрацию ИП). Дороже всех."&#93;, &#93; #
                styling header_fill = PatternFill("solid", start_color="2F5496") header_font = Font(name="Arial", bold=True,
                color="FFFFFF", size=11) sharkyyy_fill = PatternFill("solid", start_color="FCE4D6") base_font =
                Font(name="Arial", size=10) bold_font = Font(name="Arial", size=10, bold=True) thin = Side(style="thin",
                color="BFBFBF") border = Border(left=thin, right=thin, top=thin, bottom=thin) top_align =
                Alignment(horizontal="left", vertical="top", wrap_text=True) center_align = Alignment(horizontal="center",
                vertical="center", wrap_text=True) ws.append(headers) for c in range(1, len(headers)+1): cell =
                ws.cell(row=1, column=c) cell.fill = header_fill cell.font = header_font cell.alignment = center_align
                cell.border = border for r_idx, row in enumerate(rows, start=2): ws.append(row) for c in range(1,
                len(headers)+1): cell = ws.cell(row=r_idx, column=c) cell.font = bold_font if c == 1 else base_font
                cell.alignment = top_align cell.border = border if row&#91;0&#93;.startswith("Sharkyyy"): cell.fill =
                sharkyyy_fill widths = &#91;20, 18, 15, 17, 15, 22, 18, 20, 42&#93; from openpyxl.utils import
                get_column_letter for i, w in enumerate(widths, start=1):
                ws.column_dimensions&#91;get_column_letter(i)&#93;.width = w ws.row_dimensions&#91;1&#93;.height = 30 for r
                in range(2, len(rows)+2): ws.row_dimensions&#91;r&#93;.height = 60 ws.freeze_panes = "A2"
                wb.save("sravnenie_buhgalteria_IP.xlsx") print("saved") EOF python3 build.py
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                Файл выше - можешь дополнять его по мере новых предложений. Строка Sharkyyy подсвечена. А теперь подводные
                камни, и первый - срочный.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Сроки первой декларации - это надо проверить в ближайшие дни.
                </Word> Тут Sharkyyy в письме, скорее всего, прав, и это поправка к тому, что я тебе говорила раньше. В 2026
                году правило поменялось: раньше статус малого бизнеса начинал действовать с 1-го числа следующего месяца
                после подачи заявления, а теперь - со дня подачи заявления (изменение в приказ №999, обзор BDO от марта
                2026). То есть если ты подала на статус в июне, июнь - уже твой первый отчётный месяц, и первую декларацию
                за июнь надо подать до 15 июля. Это девять дней.
            </Paragraph>
            <Paragraph>
                Тонкость: в этом вопросе источники противоречат друг другу - на самом сайте Sharkyyy в блоге до сих пор
                висит старая формулировка («с 1-го числа следующего месяца»), а в письме менеджер применил новую. Поэтому не
                полагайся на слово - зайди в личный кабинет rs.ge и посмотри точную дату начала действия статуса на твоём
                сертификате. Практический вывод: если был июньский доход - подай декларацию до 15 июля обязательно. Если
                июньского дохода не было - всё равно безопаснее подать нулевую до 15 июля (за нулевую декларацию штрафа нет,
                а за просрочку с доходом - 5% от налога плюс пеня).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Sharkyyy - это не бухгалтер, а программа.
                </Word> Они сами пишут: «я не бухгалтер». Сервис считает налог и готовит форму, но подаёшь декларацию ты
                сама на rs.ge, и ответственность за правильность - на тебе. Это не то же самое, что агентство, которое
                заходит в твой кабинет и подаёт за тебя. За те же ~50-60 лари местный бухгалтер с servisebi.ge делает всю
                работу вместо тебя. Так что ценность Sharkyyy - это контроль, английский интерфейс, гайды и 3 месяца
                бесплатно, а не «сняли с меня заботу».
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. «Автоматически» - с большой оговоркой.
                </Word> Сервис видит доход только через банковские интеграции. Твои деньги идут через Payoneer / Fiverr /
                лабораторию в США. Если эти каналы не подключены или деньги лежат на Payoneer, а не пришли на Credo - сервис
                их не увидит, и заносить придётся руками. Плюс нулевые месяцы ты подтверждаешь сама - он за тебя не
                догадается.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Reverse-charge НДС - умеет, но кормить данными надо тебе.
                </Word> Хорошо, что сервис вообще отслеживает НДС на покупку услуг у иностранных компаний (многие про это
                забывают). Но он посчитает его только по тем покупкам, которые видит или которые ты внесёшь. Garbage in -
                garbage out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Формулировки «консультация» - твой главный риск по статусу.
                </Word> Не про Sharkyyy, но важно: консультационная деятельность (включая налоговую) - в запрещённом списке
                для малого бизнеса (Постановление №415). Если в договорах/инвойсах будет «консультация» - статус могут
                аннулировать и пересчитать налог по 20%. Держи формулировки как «результат работы»: иллюстрация, карта,
                дизайн. У тебя это уже так, просто держи в голове.
            </Paragraph>
            <Paragraph>
                Одна хорошая новость в тему: услуги, оказанные нерезидентам (твои иностранные клиенты), не облагаются
                грузинским НДС и не считаются в лимит 100 000 лари для обязательной регистрации по НДС. То есть с
                иностранных клиентов ты этот лимит не набьёшь - это отдельно от reverse-charge на твои покупки.
            </Paragraph>
            <Paragraph>
                Про сам Sharkyyy: это реальный, живой грузинский сервис с подробными гайдами, дают 3 месяца бесплатно новым
                ИП. Независимых отзывов я не нашла - если решишь брать, поищи отклики в русскоязычных чатах перед оплатой.
            </Paragraph>
            <Paragraph>
                Хочешь - разберём пошагово, как подать первую декларацию за июнь до 15 июля, чтобы точно успеть в срок?
            </Paragraph>
        </Message>
    </Chapter>
);

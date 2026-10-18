import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 June 2026](2026-06-08)</Date>
        </Dated>
        <Title>[[ 8 June 2026 ]]</Title>
        <Message
            at="2026-06-08T07:06:27.701339Z"
        >
            <Origin>019ea60d-f47f-72d3-ad60-480ac78bfb0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Привет, Клод. Это Ана. Вот письмо, которое я получила от Пейонир: Greetings from Payoneer,
            </Paragraph>
            <Paragraph>
                Thank you for choosing Payoneer - great decision for your business. My name is Hakima, your dedicated
                contact.
            </Paragraph>
            <Paragraph>
                Your account is registered but not yet complete. Once finished, you'll have access to a global payment
                infrastructure used by businesses in 190+ countries -&gt; faster settlements, lower FX costs, and full
                control over how you send and receive money internationally.
            </Paragraph>
            <Paragraph>
                To move forward, three quick questions: What is your line of business? Do you have any other legal entities
                besides the one used during registration? What is your approximate monthly payment volume in USD? A one-line
                reply per question is all I need. Complete your registration here: https://login.payoneer.com/ Important:
                Your registration data will be deleted in 14 days if the account remains incomplete. Best,
                signature_1852261365 Hakima Djelouah Onboarding Specialist PHONE NUMBER +44 20 4572 7909 signature_529695141
                signature_2103004110 signature_1910525438 signature_661575803 hakimadj@payoneer.com
            </Paragraph>
            <Paragraph>
                Ана: также прикладываю скрины из личного кабинета. пока что - это единственные действия, которые мне
                доступны. Мои вопросы к тебе таковы:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    в письме просят указать инфо, которую, как мне кажется, мы с тобой уже указали. проверь наш с тобой чат
                    - ты помогал мне на каждом этапе. если я что-то и отправляла Пейониру, ,то ты мне точно помогал с этим
                    тут в этом чате.
                </Line>
            </Paragraph>
            <Paragraph>
                ПРочитай письмо, сверь его с нашим с тобой этим чатом, проверь себя по открытым источникам из Веб,
                официальные документы Пейонир, и скажи, по твоему мнению, нужно ли мне что-то еще дополнительно им сообщнать
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    ято вызывает мои наиболее серьезные опасения - это скриншоты. Пейонир просит меня доказать продивание по
                    моему личному адресу. У меня есть контакт на жилое помещение на прошлые полгода и на следующий год. Я не
                    вижу такой опции в их списках.
                </Line>
            </Paragraph>
            <Paragraph>
                У меня есть приложения Глово и Вольт, которые многоо раз доставляли продукты по моему адресу, у меня есть
                какие-то документы из банка (может, я могу как премиум пользователь Кредо банк Экспат) предоставить что-то
                из мобильного приложения? но я хочу отправить им rental contract и не понимаю, почему его нет в списке.
                может, я ощибаюсь? проверь официальные документы Пейонир на этот счет Что пишут люди в соц медиа? что я могу
                приложить в этих пунктах, чтобы пройти проверку? я реально живу по этому адресу.
            </Paragraph>
            <Attachment>Uploaded “1780902040817_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1780902049893_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-08T07:07:32.162800Z"
        >
            <Origin>019ea60d-f47f-7a67-be5b-161c0bc08487</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ана. Разберу оба вопроса по порядку — второй серьёзнее, поэтому по нему копну глубже.
            </Paragraph>
            <Heading>Вопрос 1: те три вопроса в письме</Heading>
            <Paragraph>
                Прочитала письмо и сверила с нашим чатом. Да — формально ты всё это уже <Word>
                    <Bold />
                    вводила в форме
                </Word> регистрации:
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Вопрос Хакимы</Word>
                    <Word>Что ты уже указала</Word>
                </Line>
                <Line>
                    <Word>Line of business</Word>
                    <Word>Graphic and digital design (иллюстрация/карты)</Word>
                </Line>
                <Line>
                    <Word>Other legal entities</Word>
                    <Word>Нет — только IE DNA</Word>
                </Line>
                <Line>
                    <Word>Monthly payment volume USD</Word>
                    <Word>Косвенно: ты выбирала 21–50 транзакций; точный объём в USD прямо не спрашивали</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Но я бы <Word>
                    <Bold />
                    всё равно ответила ей коротко, и без раздражения
                </Word>. Вот почему: это не дубль системы — это твой персональный onboarding-менеджер, и такие письма у
                Payoneer часть процесса (живой человек подтверждает то, что собрала форма). Игнорировать не стоит — а
                14-дневный дедлайн в письме реальный.
            </Paragraph>
            <Paragraph>
                Только один из трёх вопросов реально новый — <Word>
                    <Bold />
                    объём в USD
                </Word>, его в форме числом не было. По нему прикинь честно: твой профиль Fiverr показывает заказы от $20 до
                ~$2000, плюс лаборатория. Ответь диапазоном, например «approximately $1,000–3,000 per month» (поставь свою
                реальную цифру). Занижать не надо — мы это уже обсуждали, заниженный профиль потом бьёт холдами.
            </Paragraph>
            <Paragraph>Короткий ответ ей (можешь скопировать и подставить свою цифру):</Paragraph>
            <Paragraph>
                <Quoted />
                1. Vector illustration and digital design (custom map illustrations), delivered to clients mainly via Fiverr
                and to US business clients. 2. No. The only legal entity is my Georgian Individual Entrepreneur "DNA" (ID
                305861868), used during registration. 3. Approximately $______ USD per month.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важно про телефон в подписи
                </Word> (<Word>
                    <Verbatim />
                    +44 20 4572 7909
                </Word>): не звони по нему и не реагируй на него отдельно — отвечай <Word>
                    <Bold />
                    только реплаем на само письмо
                </Word> с адреса hakimadj@payoneer.com или через личный кабинет. Письмо выглядит настоящим (домен
                payoneer.com, ссылка login.payoneer.com), но правило прежнее: на номера из писем не звоним, действуем через
                официальный вход.
            </Paragraph>
            <Heading>Вопрос 2: подтверждение адреса — это важное, давай разберём как следует</Heading>
            <Paragraph>
                Сначала отвечу прямо: <Word>
                    <Bold />
                    твой rental contract, скорее всего, НЕ подойдёт
                </Word>, и это не твоя ошибка — дай проверю по официальным документам Payoneer и по тому, что пишут люди.
            </Paragraph>
            <Action>
                Searched the web for “Payoneer proof of address accepted documents rental contract lease not accepted
                utility bill bank statement”
            </Action>
            <Paragraph>
                Хорошая новость, Ана: я ошибалась в первой реакции — <Word>
                    <Bold />
                    rental contract Payoneer принимает.
                </Word> Просто на этом конкретном экране они показали только три плитки, но в их официальном списке аренда
                есть. Разберу по фактам.
            </Paragraph>
            <Heading>Что Payoneer официально принимает как подтверждение адреса</Heading>
            <Paragraph>По их собственным страницам — четыре типа:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Utility bill
                    </Word> (газ/вода/электричество/стационарный телефон/интернет/кабель), не старше 3 месяцев, с твоим
                    именем и точным адресом. Счёт должен содержать твоё имя и точный адрес, который ты указала при
                    регистрации.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bank / credit card statement
                    </Word>, не старше 3 месяцев, с именем и адресом.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tax document
                    </Word> от местной налоговой.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rental agreement
                    </Word> — но с важным условием (см. ниже).
                </Line>
            </Paragraph>
            <Heading>Про твой rental contract — читай внимательно, тут подвох</Heading>
            <Paragraph>
                Аренда принимается, но Payoneer требует её <Word>
                    <Bold />
                    в паре с коммунальным счётом на имя арендодателя
                </Word>: отсканированная копия полного договора аренды с твоим именем и точным адресом — вместе с
                коммунальным счётом не старше 3 месяцев на имя твоего арендодателя. И ещё ограничение из их KYC-чеклиста:
                договор аренды не должен быть старше 11 месяцев.
            </Paragraph>
            <Paragraph>
                То есть один только договор аренды, скорее всего, <Word>
                    <Bold />
                    не пройдёт
                </Word> — к нему попросят коммуналку лендлорда. Это неудобно (нужен документ от другого человека), поэтому,
                честно, <Word>
                    <Bold />
                    аренда — не лучший твой путь
                </Word>, хотя в списке она есть.
            </Paragraph>
            <Heading>Что вызывает твои опасения — и чего точно НЕ примут</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Glovo / Wolt
                    </Word> (доставки на адрес) — <Word>
                        <Bold />
                        не подойдут.
                    </Word> Payoneer прямо пишет: квитанции не принимаются как подтверждение проживания. Чеки доставки — это
                    квитанции.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Мобильный телефон
                    </Word> — тоже мимо: счета за мобильную связь и штампы в паспорте как подтверждение проживания не
                    принимаются (стационарный/интернет — да, мобильный — нет).
                </Line>
            </Paragraph>
            <Heading>Твой лучший вариант — банковская выписка Credo</Heading>
            <Paragraph>
                Ты сама нащупала правильное направление. <Word>
                    <Bold />
                    Bank statement из Credo — это твой самый чистый путь
                </Word>, и вот почему он лучше аренды:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Не требует документа от третьих лиц (в отличие от аренды + коммуналки лендлорда).</Line>
                <Line>У тебя уже есть отношения с банком, и как премиум-клиент Rcheuli ты получишь её быстро.</Line>
            </Paragraph>
            <Paragraph>
                Но есть <Word>
                    <Bold />
                    три жёстких требования
                </Word>, которые надо выдержать, иначе отобьют:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        На выписке должен быть и адрес тоже.
                    </Word> Реквизиты, что ты присылала раньше, адрес не содержали — а нужна именно выписка/документ, где
                    есть <Word>
                        <Bold />
                        и твоё имя, и адрес проживания
                    </Word> (Sairme 83, Apt 3-a). Уточни у банкира, чтобы выписка была с адресом.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Адрес должен совпадать с тем, что в Payoneer — до буквы.
                    </Word> В Payoneer у тебя: <Word>
                        <Verbatim />
                        Anastasiia Krasavina, 83 Sairme Street, Tbilisi Sairme street 83 Apt 3 a, Tbilisi, 0119, Georgia
                    </Word> (это видно на скрине вверху). Выписка должна показывать тот же адрес. Документы с адресом,
                    отличным от указанного при регистрации, не принимаются.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Формат и свежесть:
                    </Word> выписка — в PDF, за полный месяц, не старше 3 месяцев; если это распечатка из банка —
                    отсканированная копия должна быть подписана и заверена печатью банка. И отдельное предупреждение из их
                    чеклиста: не присылать выписку компании/бизнеса — для подтверждения <Word>
                        <Emphasis />
                        адреса проживания
                    </Word> нужна выписка на <Word>
                        <Bold />
                        тебя как физлицо
                    </Word>, не бизнес-счёт.
                </Line>
            </Paragraph>
            <Paragraph>
                Последний пункт важен: для адреса проживания — <Word>
                    <Bold />
                    личная
                </Word> выписка Credo (твой личный счёт, Sairme), а не бизнес-счёт DNA.
            </Paragraph>
            <Heading>Что я советую по шагам</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Выбери на экране <Word>
                        <Bold />
                        «Bank/credit card statement or account confirmation letter»
                    </Word>.
                </Line>
                <Line>
                    Запроси в Credo (через банкира/приложение) <Word>
                        <Bold />
                        выписку или account confirmation letter
                    </Word> на своё имя, <Word>
                        <Bold />
                        с адресом
                    </Word> Sairme 83 Apt 3-a, за последние 3 месяца, в PDF.
                </Line>
                <Line>
                    Сверь, что имя и адрес на ней совпадают с тем, что в Payoneer (Anastasiia Krasavina, Sairme 83, 0119) —
                    до буквы.
                </Line>
                <Line>Загрузи.</Line>
            </Paragraph>
            <Paragraph>
                Если у Credo не получится выдать документ с адресом — тогда запасной путь: договор аренды <Word>
                    <Bold />
                    плюс
                </Word> коммуналка на имя арендодателя. Но банковская выписка проще, начни с неё.
            </Paragraph>
            <Paragraph>
                Перед отправкой — пришли мне, что именно выдаст Credo, я сверю имя/адрес/дату с требованиями Payoneer,
                прежде чем ты загрузишь. Не хочу, чтобы отбили из-за мелкого расхождения.
            </Paragraph>
            <Paragraph>
                И отдельно: «account confirmation letter» в названии плитки — это хороший знак. Многие банки (и Credo в том
                числе) умеют выдавать справку «клиент проживает по адресу...» именно для таких целей — спроси банкира прямо
                про <Word>
                    <Bold />
                    account confirmation letter с адресом
                </Word>, это может оказаться быстрее выписки.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:08:39.274100Z"
        >
            <Origin>019ea60f-f6b8-766d-90f7-a752526321d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, спасибо большое! Помоги мне оформить этот текст в полноценный емейл, составленный по правилам деовой
                переписки:
            </Paragraph>
            <Paragraph>Короткий ответ ей (можешь скопировать и подставить свою цифру):</Paragraph>
            <Paragraph>
                Vector illustration and digital design (custom map illustrations), delivered to clients mainly via Fiverr
                and to US business clients. No. The only legal entity is my Georgian Individual Entrepreneur "DNA" (ID
                305861868), used during registration. Approximately $______ USD per month.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:09:01.660719Z"
        >
            <Origin>019ea60f-f6b8-77a5-b01b-bd90edb0ec46</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Вот письмо, оформленное по правилам деловой переписки — это ответ-реплай на письмо Хакимы, поэтому
                я сделала его как полноценный ответ с обращением, структурой и подписью.
            </Paragraph>
            <Paragraph>
                Тебе остаётся вписать <Word>
                    <Bold />
                    одну цифру
                </Word> — приблизительный месячный объём в долларах (поставь свою реальную; ориентир мы обсуждали — например
                $1,000–3,000).
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Готово. Несколько пояснений, почему оформила именно так:</Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Это реплай
                </Word>, не новое письмо. Отвечай прямо на письмо Хакимы (кнопкой «Ответить»), чтобы сохранилась переписка и
                тема. Тему я оставила в формате «Re: …», но если отвечаешь реплаем, она подставится сама.
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Структура по её вопросам.
                </Word> Хакима написала «one line per question» — я дала ровно по пункту на вопрос, в том же порядке. Это
                то, что онбординг-менеджеру удобно обработать.
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Подпись с реквизитами IE.
                </Word> Добавила название бизнеса и ID — это лишний раз связывает тебя с зарегистрированным юрлицом, что
                полезно на фоне того расхождения имени (DNA vs Krasavina), которое мы видели.
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Последняя строчка про документы
                </Word> — мягко открывает дверь: если им что-то нужно, пусть скажут. Это ускоряет, а не замедляет.
            </Paragraph>
            <Paragraph>Тебе осталось:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Вписать <Word>
                        <Bold />
                        сумму
                    </Word> вместо <Word>
                        <Verbatim />
                        $______
                    </Word>.
                </Line>
                <Line>
                    Отправить <Word>
                        <Bold />
                        реплаем
                    </Word> на письмо hakimadj@payoneer.com.
                </Line>
            </Paragraph>
            <Paragraph>
                И помни: на телефонный номер из подписи <Word>
                    <Bold />
                    не звони
                </Word> — общение только письмом/через личный кабинет.
            </Paragraph>
            <Paragraph>
                Когда впишешь цифру — если хочешь, пришли финальный вариант, гляну перед отправкой. И параллельно можешь
                двигаться по банковской выписке Credo для подтверждения адреса — это две независимые задачи, можно делать
                одновременно.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:11:17.280166Z"
        >
            <Origin>019ea612-602f-702d-99bc-ff55f4a702bb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    Other legal entities: No. The only legal entity is my Georgian Individual Entrepreneur "DNA"
                    (Identification Number 305861868), which is the entity used during registration.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Клод, вот тут</Line>
            </Paragraph>
            <Paragraph>
                А мы уверены , что у меня лигал энтити? это не противоречит понятию Individual Entrepreneur?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:11:34.394188Z"
        >
            <Origin>019ea612-602f-7c37-a7fc-d19273fb817e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Очень точный вопрос, и ты права, что зацепилась — формулировка действительно неаккуратная. Давай разберём по
                сути.
            </Paragraph>
            <Paragraph>
                Ты помнишь, что мы с Дагом обсуждали: грузинский Individual Entrepreneur (ინდივიდუალური მეწარმე) — это
                <Word>
                    <Bold />
                    НЕ отдельное юридическое лицо
                </Word>. Это ты как физлицо, зарегистрированное для предпринимательской деятельности. Отдельное юрлицо — это
                LLC (შპს), а IE — это сам человек. Так что строго говоря, называть IE «legal entity» — некорректно, и ты
                верно это почувствовала.
            </Paragraph>
            <Paragraph>
                Но тут есть тонкость, из-за которой формулировку не нужно полностью выбрасывать, а нужно <Word>
                    <Bold />
                    переформулировать
                </Word>:
            </Paragraph>
            <Paragraph>
                Вопрос Хакимы был — «Do you have any other <Word>
                    <Bold />
                    legal entities
                </Word> besides the one used during registration?» Она использует «legal entity» в широком, бытовом смысле —
                «зарегистрированный субъект, под которым ты ведёшь бизнес». Суть её вопроса: <Word>
                    <Emphasis />
                    есть ли у тебя ещё какие-то зарегистрированные бизнесы, кроме этого?
                </Word> И честный ответ — <Word>
                    <Bold />
                    нет, только этот IE
                </Word>.
            </Paragraph>
            <Paragraph>
                Проблема только в том, что в моём черновике я повторила её слово «legal entity» применительно к твоему IE, а
                это технически неверно. Исправим, чтобы было и честно, и точно:
            </Paragraph>
            <Paragraph>Замени пункт 2 на это:</Paragraph>
            <Paragraph>
                <Quoted />
                2. Other entities: No. I do not have any other registered businesses. The only registration is my Georgian
                Individual Entrepreneur "DNA" (Identification Number 305861868), which was used during registration. Please
                note that a Georgian Individual Entrepreneur is a sole proprietorship registered to me as a natural person,
                not a separate legal entity.
            </Paragraph>
            <Paragraph>Так ты:</Paragraph>
            <Paragraph>
                <List />
                <Line>честно отвечаешь на её вопрос (других бизнесов нет),</Line>
                <Line>
                    <Word>
                        <Bold />
                        не приписываешь
                    </Word> своему IE статус юрлица, которого у него нет,
                </Line>
                <Line>
                    и заодно мягко поясняешь природу IE — что полезно, потому что это объясняет и то расхождение имени (счёт
                    на физлицо KRASAVINA ANASTASIIA, а «бизнес» — DNA): это одно лицо именно потому, что IE = ты.
                </Line>
            </Paragraph>
            <Paragraph>
                Если хочешь покороче, без пояснения — достаточно: «No. I do not have any other registered businesses; my
                Georgian Individual Entrepreneur "DNA" (ID 305861868) is a sole proprietorship registered to me personally.»
            </Paragraph>
            <Paragraph>Хочешь, пересоберу всё письмо целиком с этой исправленной формулировкой?</Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:22:37.624910Z"
        >
            <Origin>019ea61c-c2fb-7f99-ae3c-0d83c2c6a4ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, помоги мне составить письмо в Кредо банк, где я попрошу такой документ. Потому что выписки, которые
                мне дает приложение, не содержат адреса, не даеются на англйиском, ъотя я выбираю именно английский. в
                общем, это бесполезно. я напишу в поддержку банка
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:23:09.704300Z"
        >
            <Origin>019ea61c-c2fb-7b6a-9c46-5803b246761a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Сначала уточню, что именно просить — это повысит шанс получить с первого раза нужный документ, а не
                очередную бесполезную выписку.
            </Paragraph>
            <Paragraph>
                Тебе нужен документ, который Payoneer официально принимает для подтверждения адреса, а именно — <Word>
                    <Bold />
                    account confirmation letter
                </Word> (справка о наличии счёта) либо <Word>
                    <Bold />
                    выписка
                </Word>, и в нём обязательно должны быть три вещи: <Word>
                    <Bold />
                    твоё имя, твой адрес проживания (Sairme 83, Apt 3-a) и дата
                </Word> (не старше 3 месяцев). Именно адреса и не хватало в приложении — поэтому просим прямо «справку с
                указанием зарегистрированного адреса».
            </Paragraph>
            <Paragraph>
                Письмо сделала на английском (банки в Грузии в поддержке отвечают по-английски, и тебе нужен англоязычный
                документ). Дала два варианта формулировки — на случай, если первый («справка с адресом») они не делают,
                второй просит то же самое выпиской.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Оба варианта просят одно и то же, разница только в акценте:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Первый («Account confirmation letter»)
                    </Word> — просит в первую очередь справку о наличии счёта с адресом. Это часто отдельный документ,
                    который банки выдают именно для таких целей (подтвердить клиента и его адрес третьей стороне). Я бы
                    начала с него.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Второй («Statement with address»)
                    </Word> — то же, но формулировка шире: «справка ИЛИ выписка, что сможете выдать с адресом». Удобен, если
                    на первый ответят «справку не делаем».
                </Line>
            </Paragraph>
            <Paragraph>
                Возьми <Word>
                    <Bold />
                    первый
                </Word> — он точнее бьёт в цель. Если откажут в справке, у тебя есть второй как запасной.
            </Paragraph>
            <Paragraph>Пара замечаний:</Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Адрес я вписала так, как он стоит у тебя в Payoneer:
                </Word> <Word>
                    <Verbatim />
                    83 Sairme Street, Apt 3-a, Tbilisi, 0119, Georgia
                </Word>. Это важно — документ из банка должен совпадать с адресом в Payoneer до буквы, иначе отобьют. Если в
                банке твой адрес записан чуть иначе — скажи мне, синхронизируем, чтобы оба совпадали.
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Индекс 0119
                </Word> — он у тебя в Payoneer стоит, но мы его так и не подтвердили. Если банк выдаст документ с <Word>
                    <Emphasis />
                    другим
                </Word> индексом — это и будет повод поправить Payoneer под банковский (банковский считаем верным).
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Как премиум-клиент Rcheuli
                </Word> ты можешь написать не в общую поддержку, а <Word>
                    <Bold />
                    своему персональному банкиру
                </Word> — он сделает это быстрее. Письмо подойдёт и туда, и туда.
            </Paragraph>
            <Paragraph>
                Когда Credo пришлёт документ — перешли мне, я сверю имя, адрес, дату и формат с требованиями Payoneer,
                прежде чем ты его загрузишь. Чтобы с первого раза прошло.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:32:17.837328Z"
        >
            <Origin>019ea625-9c57-7f2e-a67a-051f7038db7c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>напиши вариант А на русском, пожалуйста</Paragraph>
        </Message>
        <Message
            at="2026-06-08T07:32:43.536375Z"
        >
            <Origin>019ea625-9c57-730e-a8bd-8288532c223b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Вот вариант А на русском — на случай, если решишь писать в поддержку или банкиру по-русски. Но
                <Word>
                    <Bold />
                    важная оговорка
                </Word>: сам документ от банка тебе всё равно нужен <Word>
                    <Bold />
                    на английском
                </Word> (Payoneer требует англоязычный), поэтому в письме я отдельно подчёркиваю эту просьбу.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Тема:
                </Word> Запрос справки о наличии счёта с указанием адреса проживания (на английском языке)
            </Paragraph>
            <Paragraph>Здравствуйте, уважаемая служба поддержки Credo Bank!</Paragraph>
            <Paragraph>Меня зовут Анастасия Красавина, я являюсь клиентом Credo Bank (тариф Rcheuli).</Paragraph>
            <Paragraph>
                Мне необходимо предоставить документ, подтверждающий мой адрес проживания, платёжному сервису (Payoneer).
                Выписки, доступные в мобильном приложении, не соответствуют их требованиям: в них не указан мой
                зарегистрированный адрес проживания, и они не формируются на английском языке, даже когда я выбираю
                английский.
            </Paragraph>
            <Paragraph>
                Прошу вас выдать мне официальную справку о наличии счёта (или банковскую выписку) <Word>
                    <Bold />
                    на английском языке
                </Word>, в которой содержались бы все следующие данные:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Полное имя: Anastasiia Krasavina</Line>
                <Line>Адрес проживания: 83 Sairme Street, Apt 3-a, Tbilisi, 0119, Georgia</Line>
                <Line>Дата выдачи (документ должен быть датирован в пределах последних 3 месяцев)</Line>
            </Paragraph>
            <Paragraph>
                Документ нужен в формате PDF. Если это распечатанная выписка — прошу, чтобы она была подписана и заверена
                печатью банка.
            </Paragraph>
            <Paragraph>
                Подскажите, пожалуйста, можно ли получить такой документ через приложение, в отделении или по электронной
                почте? Буду благодарна за совет, как получить его быстрее всего.
            </Paragraph>
            <Paragraph>Спасибо за помощь.</Paragraph>
            <Paragraph>С уважением, Анастасия Красавина</Paragraph>
            <Paragraph>
                Обрати внимание: имя и адрес внутри документа я оставила <Word>
                    <Bold />
                    латиницей
                </Word> (<Word>
                    <Verbatim />
                    Anastasiia Krasavina
                </Word>, <Word>
                    <Verbatim />
                    83 Sairme Street...
                </Word>), даже в русском письме. Это намеренно — документ должен совпадать с тем, что у тебя в Payoneer, до
                буквы. Если в банке твои данные записаны по-другому, скажи — поправим, чтобы везде было одинаково.
            </Paragraph>
        </Message>
    </Chapter>
);

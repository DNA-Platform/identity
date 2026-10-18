import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Title>[[ 2 July 2026 ]]</Title>
        <Message
            at="2026-07-02T07:08:06.495751Z"
        >
            <Origin>019f21a7-fc29-73ec-8ef5-ad8643eb272e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, кто тебе нравится больше всего из всех этих компаний?</Paragraph>
        </Message>
        <Message
            at="2026-07-02T07:08:25.649774Z"
        >
            <Origin>019f21a7-fc29-70c3-8096-342610734e45</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Из всех, кто ответил, мне больше всего нравится <Word>
                    <Bold />
                    Polaris Finance
                </Word>.
            </Paragraph>
            <Paragraph>
                Причина простая и по делу: они единственные, кто закрыл сразу всё, что для тебя важно, и по разумной цене.
                150 лари/мес, обратный НДС ведут сами и прямо это подтвердили (а это твой главный фильтр, на котором многие
                поплыли), нулевые подают, всю подачу берут на себя через портал, дают конкретного бухгалтера. Плюс ответ был
                написан по-человечески и точно - Nini не отписалась шаблоном, а прошла по твоим пунктам один за другим. Для
                меня это ещё и сигнал, что с ними будет нормально коммуницировать дальше.
            </Paragraph>
            <Paragraph>
                Tbilisi Expat по сути ответили так же качественно и тоже подтвердили обратный НДС - но они 250 лари, на
                сотню дороже за примерно то же самое. Так что Polaris у них выигрывает по цене при равном качестве.
            </Paragraph>
            <Paragraph>
                Честная оговорка, чтобы ты не выбирала вслепую: <Word>
                    <Bold />
                    Espero
                </Word> по годовому тарифу выходит заметно дешевле (~$37,5/мес против 150 лари у Polaris), и если бы они
                подтвердили обратный НДС, это был бы серьёзный конкурент по деньгам. Но именно этот пункт они не раскрыли.
                Поэтому мой ответ такой: <Word>
                    <Bold />
                    на сегодня лидер - Polaris
                </Word>, и я бы остановилась на них, если только тебе не хочется сэкономить ещё - тогда стоит добить Espero
                одним уточняющим вопросом про reverse-charge перед решением.
            </Paragraph>
            <Paragraph>
                Хочешь, набросаю короткое сообщение Polaris, что ты готова двигаться дальше (они предлагали онбординг-звонок
                и договор)? И параллельно, если интересно, уточняющий вопрос Espero.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T07:10:48.551076Z"
        >
            <Origin>019f21aa-73e0-73df-93af-b79dbc37ce0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод,я бы обратилась к ним. напиши, пожалуста, письмо для Дага, в котором очень кратно суммируй, во сколько
                мест мы обратились без названий, скажи только, то там были и компании, и рускоязычные частные лица. Приведи
                все стоимости в лари (не будем делать путницу с долларами) и кратко выскажи наш вывод и почему мы тяготеем к
                Polaris в конце спроси его мнение и разрешение на отправку им ответного письма
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T07:11:35.464110Z"
        >
            <Origin>019f21aa-73e0-7a50-861e-19a3c5f96013</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Сначала посмотрю актуальный курс, чтобы честно перевести долларовые цены в лари.</Paragraph>
            <Action>Searched the web for “USD to GEL exchange rate today Georgian lari”</Action>
            <Paragraph>
                Курс сейчас ≈ 2,64 лари за доллар (по нескольким источникам). Перевёл все цены в лари. Вот письмо для Дага.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Письмо готово - выше, можно копировать.</Paragraph>
            <Paragraph>
                Что я в нём сделал: не называл конкретные фирмы, где не нужно - написал просто «около десяти, из них и
                компании, и русскоязычные частные бухгалтеры в Telegram». Все цены свёл в лари по курсу ~2,64. Кратко дал
                вывод: дешёвые варианты (до ~132 лари) не подтвердили обратный НДС, а внятно его закрыли только Tbilisi
                Expat и Polaris - при этом Polaris на 100 лари дешевле за то же самое. В конце - вопрос Дагу и просьба
                разрешения ответить Polaris о готовности двигаться дальше.
            </Paragraph>
            <Paragraph>
                Одно уточнение для честности: цену частного бухгалтера (Lotman/Relocup) я в письме подал как подтверждённую,
                но помни - именно у него ответ про обратный НДС был уклончивый, так что в письме он и попадает в категорию
                «дёшево, но не закрыли главный вопрос». Это соответствует действительности.
            </Paragraph>
            <Paragraph>Как Даг ответит - скажи, и я либо напишу Polaris о старте, либо скорректируем.</Paragraph>
        </Message>
        <Message
            at="2026-07-02T07:13:33.716284Z"
        >
            <Origin>019f21ac-fb4c-7e1e-a1e4-fd9112d9d158</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>переведи для меня на русский</Paragraph>
        </Message>
        <Message
            at="2026-07-02T07:13:43.981887Z"
        >
            <Origin>019f21ac-fb4c-7078-9bb1-69ef1cf5e731</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Перевод письма для Дага:</Paragraph>
            <Paragraph>Привет, Даг,</Paragraph>
            <Paragraph>
                Коротко по поиску бухгалтера для моего ИП. Я обратилась примерно в десять мест - это и полноценные фирмы, и
                русскоязычные частные бухгалтеры, работающие через Telegram. Пятеро пока ответили.
            </Paragraph>
            <Paragraph>Цены, всё переведено в лари, чтобы не путаться с долларами (курс ~2,64):</Paragraph>
            <Paragraph>
                <List />
                <Line>Частный бухгалтер (Telegram): ~80 лари/мес за нулевой месяц, ~105 лари/мес с доходом</Line>
                <Line>Espero: ~132 лари/мес, или ~99 лари/мес на годовом плане</Line>
                <Line>Georgia Assistant: 150 лари/мес</Line>
                <Line>Polaris Finance: 150 лари/мес</Line>
                <Line>Tbilisi Expat: 250 лари/мес</Line>
            </Paragraph>
            <Paragraph>Для сравнения, ExpatHub (тот, что мы уже знали) был 200 лари/мес.</Paragraph>
            <Paragraph>
                Моё мнение: самые дешёвые варианты заманчивы, но те, что дешевле ~132 лари, либо ушли от ответа, либо вообще
                не затронули вопрос, который для меня реально важен - обратный НДС на услуги, которые я покупаю у
                иностранных компаний (комиссии Fiverr, софт и т.д.). Это реальная обязанность, и мне не нужен бухгалтер,
                который её не ведёт.
            </Paragraph>
            <Paragraph>
                Только две фирмы чётко подтвердили, что ведут обратный НДС и подают всё сами: Tbilisi Expat и Polaris.
                Polaris на 100 лари/мес дешевле, чем Tbilisi Expat, за то же самое. Их ответ был на английском, конкретный,
                по пунктам прошёлся по всем моим вопросам - они подают декларации за меня через портал Revenue Service
                каждый месяц и дают выделенного бухгалтера. Так что мы склоняемся к Polaris: 150 лари/мес, делают всё,
                понимают мой профиль, с ними легко общаться.
            </Paragraph>
            <Paragraph>
                Что думаешь? Если ты за, могу я ответить им, что мы хотим двигаться дальше? Они предложили короткий
                онбординг-звонок и договор.
            </Paragraph>
            <Paragraph>Аня</Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:15:28.343011Z"
        >
            <Origin>019f22c1-614f-7b30-8fb5-ac87dba052f8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, я получила еще одно письмо от бухшалетра. оно что-то меняет в нашей раскладке?</Paragraph>
            <Paragraph>
                contact@ester.ge 12:28 PM (3 hours ago) to eteri.sudadze, me Hello Ana, Thank you for contacting us. Please
                find the answers to your questions below: Our accounting service starts from 300 GEL per month. Yes, you
                can. However, if you purchase services from non-resident (foreign) companies, I would recommend registering
                as a VAT payer. This allows you to reclaim input VAT and, in many cases, reduces the overall VAT cost
                compared to paying reverse VAT without being VAT registered. If your Individual Entrepreneur status is
                inactive and no business transactions are taking place, you do not need to submit monthly nil declarations.
                You only need to make sure that your status remains inactive. You should submit your June declaration. The
                filing period is 1 July - 15 July. We will prepare and submit your tax declarations and also take care of
                the bookkeeping for your business. Our basic accounting package for a Small Business Individual Entrepreneur
                includes: Preparation and submission of the monthly Small Business tax declaration Simple bookkeeping
                Monthly reporting Document control and accounting checklist guidance Ongoing compliance monitoring and
                proactive tax guidance Communication with the Revenue Service, including support if any questions arise
                Ongoing accounting and tax consultations (included in the monthly fee) The monthly fee depends on the number
                of transactions and the overall workload, and starts from 300 GEL. If your Individual Entrepreneur is
                registered as a VAT payer, monthly VAT declarations are also required, so the accounting fee will be higher.
                If you are interested in working with us, I'd be happy to arrange a meeting to discuss your business and
                recommend the most suitable accounting package for your needs. I look forward to hearing from you. Kind
                regards,
            </Paragraph>
            <Paragraph>Logo Eteri Sudadze Chief Accountant</Paragraph>
            <Paragraph>
                Icon +995 599 06 68 28 Icon contact@ester.ge Icon <Word>
                    <Reference>https://www.ester.ge</Reference>
                    www.ester.ge
                </Word>
            </Paragraph>
            <Paragraph>Icon  Icon  Icon</Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:16:39.449596Z"
        >
            <Origin>019f22c1-6150-7ca2-9a02-57f51a659c9c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Обновляю Ester в трекере, потом разберём, меняет ли это картину.</Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Короткий ответ: лидера не меняет, но добавляет один по-настоящему ценный пункт, который стоит проверить
                перед тем, как подписываться с Polaris.
            </Paragraph>
            <Paragraph>Разберу по существу.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По цене - нет.
                </Word> Ester начинается от 300 лари/мес, вдвое дороже Polaris и дороже всех, кого мы видели. Как замена
                Polaris по соотношению цена/качество это не проходит.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По экспертизе - это самый сильный ответ.
                </Word> Ester единственные не просто сказали «да, ведём обратный НДС», а подняли стратегический вопрос:
                возможно, тебе выгоднее <Word>
                    <Bold />
                    зарегистрироваться плательщиком НДС
                </Word>, чтобы зачитывать входной НДС, вместо того чтобы просто платить обратный НДС без регистрации. Это
                уровень налогового планирования, а не отписка. Ответ выдаёт настоящего специалиста (главный бухгалтер,
                развёрнутый пакет с консультациями и связью с Revenue Service).
            </Paragraph>
            <Paragraph>
                Но тут нужна осторожность, и я не твой налоговый советник, поэтому говорю как есть, без окончательного
                вердикта:
            </Paragraph>
            <Paragraph>
                Идея с НДС-регистрацией <Word>
                    <Bold />
                    не однозначно хороша
                </Word> для твоего случая. Твои продажи - экспорт услуг иностранным клиентам (иллюстрация/картография), а
                это обычно вне грузинского НДС или по нулевой ставке. Твой входной обратный НДС возникает на покупках у
                нерезидентов (комиссии Fiverr, софт). Регистрация плательщиком НДС дала бы право на зачёт входного НДС, но
                добавила бы <Word>
                    <Bold />
                    ежемесячные НДС-декларации и отдельную отчётность
                </Word>, а также усложнила бы взаимодействие со статусом малого бизнеса. Выгодно это или нет - зависит от
                <Word>
                    <Bold />
                    объёма твоих покупок у нерезидентов
                </Word>: чем он больше, тем сильнее аргумент за регистрацию. Это ровно то, что хороший бухгалтер должен
                посчитать под твои конкретные цифры, а не решать по общему правилу. Ester как раз предлагает встречу, чтобы
                подобрать пакет - но за 300 лари/мес.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Один нюанс про нулевые:
                </Word> Ester сказали, что при <Word>
                    <Emphasis />
                    неактивном
                </Word> ИП без операций нулевые декларации не нужны - надо лишь держать статус неактивным. Это отличается от
                того, что говорили остальные («да, подаём нулевые»). Противоречия тут нет: у тебя ИП <Word>
                    <Bold />
                    активно
                </Word> и с доходом, так что подавать всё равно нужно. Но это ещё раз показывает, что Ester отвечают точно,
                различая сценарии.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мой вывод:
                </Word> Polaris остаётся лидером по цене и качеству. Ester не стоит своих 300 лари как ежемесячный бухгалтер
                для твоего пока небольшого потока. Но их вопрос про НДС-регистрацию я бы <Word>
                    <Bold />
                    не выбрасывала
                </Word> - это единственная реально новая мысль за всю переписку. Разумный ход: перед подписанием с Polaris
                задать им прямой вопрос - «стоит ли мне при моём профиле (экспорт услуг + покупки у нерезидентов)
                регистрироваться плательщиком НДС, или обратного НДС без регистрации достаточно?». Если Polaris ответят так
                же вдумчиво, как Ester, - это подтвердит, что они тебе подходят, и ты получишь ту же экспертизу за 150, а не
                за 300.
            </Paragraph>
            <Paragraph>
                Хочешь, добавлю этот вопрос про НДС-регистрацию в письмо к Polaris, когда будем писать им о старте?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:17:22.769123Z"
        >
            <Origin>019f22c3-20e7-7676-9c21-a067bd374a85</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Я хочу написать сообщение в Polaris с тем, чтобы начать с ними сотрудничество. помоги мне, пожалуйста
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:18:00.770884Z"
        >
            <Origin>019f22c3-20e7-71f6-b6f9-d391a9a0f502</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Polaris писали по-английски, поэтому ответ им - тоже на английском. Я включил туда и тот самый
                вопрос про НДС-регистрацию: он заодно проверит, отвечают ли они так же вдумчиво, как Ester, и даст тебе
                стратегию за 150, а не за 300.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Сделал два варианта:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Старт + вопрос про НДС
                </Word> - основной. Подтверждаешь, что готова работать, просишь время для звонка и договор, и заодно задаёшь
                вопрос про НДС-регистрацию (тот самый, что подняла Ester). Плюс спрашиваешь, что им нужно от тебя для
                старта. Я бы отправила именно этот - вопрос про НДС ничего не стоит, а пользу может дать большую.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Только старт
                </Word> - если не хочешь смешивать в первом письме и предпочитаешь задать вопрос про НДС уже на звонке. Тоже
                спрашивает про необходимые документы.
            </Paragraph>
            <Paragraph>
                Оба короткие и по делу, подпись «Best regards, Ana». Если хочешь потеплее или, наоборот, ещё суше - скажи,
                подправлю.
            </Paragraph>
            <Paragraph>
                Когда договоришься и пойдёт онбординг, могу помочь подготовить то, что они запросят (доступ к порталу RS,
                выписки Credo, список расходов у нерезидентов для обратного НДС) - чтобы первая декларация за июнь ушла в
                срок до 15 июля.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:19:39.852872Z"
        >
            <Origin>019f22c5-3725-712f-96ad-0fed58578865</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>переведи для моей проверки</Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:19:49.128981Z"
        >
            <Origin>019f22c5-3725-7372-adcb-d9b48399f946</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Перевод основного варианта (Старт + вопрос про НДС) для проверки:</Paragraph>
            <Paragraph>Здравствуйте, Nini,</Paragraph>
            <Paragraph>
                Спасибо - это именно то, на что я надеялась, ваши ответы были ясными и обнадёживающими. Я хотела бы
                двигаться дальше и работать с вами.
            </Paragraph>
            <Paragraph>
                Короткий онбординг-звонок мне вполне подходит. Не могли бы вы сообщить, когда вам удобно на этой неделе, и
                прислать договор, когда будет удобно?
            </Paragraph>
            <Paragraph>
                Один момент, по которому мне было бы ценно ваше мнение, учитывая мой профиль: мой доход - это услуги,
                экспортируемые иностранным клиентам (Fiverr, лаборатория в США, сток-площадки), тогда как обратный НДС у
                меня возникает именно на покупках у нерезидентов (комиссии Fiverr, подписки на софт). Порекомендовали бы вы
                мне зарегистрироваться плательщиком НДС, чтобы зачитывать входной НДС, или при моём текущем объёме лучше
                платить обратный НДС без регистрации? Мне хотелось бы понять этот компромисс применительно к моей конкретной
                ситуации.
            </Paragraph>
            <Paragraph>
                Также, не могли бы вы сообщить, что вам понадобится от меня для старта - документы, доступ к порталу Revenue
                Service, банковские выписки и так далее?
            </Paragraph>
            <Paragraph>Жду возможности поработать с вами.</Paragraph>
            <Paragraph>С уважением, Аня</Paragraph>
            <Paragraph>
                Если решишь отправлять вариант «Только старт» (без вопроса про НДС) - переведу и его. И если хочешь, чтобы
                по-русски или по-английски звучало теплее/суше, скажи, поправлю оба.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:22:02.678799Z"
        >
            <Origin>019f22c7-6675-7398-a5dc-64c5828507c9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, мне нужно разобраться с этим вопросом с нуля. Я не хочу говорить им ничего в этом письме. Если честно,
                я пока сама не разобралась, и мне желательно понять их мнение. давай перепишем письмо, пока просто
                подтвердив, что я хочу работать с ними, и готова на созвон. Напиши, что я сейчас в Батуми, реально ли мне
                подписать договорт так? напиши, что в Тбилиси мой муж, он может тоже подписать договор, если необходимо.
                напии, что я хотела бы узнать их мнение про НДС.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-02T12:22:33.759066Z"
        >
            <Origin>019f22c7-6675-7c63-b71d-5a9c24856d4a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Переписал - коротко, без разбора НДС по существу, только просьба узнать их мнение. Добавил про
                Батуми, удалённое подписание и мужа в Тбилиси.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Готово. И сразу перевод для твоей проверки:</Paragraph>
            <Paragraph>Здравствуйте, Nini,</Paragraph>
            <Paragraph>
                Спасибо - ваши ответы были ясными и обнадёживающими, и я хотела бы двигаться дальше и работать с вами.
                Короткий онбординг-звонок мне вполне подходит; сообщите, пожалуйста, когда вам удобно на этой неделе.
            </Paragraph>
            <Paragraph>
                Один практический вопрос про подписание: сейчас я нахожусь в Батуми, а мой муж - в Тбилиси. Возможно ли мне
                подписать договор удалённо из Батуми? Если так проще, договор мог бы вместо меня подписать мой муж в Тбилиси
                - как удобнее с вашей стороны.
            </Paragraph>
            <Paragraph>
                Также я хотела бы услышать ваше мнение по вопросу НДС в моей ситуации - можем разобрать это на звонке.
            </Paragraph>
            <Paragraph>И не могли бы вы сообщить, что вам понадобится от меня для старта?</Paragraph>
            <Paragraph>Жду возможности поработать с вами.</Paragraph>
            <Paragraph>С уважением, Аня</Paragraph>
            <Paragraph>
                Про НДС намеренно оставил одну мягкую фразу - «хотела бы услышать ваше мнение», без каких-либо своих
                выводов. Так ты ничего не утверждаешь, а просто выносишь тему на созвон, где они сами всё объяснят под твои
                цифры. Если хочешь убрать её совсем или, наоборот, чуть конкретнее обозначить - скажи.
            </Paragraph>
        </Message>
    </Chapter>
);

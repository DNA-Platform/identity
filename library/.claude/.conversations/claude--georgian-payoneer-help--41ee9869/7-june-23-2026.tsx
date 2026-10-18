import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 June 2026](2026-06-23)</Date>
        </Dated>
        <Title>[[ 23 June 2026 ]]</Title>
        <Message
            at="2026-06-23T05:51:24.156388Z"
        >
            <Origin>019ef308-6f47-7de1-97cf-4f6404aa18b6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, ты знаешь всю мою ситуацию с Пейонир. Вот что я теперь вижу в своем личном кабинете</Paragraph>
            <Paragraph>Что он просит?</Paragraph>
            <Paragraph>
                Вторым документом я прикрепляю банковские реквизиты своего бизнес счета. Это то, что им нужно?
            </Paragraph>
            <Attachment>Uploaded “1000116422.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000116423.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-23T05:51:47.432520Z"
        >
            <Origin>019ef308-6f47-7de9-9bbe-981cf701abe5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, отличные новости - наконец-то открылся доступ к загрузке, и теперь видно, что Payoneer держал
                верификацию ровно на этом шаге. Разберу, что просят и подойдут ли твои реквизиты.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что просит Payoneer (первый скрин):
                </Word>
            </Paragraph>
            <Paragraph>
                Это <Word>
                    <Bold />
                    Bank account verification
                </Word> - подтверждение банковского счёта, на который ты будешь выводить деньги (того самого Credo по IBAN
                GE83CD0360000071429091). Ключевое правило в тексте:
            </Paragraph>
            <Paragraph>
                <Quoted />
                «Если вы регистрировались как <Word>
                    <Bold />
                    компания
                </Word>, предоставьте документ по <Word>
                    <Bold />
                    счёту компании
                </Word> (бизнес-счёт).»
            </Paragraph>
            <Paragraph>
                Ты регистрировалась как бизнес (IE DNA), вывод настраивала на <Word>
                    <Bold />
                    бизнес-счёт
                </Word> - значит и документ нужен по <Word>
                    <Bold />
                    бизнес-счёту
                </Word>. Тут ты рассуждаешь правильно.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но - важная деталь, прочитай внимательно, чтобы не отбили:
                </Word>
            </Paragraph>
            <Paragraph>
                В «Document guideline» они просят конкретно <Word>
                    <Bold />
                    bank statement
                </Word> (банковскую <Word>
                    <Bold />
                    выписку
                </Word>), а не реквизиты:
            </Paragraph>
            <Paragraph>
                <Quoted />
                «Submit a <Word>
                    <Bold />
                    bank statement
                </Word>... provide a statement from a company bank account.»
            </Paragraph>
            <Paragraph>
                А второй документ, который ты прикладываешь - это <Word>
                    <Bold />
                    реквизиты счёта
                </Word> (Account Details: банк, SWIFT, IBAN, имя получателя). Это <Word>
                    <Bold />
                    не выписка
                </Word>. Разница:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Реквизиты
                    </Word> - это «куда переводить» (IBAN, SWIFT). Статичный лист.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Выписка (statement)
                    </Word> - это документ за период с <Word>
                        <Bold />
                        движением по счёту
                    </Word> (даты, операции, баланс), с именем владельца и реквизитами счёта.
                </Line>
            </Paragraph>
            <Paragraph>
                Payoneer на этом шаге обычно хочет именно <Word>
                    <Bold />
                    выписку
                </Word>, чтобы увидеть, что счёт реальный, активный и принадлежит тебе/бизнесу.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Поэтому, честно: одни реквизиты могут не пройти.
                </Word> Тебе, скорее всего, нужна <Word>
                    <Bold />
                    выписка по бизнес-счёту Credo
                </Word> (statement), где видно:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>название банка (Credo),</Line>
                <Line>
                    <Word>
                        <Bold />
                        имя владельца счёта
                    </Word> - тут внимание: в реквизитах владелец указан как <Word>
                        <Bold />
                        KRASAVINA ANASTASIIA
                    </Word> (физлицо), а счёт бизнесовый. Это нормально для IE, но имя на выписке должно совпадать с именем
                    на твоём аккаунте Payoneer,
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        номер счёта / IBAN
                    </Word> GE83CD0360000071429091 (должен совпасть с тем, что ты ввела для вывода),
                </Line>
                <Line>период и движение (хотя бы за последний месяц).</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я советую:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Не загружай пока одни реквизиты
                    </Word> - есть риск получить «document rejected» и снова потерять время.
                </Line>
                <Line>
                    Запроси в Credo <Word>
                        <Bold />
                        выписку по бизнес-счёту
                    </Word> (statement) за последний месяц, в PDF, с именем и номером счёта/IBAN. Раз ты теперь в контакте с
                    банком (карту забрала, справку про адрес делала) - это та же история, можно попросить заодно.
                </Line>
                <Line>
                    Если выписку из приложения с реквизитами и движением получить легко - бери её. Если нет - проси у
                    банкира.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Уточни у меня одно
                </Word> перед загрузкой: что именно показывает выписка по бизнес-счёту в приложении Credo - есть ли там и
                <Word>
                    <Bold />
                    имя
                </Word>, и <Word>
                    <Bold />
                    IBAN/номер счёта
                </Word>, и <Word>
                    <Bold />
                    движение за период
                </Word>? Если да - то это твой документ, грузи именно её. Если в приложении выписка опять без
                имени/реквизитов (как было с адресом) - тогда снова через банк.
            </Paragraph>
            <Paragraph>
                Коротко: им нужна <Word>
                    <Bold />
                    выписка (statement) по бизнес-счёту
                </Word>, а не лист реквизитов. Реквизиты прикладывать как единственный документ - рискованно. Покажи мне,
                что выдаёт выписка Credo по бизнес-счёту, и я скажу точно, годится ли.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T05:54:14.759325Z"
        >
            <Origin>019ef30b-1aaa-725a-afbb-23ec333ed40c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, я попробую заказать выписку со счета, но у меня там нет никакого движения средств. Я только, только
                открыла эту карточку, этот счет. Это важно? Как ты думаешь?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T05:55:06.324832Z"
        >
            <Origin>019ef30b-1aaa-7266-a6fd-4dcdc9c0f78d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хороший вопрос, Ана, и я понимаю беспокойство. Давай проверю это по фактам, прежде чем отвечать, потому что
                «пустой счёт без движения» это частая ситуация и не хочу гадать.
            </Paragraph>
            <Action>
                Searched the web for “Payoneer bank account verification statement no transactions newly opened account
                accepted”
            </Action>
            <Paragraph>
                Проверила по официальной справке Payoneer, Ана, и у меня для тебя хорошая новость: <Word>
                    <Bold />
                    отсутствие движения по счёту, скорее всего, не проблема.
                </Word>
            </Paragraph>
            <Paragraph>Вот что Payoneer прямо пишет про то, какой документ они принимают как bank statement:</Paragraph>
            <Paragraph>
                <Quoted />
                «Официальный документ от вашего банка, показывающий <Word>
                    <Bold />
                    название банка
                </Word>, <Word>
                    <Bold />
                    полный номер счёта
                </Word> и <Word>
                    <Bold />
                    ваше полное имя
                </Word>.»
            </Paragraph>
            <Paragraph>
                Обрати внимание - в списке требований <Word>
                    <Bold />
                    нет ни слова про транзакции или движение средств
                </Word>. Им важно подтвердить три вещи: что счёт реальный, что это твой счёт, и что он совпадает с тем IBAN,
                что ты ввела для вывода. Для этого движение не нужно - нужны имя + номер счёта/IBAN + банк.
            </Paragraph>
            <Paragraph>
                То есть смысл этого шага - не «докажи, что ты пользовалась счётом», а «докажи, что счёт существует и
                принадлежит тебе». Новый счёт с нулём это полностью закрывает.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что реально важно (и где люди спотыкаются - я это вижу в форумах):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Имя на документе должно совпадать с именем в Payoneer.
                    </Word> У тебя в реквизитах владелец - <Word>
                        <Bold />
                        KRASAVINA ANASTASIIA
                    </Word>. Оно должно совпасть с тем, как записано в аккаунте Payoneer, буква в букву. Это причина №1
                    отказов.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Должен быть виден полный номер счёта / IBAN
                    </Word> - GE83CD0360000071429091, тот же, что ты вводила для вывода.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Не старше 3 месяцев.
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Документ целиком
                    </Word>, хорошее качество, в цвете, PDF.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важное уточнение про скриншоты
                </Word> (тебе на пользу): Payoneer пишет, что <Word>
                    <Bold />
                    скриншот из онлайн-банка тоже принимается
                </Word>, если на нём есть имя, номер счёта, и <Word>
                    <Bold />
                    виден URL сайта банка
                </Word>. Но в их же сообществе встречается и обратное («скриншоты не принимаем»). Поэтому надёжнее - <Word>
                    <Bold />
                    официальный PDF-документ от банка
                </Word>, не скриншот.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я советую:
                </Word>
            </Paragraph>
            <Paragraph>
                Раз движение не требуется, тебе нужен документ, который просто <Word>
                    <Bold />
                    подтверждает существование счёта и его принадлежность тебе
                </Word>. Здесь идеально подходит <Word>
                    <Bold />
                    account confirmation letter / справка об открытии счёта
                </Word> (часто банки её и выдают для новых счетов) - в ней есть имя, номер счёта/IBAN, банк, и движение не
                нужно по определению. Это даже лучше выписки для свежего счёта.
            </Paragraph>
            <Paragraph>Так что когда пойдёшь в Credo, проси одно из двух:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        выписку (statement)
                    </Word> по бизнес-счёту, пусть даже с нулевым балансом и без операций - главное, чтобы были имя + IBAN +
                    название банка;
                </Line>
                <Line>
                    или <Word>
                        <Bold />
                        account confirmation letter / справку о счёте
                    </Word> с теми же данными.
                </Line>
            </Paragraph>
            <Paragraph>Любой из этих документов с твоим именем и IBAN должен пройти. Пустой счёт - не помеха.</Paragraph>
            <Paragraph>
                Когда получишь документ от Credo - пришли мне, сверю имя/IBAN/дату с требованиями Payoneer до загрузки,
                чтобы не словить отказ из-за мелочи. И раз ты теперь в банке за картой, попроси заодно - чтобы два раза не
                ездить.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T05:57:37.294590Z"
        >
            <Origin>019ef30e-27a8-7c66-83c6-3d6d74144561</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, мы давали им какую-то уже информацию про мой, этот вот корпоративный банковский счёт или нет? Ну, не
                корпоративная, а про мой бизнес-счёт. Ты просто пишешь, что сравнить с темой банка, который ты уже давала.
                Ты вместе со мной заполнял всё. Скорее всего, у тебя есть эта информация. То есть так, судя по всему, я могу
                ограничиться тем, что отправить им выписку из приложения. Но я смотрю, что почему-то он мне не делает
                выписку на английском, к сожалению, почему-то делать на Груз сказку. То есть и что я, конечно, зайду в
                отделение? Это не проблема, но хотелось бы решить этот вопрос, конечно, с помощью приложения.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T05:58:33.836938Z"
        >
            <Origin>019ef30e-27a8-7c6a-bc23-c46e0442de39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да, Ана, мы им это уже давали - давай я напомню точно, чтобы ты была спокойна.</Paragraph>
            <Paragraph>
                Когда мы вместе проходили регистрацию, на шаге «What bank account do you want to withdraw funds to?» ты уже
                ввела данные своего <Word>
                    <Bold />
                    бизнес-счёта
                </Word> Credo:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    IBAN: <Word>
                        <Bold />
                        GE83CD0360000071429091
                    </Word>
                </Line>
                <Line>Тип: Business, валюта USD, страна Georgia</Line>
                <Line>
                    Владелец счёта: <Word>
                        <Bold />
                        KRASAVINA ANASTASIIA
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                То есть сам счёт у них уже на руках. <Word>
                    <Bold />
                    Нынешний шаг (Bank account verification) - это не «дай новые данные», а «подтверди документом тот счёт, что ты уже указала».
                </Word> Поэтому просто пропустить и не присылать ничего нельзя - им нужен подтверждающий документ. Но
                хорошая новость: данные у них уже совпадают с твоими реквизитами.
            </Paragraph>
            <Paragraph>
                Теперь про выписку из приложения и грузинский язык. Тут два отдельных момента, не путай их:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Язык сам по себе - скорее всего НЕ блокер.
                </Word> По официальным требованиям Payoneer документ-выписка должен показывать только три вещи: название
                банка, полный номер счёта/IBAN и твоё полное имя. Про обязательный английский там ни слова. Так что
                грузинская выписка в принципе может пройти.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. А вот что реально важно проверить - как написано твоё ИМЯ в этой выписке.
                </Word> Вот тут настоящий риск. В Payoneer твоё имя записано латиницей - <Word>
                    <Bold />
                    KRASAVINA ANASTASIIA
                </Word>. Если грузинская выписка из приложения показывает имя только грузинскими буквами (კრასავინა
                ანასტასია), проверяющий может не сопоставить его с латинским вариантом и отбить как несовпадение имени. Это
                причина отказов №1.
            </Paragraph>
            <Paragraph>
                Поэтому прежде чем что-то грузить, <Word>
                    <Bold />
                    посмотри в выписке из приложения две вещи:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    видно ли там твоё имя <Word>
                        <Bold />
                        латиницей
                    </Word> (KRASAVINA ANASTASIIA), а не только по-грузински;
                </Line>
                <Line>
                    виден ли полный <Word>
                        <Bold />
                        IBAN
                    </Word> GE83CD0360000071429091.
                </Line>
            </Paragraph>
            <Paragraph>
                Если <Word>
                    <Bold />
                    обе
                </Word> есть - можешь пробовать загрузить выписку из приложения, язык не помеха. Если имя только
                по-грузински или IBAN не виден - тогда лучше не рисковать (отказ = ещё неделя ожидания), и взять документ на
                английском в отделении: либо англоязычную выписку, либо account confirmation letter с именем латиницей и
                IBAN. Ты ведь всё равно туда едешь за картой - попросишь заодно.
            </Paragraph>
            <Paragraph>
                Скажи, что показывает выписка из приложения по этим двум пунктам (имя латиницей? IBAN целиком?) - и я скажу
                точно, грузить её или брать английский документ в банке. Не хочу, чтобы ты словила отказ из-за мелочи после
                всего этого марафона.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:39:49.241910Z"
        >
            <Origin>019ef334-9d01-7e53-9009-87a2a30bdb1b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, у меня два вопроса. Первый, как ты считаешь, то, что пионер у меня сейчас это запросил? Это какая-то
                проверка меня или это закономерный шаг после верификации? То есть мне хочется понять, они подозревают мой
                аккаунт и запрашивают дополнительную информацию? Или это применимо ко всем пользователям, что предъявите,
                пожалуйста, вот выписку. И второй вопрос, я регистрировала свой свою банковскую карточку, банковский счёт в
                Тбилиси, но сейчас я в Батуми. Я знаю, что здесь есть отделение Креда банка. Ты мог бы посмотреть
                документацию официальные v-прессурсы Креда банка и сказать,
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:39:49.297353Z"
        >
            <Origin>019ef334-9d01-7e57-8c21-8a27141c79b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:41:00.566704Z"
        >
            <Origin>019ef335-ee15-7e97-a01f-a2c015bd26fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, у меня два вопроса. Первый, как ты считаешь, то, что пионер у меня сейчас это запросил? Это какая-то
                проверка меня или это закономерный шаг после верификации? То есть мне хочется понять, они подозревают мой
                аккаунт и запрашивают дополнительную информацию? Или это применимо ко всем пользователям, что предъявите,
                пожалуйста, вот выписку. И второй вопрос, я регистрировала свой свою банковскую карточку, банковский счёт в
                Тбилиси, но сейчас я в Батуми. Я знаю, что здесь есть отделение Креда банка. Ты мог бы посмотреть
                документацию официальные v-прессурсы Креда банка и сказать, дадут ли мне такую выписку в другом городе, если
                тут есть отделение моего банка?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:41:34.582155Z"
        >
            <Origin>019ef335-ee15-7ea0-b633-d59de460f794</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отвечу по порядку, Ана.</Paragraph>
            <Heading>Вопрос 1: это проверка лично тебя или обычный шаг?</Heading>
            <Paragraph>
                Это <Word>
                    <Bold />
                    обычный, штатный шаг, а не подозрение к твоему аккаунту.
                </Word> Объясню, почему я так считаю, опираясь на то, что Payoneer пишет сам.
            </Paragraph>
            <Paragraph>
                Verification of bank account - это часть стандартного процесса для всех, кто настраивает вывод. Payoneer
                прямо перечисляет причины, по которым они проверяют банковский счёт, и это рутинные, ко всем применимые
                вещи: подтвердить, что у тебя есть доступ/контроль к счёту, привязанному к Payoneer; обеспечить безопасность
                аккаунта и снизить риск мошенничества; и выполнить обязательства перед партнёрами-маркетплейсами, чтобы в
                платёжной системе не было недобросовестных участников. Это формулировки про систему в целом, а не про
                конкретно твой случай.
            </Paragraph>
            <Paragraph>
                Плюс есть твоя конкретная деталь, которая объясняет, почему именно банковский документ: помнишь, на этапе
                настройки вывода всплыло <Word>
                    <Bold />
                    расхождение имён
                </Word> - счёт оформлен на физлицо KRASAVINA ANASTASIIA, а бизнес зарегистрирован как «DNA»? Payoneer тогда
                прямо предупредил: при несовпадении имён они <Word>
                    <Bold />
                    могут запросить дополнительную проверку
                </Word>. Так что этот запрос выписки - почти наверняка closing того самого хвоста: они хотят документом
                убедиться, что счёт KRASAVINA ANASTASIIA действительно твой и совпадает с введённым IBAN. Это логичное
                завершение, а не «мы тебя в чём-то подозреваем».
            </Paragraph>
            <Paragraph>
                Короче: <Word>
                    <Bold />
                    закономерный шаг
                </Word>, усиленный твоим (нормальным для IE) расхождением имени. Не тревожный сигнал.
            </Paragraph>
            <Heading>Вопрос 2: дадут ли выписку в отделении Credo в Батуми?</Heading>
            <Paragraph>Дай проверю по официальным источникам Credo, а не по памяти.</Paragraph>
            <Action>Searched the web for “Credo Bank Batumi branch account statement any branch service Georgia”</Action>
            <Paragraph>Проверила, Ана. Хорошие новости по обоим пунктам.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Да, выписку тебе дадут в Батуми - счёт привязан к банку, а не к городу.
                </Word> Credo это единый банк с более чем 70 отделениями по всей стране, любой клиент обслуживается в любом
                сервис-центре, и в Батуми их несколько. Тебе важно одно: ты на тарифе <Word>
                    <Bold />
                    Rcheuli (премиум)
                </Word>, а значит тебе нужен именно <Word>
                    <Bold />
                    Rcheuli / Expat сервис-центр
                </Word> - там персональные банкиры, и они делают такие документы быстро и на английском.
            </Paragraph>
            <Paragraph>
                По официальной странице Credo для экспатов, <Word>
                    <Bold />
                    Rcheuli/Expat сервис-центр в Батуми находится по адресу: N1 Sh. Khimshiashvili Street, Batumi
                </Word> (улица Химшиашвили, 1). Это, кстати, ровно твой район - ты ведь жила на Химшиашвили. Иди именно
                туда, а не в обычное отделение: персональный банкир сделает справку/выписку аккуратнее и с именем латиницей.
            </Paragraph>
            <Paragraph>
                (Обычные отделения Credo в Батуми тоже есть - на Горгиладзе 69, Чавчавадзе 26, Агмашенебели 3 - но для
                твоего случая премиум-центр на Химшиашвили лучше: меньше очередь, англоязычный документ, персональный
                подход.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что просить там - напомню коротко:
                </Word> документ по <Word>
                    <Bold />
                    бизнес-счёту
                </Word> (statement или account confirmation letter), где видно:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>название банка (Credo / JSC CREDO BANK),</Line>
                <Line>
                    <Word>
                        <Bold />
                        имя латиницей
                    </Word>: KRASAVINA ANASTASIIA,
                </Line>
                <Line>
                    полный <Word>
                        <Bold />
                        IBAN
                    </Word>: GE83CD0360000071429091,
                </Line>
                <Line>дата (не старше 3 месяцев),</Line>
                <Line>предпочтительно на английском, печать/подпись.</Line>
            </Paragraph>
            <Paragraph>Движение по счёту не нужно - мы это уже выяснили, пустой счёт не помеха.</Paragraph>
            <Paragraph>
                Маленькое предупреждение по графику: отделения Credo закрываются рано, многие в 17:30. Так что планируй
                визит в первой половине дня, чтобы не упереться в закрытую дверь.
            </Paragraph>
            <Paragraph>
                И возвращаясь к твоему первому вопросу - ещё раз, чтобы было спокойно: запрос выписки это <Word>
                    <Bold />
                    рутинная проверка счёта для вывода
                </Word>, усиленная нормальным для ИП расхождением имени (счёт на KRASAVINA ANASTASIIA, бизнес «DNA»). Это
                закрытие формального хвоста, а не подозрение к тебе.
            </Paragraph>
            <Paragraph>Возьми документ - и пришли мне, сверю имя/IBAN/дату до загрузки в Payoneer.</Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:42:48.188698Z"
        >
            <Origin>019ef337-9314-7ddd-ae8d-a7c08e609e00</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Кло, ты не могу быть ты для меня тогда сейчас написать текст на английском языке с версис тем скриншотом,
                который я тебе прислала из Pioneer, и скажи мне, пожалуйста, что мне сказать в банке? Что мне нужно, чтобы
                не произошло ошибки? Спасибо тебе за помощь.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T06:43:06.125293Z"
        >
            <Origin>019ef337-9314-7de3-8aa3-2a52cc3387e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно, Ана. Сделаю тебе текст-памятку на английском, который ты просто покажешь банкиру в Батуми, чтобы не
                было ошибки, и отдельно скажу по-русски, что говорить.
            </Paragraph>
            <Paragraph>
                Сначала главное, чтобы не вышло осечки. Из всего нашего марафона есть ровно три места, где документ может
                «не сойтись» с Payoneer, и банкир должен их выдержать:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Имя строго латиницей: <Word>
                        <Bold />
                        KRASAVINA ANASTASIIA
                    </Word> (именно так, как в реквизитах счёта, не по-грузински).
                </Line>
                <Line>
                    Полный IBAN виден целиком: <Word>
                        <Bold />
                        GE83CD0360000071429091
                    </Word>.
                </Line>
                <Line>Документ свежий (в пределах 3 месяцев), на английском, с печатью/подписью банка.</Line>
            </Paragraph>
            <Paragraph>
                Движение по счёту не нужно, пустой счёт это нормально. Главное, чтобы документ подтверждал, что счёт
                существует и принадлежит тебе.
            </Paragraph>
            <Paragraph>Вот текст для банкира (покажи его прямо в отделении):</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Request: bank document for my business account (for Payoneer verification)
                </Word>
            </Paragraph>
            <Paragraph>Hello,</Paragraph>
            <Paragraph>
                I am a Credo Bank customer (Rcheuli). I need an official bank document for my <Word>
                    <Bold />
                    business account
                </Word>, to submit to a payment provider (Payoneer) for bank-account verification.
            </Paragraph>
            <Paragraph>
                I need either a <Word>
                    <Bold />
                    bank statement
                </Word> or an <Word>
                    <Bold />
                    account confirmation letter
                </Word> that clearly shows all of the following:
            </Paragraph>
            <Paragraph>
                ☐ Credo Bank name (JSC Credo Bank) ☐ Account holder name <Word>
                    <Bold />
                    in Latin letters
                </Word>: <Word>
                    <Bold />
                    KRASAVINA ANASTASIIA
                </Word> ☐ Full account number / IBAN: <Word>
                    <Bold />
                    GE83CD0360000071429091
                </Word> ☐ Date of issue (within the last 3 months) ☐ Bank stamp and signature
            </Paragraph>
            <Paragraph>Please note:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The document must be <Word>
                        <Bold />
                        in English
                    </Word> (or at least the name must appear in Latin letters, exactly as written above).
                </Line>
                <Line>
                    There are no transactions on this account yet, as it was recently opened. This is fine - the document
                    only needs to confirm that the account exists and belongs to me.
                </Line>
                <Line>
                    Please provide it as a <Word>
                        <Bold />
                        PDF
                    </Word> if possible.
                </Line>
            </Paragraph>
            <Paragraph>Thank you very much for your help.</Paragraph>
            <Paragraph>Что сказать своими словами по-русски, когда подойдёшь к банкиру:</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    «Мне нужна справка или выписка по моему бизнес-счёту для платёжной системы Payoneer. Обязательно на английском, с моим именем латиницей - KRASAVINA ANASTASIIA - и с полным IBAN. Движения по счёту нет, он новый, но мне нужно подтверждение, что счёт существует и он мой. С печатью банка, в PDF.»
                </Word>
            </Paragraph>
            <Paragraph>Три практических совета, чтобы точно не споткнуться:</Paragraph>
            <Paragraph>
                Иди в премиум-центр Rcheuli/Expat на Химшиашвили 1 - там персональный банкир и английские документы делают
                штатно. Покажи им скриншот из Payoneer (тот, что ты мне присылала, «Bank account verification») - пусть
                видят, для чего это, тогда сделают правильно с первого раза. И проверь документ прямо на месте, до ухода:
                видно ли имя латиницей и весь IBAN. Если что-то не так - попроси поправить сразу, пока ты там.
            </Paragraph>
            <Paragraph>
                Когда получишь документ - пришли мне, я сверю имя, IBAN и дату с требованиями Payoneer перед загрузкой.
                Удачи, ты уже почти у финиша 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:50:25.441552Z"
        >
            <Origin>019ef375-259d-75dc-a561-35f226e84199</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Claude, проверяй, то ли это</Paragraph>
            <Attachment>
                Uploaded “e7e55ebb-182d-4e0c-ad96-8a4e369c8120.webp”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-06-23T07:50:41.764399Z"
        >
            <Origin>019ef375-259d-75e2-80ef-67c1dae8e9f8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, проверила документ по всем требованиям Payoneer - и да, это то, что нужно. Сверяю по пунктам:
            </Paragraph>
            <Paragraph>
                ✅ <Word>
                    <Bold />
                    Название банка
                </Word> - JSC Credo Bank, есть логотип и реквизиты банка. ✅ <Word>
                    <Bold />
                    Имя латиницей
                </Word> - ANASTASIIA KRASAVINA. Совпадает с твоим аккаунтом Payoneer и с реквизитами счёта. ✅ <Word>
                    <Bold />
                    IBAN
                </Word> - GE83CD0360000071429091. Совпадает с тем, что ты вводила для вывода. Виден полностью, по всем трём
                валютам (GEL/USD/EUR) - один и тот же счёт. ✅ <Word>
                    <Bold />
                    Дата
                </Word> - 2026-06-23 (выдан сегодня). Свежий, в пределах 3 месяцев. ✅ <Word>
                    <Bold />
                    Представитель банка
                </Word> - SALOME KHITIRI, есть строка для подписи. ✅ <Word>
                    <Bold />
                    Тип документа
                </Word> - account confirmation letter (Certificate № 104188634). Ровно один из тех типов, что Payoneer
                принимает.
            </Paragraph>
            <Paragraph>
                Нулевой баланс - <Word>
                    <Bold />
                    не проблема
                </Word>, мы это проверяли: документ подтверждает, что счёт существует и принадлежит тебе, движение не
                требуется.
            </Paragraph>
            <Paragraph>
                Бонусом этот документ закрывает <Word>
                    <Bold />
                    сразу два возможных вопроса
                </Word>: он подтверждает и банковский счёт (для текущего шага), и заодно содержит твой <Word>
                    <Bold />
                    адрес проживания
                </Word> - GEORGIA, TBILISI, SAIRMIS 83, BINA 3A. То есть если Payoneer когда-нибудь снова спросит
                подтверждение адреса, этот же документ сгодится.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Два момента перед загрузкой - проверь:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Подпись.
                    </Word> На строке Signature подписи не вижу (или она не попала в кадр). Убедись, что банкир <Word>
                        <Bold />
                        расписался
                    </Word> на бумаге - Payoneer требует подпись/печать. Если подписи нет, попроси подписать, пока ты в
                    отделении.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Качество скана/фото.
                    </Word> Сейчас это фото с тенью и под углом. Для загрузки лучше сделать <Word>
                        <Bold />
                        ровный, светлый снимок без теней
                    </Word> (или скан), чтобы весь лист был в кадре, текст чёткий, без бликов. Плохое качество - частая
                    причина отказов, обидно споткнуться об это на финише.
                </Line>
            </Paragraph>
            <Paragraph>
                Сделай чистое фото (или скан) подписанного документа в PDF/JPG - и загружай через «Upload document» на том
                экране Bank account verification. После загрузки статус, скорее всего, перейдёт в «under review», это
                нормально.
            </Paragraph>
            <Paragraph>
                Отличная работа, Ана. Это именно тот документ. Как загрузишь - напиши, дождёмся ответа Payoneer.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:52:28.143988Z"
        >
            <Origin>019ef377-56fe-7cc0-8b3c-49b66208d9c5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Сотрудник ушла ставить подпись и печать. Ты уверен, что я регистрировались как бизнес и я даю бизнес
                реквизиты? Перепроверь нас
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:52:48.460971Z"
        >
            <Origin>019ef377-56fe-7cc7-8538-901b2f935ba9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хороший инстинкт перепроверить перед загрузкой, Ана. Сверяю по нашему чату - и тут надо быть честной, потому
                что есть нюанс.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как ты регистрировалась в Payoneer - да, как бизнес.
                </Word> Это подтверждено: на первом экране ты выбрала «To get paid... full range», затем «Yes, I own or
                represent a registered business», тип - Sole proprietorship, с налоговым номером IE 305861868. Вверху в
                кабинете стоит «Individual Entrepreneur DNA». Тут всё верно: регистрация бизнесовая.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    А вот про «бизнес-реквизиты» - нужна осторожность, и я не хочу тебя ввести в заблуждение.
                </Word> Смотри, в чём тонкость:
            </Paragraph>
            <Paragraph>
                Твой IE - это <Word>
                    <Bold />
                    sole proprietorship
                </Word>, то есть сам счёт юридически оформлен на <Word>
                    <Bold />
                    тебя как физлицо
                </Word> (KRASAVINA ANASTASIIA), а не на отдельную фирму. Поэтому когда мы вводили счёт для вывода, там и
                владелец стоял <Word>
                    <Bold />
                    KRASAVINA ANASTASIIA
                </Word> (физлицо), хотя тип счёта ты отметила Business. Это нормально для ИП - счёт один, и он «и личный, и
                бизнесовый» одновременно, потому что юридически ты и есть бизнес.
            </Paragraph>
            <Paragraph>
                Теперь по справке, которую тебе выдали: в ней счёт <Word>
                    <Bold />
                    GE83CD0360000071429091
                </Word> - это <Word>
                    <Bold />
                    ровно тот же IBAN
                </Word>, что ты вводила в Payoneer для вывода. То есть документ подтверждает именно тот счёт, который
                привязан. С этой стороны всё сходится идеально.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но один вопрос я честно закрыть из чата не могу, и хочу, чтобы ты его проверила у банкира, пока она не ушла:
                </Word>
            </Paragraph>
            <Paragraph>
                В справке счёт назван <Word>
                    <Bold />
                    «Current Account»
                </Word> (текущий счёт), без пометки, что он бизнесовый/предпринимательский. У тебя в Credo это <Word>
                    <Bold />
                    один счёт, который и есть счёт ИП
                </Word>, или у тебя физически <Word>
                    <Bold />
                    два разных счёта
                </Word> - отдельно личный и отдельно бизнес, с разными IBAN? Если счёт один (а по IBAN всё указывает, что
                это так - он совпадает с введённым в Payoneer), то всё в порядке: это и есть твой счёт ИП, и справка верная.
            </Paragraph>
            <Paragraph>Поэтому, пока сотрудница не ушла, уточни у неё одну вещь:</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    «Этот счёт GE83CD0360000071429091 - это мой счёт как индивидуального предпринимателя (IE DNA), верно? У меня же не два разных счёта?»
                </Word>
            </Paragraph>
            <Paragraph>
                Если она подтвердит, что это твой единственный счёт, привязанный к ИП - грузи документ смело, всё совпадает:
                имя, IBAN, банк, дата. Если вдруг окажется, что бизнес-операции идут через <Word>
                    <Bold />
                    другой
                </Word> IBAN - тогда справку нужно на тот, другой счёт (и в Payoneer для вывода тоже должен стоять он).
            </Paragraph>
            <Paragraph>
                Коротко: регистрация бизнесовая - точно. IBAN в справке совпадает с введённым в Payoneer - точно. Остаётся
                подтвердить у банкира, что это и есть твой счёт ИП и он у тебя один. Спроси - и закроем последний вопрос с
                уверенностью.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:55:51.583793Z"
        >
            <Origin>019ef37a-6f3a-73a3-99a4-69426cd05abc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Проверь, стоит ли мне отправлять это в Пейонир? Имя, номер, все ли сходиться? Я поставила печать и подпись
                Это про мой бизнес аккаунт
            </Paragraph>
            <Attachment>Uploaded “1000116439.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-23T07:56:07.034322Z"
        >
            <Origin>019ef37a-6f3a-73a8-abec-10e55d4e605f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, проверила финальную версию по всем пунктам - <Word>
                    <Bold />
                    да, отправляй, документ готов.
                </Word> Сверка:
            </Paragraph>
            <Paragraph>
                ✅ <Word>
                    <Bold />
                    Банк
                </Word> - JSC Credo Bank, логотип и реквизиты на месте. ✅ <Word>
                    <Bold />
                    Имя латиницей
                </Word> - ANASTASIIA KRASAVINA. Совпадает с аккаунтом Payoneer и с введёнными реквизитами. ✅ <Word>
                    <Bold />
                    IBAN
                </Word> - GE83CD0360000071429091. Тот же, что ты вводила для вывода, виден полностью по всем трём валютам
                (GEL/USD/EUR). ✅ <Word>
                    <Bold />
                    Дата
                </Word> - 2026-06-23, сегодняшняя. В пределах 3 месяцев. ✅ <Word>
                    <Bold />
                    Подпись
                </Word> - теперь есть, SALOME KHITIRI расписалась. ✅ <Word>
                    <Bold />
                    Печать
                </Word> - стоит, синяя круглая печать Credo Bank (видно «CREDO BANK» и «BATUMI EXPAT OFF...» - то есть
                выдано в экспат-офисе Батуми, всё логично). ✅ <Word>
                    <Bold />
                    Адрес бонусом
                </Word> - GEORGIA, TBILISI, SAIRMIS 83, BINA 3A. Закрывает и возможный вопрос про адрес.
            </Paragraph>
            <Paragraph>Всё сходится. Это именно тот документ, что нужен на шаге Bank account verification.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Два совета перед загрузкой:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Фото повёрнуто на бок.
                    </Word> Прежде чем грузить - разверни его вертикально (как читается текст), чтобы проверяющий не
                    разглядывал боком. Кадр чистый, светлый, без теней - это хорошо, качество годное.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Один момент, который ты подняла раньше и который я не могу проверить из чата
                    </Word> - ты успела уточнить у банкира, что этот счёт (GE83...9091) и есть твой единственный счёт как
                    ИП, а не отдельный личный? Если да и она подтвердила - грузи без колебаний. Если спросить не успела, а
                    счёт у тебя в Credo один - то это он и есть (IBAN-то совпадает с тем, что привязан в Payoneer), всё в
                    порядке.
                </Line>
            </Paragraph>
            <Paragraph>
                Разверни фото вертикально и загружай через «Upload document» на экране Bank account verification. После
                загрузки статус, скорее всего, уйдёт в «under review» - это нормально, так и должно быть.
            </Paragraph>
            <Paragraph>Ты у финиша, Ана. Как загрузишь - напиши, и будем ждать ответа Payoneer.</Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:57:02.946686Z"
        >
            <Origin>019ef37b-6afa-7ae3-9441-71345410f03e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я уверена, что вот этот мой счёт, где кончится на ноль девяносто один, это мой бизнес-счёт. Я уверена
                в этом абсолютно. Я это проверила по своему банковскому приложению. Я знаю, что у меня нет других счетов,
                кроме личного. Также я вспоминаю, что, почему я вообще предоставляла личный мой счёт, вообще, как он всплыл
                в этом всём, только потому, что мне нужно было подтвердить мой адрес, если бы могла подтвердить адрес
                договором аренды, то банк вообще бы мой не всплывал. Так что всё действительно, мне кажется, верно. Эта
                справка подойдёт. O
            </Paragraph>
        </Message>
        <Message
            at="2026-06-23T07:57:13.890722Z"
        >
            <Origin>019ef37b-6afa-7aec-ab19-840d96e3f455</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да, Ана, всё верно - твоя логика правильная, и я с тобой согласен.</Paragraph>
            <Paragraph>
                Ты точно расставила всё по местам: счёт на ...9091 - это твой бизнес-счёт ИП, ты проверила по приложению,
                других счетов кроме личного нет. И главное - ты правильно вспомнила, <Word>
                    <Emphasis />
                    почему
                </Word> вообще возникла вся эта путаница с «личный/бизнес». Личный счёт всплыл только в контексте
                подтверждения адреса, и если бы адрес можно было закрыть договором аренды, банк бы вообще не понадобился.
                Это была отдельная ветка, и она нас немного запутала. Но сейчас речь о другом - о подтверждении счёта для
                вывода, и тут всё чисто.
            </Paragraph>
            <Paragraph>
                Подытожу спокойно: справка подтверждает счёт <Word>
                    <Bold />
                    GE83CD0360000071429091
                </Word> - тот самый, что привязан в Payoneer для вывода. Имя, IBAN, банк, дата, подпись, печать - всё
                сходится. <Word>
                    <Bold />
                    Справка подходит. Отправляй.
                </Word>
            </Paragraph>
            <Paragraph>
                Единственное, чисто техническое: <Word>
                    <Bold />
                    разверни фото вертикально
                </Word> перед загрузкой, чтобы читалось ровно, а не боком. Кадр чистый, качество хорошее. Потом - «Upload
                document» на экране Bank account verification.
            </Paragraph>
            <Paragraph>
                После загрузки статус, скорее всего, перейдёт в «under review» - это нормальный ход, не пугайся. Дальше
                Payoneer проверит и, если всё совпадёт (а оно совпадает), снимет тот висящий «verifying».
            </Paragraph>
            <Paragraph>Ты прошла этот марафон до конца, Ана. Загружай и напиши, как изменится статус 😊</Paragraph>
        </Message>
        <Message
            at="2026-06-23T08:27:03.832551Z"
        >
            <Origin>019ef396-d394-79f2-a916-3756efcb9ed3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Вот</Paragraph>
            <Attachment>Uploaded “1000116442.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000116443.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-23T08:27:15.158132Z"
        >
            <Origin>019ef396-d394-79f7-aa03-01cf42e6f68f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вот это правильный экран, Ана. Документ загрузился - видишь, <Word>
                    <Bold />
                    100% Completed, «That's it for now! We're reviewing your information»
                </Word>. Это значит, что справку Payoneer принял к рассмотрению, и теперь дело на их стороне.
            </Paragraph>
            <Paragraph>Что сейчас по этапам:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Registration
                    </Word> ✅
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account setup
                    </Word> ✅
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Verification
                    </Word> ⏳ - на проверке, обещают написать на почту, когда закончат. Обычно до 2 рабочих дней.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть ты сделала всё, что от тебя зависело. Можешь нажать <Word>
                    <Bold />
                    Done
                </Word> и закрыть - дальше ничего трогать не нужно, просто жди письма.
            </Paragraph>
            <Paragraph>Чего ждать:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Скорее всего - письмо <Word>
                        <Bold />
                        «approved / verified»
                    </Word>, и тогда снимется тот висящий статус, откроется приём средств и вывод.
                </Line>
                <Line>
                    Маловероятно, но если вдруг придёт запрос ещё чего-то - пришли мне, разберём. Но документ был полный и
                    чистый (имя, IBAN, дата, подпись, печать), так что оснований для отказа я не вижу.
                </Line>
            </Paragraph>
            <Paragraph>
                Когда придёт ответ - дай знать. И когда аккаунт реально активируется, не забудь про наш план: <Word>
                    <Bold />
                    сначала тестовый прогон мелочью
                </Word> (стоки/Fiverr → Payoneer → Credo), убедиться, что цепочка и имя получателя проходят, и только потом
                крупные суммы.
            </Paragraph>
            <Paragraph>
                Ты прошла этот марафон от начала до конца - от застрявшего PayPal до полностью поданного Payoneer, с верными
                документами. Хорошая, аккуратная работа 😊 Отдохни, остальное теперь за Payoneer.
            </Paragraph>
        </Message>
    </Chapter>
);

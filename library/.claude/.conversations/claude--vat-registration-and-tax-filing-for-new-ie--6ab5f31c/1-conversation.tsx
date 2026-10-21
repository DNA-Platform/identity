import { Append, Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-09T15:56:17.820621Z"
        >
            <Origin>019ead19-4a89-7679-aa4d-7971b806f6e2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana filed for an IE with expat hub a week ago. She has a bank account with credo bank for the business, even
                though it's not quite a business. Expat hub gave a quickstart guide:
            </Paragraph>
            <Paragraph>
                WHat is the VAT registration. Does ana have to file taxes by the 15th of this month even though the company
                is so new? If she has to do that on her own, what will she have to do?
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-09T15:57:53.513406Z"
        >
            <Origin>019ead19-4a89-7b3c-bf67-3f43461df3d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll work from the ExpatHub guide you've got plus verify the couple of points it leaves implicit, since the
                filing-deadline question hinges on a specific date.
            </Paragraph>
            <Action>
                Searched the web for “Georgia small business status 1% activation month first tax declaration deadline”
            </Action>
            <Paragraph>
                Good questions — and the timing one has a wrinkle that just changed this year, so worth getting precise.
                Taking them in your order.
            </Paragraph>
            <Heading>What VAT registration is</Heading>
            <Paragraph>
                VAT (18% in Georgia) is a separate thing from the 1% small-business status — registering for one has nothing
                to do with the other. Two pieces matter for Ana:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mandatory registration
                </Word> kicks in only if turnover in any rolling 12-month window exceeds 100,000 GEL. The important
                carve-out: services supplied to non-residents are not subject to Georgian VAT and are excluded from the
                100,000 GEL threshold. Ana's income is Fiverr, stock platforms, a US lab — all foreign clients. So that
                turnover essentially doesn't count toward the threshold, and she's unlikely to ever be <Word>
                    <Emphasis />
                    required
                </Word> to register.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Voluntary registration
                </Word> is what the ExpatHub guide is pitching. The point of it is reclaiming <Word>
                    <Bold />
                    reverse-charge VAT
                </Word>. Here's the mechanic that trips people up: any time a Georgian business buys <Word>
                    <Emphasis />
                    services
                </Word> from abroad (software subscriptions, foreign contractors, design tools, etc.), it owes 18% "reverse
                VAT" — and this must be <Word>
                    <Emphasis />
                    declared regardless of whether you're VAT-registered
                </Word>. If you're not registered, you pay that 18% and it's gone. If you are registered, you can claim it
                back. So voluntary VAT registration only pays off if she has meaningful foreign-service purchases (or
                Georgian business expenses with VAT on them) worth recovering — and it comes with extra monthly VAT
                declarations. For a solo illustrator, it's usually not worth the added paperwork unless her software/tooling
                spend abroad is significant. That's a judgment call to run past an accountant, not something to default
                into.
            </Paragraph>
            <Paragraph>
                One thing she <Word>
                    <Emphasis />
                    cannot
                </Word> skip either way: the reverse-VAT declaration on foreign service purchases. That's an obligation
                independent of registration.
            </Paragraph>
            <Heading>Does she have to file by June 15?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Almost certainly not this month — but the answer depends on her exact Small Business Status activation date, which I can't see and you should confirm with ExpatHub.
                </Word>
            </Paragraph>
            <Paragraph>
                The rule changed in early 2026. Under the February 2026 amendments (in force March 7), if an IE requests
                Small Business Status on, say, March 20th, the status is effective from March 20th, and March becomes the
                first accounting period. This replaced the old rule, under which Small Business Status became active on the
                first day of the month following the month of registration.
            </Paragraph>
            <Paragraph>
                So if she applied for SBS roughly a week ago (early June), <Word>
                    <Bold />
                    June is her first accounting period, and her first declaration covers June and is due July 15
                </Word> — not June 15. June 15 would only be a deadline if her status had activated in May.
            </Paragraph>
            <Paragraph>Three caveats worth nailing down:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Confirm with ExpatHub the <Word>
                        <Bold />
                        exact SBS activation date
                    </Word> and her first accounting period. That single date determines everything here.
                </Line>
                <Line>
                    Confirm she actually has <Word>
                        <Bold />
                        Small Business Status
                    </Word>, not just an IE registration. They're separate steps; ExpatHub usually does both together, but
                    it's worth verifying — the 1% scheme and the filing obligation attach to SBS, not the bare IE.
                </Line>
                <Line>
                    Even with no income yet, the first declaration <Word>
                        <Bold />
                        must still be filed
                    </Word> when due. The amendment was explicit that failing to submit the monthly declaration does not
                    count as filing a zero declaration — submission is mandatory even when no tax is payable. So a "we
                    earned nothing" month is a zero declaration she still has to actively submit.
                </Line>
            </Paragraph>
            <Heading>If she's filing herself — what that involves</Heading>
            <Paragraph>
                Your memory of this is right that ExpatHub's ongoing engagement has wrapped, so the monthly filing is now on
                her. Mechanically:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Where:
                    </Word> the Revenue Service portal, rs.ge. Access requires 2-step authentication tied to a Georgian cell
                    phone number — so whoever files needs that phone reachable (relevant if she travels; international
                    roaming or a local proxy filer is the workaround).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Before the first filing:
                    </Word> make sure all her business activities are listed on her Tax Card, per the ExpatHub guide. This
                    is the day-one item.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Each month, by the 15th:
                    </Word> file the 1% income declaration for the prior month and pay the 1% to the treasury from a
                    Georgian bank account (the Credo business account works).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Watch the cumulative column.
                    </Word> On the declaration form, one column is not the current month's figure but the running
                    year-to-date total of every month since January — this is the field people most often get wrong. Income
                    gets converted to GEL.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reverse VAT, as it happens:
                    </Word> any month she buys services from abroad, declare the 18% reverse VAT on those.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Annual:
                    </Word> any non-1% Georgian income gets reported separately, with most annual declarations due around
                    March 31 of the following year.
                </Line>
            </Paragraph>
            <Paragraph>
                The tedious part is genuinely the transaction categorization and the cumulative math from bank statements
                each month — that's the work ExpatHub was doing. If she wants to keep doing it solo, a monthly routine of
                pulling the Credo/Payoneer statement, converting to GEL, and entering the running total is the whole job. If
                it starts eating time or the reverse-VAT side gets murky, that's the point where the ~200 GEL/month
                accountant earns its keep — mainly by moving liability for errors off her.
            </Paragraph>
            <Paragraph>
                Two things I'd verify before relying on any of this for a deadline decision: the exact activation date
                (ExpatHub), and whether borderline work ever risks the 1% status — but on current facts her foreign-client
                illustration work sits cleanly inside it.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T16:02:06.421805Z"
        >
            <Origin>019ead1e-c0de-73e5-919c-4d49cec334cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, это Ана. До этого ты говорил с Дагом, а теперь я хочу follow up не мог бы ты коротко но с важными
                деталями перескаазть мне все, о чем вы говорили с Дагом. Что такое VAT? и что ты рассказал Дагу?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T16:02:26.326451Z"
        >
            <Origin>019ead1e-c0df-7c05-a064-7d6addd58bd4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Привет, Ана. Да, конечно — коротко перескажу.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что такое VAT (НДС).
                </Word> Это налог на добавленную стоимость, в Грузии — 18%. Важно: он отдельно от твоего 1% налога, одно с
                другим никак не связано.
            </Paragraph>
            <Paragraph>Для тебя есть два момента:</Paragraph>
            <Paragraph>
                Обязательная регистрация по НДС наступает, только если оборот за любые 12 месяцев превысит 100 000 GEL. Но
                услуги иностранным клиентам (нерезидентам) в этот порог не входят. У тебя весь доход — Fiverr, стоковые
                площадки, американская лаборатория, то есть иностранные клиенты. Значит, обязательной регистрации у тебя,
                скорее всего, не будет никогда.
            </Paragraph>
            <Paragraph>
                Добровольная регистрация — это то, что предлагает ExpatHub в их гайде. Смысл в одном: когда груз의ский бизнес
                покупает услуги из-за границы (подписки на софт, иностранные подрядчики, дизайн-инструменты), он должен
                платить 18% «обратного НДС» (reverse VAT). Если ты зарегистрирована по НДС — этот налог можно вернуть. Если
                нет — платишь и не возвращаешь. Для тебя как иллюстратора это, скорее всего, не стоит лишней бумажной возни
                — разве что у тебя большие траты на иностранный софт. Это вопрос к бухгалтеру, по умолчанию я бы не лез в
                эту регистрацию.
            </Paragraph>
            <Paragraph>
                И отдельно: обратный НДС нужно декларировать в любом случае, даже без регистрации, если ты покупаешь услуги
                из-за границы. Это обязанность независимо от регистрации.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я сказал Дагу про сроки.
                </Word> Главный вопрос был — нужно ли тебе подавать декларацию до 15 июня, хотя ИП совсем новый.
            </Paragraph>
            <Paragraph>
                Ответ: почти наверняка нет, не в этом месяце. С 2026 года правило изменилось. Раньше статус малого бизнеса
                (SBS) активировался с 1 числа следующего месяца. Теперь — со дня подачи заявления. То есть если ты подала
                заявку на статус примерно неделю назад (начало июня), то июнь — твой первый отчётный период, и первая
                декларация будет за июнь, со сроком до <Word>
                    <Bold />
                    15 июля
                </Word>, а не 15 июня.
            </Paragraph>
            <Paragraph>Но я честно сказал Дагу — это надо подтвердить:</Paragraph>
            <Paragraph>
                <List />
                <Line>точную дату активации статуса SBS у ExpatHub (именно она всё решает);</Line>
                <Line>
                    что у тебя действительно есть статус малого бизнеса, а не только регистрация ИП — это разные шаги;
                </Line>
                <Line>
                    и что даже при нулевом доходе декларацию всё равно нужно подавать вовремя — «не подать» не считается
                    нулевой декларацией.
                </Line>
            </Paragraph>
            <Paragraph>Хочешь, я распишу подробно, как именно подавать декларацию самой на rs.ge — по шагам?</Paragraph>
        </Message>
        <Message
            at="2026-06-09T16:04:15.619764Z"
        >
            <Origin>019ead20-b874-7f26-a86d-334049fc08d8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Ана: Прочитай, пожалуйста, вот эту статью, и подробно перескажи мне ее</Paragraph>
            <Attachment
                identifier="untitled-2"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-09T16:04:51.542259Z"
        >
            <Origin>019ead20-b874-7b05-927f-4d06f2946b0e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно, Ана. Это «Стартовый гайд для ИП» от ExpatHub — для тех, кто только зарегистрировал ИП и статус
                малого бизнеса (SBS). Пересказываю по разделам.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Твои налоговые обязанности — вкратце.
                </Word> Есть две группы.
            </Paragraph>
            <Paragraph>
                Ежемесячно до 15 числа: декларация по подоходному налогу (1%), декларация обратного НДС (reverse VAT —
                только если были такие операции), декларация по НДС (только если ты зарегистрирована как плательщик НДС),
                декларация по удержанному налогу (если есть) и сама уплата налога в казну.
            </Paragraph>
            <Paragraph>
                «По мере возникновения»: 18% обратного НДС при покупке услуг из-за границы (можно вернуть, если ты
                плательщик НДС), 20% подоходного на зарплаты сотрудникам, и ведение общего журнала по правилам бухучёта.
            </Paragraph>
            <Paragraph>
                Всё это подаётся через портал rs.ge. И важная строчка: первая подача должна быть до 15 числа месяца,
                следующего за месяцем активации твоего SBS. И до первой подачи нужно внести все виды деятельности в твою
                налоговую карту (Tax Card).
            </Paragraph>
            <Paragraph>
                (От себя добавлю то, что я проверял для Дага: с 2026 года статус активируется со дня подачи заявления, а не
                с 1 числа следующего месяца. То есть если ты подалась в начале июня — июнь и есть первый период, первая
                декларация до 15 июля. Но точную дату активации надо подтвердить у ExpatHub.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Нужен ли бухгалтер.
                </Word> Можно подавать самой через rs.ge — это законно. Но статья честно предупреждает: если ты ведёшь всё
                сама, вся ответственность за ошибки в декларациях и в учёте — на тебе. Ценность бухгалтера не только в том,
                что он раз в месяц подаёт декларацию, а в том, что он снимает с тебя эту ответственность и заранее
                предупреждает о проблемах. Их услуги для ИП — от 200 GEL в месяц.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Регистрация по НДС.
                </Word> Если твой бизнес обслуживает только иностранные компании, тебе может быть выгодна добровольная
                регистрация по НДС. Она, скорее всего, сэкономит деньги, если: ты ничего не продаёшь внутри Грузии и не
                собираешься; у тебя есть покупки услуг из-за границы (софт, подрядчики); у тебя есть расходы в Грузии с НДС
                (мебель, техника для офиса); и ты продаёшь только бизнесам за рубежом (B2B). Решение надо обсуждать с
                бухгалтером. Важная деталь: регистрацию по НДС нужно запрашивать явно — автоматически тебя никто не
                зарегистрирует.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Покупка услуг из-за границы.
                </Word> Все грузинские бизнесы, покупающие услуги из-за рубежа, обязаны платить обратный НДС (reverse
                charge). Вернуть его можно, только если добровольно зарегистрироваться плательщиком НДС. Но — и это ключевое
                — декларировать обратный НДС нужно в любом случае, зарегистрирована ты или нет. Если покупаешь услуги из-за
                границы и не задекларировала — это нарушение закона с последствиями.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как претендовать на резидентство (ВНЖ) по доходу малого бизнеса.
                </Word> Планировать надо с первого дня, иначе можно пойти по неправильной процедуре и получить отказ или
                лишние расходы. Основные требования:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>не менее 40 дней оставшегося легального пребывания;</Line>
                <Line>достаточно средств на жизнь — точная цифра меняется, но от 15 500 GEL это хороший ориентир;</Line>
                <Line>
                    годовой оборот не менее 50 000 GEL на каждого иностранца-работника, подающего на разрешение на работу
                    (как ИП ты сама считаешься таким работником).
                </Line>
            </Paragraph>
            <Paragraph>
                Оборот можно подтвердить только так: либо справкой об обороте по НДС из Налоговой (но для этого надо быть
                плательщиком НДС, и засчитывается только доход с момента регистрации по НДС); либо нестандартной справкой об
                обороте (до 10 рабочих дней, и для этого, наоборот, ты НЕ должна быть плательщиком НДС). Оба варианта
                требуют, чтобы ты уже подала налоговую декларацию до запроса справки. В очень редких случаях, когда справку
                получить никак нельзя, подойдёт оценка лицензированного аудитора (500–2000 GEL) или выписка с грузинского
                корпоративного счёта в GEL — именно корпоративного, личные счета, онлайн-банки и иностранные счета не
                принимаются.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Прочее.
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Принимать наличные нельзя без сертифицированного кассового аппарата. Можно поставить POS-терминал через
                    банк или принимать наличные через paybox-автоматы.
                </Line>
                <Line>
                    Налоговый год — с 1 января по 31 декабря. Любой грузинский доход, не вошедший в обычные месячные
                    декларации, декларируется отдельно, чаще всего до 31 марта следующего года.
                </Line>
                <Line>
                    Если оборот превысит 500 000 GEL за один календарный год — с месяца превышения и до конца года ставка
                    станет 3% на оборот. Если превысишь 500 000 GEL два года подряд — потеряешь статус малого бизнеса и
                    ставку 1%.
                </Line>
            </Paragraph>
            <Paragraph>
                В конце — стандартный дисклеймер: это краткая выжимка по самым частым случаям, ExpatHub не несёт
                ответственности за то, как ты используешь эту информацию, и за нюансы конкретно твоей ситуации.
            </Paragraph>
            <Paragraph>Хочешь, я выделю отдельно только то, что тебе нужно сделать прямо сейчас, по шагам?</Paragraph>
        </Message>
        <Message
            at="2026-06-09T16:13:02.727677Z"
        >
            <Origin>019ead28-c4bb-76e6-b537-be0357e656cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, я не понимаю нескольких вещей:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Экспат Хаб предлагает услугу бухгалтера?</Line>
                <Line>
                    как я подамся на ВНЖ, если мне от туристического года (365 дней без визы) осталось (мы приехали 6
                    января, сейчас 9 июня) дней, а я только подалась на ИП, я возможно получу 50 000 лари только через 7-8
                    месяцев. Это уже истечет мой туристический год. Никаких 40 дней там не останется, если только мне
                    разрешат въехать на второй туристический год. проверь меня и себя
                </Line>
                <Line>про НДС я все-таки не поняла. Я работаю с иностарнными компаниями. Зачем мне НДС?</Line>
            </Paragraph>
            <Paragraph>и как мне решить, как подтвердить оборот?</Paragraph>
        </Message>
        <Message
            at="2026-06-09T16:14:47.071109Z"
        >
            <Origin>019ead28-c4bb-771a-9e4a-a6037e9eb6f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хорошо, Ана. Это важные вопросы, особенно второй — там твоя логика по срокам в основном верная, и я хочу
                проверить детали по источникам, а не угадывать. Дай мне минуту.
            </Paragraph>
            <Action>
                Searched the web for “Georgia work residence permit individual entrepreneur 50000 GEL turnover requirement
                2026 timing”
            </Action>
            <Action>
                Searched the web for “Georgia 365 day visa free Russian citizens reset border exit re-entry 2026 second
                year”
            </Action>
            <Paragraph>
                Аня, проверил. По второму вопросу есть важная новость, которая меняет саму твою тревогу. По порядку.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1) Да, ExpatHub предлагает бухгалтера.
                </Word> Их бухгалтерские услуги для ИП — от 200 GEL в месяц. Смысл не только в том, что они раз в месяц
                подают за тебя декларацию, а в том, что ответственность за ошибки переходит с тебя на них, и они заранее
                предупреждают о проблемах. Это в самой статье и написано.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2) Твоя математика по туристическому году — верная. Но требование 50 000 GEL, из-за которого ты переживаешь, в апреле 2026 убрали.
                </Word>
            </Paragraph>
            <Paragraph>
                Сначала твой расчёт, я его проверил. Вы приехали 6 января, сегодня 9 июня — прошло около 154 дней. Значит,
                из 365 у тебя осталось примерно <Word>
                    <Bold />
                    211 дней, то есть до начала января 2027 года
                </Word>. Если бы тебе действительно нужно было накопить 50 000 GEL оборота с нуля (7–8 месяцев →
                январь-февраль 2027), то да — ты бы упёрлась в конец туристического года, и 40 дней запаса бы не осталось.
                Логика у тебя правильная.
            </Paragraph>
            <Paragraph>
                Но вот что изменилось. До апреля 2026 ключевым порогом был годовой оборот не менее 50 000 GEL — для ИП через
                задекларированную деятельность. Апрельские поправки 2026 года убрали это требование о 50 000 GEL из закона.
                Это требование, которое годами было главным барьером для мелких предпринимателей, удалено из текста закона.
            </Paragraph>
            <Paragraph>
                Важная оговорка, и тут я честно говорю «не подтверждено окончательно»: детальные новые критерии выдачи ВНЖ
                будут определены позже постановлением правительства. То есть старый порог сняли, но чем именно его заменили
                — пока не до конца ясно. Плюс с 1 марта 2026 ввели новую систему разрешений на работу (Special Labour
                Activity Permit) с переходным периодом до 1 января 2027. Есть признаки, что фрилансеров, обслуживающих
                иностранных клиентов, и зарегистрированных в Грузии ИП могут вывести из-под требования разрешения на работу
                — но это именно «могут», точные правила надо подтверждать.
            </Paragraph>
            <Paragraph>
                Вывод по этому пункту: <Word>
                    <Bold />
                    прежде чем считать сроки и переживать про 50 000 GEL — выясни у ExpatHub или у юриста текущие критерии на сегодня.
                </Word> Очень вероятно, что твоя главная тревога уже не актуальна, но я не хочу давать тебе ложную
                уверенность — это та самая тема, где гадать нельзя.
            </Paragraph>
            <Paragraph>
                И про запасной вариант, на случай если сроки всё-таки поджимают: после 365 дней можно выехать из Грузии и
                снова въехать на новый 365-дневный период, хотя при многократном повторении пограничники могут задавать
                вопросы. То есть «второй туристический год» через выезд-въезд в принципе возможен, но это не гарантия и не
                то, на что стоит опираться как на основной план — особенно в твоей ситуации.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3) НДС тебе, скорее всего, не нужен — твоя интуиция верна.
                </Word> Ты работаешь с иностранными компаниями. Обязательная регистрация по НДС наступает только при обороте
                свыше 100 000 GEL за 12 месяцев, и услуги нерезидентам в этот порог не входят — значит, обязательной
                регистрации у тебя не возникает. Добровольная нужна только чтобы возвращать «обратный НДС» с покупок
                иностранных услуг — для иллюстратора обычно не стоит лишней возни.
            </Paragraph>
            <Paragraph>
                Как решить, чем подтверждать оборот (если этот вопрос вообще останется актуальным после новых правил): два
                метода из статьи зеркальны.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Справка об обороте по НДС — только если ты <Word>
                        <Bold />
                        плательщик НДС
                    </Word>, и считается доход лишь с даты регистрации по НДС.
                </Line>
                <Line>
                    Нестандартная справка об обороте — наоборот, только если ты <Word>
                        <Bold />
                        НЕ плательщик НДС
                    </Word> (готовится до 10 рабочих дней).
                </Line>
            </Paragraph>
            <Paragraph>
                То есть для тебя, раз НДС не нужен, естественный путь — <Word>
                    <Bold />
                    нестандартная справка
                </Word>, и это ещё одна причина не регистрироваться по НДС. Оба варианта требуют, чтобы ты сначала подала
                хотя бы одну налоговую декларацию.
            </Paragraph>
            <Paragraph>
                Главное действие сейчас одно: уточнить у ExpatHub актуальные критерии ВНЖ после апрельских поправок, до того
                как строить план по срокам. Хочешь — составлю короткий список вопросов к ним по-русски и по-английски, чтобы
                ты получила однозначный ответ?
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
        <Append
            identifier="untitled-2"
            type=".txt"
        >
            ![[ untitled-2.txt ]]
        </Append>
    </Chapter>
);

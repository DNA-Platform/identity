import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 June 2026](2026-06-22)</Date>
        </Dated>
        <Title>[[ 22 June 2026 ]]</Title>
        <Message
            at="2026-06-22T09:17:13.450767Z"
        >
            <Origin>019eee9e-95e4-70fd-b632-e9788e35cdf8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, поомги мне составить реквест в поддержку Payoneer ты знаешь проблему: мне пришло письмо, а аккаутом я
                пользоваться не могу
            </Paragraph>
            <Attachment>Uploaded “1782119819811_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1782119828821_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-22T09:17:56.152441Z"
        >
            <Origin>019eee9e-95e4-73c2-8570-26a2d3e4a9ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла, Ана. Картина теперь чёткая: письмо «approved» с Customer ID <Word>
                    <Bold />
                    104436596
                </Word> — и при этом веб всё равно висит на «We're verifying your info», доступа к функциям нет. Это
                противоречие надо закрыть через поддержку. Составила обращение.
            </Paragraph>
            <Paragraph>Важно по фактам, чтобы запрос был сильным:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Customer ID <Word>
                        <Bold />
                        104436596
                    </Word> — он есть и в письме, и в Account info, то есть это <Word>
                        <Bold />
                        один и тот же аккаунт
                    </Word>. Значит ты смотришь правильный профиль, и проблема реальная — рассинхрон висит больше недели.
                </Line>
                <Line>
                    Я указала, что Verification Center в браузере недоступен/пуст, чтобы они не отфутболили тебя обратно
                    «проверьте Verification Center».
                </Line>
            </Paragraph>
            <Paragraph>Текст — на английском (поддержка отвечает быстрее), от твоего имени:</Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Перевод для твоей сверки:</Paragraph>
            <Paragraph>
                <Quoted />
                Здравствуйте, Customer ID: 104436596, аккаунт: Individual Entrepreneur DNA. Больше недели назад я получила
                письмо о том, что мой аккаунт одобрен («…all set and ready to go… можете отправлять и получать деньги»). Но
                при входе — и на сайте, и в приложении — статус всё ещё «We're verifying your info» на этапе верификации, и
                я не могу пользоваться функциями (ни принимать средства, ни настроить вывод). Я проверила Verification
                Center — открытых запросов и недостающих документов с моей стороны нет. Также я писала своему
                onboarding-специалисту (Хакиме), но ответа нет уже больше недели. Прошу: 1) подтвердить реальный статус
                аккаунта; 2) объяснить, почему висит «verifying» при наличии письма об одобрении; 3) сообщить, нужно ли
                что-то с моей стороны, или решить на вашей. Если нужен документ — предоставлю сразу.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Куда отправлять
                </Word> (это важно — чтобы попало в очередь поддержки, а не зависло у одного менеджера):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Зайди на <Word>
                        <Bold />
                        myaccount.payoneer.com
                    </Word> в браузере → значок <Word>
                        <Bold />
                        «?» (Help / Support Center)
                    </Word> вверху справа — он виден на твоём скрине. Оттуда открой чат или форму обращения и вставь текст.
                </Line>
                <Line>
                    Либо в письме об одобрении есть ссылка <Word>
                        <Bold />
                        Support Center
                    </Word> — тоже рабочий вход.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Пара заметок:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Я написала, что в Verification Center пусто. Если ты <Word>
                        <Bold />
                        не успела это проверить в браузере
                    </Word> — глянь до отправки: открой значок профиля → Settings → Verification Center → вкладка Required.
                    Если там вдруг есть запрос (например, про адрес) — скажи мне, тогда проблема не в поддержке, а в
                    незакрытом документе, и текст поменяем.
                </Line>
                <Line>Хакиму больше не жди отдельно — этот тикет в общую поддержку важнее.</Line>
                <Line>На номера телефонов из писем по-прежнему не звони, только через Support Center в кабинете.</Line>
            </Paragraph>
            <Paragraph>Как ответят — пришли, разберём следующий шаг.</Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:19:01.839406Z"
        >
            <Origin>019eeea0-3ebe-776a-bb9a-fb63e9ccfb1e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, давай правило - никаких эм дешес. только - перепиши</Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:19:15.639163Z"
        >
            <Origin>019eeea0-3ebe-7d85-946d-c8a5283a8a2f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла, Ана. Правило принято: никаких длинных тире (—), только обычное тире через дефис. Записываю в память,
                чтобы держать это и дальше.
            </Paragraph>
            <Action>Edited memory</Action>
            <Paragraph>Готово. Переписываю текст обращения в поддержку без длинных тире:</Paragraph>
            <Paragraph>
                <Quoted />
                Hello, Customer ID: 104436596 Account: Individual Entrepreneur DNA I received an email from Payoneer over a
                week ago confirming that my account is approved ("Your Payoneer account is all set and ready to go... You
                can now send and receive money"). However, when I log in, both on the website and in the mobile app, my
                account still shows "We're verifying your info" at the Verification stage, and I cannot access any account
                features (I cannot receive funds or set up withdrawals). I have checked the Verification Center and there
                are no open requirements or pending document requests on my side. I also previously contacted my onboarding
                specialist (Hakima) but have not received a reply in over a week. Could you please: 1. Confirm the actual
                status of my account (is it fully approved and active?). 2. Explain why the dashboard still shows
                "verifying" despite the approval email. 3. Tell me what, if anything, is needed from my side to activate the
                account, or resolve the issue on your end. If any document is required, I will provide it immediately. Thank
                you for your help. Anastasiia Krasavina Individual Entrepreneur "DNA" Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки, тоже без длинных тире:</Paragraph>
            <Paragraph>
                <Quoted />
                Здравствуйте, Customer ID: 104436596, аккаунт: Individual Entrepreneur DNA. Больше недели назад я получила
                письмо о том, что аккаунт одобрен. Но при входе и на сайте, и в приложении статус всё ещё «We're verifying
                your info», и я не могу пользоваться функциями: ни принимать средства, ни настроить вывод. Verification
                Center проверила, открытых запросов с моей стороны нет. Писала onboarding-специалисту (Хакиме), ответа нет
                больше недели. Прошу: 1) подтвердить реальный статус аккаунта; 2) объяснить, почему висит «verifying» при
                наличии письма об одобрении; 3) сообщить, нужно ли что-то от меня, или решить на вашей стороне. Если нужен
                документ, предоставлю сразу.
            </Paragraph>
            <Paragraph>
                Отправляй через значок «?» (Support Center) на myaccount.payoneer.com. Как ответят, пришли, пойдём дальше.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:20:13.533836Z"
        >
            <Origin>019eeea1-56c6-7e17-b970-a9a187479f0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, вот по этому: глянь до отправки: открой значок профиля → Settings → Verification Center → вкладка
                Required.
            </Paragraph>
            <Paragraph>У меня нет досутпа ни к одной вскладке, ни к одной настройке</Paragraph>
            <Attachment>Uploaded “1782119985143_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-22T09:20:45.972647Z"
        >
            <Origin>019eeea1-56c6-7054-9903-af2058cf1dc9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла, Ана, и теперь вижу проблему ясно. Ты открыла меню профиля - и там <Word>
                    <Bold />
                    нет ни Settings, ни Verification Center
                </Word>. Только: имя аккаунта, Customer ID, переключатель English и Sign out. Всё. То есть Payoneer <Word>
                    <Bold />
                    намеренно блокирует доступ ко всем настройкам и вкладкам, пока статус висит на «verifying»
                </Word>. Это не ты что-то не нашла - этих пунктов сейчас физически нет в интерфейсе.
            </Paragraph>
            <Paragraph>Это важный вывод по двум причинам:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Ты сделала всё, что в твоих силах.
                    </Word> До Verification Center / Required ты добраться не можешь в принципе, пока аккаунт в этом
                    состоянии. Значит ждать больше нечего - вопрос только к поддержке.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Отправляем письмо как есть.
                    </Word> Я в тексте написала «I have checked the Verification Center and there are no open requirements».
                    Давай чуть подправлю, чтобы было точнее и сильнее: что у тебя <Word>
                        <Bold />
                        вообще нет доступа
                    </Word> к настройкам и Verification Center. Это снимает у них отговорку «проверьте Verification Center»
                    - ты не можешь, и это часть проблемы.
                </Line>
            </Paragraph>
            <Paragraph>Вот скорректированный текст (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Hello, Customer ID: 104436596 Account: Individual Entrepreneur DNA I received an email from Payoneer over a
                week ago confirming that my account is approved ("Your Payoneer account is all set and ready to go... You
                can now send and receive money"). However, when I log in, both on the website and in the mobile app, my
                account still shows "We're verifying your info" at the Verification stage, and I cannot access any account
                features. I cannot receive funds, set up withdrawals, or even open Settings or the Verification Center. The
                profile menu only shows my account name, Customer ID, language, and Sign out. There is no way for me to
                check or upload anything. I also contacted my onboarding specialist (Hakima) but have not received a reply
                in over a week. Could you please: 1. Confirm the actual status of my account (is it fully approved and
                active?). 2. Explain why the dashboard still shows "verifying" despite the approval email. 3. Tell me what
                is needed to activate the account, or resolve the issue on your end. If any document is required, I will
                provide it immediately, but currently I have no access to any upload option. Thank you for your help.
                Anastasiia Krasavina Individual Entrepreneur "DNA" Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Здравствуйте, Customer ID 104436596, аккаунт Individual Entrepreneur DNA. Больше недели назад пришло письмо
                об одобрении, но при входе и на сайте, и в приложении статус всё ещё «We're verifying your info». Я не могу
                пользоваться функциями: ни принимать средства, ни настроить вывод, ни даже открыть Settings или Verification
                Center. В меню профиля только имя аккаунта, Customer ID, язык и Sign out. Возможности что-либо проверить или
                загрузить у меня нет. Писала Хакиме, ответа нет больше недели. Прошу: 1) подтвердить реальный статус; 2)
                объяснить «verifying» при наличии одобрения; 3) сказать, что нужно для активации, или решить на вашей
                стороне. Если нужен документ, предоставлю сразу, но сейчас опции загрузки у меня нет.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Куда отправлять:
                </Word> значок <Word>
                    <Bold />
                    «?»
                </Word> вверху справа (он на скрине есть, рядом с профилем) - это Help / Support Center. Оттуда чат или
                форма. Меню профиля тут не нужно - жми именно «?».
            </Paragraph>
            <Paragraph>Отправляй этот вариант. Как ответят, пришли, разберёмся дальше.</Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:25:18.264563Z"
        >
            <Origin>019eeea5-fd85-7de8-95cb-3014dec597cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, это невыносимо - у них не работает связь с техподержкой! как мне добраться до них?</Paragraph>
            <Attachment>Uploaded “1782120311015_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-22T09:25:43.438879Z"
        >
            <Origin>019eeea5-fd85-7fe4-969b-a9947cea0d7d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Понимаю, Ана, это правда выматывает. Но давай я помогу пробиться - тут есть рабочие ходы, и ты залогинена
                (вверху видно твоё имя и Customer ID 104436596), это уже плюс.
            </Paragraph>
            <Paragraph>
                Сначала про этот экран. Вверху - чат-бот (Zowie, AI). Он сам по себе живого человека не даёт, но через него
                <Word>
                    <Bold />
                    можно дойти до создания тикета
                </Word>, если правильно нажимать.
            </Paragraph>
            <Paragraph>Что попробовать прямо сейчас, по порядку:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Через чат-бот - но проси человека.
                </Word> Нажми кнопку <Word>
                    <Bold />
                    «How to get my account approved?»
                </Word> (она прямо там есть). Бот что-то ответит. Дальше <Word>
                    <Bold />
                    не сдавайся на его ответе
                </Word> - напиши в чат: <Word>
                    <Verbatim />
                    agent
                </Word> или <Word>
                    <Verbatim />
                    talk to a representative
                </Word> или <Word>
                    <Verbatim />
                    contact customer care
                </Word>. Боты Zowie обычно после пары попыток предлагают «связаться с поддержкой» или открыть тикет. Цель -
                дожать его до формы обращения или живого чата.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. «MY REQUESTS» вверху.
                </Word> Видишь синюю кнопку <Word>
                    <Bold />
                    MY REQUESTS
                </Word> рядом с логотипом? Нажми её. Часто там есть <Word>
                    <Bold />
                    «Submit a request / Open a new request»
                </Word> - это прямая форма тикета, минуя бота. Если она есть - это самый чистый путь, вставляй туда наш
                текст.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Раздел «Contact Us».
                </Word> На странице есть хлебные крошки <Word>
                    <Bold />
                    Support Center &gt; Contact Us
                </Word>, и заголовок «Contact Customer Care» - но под ним пусто (серый блок не прогрузился). Это, возможно,
                та же проблема встроенного браузера/загрузки. Попробуй:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        обновить страницу
                    </Word> (часто блок «Contact Us» догружается со второго раза);
                </Line>
                <Line>
                    открыть в <Word>
                        <Bold />
                        другом браузере
                    </Word> или режиме инкогнито;
                </Line>
                <Line>
                    если внизу под «Contact Us» появится выбор темы - выбирай <Word>
                        <Bold />
                        Account / Verification
                    </Word>, и откроется форма или чат.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Если форма так и не грузится - резервный канал: соцсети.
                </Word> У Payoneer есть страницы в соцсетях, и их SMM-поддержка реально отвечает и эскалирует, когда сайт
                глючит. Напиши коротко в их официальный аккаунт (например, на их странице в Facebook или X/Twitter -
                «Payoneer»): что аккаунт одобрен письмом, но висит «verifying», доступа нет, Customer ID 104436596, тикет
                открыть не получается. <Word>
                    <Bold />
                    Customer ID давай в личных сообщениях, не публично в ленте.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Порядок действий:
                </Word> сначала <Word>
                    <Bold />
                    MY REQUESTS
                </Word> (пункт 2) - это самый прямой путь к форме. Если там тупик - дожимай бота словом <Word>
                    <Verbatim />
                    agent
                </Word> (пункт 1). Если и это не сработало - соцсети (пункт 4).
            </Paragraph>
            <Paragraph>
                И давай зафиксируем: когда дойдёшь до формы или чата, у тебя уже готов текст (последняя версия про «нет
                доступа к Settings и Verification Center»). Просто вставишь.
            </Paragraph>
            <Paragraph>
                Скажи, что выдаст <Word>
                    <Bold />
                    MY REQUESTS
                </Word>, когда нажмёшь - по этому пойму, открылась форма тикета или нет, и подскажу следующий клик.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:26:37.962107Z"
        >
            <Origin>019eeea7-35b4-7ae0-b4d5-0bc3e79ae588</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, напиши мне письмо для Хакима. я еще раз отправлю ей сообщение</Paragraph>
        </Message>
        <Message
            at="2026-06-22T09:27:00.398969Z"
        >
            <Origin>019eeea7-35b4-755a-b928-8cb4011b663b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно, Ана. Это повторное письмо Хакиме - поэтому тон чуть тверже прежнего: вежливо, но прямо обозначаем,
                что прошла неделя, ответа нет, доступа нет, и нужна конкретика. Без длинных тире.
            </Paragraph>
            <Paragraph>Английский (отправляй реплаем на вашу прежнюю переписку или на hakimadj@payoneer.com):</Paragraph>
            <Paragraph>
                <Quoted />
                Subject: Follow-up: account approved by email but still not active (Customer ID 104436596) Dear Hakima, I am
                following up on my previous message, to which I have not yet received a reply. More than a week ago I
                received an email confirming that my Payoneer account was approved ("Your Payoneer account is all set and
                ready to go... You can now send and receive money"). However, my account is still not usable. When I log in,
                both on the website and in the app, it still shows "We're verifying your info" at the Verification stage. I
                cannot access any account features: I cannot receive funds, set up withdrawals, or even open Settings or the
                Verification Center. The profile menu only shows my account name, Customer ID, language, and Sign out, so I
                have no way to check or upload anything from my side. I also tried the Support Center, but the contact form
                does not load. Customer ID: 104436596 Account: Individual Entrepreneur "DNA" Could you please: 1. Confirm
                whether my account is fully approved and active. 2. Explain why it still shows "verifying" despite the
                approval email. 3. Tell me exactly what is needed to activate it, or escalate this on your end. If any
                document is required, I will provide it immediately. I would really appreciate your help in resolving this,
                as it has now been over a week. Thank you, Anastasiia Krasavina Customer ID: 104436596
            </Paragraph>
            <Paragraph>Перевод для сверки (без длинных тире):</Paragraph>
            <Paragraph>
                <Quoted />
                Уважаемая Хакима, Пишу повторно, на прошлое сообщение ответа пока не было. Больше недели назад пришло письмо
                об одобрении аккаунта, но пользоваться им я по-прежнему не могу. При входе и на сайте, и в приложении статус
                всё ещё «We're verifying your info». Доступа к функциям нет: ни принять средства, ни настроить вывод, ни
                даже открыть Settings или Verification Center. В меню профиля только имя аккаунта, Customer ID, язык и Sign
                out - проверить или загрузить что-либо я не могу. Support Center тоже пробовала, форма обращения не
                загружается. Customer ID: 104436596, аккаунт Individual Entrepreneur «DNA». Прошу: 1) подтвердить, полностью
                ли одобрен и активен аккаунт; 2) объяснить, почему висит «verifying»; 3) сказать, что именно нужно для
                активации, или эскалировать на вашей стороне. Если нужен документ, предоставлю сразу.
            </Paragraph>
            <Paragraph>Пара заметок:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Отправляй <Word>
                        <Bold />
                        реплаем
                    </Word> на старое письмо Хакиме - так она увидит, что это уже второе обращение, и историю переписки.
                </Line>
                <Line>
                    Я добавила строчку, что <Word>
                        <Bold />
                        форма Support Center не грузится
                    </Word> - это усиливает: ты пыталась дойти и другим путём, но система не дала.
                </Line>
                <Line>На телефонный номер из её подписи по-прежнему не звони, только письмом.</Line>
            </Paragraph>
            <Paragraph>
                Параллельно не бросай попытку через <Word>
                    <Bold />
                    MY REQUESTS
                </Word> на сайте - если там откроется форма тикета, это надёжнее одного менеджера. Но письмо Хакиме
                отправить стоит, пусть идёт двумя каналами.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-22T14:11:28.009416Z"
        >
            <Origin>019eefab-fc21-7356-88f4-d6ba152cc92b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, попробуй найти ссылку, как мне обратиться в поддержку Пейонир?</Paragraph>
        </Message>
        <Message
            at="2026-06-22T14:12:05.791008Z"
        >
            <Origin>019eefab-fc21-76b3-afae-986465454891</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно, Ана. Дай найду официальные каналы Payoneer и проверю, что ссылки рабочие - не хочу давать тебе
                случайные или поддельные.
            </Paragraph>
            <Action>
                Searched the web for “Payoneer contact customer support live chat submit request official help center”
            </Action>
            <Paragraph>
                Нашла официальные каналы Payoneer, Ана. Разберу, как реально пробиться, потому что ты уже залогинена
                (Customer ID 104436596) - это даёт тебе доступ к живому чату.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Главный официальный вход в поддержку:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> - это официальный Support Center Payoneer. Оттуда ведут все каналы: связаться с поддержкой можно
                через форму contact us - по e-mail, в живом чате или по телефону.
            </Paragraph>
            <Paragraph>Что важно знать по фактам:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Живой чат и форма работают только когда ты залогинена.
                    </Word> Payoneer прямо пишет: войдите в аккаунт, чтобы начать живой чат со специалистом поддержки. Ты
                    залогинена, значит чат тебе доступен.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Браузер имеет значение.
                    </Word> У Payoneer есть прямое предупреждение: соединение разрывается, если вы используете
                    неподдерживаемый браузер - обновите браузер и попробуйте снова. Это, возможно, и есть причина, почему у
                    тебя форма «Contact Us» не грузилась! Открой Support Center в <Word>
                        <Bold />
                        свежем Chrome
                    </Word> (не во встроенном браузере, не в старом), и форма с чатом должна появиться.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Телефон - самый быстрый путь к человеку.
                    </Word> По справке: команда Customer Care доступна круглосуточно более чем на 35 языках, и для
                    платежополучателей Payoneer рекомендует звонить по телефону как самый быстрый способ поговорить с
                    агентом. Telephone-поддержка бесплатна со стороны Payoneer (но твой оператор может взять плату за
                    международный звонок).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что делать, по порядку:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Открой <Word>
                        <Bold />
                         0 
                    </Word> в <Word>
                        <Bold />
                        обычном свежем Chrome
                    </Word>, убедись что залогинена (Customer ID 104436596 виден вверху).
                </Line>
                <Line>
                    Нажми <Word>
                        <Bold />
                        «Contact Us»
                    </Word> → выбери тему (Account / Verification) → откроется выбор: <Word>
                        <Bold />
                        Live Chat / Email / Call Us
                    </Word>.
                </Line>
                <Line>
                    Если форма опять не грузится - почти наверняка дело в браузере: обнови Chrome или попробуй другой
                    браузер/устройство.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Live Chat
                    </Word> - бери его в приоритет: живой человек, и можно вставить наш готовый текст.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важное предупреждение про телефоны.
                </Word> В поиске всплывают сторонние сайты с номерами Payoneer (pissedconsumer и т.п.). <Word>
                    <Bold />
                    Не звони по номерам с таких сайтов
                </Word> - бери телефон только из самого кабинета через «Call Us» после входа, потому что там Payoneer
                показывает правильный номер для твоего региона. Сторонние номера - риск нарваться на мошенников, которые
                охотятся именно на людей с проблемами доступа.
            </Paragraph>
            <Paragraph>
                Итого, твой самый надёжный ход прямо сейчас: <Word>
                    <Bold />
                    payoneer.custhelp.com → войти → Contact Us → Live Chat
                </Word>, в свежем Chrome. Текст у тебя готов, вставишь.
            </Paragraph>
            <Paragraph>
                Попробуй открыть в нормальном Chrome и скажи, появилась ли кнопка Live Chat / Contact Us. Если да - дожимаем
                до живого агента.
            </Paragraph>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Title>[[ 18 June 2026 ]]</Title>
        <Message
            at="2026-06-18T15:51:12.820100Z"
        >
            <Origin>019edb6d-e448-72e6-b7cd-a9dae6100beb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, привет. Я получила несколько дней назад, ну, да, точно несколько дней назад, наверное, неделю назад
                я получила письмо из Pioneer, что они опровернули мой аккаунт. Это даже есть в нашем с тобой чате, но до сих
                пор и в приложении, и на сайте. Как только я не захожу в свой Pioneer, у меня все еще та же самая стоит
                сторониться, что мои документы в проверке. Я написала их о Кими, ну, ты мне помог составить текст, он или
                она мне до сих пор не ответили. Скажи, пожалуйста, посмотри по форумам. Такое вообще возможно в норме? Или у
                меня какая-то проблема? a
            </Paragraph>
        </Message>
        <Message
            at="2026-06-18T15:51:51.125638Z"
        >
            <Origin>019edb6d-e448-72e6-b7cd-a9db4d506690</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ана. Понял: примерно неделю назад пришло письмо, что аккаунт <Word>
                    <Bold />
                    одобрен
                </Word>, но и в приложении, и на сайте до сих пор висит «документы на проверке», а Хакима пока не ответила.
                Давай проверю по форумам, нормально ли это или похоже на проблему — не буду гадать.
            </Paragraph>
            <Action>
                Searched the web for “Payoneer account approved email but dashboard still shows verifying under review stuck
                how long”
            </Action>
            <Paragraph>
                Проверила форумы и справку Payoneer. Короткий ответ: <Word>
                    <Bold />
                    это известная и нередкая ситуация — рассинхрон, а не обязательно проблема.
                </Word> Но раз держится неделю, её надо закрыть активно. Объясню по фактам.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что говорит сам Payoneer (это снимает главную тревогу):
                </Word> в их сообществе прямым текстом написано, что бывает так — приходит письмо «approved», а в
                Verification Center в разделе History какие-то пункты всё ещё «under review». И ответ Payoneer на это:
                аккаунт должен быть полностью активен, если вы получили письмо о том, что заявка одобрена. То есть <Word>
                    <Bold />
                    письмо об одобрении — более авторитетный сигнал, чем статус-страница
                </Word>, которая может отставать.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это значит для тебя:
                </Word> письмо «approved» у тебя есть → формально аккаунт активен, а «documents in verification» — это,
                скорее всего, отдельная фоновая проверка, которая висит сама по себе и не блокирует доступ. На форумах люди
                описывают ровно твой случай: письмо одобрило, а History показывает «under review».
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но честно — есть и тревожный сценарий, и его надо исключить:
                </Word> на тех же форумах многие сидят в «verification limbo» неделями, и часто причина в том, что <Word>
                    <Bold />
                    в Verification Center в разделе Required висит незакрытый запрос документа, который человек не заметил.
                </Word> Справка Payoneer прямо советует: смотри статус в Verification Center → вкладка History; недостающие
                документы и доп. требования Payoneer показывает во вкладке Required.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что сделать прямо сейчас, по порядку:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Зайди в Settings → Verification Center → вкладка Required.
                    </Word> Это ключевое. Если там пусто («No open requirements») — значит от тебя ничего не ждут, и дело
                    только в отстающем статусе. Если там <Word>
                        <Bold />
                        висит запрос
                    </Word> (например, то самое подтверждение адреса!) — вот она причина, и надо загрузить документ.
                    Помнишь, у тебя был экран «Verify your address»? Возможно, он так и не закрыт — проверь, не там ли
                    затык.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Загляни во вкладку History
                    </Word> — там Payoneer пишет, что именно «under review» и не отклонили ли что-то.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Проверь, появились ли реквизиты приёма
                    </Word> (Receiving Accounts / «Get paid»). Если они есть и активны — ты функционально работаешь, что бы
                    ни показывала полоса статуса.
                </Line>
            </Paragraph>
            <Paragraph>
                Скажи мне, <Word>
                    <Bold />
                    что во вкладке Required
                </Word> — пусто или есть открытый запрос? От этого зависит всё:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Пусто
                    </Word> → ждём, это просто отставание статуса; Хакиму можно мягко пнуть повторно.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Есть запрос (особенно про адрес)
                    </Word> → вот причина, и я помогу с тем самым документом из Credo, который мы готовили.
                </Line>
            </Paragraph>
            <Paragraph>
                Кстати, про <Word>
                    <Bold />
                    подтверждение адреса
                </Word> — ты уже ездила в Credo за справкой? Если тот шаг «Verify your address» так и висит незакрытым,
                очень вероятно, что именно он и держит верификацию. Это была бы хорошая новость: причина понятна и решаема.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-18T15:53:05.184843Z"
        >
            <Origin>019edb6f-9aee-71c7-a002-1ddbf41c94d6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Вот, посмотри потому что мой скриншот дело в том, что там ничего не кликабельно. То есть никакой хистори,
                никаких вкладок, вот всё, что я могу открыть, я попробовала открыть. Если у тебя есть идея, что ещё можно
                кликнуть, я
            </Paragraph>
            <Attachment>Uploaded “1000116210.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000116211.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000116212.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1000116213.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-18T15:53:27.498489Z"
        >
            <Origin>019edb6f-9aef-767d-9ccc-8e9731ab14b6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла, Ана — спасибо за скриншоты, теперь картина яснее. Ты права: в <Word>
                    <Bold />
                    приложении
                </Word> ничего больше не кликается — есть только статус-полоса, список фич, Account info (где Customer ID
                <Word>
                    <Bold />
                    104436596
                </Word>), Settings с тремя пунктами. <Word>
                    <Bold />
                    Verification Center в мобильном приложении просто нет
                </Word> — это веб-функция. Поэтому через приложение ты до вкладок Required/History не доберёшься, и это не
                твоя ошибка.
            </Paragraph>
            <Paragraph>Вот что я вижу и что предлагаю:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Verification Center искать надо в браузере, не в приложении.
                </Word> Зайди с компьютера (или в браузере телефона, не в приложении) на <Word>
                    <Bold />
                    myaccount.payoneer.com
                </Word> → войди → значок профиля/шестерёнка → <Word>
                    <Bold />
                    Settings → Verification Center
                </Word> → там вкладки <Word>
                    <Bold />
                    Required
                </Word> и <Word>
                    <Bold />
                    History
                </Word>. Именно там Payoneer показывает, ждут ли они от тебя документ. В приложении этих вкладок нет в
                принципе.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Но есть деталь, которая многое объясняет — твой email.
                </Word> В Account info стоит <Word>
                    <Bold />
                    ana@atlas.love
                </Word>. Скажи: это тот же адрес, на который пришло письмо «account approved» и через который ты
                регистрировалась? Если письмо об одобрении пришло на <Word>
                    <Bold />
                    другой
                </Word> ящик — возможно, у тебя два разных профиля/входа, и ты смотришь статус не того аккаунта, на который
                пришло одобрение. Это надо исключить в первую очередь.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Что важно — доступа к функциям всё ещё нет.
                </Word> Раз ни приём, ни вывод не открыты, я бы уже не ждала молча. Прошла неделя, Хакима молчит — пора
                пнуть, но <Word>
                    <Bold />
                    через рабочий канал, а не только письмом ей
                </Word> (она могла уйти/перегружена).
            </Paragraph>
            <Paragraph>Конкретный план:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Открой <Word>
                        <Bold />
                        Verification Center в браузере
                    </Word> (не в приложении) → посмотри вкладку <Word>
                        <Bold />
                        Required
                    </Word>. Скажи мне, пусто там или висит запрос (особенно про адрес).
                </Line>
                <Line>
                    Подтверди, <Word>
                        <Bold />
                        на какой email
                    </Word> пришло «approved» — совпадает ли с ana@atlas.love.
                </Line>
                <Line>
                    Если в браузере тоже глухо — пиши <Word>
                        <Bold />
                        не только Хакиме, а в общую поддержку Payoneer
                    </Word> через кнопку Help/чат в браузере, с твоим Customer ID <Word>
                        <Bold />
                        104436596
                    </Word>, чтобы тикет попал в очередь поддержки, а не висел у одного менеджера.
                </Line>
            </Paragraph>
            <Paragraph>
                И отдельно — ты <Word>
                    <Bold />
                    ездила в Credo за справкой об адресе
                </Word>? Если тот шаг подтверждения адреса так и не закрыт, очень вероятно, что именно он держит
                верификацию, и тогда решение у нас уже готово.
            </Paragraph>
            <Paragraph>
                Скажи две вещи: <Word>
                    <Bold />
                    (а) что в Verification Center в браузере во вкладке Required
                </Word>, и <Word>
                    <Bold />
                    (б) на тот же ли email (ana@atlas.love) пришло одобрение
                </Word> — и я скажу точно, ждать или эскалировать, и помогу с тикетом в поддержку.
            </Paragraph>
        </Message>
    </Chapter>
);

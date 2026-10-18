import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 August 2026](2026-08-31)</Date>
        </Dated>
        <Title>[[ 31 August 2026 ]]</Title>
        <Message
            at="2026-08-31T06:23:45.050457Z"
        >
            <Origin>01a0567c-d871-7785-92fd-43eb6b7fffed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, у меня есть деньги на Пейонир на двух балансах - Доллары и Британсике фунты</Paragraph>
            <Paragraph>
                у Пейонира есть минимаальная комиссия на вывод - 15 долларов я не хочу платить излишнюю комиссию я думала,
                что смогу вывести и доллары и фнты вместе, но похоже, это работает иначе смотри мои скриншоты, прочитай
                правила с сайта пейонира скажи, как мне поступить, чтобы вывести деньши с наименьшей комиссией?
            </Paragraph>
            <Attachment>Uploaded “1788157325393_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1788157350485_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:24:23.930195Z"
        >
            <Origin>01a0567c-d871-7739-8e7c-41be1617320b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, хороший вопрос, и ты правильно заметила, что вывести два баланса «вместе» одним движением не выходит.
                Давай разберу по фактам, что видно на экранах, и дам расчёт, а не догадку - но сразу скажу, где мне нужно
                проверить правила Payoneer, чтобы не соврать.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что видно из твоих скринов:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Балансы: <Word>
                        <Bold />
                        169.00 USD
                    </Word> + <Word>
                        <Bold />
                        125.00 GBP
                    </Word> (плюс 0 EUR). Всего система оценивает в <Word>
                        <Bold />
                        338.19 USD
                    </Word>.
                </Line>
                <Line>
                    Когда ты выводишь <Word>
                        <Bold />
                        125 GBP
                    </Word>, Payoneer конвертирует их в USD по курсу 1 GBP = 1.29504 (это курс уже <Word>
                        <Bold />
                        с включённой комиссией конвертации
                    </Word> Payoneer) и на Credo придёт <Word>
                        <Bold />
                        161.88 USD
                    </Word>.
                </Line>
                <Line>То есть GBP-баланс выводится с конвертацией в доллары (твой счёт Credo получает USD).</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ключевой вопрос - минимальная комиссия 15 USD.
                </Word> Тут мне нужно свериться с правилами Payoneer, потому что это критично для твоего расчёта. Дай
                проверю, как именно считается минимум и берётся ли он с каждого вывода отдельно.
            </Paragraph>
            <Action>
                Searched the web for “Payoneer withdrawal fee minimum 15 USD per withdrawal same currency 2% different
                balances”
            </Action>
            <Paragraph>
                Ана, разобралась по правилам Payoneer. Тут есть важный нюанс, который меняет твою ситуацию, поэтому читай
                внимательно - это сэкономит тебе деньги.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Главное, что я поняла из правил Payoneer:
                </Word>
            </Paragraph>
            <Paragraph>
                Комиссия зависит от того, <Word>
                    <Bold />
                    совпадает ли валюта баланса с валютой счёта получателя
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Если выводишь в <Word>
                        <Bold />
                        той же валюте
                    </Word> (USD с USD-баланса → на USD-счёт) - комиссия <Word>
                        <Bold />
                        фиксированная и низкая
                    </Word>.
                </Line>
                <Line>
                    Если выводишь <Word>
                        <Bold />
                        с конвертацией
                    </Word> (GBP → USD) - добавляется <Word>
                        <Bold />
                        комиссия за конвертацию до 2%
                    </Word>, спрятанная в курсе.
                </Line>
            </Paragraph>
            <Paragraph>
                Твой счёт Credo мультивалютный (GEL/USD/EUR), и туда приходят <Word>
                    <Bold />
                    доллары
                </Word>. Значит:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По долларам (169 USD):
                </Word> это вывод USD → USD, <Word>
                    <Bold />
                    без конвертации
                </Word>. Тут комиссия фиксированная. Это твой «дешёвый» баланс.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По фунтам (125 GBP):
                </Word> смотри свой второй скрин - Payoneer конвертирует GBP в USD по курсу «Includes Payoneer conversion
                fee», и на счёт придёт 161.88 USD. То есть с фунтов ты платишь <Word>
                    <Bold />
                    скрытую комиссию конвертации в курсе
                </Word> (до 2%). Это неизбежно, если счёт Credo не принимает GBP напрямую.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Теперь про твой вопрос - минимум 15 и как вывести дешевле:
                </Word>
            </Paragraph>
            <Paragraph>
                Честно: <Word>
                    <Bold />
                    точную величину минимальной комиссии именно для Грузии
                </Word> я из общих правил подтвердить не могу - Payoneer прямо пишет, что «fees depend on sender and
                recipient locations and currency corridor». Ты на своих прошлых выводах видела 4% и минимум 15 - значит для
                твоего коридора (Грузия) ставка именно такая, и это надёжнее любых общих цифр из интернета. Опирайся на то,
                что <Word>
                    <Bold />
                    ты уже видела своими глазами
                </Word>, а не на статьи.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ключевой вывод - и вот где ты права, что не хочешь платить лишнее:
                </Word>
            </Paragraph>
            <Paragraph>
                Минимальная комиссия берётся <Word>
                    <Bold />
                    с каждого вывода отдельно
                </Word>. Значит если выводить USD и GBP <Word>
                    <Bold />
                    двумя отдельными операциями
                </Word>, ты можешь заплатить минимум <Word>
                    <Bold />
                    дважды
                </Word>. Это то, чего ты и опасаешься.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как сделать дешевле - конкретный путь:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Сначала сконвертируй GBP в USD ВНУТРИ Payoneer
                    </Word> (не при выводе, а через раздел Convert / «Convert currencies»). Внутренняя конвертация между
                    своими балансами стоит около <Word>
                        <Bold />
                        0.5%
                    </Word> - это заметно дешевле, чем конвертация «до 2%», которая включается при выводе GBP напрямую на
                    счёт.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Тогда все деньги окажутся на одном USD-балансе
                    </Word> (169 + ~161 ≈ 330 USD).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        И выведешь их ОДНИМ выводом USD → USD
                    </Word> - заплатишь минимум/комиссию <Word>
                        <Bold />
                        один раз
                    </Word>, а не два, и без дорогой конвертации при выводе.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть логика: <Word>
                    <Bold />
                    сначала собери всё в доллары внутри Payoneer (дёшево, 0.5%), потом выведи одним куском (один раз комиссия).
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но - две честные оговорки, прежде чем ты это сделаешь:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Я даю это как разбор правил, <Word>
                        <Bold />
                        проверь на самом экране Payoneer
                    </Word>: зайди в Convert, посмотри, какой курс/комиссию он покажет за GBP→USD внутри аккаунта, и сравни
                    с тем, что теряешь при прямом выводе GBP (161.88 из 125 GBP). Реши по цифрам, что выгоднее.
                </Line>
                <Line>
                    И помни то, что мы обсуждали: даже после вывода <Word>
                        <Bold />
                        банки-посредники
                    </Word> (Citibank/Raiffeisen) снимут своё на входе в Credo, и это Payoneer не контролирует. Так что
                    «минимум комиссии» на стороне Payoneer - это только часть, посредники добавят сверху независимо от того,
                    как ты дробишь.
                </Line>
            </Paragraph>
            <Paragraph>
                Хочешь - зайди в раздел <Word>
                    <Bold />
                    Convert
                </Word> в Payoneer, вбей 125 GBP → USD и пришли мне скрин, что он покажет. Тогда посчитаем на твоих реальных
                цифрах: выгоднее ли сконвертировать и вывести одним куском, или вывести двумя. Не буду гадать - посмотрим по
                факту.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:26:36.826706Z"
        >
            <Origin>01a0567f-8cce-7aa1-9607-88c95b409611</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Как сделать дешевле - конкретный путь:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Сначала сконвертируй GBP в USD ВНУТРИ Payoneer (не при выводе, а через раздел Convert / «Convert
                    currencies»). Внутренняя конвертация между своими балансами стоит около 0.5% - это заметно дешевле, чем
                    конвертация «до 2%», которая включается при выводе GBP напрямую на счёт.
                </Line>
                <Line>Тогда все деньги окажутся на одном USD-балансе (169 + ~161 ≈ 330 USD).</Line>
                <Line>
                    И выведешь их ОДНИМ выводом USD → USD - заплатишь минимум/комиссию один раз, а не два, и без дорогой
                    конвертации при выводе. -- Пытаюсь сделать это
                </Line>
            </Paragraph>
            <Paragraph>Верно?</Paragraph>
            <Attachment>Uploaded “1788157581743_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:26:49.999868Z"
        >
            <Origin>01a0567f-8cce-7f11-b791-db8c985a019c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, Ана, ты на правильном экране и логика верная. Вот эта плитка справа - <Word>
                    <Bold />
                    «Convert currencies» → "Transfer funds between balances to get the currency you need"
                </Word> - это ровно то, что нам нужно. Жми её.
            </Paragraph>
            <Paragraph>Дальше по шагам:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Нажми «Convert currencies».
                    </Word>
                </Line>
                <Line>
                    Выбери: конвертировать <Word>
                        <Bold />
                        из GBP → в USD
                    </Word>.
                </Line>
                <Line>
                    Впиши сумму <Word>
                        <Bold />
                        125 GBP
                    </Word>.
                </Line>
                <Line>
                    Payoneer покажет курс и итог в USD, и <Word>
                        <Bold />
                        комиссию за конвертацию
                    </Word> (внутренняя, должна быть около 0.5%).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    И вот тут - стоп, важный момент, прежде чем подтвердить конвертацию.
                </Word> Не жми «подтвердить» сразу. Сначала <Word>
                    <Bold />
                    посмотри цифру
                </Word>, которую он покажет: сколько USD получится из 125 GBP при внутренней конвертации.
            </Paragraph>
            <Paragraph>
                Потом сравни с тем, что ты видела при прямом выводе GBP: там из 125 GBP получалось <Word>
                    <Bold />
                    161.88 USD
                </Word> (курс уже с комиссией вывода).
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Если внутренняя конвертация даёт <Word>
                        <Bold />
                        больше
                    </Word> 161.88 (например, 163-164) → значит путь «сначала конвертировать, потом вывести одним куском»
                    <Word>
                        <Bold />
                        выгоднее
                    </Word>, продолжай.
                </Line>
                <Line>
                    Если даёт <Word>
                        <Bold />
                        столько же или меньше
                    </Word> → тогда экономия только на том, что выводишь <Word>
                        <Bold />
                        один раз
                    </Word>, а не два (одна минимальная комиссия вместо двух). Всё равно может быть выгоднее, но разница
                    меньше.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Пришли мне скрин с результатом конвертации
                </Word> (сколько USD выйдет из 125 GBP и какая комиссия) - я сверю с прямым выводом и скажу точно, стоит ли
                подтверждать. Не хочу, чтобы ты подтвердила вслепую, а потом оказалось, что конвертация внутри не дешевле.
            </Paragraph>
            <Paragraph>
                Так что: жми <Word>
                    <Bold />
                    Convert currencies
                </Word>, вбей 125 GBP → USD, <Word>
                    <Bold />
                    посмотри итог, но пока не подтверждай
                </Word>, и покажи мне цифру. Тогда решим по факту 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:27:50.092722Z"
        >
            <Origin>01a05680-a98b-71d9-b192-87a111b294c7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>что думаешь?</Paragraph>
            <Attachment>Uploaded “1788157665153_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:28:08.125228Z"
        >
            <Origin>01a05680-a98b-7011-b4eb-ede80509139a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, это интересно, и картина в твою пользу - но давай посчитаю точно, потому что тут есть что сравнить.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что видно на этом экране (внутренняя конвертация):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Курс: <Word>
                        <Bold />
                        1 GBP = 1.348828628 USD
                    </Word>
                </Line>
                <Line>
                    125 GBP × 1.3488 = примерно <Word>
                        <Bold />
                        168.60 USD
                    </Word>
                </Line>
                <Line>
                    Fee и «Amount after fee» пока стоят прочерк (посчитаются, когда пойдёшь дальше), но курс уже показан.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Теперь сравни с прямым выводом GBP
                </Word> (твой прошлый скрин):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Там курс был <Word>
                        <Bold />
                        1 GBP = 1.29504 USD
                    </Word>
                </Line>
                <Line>
                    125 GBP × 1.29504 = <Word>
                        <Bold />
                        161.88 USD
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Разница огромная:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Путь</Word>
                    <Word>Курс</Word>
                    <Word>Из 125 GBP получишь</Word>
                </Line>
                <Line>
                    <Word>Прямой вывод GBP → счёт</Word>
                    <Word>1.29504</Word>
                    <Word>161.88 USD</Word>
                </Line>
                <Line>
                    <Word>Внутренняя конвертация GBP → USD</Word>
                    <Word>1.34883</Word>
                    <Word>~168.60 USD</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    То есть внутренняя конвертация даёт тебе примерно на 6.7 USD больше!
                </Word> Курс 1.3488 заметно ближе к рыночному, чем 1.29504 (там комиссия вывода вшита жёстче). Твоя гипотеза
                подтвердилась: <Word>
                    <Bold />
                    сначала сконвертировать внутри - выгоднее
                </Word>, чем выводить фунты напрямую.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Так что да - думаю, это верный ход.
                </Word> Но перед тем как жать Next до конца:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Нажми Next и посмотри строку Fee
                    </Word> - сейчас она прочерк. Когда посчитается, глянь, не съест ли комиссия конвертации разницу. По
                    правилам внутренняя конвертация ~0.5%, то есть примерно 0.8 USD - мелочь против выигрыша в 6.7. Но
                    проверь на экране, что реально покажет.
                </Line>
                <Line>Курс «плавающий» - он может чуть измениться, пока подтверждаешь. Не критично.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    План целиком (напоминаю, куда идём):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Сейчас: сконвертируй 125 GBP → ~168 USD (этот экран). Деньги лягут на USD-баланс.</Line>
                <Line>
                    Тогда на USD-балансе станет ~169 + 168 = <Word>
                        <Bold />
                        ~337 USD
                    </Word>.
                </Line>
                <Line>
                    Выведешь всё <Word>
                        <Bold />
                        одним выводом USD → USD
                    </Word> на Credo - одна комиссия вместо двух, без дорогой конвертации при выводе.
                </Line>
            </Paragraph>
            <Paragraph>
                Жми <Word>
                    <Bold />
                    Next
                </Word>, посмотри итоговую сумму и Fee, и если Fee маленькая (около 0.5%) - подтверждай, это выгодно. Пришли
                мне следующий экран с посчитанной комиссией, гляну финально перед подтверждением.
            </Paragraph>
            <Paragraph>Ты хорошо это раскрутила, Ана - нашла способ не терять на конвертации фунтов 😊</Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:29:48.701644Z"
        >
            <Origin>01a05682-7388-7560-b18e-18037ed0309f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                я не понимаю одного - почему Пейонир спрашивает МЕНЯ, сколько доллрво я хочу получить! ??? не просто сам
                конвертирует
            </Paragraph>
            <Paragraph>я подставила вот это</Paragraph>
            <Attachment>Uploaded “1788157751632_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:30:09.112549Z"
        >
            <Origin>01a05682-7388-7dcf-a7ff-21cfb479b3e1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, хороший вопрос, и я вижу, что произошло - давай разберу, потому что тут маленькая путаница с полями, и
                её надо поправить, иначе результат будет не тот.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему Payoneer спрашивает, сколько долларов ты хочешь получить:
                </Word>
            </Paragraph>
            <Paragraph>
                Это удобная функция, а не подвох. У конвертера <Word>
                    <Bold />
                    два поля, и они связаны
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>«Amount to convert» (сколько GBP отдаёшь)</Line>
                <Line>«Amount to receive» (сколько USD хочешь получить)</Line>
            </Paragraph>
            <Paragraph>
                Ты можешь заполнить <Word>
                    <Bold />
                    любое одно
                </Word>, а второе он посчитает сам. Это для тех случаев, когда тебе нужна ровная сумма именно на выходе
                (например, «хочу получить ровно 200 USD - посчитай, сколько для этого списать фунтов»).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что произошло у тебя (и почему надо поправить):
                </Word>
            </Paragraph>
            <Paragraph>
                Ты вписала в нижнее поле <Word>
                    <Bold />
                    167 USD
                </Word> - и Payoneer «подстроил» верхнее поле под это: чтобы дать тебе 167 USD, он списывает <Word>
                    <Bold />
                    124.44 GBP
                </Word> (а не все 125). То есть ты сейчас конвертируешь <Word>
                    <Bold />
                    не весь баланс фунтов
                </Word>, а чуть меньше - останется висеть <Word>
                    <Bold />
                    0.56 GBP
                </Word> мелочью на GBP-балансе.
            </Paragraph>
            <Paragraph>Смотри цифры:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Amount to convert: <Word>
                        <Bold />
                        124.44 GBP
                    </Word> (не 125!)
                </Line>
                <Line>Fee: 0.62 GBP (0.50%)</Line>
                <Line>
                    Amount to receive: <Word>
                        <Bold />
                        167 USD
                    </Word>
                </Line>
                <Line>Остаток на GBP-балансе: ~0.56 GBP</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Это не ошибка, но не оптимально:
                </Word> у тебя останется копеечный огрызок в фунтах, который потом либо пропадёт, либо его неудобно будет
                выводить.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как правильно - чтобы сконвертировать ВЕСЬ баланс фунтов:
                </Word>
            </Paragraph>
            <Paragraph>
                Заполняй <Word>
                    <Bold />
                    верхнее
                </Word> поле (Amount to convert), а нижнее оставь пустым - пусть USD посчитается сам.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Сотри 167 из нижнего поля.</Line>
                <Line>
                    В <Word>
                        <Bold />
                        верхнее
                    </Word> поле впиши <Word>
                        <Bold />
                        125
                    </Word> GBP (весь баланс) - или нажми на «125.00 GBP» вверху (та синяя ссылка-максимум), она подставит
                    весь баланс.
                </Line>
                <Line>
                    Тогда Payoneer сам посчитает: 125 − комиссия 0.5% = ~124.37 GBP × 1.3487 ≈ <Word>
                        <Bold />
                        ~167.7 USD
                    </Word> к получению.
                </Line>
                <Line>И GBP-баланс обнулится полностью, без огрызка.</Line>
            </Paragraph>
            <Paragraph>
                То есть <Word>
                    <Bold />
                    правило простое: ты вводишь, сколько ОТДАЁШЬ (GBP), а не сколько хочешь получить (USD)
                </Word> - тогда конвертируется весь баланс без остатка.
            </Paragraph>
            <Paragraph>
                Поправь верхнее поле на полные 125 GBP (или жми синюю ссылку «125.00 GBP»), убедись, что нижнее
                пересчиталось само, и тогда Next. Пришли скрин перед подтверждением - гляну, что весь баланс уходит и
                остатка не остаётся 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:30:49.790135Z"
        >
            <Origin>01a05683-67d3-773b-bcd3-1d19362fa334</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List />
                <Line>это сработало только сейчас!</Line>
            </Paragraph>
            <Attachment>Uploaded “1788157841388_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:31:00.828984Z"
        >
            <Origin>01a05683-67d3-706d-8d70-bd8e3fd89f2e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот теперь всё правильно, Ана! Сработало ровно как надо. Смотрю цифры - идеально:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Amount to convert: 125 GBP
                    </Word> (весь баланс, без огрызка) ✓
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fee: 0.62 GBP (0.50%)
                    </Word> - та самая дешёвая внутренняя комиссия ✓
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Amount after fee: 124.38 GBP
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Курс: 1 GBP = 1.348928
                    </Word> (почти рыночный)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Amount to receive: 167.78 USD
                    </Word> ✓
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Сравни, сколько ты выиграла:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Прямой вывод фунтов дал бы: <Word>
                        <Bold />
                        161.88 USD
                    </Word>
                </Line>
                <Line>
                    Твоя конвертация даёт: <Word>
                        <Bold />
                        167.78 USD
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Выигрыш: ~5.9 USD
                    </Word> только на том, что сконвертировала внутри, а не вывела GBP напрямую. 👍
                </Line>
            </Paragraph>
            <Paragraph>
                Комиссия всего 0.62 GBP (полдоллара) против скрытой ~2% при прямом выводе. Твоя гипотеза полностью
                подтвердилась на цифрах.
            </Paragraph>
            <Paragraph>
                Жми <Word>
                    <Bold />
                    Next
                </Word> и подтверждай - это выгодный ход.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что дальше по плану:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Подтверди конвертацию → 167.78 USD упадут на твой USD-баланс.</Line>
                <Line>
                    Тогда на USD-балансе станет: 169.00 + 167.78 = <Word>
                        <Bold />
                        ~336.78 USD
                    </Word>.
                </Line>
                <Line>
                    Теперь выводи <Word>
                        <Bold />
                        всё одним выводом USD → USD
                    </Word> на Credo - одна комиссия за вывод вместо двух, и без дорогой конвертации.
                </Line>
            </Paragraph>
            <Paragraph>
                Подтверждай конвертацию, дождись, пока доллары появятся на балансе (пишут «в течение минут»), и потом
                настраивай вывод всей суммы одним куском. Как сконвертируется - покажи баланс, и пойдём к финальному выводу.
            </Paragraph>
            <Paragraph>Отличная работа, Ана - ты выжала из этого максимум 😊</Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:35:39.318543Z"
        >
            <Origin>01a05687-d338-79f5-bffa-99edd4ca03d2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>я не добираю до минимальной суммы, на которой fee становится выгодным</Paragraph>
            <Paragraph>
                сколько доларов я бы сэкономила по сравнению с нынешней ситуацией, если бы выводила, когда наберу 375
                доллраов?
            </Paragraph>
            <Paragraph>
                если ли для меня смысл запросить ранний вывод на Fiverr, заплатив комиссию в 1.2 доллавра (см. скрин), чтобы
                сделать сумму на вывод на Пейонире выше, и не переплачивать комиссию? ты понимаешь ситуацию?
            </Paragraph>
            <Paragraph>
                я могу дослать денег на Пейонир с Файверра, но я должна буду заплатить лишие 1.2 долара стоит ли?
            </Paragraph>
            <Attachment>Uploaded “1788157968615_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1788158044641_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-31T06:36:18.524579Z"
        >
            <Origin>01a05687-d338-7d96-8c17-ee6f8bce0e13</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, Ана, я понимаю ситуацию полностью, и это отличный, точный вопрос по оптимизации. Давай посчитаю на
                цифрах, а не на ощущениях - ты сама увидишь ответ.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Твоя нынешняя ситуация (первый скрин):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Выводишь 336.78 USD</Line>
                <Line>
                    Fee: <Word>
                        <Bold />
                        15 USD
                    </Word> (потому что сумма ≤ 375 → минималка 15)
                </Line>
                <Line>Придёт: 321.78 USD</Line>
                <Line>
                    Комиссия в процентах: 15 / 336.78 = <Word>
                        <Bold />
                        4.45%
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Разберём твои два вопроса отдельно, потому что это разные вещи.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вопрос 1: сколько сэкономлю, если дождусь 375+?
                </Word>
            </Paragraph>
            <Paragraph>Тут надо понять, как ведёт себя комиссия на границе 375. Помнишь наши прошлые замеры:</Paragraph>
            <Paragraph>
                <List />
                <Line>500 → 20 (4%)</Line>
                <Line>1000 → 40 (4%)</Line>
                <Line>2500 → 100 (4%)</Line>
            </Paragraph>
            <Paragraph>
                То есть <Word>
                    <Bold />
                    выше 375 комиссия становится 4% процентом
                </Word>, а не фиксом 15. Проверим на границе:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    На 375: 4% = <Word>
                        <Bold />
                        15
                    </Word> ← ровно стык! (поэтому граница именно 375: 375 × 4% = 15)
                </Line>
                <Line>
                    На 336.78: фикс <Word>
                        <Bold />
                        15
                    </Word> = 4.45%
                </Line>
            </Paragraph>
            <Paragraph>
                Вот в чём суть: <Word>
                    <Bold />
                    до 375 ты платишь фиксированные 15 (и процент тем выше, чем меньше сумма). После 375 платишь ровно 4%.
                </Word>
            </Paragraph>
            <Paragraph>
                Значит если бы ты вывела <Word>
                    <Bold />
                    ровно 375
                </Word> вместо 336.78:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Комиссия всё равно <Word>
                        <Bold />
                        15
                    </Word> (это стык), процент = 4%.
                </Line>
                <Line>
                    Экономия против нынешних 4.45% - <Word>
                        <Bold />
                        копеечная
                    </Word>, потому что 15 ты платишь и так, и так.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важный вывод: дожидаться именно 375 смысла почти нет.
                </Word> Ты платишь те же 15. Экономия появляется только если выводить <Word>
                    <Bold />
                    сильно больше
                </Word> 375, потому что тогда фикс 15 «размывается»... <Word>
                    <Bold />
                    но нет
                </Word> - выше 375 это уже 4% процентом, и он не размывается, он постоянный. Мы это выяснили: 4% на любой
                сумме выше границы.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    То есть реального «выгодного порога» после 375 нет
                </Word> - там ровные 4% навсегда. Единственная неэффективность - это выводить <Word>
                    <Bold />
                    меньше 375
                </Word>, где фикс 15 даёт процент выше 4%. Твои 336.78 дают 4.45% - то есть ты переплачиваешь всего <Word>
                    <Bold />
                    ~0.6%
                </Word> против идеальных 4%. Это примерно <Word>
                    <Bold />
                    2 доллара
                </Word> лишних. Не 15, а 2.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вопрос 2: стоит ли доплатить $1.20 за ранний вывод Fiverr, чтобы добить сумму выше 375?
                </Word>
            </Paragraph>
            <Paragraph>Считаем честно:</Paragraph>
            <Paragraph>
                <List />
                <Line>Сейчас теряешь на «недоборе»: ~2 USD (переплата 0.6% из-за того, что сумма &lt; 375).</Line>
                <Line>
                    Чтобы это исправить, ты хочешь заплатить <Word>
                        <Bold />
                        1.20 за Early Payout
                    </Word> + добавить деньги с Fiverr.
                </Line>
            </Paragraph>
            <Paragraph>
                Но смотри в чём ловушка: даже если добьёшь сумму до 375+, ты всё равно платишь <Word>
                    <Bold />
                    4%
                </Word> (15 на 375). Ты не уходишь от комиссии, ты просто перестаёшь переплачивать те ~0.6%. То есть
                максимум, что ты «спасаешь» доплатой 1.20 - это около <Word>
                    <Bold />
                    2 долларов
                </Word>. Потратить 1.20, чтобы сэкономить ~2 - это выигрыш меньше доллара, и то в идеале.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мой честный вывод: нет, не стоит городить Early Payout ради этого.
                </Word> Игра не стоит свеч - экономия копеечная, а возни много, и ты платишь реальные 1.20 за гипотетические
                2.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что реально имеет смысл (это важнее оптимизации на копейки):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Не выводи 336 сейчас, если не горит.
                    </Word> Пусть полежит на балансе Payoneer (там деньги хранятся бесплатно). Дождись, пока естественным
                    образом накопится <Word>
                        <Bold />
                        побольше
                    </Word> - Shutterstock, Fiverr докапают. Тогда выведешь крупнее, и фикс 15 (до 375) или 4% (после) будут
                    на большую сумму.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Но помни главное, что мы выяснили: после 375 всё равно 4% всегда.
                    </Word> Так что «копить до бесконечности» тоже не даёт экономии сверх 4%. Оптимум простой: <Word>
                        <Bold />
                        не выводить суммы меньше 375
                    </Word> (чтобы не платить фикс 15 как высокий процент), а всё, что 375+, выводить когда удобно - процент
                    один.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Реальная экономия - не в размере вывода, а в другом канале.
                    </Word> Помнишь, мы говорили: 4% Payoneer + комиссии посредников (~3%) = дорого. Вот где деньги.
                    Настоящий выход - смотреть <Word>
                        <Bold />
                        Wise
                    </Word> или <Word>
                        <Bold />
                        Payoneer-карту
                    </Word> для трат, а не выжимать копейки из порога 375.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого по твоим вопросам:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Ждать 375 вместо 336: экономия ~2 USD. Почти ничего.</Line>
                <Line>
                    Платить 1.20 за Early Payout ради этого: <Word>
                        <Bold />
                        не стоит
                    </Word>, съедает почти всю выгоду.
                </Line>
                <Line>
                    Лучше: либо вывести сейчас как есть (потеря 0.6% несущественна), либо дать балансу накопиться крупнее
                    естественным путём и вывести без спешки.
                </Line>
            </Paragraph>
            <Paragraph>
                Ты правильно мыслишь про оптимизацию, Ана, просто в этом конкретном случае цифры говорят: разница копеечная,
                не трать на неё силы и 1.20. Настоящую экономию искать надо в канале вывода (Wise/карта), а не в пороге.
                Хочешь - разберём Wise на реальных цифрах, вот там может быть ощутимо?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:37:42.095219Z"
        >
            <Origin>01a05689-b518-7ea5-b1ed-20c0f3849184</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>сколько будет сумма на пеонир, если я добавлю туда 198 доларов?</Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:38:03.055714Z"
        >
            <Origin>01a05689-b518-7ede-80ce-555e3b7451d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Ана, давай посчитаю точно.</Paragraph>
            <Paragraph>
                Сейчас на USD-балансе Payoneer: <Word>
                    <Bold />
                    336.78 USD
                </Word> (169 было + 167.78 от конвертации фунтов).
            </Paragraph>
            <Paragraph>
                Если добавишь <Word>
                    <Bold />
                    198 USD
                </Word>:
            </Paragraph>
            <Paragraph>
                336.78 + 198 = <Word>
                    <Bold />
                    534.78 USD
                </Word>
            </Paragraph>
            <Paragraph>
                Это уже <Word>
                    <Bold />
                    выше порога 375
                </Word>, значит комиссия за вывод будет считаться как <Word>
                    <Bold />
                    4%
                </Word> (а не фикс 15):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Вывод 534.78 → комиссия 4% = <Word>
                        <Bold />
                        ~21.39 USD
                    </Word>
                </Line>
                <Line>
                    Придёт на Credo (со стороны Payoneer): <Word>
                        <Bold />
                        ~513.39 USD
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Сравни с процентами:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Сейчас (336.78): фикс 15 = <Word>
                        <Bold />
                        4.45%
                    </Word>
                </Line>
                <Line>
                    После (534.78): 4% = <Word>
                        <Bold />
                        ровно 4%
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но давай честно, чтобы ты не обольщалась
                </Word> - помнишь наш прошлый расчёт? Разница между 4.45% и 4% на этих суммах - это экономия около <Word>
                    <Bold />
                    2-3 долларов
                </Word> по процентам. А сам факт, что сумма стала больше, означает и комиссию в абсолюте больше (21 вместо
                15) - просто потому что выводишь больше денег. Ты не «экономишь» доплатой, ты just выводишь бОльшую сумму
                под чуть более низкий процент.
            </Paragraph>
            <Paragraph>И два вопроса к тебе, прежде чем добавлять эти 198:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Эти 198 с Fiverr требуют доплаты $1.20 за Early Payout?
                    </Word> Если да - вспомни наш вывод: платить 1.20 ради экономии ~2-3 USD на проценте почти не имеет
                    смысла. Если же 198 доступны к выводу <Word>
                        <Bold />
                        без
                    </Word> доплаты (уже прошли clearing period) - тогда добавляй спокойно, это чистый плюс.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Тебе эти деньги нужны на счету сейчас?
                    </Word> Если нет - можно вообще не спешить, пусть копятся на балансе бесплатно, выведешь потом ещё
                    крупнее.
                </Line>
            </Paragraph>
            <Paragraph>
                Так что: <Word>
                    <Bold />
                    534.78 USD
                </Word> будет сумма. Но добавлять 198 стоит, только если они идут <Word>
                    <Bold />
                    без
                </Word> платы 1.20 - тогда да, выведешь всё крупным куском под 4%. Если за них надо платить 1.20 - экономия
                на проценте этого не оправдывает.
            </Paragraph>
            <Paragraph>Сколько там с Fiverr - доступно без доплаты или только через Early Payout за 1.20?</Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:38:17.992425Z"
        >
            <Origin>01a0568a-3fb5-7339-83fd-ce81d90be764</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Тебе эти деньги нужны на счету сейчас?  -да, срочно</Paragraph>
        </Message>
        <Message
            at="2026-08-31T06:38:34.112895Z"
        >
            <Origin>01a0568a-3fb5-72dc-82b2-dcf2917a1d67</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Понятно, Ана - раз деньги нужны срочно, то оптимизация комиссий отходит на второй план. Когда нужно сейчас,
                «сэкономить 2 доллара, подождав» - это не вариант. Давай решать по срочности, а не по копейкам.
            </Paragraph>
            <Paragraph>Вот прямой ответ:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Если 198 с Fiverr доступны быстро (даже за $1.20 Early Payout) и тебе нужна максимальная сумма на счету срочно - бери их.
                </Word> В ситуации «нужно срочно» $1.20 - это не та сумма, из-за которой стоит колебаться. Ты получишь на
                счёт больше денег, а это сейчас важнее, чем идеальный процент.
            </Paragraph>
            <Paragraph>Считаем итог, чтобы ты видела, что придёт:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Баланс станет: 336.78 + 198 = <Word>
                        <Bold />
                        534.78 USD
                    </Word>
                </Line>
                <Line>Комиссия вывода 4%: ~21.39</Line>
                <Line>
                    <Word>
                        <Bold />
                        На Credo придёт от Payoneer: ~513 USD
                    </Word>
                </Line>
                <Line>
                    Минус комиссии банков-посредников на входе (помнишь, ~15-17 в прошлый раз) → на счёт реально ляжет
                    примерно <Word>
                        <Bold />
                        495-500 USD
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    НО - честное предупреждение про срочность, это важнее комиссий:
                </Word>
            </Paragraph>
            <Paragraph>
                Помнишь, твой прошлый вывод 500 шёл <Word>
                    <Bold />
                    несколько дней
                </Word> (через BNY Mellon)? А вот 57.11 от Shutterstock пришли быстро (через Citibank Europe). <Word>
                    <Bold />
                    Скорость зависит от маршрута, и ты не можешь его выбрать.
                </Word> Payoneer пишет «within 1 business day», но по факту USD-перевод через посредников может идти и 1-3
                дня.
            </Paragraph>
            <Paragraph>
                Поэтому, если деньги нужны <Word>
                    <Bold />
                    буквально сегодня-завтра
                </Word>, вывод с Payoneer может не успеть - он не мгновенный. Это надо честно держать в голове.
            </Paragraph>
            <Paragraph>Скажи мне, чтобы я помог правильно:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Насколько срочно
                    </Word> - деньги нужны сегодня, или в ближайшие 2-3 дня терпит?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        198 с Fiverr
                    </Word> - они доступны к выводу без Early Payout, или только за 1.20?
                </Line>
            </Paragraph>
            <Paragraph>
                Если нужно <Word>
                    <Bold />
                    прямо сегодня
                </Word> - вывод Payoneer может не успеть, и тогда думаем про то, что уже есть на Credo (у тебя же там 250
                лари + 57 USD + 462 от прошлого вывода должны были прийти). Если терпит <Word>
                    <Bold />
                    2-3 дня
                </Word> - тогда добавляй 198 (даже за 1.20, раз срочно) и выводи всё одним куском.
            </Paragraph>
            <Paragraph>Что со сроком - сегодня край, или пара дней есть?</Paragraph>
        </Message>
    </Chapter>
);

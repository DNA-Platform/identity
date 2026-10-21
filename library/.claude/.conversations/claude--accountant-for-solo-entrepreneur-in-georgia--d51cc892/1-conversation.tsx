import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Math, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-30T11:28:30.054866Z"
        >
            <Origin>019f1849-aeb6-7d86-a833-4c16eacef88b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, мне нужн бухгалтер для ведения налоговой отчетности для моего solo entreprioner (ты знаешь, кто я) вот
                фото из моего ЛК подскажи, если тебе нужна еще инфа, просмотри чаты этого проекта. Клод, посмотри компании
                Тбилиси, которые предоставляют такие услуши - оплата налогов и помощь во всем необходимом для ведения
                бизнеса в Грузии. Мы обращались в ExpatHub,но у них дороговато - 200 лари в месяц. мы хотим поменьше
            </Paragraph>
            <Paragraph>дай мне список, пождалуйт, потом напишем текст и всем напишем</Paragraph>
            <Attachment>Uploaded “1782818821818_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-30T11:29:51.550505Z"
        >
            <Origin>019f1849-aeb6-7a0c-9c5b-d7c1dfa4868f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “бухгалтер ИП Грузия малый бизнес 1% налоги Тбилиси цена”</Action>
            <Action>
                Searched the web for “бухгалтерское обслуживание ИП Грузия ежемесячно цена лари фрилансер декларация”
            </Action>
            <Action>Searched the web for “Expertos.ge цена тариф ИП малый бизнес лари в месяц”</Action>
            <Action>Fetched https://expertos.ge/</Action>
            <Action>
                Searched the web for “бухгалтер для ИП Грузия 1% дешево 50 70 100 лари в месяц декларация удаленно telegram”
            </Action>
            <Paragraph>
                Аня, привет. Да, я помню твою ситуацию: ИП DNA (დიენეი), статус малого бизнеса 1%, клиенты только
                иностранные (Fiverr, лаборатория в США, сток-площадки), деньги идут через Payoneer на бизнес-счёт Credo.
                Скриншот из ЛК понятен - это раздел выдачи документов/информации на My.gov.ge, к выбору бухгалтера он
                напрямую не относится, так что доп. инфы мне пока не нужно.
            </Paragraph>
            <Paragraph>
                Вот список сервисов и бухгалтеров, которые ведут именно ИП со статусом малого бизнеса. Все дешевле, чем
                ExpatHub (200 лари). Цены, которые я смог проверить прямо на сайте компании, помечаю как «проверено»;
                остальные взяты со страниц самих компаний, но точную сумму под твой профиль лучше уточнить в переписке.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Expertos (expertos.ge)
                </Word> - проверено сегодня на сайте
            </Paragraph>
            <Paragraph>
                <List />
                <Line>150 лари/мес; 720 лари за 6 мес (= 120/мес); 1200 лари за год (= 100/мес).</Line>
                <Line>
                    Онлайн-сервис: настраивают ЛК на rs.ge, ты грузишь банковскую выписку, они считают налог по курсу НБГ и
                    подают декларацию, присылают PDF-отчёт.
                </Line>
                <Line>Офис: Тбилиси, Sanapiros 2A. Контакт: Telegram @expertos_accounter, hello@expertos.ge.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. MyReloc (myreloc.com)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Заявленная стандартная цена для ИП малый бизнес: 120 лари/мес (~$45).</Line>
                <Line>Русскоязычные, ведут ИП и ООО, помогают с регистрацией и отчётностью.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Relocup (relocup.com)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Ведение учёта и подача деклараций «от $50 в месяц».</Line>
                <Line>Русскоязычные, чат в WhatsApp/Telegram на сайте.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Sharkyyy (sharkyyy.com)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Онлайн-бухгалтерия специально под грузинское ИП. Цену на сайте не нашёл - надо спросить.</Line>
                <Line>
                    Важно для тебя: они прямо пишут, что отслеживают <Word>
                        <Bold />
                        обратный НДС
                    </Word> (reverse-charge на покупки услуг у иностранных компаний). Это твоя реальная обязанность, и не
                    все бухгалтеры о ней помнят, поэтому Sharkyyy стоит в списке.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. IE/Business Georgia - бот @ipgeorgiabot / менеджер @manageripgeorgia
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Крупное русскоязычное сообщество по грузинским ИП, берут бухгалтерию на сопровождение через бота. Цену
                    нужно уточнить в чате, но обычно это бюджетный сегмент.
                </Line>
            </Paragraph>
            <Paragraph>
                Чего я <Word>
                    <Bold />
                    не
                </Word> проверил и где нельзя верить на слово: точную месячную цену именно под твой случай ни у кого, кроме
                Expertos, я не подтвердил. У всех остальных цифры - это их общая реклама, а финальная сумма может зависеть
                от числа источников дохода и обратного НДС.
            </Paragraph>
            <Paragraph>
                Когда будем писать им всем, я бы заложил в текст три проверочных вопроса, чтобы сразу отсеять тех, кто не
                понимает твой профиль:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Точная цена в месяц для ИП «малый бизнес» 1%, клиенты только иностранные, без НДС-регистрации.</Line>
                <Line>
                    Учитывают ли они <Word>
                        <Bold />
                        обратный НДС
                    </Word> на покупки у нерезидентов (это покажет уровень).
                </Line>
                <Line>
                    Подают ли <Word>
                        <Bold />
                        нулевые декларации
                    </Word> в месяцы без дохода (обязательно для тебя).
                </Line>
            </Paragraph>
            <Paragraph>
                Скажи, и я составлю короткий двуязычный текст (русский + английский на случай, если кто-то отвечает
                по-английски), который ты разошлёшь по всем пятерым. Хочешь, добавлю ещё пункт про дату активации статуса и
                первую декларацию (за июнь, срок до 15 июля), чтобы сразу увидеть, кто из них в теме по срокам?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T11:35:31.964001Z"
        >
            <Origin>019f1850-1f2b-705b-95dd-2f6bb35fc285</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Да, пожалуйста, помоги с текстами</Paragraph>
        </Message>
        <Message
            at="2026-06-30T11:36:12.690174Z"
        >
            <Origin>019f1850-1f2b-767c-8223-6d9205534768</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно. Сделал два варианта - русский (основной, под Expertos, MyReloc, Relocup, ipgeorgiabot) и английский
                (на случай, если Sharkyyy или кто-то ещё отвечает по-английски). Текст короткий, под Telegram/WhatsApp, со
                всеми проверочными вопросами внутри.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Готово. Два варианта выше - можно копировать и отправлять.</Paragraph>
            <Paragraph>Пара практических замечаний по рассылке:</Paragraph>
            <Paragraph>
                Большинство контактов русскоязычные (Expertos, MyReloc, Relocup, ipgeorgiabot) - им шлёшь русский вариант.
                Английский держи для Sharkyyy или если кто-то ответит по-английски.
            </Paragraph>
            <Paragraph>
                Я намеренно <Word>
                    <Bold />
                    не
                </Word> указал в тексте регистрационный номер ИП, дату регистрации и IBAN - в первом холодном сообщении это
                лишнее. Дашь эти данные только тому, с кем реально договоришься о работе.
            </Paragraph>
            <Paragraph>
                Вопрос №2 (обратный НДС) - твой главный фильтр. Если бухгалтер переспрашивает «какой ещё обратный НДС?», это
                плохой знак: у тебя эта обязанность реально есть на покупках услуг у нерезидентов. Кто отвечает уверенно -
                тот в теме.
            </Paragraph>
            <Paragraph>
                По вопросу №4 будь готова, что ответы разойдутся: тут была мартовская правка 2026 года, по которой статус
                малого бизнеса действует с даты подачи заявления, и из-за этого первая декларация может быть за июнь (срок
                до 15 июля). Это как раз способ проверить, кто следит за актуальным законодательством, а кто отвечает по
                старой схеме. Точную дату активации статуса всё равно стоит сверить по твоему сертификату.
            </Paragraph>
            <Paragraph>
                Когда соберёшь ответы - могу свести их в табличку (цена / обратный НДС / нулевые / срок первой декларации),
                чтобы выбор был наглядным.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:13:01.445016Z"
        >
            <Origin>019f18a9-623f-7c01-b792-791cb497b50e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Отлично! Отправила: hello@expertos.ge</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>MyReloc в Телеграм</Line>
            </Paragraph>
            <Paragraph>https://t.me/Lotman_ge - в телеграм (это Relocup (relocup.com)</Paragraph>
            <Paragraph>Клод, перепиши теперь сообщение на англйиском, чтобы я отправила Шарк</Paragraph>
            <Paragraph>
                и следующим гагом я попрошу тебя найти еще другие не обящателно русскоязычные компании в Тбилиси, клторе
                представляют такую услугу. этого мало, что ммы написали
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:13:22.752937Z"
        >
            <Origin>019f18a9-623f-7806-8fca-844b3fa20336</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вот английский вариант для Sharkyyy. Чуть подправил под то, что это онлайн-сервис/платформа, а не
                индивидуальный бухгалтер.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>
                Добавил один новый вопрос (№5) специально для Sharkyyy: подают ли они декларацию за тебя или только считают
                налог и готовят форму, а отправлять должна ты сама. У автоматизированных сервисов это часто разделено, и для
                тебя это важно - тебе нужна именно подача, а не калькулятор.
            </Paragraph>
            <Paragraph>
                Готов к следующему шагу. Когда скажешь, найду ещё компании в Тбилиси (в том числе не русскоязычные -
                международные/англоязычные бухгалтерские фирмы, которые ведут ИП с малым статусом), проверю, что они реально
                работают и сайты открываются, и дам тебе расширенный список с контактами.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:20:01.586275Z"
        >
            <Origin>019f18af-ca46-755e-bb47-34d9b29410ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                да, пожалуйста, сделай еще одно исследование рынка этих услуг в Грузии. мне не нужны русские сайты - мне
                нужны компании, которые помогают с бухгалтерией таклму бизнесу как мой.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:21:20.570264Z"
        >
            <Origin>019f18af-ca46-7e83-9ce2-83d63764c820</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хорошо, делаю отдельное исследование - англоязычные и грузинские бухгалтерские фирмы для ИП малого бизнеса.
                Поищу на английском и на грузинском, проверю, что компании реальные и сайты открываются.
            </Paragraph>
            <Action>
                Searched the web for “accounting services Tbilisi individual entrepreneur small business 1% freelancer
                monthly”
            </Action>
            <Action>Searched the web for “ბუღალტრული მომსახურება ინდმეწარმე მცირე ბიზნესი თბილისი ფასი თვეში”</Action>
            <Paragraph>
                Нашёл хороший набор. Проверю цены на одной англоязычной фирме, где есть страница с тарифами.
            </Paragraph>
            <Action>Fetched https://www.polarisfinance.ge/en/plans</Action>
            <Paragraph>
                Готово. Вот англоязычные и грузинские фирмы, которые ведут бухгалтерию для ИП малого бизнеса. Разбил на две
                группы: международные/англоязычные фирмы и грузинские локальные (часто дешевле, но проще по уровню).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Англоязычные фирмы в Тбилиси
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Polaris Finance (polarisfinance.ge)
                </Word> - проверено сегодня на сайте
            </Paragraph>
            <Paragraph>
                <List />
                <Line>ИП: 150 лари/мес. Включено: личный бухгалтер, ежемесячная консультация, подача деклараций.</Line>
                <Line>Англоязычный сайт и обслуживание. Тел. +995 511 42 10 10, info@polarisfinance.ge.</Line>
                <Line>Среди клиентов - местные компании и стартапы, выглядит как нормальная действующая фирма.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Bookkeeping.ge
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    ИП со статусом малого бизнеса (1%): от 200 лари/мес по их прайсу (обычное ИП без статуса - от 350).
                </Line>
                <Line>
                    Английские бухгалтеры, специализируются на иностранных владельцах. Это не дешевле ExpatHub, но как
                    запасной англоязычный вариант годится.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Andersen in Georgia (ge.andersen.com)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Часть международной сети Andersen Global. На сайте прямо написано, что ведут международных фрилансеров и
                    творческих специалистов на статусе малого бизнеса.
                </Line>
                <Line>
                    Цену не публикуют - под запрос. Скорее всего дороже остальных, но это самый «солидный» международный
                    вариант, если важна репутация и качество cross-border.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. PB Services (pbservices.ge)
                </Word> - языки: английский, русский, грузинский. Ежемесячное сопровождение ИП, цена под запрос.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Georgia Assistant (georgia-assistant.ge)
                </Word> - английский. Бухгалтерское сопровождение ИП, цена под запрос.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Tbilisi Expat (tbilisi-expat.com)
                </Word> - английский, всё в одном (регистрация + бухгалтерия + юр. адрес). Важно: это <Word>
                    <Bold />
                    другая
                </Word> компания, не ExpatHub, несмотря на похожее название. Цена под запрос.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Грузинские локальные (дешевле, но проще)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    7. Ester Georgia (через servisebi.ge)
                </Word> - 50-70 лари/мес за ведение ИП/малого бизнеса и ежемесячную подачу деклараций. Грузинский, частично
                английский.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    8. Сертифицированные частные бухгалтеры (servisebi.ge, ss.ge)
                </Word> - подача деклараций от 30-50 лари/мес. Грузинский, общение на грузинском и английском.
            </Paragraph>
            <Paragraph>
                Важная оговорка по самым дешёвым (пункты 7-8): за 30-70 лари обычно это «только подача декларации». Для
                твоего профиля - иностранный доход, Payoneer, <Word>
                    <Bold />
                    обратный НДС
                </Word> на покупки услуг у нерезидентов - такой минимальный пакет рискован: человек может просто не вести
                обратный НДС и не разбираться в cross-border. Поэтому при общении с ними тот же вопрос №2 про reverse-charge
                остаётся ключевым фильтром.
            </Paragraph>
            <Paragraph>
                Что проверил сам: цену Polaris (150) - прямо на их сайте сегодня. Цены Bookkeeping.ge, Ester и частников -
                это то, что указано на их страницах/объявлениях, финальную сумму под твой случай надо подтверждать в
                переписке. У Andersen, PB Services, Georgia Assistant и Tbilisi Expat публичной цены нет - только запрос.
            </Paragraph>
            <Paragraph>
                Все шесть англоязычных поймут английский текст, который я уже сделал для Sharkyyy - его можно слать им без
                изменений. Хочешь, соберу для тебя короткую таблицу со всеми контактами (и из первой пятёрки, и из этой),
                чтобы рассылать по одной?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T14:20:30.716239Z"
        >
            <Origin>019f18e7-1cbc-7387-a279-d56e20052649</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот наши ответы (делаем эдитабл артефакт) Sales Manager &lt;manager@espero.ge&gt; 6:01 PM (18 minutes ago)
                to me Здравствуйте меня зовут Тамара я менеджер компании Espero group . Бухобслуживание у нас стоит 50$ в
                мес ( не важно декларация нулевая или с цифрами ), но у нас также есть пакеты ( чем больше , тем дешевле )
                например за 6 мес стоит 250<Math>{", а за год 450"}</Math>. Если статус получен в июне , то с 1по 15 июля
                нужно сдать первую декларацию
            </Paragraph>
            <Paragraph>
                &#91;6/30/2026 5:45 PM&#93; Lotman Georgia: 1. Подача нулевой декларации 30 долларов, подача деклараций до
                4х поступлений 40 долларов. 2. НДС не учитывается, если вы не платите НДС 3. Да, подаём &#91;6/30/2026 5:46
                PM&#93; Lotman Georgia: 4. Первая декларация подаётся с 5 по 15 июля
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T14:24:00.781259Z"
        >
            <Origin>019f18e7-1cbc-738a-a152-bcb872b8f7aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Делаю интерактивный редактируемый трекер. Сначала загляну в гайд по оформлению, потом соберу.
            </Paragraph>
            <Action>Read /mnt/skills/public/frontend-design/SKILL.md</Action>
            <Paragraph>
                Собрал редактируемый трекер. Можно править прямо в ячейках, менять статус, добавлять и удалять строки -
                изменения сохраняются. Внутри уже занесены оба ответа (Espero и Lotman/Relocup), отправленные но пока без
                ответа (Expertos, MyReloc, Sharkyyy) и несколько ещё не написанных вариантов из исследования.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Готово. Таблица редактируемая: правишь в ячейках, статус меняешь выпадающим списком (цвет строки
                подстраивается), кнопки «Добавить строку», «Удалить» (× справа), «Сбросить» и «Скачать CSV» - последнее
                удобно, чтобы отправить Дагу. Правки сохраняются автоматически.
            </Paragraph>
            <Paragraph>Два замечания по уже полученным ответам:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lotman/Relocup
                </Word> дал на вопрос про обратный НДС уклончивый ответ - «НДС не учитывается, если вы не платите НДС». Это
                не про reverse-charge. У тебя обязанность по обратному НДС есть <Word>
                    <Bold />
                    независимо
                </Word> от того, зарегистрирована ли ты плательщиком НДС, - она возникает на покупках услуг у нерезидентов
                (например, подписки на софт, комиссии площадок). Так что либо менеджер не понял вопрос, либо они это не
                ведут. Я пометил ячейку красным. За $30-40 это самый дешёвый вариант, но именно этот пункт надо добить
                отдельным прямым вопросом.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Espero
                </Word> про обратный НДС вообще не ответил - только цену и срок первой декларации. Зато «нулевая или с
                цифрами - одинаково» означает, что нулевые они ведут (это твой вопрос 3, считай закрыт). Их годовой пакет
                $450 (~$37,5/мес) - самый выгодный из помесячных по деньгам.
            </Paragraph>
            <Paragraph>
                По срокам оба сошлись: первая декларация за июнь подаётся <Word>
                    <Bold />
                    1-15 июля
                </Word>. Это совпадает с тем, что мы и предполагали.
            </Paragraph>
            <Paragraph>
                Когда придут ответы от Expertos, MyReloc и Sharkyyy - просто скинь их мне, я добавлю в таблицу, или впиши
                сама.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:03.591874Z"
        >
            <Origin>019f1c51-feca-75b4-89d3-b3197c01509c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я собираюсь рассылать этот текст в англоязычные фирмы: Hello! I'd like to use your service for an
                Individual Entrepreneur with Small Business status (1%) in Georgia. My profile:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Activity: illustration and cartography (graphic/digital design).</Line>
                <Line>Foreign clients only (Fiverr, a US laboratory, stock platforms).</Line>
                <Line>Income comes in via Payoneer to a Credo business account.</Line>
                <Line>The IE is recently registered and Small Business status is already granted.</Line>
            </Paragraph>
            <Paragraph>A few questions before I sign up:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the exact monthly price for an IE on Small Business 1% (no VAT registration, no employees)?
                </Line>
                <Line>Does your service handle reverse-charge VAT on purchases of services from non-residents?</Line>
                <Line>Do you file zero (nil) declarations automatically for months with no income?</Line>
                <Line>
                    In your estimate, which month is my first declaration and what is the filing deadline? (status granted
                    in June)
                </Line>
                <Line>
                    Do you file the declaration on my behalf, or does the service only calculate the tax and prepare the
                    form for me to submit?
                </Line>
            </Paragraph>
            <Paragraph>Thank you!</Paragraph>
            <Paragraph>скажи, он точно отражает мой запрос о том, что мне нужны услуши бухгалтера?</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:24.210217Z"
        >
            <Origin>019f1c51-feca-721a-b89f-ada434d0521a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Почти да, но есть одно слабое место: сам запрос «I'd like to use your service» не говорит прямо, что тебе
                нужно именно <Word>
                    <Bold />
                    ежемесячное бухгалтерское сопровождение
                </Word>. Эти фирмы делают много всего - регистрацию ИП, юр. адрес, ВНЖ, бухгалтерию. Из твоего текста
                понятно только по вопросам ниже, а первая фраза может быть прочитана как «помогите зарегистрировать/получить
                статус». Регистрация у тебя уже сделана, так что стоит это сразу отсечь.
            </Paragraph>
            <Paragraph>
                Достаточно поправить первую строку - остальное отражает запрос корректно. Вот версия с уточнённым началом:
            </Paragraph>
            <Paragraph>
                Hello! I'm looking for <Word>
                    <Bold />
                    ongoing monthly accounting / bookkeeping
                </Word> for an Individual Entrepreneur with Small Business status (1%) in Georgia - i.e. monthly tax
                declaration filing and compliance. My IE is <Word>
                    <Bold />
                    already registered and Small Business status is already granted
                </Word>, so I don't need registration help, only the monthly accounting service.
            </Paragraph>
            <Paragraph>My profile:</Paragraph>
            <Paragraph>
                <List />
                <Line>Activity: illustration and cartography (graphic/digital design).</Line>
                <Line>Foreign clients only (Fiverr, a US laboratory, stock platforms).</Line>
                <Line>Income comes in via Payoneer to a Credo business account.</Line>
            </Paragraph>
            <Paragraph>A few questions before I sign up:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the exact monthly price for ongoing accounting for an IE on Small Business 1% (no VAT
                    registration, no employees)?
                </Line>
                <Line>Does your service handle reverse-charge VAT on purchases of services from non-residents?</Line>
                <Line>Do you file zero (nil) declarations for months with no income?</Line>
                <Line>
                    In your estimate, which month is my first declaration and what is the filing deadline? (status granted
                    in June)
                </Line>
                <Line>
                    Do you file the declaration on my behalf, or does the service only calculate the tax and prepare the
                    form for me to submit?
                </Line>
            </Paragraph>
            <Paragraph>Thank you!</Paragraph>
            <Paragraph>
                Что изменилось: первая фраза теперь прямо говорит «мне нужна ежемесячная бухгалтерия», и убрано лишнее
                упоминание регистрации из середины (перенёс его в начало как «регистрация не нужна»). Смысл вопросов не
                тронул - они у тебя составлены правильно и как раз показывают, разбирается ли фирма в твоём профиле.
            </Paragraph>
            <Paragraph>
                Если хочешь, могу сделать этот текст кнопкой-сообщением, чтобы удобно было копировать по фирмам.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:45.814256Z"
        >
            <Origin>019f1c52-a401-7c05-8589-8fcee5504a03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>сделай снова копируемый текст бокс с поправками и темой письма</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:56.888168Z"
        >
            <Origin>019f1c52-a401-7b73-9eef-ff0f965f7cf0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used message compose v1</Action>
            <Paragraph>
                Готово - тема письма и текст с поправками выше, можно копировать и рассылать по англоязычным фирмам
                (Polaris, Bookkeeping.ge, Andersen, PB Services, Georgia Assistant, Tbilisi Expat).
            </Paragraph>
            <Paragraph>
                Тема: «Monthly accounting for IE (Small Business 1%) - already registered» - сразу отсекает тех, кто мог бы
                предложить регистрацию, и говорит, что тебе нужна именно ежемесячная бухгалтерия.
            </Paragraph>
            <Paragraph>Как соберёшь ответы - скидывай, добавлю в трекер.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:27:40.960132Z"
        >
            <Origin>019f1c5c-a407-74de-b03c-6778ba3e5e42</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                info@polarisfinance.ge - отправила пиьсом Ester georgia - отправила почту info@pbservices.ge почта
                georgia-assistant.ge телеграм Tbilisi Expat (tbilisi-expat.com) whatsapp
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:28:53.231816Z"
        >
            <Origin>019f1c5c-a407-7b59-9611-115dbde52d7e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Обновляю трекер: перевожу эти пять в статус «Ждём ответа» и добавляю три новые строки (PB Services, Georgia
                Assistant, Tbilisi Expat) с каналами, куда ты написала.
            </Paragraph>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Обновил. Теперь в трекере:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ответили (2):
                </Word> Espero, Relocup/Lotman.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ждём ответа (8):
                </Word> Expertos, MyReloc, Sharkyyy, Polaris Finance, PB Services, Georgia Assistant, Tbilisi Expat, Ester
                Georgia - у каждой в заметках указан канал, куда ты написала (письмо / Telegram / WhatsApp).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Не писали (2):
                </Word> Andersen Georgia, Bookkeeping.ge - оставил как запас, если захочешь расширить.
            </Paragraph>
            <Paragraph>
                Одно техническое: эта версия обновлённая, поэтому она подгрузит свежий список заново. Если ты вручную что-то
                правила в прошлом варианте, те правки сюда не перенесутся - но раз ты передавала данные мне, а не
                редактировала сама, потерь быть не должно. Дальше можешь либо вписывать ответы прямо в ячейки, либо
                скидывать мне - как удобнее.
            </Paragraph>
            <Paragraph>Итого разослано в 10 фирм. Как начнут отвечать - обновим.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:29:29.629354Z"
        >
            <Origin>019f1c5e-4ccd-71e2-9239-c8280de043e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good afternoon! The cost of accounting services includes: accounting support for individual entrepreneurs,
                filing tax returns, calculating taxes due, obtaining statements, etc. Cost: 150 GEL per month.это ответ от
                georgia-assistant.ge
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:30:08.957914Z"
        >
            <Origin>019f1c5e-4ccd-79fe-a437-1ff22559bd21</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Записал в трекер. Обновляю Georgia Assistant на «Ответили».</Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово - Georgia Assistant теперь «Ответили», 150 лари/мес.</Paragraph>
            <Paragraph>
                Что стоит заметить: они назвали цену и общий состав услуг (сопровождение, подача деклараций, расчёт налога,
                выписки), но <Word>
                    <Bold />
                    не ответили ни на один из трёх ключевых вопросов
                </Word> - обратный НДС, нулевые декларации, срок первой декларации. Пометил это в заметках. Если Georgia
                Assistant для тебя реальный кандидат, стоит написать им уточняющий вопрос именно про обратный НДС - это тот
                же фильтр, что и для остальных.
            </Paragraph>
            <Paragraph>По цене расклад пока такой (ответившие):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Espero - $50/мес (~135 лари), год выходит ~$37,5/мес - самый выгодный по деньгам, но обратный НДС не
                    подтвердил.
                </Line>
                <Line>Relocup/Lotman - $30-40/мес - самый дешёвый, но ответ по обратному НДС уклончивый.</Line>
                <Line>Georgia Assistant - 150 лари/мес - дороже двух предыдущих, вопросы не раскрыты.</Line>
                <Line>Polaris - 150 лари/мес по сайту, ждём подтверждения.</Line>
            </Paragraph>
            <Paragraph>Все дешевле ExpatHub (200). Как придут остальные ответы - продолжим заполнять.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:39:07.030799Z"
        >
            <Origin>019f1c67-1b88-74e4-ba04-700989e1624a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Hello Anastasia,</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Our service fee will be 250 GEL monthly - or we can agree on an annual fee.</Line>
                <Line>⁠Yes.</Line>
                <Line>⁠Yes.</Line>
                <Line>⁠15th of July</Line>
                <Line>
                    ⁠We will do it on your behalf by ourselves. You just provide the income information, expenses paid for
                    foreign services.
                </Line>
            </Paragraph>
            <Paragraph>Это от Tbilisi Expat</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:39:41.741701Z"
        >
            <Origin>019f1c67-1b88-7d3a-8053-30f639533925</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Записываю. Tbilisi Expat дал самый содержательный ответ по сути, но самый дорогой по цене.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово. Tbilisi Expat - «Ответили».</Paragraph>
            <Paragraph>
                Тут интересный расклад. По <Word>
                    <Bold />
                    качеству ответа они пока лучшие
                </Word>: единственные, кто чётко сказал «да» на обратный НДС и вдобавок в пункте 5 сами упомянули «расходы
                на иностранные услуги» - это прямой признак, что они реально понимают reverse-charge, а не просто кивнули.
                Плюс подают декларацию сами за тебя, от тебя только цифры.
            </Paragraph>
            <Paragraph>
                Но <Word>
                    <Bold />
                    по цене они самые дорогие - 250 лари/мес
                </Word>, это даже выше ExpatHub (200), от которого ты как раз уходила. Годовой тариф «по договорённости»,
                так что если они тебе понравятся, есть смысл спросить конкретную годовую цену - возможно, выйдет ближе к
                рынку.
            </Paragraph>
            <Paragraph>Как это выглядит сейчас в сравнении ответивших:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Relocup/Lotman
                    </Word> - ~$30-40/мес - дёшево, но обратный НДС не подтвердили (уклончиво).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Espero
                    </Word> - $50/мес (~135 лари), год ~$37,5/мес - выгодно, но обратный НДС не уточнили.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgia Assistant
                    </Word> - 150 лари/мес - вопросы не раскрыли.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi Expat
                    </Word> - 250 лари/мес - ответ лучший, цена высшая.
                </Line>
            </Paragraph>
            <Paragraph>
                Вырисовывается классический компромисс цена/качество. Пока никто не занял «золотую середину» - недорого И с
                подтверждённым обратным НДС. Возможно, её закроют те, кто ещё не ответил (Expertos, Polaris, PB Services,
                Sharkyyy, MyReloc, Ester). Дождёмся их - и будет видно, стоит ли переплачивать за Tbilisi Expat или кто-то
                из середняков подтвердит обратный НДС за меньшие деньги.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T09:11:22.029406Z"
        >
            <Origin>019f1cf2-8094-714d-8f25-3b57b43b8b61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот ответ от Polaris Finance Hello Ana, Glad you contacted us, and thanks for laying everything out so
                clearly — it makes answering easy. The short version: yes, we can take care of all of this for you. Here are
                your answers in order: 1. Monthly price. For ongoing monthly accounting for an Individual Entrepreneur our
                fee is 150 GEL per month. 2. Reverse-charge VAT on services from non-residents. Yes — this is part of the
                compliance we handle, we manage the calculation and filing for you. 3. Nil declarations. Yes. For any month
                with no income, we file the zero declaration on time so your compliance stays clean. 4. First declaration
                and deadline. Once we onboard you, your accountant will confirm the exact first-period timing against your
                registration date and incurring transactions. 5. Who files. We file the declaration on your behalf — you
                don't submit anything yourself. We calculate the tax, prepare the declaration, and file it through the
                Revenue Service portal for you each month. With us you'll have a dedicated accountant handling this monthly,
                so you can focus on your work rather than deadlines. If you'd like to move ahead, just reply and we'll set
                up a short onboarding call and share the contract. Thanks again for reaching out. Best regards, Nini
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T09:12:01.583765Z"
        >
            <Origin>019f1cf2-8094-7497-b85d-c6004a608d60</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличный ответ - и, по-моему, первый, кто занял ту самую «золотую середину». Обновляю Polaris.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Записал. Polaris Finance - «Ответили», и это сильный кандидат.</Paragraph>
            <Paragraph>
                Почему он выделяется: <Word>
                    <Bold />
                    150 лари/мес и при этом подтверждённый обратный НДС
                </Word> - они прямо написали, что сами считают и подают reverse-charge, подают нулевые вовремя, всё делают
                за тебя через портал Revenue Service, дают выделенного бухгалтера. Ответ по-английски, конкретный, без воды.
                Это ровно та середина, которой не хватало: недорого И понимают твой профиль.
            </Paragraph>
            <Paragraph>Обновлённое сравнение ответивших:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Relocup/Lotman
                    </Word> - ~$30-40/мес - дёшево, обратный НДС уклончиво (не подтвердили).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Espero
                    </Word> - $50/мес (~135), год ~$37,5/мес - выгодно, обратный НДС не уточнили.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgia Assistant
                    </Word> - 150 лари/мес - вопросы не раскрыли.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Polaris Finance
                    </Word> - 150 лари/мес - обратный НДС подтверждён, подают сами, англ. ✅
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi Expat
                    </Word> - 250 лари/мес - тоже подтвердили обратный НДС, но заметно дороже.
                </Line>
            </Paragraph>
            <Paragraph>
                Как это читается: <Word>
                    <Bold />
                    Polaris и Tbilisi Expat
                </Word> - единственные, кто внятно закрыл вопрос про обратный НДС, и Polaris при этом на 100 лари дешевле.
                Так что на данный момент Polaris - лидер.
            </Paragraph>
            <Paragraph>
                Единственное, что стоит сделать перед решением: у <Word>
                    <Bold />
                    Espero
                </Word> годовой тариф выходит совсем дёшево (~$37,5/мес), и если они тоже ведут обратный НДС, это могло бы
                обойти Polaris по цене. Их ответ этот пункт не покрыл. Хочешь - составлю короткий уточняющий вопрос для
                Espero (и заодно для Lotman) именно про reverse-charge, чтобы сравнить честно, прежде чем выбирать. Ещё не
                ответили: Expertos, MyReloc, Sharkyyy, PB Services, Ester.
            </Paragraph>
        </Message>
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
        <Message
            at="2026-07-03T06:41:55.304362Z"
        >
            <Origin>019f26b6-6240-7e89-9495-7cdbb71fa622</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, привет! вот ответ от одной фирмы, с которой мы хотим сотрудничать:</Paragraph>
            <Paragraph>
                Polaris Finance Thu, Jul 2, 4:51 PM (17 hours ago) to me Good afternoon, Great, thank you. Regarding the
                contract, it's not an issue. You will receive the contract for signature via Signify on your email, and
                signing it is quite easy and straightforward. We need the personal number associated with your IE and your
                phone number. We will draft the contract and send it over to you promptly. We can also set up the call
                tomorrow or Monday to discuss any questions you may have and introduce our accountants. Best regards, Nini
            </Paragraph>
            <Paragraph>переведи и выскажи мнение и дальнейшие шаги</Paragraph>
        </Message>
        <Message
            at="2026-07-03T06:42:33.152989Z"
        >
            <Origin>019f26b6-6241-7ab1-94b6-161b0ffb4190</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Привет! Перевод ответа Nini:</Paragraph>
            <Paragraph>
                Добрый день, Отлично, спасибо. Насчёт договора - никаких проблем. Вы получите договор на подпись через
                Signify на свою почту, подписать его совсем просто. Нам нужен персональный номер, привязанный к вашему ИП, и
                ваш номер телефона. Мы подготовим договор и оперативно вам его пришлём. Также можем назначить звонок завтра
                или в понедельник, чтобы обсудить любые ваши вопросы и представить наших бухгалтеров. С уважением, Nini
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Моё мнение:
                </Word> ответ хороший и снимает твой главный практический вопрос. Подписание идёт через Signify - это
                электронная подпись, приходит на почту, подписывается онлайн. Значит, ты спокойно подпишешь <Word>
                    <Bold />
                    сама из Батуми
                </Word>, муж для этого не нужен. Тон деловой и оперативный («подготовим и оперативно пришлём», звонок хоть
                завтра) - это ровно та отзывчивость, ради которой мы их и выбрали. Пока всё подтверждает, что Polaris -
                верный выбор.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что они просят:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    «Персональный номер, привязанный к ИП» - это твой 11-значный личный номер (პირადი ნომერი), он же
                    идентификатор твоего ИП.
                </Line>
                <Line>Номер телефона.</Line>
            </Paragraph>
            <Paragraph>
                Это стандартная просьба для составления договора, ей можно спокойно поделиться со своим бухгалтером.
                Отправляй прямо им - мне эти данные передавать не нужно.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Дальнейшие шаги:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ответить Nini: прислать личный номер + телефон и выбрать время звонка (завтра или понедельник).</Line>
                <Line>
                    Выбрать удобный слот. Учти по времени: <Word>
                        <Bold />
                        декларация за июнь подаётся до 15 июля
                    </Word>. Если хочешь, чтобы первую декларацию подали уже они, есть смысл созвониться и подписаться в
                    ближайшие дни, а не тянуть до последнего - тогда всё успеется спокойно.
                </Line>
                <Line>
                    Дождаться договора в Signify, прочитать (особенно: ежемесячная цена 150 лари, что входит, как
                    расторгается) и подписать.
                </Line>
                <Line>
                    На звонке: задать вопрос про НДС и уточнить, что им нужно для старта - доступ к порталу Revenue Service,
                    выписки Credo, список покупок у нерезидентов для обратного НДС.
                </Line>
            </Paragraph>
            <Paragraph>
                Хочешь, я подготовлю короткий ответ Nini - с выбором времени звонка и местами-заглушками для личного номера
                и телефона, чтобы ты просто вписала свои данные и отправила? Скажи только, когда тебе удобнее созвониться -
                завтра или в понедельник.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T06:51:07.147656Z"
        >
            <Origin>019f26be-cda1-77a1-80a8-0b4f282d6eba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай дадим им ответ вот какие документы у меня есть</Paragraph>
            <Paragraph>
                попроси созвон на понедельник. Напиши, что если есть русскоговорящие, то я предпочла бы этот вариант, потмоу
                что в этой теме специфические термины и я боюсь ошибиться в понимании собеседника. но если такой
                возсонжности нет - абсолютно ок на английском. Могу ли я попросить разрешения, чтобы мой муж присутствовал
                на созвоне? предпочтительна вторая половина дня
            </Paragraph>
            <Attachment>Uploaded “NAPEN26314202622.pdf”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “Invoice  LT14337-843.pdf”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “Invoice  LT14337-843 (1).pdf”, whose content the export does not carry</Attachment>
            <Attachment>
                Uploaded “MYCREDO_213373245950515_000001_TRANSACTION_RECEIPT_2026_06_01_14.pdf”, whose content the export
                does not carry
            </Attachment>
            <Attachment>Uploaded “SBS CERTIFICATE.pdf”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-03T06:52:04.741885Z"
        >
            <Origin>019f26be-cda1-7d87-b534-02b5cde218b5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отлично, документы у тебя все на руках - и, что удобно, Nini просила «персональный номер, привязанный к ИП»:
                он есть прямо в сертификате малого бизнеса и в выписке - это <Word>
                    <Bold />
                    305861868
                </Word> (в сертификате он подписан как პირადი ნომერი). Я подставил его в письмо. Телефон оставил заглушкой -
                впиши свой.
            </Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>Готово. Перевод для проверки:</Paragraph>
            <Paragraph>Здравствуйте, Nini,</Paragraph>
            <Paragraph>Спасибо. Вот данные, которые вы просили:</Paragraph>
            <Paragraph>
                <List />
                <Line>Персональный номер (ИП): 305861868</Line>
                <Line>Телефон: &#91;впишите&#93;</Line>
            </Paragraph>
            <Paragraph>
                Понедельник мне вполне подходит для звонка - желательно во второй половине дня, если у вас есть слот.
            </Paragraph>
            <Paragraph>
                Небольшая просьба насчёт звонка: если кто-то из ваших бухгалтеров говорит по-русски, я бы немного предпочла
                провести его на русском. Терминология по НДС и налогам довольно специфическая, и мне хочется быть уверенной,
                что я всё понимаю правильно и ничего не истолкую неверно. При этом, если русскоязычного варианта нет,
                английский абсолютно подходит.
            </Paragraph>
            <Paragraph>
                Также, было бы возможно, чтобы к звонку присоединился мой муж? Он в Тбилиси и помогает мне в этих вопросах.
            </Paragraph>
            <Paragraph>
                Мои регистрационные документы уже готовы - сертификат статуса малого бизнеса и выписка из реестра
                предпринимателей, - так что могу прислать их, когда будет удобно.
            </Paragraph>
            <Paragraph>С нетерпением жду.</Paragraph>
            <Paragraph>С уважением, Аня</Paragraph>
            <Paragraph>Два момента перед отправкой:</Paragraph>
            <Paragraph>
                Проверь номер <Word>
                    <Bold />
                    305861868
                </Word> - он совпадает на сертификате малого бизнеса и на выписке, так что это верный
                персональный/идентификационный номер твоего ИП. Впиши телефон вместо заглушки.
            </Paragraph>
            <Paragraph>
                Всё, о чём ты просила, внутри: понедельник, вторая половина дня, мягкая просьба про русскоязычного
                бухгалтера (с оговоркой, что английский тоже ок), и вопрос про участие мужа. Про НДС отдельно не расписывал
                - обсудите на звонке, как ты и хотела.
            </Paragraph>
            <Paragraph>
                Как назначат время - могу помочь подготовиться к звонку: короткий список вопросов (НДС-регистрация, что
                нужно для подачи июньской декларации в срок до 15 июля, доступ к порталу RS, какие выписки Credo прислать).
                Скажешь - соберу.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T11:54:04.543384Z"
        >
            <Origin>019f27d4-2939-7455-8a99-e6646e7a01bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот ответ от Нини: Hi Ana, Thank you for sharing the information. Monday at 14:00 is fully suitable for us,
                and we would be happy to schedule the call at that time. Regarding your request — conducting the meeting in
                Russian will not be a problem, as we have an accountant on our team who speaks Russian fluently. Also, your
                husband is very welcome to join the call if he would like to — that is absolutely fine with us. Regarding
                the documents from your side, we will go through these details together during the meeting, and if needed,
                you will directly share the documents with your accountant. Wishing you a pleasant day.
            </Paragraph>
            <Paragraph>Best regards, Nini</Paragraph>
            <Paragraph>что скажешь?</Paragraph>
        </Message>
        <Message
            at="2026-07-03T11:54:19.523295Z"
        >
            <Origin>019f27d4-293a-739f-9e5a-5fdb79e7981c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отличные новости - всё сложилось ровно так, как ты просила. Перевод ответа Нини:</Paragraph>
            <Paragraph>
                Здравствуйте, Ана, Спасибо, что прислали информацию. Понедельник в 14:00 нам полностью подходит, будем рады
                назначить звонок на это время. По вашей просьбе - провести встречу на русском не проблема, у нас в команде
                есть бухгалтер, свободно говорящий по-русски. Ваш муж тоже с радостью приглашается на звонок, если захочет,
                - для нас это абсолютно нормально. Что касается документов с вашей стороны, мы разберём все детали вместе на
                встрече, и при необходимости вы напрямую передадите документы вашему бухгалтеру. Хорошего дня. С уважением,
                Нини
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что скажу:
                </Word> это подтверждает, что вы выбрали правильную фирму. Они закрыли все три твои просьбы без единого «но»
                - понедельник 14:00 (как раз вторая половина дня), русскоязычный бухгалтер, муж на звонке приветствуется.
                Отвечают быстро, по пунктам и без бюрократии - именно та отзывчивость, ради которой вы ушли от остальных.
            </Paragraph>
            <Paragraph>
                Итого: <Word>
                    <Bold />
                    звонок в понедельник, 3 число, 14:00, на русском, с Дагом.
                </Word> Отдельно подтверждать ничего не нужно - разве что захочешь коротко написать «Спасибо, подтверждаю,
                до понедельника».
            </Paragraph>
            <Paragraph>
                Один практический момент по срокам: <Word>
                    <Bold />
                    июньскую декларацию нужно подать до 15 июля.
                </Word> Понедельник - это 6 июля (если считать ближайший), запас есть, но небольшой. На звонке стоит сразу
                проговорить, успевают ли они подать первую декларацию за июнь, и что для этого нужно от тебя (доступ к
                порталу Revenue Service, выписки Credo, список покупок у нерезидентов для обратного НДС).
            </Paragraph>
            <Paragraph>
                Хочешь, соберу тебе короткий список вопросов и «что подготовить» к звонку в понедельник - чтобы за 20 минут
                закрыть всё важное, включая тему НДС-регистрации? Могу сделать это отдельным аккуратным чек-листом.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T11:54:52.218000Z"
        >
            <Origin>019f27d4-e507-76e0-8560-ce29125933b8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай напишем ответ, что я подтверждаю это время и благодарю их за содействие!</Paragraph>
        </Message>
        <Message
            at="2026-07-03T11:54:59.940317Z"
        >
            <Origin>019f27d4-e507-73c7-bfcf-223140242f3e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used message compose v1</Action>
            <Paragraph>Готово. Перевод для проверки:</Paragraph>
            <Paragraph>Здравствуйте, Nini,</Paragraph>
            <Paragraph>
                Прекрасно - подтверждаю понедельник, 14:00. Большое спасибо, что пошли навстречу во всём, включая проведение
                звонка на русском и участие моего мужа.
            </Paragraph>
            <Paragraph>С нетерпением жду разговора.</Paragraph>
            <Paragraph>С уважением, Аня</Paragraph>
            <Paragraph>Короткое, тёплое, по делу. Можно отправлять.</Paragraph>
            <Paragraph>
                Поздравляю - вопрос с бухгалтером фактически закрыт. Если захочешь, перед понедельником соберу небольшой
                чек-лист к звонку (сроки июньской декларации, тема НДС-регистрации, что подготовить) - просто скажи.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T12:02:25.544552Z"
        >
            <Origin>019f27db-c9ad-7e88-a62f-eebcfa284ea0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, они выслали мне документ на подписание. Давай с ним внимательно ознакомимся проанализируй документ нет
                ли подозрительного нет ли дополнительных костов, которых я не вижу к чему меня обязывают? что они
                обязауются?
            </Paragraph>
            <Paragraph>что ты скажешь как юрист по налогам в Грузии? Давай обсудим перед тем ,как я подпишу</Paragraph>
            <Attachment>
                Uploaded “I.E Anastasia Krasavina _Individual Entrepreneur_EN.pdf”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-07-03T12:04:38.554347Z"
        >
            <Origin>019f27db-c9ad-7fcc-8cce-bd54feebb988</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Прочитал внимательно весь документ - основную часть, Приложение №1 (общие условия) и Приложение №2 (пакет и
                цена). Сначала важная оговорка: я не лицензированный юрист и не налоговый консультант в Грузии, поэтому это
                разбор текста, а не официальное юридическое заключение. Но договор стандартный по структуре, и разобрать его
                по твоим вопросам я могу подробно. Давай по порядку.
            </Paragraph>
            <Heading>Короткий вывод</Heading>
            <Paragraph>
                Договор в целом нормальный и типичный для грузинской бухгалтерской фирмы. Ничего мошеннического или
                откровенно хищного я не вижу. Условия слегка смещены в пользу компании (ограничение их ответственности,
                право списывать оплату с твоего счёта, штраф за просрочку, 2 месяца на выход) - но это обычная картина для
                таких договоров. Есть <Word>
                    <Bold />
                    один пункт, который я бы обязательно закрыл письменно до подписания
                </Word> - про обратный НДС (объясню ниже). Остальное - к сведению.
            </Paragraph>
            <Heading>Цена и скрытые косты</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        150 лари/мес, и это «включая налоги по грузинскому законодательству»
                    </Word> (Приложение №2). То есть НДС фирмы уже внутри, доплат сверху 150 быть не должно. Это хорошо и
                    совпадает с тем, что обещала Нини.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Первый платёж - в течение 3 рабочих дней после подписания
                    </Word> (п. 2.2). Дальше - ежемесячно до 25 числа по счёту.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Главный риск скрытых костов - узкое описание пакета.
                    </Word> В Приложении №2 услуга описана как «личный бухгалтер, консультации, подготовка и подача <Word>
                        <Bold />
                        декларации о доходах
                    </Word> в портал RS ежемесячно». Там <Word>
                        <Bold />
                        нет ни слова про обратный НДС и про нулевые декларации.
                    </Word> А Нини в письме обещала, что обратный НДС «входит в сопровождение». По п. 2.1 клиент может
                    «улучшить пакет дополнительными услугами» и платить за расширенный пакет. То есть формально есть
                    лазейка: обратный НДС потом могут назвать «доп. услугой» за отдельные деньги. <Word>
                        <Bold />
                        Устное/письмо-обещание в переписке слабее, чем текст в Приложении №2.
                    </Word> Это то, что я бы попросил зафиксировать (см. ниже «что сделать до подписания»).
                </Line>
                <Line>
                    Механизма одностороннего повышения цены в тексте нет. Автопродление идёт «на тех же условиях», так что
                    150 закреплены, пока не поменяется пакет.
                </Line>
            </Paragraph>
            <Heading>К чему договор обязывает тебя</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Платить 150 лари/мес
                    </Word> вовремя (первый раз - 3 рабочих дня после подписи, далее до 25 числа).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Давать доступ к порталу Revenue Service и к своим банковским счетам
                    </Word> (п. 8.2). Для бухгалтерии это норма - иначе они не подадут декларацию.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ты разрешаешь им списывать оплату напрямую с твоего счёта без отдельного согласия каждый раз
                    </Word> (п. 2.3) и «освобождаешь их от претензий» по этому списанию. Это прямое поручение на
                    автосписание. Не криминал, но пойми это осознанно. Если не хочешь автосписания - можно попросить платить
                    по счёту вручную (в п. 2.2 оплата и так «на основании полученного счёта»).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Передавать все документы и выписки до 5 числа каждого месяца
                    </Word> (п. 8.8.1) и отвечать на запросы в течение 3 дней.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Отвечать за достоверность своих документов
                    </Word>: они прямо пишут, что <Word>
                        <Bold />
                        не проверяют
                    </Word> твою информацию на правильность (п. 10.3) и не отвечают за операции и документы, которые
                    готовишь/предоставляешь ты.
                </Line>
                <Line>
                    Если передаёшь им <Word>
                        <Bold />
                        персональные данные третьих лиц
                    </Word> (например, данные клиентов из инвойсов) - сама получить согласие и по запросу подтвердить это
                    документом за 5 дней, плюс компенсировать их штрафы (п. 5.2). Для тебя это малозначимо, но знать стоит.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Чтобы выйти из договора «просто так» - нужно уведомить за 2 месяца письменно
                    </Word> (п. 3.3.4). Плюс автопродление на год, если не уведомить заранее.
                </Line>
            </Paragraph>
            <Heading>К чему обязуются они</Heading>
            <Paragraph>
                <List />
                <Line>
                    Назначить <Word>
                        <Bold />
                        личного бухгалтера
                    </Word>, давать консультации, готовить и подавать декларацию в портал RS ежемесячно.
                </Line>
                <Line>Работать по закону и стандартам, добросовестно.</Line>
                <Line>
                    <Word>
                        <Bold />
                        Держать профессиональную страховку ответственности
                    </Word> (Aldagi, п. 2.2.3) весь срок - это плюс, есть чем крыть их ошибки.
                </Line>
                <Line>Конфиденциальность (взаимная, живёт ещё 5 лет после окончания).</Line>
                <Line>
                    <Word>
                        <Bold />
                        Компенсировать ущерб от своих умышленных или грубо-небрежных действий
                    </Word> (п. 8.6.3) - но с оговорками (см. ниже).
                </Line>
                <Line>
                    При расторжении - <Word>
                        <Bold />
                        отдать тебе всю базу данных
                    </Word> (п. 3.6).
                </Line>
            </Paragraph>
            <Heading>Что асимметрично / на что обратить внимание</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Их ответственность сильно ограничена
                    </Word> (Клаузы 9.4, 10): не отвечают за упущенную выгоду, за последствия твоих неточных документов, и -
                    что важно - <Word>
                        <Bold />
                        не отвечают за штрафы/пени, возникшие в период приостановки услуги
                    </Word> (п. 10.4). По сути отвечают только за умысел и грубую небрежность, простая небрежность может не
                    покрываться. Это типовая формулировка, но знать надо.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Штраф за просрочку оплаты - 0,5% в день
                    </Word> (п. 9.5). Это ~15% в месяц, дорого. При автосписании риск мал, но если на счету не хватит денег
                    - см. следующий пункт.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Приостановка услуги при просрочке 14+ дней
                    </Word> (п. 8.7), в т.ч. если на счету недостаточно средств; если не погасить за 14 дней - расторжение
                    без доп. уведомления, и оплату за период приостановки всё равно должна.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Мелкая нестыковка в тексте:
                    </Word> основная часть (п. 1.2) говорит про уведомление о выходе за <Word>
                        <Bold />
                        1 месяц
                    </Word> до конца срока, а Приложение №1 (п. 3.4) - за <Word>
                        <Bold />
                        1 неделю
                    </Word>. Противоречие. Стоит уточнить, какой срок реально действует, чтобы не промахнуться с
                    автопродлением.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Маркетинг:
                    </Word> п. 6.7 - ты заранее соглашаешься, что они могут указывать тебя как клиента (имя, тип услуги,
                    период) в маркетинге, но «в согласованной с тобой форме». Плюс п. 8.3 - использовать твой логотип/имя
                    только с твоего письменного согласия. Если не хочешь, чтобы тебя упоминали публично - скажи об этом
                    сразу.
                </Line>
            </Paragraph>
            <Heading>Что я бы сделал до подписания</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Закрыть вопрос обратного НДС письменно.
                    </Word> Это единственный по-настоящему важный пункт. Попросить их либо дописать в Приложение №2, либо
                    подтвердить отдельным письмом, что в 150 лари/мес <Word>
                        <Bold />
                        входят
                    </Word>: (а) подготовка и подача <Word>
                        <Bold />
                        нулевых
                    </Word> деклараций в месяцы без дохода, и (б) учёт и подача <Word>
                        <Bold />
                        обратного НДС
                    </Word> (reverse-charge) на покупки услуг у нерезидентов - без доплат. Тогда обещание Нини станет частью
                    договора, а не просто словами в чате.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Уточнить про июньскую декларацию.
                    </Word> Срок услуги - с 01.07.2026, декларация за июнь подаётся 1-15 июля. Подтвердить, что первую
                    (июньскую) декларацию подают именно они и в срок, и что им для этого нужно от тебя.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Решить по автосписанию (п. 2.3):
                    </Word> оставляешь автосписание или предпочитаешь платить по счёту вручную. Если второе - сказать им.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Уточнить нестыковку 1 месяц / 1 неделя
                    </Word> по сроку уведомления о продлении/выходе.
                </Line>
            </Paragraph>
            <Paragraph>
                Ничего из этого не требует юриста - это нормальные уточнения, которые как раз логично проговорить на созвоне
                в понедельник (у тебя как раз русскоязычный бухгалтер будет). Я бы <Word>
                    <Bold />
                    не подписывала до звонка
                </Word>, а пункт 1 (обратный НДС) попросила подтвердить письменно - и вот тогда подписывать спокойно.
            </Paragraph>
            <Paragraph>
                Хочешь, я подготовлю короткий список этих вопросов прямо к звонку - по-русски для тебя и по-английски, если
                что-то захочешь написать им заранее? И можем отдельно обсудить любой пункт подробнее.
            </Paragraph>
        </Message>
    </Chapter>
);

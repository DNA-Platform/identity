import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 October 2026](2026-10-05)</Date>
        </Dated>
        <Title>[[ 5 October 2026 ]]</Title>
        <Message
            at="2026-10-05T09:35:14.269084Z"
        >
            <Origin>2dccccbc-fe00-4ca0-8d65-b7a5481a9c12</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я приложении МВД он спршивает меня выбрать подразделение для приема образений тут есть и по районам
                Москвы, и по направдениям. например, Упревление по вопросам миграции или Главное управление МВД, или упр
                уголовного розыка. что ты мне посоветуешь, опираясь на закон РФ
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:35:30.283886Z"
        >
            <Origin>bdc94367-5b6c-4748-bf8c-819c2919afb5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Выбирай <Word>
                    <Bold />
                    «Управление по вопросам миграции»
                </Word> — это прямой адресат по закону.
            </Paragraph>
            <Paragraph>
                Обоснование: заявления о несогласии на выезд ребёнка подаются и учитываются именно в подразделениях по
                вопросам миграции (ст. 21 закона № 114-ФЗ, порядок — приказ МВД № 651 от 31.08.2021). Уголовный розыск и
                районные ОМВД к этому учёту отношения не имеют.
            </Paragraph>
            <Paragraph>Почему не остальные варианты:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Районные отделы Москвы
                    </Word> — ведут приём по своей территории, но сам учёт несогласий районный отдел в своей базе может не
                    видеть; обращение всё равно уйдёт наверх по компетенции, только дольше.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Главное управление МВД (по г. Москве целиком)
                    </Word> — рабочий запасной вариант: зарегистрируют и перенаправят в своё же управление по миграции.
                    Выбирай его, только если миграционного управления в списке вдруг не окажется на нужном уровне.
                </Line>
            </Paragraph>
            <Paragraph>
                Если список даёт выбрать уровень — бери управление по вопросам миграции <Word>
                    <Bold />
                    ГУ МВД России по г. Москве
                </Word> (дети зарегистрированы в Москве, и заявление Максима, если оно есть, подавалось скорее всего там
                же). Если в приложении только федеральный уровень — ГУВМ МВД России тоже подходит: учёт централизованный.
            </Paragraph>
            <Paragraph>
                Текст обращения — тот же, что мы отработали, с поправкой первой строки под выбранное подразделение (если
                подаёшь напрямую в миграционное управление, строка «Прошу рассмотреть в Главном управлении по вопросам
                миграции» уже не нужна — можно начинать сразу с «Я, Красавина…»).
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:43:43.536949Z"
        >
            <Origin>01a10b72-8db4-7404-88b7-db7e38f40dff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Вот, я вот иду в написать обращение, да, я выбрала отдел миграции, там все стандартно, меня спрашивают мое
                имя, фамилию, правда нет никакой авторизации, ну, может быть, я ее уже прошла через госуслуги, я не помню.
                А, в общем, у меня вот это вот все требуют, и в конце есть окошко для описания проблемы, и есть просто
                кнопка «Добавить». И вот я думаю, что это «Добавить документы». Мне же бессмысленно без документов-то это
                отправлять. Они же мне это вернут, потому что кто я такая? Где я там никто, никем являюсь? Я, вот, то есть
                моя самая загвоздка, что туда не прикрепить документы. Так вот, что делать теперь? Вот ты видишь, куда меня
                отправляет э, это меню «Добавить». И что интересно, я иду в любые документы, вот в Telegram, и я точно знаю,
                я только что проверила, что у меня там лежат очень разные документы, и PDF, и JPEG, и прочие разные файлы.
                Он их просто не видит, вот это приложение их просто не видит. Что ты можешь мне про это сказать?
            </Paragraph>
            <Attachment>Uploaded “1000120596.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-05T09:44:02.990163Z"
        >
            <Origin>01a10b72-8db4-7413-b7dc-2ea6bead9e01</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Это не ты что-то делаешь не так — это ограничение Android. Приложение МВД использует старый встроенный
                «проводник», который видит только общие папки телефона. Файлы Telegram лежат в закрытой папке <Word>
                    <Verbatim />
                    Android/media/org.telegram.messenger
                </Word>, куда чужим приложениям доступ запрещён (так устроен Android 11+). Поэтому папки он показывает, а
                файлов «не видит».
            </Paragraph>
            <Paragraph>Решение — перенести файлы в папку, которую он видит:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Открой Telegram, найди нужный документ (паспорт, свидетельства).</Line>
                <Line>
                    Нажми на него → три точки → <Word>
                        <Bold />
                        «Сохранить в загрузки»
                    </Word> (или «Сохранить в галерею» для фото).
                </Line>
                <Line>
                    Файл окажется в <Word>
                        <Verbatim />
                        /storage/emulated/0/Download
                    </Word> — эта папка в списке у тебя на экране есть.
                </Line>
                <Line>
                    Если есть возможность, переименуй файлы латиницей (<Word>
                        <Verbatim />
                        passport.jpg
                    </Word>, <Word>
                        <Verbatim />
                        katya.jpg
                    </Word>, <Word>
                        <Verbatim />
                        dima.jpg
                    </Word>) через любой файловый менеджер — мы помним, что формы МВД спотыкаются на кириллических именах.
                </Line>
                <Line>
                    Вернись в приложение МВД → «Добавить» → папка <Word>
                        <Bold />
                        Download
                    </Word> → выбирай файлы по одному.
                </Line>
            </Paragraph>
            <Paragraph>
                Если и в Download приложение файлы не покажет — тогда дело в разрешениях: Настройки → Приложения → МВД
                России → Разрешения → Файлы и мультимедиа → «Разрешить все файлы». После этого перезапусти приложение.
            </Paragraph>
            <Paragraph>
                Насчёт авторизации не волнуйся: раз форма открылась и приняла твои данные, обращение зарегистрируют. И ты
                права, что с документами сильно лучше — без свидетельств о рождении ответ почти наверняка будет «подтвердите
                полномочия законного представителя».
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:46:41.186448Z"
        >
            <Origin>01a10b75-4f8e-741b-86cc-091b4cfe7abd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Вот что у меня в этом меню</Paragraph>
            <Attachment>Uploaded “1000120597.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-05T09:47:03.680590Z"
        >
            <Origin>01a10b75-4f8e-7423-8933-84d2b014adf3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                В этом меню видно главное: разрешения на файлы у приложения <Word>
                    <Bold />
                    вообще нет
                </Word> — ни в «Разрешено», ни в «Запрещено». То есть система его даже не предлагала. На Xiaomi (у тебя
                MIUI) такие пункты часто спрятаны отдельно: вернись на экран назад и поищи <Word>
                    <Bold />
                    «Другие разрешения»
                </Word> или открой три точки сверху → «Все разрешения». Если найдёшь там «Хранилище» / «Файлы и мультимедиа»
                / «Фото и видео» — включи.
            </Paragraph>
            <Paragraph>
                Но честно: судя по тому окошку выбора папок, у приложения свой встроенный проводник, и он папки видит
                (список /storage/emulated/0 он показал), а файлы внутри — нет. Это похоже не на запрет системы, а на то, что
                он отображает только определённые типы или просто кривой. Поэтому практический путь остаётся тем, что я
                описала:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>В Telegram: документ → три точки → «Сохранить в загрузки».</Line>
                <Line>Переименуй латиницей (passport.jpg, katya.jpg, dima.jpg).</Line>
                <Line>
                    В приложении МВД: «Добавить» → папка <Word>
                        <Bold />
                        Download
                    </Word> → смотри, появились ли файлы.
                </Line>
            </Paragraph>
            <Paragraph>
                Если в Download файлы в этом окошке появятся — вопрос закрыт. Если папка откроется пустой, хотя файлы там
                точно есть, — приложение безнадёжно, возвращаемся к сайту с выключенным VPN или отправляем без вложений с
                фразой «готова направить дополнительно».
            </Paragraph>
            <Paragraph>
                И одно попутное наблюдение, раз уж мы в этом меню: у приложения МВД включён доступ к <Word>
                    <Bold />
                    местоположению
                </Word>, последний раз оно его считывало в 13:35 — уже из Грузии. Для запроса обращения геолокация не нужна
                вовсе. Я бы поставила «Запретить», прежде чем продолжать, — это обычная настройка приватности, на работу
                формы не влияет.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:47:40.657484Z"
        >
            <Origin>01a10b76-37d1-7ead-b3d8-a0fe0f6490fc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Слушай, у меня вот, например, фото моего паспорта названо латиницей. Но их он тоже не видит. Он не видит там
                ничего вообще в этих папках. Там пусто как будто бы. То есть он тогда никакие э, файлы не видит. Не только
                там JPEG или не только там с этими э, латиницами или кириллицами. Просто нифига не видит.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:47:54.401068Z"
        >
            <Origin>01a10b76-37d1-7eb3-86aa-5dc6a1567125</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Тогда всё ясно: приложение сломано на современных версиях Android. С Android 13 доступ к файлам выдаётся
                по-новому, а этот встроенный проводник написан под старую схему — он открывает папки, но содержимое ему
                система не отдаёт. В отзывах на приложение ровно это и пишут: «невозможно прикрепить фото к заявлению».
                Никакими переименованиями это не лечится, и копаться в разрешениях дальше смысла нет — приложение просто не
                запрашивает нужное.
            </Paragraph>
            <Paragraph>Остаётся два пути, оба рабочие:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Браузер на телефоне вместо приложения.
                </Word> Открой мвд.рф → «Приём обращений» в обычном Chrome на телефоне, <Word>
                    <Bold />
                    с выключенным VPN
                </Word>. Мобильный браузер при нажатии «Загрузить файл» открывает системный выбор файлов — он современный и
                файлы видит. Это самый вероятный путь к успеху: на компьютере тебе мешал, скорее всего, VPN, а здесь его
                можно просто выключить на время отправки.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Отправить без вложений
                </Word> — из приложения или с сайта, с нашей фразой в конце: «Приложить файлы технически не удалось; копии
                паспорта и свидетельств о рождении готова направить дополнительно по запросу». Зарегистрируют и так; если
                понадобятся документы — запросят, и это будет уже их инициатива со ссылкой на номер твоего обращения.
            </Paragraph>
            <Paragraph>
                Я бы сделала так: пять минут на попытку №1, и если браузер тоже капризничает — без колебаний вариант №2.
                Обращение важнее вложений: главное, чтобы вопрос встал на учёт и пошёл 30-дневный срок.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:10.124090Z"
        >
            <Origin>f6af3a14-29f2-4eb9-b9a4-74c323f7b2a7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>в браузере на телефоне вооюще не проходит. висит белым экраном и все</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:23.667134Z"
        >
            <Origin>18f0317b-7142-4e0d-9a13-4298a5f203aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Белый экран — это, скорее всего, не телефон, а география: мвд.рф для посетителей с иностранных IP часто
                просто не отдаёт страницы. На компьютере у тебя сайт открывался — значит, там соединение шло через
                российский IP (VPN или прокси), а на телефоне ты выходишь напрямую через грузинскую сеть.
            </Paragraph>
            <Paragraph>
                Проверка за минуту: включи на телефоне VPN с российским сервером (или тот же способ, каким пользуешься для
                Госуслуг) и перезагрузи страницу. Если откроется — пробуй форму и загрузку файлов прямо там: мобильный
                Chrome файлы видит нормально.
            </Paragraph>
            <Paragraph>
                Парадокс в том, что на компьютере тебе, возможно, мешал как раз нероссийский выход загрузчика файлов, а
                страница при этом открывалась. Эти госсайты так криво и работают: часть запросов проходит, часть молча
                режется.
            </Paragraph>
            <Paragraph>Так что порядок такой:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Телефон + российский VPN
                    </Word> → форма в Chrome, попытка с вложениями.
                </Line>
                <Line>
                    Если VPN на телефоне нет под рукой — <Word>
                        <Bold />
                        компьютер, тем же путём, что в прошлый раз
                    </Word>, но отправляй без вложений с фразой «готова направить дополнительно по запросу». Текст у нас
                    готов, капчу-ползунок помнишь.
                </Line>
                <Line>Приложение МВД больше не трогаем — оно для этой задачи непригодно.</Line>
            </Paragraph>
            <Paragraph>Главное сегодня — чтобы обращение ушло и получило номер. Вложения — второстепенны.</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:27.543785Z"
        >
            <Origin>41285cb4-0a3d-4d2f-84b3-61ca5b7463ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай попробуем с припиской про Могу предоставить</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:35.911842Z"
        >
            <Origin>107390f4-afda-4a3f-b5bc-6587dd78ac56</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да. Вот финальный текст для отправки — с компьютера, тем же путём, что в прошлый раз:</Paragraph>
            <Paragraph>
                <Quoted />
                Прошу рассмотреть в Главном управлении по вопросам миграции МВД России. Я, Красавина Анастасия Юрьевна,
                06.10.1986 г.р., мать и законный представитель несовершеннолетних граждан РФ Красавиной Екатерины
                Максимовны, 11.04.2015 г.р., и Красавина Дмитрия Максимовича, 24.03.2017 г.р. Прошу сообщить, имеются ли в
                учётах МВД России заявления законного представителя о несогласии на выезд из РФ в отношении каждого из
                детей. Ответ прошу направить на электронную почту. Приложить файлы к обращению технически не удалось; копии
                паспорта и свидетельств о рождении детей готова направить дополнительно по запросу.
            </Paragraph>
            <Paragraph>Напоминания по форме, коротко:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ф.И.О., Должность
                    </Word>: Начальник Главного управления по вопросам миграции МВД России
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Место события
                    </Word>: Москва
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Телефон
                    </Word>: пусто
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Капча
                    </Word>: ползунок двигать до чисел с картинки
                </Line>
                <Line>
                    Если подаёшь через приложение, где подразделение уже выбрано как миграционное — первую строку убери,
                    начинай с «Я, Красавина…»
                </Line>
            </Paragraph>
            <Paragraph>
                После отправки придёт номер обращения — сохрани и пришли мне, зафиксируем дату: ответ должны дать до начала
                ноября.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:53.687642Z"
        >
            <Origin>9b7bdc5a-8066-48aa-aa70-3233edc07d6d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, а вообще что люди пишут? поищи веб, как решают вопрос про сложность с прикреплением</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:51:12.871969Z"
        >
            <Origin>82c82016-b237-4850-997f-b3459bdea2e0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Поискала. Прямого «рецепта» для нашего случая никто не даёт, но из опыта людей складывается полезная
                картина:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Проблема массовая и давняя.
                </Word> На downradar и в отзывах на само приложение — те же жалобы: «невозможно прикрепить фото к
                заявлению», «нажимаю подать и ничего не происходит», «сервис МВД не отвечает». То есть это не твои руки и не
                твой телефон.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Главная находка — люди делают наоборот: текст в файл, а не файлы к тексту.
                </Word> На одном форуме описана отработанная схема коллективных обращений: в окошке текста пишут одну фразу
                «Прошу рассмотреть обращение в прилагаемом файле», а само обращение со всеми приложениями собирают в <Word>
                    <Bold />
                    один PDF
                </Word> и прикрепляют его. Для нас это подсказка в другую сторону: если загрузчик принимает файлы только по
                одному или капризничает на нескольких — можно собрать паспорт + оба свидетельства + текст в единый PDF. Один
                файл проходит чаще, чем три.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Стандартные советы по незагружающимся файлам
                </Word> (downdetector, в порядке частоты): другой браузер; файлы не защищены паролем; меньше размер;
                загружать заново по одному. Про браузер уже проверено тобой, остальное у нас в норме.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Подтверждение про сроки:
                </Word> по опыту людей, на практике МВД отвечает на обращения «обычно не больше недели», хотя закон даёт 30
                дней. Это к вопросу, стоит ли биться за вложения: если ответят «подтвердите полномочия» — потеряем
                неделю-полторы, не месяц.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Моё предложение, объединяя всё:
                </Word> я соберу тебе один PDF — титульный лист с текстом обращения + паспорт + два свидетельства. Пришли
                мне три изображения (паспорт у меня в этом чате уже есть только как превью — нужен сам файл, и сканы
                свидетельств), я сошью и отдам файл <Word>
                    <Verbatim />
                    obrashchenie.pdf
                </Word>. Ты отправляешь с компьютера: в поле текста — короткая версия, файл — один. Если и один PDF не
                прикрепится — отправляешь без вложений, фраза «готова направить дополнительно» уже в тексте.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:52:47.401009Z"
        >
            <Origin>cf81c6ac-4ca7-4946-915d-9bbe446603f0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Сделай, пожалуйста</Paragraph>
            <Attachment>
                Uploaded “Свидетельство-о-рождении-Красавина Екатерина.jpg”, whose content the export does not carry
            </Attachment>
            <Attachment>Uploaded “passport 1.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “passport 2.jpg”, whose content the export does not carry</Attachment>
            <Attachment>
                Uploaded “Свидетельство-о-рождении-Красавин Дмитрий.jpg”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-10-05T09:52:55.772160Z"
        >
            <Origin>9fce35a3-abb8-43e9-812e-3599970f55ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Собираю PDF.</Paragraph>
            <Action>Used Glob</Action>
            <Action>Used Bash</Action>
        </Message>
        <Message
            at="2026-10-05T09:53:07.281022Z"
        >
            <Origin>5b78d756-f17d-5ea2-a2c6-9042bd37c62b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Continue with the task described in the conversation above. Your most recent Bash call has not run yet;
                nothing is wrong with the tool or its input. Run it now from the beginning with the tools you have, without
                assuming any result, file or state from it, and use the working directory and file locations you have now
                rather than ones earlier steps assumed.
            </Paragraph>
            <Paragraph>
                The files from earlier in this conversation are available at these paths:
                /mnt/user-data/uploads/1787298956665_image.png /mnt/user-data/uploads/1787299175510_image.png
                /mnt/user-data/uploads/1787299183581_image.png /mnt/user-data/uploads/1787300673802_image.png
                /mnt/user-data/uploads/1787301317287_image.png /mnt/user-data/uploads/1787301323286_image.png
                /mnt/user-data/uploads/1787301580703_image.png /mnt/user-data/uploads/1787301690110_image.png
                /mnt/user-data/uploads/1788338658507_image.png /mnt/user-data/uploads/1790856278808_image.png
                /mnt/user-data/uploads/1000120596.jpg /mnt/user-data/uploads/1000120597.jpg
                /mnt/user-data/uploads/Свидетельство-о-рождении-Красавина_Екатерина.jpg
                /mnt/user-data/uploads/passport_1.jpg /mnt/user-data/uploads/passport_2.jpg
                /mnt/user-data/uploads/Свидетельство-о-рождении-Красавин_Дмитрий.jpg Read them there (those copies are
                read-only — copy a file elsewhere to modify it). Each is also attached, at an @-mentioned path, to this
                message or the file-delivery messages just before it; if a listed path is missing, use that @-mentioned copy
                instead.
            </Paragraph>
            <Paragraph>
                The other 10 files from earlier in this conversation could not be placed under /mnt/user-data/uploads/; any
                that were delivered are attached to this message (or the file-delivery messages just before it) at the
                @-mentioned paths only — read them there, and for those files use the @-mentioned path wherever an earlier
                step in this conversation named a /mnt/user-data/uploads/ path.
            </Paragraph>
            <Paragraph>
                Some of the file-delivery messages before this message name their files without showing the files' contents;
                when the conversation calls for one of those files, images included, open that file at its listed or
                @-mentioned path. Read a long PDF a few pages at a time and a large text file in parts, and use another tool
                for a format that cannot be read directly, such as an Office file.
            </Paragraph>
            <Paragraph>The user's timezone is Asia/Tbilisi (UTC+04:00).</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:54:38.741650Z"
        >
            <Origin>c7ef7dd2-55cf-518c-8202-5247be4a874c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used Bash</Action>
            <Action>Used Bash</Action>
            <Action>Used Write</Action>
            <Action>Used Bash</Action>
            <Action>Used Bash</Action>
            <Action>Used Read</Action>
            <Action>Used Edit</Action>
            <Action>Used Bash</Action>
            <Action>Used Read</Action>
            <Action>Used Read</Action>
            <Paragraph>Готово — проверила все пять страниц, собрала и сверила.</Paragraph>
            <Action>Used SendUserFile</Action>
            <Paragraph>
                Файл <Word>
                    <Verbatim />
                    obrashchenie.pdf
                </Word> готов. Внутри пять страниц:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Текст обращения — наша финальная версия, с твоими паспортными данными и датой сегодня</Line>
            </Paragraph>
            <Paragraph>2–3. Паспорт (разворот с фото + страница с московской регистрацией)</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Свидетельство Кати</Line>
                <Line>Свидетельство Димы</Line>
            </Paragraph>
            <Paragraph>Размер 2,5 МБ, имя латиницей — под требования формы.</Paragraph>
            <Paragraph>Как отправлять:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    В поле «Текст сообщения» набери одну строку: <Word>
                        <Bold />
                        «Прошу рассмотреть обращение, изложенное в прилагаемом файле. Красавина А.Ю.»
                    </Word> — та самая схема с форума.
                </Line>
                <Line>
                    «Загрузить файл» → выбери <Word>
                        <Verbatim />
                        obrashchenie.pdf
                    </Word> (сначала скачай его из этого чата на компьютер).
                </Line>
                <Line>Остальное как раньше: Место события — Москва, телефон пустым, капча-ползунок.</Line>
            </Paragraph>
            <Paragraph>
                Если и этот один файл не прикрепится — отправляй с полным текстом в поле и без вложений, как договаривались.
            </Paragraph>
            <Paragraph>
                Одно замечание: на первой странице я указала дату твоей явки свидетельства Кати по её документу — рождение
                11.04.2015, ЗАГС Пушкинского района Санкт-Петербурга, повторное от 26.08.2025. Всё совпадает с тем, что мы
                писали в тексте. Можно отправлять.
            </Paragraph>
            <Attachment>Uploaded “image-0-0.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “image-0-0.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “image-0-0.png”, whose content the export does not carry</Attachment>
        </Message>
    </Chapter>
);

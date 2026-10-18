import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 June 2026](2026-06-12)</Date>
        </Dated>
        <Title>[[ 12 June 2026 ]]</Title>
        <Message
            at="2026-06-12T07:52:11.841822Z"
        >
            <Origin>019ebad1-1c03-7096-8e62-6ccba8d6d075</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                КЛод, привет, это АНА (не Аня). Пожалуйста, запомни, что я Ана (сокращение от Анастасия) я хочу сегодня
                поехать в Кредо банк и забрать свою карту, которая готова. Также мне будет удобно запросить у них справку
                для Пейонира. Помоги мне, пожалуйста, составить текст и приложить пример того документа, который мне нужен,
                чтобы сотрудник все сделал правильно с самого начала. я буду прилагать Bank/credit card statement or account
                confirmation letter
            </Paragraph>
            <Attachment>Uploaded “1781250706158_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1781250724445_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-12T07:53:30.716382Z"
        >
            <Origin>019ebad1-1c03-7c8f-94a0-f08985428602</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ана! Записываю — ты <Word>
                    <Bold />
                    Ана
                </Word> (от Анастасия), не Аня. Больше не перепутаю.
            </Paragraph>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>
                Теперь по банку. Сначала важное уточнение, которое <Word>
                    <Bold />
                    упрощает
                </Word> тебе задачу — я перечитала твой экран Payoneer:
            </Paragraph>
            <Paragraph>
                В оранжевой рамке Payoneer прямо пишет: документ <Word>
                    <Bold />
                    «does not have to be in English»
                </Word> — то есть <Word>
                    <Bold />
                    не обязан
                </Word> быть на английском! И срок — <Word>
                    <Bold />
                    в пределах последних 6 месяцев
                </Word> (не 3, как в общих правилах — на твоём экране именно 6). Значит главный камень преткновения — не
                язык, а <Word>
                    <Bold />
                    наличие адреса
                </Word>. Документ может быть хоть на грузинском/русском, лишь бы в нём были имя + адрес + дата.
            </Paragraph>
            <Paragraph>
                Это снимает напряжение: тебе достаточно, чтобы Credo выдал документ с твоим <Word>
                    <Bold />
                    адресом
                </Word>, на любом из языков. Английский — приятный бонус, но не обязательный.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ключевой момент для сотрудника:
                </Word> проси именно <Word>
                    <Bold />
                    справку / account confirmation letter
                </Word> (грузинское <Word>
                    <Emphasis />
                    ცნობა
                </Word>, русское <Word>
                    <Emphasis />
                    справка
                </Word>), а <Word>
                    <Bold />
                    не
                </Word> обычную выписку (<Word>
                    <Emphasis />
                    ამონაწერი
                </Word>). Обычная выписка адрес часто не показывает — а справка о клиенте делается как раз с указанием
                адреса. Это и есть причина, почему приложение тебе не помогло.
            </Paragraph>
            <Paragraph>
                Вот текст, который покажи/дай сотруднику (английский — чтобы спецификация была однозначной):
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Request: account confirmation letter with my registered residential address
                </Word>
            </Paragraph>
            <Paragraph>
                I would like to request an official <Word>
                    <Bold />
                    account confirmation letter
                </Word> (or a bank statement that includes my address) for submission to a payment provider (Payoneer).
            </Paragraph>
            <Paragraph>
                The document <Word>
                    <Bold />
                    must contain all of the following
                </Word>:
            </Paragraph>
            <Paragraph>
                ☐ Credo Bank name / official letterhead ☐ Date of issue — within the last 6 months ☐ My full name: <Word>
                    <Bold />
                    Anastasiia Krasavina
                </Word> ☐ My residential address: <Word>
                    <Bold />
                    83 Sairme Street, Apt 3-a, Tbilisi, 0119, Georgia
                </Word> ☐ Bank signature and stamp (if printed)
            </Paragraph>
            <Paragraph>
                Format: PDF or signed printed original. Language: English preferred, but Russian or Georgian is also
                acceptable.
            </Paragraph>
            <Paragraph>
                A plain transaction statement is <Word>
                    <Bold />
                    not
                </Word> sufficient — the document must clearly show my <Word>
                    <Bold />
                    residential address
                </Word>.
            </Paragraph>
            <Paragraph>
                Что сказать своими словами по-русски, когда подойдёшь: <Word>
                    <Emphasis />
                    «Мне нужна справка о наличии счёта с указанием моего адреса проживания — для платёжного сервиса. Обычная выписка не подходит, потому что в ней нет адреса. Нужна справка, где есть моё имя и адрес, с печатью банка, не старше 6 месяцев.»
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Про пример документа:
                </Word> у тебя он уже есть — это <Word>
                    <Bold />
                    второй скриншот
                </Word> (образец MetroBank от самого Payoneer). Он идеально показывает, что должно быть на документе:
                красным обведены ровно три вещи — <Word>
                    <Bold />
                    название банка
                </Word>, <Word>
                    <Bold />
                    дата выписки
                </Word>, <Word>
                    <Bold />
                    имя и адрес
                </Word>. Покажи этот скриншот сотруднику — он сразу поймёт, что нужно. Это официальный пример Payoneer,
                лучше не придумаешь.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    И раз ты всё равно едешь — закрой заодно один наш висящий вопрос:
                </Word> спроси у банка, какой <Word>
                    <Bold />
                    почтовый индекс
                </Word> у них записан по твоему адресу (Sairme 83). Мы поставили в Payoneer <Word>
                    <Bold />
                    0119
                </Word>, но не подтверждали его. Если у банка другой — запомни, и мы поправим Payoneer под банковский
                (документ и Payoneer должны совпадать по адресу до буквы, включая индекс).
            </Paragraph>
            <Paragraph>Чек-лист на поездку:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Забрать готовую карту.</Line>
                <Line>
                    Запросить <Word>
                        <Bold />
                        справку с адресом
                    </Word> (текст + образец-скриншот выше).
                </Line>
                <Line>
                    Уточнить <Word>
                        <Bold />
                        индекс
                    </Word> по их данным.
                </Line>
            </Paragraph>
            <Paragraph>
                Когда получишь справку — пришли мне, сверю имя/адрес/дату/формат с требованиями Payoneer до загрузки, чтобы
                прошло с первого раза.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-12T07:57:39.378498Z"
        >
            <Origin>019ebad6-1b9d-7786-a06b-70bd607b9ccc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ТЫ МОГ БЫ составить мне пдф с этим запросом (плюс напиши то же самое на грузинском языке), чтобы я просто
                показала сотруднику банка. то есть я хочу, чтобы там был текст на шрузинском, затем текст на английском (я
                хочу, чтобы в тексте было пояснения, что мне нужна эта справка для плтаежной системы Пейонир, чтобы они
                получили подтверждение, что я продиваю по этому адресу и справка из банка - как раз такой документ, который
                это подтверждает) и чтобы потом шел вот этот скригщот, который я прикрпеляю сейчас сюда я просто распечаатаю
                пдф и возьму его в банк (для меня напиши текст на русском отдельно ,не в ПДФ для проверки)
            </Paragraph>
            <Attachment>Uploaded “1781251030506_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-12T08:01:04.180331Z"
        >
            <Origin>019ebad6-1b9d-7450-b3e8-871c7a211f50</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Сделаю PDF с грузинским и английским текстом и твоим скриншотом-примером. Сначала прочитаю, как правильно
                собрать PDF в этой среде.
            </Paragraph>
            <Action>Read /mnt/skills/public/pdf/SKILL.md</Action>
            <Action>Read /mnt/skills/public/pdf/SKILL.md</Action>
            <Paragraph>
                Прочитала. Для грузинского текста нужен шрифт с поддержкой грузинских символов — проверю, что есть в
                системе, и что картинка на месте.
            </Paragraph>
            <Action>
                Ran ls -la /mnt/user-data/uploads/ | grep 1781251030506; echo "---FONTS---"; fc-list | grep -iE
                "georgian|dejavu|noto" | head -40
            </Action>
            <Action>
                Ran cd /home/claude &amp;&amp; pip install fonttools --break-system-packages -q 2&gt;/dev/null; python3 -c "
                from fontTools.ttLib import TTFont f = TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf') cmap =
                f.getBestCmap() # Georgian Mkhedruli sample chars sample = 'გამარჯობათ' missing = &#91;c for c in sample if
                ord(c) not in cmap&#93; print('Georgian sample:', sample) print('Missing glyphs:', missing if missing else
                'NONE - Georgian supported') "
            </Action>
            <Paragraph>DejaVu Sans поддерживает грузинский — отлично. Собираю PDF.</Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from PIL import Image im =
                Image.open('/mnt/user-data/uploads/1781251030506_image.png') print(im.size) " 2&gt;/dev/null || pip install
                pillow --break-system-packages -q &amp;&amp; python3 -c " from PIL import Image im =
                Image.open('/mnt/user-data/uploads/1781251030506_image.png') print('image size:', im.size) "
            </Action>
            <Action>Created /home/claude/build_pdf.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; mkdir -p /mnt/user-data/outputs &amp;&amp; pip install reportlab
                --break-system-packages -q 2&gt;/dev/null; python3 build_pdf.py &amp;&amp; echo "---" &amp;&amp; ls -la
                /mnt/user-data/outputs/
            </Action>
            <Paragraph>Проверю, что грузинский текст и картинка отрисовались правильно.</Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; pip install pdf2image --break-system-packages -q 2&gt;/dev/null; python3 -c "
                from pdf2image import convert_from_path pages =
                convert_from_path('/mnt/user-data/outputs/Credo_Bank_Request_Payoneer.pdf', dpi=90) print('pages:',
                len(pages)) for i,p in enumerate(pages): p.save(f'/home/claude/preview_&#123;i+1&#125;.png') print('saved
                preview', i+1, p.size) "
            </Action>
            <Action>Read /home/claude/preview_1.png</Action>
            <Action>Read /home/claude/preview_2.png</Action>
            <Paragraph>
                Готово — PDF собран и проверен: грузинский и английский текст рендерятся правильно, а на второй странице
                идёт твой пример-образец Payoneer с подписями.
            </Paragraph>
            <Action>Presented files</Action>
            <Paragraph>
                Распечатай и бери с собой. Стр. 1 — текст (грузинский сверху, английский снизу) с пояснением, что справка
                нужна для Payoneer как подтверждение проживания. Стр. 2 — образец Payoneer. Сотруднику достаточно показать
                обе страницы.
            </Paragraph>
            <Paragraph>
                Теперь, как ты просила, <Word>
                    <Bold />
                    русская версия отдельно — для твоей сверки
                </Word> (её в PDF нет):
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Запрос: справка о счёте с указанием адреса проживания
                </Word>
            </Paragraph>
            <Paragraph>
                Здравствуйте! Прошу выдать мне официальную справку из банка (или выписку), в которой указаны моё имя и адрес
                проживания.
            </Paragraph>
            <Paragraph>
                Этот документ нужен мне для платёжной системы <Word>
                    <Bold />
                    Payoneer
                </Word> — им требуется подтверждение, что я проживаю по указанному адресу, а справка из банка как раз
                является документом, который это подтверждает.
            </Paragraph>
            <Paragraph>
                Документ обязательно должен содержать: • Название банка / официальный бланк • Дату выдачи — в пределах
                последних 6 месяцев • Моё полное имя: Anastasiia Krasavina • Мой адрес проживания: 83 Sairme Street, Apt
                3-a, Tbilisi, 0119, Georgia • Подпись и печать банка (на печатной версии)
            </Paragraph>
            <Paragraph>
                Обратите внимание: обычная выписка по транзакциям не подходит — в документе обязательно должен быть виден
                адрес проживания. Документ может быть на грузинском, русском или английском.
            </Paragraph>
            <Paragraph>Пара заметок перед поездкой:</Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Ключевое слово для сотрудника — «справка/ცნობა», а не «выписка/ამონაწერი».
                </Word> Справка делается с адресом, выписка обычно без. Это вся суть задачи.
            </Paragraph>
            <Paragraph>
                — <Word>
                    <Bold />
                    Уточни у них индекс
                </Word> по твоему адресу. В Payoneer у нас стоит <Word>
                    <Bold />
                    0119
                </Word> (непроверенный) — если у банка другой, запомни, поправим Payoneer под банковский.
            </Paragraph>
            <Paragraph>
                — Когда получишь документ — <Word>
                    <Bold />
                    пришли мне фото
                </Word>, сверю имя/адрес/дату с требованиями Payoneer до загрузки. И не забудь забрать карту 🙂
            </Paragraph>
            <Attachment>Uploaded “preview_1.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “preview_2.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-12T08:09:01.973845Z"
        >
            <Origin>019ebae0-8586-7973-b3a4-3fd2439ea565</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Документ может быть на грузинском, русском или английском. - Клод, давай уберем слова "на русском" - Мы не
                показываем ничего русского! предпочтительно на английском
            </Paragraph>
        </Message>
        <Message
            at="2026-06-12T08:10:23.891892Z"
        >
            <Origin>019ebae0-8586-76c6-97a8-7533ad361ef9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Согласна — ничего русского не показываем. Убираю из обоих текстов, делаю английский предпочтительным.
                Перебираю PDF.
            </Paragraph>
            <Action>Edited a file</Action>
            <Action>Edited /home/claude/build_pdf.py</Action>
            <Action>Edited /home/claude/build_pdf.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 build_pdf.py &amp;&amp; python3 -c " from pdf2image import
                convert_from_path pages = convert_from_path('/mnt/user-data/outputs/Credo_Bank_Request_Payoneer.pdf',
                dpi=90) pages&#91;0&#93;.save('/home/claude/preview_1b.png') print('rebuilt, pages:', len(pages)) "
            </Action>
            <Action>Read /home/claude/preview_1b.png</Action>
            <Paragraph>
                Готово — русский убран из обоих текстов. Теперь язык документа описан так: «предпочтительно на английском,
                грузинский тоже допустим» (в грузинском: <Word>
                    <Emphasis />
                    სასურველია ინგლისურ ენაზე, თუმცა ქართულიც მისაღებია
                </Word>; в английском: <Word>
                    <Emphasis />
                    preferably in English; Georgian is also acceptable
                </Word>). Ничего русского.
            </Paragraph>
            <Action>Presented files</Action>
            <Paragraph>
                Это обновлённый файл, бери его. И русская версия для твоей сверки, тоже без русского в строке про язык:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Запрос: справка о счёте с указанием адреса проживания
                </Word>
            </Paragraph>
            <Paragraph>
                Здравствуйте! Прошу выдать мне официальную справку из банка (или выписку), в которой указаны моё имя и адрес
                проживания.
            </Paragraph>
            <Paragraph>
                Этот документ нужен мне для платёжной системы <Word>
                    <Bold />
                    Payoneer
                </Word> — им требуется подтверждение, что я проживаю по указанному адресу, а справка из банка как раз
                является документом, который это подтверждает.
            </Paragraph>
            <Paragraph>
                Документ обязательно должен содержать: • Название банка / официальный бланк • Дату выдачи — в пределах
                последних 6 месяцев • Моё полное имя: Anastasiia Krasavina • Мой адрес проживания: 83 Sairme Street, Apt
                3-a, Tbilisi, 0119, Georgia • Подпись и печать банка (на печатной версии)
            </Paragraph>
            <Paragraph>
                Обратите внимание: обычная выписка по транзакциям не подходит — в документе обязательно должен быть виден
                адрес проживания. Предпочтительно на английском; грузинский тоже допустим.
            </Paragraph>
            <Paragraph>
                Удачи в банке, Ана. Забери карту, запроси справку (ключевое слово — <Word>
                    <Bold />
                    справка/ცნობა
                </Word>), уточни индекс — и пришли мне результат, сверю перед загрузкой в Payoneer.
            </Paragraph>
            <Attachment>Uploaded “preview_1b.png”, whose content the export does not carry</Attachment>
        </Message>
    </Chapter>
);

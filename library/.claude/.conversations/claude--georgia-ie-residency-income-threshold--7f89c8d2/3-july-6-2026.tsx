import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Title>[[ 6 July 2026 ]]</Title>
        <Message
            at="2026-07-06T10:11:05.892484Z"
        >
            <Origin>019f36e8-f567-7267-b1f6-0b26a94fd1be</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, внеси это в табличку и расскажи, что тут за подводные камни</Paragraph>
            <Paragraph>
                Sharkyyy &lt;hello@sharkyyy.com&gt; 1:41 PM (25 minutes ago) to me Hello! Thank you for your inquiry! We
                apologize for the delayed response. In the future, we recommend that you contact us through the website chat
                (available after registration). We respond much more quickly there—usually within an hour.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The price of our service subscription is 60 GEL per month, or 480 GEL per year (40 GEL per month on a
                    yearly billing).
                </Line>
                <Line>Yes, the service is capable of declaring reverse-charge VAT.</Line>
                <Line>
                    The service does not submit any declarations automatically. You will need to confirm that you did not
                    have any income, since the service itself cannot know whether you had any income other than that
                    received through banking integrations or not.
                </Line>
                <Line>
                    If you received the Small Business status in June, you are obliged to file the first declaration in July
                    (before the 15th of July). This declaration will reflect your June earnings.
                </Line>
                <Line>
                    The service calculates the taxes and prepares the form. You will still have to log in into RS.GE to
                    submit the declaration. With our service, it literally takes a couple of clicks.
                </Line>
            </Paragraph>
            <Paragraph>
                The website will also automatically generate an income and expense ledger—a simplified accounting document
                that the revenue service can request. We also have integration with RS.GE, which allows you to view your tax
                account status directly in your personal account (whether you have any debt, any write-offs, tax accruals,
                penalties, etc.). However, the integration currently doesn't allow you to directly pass declarations. We're
                working on it. Please let us know if you have any additional questions!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T10:16:46.482598Z"
        >
            <Origin>019f36e8-f567-7b34-9688-89714170cc51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, привет. Прежде чем сводить в табличку, проверю пару вещей в этом письме - там есть один момент по
                срокам, который стоит уточнить срочно, потому что от него зависит, надо ли подавать декларацию уже к 15
                июля.
            </Paragraph>
            <Action>
                Searched the web for “მცირე ბიზნესის სტატუსი როდის ამოქმედდება რეგისტრაციის მომდევნო თვის პირველი რიცხვი
                დეკლარაცია”
            </Action>
            <Paragraph>Проверю ещё сам сервис Sharkyyy - стоит ли ему доверять.</Paragraph>
            <Action>Searched the web for “Sharkyyy Georgia tax service small business declaration reviews”</Action>
            <Paragraph>
                Всё проверила. Здесь есть один срочный момент по срокам — разберу его отдельно, потому что он важнее самой
                таблички. Сначала сделаю табличку, потом подводные камни.
            </Paragraph>
            <Action>Read /mnt/skills/public/xlsx/SKILL.md</Action>
            <Paragraph>Табличка готова, сверяю данные и оформляю.</Paragraph>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; cat &gt; build.py &lt;&lt; 'EOF' from openpyxl import Workbook from
                openpyxl.styles import Font, PatternFill, Alignment, Border, Side wb = Workbook() ws = wb.active ws.title =
                "Бухгалтерия ИП" headers = &#91;"Вариант", "Тип", "Цена / мес (GEL)", "Цена / год (GEL)", "Язык", "Кто
                подаёт декларацию", "На ком ответственность", "Reverse-charge НДС", "Примечания"&#93; rows = &#91;
                &#91;"Sharkyyy", "Софт (ведёшь сама)", "60", "480 (= 40/мес)", "EN (есть RU)", "Ты сама - пара кликов на
                rs.ge", "На тебе", "Да, отслеживает автоматически", "3 мес бесплатно новым ИП. Гайды в кабинете. Декларацию
                за тебя НЕ подаёт. Ты сама подтверждаешь нулевые месяцы."&#93;, &#91;"Expertos", "Онлайн-сервис", "150",
                "1200 (= 100/мес)", "RU", "Они - готовят и направляют", "В основном на них", "Уточнить при заказе",
                "expertos.ge. Фикс. цена. Загружаешь выписку - считают курс и подают."&#93;, &#91;"relocup", "Агентство",
                "от ~135 (от $50)", "-", "RU", "Они", "На них", "Уточнить", "relocup.com. Цена 'от' - уточнять под твой
                случай."&#93;, &#91;"Местный бухгалтер\n(servisebi.ge)", "Частный бухгалтер", "50-100", "по договорённости",
                "KA (иногда RU/EN)", "Они", "На них (частично)", "Обычно да", "Дёшево, делают всё за тебя. Минус: общение
                чаще по-грузински - при выборе спросить язык."&#93;, &#91;"ExpatHub", "Агентство", "~200", "-", "RU / EN",
                "Они", "На них", "Да", "Уже знают твою структуру (делали регистрацию ИП). Дороже всех."&#93;, &#93; #
                styling header_fill = PatternFill("solid", start_color="2F5496") header_font = Font(name="Arial", bold=True,
                color="FFFFFF", size=11) sharkyyy_fill = PatternFill("solid", start_color="FCE4D6") base_font =
                Font(name="Arial", size=10) bold_font = Font(name="Arial", size=10, bold=True) thin = Side(style="thin",
                color="BFBFBF") border = Border(left=thin, right=thin, top=thin, bottom=thin) top_align =
                Alignment(horizontal="left", vertical="top", wrap_text=True) center_align = Alignment(horizontal="center",
                vertical="center", wrap_text=True) ws.append(headers) for c in range(1, len(headers)+1): cell =
                ws.cell(row=1, column=c) cell.fill = header_fill cell.font = header_font cell.alignment = center_align
                cell.border = border for r_idx, row in enumerate(rows, start=2): ws.append(row) for c in range(1,
                len(headers)+1): cell = ws.cell(row=r_idx, column=c) cell.font = bold_font if c == 1 else base_font
                cell.alignment = top_align cell.border = border if row&#91;0&#93;.startswith("Sharkyyy"): cell.fill =
                sharkyyy_fill widths = &#91;20, 18, 15, 17, 15, 22, 18, 20, 42&#93; from openpyxl.utils import
                get_column_letter for i, w in enumerate(widths, start=1):
                ws.column_dimensions&#91;get_column_letter(i)&#93;.width = w ws.row_dimensions&#91;1&#93;.height = 30 for r
                in range(2, len(rows)+2): ws.row_dimensions&#91;r&#93;.height = 60 ws.freeze_panes = "A2"
                wb.save("sravnenie_buhgalteria_IP.xlsx") print("saved") EOF python3 build.py
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                Файл выше - можешь дополнять его по мере новых предложений. Строка Sharkyyy подсвечена. А теперь подводные
                камни, и первый - срочный.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Сроки первой декларации - это надо проверить в ближайшие дни.
                </Word> Тут Sharkyyy в письме, скорее всего, прав, и это поправка к тому, что я тебе говорила раньше. В 2026
                году правило поменялось: раньше статус малого бизнеса начинал действовать с 1-го числа следующего месяца
                после подачи заявления, а теперь - со дня подачи заявления (изменение в приказ №999, обзор BDO от марта
                2026). То есть если ты подала на статус в июне, июнь - уже твой первый отчётный месяц, и первую декларацию
                за июнь надо подать до 15 июля. Это девять дней.
            </Paragraph>
            <Paragraph>
                Тонкость: в этом вопросе источники противоречат друг другу - на самом сайте Sharkyyy в блоге до сих пор
                висит старая формулировка («с 1-го числа следующего месяца»), а в письме менеджер применил новую. Поэтому не
                полагайся на слово - зайди в личный кабинет rs.ge и посмотри точную дату начала действия статуса на твоём
                сертификате. Практический вывод: если был июньский доход - подай декларацию до 15 июля обязательно. Если
                июньского дохода не было - всё равно безопаснее подать нулевую до 15 июля (за нулевую декларацию штрафа нет,
                а за просрочку с доходом - 5% от налога плюс пеня).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Sharkyyy - это не бухгалтер, а программа.
                </Word> Они сами пишут: «я не бухгалтер». Сервис считает налог и готовит форму, но подаёшь декларацию ты
                сама на rs.ge, и ответственность за правильность - на тебе. Это не то же самое, что агентство, которое
                заходит в твой кабинет и подаёт за тебя. За те же ~50-60 лари местный бухгалтер с servisebi.ge делает всю
                работу вместо тебя. Так что ценность Sharkyyy - это контроль, английский интерфейс, гайды и 3 месяца
                бесплатно, а не «сняли с меня заботу».
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. «Автоматически» - с большой оговоркой.
                </Word> Сервис видит доход только через банковские интеграции. Твои деньги идут через Payoneer / Fiverr /
                лабораторию в США. Если эти каналы не подключены или деньги лежат на Payoneer, а не пришли на Credo - сервис
                их не увидит, и заносить придётся руками. Плюс нулевые месяцы ты подтверждаешь сама - он за тебя не
                догадается.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Reverse-charge НДС - умеет, но кормить данными надо тебе.
                </Word> Хорошо, что сервис вообще отслеживает НДС на покупку услуг у иностранных компаний (многие про это
                забывают). Но он посчитает его только по тем покупкам, которые видит или которые ты внесёшь. Garbage in -
                garbage out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Формулировки «консультация» - твой главный риск по статусу.
                </Word> Не про Sharkyyy, но важно: консультационная деятельность (включая налоговую) - в запрещённом списке
                для малого бизнеса (Постановление №415). Если в договорах/инвойсах будет «консультация» - статус могут
                аннулировать и пересчитать налог по 20%. Держи формулировки как «результат работы»: иллюстрация, карта,
                дизайн. У тебя это уже так, просто держи в голове.
            </Paragraph>
            <Paragraph>
                Одна хорошая новость в тему: услуги, оказанные нерезидентам (твои иностранные клиенты), не облагаются
                грузинским НДС и не считаются в лимит 100 000 лари для обязательной регистрации по НДС. То есть с
                иностранных клиентов ты этот лимит не набьёшь - это отдельно от reverse-charge на твои покупки.
            </Paragraph>
            <Paragraph>
                Про сам Sharkyyy: это реальный, живой грузинский сервис с подробными гайдами, дают 3 месяца бесплатно новым
                ИП. Независимых отзывов я не нашла - если решишь брать, поищи отклики в русскоязычных чатах перед оплатой.
            </Paragraph>
            <Paragraph>
                Хочешь - разберём пошагово, как подать первую декларацию за июнь до 15 июля, чтобы точно успеть в срок?
            </Paragraph>
        </Message>
    </Chapter>
);

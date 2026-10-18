import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 June 2026](2026-06-24)</Date>
        </Dated>
        <Title>[[ 24 June 2026 ]]</Title>
        <Message
            at="2026-06-24T09:49:07.401235Z"
        >
            <Origin>019ef908-8ac3-71a8-ba67-faaddbe7ba02</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод,мы пошли в Макдональдс. Это раз в неделю.</Paragraph>
            <Attachment>
                Uploaded “6207927e-eb4d-4c8d-8a54-84a1a5496fb8.webp”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-06-24T09:50:37.998860Z"
        >
            <Origin>019ef908-8ac3-71a8-ba67-faae4055bcff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Записываю, Ана 😊 McDonald's (Батуми, Химшиашвили 29), 24.06, оплата картой, <Word>
                    <Bold />
                    Eat-In, итого 53.80 лари
                </Word>. Раз в неделю — отличная семейная традиция, это нормально.
            </Paragraph>
            <Paragraph>Разбираю чек (это два комбо + допы для троих):</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Позиция</Word>
                    <Word>Цена</Word>
                </Line>
                <Line>
                    <Word>Гамбургер-комбо (картофель фри + Фанта + игрушка)</Word>
                    <Word>13.45</Word>
                </Line>
                <Line>
                    <Word>МакНаггетс-комбо (фри + кола без сахара + игрушка)</Word>
                    <Word>13.45</Word>
                </Line>
                <Line>
                    <Word>Соус сырный</Word>
                    <Word>3.45</Word>
                </Line>
                <Line>
                    <Word>Соус барбекю</Word>
                    <Word>1.85</Word>
                </Line>
                <Line>
                    <Word>МакФлурри</Word>
                    <Word>9.80</Word>
                </Line>
                <Line>
                    <Word>Чизбургер</Word>
                    <Word>6.85</Word>
                </Line>
                <Line>
                    <Word>Орео эспрессо шейк (?)</Word>
                    <Word>4.95</Word>
                </Line>
                <Line>
                    <Word>Итого</Word>
                    <Word>53.80</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Заношу как <Word>
                    <Bold />
                    «Кафе/рестораны»
                </Word> — это отдельная категория, не продукты домой и не снеки. Семейный поход в кафе это своя статья, и
                считать её правильно отдельно.
            </Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook from openpyxl.styles import
                Font, Border, Side wb=load_workbook('budget2.xlsx') reg=Font(name='Arial')
                thin=Side(style='thin',color='BBBBBB'); border=Border(left=thin,right=thin,top=thin,bottom=thin)
                ws=wb&#91;'Траты'&#93; r=21 while ws.cell(row=r,column=2).value not in (None,''): r+=1
                ws.cell(row=r,column=1,value='24.06').font=reg ws.cell(row=r,column=2,value='McDonalds (семья, раз в
                неделю)').font=reg ws.cell(row=r,column=3,value=53.80).font=reg
                ws.cell(row=r,column=3).number_format='#,##0.00' ws.cell(row=r,column=4,value='Кафе/рестораны').font=reg for
                c in range(1,5): ws.cell(row=r,column=c).border=border print('Траты row',r) # В Чеки одной строкой
                (детализация не нужна — это готовая еда) ws3=wb&#91;'Чеки'&#93; r=55
                ws3.cell(row=r,column=1,value='24.06').font=reg ws3.cell(row=r,column=2,value='McDonalds').font=reg
                ws3.cell(row=r,column=3,value='2 комбо + допы (семья)').font=reg
                ws3.cell(row=r,column=4,value=53.80).font=reg ws3.cell(row=r,column=4).number_format='#,##0.00'
                ws3.cell(row=r,column=5,value='Кафе/рестораны').font=reg for c in range(1,6):
                ws3.cell(row=r,column=c).border=border wb.save('budget2.xlsx') print('done') " &amp;&amp; python
                /mnt/skills/public/xlsx/scripts/recalc.py budget2.xlsx 40 2&gt;&amp;1 | tail -2
            </Action>
            <Paragraph>
                Категория «Кафе/рестораны» новая — её нет в сводке групп на листе «Чеки». Добавлю её строкой, чтобы
                McDonald's попал в подсчёт и не потерялся.
            </Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook from openpyxl.styles import
                Font, Border, Side wb=load_workbook('budget2.xlsx') reg=Font(name='Arial')
                thin=Side(style='thin',color='BBBBBB'); border=Border(left=thin,right=thin,top=thin,bottom=thin)
                ws3=wb&#91;'Чеки'&#93; # найти строку ИТОГО в сводке (G), вставить Кафе перед ней itogo_row=None for r in
                range(4,16): if ws3.cell(row=r,column=7).value=='ИТОГО': itogo_row=r; break print('ИТОГО в строке',
                itogo_row) # Прочее/дом на стр 12, ИТОГО на 13. Впишем Кафе в свободную? Проверим стр 12,13 for r in
                range(11,15): print(r, ws3.cell(row=r,column=7).value, ws3.cell(row=r,column=8).value) "
            </Action>
            <Paragraph>
                Сводка плотная (Прочее/дом на 12, ИТОГО на 13). Чтобы добавить «Кафе/рестораны», вставлю строку перед ИТОГО
                и расширю формулу суммы. Сделаю аккуратно.
            </Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook from openpyxl.styles import
                Font, Border, Side wb=load_workbook('budget2.xlsx') reg=Font(name='Arial');
                boldf=Font(bold=True,name='Arial') thin=Side(style='thin',color='BBBBBB');
                border=Border(left=thin,right=thin,top=thin,bottom=thin) from openpyxl.styles import PatternFill
                SUB=PatternFill('solid',start_color='E8F0E3') ws3=wb&#91;'Чеки'&#93; # Вставить строку 13 (перед ИТОГО) —
                сдвинет ИТОГО на 14 ws3.insert_rows(13) # Заполнить Кафе/рестораны в новой строке 13
                ws3.cell(row=13,column=7,value='Кафе/рестораны').font=reg
                ws3.cell(row=13,column=8,value='=SUMIF(E4:E60,G13,D4:D60)').font=reg
                ws3.cell(row=13,column=8).number_format='#,##0.00' for c in (7,8): ws3.cell(row=13,column=c).border=border #
                Обновить ИТОГО (теперь стр 14) чтобы включал H4:H13 ws3.cell(row=14,column=8,value='=SUM(H4:H13)')
                wb.save('budget2.xlsx') print('Кафе добавлено стр13, ИТОГО стр14') " &amp;&amp; python
                /mnt/skills/public/xlsx/scripts/recalc.py budget2.xlsx 40 2&gt;&amp;1 | tail -2
            </Action>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook
                wb=load_workbook('budget2.xlsx',data_only=True) ws=wb&#91;'Траты'&#93; t=0 for r in range(21,35):
                v=ws.cell(row=r,column=3).value if isinstance(v,(int,float)): t+=v print('ИТОГО неделя 2:', round(t,2))
                ws3=wb&#91;'Чеки'&#93; print('=== Группы ===') for r in range(4,15): g=ws3.cell(row=r,column=7).value;
                s=ws3.cell(row=r,column=8).value if g and g!='ИТОГО' and s is not None: print(f'
                &#123;g:&lt;16&#125;&#123;s:&gt;7.2f&#125;') print(' ИТОГО групп:',
                round(ws3.cell(row=14,column=8).value,2)) " &amp;&amp; cp budget2.xlsx
                "/mnt/user-data/outputs/Бюджет_Батуми_трекер.xlsx" &amp;&amp; echo copied
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                Готово, Ана 😊 McDonald's (53.80) внесён в новую отдельную категорию <Word>
                    <Bold />
                    «Кафе/рестораны»
                </Word> — так правильно, это не продукты и не снеки, а свой вид трат.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Неделя 2 (20–24 июня, 5 дней): 314.01 лари
                </Word>
            </Paragraph>
            <Paragraph>И вот тут стоит остановиться на картине честно, без оценок — просто факты, как ты любишь:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Топ-3 трат недели:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>🥬 Овощи/фрукты — 73.67 (из них ~52 ягоды)</Line>
                <Line>
                    🍔 <Word>
                        <Bold />
                        Кафе (McDonald's) — 53.80 за один поход
                    </Word>
                </Line>
                <Line>🍬 Снеки/сладкое — 39.25</Line>
            </Paragraph>
            <Paragraph>
                Смотри, что вышло: <Word>
                    <Bold />
                    один поход в McDonald's (54 лари) стоил почти столько же, сколько весь твой реальный недельный рацион еды дома (~132 на 7 дней).
                </Word> То есть один семейный обед в кафе ≈ 40% недельной готовки. Это не значит «не ходить» — раз в неделю
                с детьми это здорово и ты сама так решила. Просто теперь видно вес: McDonald's раз в неделю = ~215 лари/мес
                (~$81).
            </Paragraph>
            <Paragraph>
                Если сложить три «удовольствия» за неделю — кафе (54) + снеки (39) + ягоды (52) = <Word>
                    <Bold />
                    145 лари
                </Word>, это больше, чем вся базовая еда. Опять же, не упрёк: это нормальная жизнь, лето, дети. Но это и
                есть ответ на твой главный вопрос «где деньги»: не в еде, а в приятных дополнениях к ней. И все три —
                управляемые, если когда-то понадобится.
            </Paragraph>
            <Paragraph>
                Файл обновлён 😊 Кстати, McDonald's на Химшиашвили 29 — это прямо рядом с твоим домом, удобно.
            </Paragraph>
        </Message>
    </Chapter>
);

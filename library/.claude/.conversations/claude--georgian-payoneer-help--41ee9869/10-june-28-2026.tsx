import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 June 2026](2026-06-28)</Date>
        </Dated>
        <Title>[[ 28 June 2026 ]]</Title>
        <Message
            at="2026-06-28T20:44:31.532021Z"
        >
            <Origin>019f0ffa-008e-7764-a506-551a8776f39a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, что ты видишь в этом репорте? какой у меня был заработок на Файверр за год?</Paragraph>
            <Attachment>
                Uploaded “earnings-b716ce7f-9542-4b30-bb18-f007fb9315aa.csv”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-06-28T20:45:37.786649Z"
        >
            <Origin>019f0ffa-008f-74d1-88d2-1654d9a89fdf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Дай прочитаю файл и посмотрю, что в нём.</Paragraph>
            <Action>
                Ran cd /mnt/user-data/uploads &amp;&amp; wc -l "earnings-b716ce7f-9542-4b30-bb18-f007fb9315aa.csv"; echo
                "---HEAD---"; head -5 "earnings-b716ce7f-9542-4b30-bb18-f007fb9315aa.csv"; echo "---TAIL---"; tail -3
                "earnings-b716ce7f-9542-4b30-bb18-f007fb9315aa.csv"
            </Action>
            <Paragraph>
                Это твой годовой отчёт по заработку с <Word>
                    <Bold />
                    Fiverr
                </Word> (за период 29.06.2025 - 29.06.2026). Названия гигов совпадают с твоим профилем - кастомные векторные
                карты. Давай посчитаю.
            </Paragraph>
            <Action>
                Ran cd /mnt/user-data/uploads &amp;&amp; pip install pandas --break-system-packages -q 2&gt;/dev/null;
                python3 -c " import pandas as pd df = pd.read_csv('earnings-b716ce7f-9542-4b30-bb18-f007fb9315aa.csv',
                skiprows=3) df&#91;'Amount'&#93;=pd.to_numeric(df&#91;'Amount'&#93;,errors='coerce') print('Строк
                (записей):', len(df)) print('Типы Activity:', df&#91;'Activity'&#93;.unique()) print('Валюта:',
                df&#91;'Currency'&#93;.unique()) print('ИТОГО за период, USD:', round(df&#91;'Amount'&#93;.sum(),2))
                print('Кол-во заказов (Order):', (df&#91;'Order or service type'&#93;=='Order').sum()) print('Средний чек,
                USD:', round(df&#91;df&#91;'Amount'&#93;&gt;0&#93;&#91;'Amount'&#93;.mean(),2)) print('Мин / Макс заказ:',
                df&#91;'Amount'&#93;.min(), '/', df&#91;'Amount'&#93;.max()) print() print('--- По месяцам (USD) ---')
                df&#91;'Date'&#93;=pd.to_datetime(df&#91;'Date'&#93;)
                m=df.groupby(df&#91;'Date'&#93;.dt.to_period('M'))&#91;'Amount'&#93;.sum().round(2) print(m.to_string())
                print() print('--- Топ покупатели (USD) ---')
                print(df.groupby('Buyer')&#91;'Amount'&#93;.sum().sort_values(ascending=False).head(8).round(2).to_string())
                "
            </Action>
            <Paragraph>
                Вот что в отчёте, Ана. Это твой <Word>
                    <Bold />
                    годовой заработок на Fiverr
                </Word> за период 29.06.2025 - 29.06.2026.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого за год: $16 581,40
                </Word> (всё в USD).
            </Paragraph>
            <Paragraph>Ключевые цифры:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Заказов: 89
                    </Word>, всего записей о начислениях: 114
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Средний чек: $145,45
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Разброс заказов: от $8 до $1 332
                    </Word> (один крупный заказ на 1332 выделяется)
                </Line>
                <Line>Все начисления типа Earning, валюта - доллары</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По месяцам
                </Word> (видно сезонность и провал в начале года):
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Месяц</Word>
                    <Word>USD</Word>
                </Line>
                <Line>
                    <Word>2025-06 (неполный)</Word>
                    <Word>280</Word>
                </Line>
                <Line>
                    <Word>2025-07</Word>
                    <Word>1 404</Word>
                </Line>
                <Line>
                    <Word>2025-08</Word>
                    <Word>1 756</Word>
                </Line>
                <Line>
                    <Word>2025-09</Word>
                    <Word>1 731</Word>
                </Line>
                <Line>
                    <Word>2025-10</Word>
                    <Word>1 689</Word>
                </Line>
                <Line>
                    <Word>2025-11</Word>
                    <Word>1 503</Word>
                </Line>
                <Line>
                    <Word>2025-12</Word>
                    <Word>1 263</Word>
                </Line>
                <Line>
                    <Word>2026-01</Word>
                    <Word>0 (записей нет)</Word>
                </Line>
                <Line>
                    <Word>2026-02</Word>
                    <Word>496</Word>
                </Line>
                <Line>
                    <Word>2026-03</Word>
                    <Word>2 722 (пик года)</Word>
                </Line>
                <Line>
                    <Word>2026-04</Word>
                    <Word>1 035</Word>
                </Line>
                <Line>
                    <Word>2026-05</Word>
                    <Word>2 360</Word>
                </Line>
                <Line>
                    <Word>2026-06 (неполный)</Word>
                    <Word>342</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Обрати внимание: <Word>
                    <Bold />
                    в январе 2026 заработка нет вообще, а февраль низкий
                </Word> - был провал, потом сильный отскок в марте и мае. Если январь не должен был быть нулевым - стоит
                свериться, не выпала ли часть данных из выгрузки.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Топ-покупатели за год:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>cliang_sierra - $2 266 (твой самый ценный клиент, заметно крупнее остальных)</Line>
                <Line>karl_solberg - $856</Line>
                <Line>svproductions7 - $800</Line>
                <Line>captkeith2 - $616</Line>
                <Line>fmg_29 - $608</Line>
            </Paragraph>
            <Paragraph>
                Маленькая оговорка по точности: это сумма <Word>
                    <Bold />
                    начислений (earnings) до вывода
                </Word> - то, что Fiverr тебе начислил за заказы. Комиссии Fiverr тут уже учтены (это «твоя» доля), но если
                Fiverr что-то дополнительно удерживает при выводе, итог «на руки» может чуть отличаться. Для понимания
                годового дохода $16 581 - верная цифра.
            </Paragraph>
            <Paragraph>
                Хочешь, посчитаю что-то ещё по этому файлу - например, средний доход в месяц без учёта неполных месяцев, или
                динамику по кварталам?
            </Paragraph>
        </Message>
    </Chapter>
);

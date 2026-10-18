import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 April 2026](2026-04-07)</Date>
        </Dated>
        <Title>[[ 7 April 2026 ]]</Title>
        <Message
            at="2026-04-07T14:01:00.815946Z"
        >
            <Origin>019d683f-0b8b-7ff8-a55e-d0bbaef7ab93</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, у меня не сходится что-то. во-первых, "мой" оранжевый маршрут обрывается. во-вторых, посмотри, что у
                тебя в Кливленде и что у меня. Что думаешь?
            </Paragraph>
            <Attachment>Uploaded “1775570369884_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1775570392666_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-07T14:01:47.590068Z"
        >
            <Origin>019d683f-0b8b-7de1-b59f-2300328f399a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вижу проблему! Два связанных момента:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Обрыв оранжевого маршрута
                </Word> — это именно та ошибка, о которой Ханна писала. Она сказала: <Word>
                    <Emphasis />
                    "Lebanon который я имела в виду — это в Огайо, а не в Теннесси."
                </Word> В твоих данных Lebanon стоит в Tennessee (lat ~36°N), а должен быть Lebanon, <Word>
                    <Bold />
                    Ohio
                </Word> (lat ~39.4°N). Из-за этого оранжевый маршрут делает резкий прыжок на юг вместо того чтобы идти домой
                через Огайо — и визуально "обрывается".
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Cleveland
                </Word> — на твоей карте там оранжевый пин, но по данным Cleveland есть <Word>
                    <Bold />
                    только в голубом маршруте 2022
                </Word>. В оранжевом его нет. Скорее всего пин попал туда случайно, или это путаница с Williamsfield OH
                (который рядом и есть в оранжевом).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что нужно исправить в оранжевом маршруте:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Удалить Lebanon, TN</Line>
                <Line>Поставить Lebanon, OH (39.43°N, -84.20°W)</Line>
                <Line>Убедиться что Williamsfield, OH на месте</Line>
                <Line>
                    Тогда конец оранжевого маршрута будет: Hernando → Lyles TN → Lebanon <Word>
                        <Bold />
                        OH
                    </Word> → Williamsfield OH → Toronto
                </Line>
            </Paragraph>
            <Paragraph>После этого оранжевый маршрут замкнётся правильно и обрыва не будет.</Paragraph>
        </Message>
        <Message
            at="2026-04-07T14:08:13.423057Z"
        >
            <Origin>019d6845-adba-74d5-98c6-2464d772ca50</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, сравни сейчас все города и цвета, какие только сможешь</Paragraph>
            <Attachment>Uploaded “1775570837059_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1775570880522_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-07T14:08:43.805296Z"
        >
            <Origin>019d6845-adba-704a-b723-9e9f2981fa51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Изучаю оба изображения внимательно. Вот что вижу:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Хорошо совпадает:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Toronto — золотой на обоих ✓</Line>
                <Line>Williamsfield — раздвоенный пин (оранжевый + зелёный) ✓</Line>
                <Line>Cleveland — голубой ✓</Line>
                <Line>Perrysburg — зелёный ✓</Line>
                <Line>Toledo — оранжевый ✓</Line>
                <Line>Morgantown — голубой ✓</Line>
                <Line>Batesville — зелёный ✓</Line>
                <Line>Wytheville — голубой ✓</Line>
                <Line>Lebanon — оранжевый, и позиция теперь правильная — в Огайо (высоко), не в Теннесси ✓</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вопросы/расхождения:
                </Word>
            </Paragraph>
            <Paragraph>
                На твоей карте (Image 2) я вижу <Word>
                    <Bold />
                    три цвета линий — серый, оранжевый, бирюзовый
                </Word>. Серый — это голубой маршрут 2022? Или это временный цвет в процессе работы?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Charleston WV
                </Word> — на моей точечной карте он оранжевый (2023), но на твоей карте линия там проходит очень запутанно —
                все три маршрута сходятся в этой зоне (WV/OH). Стоит проверить, что пин правильного цвета.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Milton WV
                </Word> — должен быть зелёный (2024 только). Проверь.
            </Paragraph>
            <Paragraph>Что конкретно тебя беспокоит — я могу сфокусироваться на отдельном регионе?</Paragraph>
        </Message>
        <Message
            at="2026-04-07T15:39:10.531910Z"
        >
            <Origin>019d6898-f780-7b27-b67c-8a402f57b244</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Серый — это голубой маршрут 2022? Или это временный цвет в процессе работы? - смотри, Ханна же просила
                сделать голуюбой юолее пастельным. вот я и сделала. Плюс еще скриншот искажает
            </Paragraph>
            <Paragraph>У меня тоде Charleston WV</Paragraph>
            <Paragraph>
                остается только вопрос с оранжевым маршрутом 2023 года на самом севере. у меня есть петля. что с ней делать?
                сверься с маршрутом по документам Ханны
            </Paragraph>
            <Attachment>Uploaded “1775576249725_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-07T15:39:59.574073Z"
        >
            <Origin>019d6898-f780-7d47-b77e-1b77624b3523</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Ran python3 &lt;&lt; 'EOF' import pandas as pd f = '/mnt/user-data/uploads/trip-26-03-30-14-25.xlsx' df =
                pd.read_excel(f, sheet_name='Trip Summary', header=None) print("ORANGE 2023 — все остановки с
                координатами:") print(f"&#123;'#':&lt;4&#125; &#123;'Город':&lt;35&#125; &#123;'Lat':&gt;10&#125;
                &#123;'Lon':&gt;12&#125;") print("-"*65) for i in range(4, len(df)): row = df.iloc&#91;i&#93; name =
                str(row&#91;1&#93;).strip() if pd.notna(row&#91;1&#93;) else '' lat = row&#91;17&#93; if
                pd.notna(row&#91;17&#93;) else None lon = row&#91;18&#93; if pd.notna(row&#91;18&#93;) else None if name and
                name != 'nan' and lat and lon: print(f"&#123;i-3:&lt;4&#125; &#123;name:&lt;35&#125;
                &#123;float(lat):&gt;10.5f&#125; &#123;float(lon):&gt;12.5f&#125;") EOF
            </Action>
            <Paragraph>
                Отлично — в Excel файле Ханна уже исправила ошибку! Lebanon стоит правильно — <Word>
                    <Bold />
                    Lebanon, OH
                </Word> (39.43°N), а не Tennessee. И Williamsfield тоже есть.
            </Paragraph>
            <Paragraph>
                Конец оранжевого маршрута должен идти так: <Word>
                    <Bold />
                    Hernando MS → Bon Aqua TN → Lebanon OH → Williamsfield OH → Toronto
                </Word>
            </Paragraph>
            <Paragraph>
                Петля на севере возникает именно из-за этого пути — маршрут идёт из Bon Aqua TN (35.9°N) резко вверх в
                Lebanon OH (39.4°N), потом в Williamsfield OH (41.5°N), потом в Toronto (43.6°N). Это <Word>
                    <Bold />
                    не ошибка
                </Word> — это реальный маршрут домой через Огайо.
            </Paragraph>
            <Paragraph>
                Петля которую ты видишь — это пересечение с зелёным и голубым маршрутами в зоне Perrysburg/Toledo/Cleveland.
                Все три возвращаются домой через этот коридор, и линии физически перекрещиваются. Это нормально — именно
                здесь нужна параллельная метро-укладка которую выбрала Ханна (Option B).
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T15:43:30.441958Z"
        >
            <Origin>019d689c-f148-75bd-b2aa-47a5ca0fdaef</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                "Конец оранжевого маршрута должен идти так: Hernando MS → Bon Aqua TN → Lebanon OH → Williamsfield OH →
                Toronto" Хорошо, а начало маршрута как проходит? я не понимаю вот этого Toledo - Williamsfield соединения
            </Paragraph>
            <Attachment>Uploaded “1775576586896_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-07T15:43:45.759502Z"
        >
            <Origin>019d689c-f148-7f0c-bd5b-8f3c5ca1d370</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Смотрю по данным оранжевого маршрута:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Начало:
                </Word> Toronto → <Word>
                    <Bold />
                    Toledo
                </Word> (#2) → Charleston WV → Rock Hill SC → ...на юг
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Конец:
                </Word> ...Hernando → Bon Aqua TN → Lebanon OH → <Word>
                    <Bold />
                    Williamsfield
                </Word> (#47) → Toronto
            </Paragraph>
            <Paragraph>
                То есть Toledo и Williamsfield — это <Word>
                    <Bold />
                    не связанные между собой точки
                </Word>. Оранжевый маршрут проходит через северный Огайо <Word>
                    <Bold />
                    дважды
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Раз на выезде из Торонто (через Toledo, уходя на юг)</Line>
                <Line>Раз на возвращении домой (через Williamsfield, с юга на север)</Line>
            </Paragraph>
            <Paragraph>
                Поэтому на карте оранжевая линия в этом районе идёт туда и обратно — и визуально создаёт петлю. Это <Word>
                    <Bold />
                    правильно географически
                </Word>, просто выглядит запутанно.
            </Paragraph>
            <Paragraph>
                Единственное что можно сделать — применить metro-style offset (линии рядом) именно в этом коридоре
                Toledo–Williamsfield–Toronto, тогда обе оранжевые ветки будут видны как параллельные линии, а не как
                перекрещивающиеся. Это как раз то, о чём просила Ханна для зоны Sayre→Fort Smith→Hernando.
            </Paragraph>
        </Message>
    </Chapter>
);

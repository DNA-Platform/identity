import { Append, Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 March 2026](2026-03-13)</Date>
        </Dated>
        <Title>[[ 13 March 2026 ]]</Title>
        <Message
            at="2026-03-13T09:00:45.112435Z"
        >
            <Origin>019ce66d-397c-7b2c-b610-b38e73368407</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ана: Клод, давай поработаем над третьим маршрутом Ханны
                https://newtripwizard.rvlife.com/app/visit/eS84anlnUExWMEh6MFBVVXZzTTFWUT09 Вот тебе вся информация о нем.
                Давай сделаем:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Документ для Гугл мепс</Line>
                <Line>SVG файл с названиями и точками и маршрутом, чтобы я могла просто копировать названия городов.</Line>
            </Paragraph>
            <Paragraph>
                при создании этого SVG файла опирайся на ту карту, которую я тебе всылаю тоже в формате SVG - у нее какая-то
                искаженная проекция, но мне нужно вписатьсяв эту карту.
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded “svg for claude.svg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1773392418304_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-13T09:03:42.044140Z"
        >
            <Origin>019ce66d-397c-79ae-ad4e-d070de2e547f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/user-data/uploads/svg_for_claude.svg</Action>
            <Action>
                Ran cat &lt;&lt; 'EOF' &gt; /home/claude/make_route2.py import math # Coordinate system derived from Ana's
                SVG (5247x2840 viewBox) # Reference: Toronto ~(3785, 882) = lat 43.65, lon -79.38 # Calibrated scale:
                ~67px/deg lon, ~75.9px/deg lat def to_svg(lat, lon): x = 3785 + (lon + 79.38) * 67 y = 4195.2 - lat * 75.9
                return round(x, 1), round(y, 1) stops = &#91; ("Toronto, ON", 43.65, -79.38), ("Perrysburg, OH", 41.56,
                -83.63), ("Milton, WV", 38.43, -82.13), ("York, SC", 35.02, -81.24), ("Jekyll Island, GA", 31.07, -81.42),
                ("St Augustine, FL", 29.89, -81.31), ("Palm Beach, FL", 26.71, -80.05), ("Hollywood, FL", 26.01, -80.15),
                ("Key Largo, FL", 25.09, -80.45), ("Naples, FL", 26.14, -81.80), ("Palm Beach, FL (2)", 26.71, -80.05), ("St
                Petersburg, FL", 27.77, -82.64), ("Palm Harbor, FL", 28.08, -82.76), ("Panama City Beach, FL",30.18,
                -85.80), ("Ponchatoula, LA", 30.44, -90.44), ("Shreveport, LA", 32.53, -93.75), ("Chickasha, OK", 35.05,
                -97.90), ("Portales, NM", 34.19, -103.33), ("Alamogordo, NM", 32.90, -105.96), ("Willcox, AZ", 32.25,
                -109.83), ("Wellton, AZ", 32.67, -114.15), ("Desert Hot Springs, CA",33.96,-116.50), ("Joshua Tree, CA",
                34.13, -116.31), ("Bakersfield, CA", 35.37, -119.02), ("Kingsburg, CA", 36.51, -119.55), ("Paso Robles, CA",
                35.63, -120.69), ("Stinson Beach, CA", 37.90, -122.64), ("Pescadero, CA", 37.26, -122.38), ("Santa Cruz,
                CA", 36.97, -122.03), ("Morro Bay, CA", 35.37, -120.85), ("Lost Hills, CA", 35.61, -119.69), ("Hanford, CA",
                36.33, -119.65), ("Bakersfield, CA (2)", 35.37, -119.02), ("Death Valley, CA", 36.53, -116.93), ("Barstow,
                CA", 34.90, -117.02), ("Wikieup, AZ", 34.70, -113.60), ("Flagstaff, AZ", 35.20, -111.65), ("Leeds, UT",
                37.23, -113.37), ("Kanab, UT", 37.05, -112.53), ("Williams, AZ", 35.25, -112.19), ("Holbrook, AZ", 34.90,
                -110.16), ("Albuquerque, NM", 35.08, -106.65), ("Tucumcari, NM", 35.17, -103.73), ("Sayre, OK", 35.29,
                -99.64), ("Fort Smith, AR", 35.39, -94.40), ("Hernando, MS", 34.84, -89.99), ("Murfreesboro, TN", 35.85,
                -86.39), ("Batesville, IN", 39.30, -85.22), ("Toronto, ON (end)", 43.65, -79.38), &#93; # ── 1. CSV for
                Google My Maps ───────────────────────────────────────────────── csv_lines =
                &#91;"Name,Latitude,Longitude,Description"&#93; for i, (name, lat, lon) in enumerate(stops): label =
                name.replace(" (2)","").replace(" (end)","") stop_num = "" if i == 0 or i == len(stops)-1 else f"Stop
                &#123;i&#125;"
                csv_lines.append(f'"&#123;label&#125;",&#123;lat&#125;,&#123;lon&#125;,"&#123;stop_num&#125;"') with
                open("/mnt/user-data/outputs/hannah_route2_mymaps.csv", "w") as f: f.write("\n".join(csv_lines)) print("CSV
                done:", len(csv_lines)-1, "stops") # ── 2. SVG overlay
                ──────────────────────────────────────────────────────────── coords = &#91;(name, *to_svg(lat, lon), lat,
                lon) for name, lat, lon in stops&#93; path_d = "M " + " L ".join(f"&#123;x&#125;,&#123;y&#125;" for
                _,x,y,_,_ in coords) # Build circle + label elements circles = &#91;&#93; labels_svg = &#91;&#93; # Label
                offset direction: alternate to reduce overlap in dense areas def label_offset(i, x, y): # For east coast (x
                &gt; 3400), push labels left; west coast push right # For clustered FL stops, vary y offset if x &gt; 3600:
                return (-18, -10, "end") if x &lt; 1200: return (18, -10, "start") return (0, -16, "middle") for i, (name,
                x, y, lat, lon) in enumerate(coords): # Clean display name display = name.replace(" (2)","*").replace("
                (end)","") is_toronto = (i == 0 or "end" in name) r = 22 if is_toronto else 16 fill = "#FF6B35" if
                is_toronto else "#FFD700" stroke_w = 5 if is_toronto else 4 circles.append( f'&lt;circle cx="&#123;x&#125;"
                cy="&#123;y&#125;" r="&#123;r&#125;" fill="&#123;fill&#125;" ' f'stroke="#111"
                stroke-width="&#123;stroke_w&#125;" opacity="0.95"/&gt;' ) # Stop number inside circle num_text = "T" if
                is_toronto else str(i) circles.append( f'&lt;text x="&#123;x&#125;" y="&#123;y+6&#125;" text-anchor="middle"
                ' f'font-family="Arial Black,sans-serif" font-size="18" ' f'font-weight="900"
                fill="#111"&gt;&#123;num_text&#125;&lt;/text&gt;' ) # City name label dx, dy, anchor = label_offset(i, x, y)
                bg_w = len(display) * 13 + 10 lx, ly = x + dx, y + dy labels_svg.append( f'&lt;rect x="&#123;lx -
                bg_w/2&#125;" y="&#123;ly-20&#125;" width="&#123;bg_w&#125;" height="26" ' f'rx="4" fill="#111"
                opacity="0.75"/&gt;' ) labels_svg.append( f'&lt;text x="&#123;lx&#125;" y="&#123;ly-1&#125;"
                text-anchor="&#123;anchor&#125;" ' f'font-family="Arial,sans-serif" font-size="19" font-weight="700" '
                f'fill="#FFD700" letter-spacing="0.5"&gt;&#123;display&#125;&lt;/text&gt;' ) svg = f"""&lt;svg
                xmlns="http://www.w3.org/2000/svg" width="5247" height="2840" viewBox="0 0 5247 2840"
                style="background:transparent"&gt; &lt;title&gt;Hannah Route 2 – Reference Overlay&lt;/title&gt;
                &lt;desc&gt; ROUTE 2 OVERLAY — 47 stops, Aug–Oct 2024 Projection: approx linear, calibrated to Ana map
                (5247x2840) Reference only — positions are approximate, adjust in Illustrator. Yellow = Route 2 | Orange
                dots = Toronto start/end &lt;/desc&gt; &lt;!-- ── Route path ── --&gt; &lt;path d="&#123;path_d&#125;"
                stroke="#111" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"
                opacity="0.9"/&gt; &lt;path d="&#123;path_d&#125;" stroke="#FFD700" stroke-width="7" fill="none"
                stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/&gt; &lt;!-- ── Labels ── --&gt;
                &#123;''.join(labels_svg)&#125; &lt;!-- ── Circles ── --&gt; &#123;''.join(circles)&#125; &lt;!-- ── Legend
                ── --&gt; &lt;rect x="60" y="60" width="520" height="140" rx="10" fill="#111" opacity="0.85"/&gt; &lt;text
                x="90" y="100" font-family="Arial Black" font-size="26" font-weight="900" fill="#FFD700"&gt;ROUTE 2 —
                REFERENCE OVERLAY&lt;/text&gt; &lt;text x="90" y="130" font-family="Arial" font-size="20" fill="#fff"&gt; 47
                stops • Aug–Oct 2024 • Toronto → USA → Toronto&lt;/text&gt; &lt;text x="90" y="158" font-family="Arial"
                font-size="18" fill="#aaa"&gt; Positions approx. Adjust in Illustrator as needed. * = return
                visit&lt;/text&gt; &lt;/svg&gt;""" with open("/mnt/user-data/outputs/hannah_route2_overlay.svg", "w") as f:
                f.write(svg) print("SVG done") # Print city list for reference print("\n=== STOP COORDINATES FOR REFERENCE
                ===") for i, (name, x, y, lat, lon) in enumerate(coords): print(f"&#123;i:2d&#125;. &#123;name:&lt;28&#125;
                SVG: (&#123;x:6.0f&#125;, &#123;y:6.0f&#125;) geo: &#123;lat:.2f&#125;N &#123;lon:.2f&#125;W") EOF python3
                /home/claude/make_route2.py
            </Action>
            <Action>Presented files</Action>
            <Paragraph>Готово! Два файла:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SVG оверлей
                </Word> - точно под размер твоей карты (5247×2840, тот же viewBox). Жёлтая линия с чёрным контуром - это уже
                цвет Route 2 из нашего мокапа. Пронумерованные точки 1-47, Торонто отмечен оранжевым. Открой в Illustrator
                как отдельный слой поверх основной карты.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CSV для Google My Maps
                </Word> - все 49 точек с координатами, импортируй через My Maps → Create → Import.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Важное замечание по проекции:
                </Word> Ана сказала что у карты искажённая проекция - это правда. Позиции я рассчитала через линейную
                аппроксимацию, опираясь на Торонто как якорную точку. В Illustrator тебе нужно будет подвигать точки руками,
                сверяясь с формой штатов. Особенно это касается Флориды (сильно вытянута) и калифорнийского кластера (там
                много точек очень близко).
            </Paragraph>
            <Paragraph>
                Порядок: сначала ставь якорные точки, которые ты уже знаешь по Route 1 (Chickasha, Joshua Tree, White Sands)
                - они совпадут, и сразу будет видно масштаб поправки для остальных.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-13T09:09:41.256626Z"
        >
            <Origin>019ce675-6870-75e1-94ba-02129c89957d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ана: Клод, это очень круто то, что ты сделала. но почему то я не вижу вот этой точки на твоих картах (обвела
                - недалеко от Торонто, вероятно, предпоследняя точка)
            </Paragraph>
            <Attachment>Uploaded “1773392957253_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-13T09:10:11.653376Z"
        >
            <Origin>019ce675-6870-766d-8d79-0dde7528adf8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, эта петля на карте - это не отдельная точка, а визуальный эффект от двух сегментов маршрута вместе:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Начало:
                    </Word> Торонто → Perrysburg, OH (стоп 1) - путь идёт вниз через Детройт
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Конец:
                    </Word> Batesville, IN (стоп 47) → Торонто - путь возвращается вверх
                </Line>
            </Paragraph>
            <Paragraph>
                Вместе они образуют эту петлю. Обе точки есть в SVG - просто они близко к Торонто и могут сливаться в
                превью.
            </Paragraph>
            <Paragraph>
                В Illustrator, когда откроешь файл на полном размере 5247×2840, петля будет чётко видна между точками <Word>
                    <Bold />
                    1 (Perrysburg)
                </Word> и <Word>
                    <Bold />
                    47 (Batesville)
                </Word>. Обе точки находятся примерно в одном районе на карте - вот откуда форма петли.
            </Paragraph>
            <Paragraph>
                Если хочешь - могу перегенерировать SVG с увеличенными точками и более заметными подписями именно для этого
                угла карты (северо-восток, зона Торонто)?
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);

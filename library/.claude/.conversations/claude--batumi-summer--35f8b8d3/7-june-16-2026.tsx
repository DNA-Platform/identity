import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T07:27:47.945770Z"
        >
            <Origin>019ecf54-47dc-7f44-b149-ca6d3b8fa741</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, внеси в табличку инфо от Forest School все программы на русском с 22 июня начинатся смена с 11 до 18
                часов. Ответили в Инстаграм
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:28:34.775244Z"
        >
            <Origin>019ecf54-47dc-7b6b-af0d-7234da7d0d11</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вношу — и сразу замечу важное: раз <Word>
                    <Bold />
                    все программы на русском
                </Word>, как вариант для английского Forest School отпадает. Обновляю строку.
            </Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 &lt;&lt; 'EOF' from openpyxl import load_workbook
                xp="/mnt/user-data/outputs/english-schools-outreach.xlsx" wb=load_workbook(xp); ws=wb&#91;"Рассылка"&#93;
                for r in range(2, ws.max_row+1): v=ws.cell(row=r,column=1).value if v and "Forest" in str(v): fr=r; break
                ws.cell(row=fr,column=3).value="✅ Instagram (ответили)\n✅ Через YOLO: WhatsApp/Telegram +995 550 50 30 30"
                ws.cell(row=fr,column=5).value="Есть ответ" ws.cell(row=fr,column=7).value=( "ОТВЕТИЛИ (Instagram). Все
                программы — на РУССКОМ. Смена с 22 июня, время 11:00–18:00. " "Для английского НЕ подходит (язык русский).
                Как полнодневный лагерь — возможно, но не как языковой." ) wb.save(xp) print("Forest School row", fr, "-&gt;
                Есть ответ (русский, с 22 июня, 11-18)") EOF
            </Action>
            <Action>Presented files</Action>
            <Paragraph>Готово. Строка Forest School обновлена:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Статус:
                    </Word> «Есть ответ», ✅ Instagram.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Комментарий:
                    </Word> все программы <Word>
                        <Bold />
                        на русском
                    </Word>; смена <Word>
                        <Bold />
                        с 22 июня, 11:00–18:00
                    </Word>; для английского <Word>
                        <Bold />
                        не подходит
                    </Word> (язык русский), но как полнодневный лагерь — вариант возможен.
                </Line>
            </Paragraph>
            <Paragraph>
                Это, по сути, закрывает Forest School как языковую опцию: красивый дневной лагерь с трансфером и питанием,
                удобное время (11–18, почти весь рабочий день), но <Word>
                    <Bold />
                    английского там нет
                </Word> — значит, к твоей главной цели он не относится. Зато он остаётся кандидатом по другой линии — как
                <Word>
                    <Bold />
                    простой дневной лагерь «занять детей на день»
                </Word> (шаг 3 в плане), если вы пойдёте по пути «день закрываем лагерем + английский отдельно».
            </Paragraph>
            <Paragraph>
                Один момент: в компаньон-документе (next-steps) карточка Forest School пока стоит как «Awaiting reply» и
                описывает английскую смену — а это теперь неверно (всё на русском). Хочешь, обновлю там карточку: переведу в
                «Replied», уберу про английскую смену и переформулирую как «полнодневный лагерь без английского — кандидат
                только на роль day-care»? Скажи — поправлю.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:34:36.627397Z"
        >
            <Origin>019ecf5a-830e-7c00-b2f0-2a25c4fe4791</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, помоги мне подсчитать, сколько я заплачу за курс занятий (давй отталкиваться от того, какая
                длителность одной единицы занятия у GASB) по преферабл программ GASB + British Centre как мы с тобой
                обсуждали. Ты знаешь стоимость, сложи, пожалуйста
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:35:36.398494Z"
        >
            <Origin>019ecf5a-830e-776d-8e32-0b3e929dea44</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Давай посчитаю. За «единицу» беру, как ты просишь, <Word>
                    <Bold />
                    одну смену GASB = 2 недели
                </Word>. Сначала зафиксирую цены (из их же ответов), потом сложу.
            </Paragraph>
            <Heading>Цены за единицу (на одного ребёнка)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        GASB:
                    </Word> 1000 GEL за смену (2 недели). Скидки за двоих детей у них нет.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        British Centre:
                    </Word> 250 GEL/месяц (акция — утро/день, до конца июля) или 350 GEL/месяц обычная цена. Учебники
                    включены.
                </Line>
            </Paragraph>
            <Paragraph>
                ⚠️ Важный нюанс: GASB считается <Word>
                    <Bold />
                    за 2-недельную смену
                </Word>, а British Centre — <Word>
                    <Bold />
                    за месяц
                </Word>. Один месяц British Centre ≈ две смены GASB. Поэтому в пересчёте на одну 2-недельную «единицу»
                British Centre — это примерно полмесяца.
            </Paragraph>
            <Heading>Стоимость за ОДНУ единицу (2 недели), на двоих детей</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>Оба ребёнка</Word>
                </Line>
                <Line>
                    <Word>GASB (1 смена)</Word>
                    <Word>2 × 1000 = 2000 GEL</Word>
                </Line>
                <Line>
                    <Word>British Centre (≈ полмесяца, по акции)</Word>
                    <Word>≈ 250 GEL</Word>
                </Line>
                <Line>
                    <Word>Итого за 2 недели</Word>
                    <Word>≈ 2250 GEL (~$830)</Word>
                </Line>
            </Paragraph>
            <Paragraph>(Если British Centre по обычной цене 350 — выйдет ≈ 2350 GEL.)</Paragraph>
            <Heading>Реалистичные итоги (раз British Centre платится помесячно)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант «1 смена GASB + 1 месяц British Centre»
                </Word> (на двоих):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    GASB: 2000 + British Centre (акция): 500 = <Word>
                        <Bold />
                        ≈ 2500 GEL
                    </Word> (~$920)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант «2 смены GASB подряд (≈ месяц) + 1 месяц British Centre»
                </Word> (на двоих):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    GASB: 4000 + British Centre (акция): 500 = <Word>
                        <Bold />
                        ≈ 4500 GEL
                    </Word> (~$1660)
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        (один оплаченный месяц British Centre покрывает обе смены GASB — выгодно)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                То есть: <Word>
                    <Bold />
                    за 2 недели погружения с английским «на двоих» — около 2250–2500 GEL
                </Word>, а если брать целый месяц (две смены подряд) — около <Word>
                    <Bold />
                    4500 GEL
                </Word>.
            </Paragraph>
            <Paragraph>
                Скажи, сколько смен GASB ты планируешь (одну или две) — и я зафиксирую точную итоговую цифру под твой
                вариант. Если хочешь, оформлю расчёт отдельным аккуратным блоком в документ для Дага.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:40:52.181770Z"
        >
            <Origin>019ecf60-3da6-71d2-a7ce-32694c7dd320</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Перепроверь свои расчеты, обратившись к информации, которую нам дали школы.</Paragraph>
            <Paragraph>
                Dear British Centre team, I am writing to introduce my family and to ask for your guidance. We are
                relocating to Batumi for the summer, and my priority is for my two children - aged 9 and 11 - to make
                serious, sustained progress in their English. I have read about the British Centre with great interest: as
                the exclusive representative of the Callan Method Organization in Georgia and the largest English-language
                school in the country, you have exactly the standing and quality of teaching I am hoping to find for them.
                It would be a real privilege for my children to study with you. Unfortunately, I could not find detailed
                information online about your summer programmes, so I am reaching out directly. I am open to any format the
                school runs over the summer - a summer camp, an intensive course, or regular lesson-based classes - whatever
                would best suit children of their age and this goal. To help me plan, I would be very grateful if you could
                tell me: What programmes do you offer for children this summer, and which would you recommend for ages 9 and
                11? What are the available dates, the daily or weekly schedule, and the duration of each course? How large
                are the groups, and would a 9- and an 11-year-old be placed together or separately? Do you assess each
                child's level beforehand, and how do you handle different levels? Who teaches the children - are the
                teachers Callan-certified and/or native English speakers? What are the fees, and what is the enrolment
                process? Thank you very much for your time. I look forward to hearing what you would recommend for them.
                With kind regards, Ana P.S. I'm sending this same message through a few of your other contacts as well, just
                to make sure it reaches you - so apologies in advance for the small duplication. Сб 20:40 Hi, we are happy
                to offer you a Super Minds course for children aged 6-12. It represents the Cambridge University’s latest
                method of English for kids. The complete course consists of 7 stages. The duration of each stage is
                approximately 5-6 months. Monthly tuition fee is 350 GEL, which includes the textbooks and audio-video
                resources. If you choose morning or afternoon hours, you will study for 250 GEL instead of 350 GEL until the
                end of July; Two 50-minute lessons are held in groups 3 times per week. We work from Monday to Saturday from
                9 am until 9 pm. You can choose your desired schedule yourself. You can choose either
                Monday-Wednesday-Friday or Tuesday-Thursday-Saturday for your classes. The maximum number of children in a
                group is 10. We have qualified and certified Georgian teachers who are experienced in teaching young
                learners using the Super Minds programme. It is possible to enroll for the courses every day. If you wish to
                register, you can visit us at the Batumi branch, which is located at the corner of 31 Chavchavadze Street
                and 56 Luka Asatiani Street. alternatively, you can reach us on the phone: 591 00 82 88. We would also like
                to add that our placement test is free of charge. Furthermore, you can attend 3 trial lessons for free.
            </Paragraph>
            <Attachment>Uploaded “1781595622863_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-16T07:41:20.044642Z"
        >
            <Origin>019ecf60-3da6-728e-b558-f740875a9bbc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:41:26.490655Z"
        >
            <Origin>019ecf60-c3da-7bf7-86eb-7a8a29987c94</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>меня интересует целый месяц - 4 недели</Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:41:40.471211Z"
        >
            <Origin>019ecf60-c3da-703d-b5d1-5c9430733a64</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла — считаю на <Word>
                    <Bold />
                    полный месяц (4 недели)
                </Word>, на двоих детей, опираясь строго на ответы школ.
            </Paragraph>
            <Heading>Что говорят сами школы</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    GASB
                </Word> (по слайду Session 1): SAIL Elementary II (9–11 лет, ваши оба) — одна смена = <Word>
                    <Bold />
                    2 недели
                </Word> (29.06–10.07), время 09:30–13:30. Цена из их ответа — <Word>
                    <Bold />
                    1000 GEL за смену с ребёнка
                </Word>, скидки за двоих нет. → Значит <Word>
                    <Bold />
                    4 недели = 2 смены подряд
                </Word> (Session 1 + Session 2: 29.06–10.07 и 13–24.07).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    British Centre
                </Word> (их письмо): <Word>
                    <Bold />
                    350 GEL/месяц
                </Word> с ребёнка, или <Word>
                    <Bold />
                    250 GEL/месяц
                </Word> по акции (утро/день, до конца июля), учебники включены. Это помесячная оплата — то есть <Word>
                    <Bold />
                    один оплаченный месяц как раз покрывает обе смены GASB
                </Word>.
            </Paragraph>
            <Heading>Расчёт на 4 недели, на двоих детей</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    GASB — 2 смены:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    1000 × 2 ребёнка × 2 смены = <Word>
                        <Bold />
                        4000 GEL
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    British Centre — 1 месяц:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    по акции: 250 × 2 = <Word>
                        <Bold />
                        500 GEL
                    </Word>
                </Line>
                <Line>обычная цена: 350 × 2 = 700 GEL</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого за месяц (4 недели), на двоих:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>По акции (250)</Word>
                    <Word>Обычная (350)</Word>
                </Line>
                <Line>
                    <Word>GASB (2 смены)</Word>
                    <Word>4000</Word>
                    <Word>4000</Word>
                </Line>
                <Line>
                    <Word>British Centre (1 мес)</Word>
                    <Word>500</Word>
                    <Word>700</Word>
                </Line>
                <Line>
                    <Word>ИТОГО</Word>
                    <Word>4500 GEL</Word>
                    <Word>4700 GEL</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                То есть <Word>
                    <Bold />
                    за полный месяц погружения с английским на двоих детей — около 4500 GEL
                </Word> (по акции, ~$1660), или ~4700 GEL по обычной цене.
            </Paragraph>
            <Heading>Важные уточнения</Heading>
            <Paragraph>
                <List />
                <Line>
                    Если будешь записывать в British Centre <Word>
                        <Bold />
                        на утро/день до конца июля
                    </Word> — попадаешь в акцию 250, и весь июль покрыт по льготной цене (а обе смены GASB как раз в июле).
                </Line>
                <Line>
                    Это <Word>
                        <Bold />
                        только обучение
                    </Word>. Не входят: обеды, дорога/такси между GASB и British Centre, и (если возьмёте) футбол в GASB
                    Смену 2 — это +300 GEL с ребёнка отдельно.
                </Line>
            </Paragraph>
            <Paragraph>
                Хочешь, оформлю этот расчёт аккуратным блоком в документ для Дага (например, в next-steps, рядом с «Current
                leading plan»)?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:43:32.654722Z"
        >
            <Origin>019ecf62-b1e3-72da-844f-802286fd5648</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Хочешь, оформлю этот расчёт аккуратным блоком в документ для Дага - давай просто отдельно оформим текстом. Я
                отправлю ему в сообщения. Укажи время начала занятий и время окончания. ТО есть примерный план дня. Сделай
                это эдитабл фртефакт. я хочу кое-то там потом поменять
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:44:18.423554Z"
        >
            <Origin>019ecf62-b1e3-70cc-9c73-4a6519cf429c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Сделаю это редактируемым markdown-документом — его удобно поправить и переслать Дагу в сообщения.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/summer-plan-for-doug.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово — отдельный редактируемый документ, можно поправить и переслать Дагу.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что внутри:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        План дня
                    </Word> (с временем): GASB 09:30–13:30 → забрать/дойти 13:30–14:00 → обед 14:00–15:00 → British Centre
                    15:00–16:40 (время помечено как «наш выбор, можно менять») → дальше свободно. С пометкой, что British
                    Centre — <Word>
                        <Bold />
                        3 дня в неделю
                    </Word>, а в остальные 2 дня день заканчивается в 13:30.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Месяц (4 недели):
                    </Word> 2 смены GASB подряд (29.06–10.07 и 13–24.07) + 1 месяц British Centre рядом.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Стоимость на месяц, на двоих:
                    </Word> GASB 2 смены = 4000 + British Centre (акция 250) = 500 → <Word>
                        <Bold />
                        ≈ 4500 GEL (~$1660)
                    </Word>. Указала и обычную ставку (≈4700).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Что не входит:
                    </Word> обеды, такси между школами, опциональный футбол (+300/ребёнок).
                </Line>
            </Paragraph>
            <Paragraph>Внизу — пометка, что цены взяты из ответов самих школ.</Paragraph>
            <Paragraph>
                Что можно легко поменять под себя: время British Centre днём, число смен GASB, ставку (250/350), и
                убрать/добавить строки в «не входит». Если хочешь, могу сделать ещё более короткую «месседж-версию» в пару
                абзацев — совсем без таблиц, чтобы вставить прямо в чат.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:44:27.406331Z"
        >
            <Origin>019ecf63-8822-7d82-9715-99e04c97ff11</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                а теперь найди мне, пожауйста (в источниках на трех язках - английском, шоузинском и русском) отзывы о
                преподавании английского в GASB и British Centre я хочу понять укровень
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:46:24.400699Z"
        >
            <Origin>019ecf63-8822-71c0-81ca-9f0269732d10</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла — поищу отзывы об уровне преподавания английского в обеих школах на трёх языках. Сразу честно: по
                таким локальным школам отзывов бывает мало, поэтому скажу прямо, что нашлось, а что нет. Начинаю.
            </Paragraph>
            <Action>
                Searched the web for “Georgian-American School Batumi GASB reviews English teaching quality parents”
            </Action>
            <Paragraph>
                Важная развязка: в Батуми есть <Word>
                    <Bold />
                    две разные «грузино-американские» школы
                </Word> — наш <Word>
                    <Bold />
                    GASB (Georgian-American School of Batumi, ул. Багратиони)
                </Word> и совсем другая школа <Word>
                    <Bold />
                    «Progress» (Batumi American School Progress, ул. Абусеридзе)
                </Word>. Негативные отзывы («ужасная школа») в выдаче относятся к <Word>
                    <Bold />
                    Progress
                </Word>, а не к нашему GASB — их нельзя смешивать. Уточняю отзывы именно по GASB и по British Centre на
                русском и грузинском.
            </Paragraph>
            <Action>
                Searched the web for “отзывы Грузино-американская школа Батуми GASB Багратиони английский родители”
            </Action>
            <Paragraph>
                По GASB реальных отзывов мало (на 2ГИС всего один; на Madloba — позитивно, но это во многом промо-описание +
                один грузинский отзыв «прекрасные люди с прекрасными проектами»). Теперь British Centre на трёх языках.
            </Paragraph>
            <Action>Searched the web for “British Centre Batumi reviews отзывы English school Callan Чавчавадзе”</Action>
            <Paragraph>
                По British Centre Батуми на yell.ge прямо написано: «отзыв об этой компании ещё не написан» — то есть
                публичных отзывов по батумскому филиалу фактически нет. Проверю ещё бренд British Centre в целом и
                грузиноязычные отзывы по GASB.
            </Paragraph>
            <Action>
                Searched the web for “"British Centre" Georgia Callan method google reviews rating ბრიტანული ცენტრი
                შეფასება”
            </Action>
            <Paragraph>
                Поискала на трёх языках. Главный честный вывод сразу: <Word>
                    <Bold />
                    внятной базы отзывов именно про качество/уровень преподавания английского ни по одной из школ практически нет
                </Word> — и есть одна критически важная путаница, которую надо развести.
            </Paragraph>
            <Heading>⚠️ Сначала — что нельзя смешивать</Heading>
            <Paragraph>В Батуми две похожие по названию «грузино-американские» школы:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        наш GASB
                    </Word> — Georgian-American School of Batumi, ул. Багратиони 117 (та, что с летним лагерем SAIL);
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        «Progress»
                    </Word> — Batumi American School Progress, ул. Абусеридзе.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Резко негативные отзывы
                </Word>, которые всплывают в выдаче («ужасная школа», учителя плохо говорят по-английски, с ошибками в
                каждой второй фразе, в тестах темы, которые не проходили) — это про <Word>
                    <Bold />
                    Progress
                </Word>, а не про наш GASB. Их легко спутать, но это разные школы.
            </Paragraph>
            <Heading>GASB (наш) — отзывов почти нет</Heading>
            <Paragraph>
                <List />
                <Line>
                    На <Word>
                        <Bold />
                        2ГИС
                    </Word> у школы всего <Word>
                        <Bold />
                        один
                    </Word> отзыв — статистически это ни о чём.
                </Line>
                <Line>
                    На <Word>
                        <Bold />
                        Madloba
                    </Word> описание положительное, но это, по сути, рекламный текст самой площадки (высокие европейские
                    стандарты, продуманный план обучения, квалифицированные педагоги), плюс один короткий грузинский
                    комментарий в духе «прекрасные люди с прекрасными проектами». Это не отзыв о результатах по английскому.
                </Line>
                <Line>
                    Сам GASB позиционируется как школа <Word>
                        <Bold />
                        с обучением преимущественно на грузинском
                    </Word>, где углублённый английский и часть предметов на английском — в старших классах.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вывод по GASB:
                </Word> «уровень» по отзывам оценить нельзя — их нет. Единственный реальный сигнал качества для лета —
                <Word>
                    <Bold />
                    структурный
                </Word>: в летнем SAIL заявлены <Word>
                    <Bold />
                    преподаватели-носители из США и погружение
                </Word>. Это сильная заявка, но <Word>
                    <Bold />
                    отзывами она не подтверждена
                </Word> — школа и сам лагерь новые и нишевые.
            </Paragraph>
            <Heading>British Centre — сильный бренд, но с двумя оговорками</Heading>
            <Paragraph>
                <List />
                <Line>
                    Бренд действительно крупный и старый: основан в 2003 году, первым внедрил метод Callan в Грузии,
                    крупнейшая школа английского в Грузии и на Южном Кавказе, сотрудничает с Callan Method Organization и
                    Callan School London. Facebook-страница — 184 тысячи отметок «нравится», крупнейшая школа английского в
                    Грузии, работает с 2003 года. То есть репутация и масштаб — есть.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Оговорка 1 — это про бренд (в основном Тбилиси), а не про батумский филиал.
                    </Word> По самому филиалу в Батуми публичных отзывов нет: на yell.ge прямо стоит, что отзыв об этой
                    компании ещё не написан.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Оговорка 2 — и это важно:
                    </Word> слава бренда построена на <Word>
                        <Bold />
                        методе Callan
                    </Word> (быстрый, «дрилловый» английский, в основном для взрослых). А твоим детям они предложили <Word>
                        <Bold />
                        другой продукт — Super Minds (Cambridge), который ведут сертифицированные грузинские преподаватели, НЕ носители.
                    </Word> То есть престиж «Callan / крупнейшая школа» — это <Word>
                        <Bold />
                        не про детский курс
                    </Word>, который получат Катя и Дима. Независимых отзывов именно о детских группах Super Minds я не
                    нашла.
                </Line>
            </Paragraph>
            <Heading>Для контекста (не про эти школы)</Heading>
            <Paragraph>
                Есть общее наблюдение от русскоязычного блогера про <Word>
                    <Emphasis />
                    русские
                </Word> школы Батуми: английский там преподаётся 2–3 раза в неделю на достаточно высоком уровне, и молодёжь
                в Грузии свободно общается на английском. Это просто фон про город, не про GASB/British Centre.
            </Paragraph>
            <Heading>Что это значит для тебя</Heading>
            <Paragraph>
                По отзывам <Word>
                    <Bold />
                    уровень не проверяется ни там, ни там
                </Word> — данных просто нет. Структурно расклад такой: у <Word>
                    <Bold />
                    GASB
                </Word> потолок выше (носители + погружение), но локально не подтверждён; у <Word>
                    <Bold />
                    British Centre
                </Word> — солидная системная школа с большим именем, но детский курс ведут <Word>
                    <Bold />
                    не носители
                </Word>, и громкая репутация относится к взрослому Callan, а не к Super Minds.
            </Paragraph>
            <Paragraph>
                Поэтому <Word>
                    <Bold />
                    уровень надёжнее проверить самой, а не по отзывам:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> дают <Word>
                        <Bold />
                        бесплатный тест уровня + 3 пробных урока
                    </Word> — это прямой способ оценить преподавателя и метод вживую, ничем не рискуя.
                </Line>
                <Line>
                    По <Word>
                        <Bold />
                        GASB
                    </Word> — стоит спросить, можно ли прийти на пробный день / понаблюдать, и попросить контакты родителей
                    детей, которые уже были в SAIL.
                </Line>
            </Paragraph>
            <Paragraph>
                Хочешь — я составлю короткое сообщение в British Centre с просьбой записать детей на бесплатный тест и
                пробные уроки, и/или вопрос в GASB про пробный день и отзывы родителей? Так ты получишь реальную картину
                уровня, а не догадки.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:49:31.040416Z"
        >
            <Origin>019ecf68-298d-7c9f-8fd9-fb2da0c29b50</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    "British Centre — 1 month (250 GEL × 2 kids, promo rate*)" - Клод, если мы пойдем в GASB, то мы не
                    сможем попасть на промо акцию. Верно? перепроверь.
                </Line>
                <Line>Я хочу, чтобы ты также приписал для Дага важное:</Line>
            </Paragraph>
            <Paragraph>смена начнется только 29.06</Paragraph>
            <Paragraph>но мы уже сейчас можем записаться на пробное занятие в Бритиш скул.</Paragraph>
            <Paragraph>вот такой мой план, напиши.</Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:50:38.891145Z"
        >
            <Origin>019ecf68-298d-711a-b48d-2c480e0adb04</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Хорошие два пункта. Сначала перепроверила промо — и тут приятный сюрприз.</Paragraph>
            <Heading>1) Промо при GASB — НЕ теряется. Перепроверила по их письму.</Heading>
            <Paragraph>
                Их формулировка: «если выберете утренние или дневные часы, до конца июля платите 250 вместо 350» — то есть
                скидка действует на <Word>
                    <Bold />
                    утренние ИЛИ дневные
                </Word> слоты (а полная цена 350 — это, по сути, вечерние).
            </Paragraph>
            <Paragraph>
                Логика плана: GASB занимает <Word>
                    <Bold />
                    утро
                </Word> (до 13:30) → British Centre вы берёте <Word>
                    <Bold />
                    днём, после обеда
                </Word>. А <Word>
                    <Bold />
                    дневной слот как раз попадает под промо.
                </Word> Значит:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Идём в GASB → British Centre днём → <Word>
                        <Bold />
                        250 GEL сохраняется.
                    </Word>
                </Line>
                <Line>
                    Промо потерялось бы только если бы British Centre пришлось ставить на <Word>
                        <Bold />
                        вечер
                    </Word> — но при GASB-утром этого не нужно.
                </Line>
                <Line>
                    И по времени всё совпадает: промо действует <Word>
                        <Bold />
                        до конца июля
                    </Word>, а обе смены GASB — как раз в июле.
                </Line>
            </Paragraph>
            <Paragraph>
                Так что цифра в расчёте (250) <Word>
                    <Bold />
                    верна и при GASB
                </Word> — нужно только взять дневной (не вечерний) слот в British Centre. Это я уточнила прямо в документе.
            </Paragraph>
            <Paragraph>Теперь вношу твои пункты для Дага.</Paragraph>
            <Action>Edited /mnt/user-data/outputs/summer-plan-for-doug.md</Action>
            <Action>Edited /mnt/user-data/outputs/summer-plan-for-doug.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово — обновила документ для Дага.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1) Промо (поправила в сноске):
                </Word> теперь там чётко сказано, что промо 250 GEL действует на <Word>
                    <Bold />
                    утренние/дневные
                </Word> занятия до конца июля, наш план ставит British Centre <Word>
                    <Bold />
                    днём
                </Word> (после GASB) — значит слот попадает под промо, и <Word>
                    <Bold />
                    GASB акцию не отменяет
                </Word>; обе смены GASB в июле, так что промо покрывает весь период.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2) Добавила раздел «Timing &amp; first step»:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Смена GASB начинается только 29 июня
                    </Word> (Session 1) — до этого там ничего нет.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Но British Centre можно начать уже сейчас
                    </Word> — записаться на <Word>
                        <Bold />
                        бесплатный тест уровня + 3 пробных урока
                    </Word>, не дожидаясь GASB. Это и уровень детей покажет, и английский запустит ещё до старта лагеря.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть твой план теперь читается так: пока ждём GASB (до 29 июня) — не сидим без дела, а уже идём на
                пробное в British Centre; а с 29 июня подключается утреннее погружение в GASB. Цена за месяц на двоих
                остаётся ≈ 4500 GEL по промо.
            </Paragraph>
            <Paragraph>
                Хочешь, теперь подготовлю короткое сообщение в British Centre — записать обоих детей на бесплатный тест
                уровня и пробные уроки, с просьбой о <Word>
                    <Bold />
                    дневном
                </Word> слоте (чтобы и под промо попасть, и под будущее расписание с GASB)?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:54:58.686807Z"
        >
            <Origin>019ecf6d-298e-752d-b1e6-c83e67e3f4cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                14:00 – 15:00 - давай сделаем это в полчаса. и еще припиши, что можно поробовать найти кого-то, типа няни,
                кто смог бы их перевозить из места в место. надо обдумать. или мне четко искать квартиру между эвумя этими
                локациями. чтобы дети обедали дома и я сама не тратила много времени на вождение детей. и, Клод, оформи
                немного более худлжественно - с цвеными блоками
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T07:56:44.701928Z"
        >
            <Origin>019ecf6d-298e-7d47-bd2d-ef56d5f580ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла все три правки: обед — 30 минут, добавить два варианта на подумать (няня/сопровождающий, который
                возит детей, <Word>
                    <Bold />
                    или
                </Word> квартира между двумя локациями, чтобы обедали дома и меньше беготни), и оформить художественнее —
                цветными блоками. Делаю красивую HTML-версию.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/summer-plan-for-doug.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово — художественная версия с цветными блоками.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что изменилось и добавилось:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        План дня — цветная лента-таймлайн
                    </Word> (каждый кусок дня — свой цветной блок): GASB (синий) → переход (серый) → <Word>
                        <Bold />
                        обед 14:00–14:30, 30 минут
                    </Word> (тёплый/янтарный) → British Centre 14:30–16:10 (зелёный) → дальше свободно. Время British Centre
                    сдвинулось из-за получасового обеда.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Timing &amp; first step
                    </Word> (синий callout): GASB стартует только <Word>
                        <Bold />
                        29 июня
                    </Word>, но British Centre можно начать <Word>
                        <Bold />
                        уже сейчас
                    </Word> — бесплатный тест + 3 пробных урока.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cost
                    </Word> — оформлен аккуратной карточкой с итогом ≈ 4500 GEL, и в сноске — уточнение про промо (днём слот
                    сохраняет 250).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Two ways to make the day easier · to think about
                    </Word> — два цветных варианта на подумать:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            Option A (бирюзовый) — помощник:
                        </Word> няня/сопровождающий, который забирает из GASB, кормит обедом, отводит в British Centre и
                        домой. Сохраняет твой рабочий день. На подумать: доверие, цена, найти человека.
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            Option B (сиреневый) — локация:
                        </Word> искать квартиру <Word>
                            <Bold />
                            между GASB (Багратиони 117) и British Centre (Чавчавадзе/Лука Асатиани)
                        </Word> — чтобы дети обедали дома и все переходы были короткими, меньше беготни. На подумать: сужает
                        поиск квартиры, но упрощает каждый день.
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Печатается в PDF чисто, на телефоне блоки складываются в одну колонку.</Paragraph>
            <Paragraph>
                Текст и время по-прежнему легко поправить (просто в HTML). Если захочешь, добавлю третий вариант на подумать
                — например, заменить послеобеденный British Centre на <Word>
                    <Bold />
                    репетитора-носителя на дом
                </Word>, чтобы день вообще не дробить; или подготовлю сообщение в British Centre на запись пробного с
                дневным слотом.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:19:49.144435Z"
        >
            <Origin>019ed028-b408-71fc-a835-b619fa130579</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, учитывая, что наш план будет приведен в исполнениЮ, сделай для меня две вещи:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>составь план действий для меня на следующие 2-3 дня (куда кого записывать)</Line>
                <Line>обозначь для меня район города, где мне лучше искать квартиру, чтобы быть близко к обеим школам</Line>
                <Line>я все таки вижу, что нам нужно много моря в день. Лучше я поищу квартиру ближе к морю.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:22:37.482015Z"
        >
            <Origin>019ed028-b409-7258-997a-e3ee0499a937</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличный момент — план переходит в действие. Давай я сначала точно привяжу обе школы к карте (чтобы район
                советовать не на глаз, а по фактам), потом соберу всё вместе.
            </Paragraph>
            <Action>Searched places for “”</Action>
            <Paragraph>Привязала обе школы к карте (координаты подтверждены):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> — Bagrationi St, точка ~41.6347, 41.6288 (южнее центра, ближе к морю).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> — 58 Luka Asatiani St, ~41.6449, 41.6375 (центральнее, чуть дальше от моря). Кстати, у British
                    Centre на Google <Word>
                        <Bold />
                        рейтинг 4.7 (19 отзывов)
                    </Word> — это первый реальный отзывной сигнал, что нам попался.
                </Line>
            </Paragraph>
            <Paragraph>
                Между школами ~1,3 км. Теперь привяжу к морю, чтобы найти зону «и школы рядом, и пляж близко».
            </Paragraph>
            <Action>Searched places for “”</Action>
            <Paragraph>
                Готово — обе школы и море на одной карте. Так видно расклад: British Centre — центральная (и всего ~10 минут
                от бульвара), GASB — южнее, море рядом с центральной набережной.
            </Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>Карта выше всё показывает наглядно. Вот три вещи, которые ты просила.</Paragraph>
            <Heading>1) План действий на ближайшие 2–3 дня</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    День 1 — запустить обе записи (письменно, без звонков):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> → написать (Messenger или batumi@bc.ge) и записать <Word>
                        <Bold />
                        обоих детей на бесплатный тест уровня + 3 пробных урока
                    </Word>. Сразу попросить <Word>
                        <Bold />
                        дневной слот
                    </Word> (чтобы и под промо 250 попасть, и под будущее расписание с GASB). Они работают Пн–Сб 9:00–21:00.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> → написать (info@gasb.edu.ge / Facebook) и подтвердить запись обоих в <Word>
                        <Bold />
                        SAIL Elementary II, Смена 1 (с 29 июня)
                    </Word>; спросить, какие смены ещё открыты и как оплатить.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    День 2 — проверить уровень и начать квартиру:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Сводить детей в <Word>
                        <Bold />
                        British Centre на тест/первый пробный
                    </Word> — это сразу покажет реальный уровень и педагога.
                </Line>
                <Line>Начать поиск квартиры онлайн в нужной зоне (см. п. 2), собрать шорт-лист 5–8 вариантов.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    День 3 — зафиксировать:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    По итогам теста выбрать расписание British Centre (<Word>
                        <Bold />
                        Пн/Ср/Пт
                    </Word> или <Word>
                        <Bold />
                        Вт/Чт/Сб
                    </Word>, днём).
                </Line>
                <Line>
                    Подтвердить и оплатить <Word>
                        <Bold />
                        GASB Смену 1
                    </Word>.
                </Line>
                <Line>Продолжить шорт-лист квартир, договориться о просмотрах в зоне.</Line>
            </Paragraph>
            <Heading>2) Район для квартиры — где обе школы близко</Heading>
            <Paragraph>
                Обе школы — <Word>
                    <Bold />
                    в центре
                </Word>, между ними всего <Word>
                    <Bold />
                    ~1,3 км
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> — центральная, ~10 минут пешком от бульвара.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> — чуть южнее, тоже центр.
                </Line>
            </Paragraph>
            <Paragraph>
                Зона, которая близка к обеим, — это <Word>
                    <Bold />
                    центральная часть вдоль ул. Чавчавадзе
                </Word> и кварталы между ней и бульваром. В фильтрах MyHome/ss.ge (поле «убани») это: <Word>
                    <Bold />
                    Старый Батуми, Багратиони, Руставели, Агмашенебели, Джавахишвили.
                </Word> Якорные улицы — Чавчавадзе, Зураба Горгиладзе, Пушкина, Мемеда Абашидзе.
            </Paragraph>
            <Heading>3) Раз нужно много моря — смещай поиск к бульвару</Heading>
            <Paragraph>
                Тогда привязывайся <Word>
                    <Bold />
                    к центральной прибрежной полосе у бульвара
                </Word> (на карте — синяя точка «море»). Это лучший компромисс под твой приоритет:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Море
                    </Word> — несколько минут пешком.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> — ~10 минут пешком оттуда же.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> — короткое такси (~1,3 км, 5–7 минут) или ~15–18 минут пешком.
                </Line>
            </Paragraph>
            <Paragraph>
                Честно: точки, которая была бы <Word>
                    <Emphasis />
                    ровно посередине между двумя школами
                </Word> <Word>
                    <Bold />
                    и
                </Word> <Word>
                    <Emphasis />
                    на самом пляже
                </Word>, не существует. Но <Word>
                    <Bold />
                    центральная полоса у бульвара
                </Word> даёт тебе и ежедневное море, и British Centre в пешей доступности, а GASB — недалеко на такси. Это
                сильнее, чем «строго между школами, но без моря».
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Практический вывод:
                </Word> ищи <Word>
                    <Bold />
                    2 спальни в центральной прибрежной зоне у бульвара
                </Word> (Старый Батуми / Багратиони / Руставели рядом с набережной). Так закрываются сразу все три
                приоритета: море каждый день, английский (British Centre пешком), и GASB в коротком доступе.
            </Paragraph>
            <Paragraph>
                Хочешь — впишу выбранную зону и этот план действий в документ для Дага (отдельным цветным блоком «Next steps
                + where to live»), и/или подготовлю два готовых сообщения: в British Centre (на тест с дневным слотом) и в
                GASB (запись в Смену 1)?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:35:23.157581Z"
        >
            <Origin>019ed0a4-d219-7276-938c-9785e2ebd65d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>помоги мне с этими обоими сообщениями, пожалуйста.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    British Centre → написать (Messenger или &#91;batumi@bc.ge&#93;(mailto:batumi@bc.ge)) и записать обоих
                    детей на бесплатный тест уровня + 3 пробных урока. Сразу попросить дневной слот (чтобы и под промо 250
                    попасть, и под будущее расписание с GASB). Они работают Пн–Сб 9:00–21:00.
                </Line>
                <Line>
                    GASB → написать (&#91;info@gasb.edu.ge&#93;(mailto:info@gasb.edu.ge) / Facebook) и подтвердить запись
                    обоих в SAIL Elementary II, Смена 1 (с 29 июня); спросить, какие смены ещё открыты и как оплатить.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:35:44.087387Z"
        >
            <Origin>019ed0a4-d21a-7d5e-be19-76f438b58c3c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Конечно. Оба сообщения на английском, готовы к отправке.</Paragraph>
            <Heading>1) British Centre (Messenger или batumi@bc.ge)</Heading>
            <Paragraph>Subject: Placement test + trial lessons for two children (ages 9 &amp; 11)</Paragraph>
            <Paragraph>Hello, and thank you again for the detailed information!</Paragraph>
            <Paragraph>
                We'd like to go ahead and book the <Word>
                    <Bold />
                    free placement test and the 3 trial lessons
                </Word> for both of our children — ages <Word>
                    <Bold />
                    9 and 11
                </Word>.
            </Paragraph>
            <Paragraph>
                If possible, we'd prefer <Word>
                    <Bold />
                    afternoon classes
                </Word> (early afternoon works best for us), as the children will have morning activities over the summer.
                We understand the afternoon slots also fall under your 250 GEL promo until the end of July, which suits us
                well.
            </Paragraph>
            <Paragraph>Could you let us know:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>When the children can come in for the placement test?</Line>
                <Line>Which afternoon days/times are available (Mon/Wed/Fri or Tue/Thu/Sat)?</Line>
            </Paragraph>
            <Paragraph>Looking forward to getting started. Thank you!</Paragraph>
            <Paragraph>Best regards, Ana</Paragraph>
            <Heading>2) GASB (info@gasb.edu.ge / Facebook)</Heading>
            <Paragraph>Subject: Enrolment — SAIL Elementary II, two children (ages 9 &amp; 11)</Paragraph>
            <Paragraph>Dear GASB team,</Paragraph>
            <Paragraph>
                Thank you for the information about your SAIL summer programme. We'd like to <Word>
                    <Bold />
                    enrol both of our children
                </Word> — ages <Word>
                    <Bold />
                    9 and 11
                </Word> — in <Word>
                    <Bold />
                    SAIL Elementary II (9–11)
                </Word>, and we're interested in starting with <Word>
                    <Bold />
                    Session 1 (29 June – 10 July)
                </Word>.
            </Paragraph>
            <Paragraph>Could you please let us know:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Are there still places available in Session 1 for both children?</Line>
                <Line>Which other sessions still have availability (in case we'd like to add a second one)?</Line>
                <Line>
                    What is the enrolment and <Word>
                        <Bold />
                        payment
                    </Word> process, and how would you like us to pay?
                </Line>
            </Paragraph>
            <Paragraph>Thank you very much — we're looking forward to it!</Paragraph>
            <Paragraph>Best regards, Ana</Paragraph>
            <Paragraph>
                Оба коротко и по делу. В письме British Centre я заложила <Word>
                    <Bold />
                    дневной слот
                </Word> и прямо упомянула, что он попадает под промо 250 (чтобы зафиксировать цену). В письме GASB — запись
                обоих в Elementary II, старт со Смены 1, и три вопроса: есть ли места, какие смены ещё открыты и как
                оплатить.
            </Paragraph>
            <Paragraph>
                Когда придут ответы — обнови меня, отмечу в трекере и поправим план/расписание под реальные слоты. Хочешь,
                заранее подготовлю короткий follow-up на случай, если British Centre предложит только вечер (чтобы вежливо
                попросить дневное время)?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:38:38.552287Z"
        >
            <Origin>019ed0a7-cd3f-772c-a996-06c80df78520</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, а ты можешь покаать мне, что они написали насчет этой скидки. с чего ты взял, что мы поадаем? We
                understand the afternoon slots also fall under your 250 GEL promo until the end of July, which suits us
                well.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:39:03.997753Z"
        >
            <Origin>019ed0a7-cd3f-7736-aaaf-598c204e57a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Конечно — вот их точные слова из того ответа, что ты прислала:</Paragraph>
            <Paragraph>
                <Quoted />
                «If you choose morning or afternoon hours, you will study for 250 GEL instead of 350 GEL until the end of
                July»
            </Paragraph>
            <Paragraph>
                То есть <Word>
                    <Bold />
                    они сами написали «morning or afternoon hours»
                </Word> — скидка 250 вместо 350 действует, если выбрать <Word>
                    <Bold />
                    утренние ИЛИ дневные
                </Word> часы (полная цена 350, видимо, за вечерние, самые ходовые).
            </Paragraph>
            <Paragraph>
                Откуда мой вывод: наш план ставит British Centre <Word>
                    <Bold />
                    днём
                </Word> (после GASB) → дневной слот прямо назван в их условии → значит, <Word>
                    <Bold />
                    250 нам подходит.
                </Word> Это не моя догадка, а их формулировка.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Но честно — одна оговорка.
                </Word> Фраза «until the end of July» — это их ограничение по времени, и из неё не на 100% ясно, что именно
                оно значит: «успеть записаться/оплатить до конца июля» или «платить 250 за занятия в период до конца июля, а
                потом 350». Для нашего июльского месяца это в любом случае работает, но саму формулировку «until end of
                July» стоит подтвердить у них напрямую.
            </Paragraph>
            <Paragraph>Поэтому два варианта, как поступить с этой строкой в письме:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Оставить как есть
                    </Word> — мы корректно ссылаемся на их же условие (риска нет, они это написали).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Сделать мягче — не утверждать, а переспросить.
                    </Word> Например, заменить ту строку на:
                </Line>
            </Paragraph>
            <Paragraph>
                <Quoted />
                «If possible, we'd prefer afternoon classes. Could you also confirm that the afternoon slots qualify for the
                250 GEL rate, and until when it applies?»
            </Paragraph>
            <Paragraph>
                Так мы не предполагаем, а просим подтвердить — и заодно проясняем смысл «until the end of July».
            </Paragraph>
            <Paragraph>
                Как тебе удобнее — оставить ссылку на их условие или переформулировать в вопрос? Поправлю под твой выбор.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:59:13.120380Z"
        >
            <Origin>019ed0ba-a384-7ca7-86fa-3ad4f1e9400e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот наше сообщение в Бритиш центр: Hello, and thank you again for the detailed information!We'd like to go
                ahead and book the free placement test and the 3 trial lessons for both of our children — ages 9 and 11.If
                possible, we'd prefer afternoon classes (early afternoon works best for us), as the children will have
                morning activities over the summer. We understand the afternoon slots also fall under your 250 GEL promo
                until the end of July, which suits us well. Could you let us know: When the children can come in for the
                placement test?Looking forward to getting started. Thank you!
            </Paragraph>
            <Paragraph>ЧТо я хочу изменить:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    я сама не знаю, когда я смогу их привести. я решаю вопросы с квартирой, как ы знаешь. так что я бы
                    предпочла спросить, можно ли прийти к рним на определение уровня и пробное занятие на следующей неделе
                </Line>
                <Line>давай уточним, что афтернун - это после 14 часов</Line>
                <Line>
                    спросим, как строится процесс далее? мы придем на пробный тест, нужно ли записываться заранее? что будет
                    потом?
                </Line>
            </Paragraph>
            <Paragraph>напиши это все вежливо, и в конце надо дать мои контакты:</Paragraph>
            <Paragraph>тел 555418466 телеграм @AnastasiaKrasavina</Paragraph>
        </Message>
        <Message
            at="2026-06-16T13:59:32.351293Z"
        >
            <Origin>019ed0ba-a384-7a50-97c4-87f97d1d4bf2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Конечно. Вот обновлённое письмо со всеми правками:</Paragraph>
            <Paragraph>Hello, and thank you again for the detailed information!</Paragraph>
            <Paragraph>
                We'd like to go ahead with the <Word>
                    <Bold />
                    free placement test and the 3 trial lessons
                </Word> for both of our children — ages <Word>
                    <Bold />
                    9 and 11
                </Word>.
            </Paragraph>
            <Paragraph>A couple of things on timing and arrangements:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    We're still settling in (sorting out our apartment at the moment), so rather than a fixed day, could we
                    come in for the placement test and a first trial lesson <Word>
                        <Bold />
                        sometime next week
                    </Word>? Whatever days suit you best — we can be flexible.
                </Line>
                <Line>
                    For the lessons themselves, we'd prefer <Word>
                        <Bold />
                        afternoon classes, after 14:00
                    </Word>, as the children will have morning activities over the summer.
                </Line>
                <Line>
                    Could you also confirm whether these <Word>
                        <Bold />
                        afternoon slots fall under the 250 GEL rate
                    </Word>, and until when it applies?
                </Line>
            </Paragraph>
            <Paragraph>
                And could you walk us through <Word>
                    <Bold />
                    how the process works from here
                </Word> — do we need to book the placement test in advance, or simply come by? And what are the next steps
                after the test and trial lessons?
            </Paragraph>
            <Paragraph>Thank you so much — we're looking forward to getting started!</Paragraph>
            <Paragraph>Best regards, Ana</Paragraph>
            <Paragraph>📞 +995 555 41 84 66 Telegram: @AnastasiaKrasavina</Paragraph>
            <Paragraph>Что изменила:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Время прихода
                    </Word> — не фиксированный день, а просьба прийти на тест и пробное <Word>
                        <Bold />
                        на следующей неделе
                    </Word>, с пометкой, что вы пока обустраиваетесь с квартирой и гибки по дням.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Afternoon = после 14:00
                    </Word> — указала прямо.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Промо
                    </Word> — переформулировала в вежливый вопрос (подтвердить, попадают ли дневные слоты под 250 и до
                    какого срока), а не утверждение.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Как строится процесс
                    </Word> — спросила, нужно ли записываться на тест заранее или можно просто прийти, и что будет дальше
                    после теста и пробных.
                </Line>
                <Line>В конце — твои контакты (телефон и Telegram).</Line>
            </Paragraph>
            <Paragraph>
                Номер я записала в международном формате как <Word>
                    <Bold />
                    +995 555 41 84 66
                </Word> — если это российский/другой номер, скажи, поправлю код страны.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:00:12.664762Z"
        >
            <Origin>019ed0bb-8bae-7309-b711-0c9156321aa3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, сделай это в текст боксе, чтобы я скопировала форматирование?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:00:36.136095Z"
        >
            <Origin>019ed0bb-8bae-7466-80c5-b48fb8869c22</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used message compose v1</Action>
            <Paragraph>
                Готово — сообщение в текстовом боксе выше, с кнопкой копирования. Я убрала markdown-разметку (звёздочки),
                чтобы при вставке в Messenger или почту ничего лишнего не появилось — только чистый текст с переносами
                строк, аккуратными буллетами и твоими контактами в конце.
            </Paragraph>
            <Paragraph>
                Можешь копировать целиком и отправлять. Когда British Centre ответит про дни и подтвердит ставку — дай
                знать, отмечу в трекере и подстроим расписание.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:09:09.498086Z"
        >
            <Origin>019ed0c3-bd63-78df-9204-0f0423c93d5a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Спасибо,Клд итак, поехали выбирать иделаьное место для жизни. еще раз проанализируй мой запрос: ты знаешь
                струкруту дня - 09:30–13:30 GASB — SAIL Elementary II English immersion · US teachers 13:30–14:00 Pickup +
                walk the two are close together 14:00–14:30 Lunch / break 30 min 14:30–16:10 British Centre two 50-min
                lessons · time is our choice (9:00–21:00) — edit as needed
            </Paragraph>
            <Paragraph>я хочу быть ближе к морю</Paragraph>
            <Paragraph>выбираем район, чтобы я могла ввести это в поисковик</Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:10:40.630277Z"
        >
            <Origin>019ed0c3-bd63-7dee-85ee-ca78b68f4adc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поехали. Картинку дня держим в голове: <Word>
                    <Bold />
                    утро в GASB (юг центра) → днём British Centre (центр)
                </Word>, а ты хочешь <Word>
                    <Bold />
                    море каждый день
                </Word>. Я наложила это на карту с координатами — и вот вывод.
            </Paragraph>
            <Heading>Где «сладкая точка»</Heading>
            <Paragraph>
                Середина между двумя школами приходится примерно на <Word>
                    <Bold />
                    центральную набережную / начало Нового бульвара
                </Word>. И это удачно: именно там и <Word>
                    <Bold />
                    море под боком
                </Word>. То есть твои три приоритета сходятся в <Word>
                    <Bold />
                    центральной прибрежной полосе у бульвара
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Море
                    </Word> — пешком пара минут.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        British Centre
                    </Word> — ~10–15 минут пешком.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> — короткий хоп на такси (~1,3 км) или ~15–18 минут пешком.
                </Line>
            </Paragraph>
            <Heading>Что вводить в поиск (MyHome.ge / ss.ge)</Heading>
            <Paragraph>В фильтре «убани/район» отметь центральные прибрежные:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ძველი ბათუმი — Old Batumi (Старый Батуми)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ბაგრატიონის — Bagrationi (Багратиони)
                    </Word> ← здесь сам GASB
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        აღმაშენებლის — Aghmashenebeli (Агмашенебели)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        რუსთაველის — Rustaveli (Руставели)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Главный приём:
                </Word> включи <Word>
                    <Bold />
                    режим карты
                </Word> и смотри квартиры в полосе <Word>
                    <Bold />
                    ~400–600 м от бульвара
                </Word> между двумя точками-школами (они у тебя на карте выше). Так ты физически выбираешь «у моря + между
                школами», а не доверяешь подписи района.
            </Paragraph>
            <Heading>Чего избегать</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ხიმშიაშვილის / Khimshiashvili (далёкий Новый бульвар, юг)
                    </Word> — мы это уже проверяли: дальше от центра и мутнее вода.
                </Line>
                <Line>Бони-Городок, Кахабери, Тамар, Махинджаури, Зелёный мыс — без машины не подходят.</Line>
            </Paragraph>
            <Heading>Одна честная оговорка про воду</Heading>
            <Paragraph>
                Самая чистая вода — в Гонио/Квариати (12–15 км южнее), но это <Word>
                    <Bold />
                    несовместимо со школами
                </Word>. В центральной прибрежной полосе вода летом нормальная, хотя и не «кристальная» (близко река и
                порт). Раз приоритет — <Word>
                    <Emphasis />
                    «море каждый день + школы рядом»
                </Word>, центральный бульвар — правильный размен; за идеально чистой водой ездить отдельными вылазками в
                Гонио по выходным.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого, что искать одной строкой:
                </Word> «2 спальни, центр Батуми, у бульвара» — отмечая районы <Word>
                    <Bold />
                    Old Batumi / Bagrationi / Aghmashenebeli / Rustaveli
                </Word> и проверяя каждую квартиру на карте по близости к морю и к двум школам.
            </Paragraph>
            <Paragraph>
                Хочешь — соберу под это короткий чек-лист критериев для квартиры (спальни, бюджет, этаж, «≤600 м до моря»,
                «≤15 мин до British Centre»), чтобы ты прогоняла каждую находку по нему? Или помогу разобрать конкретные
                объявления, когда начнёшь присылать ссылки.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:21:17.936432Z"
        >
            <Origin>019ed0ce-db50-71fa-a215-da1447ee14f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, а ты можешь тоже поискать квартиры для меня?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:23:34.677388Z"
        >
            <Origin>019ed0ce-db51-7ca8-a4f6-e0d17e281df0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Попробую. Сразу честно: лучшая живая база — на MyHome.ge и ss.ge, и они фильтруются на самих сайтах (карта +
                район). Я не могу крутить их фильтр-карту напрямую, но поищу актуальные объявления в нужной зоне и проверю,
                что страницы реально открываются. Поехали.
            </Paragraph>
            <Action>Searched the web for “аренда квартиры Батуми центр у моря 2 спальни на месяц myhome.ge ss.ge”</Action>
            <Paragraph>
                Нашла реальные объявления. Прежде чем советовать, привяжу ключевые адреса к карте (чтобы честно сказать, где
                это относительно школ и моря, а не на глаз).
            </Paragraph>
            <Action>Searched places for “”</Action>
            <Paragraph>
                Привязала ключевые адреса к карте — теперь могу советовать по фактам. Расклад получился показательный.
            </Paragraph>
            <Heading>Где именно середина (по координатам)</Heading>
            <Paragraph>
                Точка ровно между двумя школами приходится на <Word>
                    <Bold />
                    центральную полосу Чавчавадзе ↔ бульвар, район улицы Горгиладзе/Пушкина
                </Word>. И от неё:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        GASB
                    </Word> ≤1,5 км, <Word>
                        <Bold />
                        British Centre
                    </Word> ≤1,5 км — обе близко;
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        море
                    </Word> — 0,6–0,9 км.
                </Line>
            </Paragraph>
            <Paragraph>
                Так что искать стоит в <Word>
                    <Bold />
                    центральной прибрежной полосе между Старым городом и ТЦ Batumi Mall
                </Word>.
            </Paragraph>
            <Heading>Реальные кандидаты из объявлений (с проверенной геолокацией)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Зураба Горгиладзе 96, рядом с Batumi Mall
                </Word> — 2 спальни, 70 м², новый дом, 16-й этаж, балкон с видом на море, вся мебель/техника, кондиционер,
                центр. отопление. → До GASB ~1,2 км, до British Centre ~1,5 км, <Word>
                    <Bold />
                    море — рядом
                </Word> (Новый бульвар, ~300–500 м). Хороший баланс «обе школы + море». ⚠️ Цену в объявлении надо уточнить;
                вода у Нового бульвара чуть мутнее центральной.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Мемеда Абашидзе, у парка 26 мая
                </Word> — меблированная, центр, <Word>
                    <Bold />
                    $350
                </Word>. → До British Centre ~0,8 км, до моря ~0,6 км, до GASB ~1,5 км. Дёшево и очень центрально, море и
                British Centre почти пешком; GASB — короткое такси. ⚠️ Число спален уточнить (может быть 1–2).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Зубалашвили 37Б, Старый город, 7 мин до моря
                </Word> — 3 спальни, новый ЖК, 2 санузла. → До British Centre ~0,7 км, море близко, до GASB ~2 км. Отличная
                локация, но спален больше, чем нужно, и дальше всего от GASB.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Горгиладзе 98, «первая линия», у Alliance Palace
                </Word> — 3 спальни, 160 м², <Word>
                    <Bold />
                    $1900
                </Word>, свободна с 28 июня. Большая, у моря, рядом с зоной Batumi Mall. Дорого и великовата.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Под твой запрос лучше всего — №1 (Горгиладзе 96)
                </Word> и <Word>
                    <Bold />
                    №2 (Мемеда Абашидзе)
                </Word>: 2 спальни/центр, море близко, обе школы в досягаемости.
            </Paragraph>
            <Heading>Живые списки, чтобы прокручивать самой</Heading>
            <Paragraph>
                <List />
                <Line>
                    ss.ge, аренда район <Word>
                        <Bold />
                        Руставели
                    </Word>: <Word>
                        <Verbatim />
                        home.ss.ge/ru/недвижимость/l/Квартира/Аренда?cityIdList=96&amp;subdistrictIds=63
                    </Word>
                </Line>
                <Line>
                    ss.ge, <Word>
                        <Bold />
                        вся аренда Батуми
                    </Word>: <Word>
                        <Verbatim />
                        home.ss.ge/ru/недвижимость/l/Квартира/Аренда?cityIdList=96
                    </Word>
                </Line>
                <Line>
                    MyHome, <Word>
                        <Bold />
                        аренда Батуми
                    </Word>: <Word>
                        <Verbatim />
                        myhome.ge/ru/nedvizhimost/arenda/kvartira/batumi/
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                (на обоих включи <Word>
                    <Bold />
                    режим карты
                </Word> и смотри полосу у бульвара между школами.)
            </Paragraph>
            <Heading>Честно про ограничение</Heading>
            <Paragraph>
                Это агрегированная выдача — чистых отдельных ссылок на каждое объявление с контактами я отсюда не вытащу, и
                цену/спальни/доступность по №1–4 надо <Word>
                    <Bold />
                    подтверждать
                </Word>. Зато геолокацию я проверила, и <Word>
                    <Bold />
                    любое объявление, которое ты откроешь, я разберу детально
                </Word> (как раньше): проверю адрес по карте, расстояние до моря и до обеих школ, честно про воду и этаж.
            </Paragraph>
            <Paragraph>
                Хочешь — пришли ссылки на 2–3 понравившихся, и я по каждому дам разбор; или сделаю тебе компактный чек-лист
                критериев (2 спальни, ≤800 м до моря, ≤1,5 км до каждой школы, бюджет, этаж), чтобы быстро отсеивать.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:30:02.635166Z"
        >
            <Origin>019ed0d6-dbfb-7576-bc81-6ba7a3752866</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, MyHome дает мне ужасно далекие опции,если я укажу те районы, что ты сказал. посомтри, школы вот тут.
                что это за раойны Батуми?
            </Paragraph>
            <Attachment>Uploaded “1781620200362_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-16T14:31:40.594505Z"
        >
            <Origin>019ed0d6-dbfb-7e97-9ed4-e7032e885ecf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Спасибо за карту — теперь вижу, и да, я тебя направил слишком на север. Districts, что я называл (Руставели,
                Старый Батуми, Агмашенебели), — это <Word>
                    <Bold />
                    северная прибрежная часть у Европейской площади
                </Word>, поэтому MyHome и выдавал «далеко»: далеко именно от школ. Школы у тебя сидят южнее. Исправляю.
            </Paragraph>
            <Heading>Где реально твои школы (по карте)</Heading>
            <Paragraph>
                Оба красных пина — в <Word>
                    <Bold />
                    центрально-южной полосе
                </Word>, а это район <Word>
                    <Bold />
                    ჩაობი (Chaobi / Чаоби)
                </Word>, у улицы <Word>
                    <Bold />
                    Bagrationi
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        верхний пин (British Centre)
                    </Word> — на северном краю Чаоби, у Pushkin / Gorgiladze, на стыке с центром;
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        нижний пин (GASB)
                    </Word> — глубже в <Word>
                        <Bold />
                        Chaobi
                    </Word>, ближе к Javakhishvili / Bagrationi.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть нужный тебе фильтр в MyHome — это <Word>
                    <Bold />
                    ჩაობი (Chaobi)
                </Word> в первую очередь, плюс <Word>
                    <Bold />
                    ბაგრატიონი (Bagrationi)
                </Word> и центральное ядро. А вот Руставели/Старый Батуми — убери, это и есть «далёкие» варианты.
            </Paragraph>
            <Heading>Что за районы вокруг (чтобы ориентироваться)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ჩაობი (Chaobi)
                    </Word> — твоя зона, центр-юг, где школы.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ნინოშვილი (Ninoshvili)
                    </Word> — к западу, у Дельфинария, ближе к морю (Новый бульвар).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ხიმშიაშვილი (Khimshiashvili)
                    </Word> — прибрежная полоса Нового бульвара (Grand Mall / Batumi Mall).
                </Line>
                <Line>
                    Старый Батуми / Руставели / Европейская площадь — <Word>
                        <Bold />
                        север
                    </Word> (туда не надо — далеко от школ).
                </Line>
                <Line>
                    Boni, Boni-Gorodoki, Kveda Sameba, Stepanovka, Suvorov, Urekhi, Peria — <Word>
                        <Bold />
                        восток и юг вглубь
                    </Word>, без машины не подходят.
                </Line>
            </Paragraph>
            <Heading>Честно про «школы + море»</Heading>
            <Paragraph>
                Тут есть встроенный конфликт, и карта его показывает: <Word>
                    <Bold />
                    школы стоят чуть в глубине (Chaobi), а море — к западу
                </Word> (Новый бульвар, у Дельфинария / Grand Mall). Ближайшее к школам море — это именно <Word>
                    <Bold />
                    Новый бульвар
                </Word>.
            </Paragraph>
            <Paragraph>
                Поэтому «и школы рядом, и море» = <Word>
                    <Bold />
                    западный край Chaobi, в сторону Нового бульвара
                </Word> (граница Chaobi ↔ Ninoshvili / Khimshiashvili). Оговорка прежняя: у Нового бульвара вода чуть мутнее
                центральной (рядом река), но это реально <Word>
                    <Bold />
                    ближайший
                </Word> к школам пляж.
            </Paragraph>
            <Heading>Что вводить в MyHome (исправлено)</Heading>
            <Paragraph>
                Районы: <Word>
                    <Bold />
                    ჩაობი (Chaobi)
                </Word> + <Word>
                    <Bold />
                    ბაგრატიონი (Bagrationi)
                </Word>, и для моря добавь <Word>
                    <Bold />
                    ნინოშვილი (Ninoshvili)
                </Word> / <Word>
                    <Bold />
                    ხიმშიაშვილი (Khimshiashvili)
                </Word> (прибрежная полоса). И обязательно <Word>
                    <Bold />
                    режим карты
                </Word> — смотри прямоугольник между двумя пинами и тяни его к бульвару.
            </Paragraph>
            <Paragraph>
                Хочешь — я нарисую тебе карту с этими двумя школами и обведённой зоной поиска (западный край Chaobi у Нового
                бульвара), чтобы прямо визуально совпадало с тем, что ты фильтруешь в MyHome?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:36:33.852138Z"
        >
            <Origin>019ed0dc-d4c7-7468-af2f-4ff45eb34480</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                я не понимаю, почему я вижу одну стоимость, а при клике на квартиу вижу другую. Я поставила ограничение в
                700 долларов, а он показывает дургое!
            </Paragraph>
            <Attachment>Uploaded “1781620557307_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-16T14:36:50.118128Z"
        >
            <Origin>019ed0dc-d4c7-7f75-af6f-9cd0692789d5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Смотрю на скриншот — и тут всё объяснимо, дело не в баге, а в <Word>
                    <Bold />
                    валюте
                </Word>. Разберу.
            </Paragraph>
            <Heading>Почему «700», а показывает «1320»</Heading>
            <Paragraph>
                Ты поставила фильтр <Word>
                    <Bold />
                    в долларах (≤ 700 $)
                </Word>, а карточки квартир показывают цену <Word>
                    <Bold />
                    в лари (₾)
                </Word> — видишь значок <Word>
                    <Bold />
                    ₾
                </Word> рядом с числами (1320 ₾, 1330 ₾). Это <Word>
                    <Bold />
                    не другая цена, а та же самая, просто в другой валюте.
                </Word>
            </Paragraph>
            <Paragraph>
                Посчитаем: <Word>
                    <Bold />
                    1320 ₾ ÷ 2,71 ≈ 487 $.
                </Word> То есть это квартира примерно за <Word>
                    <Bold />
                    $487
                </Word> — она честно попадает в твой лимит ≤ 700 $. Просто список рисует лари, а фильтр ты задала в
                долларах.
            </Paragraph>
            <Heading>Что сделать, чтобы не путаться</Heading>
            <Paragraph>
                Вверху справа есть переключатель валют — кнопки <Word>
                    <Bold />
                    ₾ / $
                </Word>. Нажми <Word>
                    <Bold />
                    $
                </Word>, и тогда и фильтр, и карточки будут в одной валюте (долларах), и расхождение пропадёт.
            </Paragraph>
            <Heading>Кстати, по самим квартирам на скрине</Heading>
            <Paragraph>
                <List />
                <Line>
                    Все четыре: <Word>
                        <Bold />
                        60 м², 2 спальни, этаж 10/12, ~1320–1330 ₾ (≈ $487–491)
                    </Word> — то есть это, похоже, разные квартиры в одном доме. По площади и спальням тебе подходит.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        НО адрес — «Район Старый Батуми 93».
                    </Word> А это как раз <Word>
                        <Bold />
                        северная зона
                    </Word> (Старый Батуми), про которую мы выяснили, что она <Word>
                        <Bold />
                        далеко от твоих школ
                    </Word>. На мини-карте пины стоят у Parnavaz Mepe / 26 May / Gorgasali — это ближе к центру-северу, не к
                    Chaobi.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть цена-то нормальная (это были лари), но <Word>
                    <Bold />
                    локация не твоя
                </Word> — это снова северные варианты.
            </Paragraph>
            <Paragraph>
                Хочешь, я переведу для тебя названия районов Chaobi / Bagrationi / Ninoshvili на грузинском и латинице,
                чтобы ты точно выбрала их в фильтре MyHome (а Старый Батуми убрала)? Тогда выдача сразу станет ближе к
                школам.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:43:24.326467Z"
        >
            <Origin>019ed0e3-18d4-7cc3-8d76-7c70a733af54</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, спасибо! Я вижу, что квартир очень много. я уверена, что мы тчто-то подберем. Скоро вернусь к тебе
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:43:30.698644Z"
        >
            <Origin>019ed0e3-18d4-70f9-9297-55a06e3c3acd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отлично! Да, вариантов масса — обязательно что-нибудь подберёшь. 😊</Paragraph>
            <Paragraph>Когда вернёшься, я на месте:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    разберу любые конкретные объявления (адрес по карте, расстояние до моря и до обеих школ, честно про
                    воду/этаж);
                </Line>
                <Line>помогу с фильтрами и валютой в MyHome;</Line>
                <Line>отмечу в трекере ответы, когда придут из British Centre / GASB.</Line>
            </Paragraph>
            <Paragraph>
                И письмо в British Centre готово к отправке — как ответят про дни, дай знать. Удачи с поиском, Ana!
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:44:42.379446Z"
        >
            <Origin>019ed0e4-48e8-7b68-adab-de7dfdfb462d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                напиши такое сообщение Дагу на англйиском: Я смотрю квартиры и понимаю, что они все имеют такую странную
                нестандартную планирвку, когда одна из комнат не имеет окна Это невероятно странно. но радует то, что
                квартир до 600 долларов в такой планировке и недалеко от школ очень много. сегодня мне нужно продвинутьсяв
                поисках. Школы отвечают быстро, это хорошо!
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:44:47.204412Z"
        >
            <Origin>019ed0e4-48e8-722f-8674-06f5e999609e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот сообщение для Дага:</Paragraph>
            <Paragraph>
                I'm going through apartments, and I'm noticing they almost all have this odd, non-standard layout where one
                of the rooms has no window. It's incredibly strange. But the good news is there are plenty of apartments
                with this layout under $600 and not far from the schools. Today I need to make some progress on the search.
                The schools are replying quickly, which is great!
            </Paragraph>
            <Paragraph>
                Готово — можно отправлять. Если хочешь, сделаю в текстовом боксе с кнопкой копирования, как в прошлый раз.
            </Paragraph>
        </Message>
    </Chapter>
);

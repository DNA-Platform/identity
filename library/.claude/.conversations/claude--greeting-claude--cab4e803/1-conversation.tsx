import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-09T17:36:43.011462Z"
        >
            <Origin>019ead75-5fd8-7e5f-a5d6-7c9cc75d82f1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, это Ана. Я в Батуми с Дагом. Подскажи, каковы дорожные правила Грузии насчет содержания алкоголя в
                кровии или дызании. как там измеряется, я не знаю. В РФ нулевая терпимость к алкголю за рулем, в США - можно
                выпить. Что тут? какие штраыф/последствия?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T17:37:34.132070Z"
        >
            <Origin>019ead75-5fd8-7203-b03c-45afd9a94332</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Грузия допустимый уровень алкоголя за рулем промилле штраф 2026”</Action>
            <Action>Searched the web for “Georgia drink driving limit 0.3 fine penalty lari first offense law”</Action>
            <Action>
                Searched the web for “Грузия штраф вождение в нетрезвом виде первый раз сумма лари лишение прав”
            </Action>
            <Paragraph>
                Аня, привет. Вот что по Грузии — проверено по нескольким источникам, но в одном месте источники расходятся,
                отмечу это отдельно.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Допустимый уровень
                </Word> Разрешено до 0,3 промилле (‰) алкоголя в крови — то есть 0,3 г спирта на литр крови. Это не ноль,
                как в России формально считают, а на практике — примерно как российская норма (в РФ тоже 0,3‰ в крови / 0,16
                мг/л в выдыхе, «нулевой терпимости» по факту нет). В США в большинстве штатов предел гораздо выше — 0,08% =
                0,8‰, поэтому там «можно выпить» заметно больше.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Сколько это примерно
                </Word> Для человека весом до ~70 кг это примерно 40 мл коньяка, или 300 мл пива, или 150 мл вина. Это очень
                грубая оценка — зависит от веса, времени, закуски. На грани лучше вообще не садиться за руль.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как измеряют
                </Word> Сначала алкотестер на дороге (выдыхаемый воздух). При споре или подозрении могут направить на
                медосвидетельствование. Важно: отказ от проверки трактуется как автоматическое признание вины и влечёт самое
                суровое наказание — отказываться нельзя.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Последствия
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Первое нарушение (свыше 0,3‰): лишение прав. Тут источники расходятся — одни пишут до 6 месяцев, другие
                    до 12 месяцев. Точную цифру на сегодня я не подтвердил, считай диапазоном 6–12 месяцев.
                </Line>
                <Line>Повторно в течение года после возврата прав — штраф 700 лари + лишение на год.</Line>
                <Line>Если больше 0,3‰ и при этом совершены дополнительные нарушения — штраф 1000 лари.</Line>
                <Line>Если сел пьяным, уже будучи лишённым прав, или причинил ущерб — штраф 2000 лари.</Line>
            </Paragraph>
            <Paragraph>
                Короткий вывод: Грузия строже США, но по факту примерно как Россия. Один маленький бокал вина за ужином
                формально укладывается в 0,3‰, но без запаса. Если планируете выпивать в Батуми — за руль пусть садится тот,
                кто не пил.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T17:39:10.167960Z"
        >
            <Origin>019ead77-9d86-7c1d-b3d7-2ba11301aaa4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                проверь свои данные по грузинским источникам. бери только грузинский язык, желательно - закон.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T17:40:32.289681Z"
        >
            <Origin>019ead77-9d86-78fa-9789-1622ee751618</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “ალკოჰოლური სიმთვრალე მართვა 0.3 პრომილე ჯარიმა საჯარიმო ქულა კანონი”</Action>
            <Action>
                Fetched
                https://parliament.ge/media/news/satransporto-sashualebis-martvis-darghvevebze-sakanonmdeblo-regulatsiebi-mkatsrdeba
            </Action>
            <Paragraph>
                Аня, проверила по грузинским источникам, включая официальные (парламент Грузии, кодекс об административных
                правонарушениях, ст. 116). Картина уточнилась, и пару вещей в своём первом ответе я поправлю — была неточна.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предел и как измеряют
                </Word> Измеряется содержание этанола в крови, в промилле. Административная ответственность наступает, если
                содержание этанола в крови превышает 0,3 промилле. То есть до 0,3‰ включительно — ответственности нет, выше
                — есть. Проверка алкотестером; отказ от проверки приравнивается к нарушению (см. ниже).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Наказание — первое нарушение (по уровню в крови)
                </Word> Тут «разнобой 6 vs 12 месяцев» из моего первого ответа снимается — это не противоречие источников, а
                градация по уровню алкоголя:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>0,3–0,7‰ — приостановление прав на 6 месяцев.</Line>
                <Line>Более 0,7‰ — приостановление на 1 год.</Line>
                <Line>Отказ от прохождения проверки на опьянение — приостановление на 1 год.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Поправка к первому ответу:
                </Word> я писала «отказ — лишение до 3 лет». Это неверно для простого отказа. Отказ = 1 год. Срок 3 года
                относится к другому — к оставлению места ДТП и к случаям с причинением ущерба (ниже).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Отягчённый случай (пьяный + причинён лёгкий ущерб имуществу/дороге/здоровью человека)
                </Word> Штраф 3000 лари и административный арест от 10 до 15 дней, если у водителя нет прав; для имеющего
                права — штраф 3000 лари, арест 10–15 дней и приостановление прав на 3 года. Оставление места ДТП —
                приостановление прав на 3 года.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ещё поправка:
                </Word> цифры «700 лари за повторное / 1000 лари за доп. нарушения» из моего первого ответа были из
                русскоязычных блогов и не подтверждаются грузинским законом — похоже, устарели. Актуальные штрафы за
                отягчённые случаи выше (3000 лари). И отмечу: в конце 2025 года закон ужесточили — ввели административный
                арест.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого практически для Батуми:
                </Word> до 0,3‰ — формально чисто, но это буквально один маленький бокал и без запаса. За руль лучше тому,
                кто не пил вообще. Сравнение с РФ/США из первого ответа в силе: Грузия по факту как Россия (0,3‰ в крови), и
                заметно строже США (там ~0,8‰).
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T17:42:20.500059Z"
        >
            <Origin>019ead7a-8454-7032-89ec-92873ef7a545</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                по итогам твоего исследования напиши короткое обобщение на английском для Дага, поясняющее закон Грузии на
                этот счет, укажи цифру, сравни с США, укажи последствия
            </Paragraph>
        </Message>
        <Message
            at="2026-06-09T17:42:33.181103Z"
        >
            <Origin>019ead7a-8454-7d5c-ab6d-51ea8776036c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a short summary for Doug:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgia (country) — drink-driving law, in brief
                </Word>
            </Paragraph>
            <Paragraph>
                The legal limit is <Word>
                    <Bold />
                    0.3‰ blood alcohol
                </Word> (grams of ethanol per liter of blood). Administrative liability kicks in only above 0.3‰ — at or
                below that, no offense. This is measured by blood alcohol concentration in <Word>
                    <Emphasis />
                    promille
                </Word> (‰), not the US-style percentage BAC.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Comparison to the US:
                </Word> Most US states use a 0.08% BAC limit, which equals <Word>
                    <Bold />
                    0.8‰
                </Word> — so Georgia's threshold is roughly <Word>
                    <Emphasis />
                    2.5x stricter
                </Word>. Practically, 0.3‰ is about one small drink for a ~70 kg person, with no margin. Georgia's limit is
                essentially the same as Russia's actual blood standard (0.3‰).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Consequences (first offense, by level):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>0.3–0.7‰ → license suspended 6 months</Line>
                <Line>Above 0.7‰ → suspended 1 year</Line>
                <Line>
                    Refusing the breath/blood test → suspended 1 year (refusal is treated as an offense, not a way out)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aggravated
                </Word> (drunk driving that causes even light damage to property, road, or a person): 3,000 GEL fine plus
                10–15 days administrative detention, and a 3-year suspension for licensed drivers. Leaving the scene of an
                accident also triggers a 3-year suspension.
            </Paragraph>
            <Paragraph>
                Sourcing note: limit and tier structure confirmed against Georgian-language sources including the Parliament
                of Georgia and the Administrative Offenses Code (Art. 116); penalties reflect the late-2025 tightening that
                introduced administrative detention. The "first offense" penalties are license suspension, not fines — fines
                and detention attach to the aggravated cases above.
            </Paragraph>
        </Message>
    </Chapter>
);

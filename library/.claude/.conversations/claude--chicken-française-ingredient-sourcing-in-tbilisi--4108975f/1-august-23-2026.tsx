import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 August 2026](2026-08-23)</Date>
        </Dated>
        <Title>[[ 23 August 2026 ]]</Title>
        <Message
            at="2026-08-23T10:48:07.662127Z"
        >
            <Origin>01a02e3d-53e6-745c-a638-0e2dfda63bca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m making chicken franchise in George and these are the ingredients but I need to know which ones on
                agrohub or carrefour I won’t be able to find and will need replacement recommendations:
            </Paragraph>
            <Paragraph>
                • Ingredients: chicken cutlets, flour, egg, parsley, lemon juice, white wine, chicken stock, garlic
            </Paragraph>
        </Message>
        <Message
            at="2026-08-23T10:48:19.663843Z"
        >
            <Origin>01a02e3d-53e6-7979-98dd-a00d6ed5dea0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good news: chicken francese is very buildable in Tbilisi. Item by item:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Easy to find at both Agrohub and Carrefour:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Chicken breast (you'll likely need to butterfly/pound cutlets yourself — pre-cut thin cutlets are hit or
                    miss, but breasts are everywhere)
                </Line>
                <Line>
                    Flour, eggs, garlic, parsley, lemons — all staples, no issue. Parsley here is usually the flat-leaf
                    Italian type, which is exactly what you want.
                </Line>
                <Line>
                    White wine — Georgia is a wine country, huge selection. For francese, grab a dry Rkatsiteli or
                    Tsinandali (both dry whites, cheap, widely stocked). Avoid anything labeled semi-sweet (полусладкое),
                    which is common on shelves here.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one likely gap: chicken stock.
                </Word> Liquid boxed chicken stock/broth (Swanson-style cartons) is rare in Georgian supermarkets. What
                you'll actually find:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bouillon cubes/powder
                    </Word> — Knorr and Maggi chicken cubes are in every Carrefour and Agrohub. Totally fine for a pan
                    sauce; use slightly less than the package says since they're salty.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Carrefour's imported aisle
                    </Word> sometimes has boxed stock, but don't count on it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Best replacement:
                    </Word> homemade — you'll have chicken trimmings anyway, or simmer a cube with a garlic clove and
                    parsley stems for 10 minutes to make it taste less industrial.
                </Line>
            </Paragraph>
            <Paragraph>
                So realistically the only substitution is bouillon cube for boxed stock, and the wine section will be an
                upgrade over what you'd get in the US.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-23T10:48:41.687369Z"
        >
            <Origin>01a02e3d-cc8d-746d-b3da-4db10441b093</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay compress this into a list of ingredients</Paragraph>
        </Message>
        <Message
            at="2026-08-23T10:48:43.891468Z"
        >
            <Origin>01a02e3d-cc8d-75c4-b60c-3c103caf5662</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Chicken Francese — shopping list (Agrohub/Carrefour):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Chicken breasts (pound into cutlets yourself)</Line>
                <Line>Flour</Line>
                <Line>Eggs</Line>
                <Line>Fresh parsley</Line>
                <Line>Lemons</Line>
                <Line>Dry white wine (Rkatsiteli or Tsinandali — not semi-sweet)</Line>
                <Line>Knorr/Maggi chicken bouillon cubes (instead of boxed stock)</Line>
                <Line>Garlic</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-23T11:53:22.266041Z"
        >
            <Origin>01a02e77-d5f9-7c3c-bd97-b71e87c18b2e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, проведи анализ состава напитков внимательно, изучи мнения диетолог, и скажи мне список из 10-12
                позиций - мне нужно найти безалкогольные напитки для детей (9, 11 лет), которые не содержали бы сахара или
                содержали бы его в минимальном количестве. Желательно не газированные, но и их можно. Если можешь, разбей на
                две группы по газированности (без газа и с газом)
            </Paragraph>
        </Message>
        <Message
            at="2026-08-23T11:54:16.721688Z"
        >
            <Origin>01a02e77-d5f9-7c4c-b696-37731fe5a975</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ana! Сейчас проверю, что реально есть в тбилисских магазинах, и что говорят диетологи о напитках для
                детей.
            </Paragraph>
            <Action>Searched the web for “უშაქრო სასმელები ბავშვებისთვის კარფური აგროჰაბი”</Action>
            <Action>Searched the web for “carrefour.ge sugar free drinks kombucha borjomi flavored water”</Action>
            <Action>Searched the web for “напитки без сахара Тбилиси детям Borjomi Aromati Nabeghlavi что купить”</Action>
            <Paragraph>
                Ana, вот что получилось. Сначала коротко о позиции диетологов: Американская академия педиатрии и ВОЗ
                сходятся в том, что основные напитки для детей - это вода и молоко, сок стоит ограничивать (даже 100%-й -
                из-за природного сахара), а напитки с искусственными подсластителями (аспартам, сукралоза) детям регулярно
                давать не рекомендуют - поэтому колу Zero и подобное я в список не включаю. Ниже - варианты без сахара и без
                подсластителей, которые реально найти в Тбилиси.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Без газа:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Столовая вода Bakuriani / Sno (негазированная)
                    </Word> - база, есть везде.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Кокосовая вода (100%, без добавок)
                    </Word> - Carrefour, отдел импорта. Смотрите состав: только coconut water, без "с сахаром".
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Холодный чай домашний
                    </Word> - каркаде, ройбуш или фруктовый чай, заваренный и охлаждённый. Ройбуш без кофеина, детям
                    подходит. Сами чаи есть в обоих магазинах.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Компот без сахара
                    </Word> - сварить из местных фруктов (сейчас сезон слив, персиков, винограда). Самый "детский" вариант.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        100% сок, разбавленный водой 1:2 или 1:3
                    </Word> - сахар природный остаётся, но в разы меньше. Соки прямого отжима есть в Carrefour и Agrohub.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Мацони-напиток / айран без сахара
                    </Word> - местные кисломолочные, состав проверять (бывают подслащённые версии).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    С газом:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Borjomi Aromati / Flavored Water
                    </Word> - линейка ароматизированной воды без сахара и калорий: вишня-гранат, цитрус-имбирь,
                    лайм-кориандр, земляника-травы. Состав - минеральная и родниковая вода плюс натуральные экстракты и
                    ароматизаторы, без консервантов. Это, пожалуй, лучшая местная замена сладкой газировке, и она точно есть
                    в сетях.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Столовая газированная вода Sno / Sairme Springs (столовая версия)
                    </Word> - лёгкая газированная вода без минеральной "солёности".
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Газированная вода + долька лимона/апельсина + мята дома
                    </Word> - "домашний лимонад" без сахара, дети обычно принимают хорошо.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Nabeghlavi
                    </Word> - газированная минералка, мягче Боржоми по вкусу. Важно: и Боржоми, и Набеглави -
                    лечебно-столовые воды с высокой минерализацией, детям их дают понемногу, не как основной напиток на
                    каждый день.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Два пункта с оговоркой (не проверено для детей):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Комбуча местных производителей
                    </Word> - в био-отделах Carrefour бывает. Но: продукт ферментированный, содержит следы алкоголя и
                    кофеин, поэтому многие педиатры детям её не советуют. Если брать - пастеризованную и с сахаром до 4 г на
                    порцию.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Вода с ароматом без подсластителей (импортные flavored waters)
                    </Word> - в Carrefour попадаются, но ассортимент нестабильный, состав нужно читать на месте: часть из
                    них с сукралозой.
                </Line>
            </Paragraph>
            <Paragraph>
                Практический совет по этикеткам здесь: ищите "без сахара" / "შაქრის გარეშе" и проверяйте, чтобы в составе не
                было аспартама, сукралозы, ацесульфама - у местных "лайт"-лимонадов (Zedazeni, Natakhtari) они как раз есть,
                а обычные версии - с большим количеством сахара, так что грузинские лимонады, к сожалению, мимо.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-23T12:07:13.147240Z"
        >
            <Origin>01a02e84-85ba-7ae7-acfd-fc9f2520dd65</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Как американцы называют глютомат натрия? Сделай этот перевод.</Paragraph>
        </Message>
        <Message
            at="2026-08-23T12:07:15.873097Z"
        >
            <Origin>01a02e84-85ba-7b03-803d-551761520357</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Американцы называют глутамат натрия <Word>
                    <Bold />
                    MSG
                </Word> - сокращение от <Word>
                    <Bold />
                    monosodium glutamate
                </Word> (произносится "эм-эс-джи").
            </Paragraph>
            <Paragraph>
                На этикетках в США пишут "monosodium glutamate" или просто "MSG". Также встречается фраза "No MSG added" -
                "без добавления глутамата".
            </Paragraph>
        </Message>
    </Chapter>
);

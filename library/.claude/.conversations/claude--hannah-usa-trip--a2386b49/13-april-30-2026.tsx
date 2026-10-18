import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Title>[[ 30 April 2026 ]]</Title>
        <Message
            at="2026-04-30T06:26:14.442314Z"
        >
            <Origin>019ddd10-f74d-7a95-b379-fb885796fb3c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                давай наченм эдитабл артеАКТ, куда слложим вопросы для Ханны. Это сбудет первый - как показать на карте
                локацию для Venice Beach и поясним, почему я испцтыываю с этим трудности.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:27:12.710796Z"
        >
            <Origin>019ddd10-f74d-755a-a279-354d420665cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/hannah_questions.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово! Первый вопрос про Venice Beach уже там.</Paragraph>
            <Paragraph>
                Структура каждой карточки: заголовок (редактируемый), статус кнопкой (Open → Waiting → Resolved), блок с
                объяснением, сам вопрос, и поле для ответа Ханны. Кнопка внизу добавляет новые вопросы. Всё кликабельно и
                редактируется прямо в браузере.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:29:55.005399Z"
        >
            <Origin>019ddd14-5e38-75c3-b594-df7adfac3543</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я работаю над "Перенести иконку на океан с выноской Santa Cruz CA" - помоги мне с расположением самой
                точки Санта Круз Есть ли она на маршрутах? если да, то на каком? видишь ли ты эту точку на моей карте?
            </Paragraph>
            <Attachment>Uploaded “1777530554708_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-30T06:30:02.666761Z"
        >
            <Origin>019ddd14-5e38-7972-aa02-1bdb0e226979</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Santa Cruz есть только в <Word>
                    <Bold />
                    зелёном маршруте 2024
                </Word> (<Word>
                    <Verbatim />
                    #65bd9c
                </Word>).
            </Paragraph>
            <Paragraph>
                Координаты из файла: <Word>
                    <Bold />
                    36.974°N, -122.031°W
                </Word>
            </Paragraph>
            <Paragraph>
                На твоём скриншоте я вижу зелёную точку рядом с подписью <Word>
                    <Bold />
                    WATSONVILLE
                </Word> — это она. Watsonville и Santa Cruz стоят очень близко (буквально 5 км друг от друга), и судя по
                координатам, зелёная точка между Pescadero и Watsonville — это и есть Santa Cruz.
            </Paragraph>
            <Paragraph>
                Порядок зелёного маршрута в этом районе: <Word>
                    <Bold />
                    Stinson Beach → Pescadero → Santa Cruz → Morro Bay
                </Word>
            </Paragraph>
            <Paragraph>
                Так что точка Santa Cruz — это зелёный кружок, который сейчас почти сливается с Watsonville. Иконку Santa
                Cruz можно вынести на океан влево с выноской к этой точке.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:31:26.623456Z"
        >
            <Origin>019ddd15-c4b9-76f3-a625-e14aae21744d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Stinson Beach → Pescadero → Santa Cruz → Morro Bay - то есть ты уверен, что Santa Cruz - это полноценная
                остановка на зеленом маршруте?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:31:31.111819Z"
        >
            <Origin>019ddd15-c4b9-746a-aa02-ea606252bc32</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да, абсолютно уверена — проверила по Excel файлу Ханны:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Стоп #29:
                </Word> Santa Cruz, CA — <Word>
                    <Bold />
                    36.9742°N, -122.031°W
                </Word> — зелёный маршрут 2024.
            </Paragraph>
            <Paragraph>Это полноценная ночёвка, как и все остальные остановки. Точка должна быть на карте.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:32:12.125766Z"
        >
            <Origin>019ddd16-77fe-7ecf-80cd-25e8784eec98</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>WATSONVILLE - это точка какого маршрута?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:32:15.800925Z"
        >
            <Origin>019ddd16-77fe-7bc4-8085-8d95a241b39a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Watsonville — только <Word>
                    <Bold />
                    оранжевый маршрут 2023
                </Word> (<Word>
                    <Verbatim />
                    #f28a47
                </Word>).
            </Paragraph>
            <Paragraph>
                Стоп #22 в оранжевом маршруте: <Word>
                    <Bold />
                    36.910°N, -121.757°W
                </Word>.
            </Paragraph>
            <Paragraph>
                Так что на твоей карте рядом должны быть две точки — оранжевая (Watsonville) и зелёная (Santa Cruz). Они
                стоят очень близко, поэтому легко перепутать.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:41:42.716512Z"
        >
            <Origin>019ddd1f-2cae-758d-bd2d-124abb8ca4e8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Добавим в наш артефакт вопрос про прибрежиные города в калиформнии там нет месат на океане для названий всех
                городов и наших иконок. кло, сделай эту пометку - я потмо ее дораблтаю с визуальными примерами
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:42:07.471449Z"
        >
            <Origin>019ddd1f-2cae-74f9-b462-d6f4872ce346</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/user-data/outputs/hannah_questions.html</Action>
            <Action>Edited /mnt/user-data/outputs/hannah_questions.html</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Добавила вопрос №2. В блоке объяснения перечислены все прибрежные города и оставила пометку:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    "⚠️ Visual examples to be added here — Ana to insert screenshots showing the problem areas."
                </Word>
            </Paragraph>
            <Paragraph>Когда будешь готова — скинь скриншоты, и я встрою их прямо в карточку.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:44:18.450425Z"
        >
            <Origin>019ddd21-8bd9-7019-8fc3-cf0e38dc1a97</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Работаю над этим: Перенести с выноской подальше от дорог Wikieup AZ Клод, сверься с маршрутами Ханны - какая
                из этих точке (какой цвет, где расположена) является Викиапом?
            </Paragraph>
            <Attachment>Uploaded “1777531421248_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-30T06:44:26.131999Z"
        >
            <Origin>019ddd21-8bd9-7f73-91ff-e59de2cf53b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Wikieup — только <Word>
                    <Bold />
                    зелёный маршрут 2024
                </Word> (<Word>
                    <Verbatim />
                    #65bd9c
                </Word>).
            </Paragraph>
            <Paragraph>
                Координаты из файла: <Word>
                    <Bold />
                    34.700°N, -113.601°W
                </Word>
            </Paragraph>
            <Paragraph>
                На твоём скриншоте это должна быть <Word>
                    <Bold />
                    зелёная точка
                </Word>. Глядя на карту, зелёные точки в этом районе я вижу рядом с Flagstaff и чуть западнее. Wikieup
                находится западнее Flagstaff и севернее Wellton — примерно между Ehrenberg и Williams по широте.
            </Paragraph>
            <Paragraph>
                На скриншоте подпись WIKIEUP стоит рядом с большой иконкой — но там я вижу <Word>
                    <Bold />
                    оранжевую
                </Word> точку рядом с Ehrenberg. Зелёной точки Wikieup на этом скриншоте я не вижу явно — возможно она
                скрыта за иконкой или подписью.
            </Paragraph>
            <Paragraph>
                Можешь проверить в Illustrator слой <Word>
                    <Bold />
                    Pins_2024
                </Word> — там должна быть зелёная точка примерно на широте 34.7°N, западнее Flagstaff?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:45:31.921514Z"
        >
            <Origin>019ddd22-ab59-7f0e-a9b2-257667637cd8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>А вот это не она?</Paragraph>
            <Attachment>Uploaded “1777531526256_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-30T06:45:38.593608Z"
        >
            <Origin>019ddd22-ab59-7ceb-8ef3-284e9df2a556</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, это она! Видишь маленькую <Word>
                    <Bold />
                    зелёную точку
                </Word> со стрелкой — она стоит как раз между Williams и Lake Havasu City, на пересечении зелёной линии. Это
                и есть Wikieup.
            </Paragraph>
            <Paragraph>Иконка сейчас стоит правее и ниже — на пересечении дорог, что как раз и создаёт проблему.</Paragraph>
            <Paragraph>
                Ханна просила перенести иконку с выноской подальше от дорог. Судя по карте, лучшее место — <Word>
                    <Bold />
                    вправо в синюю зону AZ
                </Word>, там есть пустое пространство. Стрелка выноски пойдёт от иконки к зелёной точке (которая останется
                на месте на маршруте).
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:48:20.946496Z"
        >
            <Origin>019ddd25-3fdb-71e1-ad19-8a715d2487cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Joshua Tree CA - какой маршрут? какой цвет?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:48:25.280707Z"
        >
            <Origin>019ddd25-3fdb-7249-8e91-aecfbc572571</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Joshua Tree — <Word>
                    <Bold />
                    зелёный 2024
                </Word> (<Word>
                    <Verbatim />
                    #65bd9c
                </Word>) + <Word>
                    <Bold />
                    голубой 2022
                </Word> (<Word>
                    <Verbatim />
                    #60c6f2
                </Word>).
            </Paragraph>
            <Paragraph>
                Координаты из файла: <Word>
                    <Bold />
                    34.135°N, -116.314°W
                </Word>
            </Paragraph>
            <Paragraph>
                Значит там должны быть <Word>
                    <Bold />
                    два кольца
                </Word> — зелёное и голубое.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:54:34.667537Z"
        >
            <Origin>019ddd2a-f301-70b6-b391-95ad7a2fd106</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, сверься с маршрутами: что за город эта точка, которую я обвела?  оранжевая</Paragraph>
            <Attachment>Uploaded “1777532051410_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-30T06:54:40.064300Z"
        >
            <Origin>019ddd2a-f301-75f2-8add-f6b328716522</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Смотрю на координаты — обведённая оранжевая точка стоит между Indio и Desert Hot Springs, чуть левее.
            </Paragraph>
            <Paragraph>По данным оранжевого маршрута 2023 в этом районе есть только одна остановка:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Indio, CA
                </Word> — стоп #18, <Word>
                    <Bold />
                    33.718°N, -116.216°W
                </Word>
            </Paragraph>
            <Paragraph>
                Это она. Indio и Desert Hot Springs стоят очень близко, и похоже точка сейчас визуально смещена — нужно
                подтянуть её к подписи INDIO.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:55:28.813533Z"
        >
            <Origin>019ddd2b-c70e-7cca-88b9-85641d8efa7a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Если та оранжевая точка - это Индио, то что такое зеленая точка над ней?</Paragraph>
            <Attachment>Uploaded “1777532120801_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-30T06:55:37.605757Z"
        >
            <Origin>019ddd2b-c70e-7ac4-89d5-8e80f222fb1e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Смотрю по данным — в этом районе у зелёного маршрута 2024 есть <Word>
                    <Bold />
                    Joshua Tree
                </Word> (34.135°N, -116.314°W), который географически находится севернее Indio и Desert Hot Springs.
            </Paragraph>
            <Paragraph>
                Но подожди — на скриншоте видно что выбран слой <Word>
                    <Bold />
                    Pins_2024
                </Word> (зелёный). Значит эта зелёная точка над Indio — это скорее всего <Word>
                    <Bold />
                    Joshua Tree
                </Word> из зелёного маршрута, просто она визуально оказалась очень близко к Indio.
            </Paragraph>
            <Paragraph>
                Хотя по координатам Joshua Tree должен быть правее и севернее... Можешь проверить в Illustrator — нажми на
                эту зелёную точку и посмотри, как она называется в слое?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:56:29.461271Z"
        >
            <Origin>019ddd2c-b3d3-77cc-b3b5-21b1a37b2558</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>ладно, давай пока оставим - проверь, какого цвета и где расположен Essex?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T06:56:36.003668Z"
        >
            <Origin>019ddd2c-b3d3-7d21-9102-c366083abf56</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Essex — нет ни в одном из трёх Excel файлов Ханны. Это значит он <Word>
                    <Bold />
                    не является остановкой ни на одном маршруте
                </Word>.
            </Paragraph>
            <Paragraph>
                Скорее всего это просто географическая подпись города на карте — как Barstow, Williams, Holbrook и другие
                города, через которые проходит дорога, но где Ханна не ночевала.
            </Paragraph>
            <Paragraph>
                Иконки у Essex быть не должно, и точки маршрута тоже. Это просто название города на фоне штата.
            </Paragraph>
        </Message>
    </Chapter>
);

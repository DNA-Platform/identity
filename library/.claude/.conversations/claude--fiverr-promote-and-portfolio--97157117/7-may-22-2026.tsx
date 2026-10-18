import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Title>[[ 22 May 2026 ]]</Title>
        <Message
            at="2026-05-22T09:24:52.407478Z"
        >
            <Origin>019e4f00-7971-74a1-8275-b66b2259b0d5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод мне теперь нужно подготовить все те же пункты для новой карты поможешь мне?</Paragraph>
        </Message>
        <Message
            at="2026-05-22T09:25:03.057724Z"
        >
            <Origin>019e4f00-7971-7db7-affa-27c33411dd06</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Конечно, Ана! Давай, мне нужно от тебя:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Картинка карты
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        История проекта
                    </Word> - кто клиент (контекст, не имя), что было нужно и для чего, было ли что-то необычное в запросе
                    или в ходе работы, сколько ревизий
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Отзыв клиента
                    </Word> - если есть
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Что этот проект должен "говорить" посетителю портфолио?
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Ограничения: заголовок до 50 символов, описание до 1 400 знаков, без em dashes (только дефисы).
            </Paragraph>
            <Paragraph>Скидывай!</Paragraph>
        </Message>
        <Message
            at="2026-05-22T09:26:33.393372Z"
        >
            <Origin>019e4f02-0399-7e67-b374-de4791b8a148</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                это очень особенная карта - карта острова Дауфски Карт этого острова немного, и я думаю, что это - одна из
                лучших! карта стала украшением складного путеводителя по острову. деталищированные лендмарки, много
                испторических фактов на оборотной тсороне буклета. идеальный стиль для идеального острова!
            </Paragraph>
            <Attachment>Uploaded “captkeith2_ (1).png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-22T09:26:50.484621Z"
        >
            <Origin>019e4f02-0399-740b-a589-4abeb75964da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, карта потрясающая! Остров Дауфски, Vagabond Cruise, складной путеводитель - вижу около 20
                детализированных лендмарков, от Marsh Horse Preserve до Bloody Point Lighthouse. Очень богатая работа.
            </Paragraph>
            <Paragraph>Мне нужно ещё два момента, чтобы написать текст:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Отзыв клиента
                    </Word> - есть? Сильная цитата очень украсит описание, как в прошлых проектах
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Послание посетителю
                    </Word> - правильно ли я понимаю, что этот проект должен говорить: "Вот что я делаю лучше всего -
                    подробная иллюстрированная карта с характером места, где каждый лендмарк нарисован с фото, и карта
                    становится не просто навигацией, а сувениром"? Или ты хочешь другой акцент?
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-05-22T09:30:49.552023Z"
        >
            <Origin>019e4f05-ec65-72ae-b333-7cae96ba653d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Отзыв клиента - есть? Сильная цитата очень украсит описание, как в прошлых проектах - no Послание посетителю
                - правильно ли я понимаю, что этот проект должен говорить: "Вот что я делаю лучше всего - подробная
                иллюстрированная карта с характером места, где каждый лендмарк нарисован с фото, и карта становится не
                просто навигацией, а сувениром"? Или ты хочешь другой акцент? - I want to piont out the detail of every
                landmark the quality of the map amazing color palettr
            </Paragraph>
        </Message>
        <Message
            at="2026-05-22T09:31:12.144337Z"
        >
            <Origin>019e4f05-ec65-7df0-af3e-78df2556810c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    ЗАГОЛОВОК (47 знаков):
                </Word> <Word>
                    <Verbatim />
                    Illustrated Island Map for a Travel Brochure
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ОПИСАНИЕ (1 389 знаков):
                </Word>
            </Paragraph>
            <Paragraph>
                Daufuskie Island is a small, quiet place off the coast of South Carolina - no bridges, no cars, just golf
                carts and history around every corner. There aren't many maps of this island. I wanted to make one worth
                keeping.
            </Paragraph>
            <Paragraph>
                A cruise company needed an illustrated map for their foldable travel brochure - something guests could hold
                in their hands while exploring the island by golf cart, and then take home as a memory. The back of the
                brochure features historical facts about the landmarks, so the map had to work as both a visual guide and a
                storytelling companion.
            </Paragraph>
            <Paragraph>
                Every single landmark on this map - from the Bloody Point Lighthouse to the Marsh Horse Preserve, from the
                tiny White School House to the Silver Dew Winery - was illustrated individually from photo references. Each
                building has its own character: the right roofline, the right colors, the right feel. That level of detail
                is what turns a map from a navigation tool into something people actually want to frame.
            </Paragraph>
            <Paragraph>
                The color palette was essential to the mood. Warm sandy tones for the land, deep teal for the surrounding
                waters, soft greens for the island's canopy - everything had to feel like the island itself: unhurried,
                warm, and a little bit wild.
            </Paragraph>
            <Paragraph>
                Twenty illustrated landmarks, two rivers, beaches, roads, trees, a compass rose, and a client's branded
                crest - all fitting together on one carefully composed island shape.
            </Paragraph>
            <Paragraph>Some maps help you find your way. This one makes you want to go.</Paragraph>
            <Paragraph>Перевод на русский:</Paragraph>
            <Paragraph>
                Дауфски - маленький тихий остров у побережья Южной Каролины. Ни мостов, ни машин - только гольф-кары и
                история на каждом шагу. Карт этого острова немного. Я хотела сделать такую, которую захочется сохранить.
            </Paragraph>
            <Paragraph>
                Круизная компания заказала иллюстрированную карту для складного путеводителя - чтобы гости держали её в
                руках, исследуя остров на гольф-каре, а потом увезли домой как память. На обороте буклета - исторические
                факты о достопримечательностях, поэтому карта должна была работать и как визуальный гид, и как спутник
                рассказа.
            </Paragraph>
            <Paragraph>
                Каждый лендмарк на этой карте - от маяка Bloody Point до заповедника диких лошадей, от крошечной White
                School House до винодельни Silver Dew - нарисован отдельно по фотографиям. У каждого здания свой характер:
                правильная линия крыши, правильные цвета, правильное ощущение. Именно этот уровень детализации превращает
                карту из инструмента навигации в то, что хочется повесить в рамку.
            </Paragraph>
            <Paragraph>
                Цветовая палитра была ключом к настроению. Тёплые песочные тона для суши, глубокий бирюзовый для окружающих
                вод, мягкая зелень для островного полога - всё должно было ощущаться как сам остров: неторопливый, тёплый и
                немного дикий.
            </Paragraph>
            <Paragraph>
                Двадцать иллюстрированных лендмарков, две реки, пляжи, дороги, деревья, компасная роза и фирменный герб
                клиента - всё уместилось на одном тщательно скомпонованном силуэте острова.
            </Paragraph>
            <Paragraph>Некоторые карты помогают найти дорогу. Эта - заставляет захотеть поехать.</Paragraph>
        </Message>
    </Chapter>
);

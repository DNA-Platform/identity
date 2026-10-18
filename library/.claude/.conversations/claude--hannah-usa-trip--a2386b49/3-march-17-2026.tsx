import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Title>[[ 17 March 2026 ]]</Title>
        <Message
            at="2026-03-17T12:08:44.868185Z"
        >
            <Origin>019cfbb2-c403-7e14-8352-f87b6cd1b47e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ана: Клод, посмотри на цветовое решение моей карты. Все штаты имеют яркие цвета, также будут иконки,
                названия городов и прочее. Сейчас я работаю над тем, как показать маршруты. их три. сейчас они обозначены
                белым, голубым и желтым цветом с черной обводкой. Я хочу, чтоыб ты визуализировал дял меня несколько опций
                для маршрутов именно на моей карте.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>я хочу, чтоыб ты предложил свои три цвета дял линий маршрута, сохраняя их черную обводку.</Line>
                <Line>
                    Я хочу, чтобы ты предложил другое оформление маршрута, не похоже на то, что я делаю сейчас - предложи
                    свое видение
                </Line>
                <Line>попробуй сделать обводку маршрута белой, а внутреннюю часть - темной, но разных цветов.</Line>
            </Paragraph>
            <Paragraph>сделай для меня визуализацию всех трех опций.</Paragraph>
            <Attachment>Uploaded “1773749137673_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-17T12:10:14.925928Z"
        >
            <Origin>019cfbb2-c403-76e1-8e85-f575b2822611</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used visualize:read me</Action>
            <Action>Used visualize:show widget</Action>
            <Paragraph>Три варианта на фоне, максимально похожем на твою карту.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мои мысли по каждому:
                </Word>
            </Paragraph>
            <Paragraph>
                Вариант 1 - малиновый/лаймовый/голубой. Яркие, но каждый из них контрастирует с любым из цветов штатов - это
                важно. Лайм не теряется даже на жёлтом Kansas, малиновый - на красном Ohio, голубой - на синем штате.
            </Paragraph>
            <Paragraph>
                Вариант 2 (выделила как рекомендуемый) - «железнодорожный» стиль: толстая чёрная полоса + цветные сегменты
                внутри. Это принципиально другой язык, не похожий на то, что ты делаешь сейчас. Смотрится характерно и
                читается с первого взгляда.
            </Paragraph>
            <Paragraph>
                Вариант 3 - самый элегантный, на мой взгляд. Белая обводка буквально «вырезает» маршрут из фона на любом
                штате, а тёмные начинки создают спокойный, но чёткий контраст. Хорошо работает когда на карте много всего
                другого (иконки, подписи).
            </Paragraph>
            <Paragraph>Что нравится больше?</Paragraph>
        </Message>
        <Message
            at="2026-03-17T12:20:47.660653Z"
        >
            <Origin>019cfbbd-ca5e-79fc-ab5b-83f69a58f9f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>покажи мне ближе вариант номер 1</Paragraph>
        </Message>
        <Message
            at="2026-03-17T12:21:44.030505Z"
        >
            <Origin>019cfbbd-ca5e-7f2b-8ff5-f1580a1339ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used visualize:show widget</Action>
            <Paragraph>
                Главный вывод из зума - чёрная обводка делает всю работу. Лаймовый сам по себе на оранжевом штате
                рискованный, но с обводкой держится. Голубой и малиновый - вообще без вопросов на любом фоне.
            </Paragraph>
            <Paragraph>Хочешь попробовать другие оттенки в этой же системе, или переходим к следующему варианту?</Paragraph>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 October 2025](2025-10-31)</Date>
        </Dated>
        <Title>[[ 31 October 2025 ]]</Title>
        <Message
            at="2025-10-31T07:35:28.226028Z"
        >
            <Origin>6af2f117-a68a-4c07-b25f-32c85d1a805f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, привет! Проверь математику. вот данные: My pricing structure remains the same as before:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Custom illustrated base map (drawn from scratch): $50</Line>
                <Line>Eastpointe Corporate Center illustrated as a custom icon: $35</Line>
                <Line>Landmark icons (matching your brand style): $35 each</Line>
            </Paragraph>
            <Paragraph>
                Всего нужно будет изобразить одно основное здание (Eastpointe Corporate Center) и 11 близлежащих ориентиров.
                (Думаю, можно исключить Corporate Costco и оставить только их розничный магазин — это отражено на
                Google-карте.)
            </Paragraph>
            <Paragraph>
                Исходя из этого, какая стоимость проекта? (смотри только на то, что написано здесь. не обращайся ни к каким
                другим данным)
            </Paragraph>
        </Message>
        <Message
            at="2025-10-31T07:35:35.679193Z"
        >
            <Origin>54366fb0-f6dd-4a43-937b-1562344f4f4b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Привет, Doug!</Paragraph>
            <Paragraph>Проверяю математику по данным:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Компоненты:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Custom illustrated base map: $50</Line>
                <Line>Eastpointe Corporate Center: $35</Line>
                <Line>11 близлежащих ориентиров: 11 × $35 = $385</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Итого: $50 + $35 + $385 = $470
                </Word>
            </Paragraph>
            <Paragraph>
                Общая стоимость проекта составит <Word>
                    <Bold />
                    $470
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2025-10-31T07:35:51.005037Z"
        >
            <Origin>0997359b-c824-4a1e-9abb-c5827bb05361</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>я не Даг, я Ана, и спасибо, Клод</Paragraph>
        </Message>
        <Message
            at="2025-10-31T07:35:55.595971Z"
        >
            <Origin>f9bf7692-e161-4d35-a36b-e35499177d41</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Прошу прощения за ошибку, Ана! Спасибо, что поправили меня.</Paragraph>
            <Paragraph>Пожалуйста, всегда рада помочь с расчётами! 😊</Paragraph>
        </Message>
    </Chapter>
);

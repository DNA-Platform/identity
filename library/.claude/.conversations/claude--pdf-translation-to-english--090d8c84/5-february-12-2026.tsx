import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Title>[[ 12 February 2026 ]]</Title>
        <Message
            at="2026-02-12T06:52:28.689680Z"
        >
            <Origin>019c509f-620b-76ba-8650-149d4dd72953</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana: Клод, переоисуй эту картинку в точности, как она есть, но замени градусы в цельсиях на Фаренгейты
                соответственно. И замени дни недели и названия месяцев на английскте эквиваленты
            </Paragraph>
            <Attachment>Uploaded “1000112593.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-12T06:53:32.314665Z"
        >
            <Origin>019c509f-620b-76ba-8650-149eade8a9d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ana is asking me to recreate this weather image exactly as it is, but convert Celsius to Fahrenheit and
                translate the days of the week and month names to English.
            </Paragraph>
            <Paragraph>Let me create that:</Paragraph>
            <Action>Created /home/claude/weather_forecast.html</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Готово! Вот прогноз погоды с температурой в Фаренгейтах и английскими названиями дней недели.
            </Paragraph>
            <Paragraph>Конвертация температур:</Paragraph>
            <Paragraph>
                <List />
                <Line>+13°C → +55°F</Line>
                <Line>+15°C → +59°F</Line>
                <Line>+16°C → +61°F</Line>
                <Line>+17°C → +63°F</Line>
                <Line>+14°C → +57°F</Line>
                <Line>+11°C → +52°F</Line>
                <Line>+3°C → +37°F</Line>
                <Line>+7°C → +45°F</Line>
                <Line>+8°C → +46°F</Line>
                <Line>+5°C → +41°F</Line>
                <Line>+6°C → +43°F</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T07:03:11.850927Z"
        >
            <Origin>019c50a9-3288-7368-8f79-e3a5a00277d0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, мне нужна картинка</Paragraph>
        </Message>
        <Message
            at="2026-02-12T07:04:31.735375Z"
        >
            <Origin>019c50a9-3288-7368-8f79-e3a6ef133b39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Поняла, сделаю картинку через React-артефакт, который можно заскриншотить:</Paragraph>
            <Action>Created /mnt/user-data/outputs/weather_forecast.jsx</Action>
            <Action>Created /mnt/user-data/outputs/weather_forecast.svg</Action>
        </Message>
    </Chapter>
);

import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-10-27T13:02:14.703936Z"
        >
            <Origin>e8574617-ef40-42ce-b9d6-7d53436facb0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, напиши хороший промпт для ИИ, чтобы он сделал для меня мок ап из двух изображений - белой футболки,
                как основы, на которой будет впоследствии нанесена иллюстрация, и из моей иллюстрации, которая должна быть
                нанесена на футболку в зону груди, как на представленном примере
            </Paragraph>
            <Attachment>Uploaded “1761570129907_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-10-27T13:02:35.858034Z"
        >
            <Origin>f7e4ff1d-d2d3-4112-927d-e717a369e9d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот хороший промпт для создания мокапа футболки:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Промпт для ИИ:
                </Word>
            </Paragraph>
            <Paragraph>
                Создай реалистичный мокап белой футболки с размещенной на ней иллюстрацией. Требования к мокапу:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Базовая футболка:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Белая базовая футболка (blank t-shirt mockup)</Line>
                <Line>Прямой вид спереди, слегка под углом для объема</Line>
                <Line>Естественные складки и текстура ткани</Line>
                <Line>Хорошее освещение без резких теней</Line>
                <Line>Высокое качество изображения</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Размещение иллюстрации:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Расположи иллюстрацию в центре области груди</Line>
                <Line>Размер иллюстрации: примерно 20-25 см в ширину</Line>
                <Line>Вертикальное размещение: на 5-7 см ниже горловины</Line>
                <Line>Иллюстрация должна следовать естественным изгибам и складкам ткани</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Реалистичность:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Иллюстрация должна выглядеть как напечатанная на ткани (не как наклейка)</Line>
                <Line>Добавь легкую текстуру ткани поверх иллюстрации для реалистичности</Line>
                <Line>Слегка скорректируй цвета иллюстрации с учетом белого фона футболки</Line>
                <Line>Иллюстрация должна деформироваться в соответствии со складками ткани</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Стиль и атмосфера:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Минималистичный, чистый дизайн</Line>
                <Line>Профессиональный mockup для портфолио или магазина</Line>
                <Line>Нейтральный фон (светло-серый или белый)</Line>
            </Paragraph>
            <Paragraph>Создай изображение в высоком разрешении, подходящее для презентации дизайна футболки.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Альтернативный вариант
                </Word> (если тебе нужен более технический подход для Photoshop/графических редакторов):
            </Paragraph>
            <Paragraph>Создай композицию мокапа футболки используя smart object технику:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Базовый слой: фотография белой футболки, вид спереди, разрешение не менее 3000px по ширине</Line>
                <Line>Область для дизайна: выдели зону груди (примерно 250x250 мм в реальном размере)</Line>
                <Line>Применить к иллюстрации:</Line>
                <Paragraph>
                    <List />
                    <Line>Режим наложения: Multiply или Normal с прозрачностью 90-95%</Line>
                    <Line>Warp/деформация по форме футболки</Line>
                    <Line>Добавь слой с текстурой ткани поверх (opacity 10-15%)</Line>
                </Paragraph>
                <Line>Финальная обработка: легкая цветокоррекция для единства композиции</Line>
            </Paragraph>
            <Paragraph>Какой из вариантов промпта тебе больше подходит?</Paragraph>
        </Message>
    </Chapter>
);

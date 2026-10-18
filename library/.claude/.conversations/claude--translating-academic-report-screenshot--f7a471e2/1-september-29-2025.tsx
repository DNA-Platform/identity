import { Append, Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 September 2025](2025-09-29)</Date>
        </Dated>
        <Title>[[ 29 September 2025 ]]</Title>
        <Message
            at="2025-09-29T16:41:48.646111Z"
        >
            <Origin>28eb585f-fa89-4b0f-af89-14404da77083</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, можешь сделать перевод этого скриншота на англйикий так, чтобы Даг мог видеть ту же приятную разметку,
                но читать на английском Это отчет об успеваемости Кати за прошедшую неделю
            </Paragraph>
            <Attachment>Uploaded “1759164090632_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-09-29T16:42:55.496080Z"
        >
            <Origin>cfd2b87d-fd9b-4e0e-be65-bd06a5e9d0bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll create an English translation of this student progress report while maintaining the same visual layout
                and formatting.
            </Paragraph>
            <Artifact
                identifier="katyas-weekly-progress-report-english-translation.v1"
                type=".html"
                artifact="student-progress-report"
                place="katyas-weekly-progress-report-english-translation-v1"
            >
                Made the artifact “Katya's Weekly Progress Report - English Translation”
            </Artifact>
            <Paragraph>
                I've created an English translation of Katya's weekly progress report that maintains the same visual layout
                and design as the original Russian version. The report shows her progress across all her Grade 4 homeschool
                subjects:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Summary of Katya's Performance:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Literature
                    </Word>: Excellent progress (24/36 tasks completed)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Russian Language
                    </Word>: Good attendance but needs more task completion
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Math
                    </Word>: Good attendance but low task completion (9/28)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Environmental Science
                    </Word>: Moderate progress but missed classes
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        English
                    </Word>: No attendance or tasks completed
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Visual Arts
                    </Word>: No attendance or tasks completed
                </Line>
            </Paragraph>
            <Paragraph>
                The report suggests Katya is doing well in Literature and has consistent attendance in her core subjects,
                but there's room for improvement in task completion and participation in English and Arts classes.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-29T17:45:50.939337Z"
        >
            <Origin>519830ed-9341-4ea4-a525-300208861900</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Я со своей дочкой учусь выполнять деление углом, которое принято в российских школах. Например, мы делим
                трёхзначные числа на однозначные, на какую-то цифру. Помоги нам, пожалуйста, понять, как делается, как
                выполняется деление углом. Объясни нам так, как будто бы мы не знаем вообще ничего. Самые азы. Очень-очень
                просто. Давай попробуем сделать это на любом примере, который ты приведёш по российской системе
            </Paragraph>
        </Message>
        <Message
            at="2025-09-29T17:46:12.740539Z"
        >
            <Origin>31f95033-2d1f-431d-967f-602d678c5209</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличная тема! Давайте разберём деление уголком с самого начала. Это как раз то, что проходят в 3-4 классе.
            </Paragraph>
            <Paragraph>
                Я объясню на простом примере: <Word>
                    <Bold />
                    456 ÷ 3
                </Word>
            </Paragraph>
            <Heading>Как это выглядит</Heading>
            <Paragraph>Сначала рисуем "уголок" - специальную конструкцию:</Paragraph>
            <CodeBox>
                {`456 |3
    |___`}
            </CodeBox>
            <Paragraph>
                Слева пишем число, которое делим (456 - это <Word>
                    <Bold />
                    делимое
                </Word>) Справа за вертикальной чертой пишем число, на которое делим (3 - это <Word>
                    <Bold />
                    делитель
                </Word>) Под горизонтальной чертой будем писать <Word>
                    <Bold />
                    ответ (частное)
                </Word>
            </Paragraph>
            <Heading>Пошаговый алгоритм</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 1: Берём первую цифру слева
                </Word>
            </Paragraph>
            <Paragraph>
                Смотрим на первую цифру делимого - это <Word>
                    <Bold />
                    4
                </Word>
            </Paragraph>
            <Paragraph>
                Спрашиваем себя: "Сколько троек помещается в четвёрке?" Ответ: одна тройка (потому что 3×1=3, а 3×2=6 - уже
                больше четырёх)
            </Paragraph>
            <Paragraph>
                Пишем <Word>
                    <Bold />
                    1
                </Word> в ответ (под уголок):
            </Paragraph>
            <CodeBox>
                {`456 |3
    |___
    |1`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 2: Вычитаем
                </Word>
            </Paragraph>
            <Paragraph>Под четвёркой пишем то, что "взяли" (1×3=3):</Paragraph>
            <CodeBox>
                {`456 |3
3   |___
    |1`}
            </CodeBox>
            <Paragraph>Проводим черту и вычитаем: 4-3=1</Paragraph>
            <CodeBox>
                {`456 |3
3   |___
—   |1
1`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 3: Сносим следующую цифру
                </Word>
            </Paragraph>
            <Paragraph>
                Сносим вниз следующую цифру из делимого - это <Word>
                    <Bold />
                    5
                </Word>:
            </Paragraph>
            <CodeBox>
                {`456 |3
3   |___
—   |1
15`}
            </CodeBox>
            <Paragraph>
                Теперь работаем с числом <Word>
                    <Bold />
                    15
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 4: Повторяем процесс
                </Word>
            </Paragraph>
            <Paragraph>Спрашиваем: "Сколько троек в пятнадцати?" Ответ: пять троек (3×5=15)</Paragraph>
            <Paragraph>
                Пишем <Word>
                    <Bold />
                    5
                </Word> в ответ:
            </Paragraph>
            <CodeBox>
                {`456 |3
3   |___
—   |15
15
15
—
0`}
            </CodeBox>
            <Paragraph>Вычитаем: 15-15=0</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 5: Сносим последнюю цифру
                </Word>
            </Paragraph>
            <Paragraph>
                Сносим <Word>
                    <Bold />
                    6
                </Word>:
            </Paragraph>
            <CodeBox>
                {`456 |3
3   |___
—   |152
15
15
—
 06`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    ШАГ 6: Завершаем
                </Word>
            </Paragraph>
            <Paragraph>Спрашиваем: "Сколько троек в шести?" Ответ: две тройки (3×2=6)</Paragraph>
            <Paragraph>
                Пишем <Word>
                    <Bold />
                    2
                </Word> в ответ:
            </Paragraph>
            <CodeBox>
                {`456 |3
3   |___
—   |152
15
15
—
 06
 6
 —
 0`}
            </CodeBox>
            <Heading>✅ ОТВЕТ: 456 ÷ 3 = 152</Heading>
            <Heading>Главные правила (запомните!)</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Всегда работаем слева направо
                    </Word> - как читаем книгу
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Спрашиваем
                    </Word>: "Сколько раз делитель помещается в этом числе?"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Берём наибольшее число
                    </Word>, которое не превышает то, что делим
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Вычитаем и сносим
                    </Word> следующую цифру
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Повторяем
                    </Word>, пока цифры не закончатся
                </Line>
            </Paragraph>
            <Heading>Попробуйте сами!</Heading>
            <Paragraph>
                Давайте потренируемся на примере попроще: <Word>
                    <Bold />
                    246 ÷ 2
                </Word>
            </Paragraph>
            <Paragraph>
                Попробуйте с Катей решить по шагам, которые я описал. Если что-то непонятно - спрашивайте, разберём
                подробнее! 😊
            </Paragraph>
        </Message>
        <Message
            at="2025-09-29T17:47:40.331005Z"
        >
            <Origin>e44bcb2a-1055-4fe3-b467-c1cf90fb2258</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>дай нам пример для проверки</Paragraph>
        </Message>
        <Message
            at="2025-09-29T17:47:46.892491Z"
        >
            <Origin>4d989716-299b-4d95-93b0-e0dc11b936ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отлично! Вот вам пример для самостоятельной тренировки:</Paragraph>
            <Heading>Задание для практики</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    368 ÷ 4
                </Word>
            </Paragraph>
            <Paragraph>Нарисуйте уголок и решите по шагам, которые мы разобрали:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Берём первую цифру (или сколько нужно)</Line>
                <Line>Делим</Line>
                <Line>Вычитаем</Line>
                <Line>Сносим следующую цифру</Line>
                <Line>Повторяем</Line>
            </Paragraph>
            <Paragraph>Когда решите, напишите мне ваш ответ, и я проверю!</Paragraph>
            <Paragraph>
                Также скажите, если в процессе возникнут вопросы - разберём вместе, где могла быть сложность.
            </Paragraph>
            <Paragraph>Удачи вам с Катей! 💪📝</Paragraph>
        </Message>
        <Append
            identifier="katyas-weekly-progress-report-english-translation.v1"
            type=".html"
        >
            ![[ katyas-weekly-progress-report-english-translation.v1.html ]]
        </Append>
    </Chapter>
);

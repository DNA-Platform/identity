import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 March 2026](2026-03-08)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-08T15:38:13.752942Z"
        >
            <Origin>019cce19-53f7-70f1-98cb-65a4f88e1e6c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana: Question about Shutterstock Клод, я вижу при загрузке на Шаттерсток Контрибьютор, что он теперь
                допускает более 2000 знаков в описании. проверь, пожалуйса, иак ли это и ели да, то почему это было изменено
                и как это влияет на продажи
            </Paragraph>
            <Attachment>Uploaded “1772984288755_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-08T15:38:49.284569Z"
        >
            <Origin>019cce19-53f7-70d4-ac8e-99b8bf80e18c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Shutterstock contributor description character limit 2048 change 2024 2025”
            </Action>
            <Action>
                Fetched
                https://submit.shutterstock.com/help/en/articles/10617427-content-publishing-standards-contextual-metadata
            </Action>
            <Action>Searched the web for “Adobe Stock contributor description limit 2048 characters”</Action>
            <Paragraph>
                Ана, важное уточнение: на скриншоте, который ты прислала — это <Word>
                    <Bold />
                    Adobe Stock
                </Word>, а не Shutterstock! Обрати внимание на интерфейс с полями "Category 1 / Category 2 (optional)" — это
                портал Adobe.
            </Paragraph>
            <Paragraph>Вот как на самом деле обстоят дела:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adobe Stock
                </Word> (твой скриншот) — поле описания/заголовка имеет ограничение ~2048 символов, что и показывает счётчик
                "433/2048" на твоём экране. Это не новшество — Adobe Stock давно использует длинные описания для лучшей
                индексации.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shutterstock
                </Word> — совершенно другая история: максимальная длина описания/заголовка составляет 200 символов. Это
                строгое ограничение, не меняется.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему Adobe допускает до 2048 символов и как это влияет на продажи:
                </Word>
            </Paragraph>
            <Paragraph>Adobe Stock поощряет детальные описания, потому что:</Paragraph>
            <Paragraph>
                <List />
                <Line>описания и ключевые слова критически важны для обнаружения контента через поиск</Line>
                <Line>
                    Длинное описание позволяет охватить больше поисковых запросов естественным образом (без спама ключевыми
                    словами)
                </Line>
            </Paragraph>
            <Paragraph>
                Однако для заголовков Adobe рекомендует держаться в рамках ~70 символов — более длинные заголовки могут быть
                автоматически обрезаны. Описание (поле Description) — отдельное поле, которое не является заголовком.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Практический совет для Аны:
                </Word> для Adobe Stock используй поле Description, чтобы написать полноценное контекстное описание работы
                (как на твоём скриншоте — хорошее описание карты Ормузского пролива). Это помогает модераторам и алгоритму
                лучше понять содержание, особенно для специфических тематических иллюстраций вроде геополитических карт.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T15:53:47.466401Z"
        >
            <Origin>019cce27-925c-701a-9262-ce34af5b6435</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Ана: нет, Клод, ты неправ. Это Шаттерсток</Paragraph>
            <Attachment>Uploaded “1772985218170_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-08T15:54:13.462427Z"
        >
            <Origin>019cce27-925c-7849-8c6a-7fc004f4199e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Shutterstock contributor description 2048 characters new limit 2024 2025”</Action>
            <Action>
                Fetched
                https://submit.shutterstock.com/help/en/articles/10594681-content-publishing-standards-and-policy-updates
            </Action>
            <Action>
                Searched the web for “Shutterstock contributor portal description field 2048 characters change forum
                microstock”
            </Action>
            <Paragraph>
                Ана, ты абсолютно права — прошу прощения, я ошибся. Это явно Shutterstock (<Word>
                    <Verbatim />
                    submit.shutterstock.com
                </Word>).
            </Paragraph>
            <Paragraph>
                Ситуация интересная: официальная документация Shutterstock по-прежнему указывает лимит 200 символов, но твой
                скриншот живого интерфейса явно показывает счётчик <Word>
                    <Bold />
                    433/2048
                </Word>. Это означает одно из двух:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Shutterstock тихо обновил лимит
                    </Word> — до 2048 символов — без обновления документации. Такое бывает, когда изменения вносятся в
                    интерфейс раньше, чем в help-статьи.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Поле "Description" и "Title" теперь разделены
                    </Word> — возможно, 200 символов — это лимит для <Word>
                        <Emphasis />
                        заголовка
                    </Word>, а поле <Word>
                        <Emphasis />
                        описания
                    </Word> всегда допускало больше, просто раньше это не было видно так явно.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это значит для продаж?
                </Word> Если лимит действительно расширен — это положительно влияет на поиск, поскольку:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Более детальное описание помогает поисковому алгоритму лучше понять содержание файла</Line>
                <Line>
                    Особенно важно для специфического контента вроде геополитических карт, где ключевые слова могут не
                    покрывать весь контекст
                </Line>
                <Line>Покупатели, использующие расширенный поиск, смогут находить работы по более конкретным запросам</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мой совет:
                </Word> используй это пространство разумно — описание на скриншоте уже очень хорошее и конкретное. Не нужно
                искусственно раздувать текст, но полные 3-4 предложения с деталями о содержимом файла точно не навредят.
            </Paragraph>
        </Message>
    </Chapter>
);

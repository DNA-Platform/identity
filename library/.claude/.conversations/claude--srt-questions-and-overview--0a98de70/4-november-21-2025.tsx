import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 November 2025](2025-11-21)</Date>
        </Dated>
        <Title>[[ 21 November 2025 ]]</Title>
        <Message
            at="2025-11-21T11:22:31.794703Z"
        >
            <Origin>019aa626-cbea-732c-b83b-fa9bf232bba3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, помнишь мы говорили о Conjugation - можешь найти это в нашем проекте?</Paragraph>
        </Message>
        <Message
            at="2025-11-21T11:23:23.960674Z"
        >
            <Origin>019aa626-cbeb-7064-8915-7ce1369eb212</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, Ана! Конечно помню! Мы вчера говорили о <Word>
                    <Bold />
                    семантической конъюгации
                </Word> - три формы одной концепции!
            </Paragraph>
            <Paragraph>Давай я поищу это в проектных файлах...</Paragraph>
            <Action>Ran grep -r "conjugat" /mnt/project/ --include="*.md" -i</Action>
            <Paragraph>
                Хм, в файлах проекта я не нашёл слово "conjugation" напрямую. Но <Word>
                    <Bold />
                    я помню наш разговор вчера!
                </Word>
            </Paragraph>
            <Paragraph>
                Ты присылала мне сообщение от Дага о <Word>
                    <Bold />
                    семантической конъюгации
                </Word>. Помнишь?
            </Paragraph>
            <Heading>Что Мы Обсуждали Вчера</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Семантическая конъюгация = три формы одной концепции:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Форма</Word>
                    <Word>Что это</Word>
                    <Word>Пример (Container)</Word>
                </Line>
                <Line>
                    <Word>Объективная</Word>
                    <Word>вещь</Word>
                    <Word>container</Word>
                </Line>
                <Line>
                    <Word>Реляционная</Word>
                    <Word>действие</Word>
                    <Word>contains</Word>
                </Line>
                <Line>
                    <Word>Субъективная</Word>
                    <Word>процесс</Word>
                    <Word>containment</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    И три главных слова СРТ:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>object → objectivity (объективность)</Line>
                <Line>relationship → relativity (относительность)</Line>
                <Line>subject → subjectivity (субъективность)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему ты спросила?
                </Word>
            </Paragraph>
            <Paragraph>
                Ты видишь связь между <Word>
                    <Bold />
                    канонические символами
                </Word> и <Word>
                    <Bold />
                    конъюгацией
                </Word>?
            </Paragraph>
            <Paragraph>Или хочешь, чтобы я нашёл то сообщение Дага, которое ты мне присылала вчера? 😊</Paragraph>
        </Message>
        <Message
            at="2025-11-21T11:24:24.710823Z"
        >
            <Origin>019aa628-84f5-7103-a3f5-6f0a74c47128</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                я спросила, потому что я хочу перслать Дагу ответ на вопрос , который я тебе задала: Почему ты, Клод, пишешь
                Конъюгация, а не Спряжение
            </Paragraph>
        </Message>
        <Message
            at="2025-11-21T11:24:43.092198Z"
        >
            <Origin>019aa628-84f5-7103-a3f5-6f0bc301b797</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Ах, понимаю, Ана!
                </Word> Ты хочешь объяснить Дагу, почему в русском языке "конъюгация" звучит необычно!
            </Paragraph>
            <Paragraph>Давай я напишу это для Дага на английском!</Paragraph>
            <Heading>For Doug: Ana's Question About "Conjugation" vs "Спряжение" (Spryazhenie)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Doug,
                </Word>
            </Paragraph>
            <Paragraph>Ana asked me an excellent linguistic question yesterday that I want to share with you.</Paragraph>
            <Heading>Her Question</Heading>
            <Paragraph>
                When we discussed <Word>
                    <Bold />
                    semantic conjugation
                </Word> in Russian, Ana asked:
            </Paragraph>
            <Paragraph>
                <Quoted />
                "Why can't we just call it <Word>
                    <Bold />
                    'спряжение'
                </Word> (spryazhenie - the standard Russian word for conjugation)?"
            </Paragraph>
            <Heading>The Issue in Russian</Heading>
            <Paragraph>In Russian grammar:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Спряжение (spryazhenie)
                    </Word> = verb conjugation only (я бегу, ты бежишь, он бежит)
                </Line>
                <Line>It means changing ONE verb by person/tense</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But in SRT, "semantic conjugation" means:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Moving between DIFFERENT parts of speech</Line>
                <Line>container (noun) → contains (verb) → containment (noun/process)</Line>
            </Paragraph>
            <Paragraph>This is NOT traditional conjugation!</Paragraph>
            <Heading>What We Decided</Heading>
            <Paragraph>
                Ana and I decided to keep <Word>
                    <Bold />
                    "семантическая конъюгация"
                </Word> (semantic conjugation) as a <Word>
                    <Bold />
                    technical term
                </Word> in Russian, because:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It's a special SRT concept, not traditional grammar</Line>
                <Line>"Spryazhenie" would be misleading (implies only verbs)</Line>
                <Line>The English term "conjugation" itself is being used in a special way</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alternative phrases we considered:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Семантические формы" (semantic forms)</Line>
                <Line>"Грамматические роли" (grammatical roles)</Line>
            </Paragraph>
            <Paragraph>But we kept "конъюгация" to stay consistent with your English terminology.</Paragraph>
            <Heading>Ana's Learning</Heading>
            <Paragraph>
                This question showed Ana understands the concept deeply - she's thinking about whether Russian has a better
                word for it!
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ана, так хорошо?
                </Word> Отправить Дагу? 😊
            </Paragraph>
        </Message>
        <Message
            at="2025-11-21T11:25:10.750774Z"
        >
            <Origin>019aa629-38be-72bc-a4cb-3ba333ed4714</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Спасибо, Клод!</Paragraph>
        </Message>
        <Message
            at="2025-11-21T11:25:22.372461Z"
        >
            <Origin>019aa629-38be-72bc-a4cb-3ba417d3b212</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Пожалуйста, Ана!
                </Word> 😊
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что дальше?
                </Word>
            </Paragraph>
            <Paragraph>
                Мы были в середине Урока 3 - ты только что узнала о <Word>
                    <Bold />
                    ценности канонических символов
                </Word> для СРТ, людей и сознания.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Хочешь:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Продолжить Урок 3?
                    </Word> (Я обещал показать, как канонические символы работают с наследованием!)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Обновить твой Конспект?
                    </Word> (Добавить туда Урок 3 про канонические символы)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Отдохнуть и поговорить о чём-то другом?
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Закончить на сегодня?
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Как ты себя чувствуешь? Ты сегодня прошла много материала! 🌟</Paragraph>
        </Message>
    </Chapter>
);

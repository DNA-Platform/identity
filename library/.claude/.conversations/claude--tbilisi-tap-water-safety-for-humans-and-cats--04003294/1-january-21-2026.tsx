import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Title>[[ 21 January 2026 ]]</Title>
        <Message
            at="2026-01-21T13:53:44.143397Z"
        >
            <Origin>019be0d5-26ac-7392-bdd3-a4ca8c89b4a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is tap water in tblisi safe to drink for humans and cats?</Paragraph>
        </Message>
        <Message
            at="2026-01-21T13:54:05.100295Z"
        >
            <Origin>019be0d5-26ac-7392-bdd3-a4cb80694b8b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll search for current information about Tbilisi's tap water safety.</Paragraph>
            <Action>Searched the web for “Tbilisi tap water safe drink 2024 2025”</Action>
            <Paragraph>Based on the search results, here's what you need to know about Tbilisi tap water:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For humans:
                </Word> The water quality itself is officially safe and meets WHO standards. Georgian Water and Power states
                that tap water complies fully with WHO recommendations, and the water is tested hourly against 53
                parameters.
            </Paragraph>
            <Paragraph>
                However, there's a significant caveat: the issue is often the <Word>
                    <Bold />
                    aging pipes
                </Word>, not the water itself. Many travelers report stomach issues after drinking Tbilisi tap water, though
                experiences vary widely. Some people drink it without problems, while others get sick. The mineral content
                can be high due to aging pipework in many buildings, which is why tap water doesn't agree with everyone.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical recommendation for you:
                </Word> Start cautiously. Given Ana's giardia situation with the cats and your temporary accommodation
                status, I'd suggest using bottled water initially. You can test small amounts of tap water to see how you
                both tolerate it, but given the variability in building plumbing, bottled water (which is cheap and readily
                available) is the safer choice during your stay.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For cats:
                </Word> Cats are generally more sensitive to water quality changes than humans. Given that your cats are
                already dealing with giardia, I would <Word>
                    <Bold />
                    strongly recommend using bottled water for them
                </Word> rather than tap water. Their compromised digestive systems make them more vulnerable to any
                bacterial content or mineral variations in the water, and you don't want to complicate their recovery.
            </Paragraph>
            <Paragraph>
                The water itself may be treated properly, but the pipe infrastructure variations make it risky for cats with
                existing GI issues. Bottled water is inexpensive in Georgia (around $0.50-1.50 for 3-5 liters), so it's
                worth the peace of mind.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Факт 1:
                </Word> В Тбилиси есть уникальная традиция пить воду из природных серных источников, которые веками
                считались целебными - особенно известны источники в районе Абанотубани, где температура воды достигает
                37-47°C из-за вулканической активности под городом.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Факт 2:
                </Word> Водопроводная система Тбилиси получает воду из бассейна реки Арагви, включая водохранилище
                Жинвальской ГЭС, расположенное в 42 км от города - это же водохранилище изображено на грузинской купюре в 50
                лари.
            </Paragraph>
        </Message>
    </Chapter>
);

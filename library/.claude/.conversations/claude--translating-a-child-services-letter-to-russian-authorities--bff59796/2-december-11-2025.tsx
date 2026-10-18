import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 December 2025](2025-12-11)</Date>
        </Dated>
        <Title>[[ 11 December 2025 ]]</Title>
        <Message
            at="2025-12-11T05:21:16.488807Z"
        >
            <Origin>019b0bdb-3da3-7228-b61c-b3bc0da1c817</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is back to the child services letter, so can you write this one as a Ana, a woman, writing about katya
                and her son dima. Do the naïve translation and then do a more nuanced translation as usual, looking for
                phrases or idioms are just the way things are explained in the Russian language to achieve a fluent
                transcription on this:
            </Paragraph>
            <Paragraph>
                Finally, I’m kindly asking you to please remember that the children are most likely repressing some of the
                traumatic things that they witnessed. It’s not easy to watch Daddy beat Mommy while shouting some of the
                most vulgar phrases a man can say to a woman while using the Russian language. Last time I took Katya to the
                psychologist, she wasn’t ready to open up about her feelings. I can see that she’s getting better now that
                we’re far away from danger. I’m still not sure how she and Dima will remember things, but I’m waiting until
                after this custody case to explore it more deeply with both of them.
            </Paragraph>
        </Message>
        <Message
            at="2025-12-11T05:21:43.116748Z"
        >
            <Origin>019b0bdb-3da3-7228-b61c-b3bd25bfc7d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Analysis</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Key elements to preserve:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"I'm kindly asking you to please remember" — formal but warm appeal to their humanity</Line>
                <Line>"repressing traumatic things" — psychological terminology</Line>
                <Line>"Daddy beat Mommy" — deliberately using child's-eye language; this is powerful</Line>
                <Line>"vulgar phrases a man can say to a woman" — gendered violence, specific</Line>
                <Line>
                    "while using the Russian language" — she's emphasizing these were Russian obscenities, the inspectors
                    will understand the weight of this
                </Line>
                <Line>"she wasn't ready to open up" — therapeutic language</Line>
                <Line>"far away from danger" — Max = danger, stated indirectly</Line>
                <Line>"waiting until after this custody case" — shows she's thoughtful, not rushing the children</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Naïve translation:
                </Word>
            </Paragraph>
            <Paragraph>
                «Наконец, я любезно прошу вас, пожалуйста, помнить, что дети, скорее всего, подавляют некоторые
                травматические вещи, которые они видели. Нелегко смотреть, как папа бьёт маму, выкрикивая одни из самых
                вульгарных фраз, которые мужчина может сказать женщине, используя русский язык. В последний раз, когда я
                водила Катю к психологу, она не была готова открыться о своих чувствах. Я вижу, что ей становится лучше
                теперь, когда мы далеко от опасности. Я всё ещё не уверена, как она и Дима будут помнить вещи, но я жду до
                окончания этого дела об опеке, чтобы исследовать это более глубоко с ними обоими.»
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Problems:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>«любезно прошу вас, пожалуйста, помнить» — awkward double politeness</Line>
                <Line>
                    «вульгарных фраз» — «вульгарный» is a borrowed word; «непристойный» or «грязный» is more natural
                </Line>
                <Line>«используя русский язык» — clunky; needs to flow better</Line>
                <Line>«открыться о своих чувствах» — anglicism; Russian uses different construction</Line>
                <Line>«помнить вещи» — too literal</Line>
                <Line>«исследовать это более глубоко» — sounds clinical, not maternal</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Nuanced translation:
                </Word>
            </Paragraph>
            <Paragraph>
                И наконец, прошу вас помнить: дети, скорее всего, подавляют часть того травматичного, что им пришлось
                увидеть. Нелегко смотреть, как папа бьёт маму, выкрикивая самые грязные слова, какие мужчина может сказать
                женщине на русском языке. Когда я в последний раз водила Катю к психологу, она ещё не была готова говорить о
                своих чувствах. Я вижу, что ей становится лучше теперь, когда мы в безопасности. Я пока не знаю, как Катя и
                Дима будут вспоминать всё это, но я хочу подождать до конца этого дела, чтобы проработать это с ними обоими
                более глубоко.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    English (corrected):
                </Word>
            </Paragraph>
            <Paragraph>
                Finally, I'm kindly asking you to please remember that the children are most likely repressing some of the
                traumatic things that they witnessed. It's not easy to watch Daddy beat Mommy while shouting some of the
                most vulgar phrases a man can say to a woman in the Russian language. The last time I took Katya to the
                psychologist, she wasn't ready to open up about her feelings. I can see that she's getting better now that
                we're far away from danger. I'm still not sure how she and Dima will remember things, but I'm waiting until
                after this custody case to explore it more deeply with both of them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key changes in the nuanced version:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>«прошу вас помнить» — clean, respectful, not over-polite</Line>
                <Line>
                    «часть того травматичного, что им пришлось увидеть» — "some of the traumatic things they had to witness"
                    — «пришлось» adds weight (they were forced to see)
                </Line>
                <Line>«самые грязные слова» — "the dirtiest words" — more visceral than «вульгарные»</Line>
                <Line>«на русском языке» — flows naturally</Line>
                <Line>«ещё не была готова говорить о своих чувствах» — natural Russian construction</Line>
                <Line>
                    «теперь, когда мы в безопасности» — "now that we're safe" — slightly softer than "far from danger" but
                    same meaning
                </Line>
                <Line>«проработать это с ними обоими» — «проработать» is the therapeutic term Russians actually use</Line>
            </Paragraph>
        </Message>
    </Chapter>
);

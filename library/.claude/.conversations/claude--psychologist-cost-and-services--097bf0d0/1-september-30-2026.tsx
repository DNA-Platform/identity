import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 September 2026](2026-09-30)</Date>
        </Dated>
        <Title>[[ 30 September 2026 ]]</Title>
        <Message
            at="2026-09-30T07:43:22.607445Z"
        >
            <Origin>0585576b-d548-45ae-84c8-b3b0fd11bc6a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>проичитай разговор и напиши на англйиском стоимсоть и услвоия психолога</Paragraph>
            <Attachment>Uploaded “1790754200760_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-09-30T07:43:26.298363Z"
        >
            <Origin>8f42c0f1-8b8e-4a48-8e59-d9ac7ceaa07c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a summary in English:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Psychologist (Alexander): cost and terms
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Price:
                    </Word> 120 GEL per session
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Availability:
                    </Word> He can take on your 9-year-old son; you just need to agree on a time.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        First meeting:
                    </Word> The first session is always <Word>
                        <Bold />
                        without the child
                    </Word>. It's with the parent only, so he can take a history (background on the child and the
                    situation).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Next steps:
                    </Word> After that first meeting, he'll propose a plan of work.
                </Line>
            </Paragraph>
            <Paragraph>
                Context: Anastasia wrote to him on Anton Anfinogentov's recommendation. Anton had already told him to expect
                her message. She said she'd talk it over with her husband and get back to him soon.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-30T07:55:44.499260Z"
        >
            <Origin>707678eb-8a65-4700-86ca-af7a00e30a6b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>запиши мой ответ: согласны</Paragraph>
        </Message>
        <Message
            at="2026-09-30T07:55:47.699229Z"
        >
            <Origin>bdcb3db6-b91b-420b-a5f1-3b9811ea6f95</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот вариант ответа Александру:</Paragraph>
            <Paragraph>
                <Quoted />
                Александр, здравствуйте! Мы согласны. Давайте договоримся о времени первой встречи. Какие дни и время вам
                удобны? Спасибо!
            </Paragraph>
            <Paragraph>
                Если хотите, могу сделать короче, например просто: «Александр, мы согласны! Когда вам удобно встретиться?»
            </Paragraph>
        </Message>
    </Chapter>
);

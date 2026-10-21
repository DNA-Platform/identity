import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-08T08:51:49.534339Z"
        >
            <Origin>079dce2d-ac65-4af1-8204-8695a1cdfea3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to english please:</Paragraph>
            <Paragraph>
                я переформулирую вопрос: когда у тебя случается обострение, что с тобой конкретно происходит?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T08:51:49.534339Z"
        >
            <Origin>4ea7699a-dd56-4ffe-a885-58068ba7c850</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me translate that from Russian to English:</Paragraph>
            <Paragraph>
                "Let me rephrase the question: When you have a flare-up/exacerbation, what specifically happens to you?"
            </Paragraph>
            <Paragraph>
                Note: The term "обострение" in medical contexts refers to a flare-up, exacerbation, or acute phase of a
                condition.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T08:52:18.181643Z"
        >
            <Origin>ccde5f11-1907-4343-87c5-559e23fe2169</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                случаются ли значимые изменения в твоем состоянии сейчас? я имею в виду период, когда ты принимаешь
                лекарства?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T08:52:18.181643Z"
        >
            <Origin>e38df00e-0021-4488-b418-8659f9bfa085</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me translate that from Russian to English:</Paragraph>
            <Paragraph>
                "Are there any significant changes in your condition now? I mean during the period when you're taking
                medication?"
            </Paragraph>
        </Message>
    </Chapter>
);

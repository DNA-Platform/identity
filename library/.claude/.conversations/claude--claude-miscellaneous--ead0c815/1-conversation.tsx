import { Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-17T11:29:30.517412Z"
        >
            <Origin>019ed557-e6e4-7482-8964-d66d0db71511</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm going to use this chat for miscellaneous questions, so sometimes the topic will change dramatically. Are
                you okay with that?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-17T11:29:34.502136Z"
        >
            <Origin>019ed557-e6e4-74d3-929d-738b4c863748</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's completely fine. A catch-all chat where the topic jumps around is a perfectly good way to use this.
                Ask away whenever something comes up, and I'll just take each question on its own terms.
            </Paragraph>
            <Paragraph>
                One small practical note: because topics will shift, I won't assume a new question connects to an earlier
                one unless you signal that it does. If something <Word>
                    <Emphasis />
                    is
                </Word> a follow-up, just point me back to it and I'll pick up the thread.
            </Paragraph>
            <Paragraph>What's first?</Paragraph>
        </Message>
    </Chapter>
);

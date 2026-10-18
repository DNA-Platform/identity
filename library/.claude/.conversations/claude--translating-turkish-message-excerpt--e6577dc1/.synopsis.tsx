import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to assist with two translation tasks. First, they requested a translation of a
            message written in Turkish from someone named Neslihan Dr. Sevil, which Claude translated into English — the
            message concerned preparing a report in Word format and forwarding it via email. Second, the person asked
            Claude to translate an English sentence into Turkish; the sentence requested that a report include official
            letterhead or a signature from a practice so that it could be verified. The person then asked Claude to
            remove the quotation marks from the translated output, which Claude did.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation covered three unrelated topics in sequence. The person first asked a practical travel
            question about tipping customs in salons in the Republic of Georgia, and Claude explained that tipping is
            not deeply embedded in local service culture but small tips are appreciated. The conversation then shifted
            to a sustained and intellectually engaged discussion about astronomy and the history of science.
        </Paragraph>
    </Chapter>
);

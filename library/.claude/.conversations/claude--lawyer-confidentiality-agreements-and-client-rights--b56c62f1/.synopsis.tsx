import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in a detailed legal discussion about whether lawyers in American law can ethically and
            legally ask clients to sign confidentiality agreements that would restrict the client's ability to seek new
            representation or report attorney misconduct. The user demonstrated sophisticated legal reasoning by
            identifying a critical flaw in this practice - that such agreements could prevent clients from discussing
            their need for new representation with other lawyers or courts, potentially trapping them with inadequate
            counsel.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is navigating Russian family law enforcement proceedings related to alimony collection from a
            former partner named Maxim. The conversation was conducted entirely in Russian, and Claude responded in kind
            throughout. The person shared multiple legal documents for interpretation, including enforcement decrees
            (постановления) and an attorney-filed application to initiate enforcement proceedings. Key legal
            professionals mentioned include Гурина Анастасия Владимировна, an enforcement specialist at a Moscow law
            firm, and Алекс, the person's primary attorney handling the broader case.
        </Paragraph>
    </Chapter>
);

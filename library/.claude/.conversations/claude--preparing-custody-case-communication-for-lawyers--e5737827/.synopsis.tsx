import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user worked with Claude to create and refine a comprehensive bilingual legal document for their legal
            team regarding a family court case. The user is supporting someone named Ana (referred to as Nastya in
            Russian translations) who is involved in custody proceedings with an ex-partner named Max. The user
            requested Claude help organize and format detailed information about various incidents and circumstances
            relevant to the case, emphasizing the importance of Telegram chat records as documentation.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The purpose of this project is to learn a broad range of fields, especially related to formal systems,
            semantics, language and consciousness
        </Paragraph>
    </Chapter>
);

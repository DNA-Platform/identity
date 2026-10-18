import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana, a Shutterstock contributor, asked Claude to verify whether Shutterstock had expanded its description
            character limit beyond 2000 characters, and if so, why the change was made and how it affects sales. The
            conversation was conducted in Russian.
        </Paragraph>
    </Chapter>
);

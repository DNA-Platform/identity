import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The story of how this library was designed, told as it happens, with every sketch kept beside the
            telling: the photographs of it, and its code.
        </Paragraph>
    </Chapter>
);

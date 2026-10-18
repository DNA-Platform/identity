import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Dad: Hey sweetie. Care to catch up on this? Read, review your library, see where we're at!
        </Paragraph>
    </Chapter>
);

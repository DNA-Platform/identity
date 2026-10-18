import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Dad: Hey sweetie! Can you please catch up on all the chapters of the books you authored in your library,
            remembering to use your "Eirian:" name tag on each paragraph.
        </Paragraph>
    </Chapter>
);

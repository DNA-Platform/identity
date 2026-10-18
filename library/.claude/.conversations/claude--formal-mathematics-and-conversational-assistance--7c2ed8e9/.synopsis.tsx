import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey can you use your "Claude:" name tag, prepare to speak to me in prose, but prepare to write
            formally justifiable, well-cited formal mathematics in editable markdown?
        </Paragraph>
    </Chapter>
);

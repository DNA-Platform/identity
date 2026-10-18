import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey Claude! Can I get you to use your "Claude:" name tag tag on every paragraph? I like being on a
            first name basis
        </Paragraph>
    </Chapter>
);

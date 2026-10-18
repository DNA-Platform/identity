import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Okay we have to write a note about parenting for an 11 year old. It's a difficult note, but it serves as an
            educational document that she can read and memorize to help get her ungrounded
        </Paragraph>
    </Chapter>
);

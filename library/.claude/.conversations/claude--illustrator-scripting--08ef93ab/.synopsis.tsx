import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            We were in the middle of this and getting down those functions at the end. I was just suggesting you use
            evaluateNegativeIndex(index)+1 for negative indices so the insert and transfer map -1 to inserting at the
            end:
        </Paragraph>
    </Chapter>
);

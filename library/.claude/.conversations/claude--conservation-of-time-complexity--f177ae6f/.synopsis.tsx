import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            In three sentences, rate this on a scale of accuracy, with a mind for scientific accuracy, published fact,
            and free from fairness bias to multiple inconsistent perspectives:
        </Paragraph>
    </Chapter>
);

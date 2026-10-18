import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Microbs dataset has a functional connectivity paper where they ask whether neurons that fire together wire
            together. The microns data set is impressive.
        </Paragraph>
    </Chapter>
);

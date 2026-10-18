import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Hey there! I have a question about datasets like these. Is the amount of JSON reasonable to open in RAM on a
            website and create some sort of index which represents the name of all the countries / cities/ lakes etc...
            and create a common bounding box for them, so that if someone were to select several of them, one could make
            a common bounding box for them all
        </Paragraph>
    </Chapter>
);

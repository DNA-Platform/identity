import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I want to animate this so that we get a rotation effect. Imagine animating this rose so that each whorl
            rotates clockwise the rest of the 60 degrees, and simultaneously expands so that the inner whorl increases
            to the size of the outwer whole. Using the scaling factor and rotation factor to invert the elements. And
            then the outer whole is going to, in this animation cycle have to fade away:
        </Paragraph>
    </Chapter>
);

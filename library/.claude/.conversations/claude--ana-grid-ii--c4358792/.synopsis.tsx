import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug Rubino and Ana are building a microstock art pipeline called DNA Patternity, focused on generating
            physically-grounded paper grain textures for sale as stock art. The primary deliverable is a self-contained
            HTML application that simulates dry media deposition on paper surfaces using real contact mechanics physics
            (Greenwood-Williamson contact model, Beer-Lambert opacity, fBm surface generation). Doug drives the
            technical and creative direction with deep engagement in the physics; Ana is the stock artist who will use
            the outputs commercially.
        </Paragraph>
    </Chapter>
);

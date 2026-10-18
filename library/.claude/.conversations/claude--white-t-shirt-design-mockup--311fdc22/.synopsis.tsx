import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, communicating in Russian, requested help creating a detailed AI prompt for generating a t-shirt
            mockup. They wanted to combine two images: a white t-shirt as the base and their own illustration to be
            placed in the chest area, referencing a provided example image. Claude provided two comprehensive prompt
            options - one focused on general AI image generation and another more technical approach for graphic design
            software like Photoshop. The first prompt included detailed specifications for the base t-shirt (white,
            front-facing view with natural fabric texture and lighting), precise placement instructions for the
            illustration (20-25cm width, positioned 5-7cm below neckline), and realistic rendering requirements (fabric
            texture overlay, color adjustment for white background, deformation following fabric folds). The technical
            alternative outlined a smart object workflow with specific layer techniques, blending modes, and opacity
            settings. Claude concluded by asking which prompt variant better suited the user's needs, demonstrating an
            understanding that the user might prefer different approaches depending on their intended AI tool or
            software platform.
        </Paragraph>
    </Chapter>
);

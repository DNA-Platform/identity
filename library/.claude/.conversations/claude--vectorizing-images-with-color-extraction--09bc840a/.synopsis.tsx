import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I have a hard task! This code vectorizes an image but it leaves it in black and white. We need to add in
            color extraction and then adding color back to the image without breaking this code. How might it be done?
            Analyze rather than write code at first, being aware of the complexity of the chalenge and the math nvolved:
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a wide-ranging discussion about Jon Stewart's return to The Daily Show, demonstrating
            genuine enthusiasm for Stewart as a comedian and political commentator. The conversation began with factual
            questions about when and why Stewart returned (February 2024, Monday nights, tied to the election cycle) and
            evolved into a substantive analytical discussion about Stewart's effectiveness, reach, and cultural
            significance.
        </Paragraph>
    </Chapter>
);

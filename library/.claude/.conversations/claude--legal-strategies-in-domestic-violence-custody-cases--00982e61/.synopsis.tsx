import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is researching legal strategies used in Russian custody cases involving a family situation. He
            identified himself as working on a project examining how legal systems function differently under
            authoritarian regimes compared to Western legal frameworks. The user emphasized the importance of
            understanding Russian legal realities through appropriate contextual priors rather than importing
            assumptions from American legal systems.
        </Paragraph>
    </Chapter>
);

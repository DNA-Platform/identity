import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is navigating a family situation involving Ana (his partner) and Ana's daughter. He overheard Ana
            discussing a situation where the daughter wanted to bring snacks to school to share with a specific group of
            friends. He was uncertain whether his being included in that conversation was intentional or accidental,
            raising a broader question about whether he is consistently included in parenting decisions or only catches
            them by chance.
        </Paragraph>
    </Chapter>
);

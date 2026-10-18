import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user initiated a project called "Russia" focused on researching Russian law, government, and media under
            authoritarian control. They explained they are involved in a Russian custody dispute where their fiancée Ana
            is recently divorced and facing a complex legal situation involving her children. The user emphasized the
            critical importance of understanding that standard Western legal assumptions cannot be applied to Russian
            institutional actors, who operate within or are beholden to the authoritarian regime.
        </Paragraph>
    </Chapter>
);

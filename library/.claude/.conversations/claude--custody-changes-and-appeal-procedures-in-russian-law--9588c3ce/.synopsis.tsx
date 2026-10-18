import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user consulted Claude about Russian legal procedures in the context of a custody case, specifically
            asking whether changes in custody initiated by someone named Maxim would constitute an appeal. Claude
            explained that such actions would not be procedural appeals but rather new lawsuits, counter-claims, or
            enforcement proceedings, depending on timing relative to court decisions. The user clarified they were
            trying to understand the scope of their legal team's offer, which included a flat rate for the current case
            and pro-bono work for any appeals.
        </Paragraph>
    </Chapter>
);

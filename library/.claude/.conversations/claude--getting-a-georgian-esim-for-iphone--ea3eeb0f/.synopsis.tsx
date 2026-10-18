import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user needed help obtaining a Georgian eSIM for their iPhone for long-term use while living in Georgia.
            They specifically wanted to avoid visiting physical stores due to personal circumstances. Claude researched
            both local Georgian carriers and international travel eSIM providers, recommending Magti as the best local
            option for long-term stays due to superior network coverage and local number benefits. The conversation
            focused on whether the user could complete the entire eSIM setup process online without store visits.
        </Paragraph>
    </Chapter>
);

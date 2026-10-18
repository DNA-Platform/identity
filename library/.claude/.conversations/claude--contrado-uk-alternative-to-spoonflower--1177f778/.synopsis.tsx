import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about British alternatives to Spoonflower where designers can sell their artwork on
            wallpaper with better commission rates. Claude used web search to identify several options, initially
            focusing on UK-based platforms. The primary candidate identified was Contrado, a UK-based print-on-demand
            service offering 20-25% commission (compared to Spoonflower's 10%) with wallpaper options and payment within
            10 days. When the user indicated they were looking for something more wallpaper-oriented, Claude searched
            for additional options including Print Me Pretty and Patternbank.
        </Paragraph>
    </Chapter>
);

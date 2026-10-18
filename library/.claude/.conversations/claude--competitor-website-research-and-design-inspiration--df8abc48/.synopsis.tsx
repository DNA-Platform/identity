import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked Claude to analyze a survey document from a previous conversation about competitors in the
            illustrated interactive maps space, then research and compile a ranked list of websites for design
            inspiration. The user is building a business at the intersection of illustration and interactivity for maps
            and wanted to see examples of how others in this space present their businesses, with emphasis on
            high-quality design both aesthetically and in business explanation clarity. Claude was instructed to include
            both direct competitors from the survey and creatively identify adjacent sites that would still provide
            valuable business perspective.
        </Paragraph>
    </Chapter>
);

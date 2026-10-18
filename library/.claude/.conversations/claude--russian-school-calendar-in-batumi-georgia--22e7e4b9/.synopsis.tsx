import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Russian language schools in Batumi, Georgia for two children and needed to
            understand the academic calendar, specifically the last day of school and whether early departure would be
            problematic. They mentioned Progress School as a benchmark and requested information about other options.
            Claude conducted extensive research using web search tools to identify Russian-sector schools in Batumi and
            determine their academic calendars.
        </Paragraph>
    </Chapter>
);

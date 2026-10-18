import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about purchasing Camel Crush cigarettes in Georgia (the country). They were looking for
            straightforward information about product availability in local stores rather than specialty shops. Claude
            used web search tools to investigate the availability, searching in both English and Georgian to provide
            comprehensive information. The research revealed that while Georgia is not subject to EU restrictions on
            crushball/menthol cigarettes (which were banned in the EU in 2020), the specific availability of Camel Crush
            in Georgian retail stores could not be definitively confirmed through online sources.
        </Paragraph>
    </Chapter>
);

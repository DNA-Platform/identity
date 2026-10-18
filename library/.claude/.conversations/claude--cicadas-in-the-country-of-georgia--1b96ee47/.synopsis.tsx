import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation began with a factual question about whether the country of Georgia has cicadas, with Doug
            establishing an important standing clarification: all projects and questions in this context refer to the
            country of Georgia, not the U.S. state. Claude confirmed that Georgia does have annual cicadas, primarily
            the ash cicada (Cicada orni) and related species common to the Caucasus and Mediterranean region, distinct
            from the periodical broods unique to North America. The conversation evolved into an extended discussion of
            cicada evolutionary biology, specifically the mechanisms behind periodical cicada synchronization and
            prime-number emergence cycles.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a technically sophisticated question about maintaining bidirectional links between
            documentation and source code at scale, specifically interested in systems where documentation references
            code and code references documentation. They named specific tools and paradigms — Doxygen, Rustdoc, literate
            programming, and doc-as-code — and framed their core concern around durability and maintenance: what
            survives at scale versus what rots, and how teams prevent links from breaking when either side changes.
        </Paragraph>
    </Chapter>
);

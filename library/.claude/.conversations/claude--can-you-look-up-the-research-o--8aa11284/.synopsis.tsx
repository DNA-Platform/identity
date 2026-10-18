import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research semantic primes, noting they had heard there were 65 of them, and
            requested an editable artifact presenting both a summary of the research and the primes organized by their
            canonical categories. Claude used web search and document retrieval tools to verify the count and retrieve
            the authoritative inventory before producing the document, rather than relying on memory alone.
        </Paragraph>
    </Chapter>
);

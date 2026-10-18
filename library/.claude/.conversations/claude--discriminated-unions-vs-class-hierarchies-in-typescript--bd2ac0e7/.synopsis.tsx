import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a concise, technical TypeScript question: when to prefer a discriminated union over a class
            hierarchy. They explicitly requested brevity—one or two sentences with no web search needed—indicating
            familiarity with the topic and a preference for direct, efficient answers without elaboration. Claude
            provided a two-sentence explanation contrasting the two approaches: discriminated unions suit closed, known
            variant sets where operations grow and exhaustive switch-checking is valuable, while class hierarchies suit
            open-ended, extensible variants where behavior is self-contained per type.
        </Paragraph>
    </Chapter>
);

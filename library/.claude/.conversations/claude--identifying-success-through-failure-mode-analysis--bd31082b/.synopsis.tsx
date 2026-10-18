import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centers on a research or mathematical project that has accumulated documented failure
            modes and iterative memory files designed to guide future Claude instances toward more productive behavior.
            The person asked Claude to analyze the project's associated memories to identify what success looks like,
            explicitly excluding reference to prior chat logs since those change, and focusing only on the stable memory
            record.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug, an American, sought legal strategy advice regarding a complex international family protection
            situation. His partner Ana and her children are currently in Georgia after fleeing a dangerous domestic
            situation in Russia, where Ana faces ongoing custody proceedings scheduled for February. Doug is paying
            $20,000 for legal representation to handle both the Russian custody case and cross-border legal
            consultation. The conversation focused on determining the best approach for securing legal protection in
            Georgia through humanitarian status application, exploring whether this should be handled by their current
            legal team or require specialized Georgian asylum lawyers.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person, who previously owned and operated an algorithmic trading hedge fund for four years focused on
            cryptocurrency, engaged in an extended technical conversation about building a systematic trading research
            framework using Storm Trade, a perpetuals DEX on the TON blockchain. The conversation began with
            foundational questions about Storm Trade's mechanics—available instruments, leverage up to 50x, fee
            structures, and how isolated margin functions—before evolving into a sophisticated discussion about signal
            generation, causal chain modeling, and a collaborative research-plus-execution architecture.
        </Paragraph>
    </Chapter>
);

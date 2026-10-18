import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana requested that Claude translate an article into Russian. The article, authored by Matt Levine (based on
            the content style and voice), discusses the intersection of prediction markets and journalism — specifically
            how prediction market contracts that use news publications as official oracles for determining outcomes
            create a financial incentive for bad actors to manipulate journalists. The piece references a real incident
            reported by Emanuel Fabian of the Times of Israel, in which he received threats after covering an Iranian
            rocket strike, because his specific word choice ("hit" vs. interceptor fragment) affected the outcome of a
            Polymarket contract worth significant sums.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is a Russian citizen living in Batumi, Georgia for a three-month stay with her two children. She engaged
            Claude as a personal financial consultant with the goal of tracking her spending, identifying unnecessary
            expenses, and building a more conscious budget. The conversation spanned several weeks of active work and
            evolved from initial analysis of a Credo Bank card statement into a comprehensive, ongoing expense tracking
            system with weekly receipt analysis.
        </Paragraph>
    </Chapter>
);

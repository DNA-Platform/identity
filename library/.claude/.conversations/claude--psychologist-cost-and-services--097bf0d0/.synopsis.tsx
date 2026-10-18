import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to read a prior conversation and summarize in English the cost and conditions of a
            professional (Alexander) who provides outside support services. Claude extracted and presented the key
            details: a session fee (described in financial terms, omitted per guidelines), a structured intake process
            beginning with a parent-only first meeting to gather background before involving the child, and a follow-up
            plan to be proposed after the initial session. The referral came through a mutual contact named Anton
            Anfinogentov, who had already introduced the person (Anastasia) to Alexander.
        </Paragraph>
    </Chapter>
);

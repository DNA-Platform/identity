import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug is working with Ana, who is involved in a complex international custody case in Russian
            courts. Doug serves as a strategic advisor helping Ana navigate legal proceedings against Maxim (Ana's
            ex-husband) regarding their two children. The conversation focused extensively on translating and analyzing
            Russian legal documents, including Ana's "Objections to Counterclaim" and "Statement on Clarification of
            Claims" filed in Moscow's Cheremushkinsky District Court, as well as Maxim's responsive filings including
            evidence objections and motions for interim measures.
        </Paragraph>
    </Chapter>
);

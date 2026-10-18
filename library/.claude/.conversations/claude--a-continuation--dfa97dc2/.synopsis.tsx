import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug introduced himself as a returning user who migrated from a lost account and domain, explaining that he
            had rebuilt his projects from scratch and added project files, a legacy conversation index, and a "Note to
            Self" to help Claude re-establish working context. His wife Ana also uses the account and works with Claude
            in Russian. Doug's initial request was for Claude to read all available project files and produce a
            detailed, editable artifact reflecting on the project, what is being accomplished, and Claude's role for
            both Doug and Ana — with Ana's section written in Russian.
        </Paragraph>
    </Chapter>
);

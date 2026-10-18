import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: I need you to help me prove something formally. It builds off Godel's first and second incompleteness
            theorems so could you please write a review of the results along with formal notation used to express those
            results. In particular, it's good to know terminology for Godel Numbering and the Provable relationship, and
            ultimately for the Godel Sentence itself. I happen to like the terminology from "A Friendly Introduction to
            Mathematical Logic" but Enderton is good too. Let's see if we can't restate theorems formally and reflect on
            them in a mix of formally and colloquially
        </Paragraph>
    </Chapter>
);

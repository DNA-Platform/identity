import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two sequential informational questions about the United States Electoral College system. In
            the first question, they sought a general explanation of how the Electoral College works and what motivates
            electors to vote in alignment with their state's popular vote outcome. Claude explained the structure (538
            total electors, apportioned by Congressional representation), the winner-take-all system used by 48 states
            versus the district-based allocation used by Maine and Nebraska, and the mechanisms that keep electors in
            line — including the party-loyal selection process, state enforcement laws, and the Supreme Court's 2020
            ruling in Chiafalo v. Washington.
        </Paragraph>
    </Chapter>
);

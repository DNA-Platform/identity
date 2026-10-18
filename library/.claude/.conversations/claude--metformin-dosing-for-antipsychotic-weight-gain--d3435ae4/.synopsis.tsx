import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about a wellness-related approach involving a specific dosing regimen — 2000 mg/day split
            into two equal doses — and whether this represents a standard protocol for managing weight concerns
            associated with a certain category of medications. Claude confirmed this is a common and well-supported
            target dose, citing clinical trial literature and meta-analyses showing meaningful weight reduction
            outcomes, and noted that 2000 mg/day is the most frequently used maintenance dose in relevant studies.
        </Paragraph>
    </Chapter>
);

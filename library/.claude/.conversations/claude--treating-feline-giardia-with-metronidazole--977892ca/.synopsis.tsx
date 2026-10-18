import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, Doug, has a neurobiology background and is currently managing a complex situation involving his
            two indoor Bengal cats who developed giardia after relocating from Long Island suburbs to Alanya, Turkey.
            Doug sought detailed veterinary guidance because his local veterinarian has poor English communication
            skills and doesn't provide thorough explanations, leaving Doug to essentially direct his own cats'
            treatment. The conversation focused extensively on giardia treatment protocols, with Claude confirming that
            the antibiotic Doug was thinking of is metronidazole (Flagyl), and that standard treatment duration is 5-7
            days for uncomplicated cases but 10-14 days for refractory cases like his cats experienced.
        </Paragraph>
    </Chapter>
);

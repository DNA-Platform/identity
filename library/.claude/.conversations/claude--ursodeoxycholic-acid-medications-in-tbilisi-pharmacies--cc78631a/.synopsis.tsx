import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is in Tbilisi, Georgia and sought help identifying pharmacy medications containing ursodeoxycholic acid
            (UDCA) for her cat, which a veterinarian named Sofya Starodubova prescribed. The treatment protocol
            specified 250 mg capsules dosed at 1/6 capsule once daily. Ana noted this was not her first conversation
            with Claude on this topic and that she already knew additional analogs existed beyond what was initially
            listed, indicating prior research and familiarity with the subject.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged Claude in an extensive legal analysis of a complex Russian custody case involving Ana, a
            mother who has relocated with her children while facing custody proceedings from the father, Max. The user
            demonstrated sophisticated legal thinking and had crafted what they described as a strategic 84-page
            document submitted to the Russian court as "written explanations with appendices" rather than formal
            evidence. This document was designed to inform the judge of serious criminal allegations while avoiding
            procedural violations that would occur from making formal criminal accusations in civil court.
        </Paragraph>
    </Chapter>
);

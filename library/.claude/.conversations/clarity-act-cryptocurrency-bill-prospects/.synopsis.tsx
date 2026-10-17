import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about the legislative prospects of the CLARITY Act, a major cryptocurrency market structure
            bill moving through the U.S. Senate. Claude conducted multiple web searches to provide a current status
            update and delivered a detailed briefing on where the bill stood as of September 15, at the time of the
            conversation.
        </Paragraph>
    </Chapter>
);

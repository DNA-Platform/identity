import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is considering relocating from Batumi to Tbilisi, Georgia with their partner Anna and Anna's two
            children. They expressed frustration with Batumi airport's reliability issues, having experienced flight
            cancellations due to wind conditions, and sought information about whether this is a recurring pattern.
            Claude confirmed through research that Batumi airport does experience weather-related cancellations more
            frequently than Tbilisi's larger, more reliable airport.
        </Paragraph>
    </Chapter>
);

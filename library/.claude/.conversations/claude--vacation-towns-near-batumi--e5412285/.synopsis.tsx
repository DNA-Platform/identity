import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centers on planning a coastal vacation in the country of Georgia for the person and their
            travel companion Ana. The person initially asked about towns near Batumi, and through clarifying exchanges
            established they want a beachfront rental with quiet beach access on the Black Sea coast. Claude initially
            misunderstood the geographic context (suggesting inland Tbilisi-area destinations) before correctly pivoting
            to the Batumi coastal strip. The final ranked recommendation settled on Gonio as the top pick for flat
            beachfront access and rental stock, followed by Kvariati's lower coastal strip, then Ureki as the sand-beach
            option at greater distance. An important refinement occurred mid-conversation: the person correctly pushed
            back on framing "sea view" as requiring elevation, clarifying that a beachfront apartment at ground level
            provides both view and access. The person wants quiet, walkable beach access, and a rentable apartment
            directly on the water.
        </Paragraph>
    </Chapter>
);

import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved iterative editing of an HTML artifact — a Spoonflower launch plan brief prepared
            by Ana for a person named Doug. The task was to update an existing artifact by adding five embedded images
            after a specific set of bullet points (about wallpaper panels, fabric yardage, and cartographic patterns)
            and incorporating information about a trend investigation showing increased interest in map and
            location-themed designs on Spoonflower.
        </Paragraph>
    </Chapter>
);

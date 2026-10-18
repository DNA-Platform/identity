import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Family ocean fishing trips in Batumi ]]( claude--Family ocean fishing trips in Batumi--bed6d2f9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 August 2026: <Means>$[[ Family ocean fishing trips in Batumi ]]( claude--Family ocean fishing trips in Batumi--bed6d2f9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

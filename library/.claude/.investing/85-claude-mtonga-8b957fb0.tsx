import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mtonga--8b957fb0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mtonga--8b957fb0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MTONGA ]]( claude--MTONGA--8b957fb0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ MTONGA ]]( claude--MTONGA--8b957fb0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

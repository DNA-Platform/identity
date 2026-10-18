import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--airports-near-batumi-with-moscow-flights--9a047389/.cover.tsx';
import TheSynopsis from '../.conversations/claude--airports-near-batumi-with-moscow-flights--9a047389/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

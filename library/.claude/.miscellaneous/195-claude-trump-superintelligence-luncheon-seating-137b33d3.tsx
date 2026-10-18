import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump superintelligence luncheon seating ]]( claude--Trump superintelligence luncheon seating--137b33d3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2026: <Means>$[[ Trump superintelligence luncheon seating ]]( claude--Trump superintelligence luncheon seating--137b33d3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

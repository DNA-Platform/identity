import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--trump-superintelligence-luncheon-seating--137b33d3/.cover.tsx';
import TheSynopsis from './claude--trump-superintelligence-luncheon-seating--137b33d3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump superintelligence luncheon seating ]]( claude--Trump superintelligence luncheon seating--137b33d3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Trump superintelligence luncheon seating ]]( claude--Trump superintelligence luncheon seating--137b33d3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

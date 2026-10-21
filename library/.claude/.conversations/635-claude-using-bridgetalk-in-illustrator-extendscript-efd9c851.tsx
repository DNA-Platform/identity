import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.cover.tsx';
import TheSynopsis from './claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[24 January 2025](2025-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Using BridgeTalk in Illustrator ExtendScript ]]( claude--Using BridgeTalk in Illustrator ExtendScript--efd9c851 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Using BridgeTalk in Illustrator ExtendScript ]]( claude--Using BridgeTalk in Illustrator ExtendScript--efd9c851 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--claude-the-cartographer--42c78ea0/.cover.tsx';
import TheSynopsis from './claude--claude-the-cartographer--42c78ea0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[28 March 2025](2025-03-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude the Cartographer ]]( claude--Claude the Cartographer--42c78ea0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 164 exchanges: <Means>$[[ Claude the Cartographer ]]( claude--Claude the Cartographer--42c78ea0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

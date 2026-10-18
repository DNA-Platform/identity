import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.cover.tsx';
import TheSynopsis from './claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[20 January 2026](2026-01-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gout attacks and alcoholism connection ]]( claude--Gout attacks and alcoholism connection--aa5cbbf8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Gout attacks and alcoholism connection ]]( claude--Gout attacks and alcoholism connection--aa5cbbf8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

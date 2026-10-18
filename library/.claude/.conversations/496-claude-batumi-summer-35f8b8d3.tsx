import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--batumi-summer--35f8b8d3/.cover.tsx';
import TheSynopsis from './claude--batumi-summer--35f8b8d3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[19 June 2026](2026-06-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 263 exchanges: <Means>$[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

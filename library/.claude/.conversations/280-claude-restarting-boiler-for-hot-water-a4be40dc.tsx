import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--restarting-boiler-for-hot-water--a4be40dc/.cover.tsx';
import TheSynopsis from './claude--restarting-boiler-for-hot-water--a4be40dc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Restarting boiler for hot water ]]( claude--Restarting boiler for hot water--a4be40dc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Restarting boiler for hot water ]]( claude--Restarting boiler for hot water--a4be40dc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

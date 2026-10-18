import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Restarting boiler for hot water ]]( claude--Restarting boiler for hot water--a4be40dc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 February 2026: <Means>$[[ Restarting boiler for hot water ]]( claude--Restarting boiler for hot water--a4be40dc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

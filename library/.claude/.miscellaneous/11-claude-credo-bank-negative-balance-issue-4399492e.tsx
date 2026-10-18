import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--credo-bank-negative-balance-issue--4399492e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credo-bank-negative-balance-issue--4399492e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo bank negative balance issue ]]( claude--Credo bank negative balance issue--4399492e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 March 2026: <Means>$[[ Credo bank negative balance issue ]]( claude--Credo bank negative balance issue--4399492e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

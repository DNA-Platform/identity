import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

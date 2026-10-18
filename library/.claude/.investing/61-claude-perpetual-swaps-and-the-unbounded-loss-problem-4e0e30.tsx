import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

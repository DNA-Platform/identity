import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.cover.tsx';
import TheSynopsis from './claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Perpetual swaps and the unbounded loss problem ]]( claude--Perpetual swaps and the unbounded loss problem--4e0e301e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

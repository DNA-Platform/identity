import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--sunny-kings-innovations-in-ton-and-monad--3b918cc5/.cover.tsx';
import TheSynopsis from './claude--sunny-kings-innovations-in-ton-and-monad--3b918cc5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's innovations in TON and Monad ]]( claude--Sunny King's innovations in TON and Monad--3b918cc5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Sunny King's innovations in TON and Monad ]]( claude--Sunny King's innovations in TON and Monad--3b918cc5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--sunny-kings-innovations-in-ton-and-monad--3b918cc5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sunny-kings-innovations-in-ton-and-monad--3b918cc5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's innovations in TON and Monad ]]( claude--Sunny King's innovations in TON and Monad--3b918cc5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Sunny King's innovations in TON and Monad ]]( claude--Sunny King's innovations in TON and Monad--3b918cc5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

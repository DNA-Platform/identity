import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--monad-unstaking-failing-in-atomic-wallet--eef8f474/.cover.tsx';
import TheSynopsis from './claude--monad-unstaking-failing-in-atomic-wallet--eef8f474/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad unstaking failing in Atomic Wallet ]]( claude--Monad unstaking failing in Atomic Wallet--eef8f474 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Monad unstaking failing in Atomic Wallet ]]( claude--Monad unstaking failing in Atomic Wallet--eef8f474 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

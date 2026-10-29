import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--monad-unstaking-failing-in-atomic-wallet--eef8f474/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-unstaking-failing-in-atomic-wallet--eef8f474/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad unstaking failing in Atomic Wallet ]]( claude--Monad unstaking failing in Atomic Wallet--eef8f474 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 August 2026: <Means>$[[ Monad unstaking failing in Atomic Wallet ]]( claude--Monad unstaking failing in Atomic Wallet--eef8f474 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

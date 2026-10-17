import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--macro-drivers-behind-the-crypto-spike--9c22a884/.cover.tsx';
import TheSynopsis from './claude--macro-drivers-behind-the-crypto-spike--9c22a884/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

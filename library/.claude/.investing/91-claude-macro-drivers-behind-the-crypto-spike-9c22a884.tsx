import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.cover.tsx';
import TheSynopsis from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

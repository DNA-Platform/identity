import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.cover.tsx';
import TheSynopsis from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Macro drivers behind the crypto spike ]]( claude--Macro drivers behind the crypto spike--9c22a884 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

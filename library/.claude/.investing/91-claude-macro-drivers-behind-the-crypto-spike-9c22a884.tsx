import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.cover.tsx';
import TheSynopsis from '../.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

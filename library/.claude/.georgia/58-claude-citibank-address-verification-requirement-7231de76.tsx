import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--citibank-address-verification-requirement--7231de76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--citibank-address-verification-requirement--7231de76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Citibank address verification requirement ]]( claude--Citibank address verification requirement--7231de76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Citibank address verification requirement ]]( claude--Citibank address verification requirement--7231de76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

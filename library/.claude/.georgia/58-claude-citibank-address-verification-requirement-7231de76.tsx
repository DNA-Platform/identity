import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--citibank-address-verification-requirement--7231de76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--citibank-address-verification-requirement--7231de76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Citibank address verification requirement ]]( claude--Citibank address verification requirement--7231de76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Citibank address verification requirement ]]( claude--Citibank address verification requirement--7231de76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

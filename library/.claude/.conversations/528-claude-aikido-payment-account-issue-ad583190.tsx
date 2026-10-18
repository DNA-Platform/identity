import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--aikido-payment-account-issue--ad583190/.cover.tsx';
import TheSynopsis from './claude--aikido-payment-account-issue--ad583190/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[5 October 2026](2026-10-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Aikido payment account issue ]]( claude--Aikido payment account issue--ad583190 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Aikido payment account issue ]]( claude--Aikido payment account issue--ad583190 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

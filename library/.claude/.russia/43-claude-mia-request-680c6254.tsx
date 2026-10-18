import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mia-request--680c6254/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mia-request--680c6254/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[21 August 2026](2026-08-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MIA Request ]]( claude--MIA Request--680c6254 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 August 2026: <Means>$[[ MIA Request ]]( claude--MIA Request--680c6254 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

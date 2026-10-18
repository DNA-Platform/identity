import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--saburtalo-power-outage-investigation--0f075700/.cover.tsx';
import TheSynopsis from './claude--saburtalo-power-outage-investigation--0f075700/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[23 July 2026](2026-07-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Saburtalo power outage investigation ]]( claude--Saburtalo power outage investigation--0f075700 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Saburtalo power outage investigation ]]( claude--Saburtalo power outage investigation--0f075700 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

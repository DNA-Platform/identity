import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--saburtalo-power-outage-investigation--0f075700/.cover.tsx';
import TheSynopsis from '../.conversations/claude--saburtalo-power-outage-investigation--0f075700/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Saburtalo power outage investigation ]]( claude--Saburtalo power outage investigation--0f075700 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 July 2026: <Means>$[[ Saburtalo power outage investigation ]]( claude--Saburtalo power outage investigation--0f075700 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

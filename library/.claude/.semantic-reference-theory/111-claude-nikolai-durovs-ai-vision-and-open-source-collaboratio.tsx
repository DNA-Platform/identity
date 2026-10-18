import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's AI vision and open source collaboration ]]( claude--Nikolai Durov's AI vision and open source collaboration--ba45edd6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Nikolai Durov's AI vision and open source collaboration ]]( claude--Nikolai Durov's AI vision and open source collaboration--ba45edd6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

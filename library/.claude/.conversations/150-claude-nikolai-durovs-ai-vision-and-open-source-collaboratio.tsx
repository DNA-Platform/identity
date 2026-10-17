import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.cover.tsx';
import TheSynopsis from './claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's AI vision and open source collaboration ]]( claude--Nikolai Durov's AI vision and open source collaboration--ba45edd6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Nikolai Durov's AI vision and open source collaboration ]]( claude--Nikolai Durov's AI vision and open source collaboration--ba45edd6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

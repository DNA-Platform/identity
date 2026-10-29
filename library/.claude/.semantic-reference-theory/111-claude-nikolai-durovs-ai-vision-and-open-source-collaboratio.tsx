import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

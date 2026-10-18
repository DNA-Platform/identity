import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.cover.tsx';
import TheSynopsis from './claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 23 exchanges: <Means>$[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.cover.tsx';
import TheSynopsis from '../.conversations/claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

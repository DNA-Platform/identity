import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.cover.tsx';
import TheSynopsis from '../.conversations/claude--automating-stock-art-uploads-to-adobe-stock--c5329f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--watching-harry-potter-with-russian-dubbing-and-english-subti--46768570/.cover.tsx';
import TheSynopsis from './claude--watching-harry-potter-with-russian-dubbing-and-english-subti--46768570/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Watching Harry Potter with Russian dubbing and English subtitles ]]( claude--Watching Harry Potter with Russian dubbing and English subtitles--46768570 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Watching Harry Potter with Russian dubbing and English subtitles ]]( claude--Watching Harry Potter with Russian dubbing and English subtitles--46768570 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--watching-harry-potter-with-russian-dubbing-and-english-subti--46768570/.cover.tsx';
import TheSynopsis from '../.conversations/claude--watching-harry-potter-with-russian-dubbing-and-english-subti--46768570/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Watching Harry Potter with Russian dubbing and English subtitles ]]( claude--Watching Harry Potter with Russian dubbing and English subtitles--46768570 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 June 2026: <Means>$[[ Watching Harry Potter with Russian dubbing and English subtitles ]]( claude--Watching Harry Potter with Russian dubbing and English subtitles--46768570 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

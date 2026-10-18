import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 July 2026: <Means>$[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

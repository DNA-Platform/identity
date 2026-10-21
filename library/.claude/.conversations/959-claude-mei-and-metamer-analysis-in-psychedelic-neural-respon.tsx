import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.cover.tsx';
import TheSynopsis from './claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[27 July 2026](2026-07-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 July 2026: <Means>$[[ MEI and metamer analysis in psychedelic neural responses ]]( claude--MEI and metamer analysis in psychedelic neural responses--30d86f04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

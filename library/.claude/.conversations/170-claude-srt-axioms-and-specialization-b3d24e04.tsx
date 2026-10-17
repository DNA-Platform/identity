import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--srt-axioms-and-specialization--b3d24e04/.cover.tsx';
import TheSynopsis from './claude--srt-axioms-and-specialization--b3d24e04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[13 June 2026](2026-06-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT Axioms &amp; Specialization ]]( claude--SRT Axioms &amp; Specialization--b3d24e04 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 194 exchanges: <Means>$[[ SRT Axioms &amp; Specialization ]]( claude--SRT Axioms &amp; Specialization--b3d24e04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

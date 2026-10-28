import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--srt-axioms-and-specialization--b3d24e04/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-axioms-and-specialization--b3d24e04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[6 June 2026](2026-06-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT Axioms &amp; Specialization ]]( claude--SRT Axioms &amp; Specialization--b3d24e04 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 June 2026: <Means>$[[ SRT Axioms &amp; Specialization ]]( claude--SRT Axioms &amp; Specialization--b3d24e04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

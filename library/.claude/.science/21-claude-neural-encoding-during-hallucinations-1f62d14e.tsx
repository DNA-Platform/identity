import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[16 September 2026](2026-09-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 September 2026: <Means>$[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--bilingual-index-strategy--91c59656/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bilingual-index-strategy--91c59656/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[28 January 2026](2026-01-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

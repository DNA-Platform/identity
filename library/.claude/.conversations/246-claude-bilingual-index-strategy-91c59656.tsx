import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bilingual-index-strategy--91c59656/.cover.tsx';
import TheSynopsis from './claude--bilingual-index-strategy--91c59656/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bilingual-index-strategy--91c59656/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bilingual-index-strategy--91c59656/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ Bilingual index strategy ]]( claude--Bilingual index strategy--91c59656 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

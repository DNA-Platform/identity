import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[24 May 2026](2026-05-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--febe219c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 May 2026: <Means>$[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--febe219c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

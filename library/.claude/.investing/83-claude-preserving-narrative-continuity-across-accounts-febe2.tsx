import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--febe219c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 May 2026: <Means>$[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--febe219c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--preserving-narrative-continuity-across-accounts--db506f2e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--preserving-narrative-continuity-across-accounts--db506f2e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--db506f2e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--db506f2e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

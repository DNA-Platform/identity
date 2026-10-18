import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--preserving-narrative-continuity-across-accounts--db506f2e/.cover.tsx';
import TheSynopsis from './claude--preserving-narrative-continuity-across-accounts--db506f2e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--db506f2e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Preserving narrative continuity across accounts ]]( claude--Preserving narrative continuity across accounts--db506f2e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

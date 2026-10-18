import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-6-december-2025--fd9951af/.cover.tsx';
import TheSynopsis from './claude--untitled-6-december-2025--fd9951af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[6 December 2025](2025-12-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 6 December 2025 ]]( claude--Untitled, 6 December 2025--fd9951af )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 6 December 2025 ]]( claude--Untitled, 6 December 2025--fd9951af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

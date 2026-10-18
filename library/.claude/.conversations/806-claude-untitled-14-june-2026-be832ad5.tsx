import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-14-june-2026--be832ad5/.cover.tsx';
import TheSynopsis from './claude--untitled-14-june-2026--be832ad5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 14 June 2026 ]]( claude--Untitled, 14 June 2026--be832ad5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Untitled, 14 June 2026 ]]( claude--Untitled, 14 June 2026--be832ad5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

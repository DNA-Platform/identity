import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-29-june-2026--8032960f/.cover.tsx';
import TheSynopsis from './claude--untitled-29-june-2026--8032960f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[29 June 2026](2026-06-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 29 June 2026 ]]( claude--Untitled, 29 June 2026--8032960f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Untitled, 29 June 2026 ]]( claude--Untitled, 29 June 2026--8032960f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

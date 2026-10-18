import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-23-june-2026--c207b4c8/.cover.tsx';
import TheSynopsis from './claude--untitled-23-june-2026--c207b4c8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[24 June 2026](2026-06-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 23 June 2026 ]]( claude--Untitled, 23 June 2026--c207b4c8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Untitled, 23 June 2026 ]]( claude--Untitled, 23 June 2026--c207b4c8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

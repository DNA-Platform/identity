import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-17-june-2026--f64ef1cd/.cover.tsx';
import TheSynopsis from './claude--untitled-17-june-2026--f64ef1cd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 17 June 2026 ]]( claude--Untitled, 17 June 2026--f64ef1cd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Untitled, 17 June 2026 ]]( claude--Untitled, 17 June 2026--f64ef1cd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

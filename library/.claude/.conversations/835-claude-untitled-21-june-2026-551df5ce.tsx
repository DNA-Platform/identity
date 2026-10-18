import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-21-june-2026--551df5ce/.cover.tsx';
import TheSynopsis from './claude--untitled-21-june-2026--551df5ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 21 June 2026 ]]( claude--Untitled, 21 June 2026--551df5ce )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 21 June 2026 ]]( claude--Untitled, 21 June 2026--551df5ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

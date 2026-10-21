import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--conflict-resolution-strategies-for-couples--79c6481c/.cover.tsx';
import TheSynopsis from './claude--conflict-resolution-strategies-for-couples--79c6481c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[25 January 2026](2026-01-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conflict resolution strategies for couples ]]( claude--Conflict resolution strategies for couples--79c6481c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Conflict resolution strategies for couples ]]( claude--Conflict resolution strategies for couples--79c6481c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

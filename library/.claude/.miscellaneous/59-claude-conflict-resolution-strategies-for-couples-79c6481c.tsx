import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--conflict-resolution-strategies-for-couples--79c6481c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--conflict-resolution-strategies-for-couples--79c6481c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[25 January 2026](2026-01-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conflict resolution strategies for couples ]]( claude--Conflict resolution strategies for couples--79c6481c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 January 2026: <Means>$[[ Conflict resolution strategies for couples ]]( claude--Conflict resolution strategies for couples--79c6481c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--conflict-resolution-strategies-for-couples--79c6481c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--conflict-resolution-strategies-for-couples--79c6481c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

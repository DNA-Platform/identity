import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantics-of-representation--8b14b84b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantics-of-representation--8b14b84b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[10 September 2026](2026-09-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 September 2026: <Means>$[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

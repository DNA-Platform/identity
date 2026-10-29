import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantics-of-representation--8b14b84b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantics-of-representation--8b14b84b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

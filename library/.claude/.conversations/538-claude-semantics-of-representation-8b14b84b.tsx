import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--semantics-of-representation--8b14b84b/.cover.tsx';
import TheSynopsis from './claude--semantics-of-representation--8b14b84b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[11 September 2026](2026-09-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 64 exchanges: <Means>$[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

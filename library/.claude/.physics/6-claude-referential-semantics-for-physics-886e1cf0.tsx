import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--referential-semantics-for-physics--886e1cf0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--referential-semantics-for-physics--886e1cf0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[1 March 2026](2026-03-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Referential Semantics for Physics ]]( claude--Referential Semantics for Physics--886e1cf0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 March 2026: <Means>$[[ Referential Semantics for Physics ]]( claude--Referential Semantics for Physics--886e1cf0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

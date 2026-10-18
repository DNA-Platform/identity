import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--referential-semantics-for-physics--886e1cf0/.cover.tsx';
import TheSynopsis from './claude--referential-semantics-for-physics--886e1cf0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[6 March 2026](2026-03-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Referential Semantics for Physics ]]( claude--Referential Semantics for Physics--886e1cf0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 307 exchanges: <Means>$[[ Referential Semantics for Physics ]]( claude--Referential Semantics for Physics--886e1cf0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

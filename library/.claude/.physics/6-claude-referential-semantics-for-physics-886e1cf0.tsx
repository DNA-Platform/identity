import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
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

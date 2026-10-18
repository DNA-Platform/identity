import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--referential-semantics-for-objective-mechanics--03d00b2c/.cover.tsx';
import TheSynopsis from './claude--referential-semantics-for-objective-mechanics--03d00b2c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[1 March 2026](2026-03-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Referential Semantics for Objective Mechanics ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 384 exchanges: <Means>$[[ Referential Semantics for Objective Mechanics ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

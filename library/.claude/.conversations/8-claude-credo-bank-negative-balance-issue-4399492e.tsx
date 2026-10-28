import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--credo-bank-negative-balance-issue--4399492e/.cover.tsx';
import TheSynopsis from './claude--credo-bank-negative-balance-issue--4399492e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[31 March 2026](2026-03-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo bank negative balance issue ]]( claude--Credo bank negative balance issue--4399492e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 90 exchanges: <Means>$[[ Credo bank negative balance issue ]]( claude--Credo bank negative balance issue--4399492e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

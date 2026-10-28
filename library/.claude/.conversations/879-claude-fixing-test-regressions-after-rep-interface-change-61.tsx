import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.cover.tsx';
import TheSynopsis from './claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[7 November 2025](2025-11-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fixing test regressions after $Rep interface change ]]( claude--Fixing test regressions after $Rep interface change--61fddd82 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Fixing test regressions after $Rep interface change ]]( claude--Fixing test regressions after $Rep interface change--61fddd82 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

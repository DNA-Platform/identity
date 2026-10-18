import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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

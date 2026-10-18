import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.cover.tsx';
import TheSynopsis from '../.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fixing test regressions after $Rep interface change ]]( claude--Fixing test regressions after $Rep interface change--61fddd82 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 November 2025: <Means>$[[ Fixing test regressions after $Rep interface change ]]( claude--Fixing test regressions after $Rep interface change--61fddd82 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Terro ant traps in Georgia ]]( claude--Finding Terro ant traps in Georgia--3e6e4545 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Finding Terro ant traps in Georgia ]]( claude--Finding Terro ant traps in Georgia--3e6e4545 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

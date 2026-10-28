import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[29 March 2026](2026-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Terro ant traps in Georgia ]]( claude--Finding Terro ant traps in Georgia--3e6e4545 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Finding Terro ant traps in Georgia ]]( claude--Finding Terro ant traps in Georgia--3e6e4545 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

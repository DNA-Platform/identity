import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-philosophy--f8c40c37/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-philosophy--f8c40c37/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 June 2026: <Means>$[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

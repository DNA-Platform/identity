import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--claude-philosophy--f8c40c37/.cover.tsx';
import TheSynopsis from './claude--claude-philosophy--f8c40c37/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

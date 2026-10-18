import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chemistry-vs-react-components-comparison--460e0155/.cover.tsx';
import TheSynopsis from './claude--chemistry-vs-react-components-comparison--460e0155/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[1 November 2025](2025-11-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry vs React components comparison ]]( claude--Chemistry vs React components comparison--460e0155 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Chemistry vs React components comparison ]]( claude--Chemistry vs React components comparison--460e0155 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

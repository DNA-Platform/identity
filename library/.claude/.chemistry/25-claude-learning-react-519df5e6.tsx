import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--learning-react--519df5e6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-react--519df5e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[3 September 2025](2025-09-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning React ]]( claude--Learning React--519df5e6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 September 2025: <Means>$[[ Learning React ]]( claude--Learning React--519df5e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

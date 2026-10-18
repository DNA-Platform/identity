import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--learning-react--519df5e6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-react--519df5e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning React ]]( claude--Learning React--519df5e6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 September 2025: <Means>$[[ Learning React ]]( claude--Learning React--519df5e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

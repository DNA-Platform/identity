import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-programming--401768b2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-programming--401768b2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude &gt; Programming ]]( claude--Claude &gt; Programming--401768b2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 June 2026: <Means>$[[ Claude &gt; Programming ]]( claude--Claude &gt; Programming--401768b2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

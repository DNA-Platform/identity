import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cold-smoked salmon identification ]]( claude--Cold-smoked salmon identification--25ff8f54 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Cold-smoked salmon identification ]]( claude--Cold-smoked salmon identification--25ff8f54 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

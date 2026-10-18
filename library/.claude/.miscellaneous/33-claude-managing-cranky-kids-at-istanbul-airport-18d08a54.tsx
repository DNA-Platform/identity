import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.cover.tsx';
import TheSynopsis from '../.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing cranky kids at Istanbul airport ]]( claude--Managing cranky kids at Istanbul airport--18d08a54 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Managing cranky kids at Istanbul airport ]]( claude--Managing cranky kids at Istanbul airport--18d08a54 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

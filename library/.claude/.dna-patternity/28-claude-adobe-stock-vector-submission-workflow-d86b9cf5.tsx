import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adobe Stock vector submission workflow ]]( claude--Adobe Stock vector submission workflow--d86b9cf5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 March 2026: <Means>$[[ Adobe Stock vector submission workflow ]]( claude--Adobe Stock vector submission workflow--d86b9cf5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

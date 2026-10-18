import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 February 2026: <Means>$[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

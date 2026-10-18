import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nancy-visualization--99948077/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nancy-visualization--99948077/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 June 2026: <Means>$[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

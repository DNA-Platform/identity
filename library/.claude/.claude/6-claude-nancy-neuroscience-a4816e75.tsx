import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nancy-neuroscience--a4816e75/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nancy-neuroscience--a4816e75/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nancy &gt; Neuroscience ]]( claude--Nancy &gt; Neuroscience--a4816e75 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 June 2026: <Means>$[[ Nancy &gt; Neuroscience ]]( claude--Nancy &gt; Neuroscience--a4816e75 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

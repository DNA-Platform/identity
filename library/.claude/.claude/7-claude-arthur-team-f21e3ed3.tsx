import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--arthur-team--f21e3ed3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--arthur-team--f21e3ed3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 June 2026: <Means>$[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

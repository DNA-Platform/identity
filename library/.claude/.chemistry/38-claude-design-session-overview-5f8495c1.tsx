import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--design-session-overview--5f8495c1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--design-session-overview--5f8495c1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Design session overview ]]( claude--Design session overview--5f8495c1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 October 2025: <Means>$[[ Design session overview ]]( claude--Design session overview--5f8495c1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

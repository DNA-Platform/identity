import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemical-bond-constructors--cb323045/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemical-bond-constructors--cb323045/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemical bond constructors ]]( claude--Chemical bond constructors--cb323045 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 September 2025: <Means>$[[ Chemical bond constructors ]]( claude--Chemical bond constructors--cb323045 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

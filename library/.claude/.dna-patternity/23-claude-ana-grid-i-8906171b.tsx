import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ana-grid-i--8906171b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ana-grid-i--8906171b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana Grid I ]]( claude--Ana Grid I--8906171b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 March 2026: <Means>$[[ Ana Grid I ]]( claude--Ana Grid I--8906171b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--good-morning--3e5346a6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--good-morning--3e5346a6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

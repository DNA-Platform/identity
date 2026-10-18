import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.cover.tsx';
import TheSynopsis from './claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

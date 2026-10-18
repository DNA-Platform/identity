import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--a-continuation--96b135d1/.cover.tsx';
import TheSynopsis from './claude--a-continuation--96b135d1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ A Continuation... ]]( claude--A Continuation......--96b135d1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ A Continuation... ]]( claude--A Continuation......--96b135d1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

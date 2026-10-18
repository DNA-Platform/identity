import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--a-continuation--34027dae/.cover.tsx';
import TheSynopsis from './claude--a-continuation--34027dae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ A Continuation... ]]( claude--A Continuation......--34027dae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ A Continuation... ]]( claude--A Continuation......--34027dae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

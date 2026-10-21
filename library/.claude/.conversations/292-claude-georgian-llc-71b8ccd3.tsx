import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-llc--71b8ccd3/.cover.tsx';
import TheSynopsis from './claude--georgian-llc--71b8ccd3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 62 exchanges: <Means>$[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

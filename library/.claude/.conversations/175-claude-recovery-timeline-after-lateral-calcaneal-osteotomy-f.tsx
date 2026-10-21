import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.cover.tsx';
import TheSynopsis from './claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[17 July 2026](2026-07-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Recovery timeline after lateral calcaneal osteotomy ]]( claude--Recovery timeline after lateral calcaneal osteotomy--f1e2d5eb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Recovery timeline after lateral calcaneal osteotomy ]]( claude--Recovery timeline after lateral calcaneal osteotomy--f1e2d5eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

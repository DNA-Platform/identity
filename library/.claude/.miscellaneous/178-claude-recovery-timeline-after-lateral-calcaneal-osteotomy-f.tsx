import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[3 July 2026](2026-07-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Recovery timeline after lateral calcaneal osteotomy ]]( claude--Recovery timeline after lateral calcaneal osteotomy--f1e2d5eb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 July 2026: <Means>$[[ Recovery timeline after lateral calcaneal osteotomy ]]( claude--Recovery timeline after lateral calcaneal osteotomy--f1e2d5eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

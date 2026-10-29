import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

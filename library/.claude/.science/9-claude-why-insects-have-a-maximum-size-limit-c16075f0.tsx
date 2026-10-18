import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

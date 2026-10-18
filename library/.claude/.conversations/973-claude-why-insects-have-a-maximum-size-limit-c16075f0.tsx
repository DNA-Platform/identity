import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--why-insects-have-a-maximum-size-limit--c16075f0/.cover.tsx';
import TheSynopsis from './claude--why-insects-have-a-maximum-size-limit--c16075f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

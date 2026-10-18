import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ Why insects have a maximum size limit ]]( claude--Why insects have a maximum size limit--c16075f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

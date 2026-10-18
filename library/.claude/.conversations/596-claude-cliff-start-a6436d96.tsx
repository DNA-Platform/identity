import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--cliff-start--a6436d96/.cover.tsx';
import TheSynopsis from './claude--cliff-start--a6436d96/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cliff_start ]]( claude--Cliff_start--a6436d96 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 94 exchanges: <Means>$[[ Cliff_start ]]( claude--Cliff_start--a6436d96 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

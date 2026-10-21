import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--penelopes-symptoms-and-treatment--db0b30ef/.cover.tsx';
import TheSynopsis from './claude--penelopes-symptoms-and-treatment--db0b30ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Penelope's symptoms and treatment ]]( claude--Penelope's symptoms and treatment--db0b30ef )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Penelope's symptoms and treatment ]]( claude--Penelope's symptoms and treatment--db0b30ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

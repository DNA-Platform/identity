import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--psychologist-cost-and-services--097bf0d0/.cover.tsx';
import TheSynopsis from './claude--psychologist-cost-and-services--097bf0d0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[30 September 2026](2026-09-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

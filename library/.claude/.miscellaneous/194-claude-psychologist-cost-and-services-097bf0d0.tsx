import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[30 September 2026](2026-09-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 September 2026: <Means>$[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

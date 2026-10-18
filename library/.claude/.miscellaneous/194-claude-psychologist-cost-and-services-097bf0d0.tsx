import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 September 2026: <Means>$[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

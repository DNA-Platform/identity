import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[25 April 2026](2026-04-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 April 2026: <Means>$[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

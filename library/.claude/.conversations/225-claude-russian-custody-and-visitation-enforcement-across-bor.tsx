import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.cover.tsx';
import TheSynopsis from './claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[25 April 2026](2026-04-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

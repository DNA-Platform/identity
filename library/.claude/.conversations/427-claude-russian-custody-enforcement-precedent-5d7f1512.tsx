import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-custody-enforcement-precedent--5d7f1512/.cover.tsx';
import TheSynopsis from './claude--russian-custody-enforcement-precedent--5d7f1512/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[9 October 2026](2026-10-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody enforcement precedent ]]( claude--Russian custody enforcement precedent--5d7f1512 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Russian custody enforcement precedent ]]( claude--Russian custody enforcement precedent--5d7f1512 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

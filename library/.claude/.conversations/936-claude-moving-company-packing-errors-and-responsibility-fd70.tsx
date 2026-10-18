import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.cover.tsx';
import TheSynopsis from './claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving company packing errors and responsibility ]]( claude--Moving company packing errors and responsibility--fd70a6d6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Moving company packing errors and responsibility ]]( claude--Moving company packing errors and responsibility--fd70a6d6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

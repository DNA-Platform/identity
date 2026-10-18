import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving company packing errors and responsibility ]]( claude--Moving company packing errors and responsibility--fd70a6d6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Moving company packing errors and responsibility ]]( claude--Moving company packing errors and responsibility--fd70a6d6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

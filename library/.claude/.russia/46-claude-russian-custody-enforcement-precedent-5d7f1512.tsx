import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody enforcement precedent ]]( claude--Russian custody enforcement precedent--5d7f1512 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 October 2026: <Means>$[[ Russian custody enforcement precedent ]]( claude--Russian custody enforcement precedent--5d7f1512 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

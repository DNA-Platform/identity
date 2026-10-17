import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-vs-us-taxes--0b92edb0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-vs-us-taxes--0b92edb0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian vs US Taxes ]]( claude--Russian vs US Taxes--0b92edb0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Russian vs US Taxes ]]( claude--Russian vs US Taxes--0b92edb0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

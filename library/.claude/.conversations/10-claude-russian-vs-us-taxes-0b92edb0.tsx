import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-vs-us-taxes--0b92edb0/.cover.tsx';
import TheSynopsis from './claude--russian-vs-us-taxes--0b92edb0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian vs US Taxes ]]( claude--Russian vs US Taxes--0b92edb0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Russian vs US Taxes ]]( claude--Russian vs US Taxes--0b92edb0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

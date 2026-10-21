import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.cover.tsx';
import TheSynopsis from './claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[17 January 2026](2026-01-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bengal cat gastrointestinal issues in Turkey ]]( claude--Bengal cat gastrointestinal issues in Turkey--20719cfc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 47 exchanges: <Means>$[[ Bengal cat gastrointestinal issues in Turkey ]]( claude--Bengal cat gastrointestinal issues in Turkey--20719cfc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

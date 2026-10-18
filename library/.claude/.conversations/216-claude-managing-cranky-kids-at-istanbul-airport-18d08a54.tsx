import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.cover.tsx';
import TheSynopsis from './claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing cranky kids at Istanbul airport ]]( claude--Managing cranky kids at Istanbul airport--18d08a54 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Managing cranky kids at Istanbul airport ]]( claude--Managing cranky kids at Istanbul airport--18d08a54 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

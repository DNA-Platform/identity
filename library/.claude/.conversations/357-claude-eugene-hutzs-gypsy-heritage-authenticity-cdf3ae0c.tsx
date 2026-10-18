import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.cover.tsx';
import TheSynopsis from './claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[8 June 2026](2026-06-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--our-that-has-told-us-to-give-o--fa248006/.cover.tsx';
import TheSynopsis from './claude--our-that-has-told-us-to-give-o--fa248006/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Our that has told us to give o… ]]( claude--Our that has told us to give o…--fa248006 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Our that has told us to give o… ]]( claude--Our that has told us to give o…--fa248006 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

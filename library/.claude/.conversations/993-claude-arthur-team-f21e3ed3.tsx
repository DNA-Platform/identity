import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--arthur-team--f21e3ed3/.cover.tsx';
import TheSynopsis from './claude--arthur-team--f21e3ed3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

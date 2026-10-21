import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-project--c0f5ecaf/.cover.tsx';
import TheSynopsis from './claude--the-project--c0f5ecaf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Project ]]( claude--The Project--c0f5ecaf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ The Project ]]( claude--The Project--c0f5ecaf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

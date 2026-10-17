import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-semantics-of-dictotomy--dc0018c1/.cover.tsx';
import TheSynopsis from './claude--the-semantics-of-dictotomy--dc0018c1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[29 September 2025](2025-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Dictotomy ]]( claude--The Semantics of Dictotomy--dc0018c1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 138 exchanges: <Means>$[[ The Semantics of Dictotomy ]]( claude--The Semantics of Dictotomy--dc0018c1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

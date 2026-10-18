import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-semantics-of-dictotomy--dc0018c1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-semantics-of-dictotomy--dc0018c1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[29 September 2025](2025-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Dictotomy ]]( claude--The Semantics of Dictotomy--dc0018c1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2025: <Means>$[[ The Semantics of Dictotomy ]]( claude--The Semantics of Dictotomy--dc0018c1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

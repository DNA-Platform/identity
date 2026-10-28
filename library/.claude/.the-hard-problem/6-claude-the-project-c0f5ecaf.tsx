import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--the-project--c0f5ecaf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-project--c0f5ecaf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[11 September 2026](2026-09-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Project ]]( claude--The Project--c0f5ecaf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 September 2026: <Means>$[[ The Project ]]( claude--The Project--c0f5ecaf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

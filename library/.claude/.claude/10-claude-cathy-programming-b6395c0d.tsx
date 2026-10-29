import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--cathy-programming--b6395c0d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cathy-programming--b6395c0d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cathy &gt; Programming ]]( claude--Cathy &gt; Programming--b6395c0d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2026: <Means>$[[ Cathy &gt; Programming ]]( claude--Cathy &gt; Programming--b6395c0d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cathy-programming--b6395c0d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cathy-programming--b6395c0d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cathy &gt; Programming ]]( claude--Cathy &gt; Programming--b6395c0d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2026: <Means>$[[ Cathy &gt; Programming ]]( claude--Cathy &gt; Programming--b6395c0d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

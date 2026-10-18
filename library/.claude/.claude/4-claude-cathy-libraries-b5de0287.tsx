import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cathy-libraries--b5de0287/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cathy-libraries--b5de0287/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cathy &gt; Libraries ]]( claude--Cathy &gt; Libraries--b5de0287 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 June 2026: <Means>$[[ Cathy &gt; Libraries ]]( claude--Cathy &gt; Libraries--b5de0287 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

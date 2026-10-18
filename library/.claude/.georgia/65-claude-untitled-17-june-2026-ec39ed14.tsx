import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--untitled-17-june-2026--ec39ed14/.cover.tsx';
import TheSynopsis from '../.conversations/claude--untitled-17-june-2026--ec39ed14/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 17 June 2026 ]]( claude--Untitled, 17 June 2026--ec39ed14 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ Untitled, 17 June 2026 ]]( claude--Untitled, 17 June 2026--ec39ed14 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

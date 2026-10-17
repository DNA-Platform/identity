import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--verbatim-text-artifact--5c9cbedf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--verbatim-text-artifact--5c9cbedf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Verbatim text artifact ]]( claude--Verbatim text artifact--5c9cbedf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 October 2025: <Means>$[[ Verbatim text artifact ]]( claude--Verbatim text artifact--5c9cbedf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

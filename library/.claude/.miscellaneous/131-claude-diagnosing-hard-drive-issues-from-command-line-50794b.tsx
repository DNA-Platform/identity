import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.cover.tsx';
import TheSynopsis from '../.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Diagnosing hard drive issues from command line ]]( claude--Diagnosing hard drive issues from command line--50794b73 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ Diagnosing hard drive issues from command line ]]( claude--Diagnosing hard drive issues from command line--50794b73 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

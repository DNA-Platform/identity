import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.cover.tsx';
import TheSynopsis from './claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[21 April 2026](2026-04-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Diagnosing hard drive issues from command line ]]( claude--Diagnosing hard drive issues from command line--50794b73 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 100 exchanges: <Means>$[[ Diagnosing hard drive issues from command line ]]( claude--Diagnosing hard drive issues from command line--50794b73 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

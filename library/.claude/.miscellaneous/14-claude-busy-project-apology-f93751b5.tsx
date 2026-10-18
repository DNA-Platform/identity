import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--busy-project-apology--f93751b5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--busy-project-apology--f93751b5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Busy Project Apology ]]( claude--Busy Project Apology--f93751b5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Busy Project Apology ]]( claude--Busy Project Apology--f93751b5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

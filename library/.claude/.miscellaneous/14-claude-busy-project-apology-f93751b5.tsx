import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--busy-project-apology--f93751b5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--busy-project-apology--f93751b5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[2 September 2025](2025-09-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Busy Project Apology ]]( claude--Busy Project Apology--f93751b5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Busy Project Apology ]]( claude--Busy Project Apology--f93751b5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

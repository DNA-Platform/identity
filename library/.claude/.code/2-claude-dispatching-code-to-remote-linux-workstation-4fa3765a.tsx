import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[24 September 2026](2026-09-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dispatching code to remote Linux workstation ]]( claude--Dispatching code to remote Linux workstation--4fa3765a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 September 2026: <Means>$[[ Dispatching code to remote Linux workstation ]]( claude--Dispatching code to remote Linux workstation--4fa3765a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dispatching code to remote Linux workstation ]]( claude--Dispatching code to remote Linux workstation--4fa3765a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 September 2026: <Means>$[[ Dispatching code to remote Linux workstation ]]( claude--Dispatching code to remote Linux workstation--4fa3765a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

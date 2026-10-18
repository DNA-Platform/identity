import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--autohotkey-taskbar-control-script--f72c8a89/.cover.tsx';
import TheSynopsis from './claude--autohotkey-taskbar-control-script--f72c8a89/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[17 March 2025](2025-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AutoHotkey Taskbar Control Script ]]( claude--AutoHotkey Taskbar Control Script--f72c8a89 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ AutoHotkey Taskbar Control Script ]]( claude--AutoHotkey Taskbar Control Script--f72c8a89 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

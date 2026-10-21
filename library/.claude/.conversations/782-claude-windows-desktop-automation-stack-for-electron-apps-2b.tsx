import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--windows-desktop-automation-stack-for-electron-apps--2b627244/.cover.tsx';
import TheSynopsis from './claude--windows-desktop-automation-stack-for-electron-apps--2b627244/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Windows desktop automation stack for Electron apps ]]( claude--Windows desktop automation stack for Electron apps--2b627244 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Windows desktop automation stack for Electron apps ]]( claude--Windows desktop automation stack for Electron apps--2b627244 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

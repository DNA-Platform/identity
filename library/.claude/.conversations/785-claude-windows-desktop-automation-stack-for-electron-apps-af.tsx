import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.cover.tsx';
import TheSynopsis from './claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Windows desktop automation stack for Electron apps ]]( claude--Windows desktop automation stack for Electron apps--afcda8cf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Windows desktop automation stack for Electron apps ]]( claude--Windows desktop automation stack for Electron apps--afcda8cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

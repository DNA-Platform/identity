import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.cover.tsx';
import TheSynopsis from './claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Enabling Chrome DevTools Protocol on running Electron MSIX apps ]]( claude--Enabling Chrome DevTools Protocol on running Electron MSIX apps--29c03f09 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Enabling Chrome DevTools Protocol on running Electron MSIX apps ]]( claude--Enabling Chrome DevTools Protocol on running Electron MSIX apps--29c03f09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

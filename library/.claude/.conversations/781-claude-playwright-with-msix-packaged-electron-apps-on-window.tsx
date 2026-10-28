import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--playwright-with-msix-packaged-electron-apps-on-windows-11--db784860/.cover.tsx';
import TheSynopsis from './claude--playwright-with-msix-packaged-electron-apps-on-windows-11--db784860/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Playwright with MSIX-packaged Electron apps on Windows 11 ]]( claude--Playwright with MSIX-packaged Electron apps on Windows 11--db784860 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Playwright with MSIX-packaged Electron apps on Windows 11 ]]( claude--Playwright with MSIX-packaged Electron apps on Windows 11--db784860 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

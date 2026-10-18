import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.cover.tsx';
import TheSynopsis from './claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Connecting to MSIX Electron app via connectOverCDP ]]( claude--Connecting to MSIX Electron app via connectOverCDP--3bc9029a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Connecting to MSIX Electron app via connectOverCDP ]]( claude--Connecting to MSIX Electron app via connectOverCDP--3bc9029a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

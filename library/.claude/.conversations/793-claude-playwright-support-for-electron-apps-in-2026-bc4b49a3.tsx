import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.cover.tsx';
import TheSynopsis from './claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Playwright support for Electron apps in 2026 ]]( claude--Playwright support for Electron apps in 2026--bc4b49a3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Playwright support for Electron apps in 2026 ]]( claude--Playwright support for Electron apps in 2026--bc4b49a3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

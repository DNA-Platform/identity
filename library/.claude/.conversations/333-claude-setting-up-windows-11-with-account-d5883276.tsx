import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--setting-up-windows-11-with-account--d5883276/.cover.tsx';
import TheSynopsis from './claude--setting-up-windows-11-with-account--d5883276/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[9 May 2026](2026-05-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up Windows 11 with account ]]( claude--Setting up Windows 11 with account--d5883276 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Setting up Windows 11 with account ]]( claude--Setting up Windows 11 with account--d5883276 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

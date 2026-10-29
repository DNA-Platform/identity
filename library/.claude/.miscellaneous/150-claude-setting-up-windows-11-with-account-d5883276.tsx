import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--setting-up-windows-11-with-account--d5883276/.cover.tsx';
import TheSynopsis from '../.conversations/claude--setting-up-windows-11-with-account--d5883276/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up Windows 11 with account ]]( claude--Setting up Windows 11 with account--d5883276 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Setting up Windows 11 with account ]]( claude--Setting up Windows 11 with account--d5883276 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

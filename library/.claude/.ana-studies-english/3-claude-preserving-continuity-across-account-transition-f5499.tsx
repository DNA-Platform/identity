import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--preserving-continuity-across-account-transition--f54999bb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--preserving-continuity-across-account-transition--f54999bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

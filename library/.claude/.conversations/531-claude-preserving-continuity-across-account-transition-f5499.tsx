import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--preserving-continuity-across-account-transition--f54999bb/.cover.tsx';
import TheSynopsis from './claude--preserving-continuity-across-account-transition--f54999bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

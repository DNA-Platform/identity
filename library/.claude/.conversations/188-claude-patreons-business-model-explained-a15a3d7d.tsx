import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--patreons-business-model-explained--a15a3d7d/.cover.tsx';
import TheSynopsis from './claude--patreons-business-model-explained--a15a3d7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[29 March 2026](2026-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

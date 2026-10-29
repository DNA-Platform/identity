import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--patreons-business-model-explained--a15a3d7d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--patreons-business-model-explained--a15a3d7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[29 March 2026](2026-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

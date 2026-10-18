import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--patreons-business-model-explained--a15a3d7d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--patreons-business-model-explained--a15a3d7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Patreon's business model explained ]]( claude--Patreon's business model explained--a15a3d7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nikolai-durovs-research-at-steklov-institute--6946d851/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nikolai-durovs-research-at-steklov-institute--6946d851/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's research at Steklov Institute ]]( claude--Nikolai Durov's research at Steklov Institute--6946d851 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Nikolai Durov's research at Steklov Institute ]]( claude--Nikolai Durov's research at Steklov Institute--6946d851 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

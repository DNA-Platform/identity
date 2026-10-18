import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--backward-captures-in-checkers--d120a7f8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--backward-captures-in-checkers--d120a7f8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Backward captures in checkers ]]( claude--Backward captures in checkers--d120a7f8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 May 2026: <Means>$[[ Backward captures in checkers ]]( claude--Backward captures in checkers--d120a7f8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

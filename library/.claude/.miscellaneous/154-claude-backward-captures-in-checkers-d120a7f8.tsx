import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--backward-captures-in-checkers--d120a7f8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--backward-captures-in-checkers--d120a7f8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[15 May 2026](2026-05-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Backward captures in checkers ]]( claude--Backward captures in checkers--d120a7f8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 May 2026: <Means>$[[ Backward captures in checkers ]]( claude--Backward captures in checkers--d120a7f8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.cover.tsx';
import TheSynopsis from '../.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fleeing domestic violence: Georgian passport timeline ]]( claude--Fleeing domestic violence: Georgian passport timeline--25828b14 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Fleeing domestic violence: Georgian passport timeline ]]( claude--Fleeing domestic violence: Georgian passport timeline--25828b14 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

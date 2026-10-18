import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--casual-conversation--63afced5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--casual-conversation--63afced5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Casual conversation ]]( claude--Casual conversation--63afced5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 November 2025: <Means>$[[ Casual conversation ]]( claude--Casual conversation--63afced5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

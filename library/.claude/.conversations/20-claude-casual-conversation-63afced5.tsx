import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--casual-conversation--63afced5/.cover.tsx';
import TheSynopsis from './claude--casual-conversation--63afced5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[23 November 2025](2025-11-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Casual conversation ]]( claude--Casual conversation--63afced5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ Casual conversation ]]( claude--Casual conversation--63afced5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

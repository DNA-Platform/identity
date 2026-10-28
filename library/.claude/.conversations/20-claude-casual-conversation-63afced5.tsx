import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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

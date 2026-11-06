import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--goldbach-through-godel--53e2b255/.cover.tsx';
import TheSynopsis from '../.conversations/claude--goldbach-through-godel--53e2b255/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[19 October 2026](2026-10-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Goldbach through Godel ]]( claude--Goldbach through Godel--53e2b255 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 October 2026: <Means>$[[ Goldbach through Godel ]]( claude--Goldbach through Godel--53e2b255 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

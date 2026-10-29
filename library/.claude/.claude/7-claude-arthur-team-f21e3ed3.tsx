import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--arthur-team--f21e3ed3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--arthur-team--f21e3ed3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 June 2026: <Means>$[[ Arthur &gt; Team ]]( claude--Arthur &gt; Team--f21e3ed3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

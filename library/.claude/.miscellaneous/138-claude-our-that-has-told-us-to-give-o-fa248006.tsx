import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.cover.tsx';
import TheSynopsis from '../.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Our that has told us to give o… ]]( claude--Our that has told us to give o…--fa248006 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 April 2026: <Means>$[[ Our that has told us to give o… ]]( claude--Our that has told us to give o…--fa248006 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 April 2026](2026-04-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 April 2026: <Means>$[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

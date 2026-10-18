import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--cross-border-residency-denial-for-minor-children--32e0a92c/.cover.tsx';
import TheSynopsis from './claude--cross-border-residency-denial-for-minor-children--32e0a92c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[25 April 2026](2026-04-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

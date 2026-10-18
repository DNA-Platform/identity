import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--dominic-harbor-and-bays-maps--de3442a6/.cover.tsx';
import TheSynopsis from './claude--dominic-harbor-and-bays-maps--de3442a6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dominic Harbor &amp; Bays maps ]]( claude--Dominic Harbor &amp; Bays maps--de3442a6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Dominic Harbor &amp; Bays maps ]]( claude--Dominic Harbor &amp; Bays maps--de3442a6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

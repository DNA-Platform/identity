import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bitcoin-and-ton--9108715b/.cover.tsx';
import TheSynopsis from './claude--bitcoin-and-ton--9108715b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin &amp; TON ]]( claude--Bitcoin &amp; TON--9108715b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 60 exchanges: <Means>$[[ Bitcoin &amp; TON ]]( claude--Bitcoin &amp; TON--9108715b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

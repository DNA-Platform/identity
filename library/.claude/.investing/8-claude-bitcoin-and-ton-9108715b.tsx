import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoin-and-ton--9108715b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin-and-ton--9108715b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin &amp; TON ]]( claude--Bitcoin &amp; TON--9108715b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Bitcoin &amp; TON ]]( claude--Bitcoin &amp; TON--9108715b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

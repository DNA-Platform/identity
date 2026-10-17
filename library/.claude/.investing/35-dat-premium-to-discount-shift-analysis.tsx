import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/dat-premium-to-discount-shift-analysis/.cover.tsx';
import TheSynopsis from '../.conversations/dat-premium-to-discount-shift-analysis/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DAT premium to discount shift analysis ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ DAT premium to discount shift analysis ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

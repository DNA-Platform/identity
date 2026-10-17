import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tonx-after-hours-price-spike-analysis/.cover.tsx';
import TheSynopsis from '../.conversations/tonx-after-hours-price-spike-analysis/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX after-hours price spike analysis ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ TONX after-hours price spike analysis ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

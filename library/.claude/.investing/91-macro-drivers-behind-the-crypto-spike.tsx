import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/macro-drivers-behind-the-crypto-spike/.cover.tsx';
import TheSynopsis from '../.conversations/macro-drivers-behind-the-crypto-spike/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Macro drivers behind the crypto spike ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Macro drivers behind the crypto spike ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

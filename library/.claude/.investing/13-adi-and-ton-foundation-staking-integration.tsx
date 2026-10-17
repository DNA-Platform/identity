import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/adi-and-ton-foundation-staking-integration/.cover.tsx';
import TheSynopsis from '../.conversations/adi-and-ton-foundation-staking-integration/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ADI and TON Foundation staking integration ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 January 2026: <Means>$[[ ADI and TON Foundation staking integration ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

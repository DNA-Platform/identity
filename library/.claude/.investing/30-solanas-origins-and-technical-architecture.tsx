import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/solanas-origins-and-technical-architecture/.cover.tsx';
import TheSynopsis from '../.conversations/solanas-origins-and-technical-architecture/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Solana's origins and technical architecture ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Solana's origins and technical architecture ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

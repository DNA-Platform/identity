import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/stars-to-ton-conversion-restrictions-and-pricing/.cover.tsx';
import TheSynopsis from '../.conversations/stars-to-ton-conversion-restrictions-and-pricing/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stars to TON conversion restrictions and pricing ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Stars to TON conversion restrictions and pricing ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

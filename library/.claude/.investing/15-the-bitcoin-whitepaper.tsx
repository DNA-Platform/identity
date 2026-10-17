import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/the-bitcoin-whitepaper/.cover.tsx';
import TheSynopsis from '../.conversations/the-bitcoin-whitepaper/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Bitcoin Whitepaper ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ The Bitcoin Whitepaper ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

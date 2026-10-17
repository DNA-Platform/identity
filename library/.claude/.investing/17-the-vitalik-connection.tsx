import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/the-vitalik-connection/.cover.tsx';
import TheSynopsis from '../.conversations/the-vitalik-connection/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Vitalik Connection ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ The Vitalik Connection ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

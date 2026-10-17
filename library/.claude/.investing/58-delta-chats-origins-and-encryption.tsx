import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/delta-chats-origins-and-encryption/.cover.tsx';
import TheSynopsis from '../.conversations/delta-chats-origins-and-encryption/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Delta Chat's origins and encryption ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Delta Chat's origins and encryption ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

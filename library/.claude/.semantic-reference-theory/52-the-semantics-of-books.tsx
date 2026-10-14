import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/the-semantics-of-books/.cover.tsx';
import TheSynopsis from '../.conversations/the-semantics-of-books/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Books ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 July 2026: <Means>$[[ The Semantics of Books ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

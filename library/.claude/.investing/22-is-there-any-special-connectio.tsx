import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/is-there-any-special-connectio/.cover.tsx';
import TheSynopsis from '../.conversations/is-there-any-special-connectio/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Is there any special connectio… ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 January 2026: <Means>$[[ Is there any special connectio… ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

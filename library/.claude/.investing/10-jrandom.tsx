import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/jrandom/.cover.tsx';
import TheSynopsis from '../.conversations/jrandom/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ jrandom ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ jrandom ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/understanding-atomic/.cover.tsx';
import TheSynopsis from '../.conversations/understanding-atomic/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding Atomic ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Understanding Atomic ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

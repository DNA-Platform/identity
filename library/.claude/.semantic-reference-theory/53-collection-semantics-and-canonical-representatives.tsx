import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/collection-semantics-and-canonical-representatives/.cover.tsx';
import TheSynopsis from '../.conversations/collection-semantics-and-canonical-representatives/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collection semantics and canonical representatives ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2026: <Means>$[[ Collection semantics and canonical representatives ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

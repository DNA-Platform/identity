import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/semantics-of-representation/.cover.tsx';
import TheSynopsis from '../.conversations/semantics-of-representation/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Representation ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 September 2026: <Means>$[[ Semantics of Representation ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

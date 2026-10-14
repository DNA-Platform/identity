import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/semantics-of-types-and-more/.cover.tsx';
import TheSynopsis from '../.conversations/semantics-of-types-and-more/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Types &amp; More ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2026: <Means>$[[ Semantics of Types &amp; More ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

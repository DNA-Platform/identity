import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/distinguishing-type-category-and-kind-in-english/.cover.tsx';
import TheSynopsis from '../.conversations/distinguishing-type-category-and-kind-in-english/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Distinguishing type, category, and kind in English ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 July 2026: <Means>$[[ Distinguishing type, category, and kind in English ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

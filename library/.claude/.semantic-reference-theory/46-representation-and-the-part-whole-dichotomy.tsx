import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/representation-and-the-part-whole-dichotomy/.cover.tsx';
import TheSynopsis from '../.conversations/representation-and-the-part-whole-dichotomy/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Representation &amp; the Part - Whole Dichotomy ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 June 2026: <Means>$[[ Representation &amp; the Part - Whole Dichotomy ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

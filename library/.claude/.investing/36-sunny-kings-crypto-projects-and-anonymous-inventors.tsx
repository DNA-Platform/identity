import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/sunny-kings-crypto-projects-and-anonymous-inventors/.cover.tsx';
import TheSynopsis from '../.conversations/sunny-kings-crypto-projects-and-anonymous-inventors/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's crypto projects and anonymous inventors ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ Sunny King's crypto projects and anonymous inventors ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

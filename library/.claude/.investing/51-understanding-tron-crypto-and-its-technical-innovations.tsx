import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/understanding-tron-crypto-and-its-technical-innovations/.cover.tsx';
import TheSynopsis from '../.conversations/understanding-tron-crypto-and-its-technical-innovations/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding TRON crypto and its technical innovations ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 March 2026: <Means>$[[ Understanding TRON crypto and its technical innovations ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

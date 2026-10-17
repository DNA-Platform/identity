import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-primes--64653527/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-primes--64653527/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Primes ]]( claude--Semantic Primes--64653527 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 June 2026: <Means>$[[ Semantic Primes ]]( claude--Semantic Primes--64653527 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-primes--64653527/.cover.tsx';
import TheSynopsis from './claude--semantic-primes--64653527/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Primes ]]( claude--Semantic Primes--64653527 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Semantic Primes ]]( claude--Semantic Primes--64653527 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--nounifying-include-in-english--0b7bc569/.cover.tsx';
import TheSynopsis from './claude--nounifying-include-in-english--0b7bc569/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[15 May 2026](2026-05-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nounifying "include" in English ]]( claude--Nounifying "include" in English--0b7bc569 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Nounifying "include" in English ]]( claude--Nounifying "include" in English--0b7bc569 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

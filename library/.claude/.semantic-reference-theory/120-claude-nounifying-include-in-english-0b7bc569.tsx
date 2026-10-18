import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nounifying-include-in-english--0b7bc569/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nounifying-include-in-english--0b7bc569/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nounifying "include" in English ]]( claude--Nounifying "include" in English--0b7bc569 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 May 2026: <Means>$[[ Nounifying "include" in English ]]( claude--Nounifying "include" in English--0b7bc569 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--pdf-translation-to-english--090d8c84/.cover.tsx';
import TheSynopsis from './claude--pdf-translation-to-english--090d8c84/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 65 exchanges: <Means>$[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--pdf-translation-to-english--090d8c84/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pdf-translation-to-english--090d8c84/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pdf-translation-to-english--090d8c84/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pdf-translation-to-english--090d8c84/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ PDF translation to English ]]( claude--PDF translation to English--090d8c84 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

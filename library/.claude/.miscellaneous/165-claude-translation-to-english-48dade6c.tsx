import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translation-to-english--48dade6c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translation-to-english--48dade6c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[1 June 2026](2026-06-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translation to English ]]( claude--Translation to English--48dade6c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 June 2026: <Means>$[[ Translation to English ]]( claude--Translation to English--48dade6c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

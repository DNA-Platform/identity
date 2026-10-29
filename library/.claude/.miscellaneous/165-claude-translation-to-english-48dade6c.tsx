import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--translation-to-english--48dade6c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translation-to-english--48dade6c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

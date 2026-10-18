import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translation-to-english--48dade6c/.cover.tsx';
import TheSynopsis from './claude--translation-to-english--48dade6c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[1 June 2026](2026-06-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translation to English ]]( claude--Translation to English--48dade6c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Translation to English ]]( claude--Translation to English--48dade6c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

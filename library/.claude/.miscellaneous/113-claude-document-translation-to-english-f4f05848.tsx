import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--document-translation-to-english--f4f05848/.cover.tsx';
import TheSynopsis from '../.conversations/claude--document-translation-to-english--f4f05848/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[24 March 2026](2026-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Document translation to English ]]( claude--Document translation to English--f4f05848 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 March 2026: <Means>$[[ Document translation to English ]]( claude--Document translation to English--f4f05848 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

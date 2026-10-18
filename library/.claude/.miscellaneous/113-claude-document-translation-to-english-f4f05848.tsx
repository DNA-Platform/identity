import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--document-translation-to-english--f4f05848/.cover.tsx';
import TheSynopsis from '../.conversations/claude--document-translation-to-english--f4f05848/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Document translation to English ]]( claude--Document translation to English--f4f05848 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 March 2026: <Means>$[[ Document translation to English ]]( claude--Document translation to English--f4f05848 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

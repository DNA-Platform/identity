import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-phone-number-to-google-voice--23feb617/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-phone-number-to-google-voice--23feb617/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving phone number to Google Voice ]]( claude--Moving phone number to Google Voice--23feb617 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 May 2026: <Means>$[[ Moving phone number to Google Voice ]]( claude--Moving phone number to Google Voice--23feb617 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

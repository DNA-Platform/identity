import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moving-phone-number-to-google-voice--23feb617/.cover.tsx';
import TheSynopsis from './claude--moving-phone-number-to-google-voice--23feb617/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving phone number to Google Voice ]]( claude--Moving phone number to Google Voice--23feb617 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 134 exchanges: <Means>$[[ Moving phone number to Google Voice ]]( claude--Moving phone number to Google Voice--23feb617 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

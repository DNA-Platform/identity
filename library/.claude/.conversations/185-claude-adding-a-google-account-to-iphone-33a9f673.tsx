import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--adding-a-google-account-to-iphone--33a9f673/.cover.tsx';
import TheSynopsis from './claude--adding-a-google-account-to-iphone--33a9f673/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

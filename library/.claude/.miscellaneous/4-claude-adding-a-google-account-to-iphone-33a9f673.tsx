import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.cover.tsx';
import TheSynopsis from '../.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

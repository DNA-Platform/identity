import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.cover.tsx';
import TheSynopsis from '../.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Adding a Google account to iPhone ]]( claude--Adding a Google account to iPhone--33a9f673 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

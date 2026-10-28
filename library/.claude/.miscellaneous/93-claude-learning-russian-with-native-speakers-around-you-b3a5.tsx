import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[4 March 2026](2026-03-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 March 2026: <Means>$[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

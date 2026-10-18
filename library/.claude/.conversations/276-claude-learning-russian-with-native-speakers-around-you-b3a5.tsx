import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--learning-russian-with-native-speakers-around-you--b3a59518/.cover.tsx';
import TheSynopsis from './claude--learning-russian-with-native-speakers-around-you--b3a59518/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[4 March 2026](2026-03-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

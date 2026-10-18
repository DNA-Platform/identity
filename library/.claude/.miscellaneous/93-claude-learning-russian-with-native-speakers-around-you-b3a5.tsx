import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 March 2026: <Means>$[[ Learning Russian with native speakers around you ]]( claude--Learning Russian with native speakers around you--b3a59518 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

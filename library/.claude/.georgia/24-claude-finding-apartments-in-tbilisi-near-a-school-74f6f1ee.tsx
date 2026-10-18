import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

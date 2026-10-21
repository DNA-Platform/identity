import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.cover.tsx';
import TheSynopsis from './claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

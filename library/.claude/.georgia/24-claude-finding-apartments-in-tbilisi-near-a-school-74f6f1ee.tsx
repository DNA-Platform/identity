import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Finding apartments in Tbilisi near a school ]]( claude--Finding apartments in Tbilisi near a school--74f6f1ee )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

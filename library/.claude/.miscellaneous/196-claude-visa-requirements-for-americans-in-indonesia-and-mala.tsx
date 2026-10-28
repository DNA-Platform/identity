import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[9 September 2026](2026-09-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2026: <Means>$[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

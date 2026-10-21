import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.cover.tsx';
import TheSynopsis from './claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[9 September 2026](2026-09-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

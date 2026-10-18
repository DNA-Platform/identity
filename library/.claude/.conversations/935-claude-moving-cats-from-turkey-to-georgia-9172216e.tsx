import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moving-cats-from-turkey-to-georgia--9172216e/.cover.tsx';
import TheSynopsis from './claude--moving-cats-from-turkey-to-georgia--9172216e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving cats from Turkey to Georgia ]]( claude--Moving cats from Turkey to Georgia--9172216e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Moving cats from Turkey to Georgia ]]( claude--Moving cats from Turkey to Georgia--9172216e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-cats-from-turkey-to-georgia--9172216e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-cats-from-turkey-to-georgia--9172216e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[17 January 2026](2026-01-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving cats from Turkey to Georgia ]]( claude--Moving cats from Turkey to Georgia--9172216e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ Moving cats from Turkey to Georgia ]]( claude--Moving cats from Turkey to Georgia--9172216e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

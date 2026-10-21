import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.cover.tsx';
import TheSynopsis from './claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving luggage from Turkey to Georgia via cargo ]]( claude--Moving luggage from Turkey to Georgia via cargo--fe3171cf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 15 exchanges: <Means>$[[ Moving luggage from Turkey to Georgia via cargo ]]( claude--Moving luggage from Turkey to Georgia via cargo--fe3171cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

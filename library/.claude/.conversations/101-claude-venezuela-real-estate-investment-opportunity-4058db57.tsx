import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--venezuela-real-estate-investment-opportunity--4058db57/.cover.tsx';
import TheSynopsis from './claude--venezuela-real-estate-investment-opportunity--4058db57/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

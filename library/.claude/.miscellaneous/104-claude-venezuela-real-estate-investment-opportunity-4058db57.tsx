import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--venezuela-real-estate-investment-opportunity--4058db57/.cover.tsx';
import TheSynopsis from '../.conversations/claude--venezuela-real-estate-investment-opportunity--4058db57/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

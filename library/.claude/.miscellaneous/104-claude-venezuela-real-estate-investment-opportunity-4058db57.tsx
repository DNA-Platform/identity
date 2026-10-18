import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--venezuela-real-estate-investment-opportunity--4058db57/.cover.tsx';
import TheSynopsis from '../.conversations/claude--venezuela-real-estate-investment-opportunity--4058db57/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Venezuela real estate investment opportunity ]]( claude--Venezuela real estate investment opportunity--4058db57 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

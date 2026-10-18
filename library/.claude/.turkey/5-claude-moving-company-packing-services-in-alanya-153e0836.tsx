import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving company packing services in Alanya ]]( claude--Moving company packing services in Alanya--153e0836 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ Moving company packing services in Alanya ]]( claude--Moving company packing services in Alanya--153e0836 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

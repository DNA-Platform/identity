import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving company packing services in Alanya ]]( claude--Moving company packing services in Alanya--153e0836 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ Moving company packing services in Alanya ]]( claude--Moving company packing services in Alanya--153e0836 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

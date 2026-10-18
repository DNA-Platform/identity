import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[7 January 2026](2026-01-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 January 2026: <Means>$[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 January 2026: <Means>$[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

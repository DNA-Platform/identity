import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.cover.tsx';
import TheSynopsis from './claude--georgia-health-insurance-requirements-for-americans--17cc66cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[7 January 2026](2026-01-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Georgia health insurance requirements for Americans ]]( claude--Georgia health insurance requirements for Americans--17cc66cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

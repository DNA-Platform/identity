import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--dutch-tin-number-validation-and-structure--882148a0/.cover.tsx';
import TheSynopsis from './claude--dutch-tin-number-validation-and-structure--882148a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dutch-tin-number-validation-and-structure--882148a0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dutch-tin-number-validation-and-structure--882148a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

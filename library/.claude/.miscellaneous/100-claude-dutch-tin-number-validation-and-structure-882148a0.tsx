import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dutch-tin-number-validation-and-structure--882148a0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dutch-tin-number-validation-and-structure--882148a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Dutch TIN number validation and structure ]]( claude--Dutch TIN number validation and structure--882148a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

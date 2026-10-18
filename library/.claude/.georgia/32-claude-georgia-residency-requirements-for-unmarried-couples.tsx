import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia residency requirements for unmarried couples ]]( claude--Georgia residency requirements for unmarried couples--35ac3078 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Georgia residency requirements for unmarried couples ]]( claude--Georgia residency requirements for unmarried couples--35ac3078 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

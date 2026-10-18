import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--string-length-notation-and-foundational-sketch-generalizatio--3b684876/.cover.tsx';
import TheSynopsis from '../.conversations/claude--string-length-notation-and-foundational-sketch-generalizatio--3b684876/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ String length notation and foundational sketch generalization ]]( claude--String length notation and foundational sketch generalization--3b684876 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2026: <Means>$[[ String length notation and foundational sketch generalization ]]( claude--String length notation and foundational sketch generalization--3b684876 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

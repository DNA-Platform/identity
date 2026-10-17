import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--string-length-notation-and-foundational-sketch-generalizatio--3b684876/.cover.tsx';
import TheSynopsis from './claude--string-length-notation-and-foundational-sketch-generalizatio--3b684876/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ String length notation and foundational sketch generalization ]]( claude--String length notation and foundational sketch generalization--3b684876 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ String length notation and foundational sketch generalization ]]( claude--String length notation and foundational sketch generalization--3b684876 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

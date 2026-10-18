import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--algorithmic-art-project-evolvedsvg--c583291c/.cover.tsx';
import TheSynopsis from './claude--algorithmic-art-project-evolvedsvg--c583291c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[29 March 2025](2025-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Algorithmic Art Project "EvolvedSVG" ]]( claude--Algorithmic Art Project "EvolvedSVG"--c583291c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Algorithmic Art Project "EvolvedSVG" ]]( claude--Algorithmic Art Project "EvolvedSVG"--c583291c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

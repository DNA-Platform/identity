import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ai-learning-process-analysis--e8f8da16/.cover.tsx';
import TheSynopsis from './claude--ai-learning-process-analysis--e8f8da16/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[25 August 2025](2025-08-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI Learning Process Analysis ]]( claude--AI Learning Process Analysis--e8f8da16 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 134 exchanges: <Means>$[[ AI Learning Process Analysis ]]( claude--AI Learning Process Analysis--e8f8da16 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

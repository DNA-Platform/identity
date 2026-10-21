import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--patterns-object-model--a3b2f38f/.cover.tsx';
import TheSynopsis from './claude--patterns-object-model--a3b2f38f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[18 August 2025](2025-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Patterns Object Model ]]( claude--Patterns Object Model--a3b2f38f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Patterns Object Model ]]( claude--Patterns Object Model--a3b2f38f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

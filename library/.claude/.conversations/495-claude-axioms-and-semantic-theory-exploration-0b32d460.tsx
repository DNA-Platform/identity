import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--axioms-and-semantic-theory-exploration--0b32d460/.cover.tsx';
import TheSynopsis from './claude--axioms-and-semantic-theory-exploration--0b32d460/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[14 October 2025](2025-10-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms and semantic theory exploration ]]( claude--Axioms and semantic theory exploration--0b32d460 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Axioms and semantic theory exploration ]]( claude--Axioms and semantic theory exploration--0b32d460 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.cover.tsx';
import TheSynopsis from '../.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[14 October 2025](2025-10-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms and semantic theory exploration ]]( claude--Axioms and semantic theory exploration--0b32d460 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 October 2025: <Means>$[[ Axioms and semantic theory exploration ]]( claude--Axioms and semantic theory exploration--0b32d460 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

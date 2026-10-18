import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.cover.tsx';
import TheSynopsis from '../.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[14 October 2025](2025-10-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms and semantic reflection theory ]]( claude--Axioms and semantic reflection theory--a7bcd369 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 October 2025: <Means>$[[ Axioms and semantic reflection theory ]]( claude--Axioms and semantic reflection theory--a7bcd369 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.cover.tsx';
import TheSynopsis from '../.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms and semantic reflection theory ]]( claude--Axioms and semantic reflection theory--a7bcd369 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 October 2025: <Means>$[[ Axioms and semantic reflection theory ]]( claude--Axioms and semantic reflection theory--a7bcd369 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--history-of-propositional-logic--47a37760/.cover.tsx';
import TheSynopsis from '../.conversations/claude--history-of-propositional-logic--47a37760/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[4 October 2025](2025-10-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 October 2025: <Means>$[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

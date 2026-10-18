import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--history-of-propositional-logic--47a37760/.cover.tsx';
import TheSynopsis from '../.conversations/claude--history-of-propositional-logic--47a37760/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 October 2025: <Means>$[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

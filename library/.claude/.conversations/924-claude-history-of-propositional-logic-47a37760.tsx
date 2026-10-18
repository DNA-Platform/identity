import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--history-of-propositional-logic--47a37760/.cover.tsx';
import TheSynopsis from './claude--history-of-propositional-logic--47a37760/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[4 October 2025](2025-10-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ History of propositional logic ]]( claude--History of propositional logic--47a37760 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

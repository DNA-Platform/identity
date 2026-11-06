import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--logic-axioms-and-gödels-incompleteness--cb87d454/.cover.tsx';
import TheSynopsis from '../.conversations/claude--logic-axioms-and-gödels-incompleteness--cb87d454/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[20 October 2026](2026-10-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Logic axioms and Gödel's incompleteness ]]( claude--Logic axioms and Gödel's incompleteness--cb87d454 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 October 2026: <Means>$[[ Logic axioms and Gödel's incompleteness ]]( claude--Logic axioms and Gödel's incompleteness--cb87d454 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

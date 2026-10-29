import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--selling-prints-on-spoonflower--50870707/.cover.tsx';
import TheSynopsis from '../.conversations/claude--selling-prints-on-spoonflower--50870707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 March 2026](2026-03-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Selling prints on Spoonflower ]]( claude--Selling prints on Spoonflower--50870707 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 March 2026: <Means>$[[ Selling prints on Spoonflower ]]( claude--Selling prints on Spoonflower--50870707 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

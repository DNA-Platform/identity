import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--selling-prints-on-spoonflower--50870707/.cover.tsx';
import TheSynopsis from '../.conversations/claude--selling-prints-on-spoonflower--50870707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
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

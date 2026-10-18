import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--selling-prints-on-spoonflower--50870707/.cover.tsx';
import TheSynopsis from './claude--selling-prints-on-spoonflower--50870707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[25 March 2026](2026-03-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Selling prints on Spoonflower ]]( claude--Selling prints on Spoonflower--50870707 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Selling prints on Spoonflower ]]( claude--Selling prints on Spoonflower--50870707 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

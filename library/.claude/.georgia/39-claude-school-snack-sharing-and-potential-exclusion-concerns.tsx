import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.cover.tsx';
import TheSynopsis from '../.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ School snack sharing and potential exclusion concerns ]]( claude--School snack sharing and potential exclusion concerns--e3678695 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 March 2026: <Means>$[[ School snack sharing and potential exclusion concerns ]]( claude--School snack sharing and potential exclusion concerns--e3678695 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

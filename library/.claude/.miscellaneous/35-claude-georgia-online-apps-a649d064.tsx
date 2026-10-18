import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-online-apps--a649d064/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-online-apps--a649d064/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[9 January 2026](2026-01-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 January 2026: <Means>$[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

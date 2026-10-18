import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--how-the-electoral-college-works--c1aee3fd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--how-the-electoral-college-works--c1aee3fd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How the electoral college works ]]( claude--How the electoral college works--c1aee3fd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 April 2026: <Means>$[[ How the electoral college works ]]( claude--How the electoral college works--c1aee3fd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

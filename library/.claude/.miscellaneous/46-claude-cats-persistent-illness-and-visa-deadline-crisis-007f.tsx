import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cats-persistent-illness-and-visa-deadline-crisis--007f4eb7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cats-persistent-illness-and-visa-deadline-crisis--007f4eb7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cat's persistent illness and visa deadline crisis ]]( claude--Cat's persistent illness and visa deadline crisis--007f4eb7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Cat's persistent illness and visa deadline crisis ]]( claude--Cat's persistent illness and visa deadline crisis--007f4eb7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

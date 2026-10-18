import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--cats-persistent-illness-and-visa-deadline-crisis--007f4eb7/.cover.tsx';
import TheSynopsis from './claude--cats-persistent-illness-and-visa-deadline-crisis--007f4eb7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cat's persistent illness and visa deadline crisis ]]( claude--Cat's persistent illness and visa deadline crisis--007f4eb7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Cat's persistent illness and visa deadline crisis ]]( claude--Cat's persistent illness and visa deadline crisis--007f4eb7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

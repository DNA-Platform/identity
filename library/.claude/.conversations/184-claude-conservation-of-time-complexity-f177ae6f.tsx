import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--conservation-of-time-complexity--f177ae6f/.cover.tsx';
import TheSynopsis from './claude--conservation-of-time-complexity--f177ae6f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[22 March 2025](2025-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conservation of Time Complexity ]]( claude--Conservation of Time Complexity--f177ae6f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 122 exchanges: <Means>$[[ Conservation of Time Complexity ]]( claude--Conservation of Time Complexity--f177ae6f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

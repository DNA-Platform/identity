import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--banking-operational-risk-controls--d4be8c96/.cover.tsx';
import TheSynopsis from './claude--banking-operational-risk-controls--d4be8c96/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[23 March 2025](2025-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Banking Operational Risk Controls ]]( claude--Banking Operational Risk Controls--d4be8c96 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Banking Operational Risk Controls ]]( claude--Banking Operational Risk Controls--d4be8c96 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

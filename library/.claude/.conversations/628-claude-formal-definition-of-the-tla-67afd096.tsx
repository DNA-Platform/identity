import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--formal-definition-of-the-tla--67afd096/.cover.tsx';
import TheSynopsis from './claude--formal-definition-of-the-tla--67afd096/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[17 March 2025](2025-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal Definition of the TLA ]]( claude--Formal Definition of the TLA--67afd096 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 212 exchanges: <Means>$[[ Formal Definition of the TLA ]]( claude--Formal Definition of the TLA--67afd096 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

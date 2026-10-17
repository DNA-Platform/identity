import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-first-order-logic--6559b8a0/.cover.tsx';
import TheSynopsis from './claude--seren-and-first-order-logic--6559b8a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[15 September 2025](2025-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

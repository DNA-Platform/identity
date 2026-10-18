import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-first-order-logic--6559b8a0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-first-order-logic--6559b8a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[13 September 2025](2025-09-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 September 2025: <Means>$[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

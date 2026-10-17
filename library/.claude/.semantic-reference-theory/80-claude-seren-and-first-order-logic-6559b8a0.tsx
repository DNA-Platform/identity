import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-first-order-logic--6559b8a0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-first-order-logic--6559b8a0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 September 2025: <Means>$[[ Seren &amp; First Order Logic ]]( claude--Seren &amp; First Order Logic--6559b8a0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

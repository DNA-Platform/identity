import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[15 April 2026](2026-04-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo card 3DS lockout on Glovo and Bolt ]]( claude--Credo card 3DS lockout on Glovo and Bolt--82cf3c25 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 April 2026: <Means>$[[ Credo card 3DS lockout on Glovo and Bolt ]]( claude--Credo card 3DS lockout on Glovo and Bolt--82cf3c25 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

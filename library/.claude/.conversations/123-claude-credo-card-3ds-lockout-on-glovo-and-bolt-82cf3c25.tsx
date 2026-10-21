import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.cover.tsx';
import TheSynopsis from './claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[15 April 2026](2026-04-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo card 3DS lockout on Glovo and Bolt ]]( claude--Credo card 3DS lockout on Glovo and Bolt--82cf3c25 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Credo card 3DS lockout on Glovo and Bolt ]]( claude--Credo card 3DS lockout on Glovo and Bolt--82cf3c25 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

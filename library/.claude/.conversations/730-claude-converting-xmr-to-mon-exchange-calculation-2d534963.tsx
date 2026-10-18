import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--converting-xmr-to-mon-exchange-calculation--2d534963/.cover.tsx';
import TheSynopsis from './claude--converting-xmr-to-mon-exchange-calculation--2d534963/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[29 April 2026](2026-04-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Converting XMR to MON exchange calculation ]]( claude--Converting XMR to MON exchange calculation--2d534963 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Converting XMR to MON exchange calculation ]]( claude--Converting XMR to MON exchange calculation--2d534963 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

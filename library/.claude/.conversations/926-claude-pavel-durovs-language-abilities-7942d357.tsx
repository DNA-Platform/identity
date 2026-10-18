import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pavel-durovs-language-abilities--7942d357/.cover.tsx';
import TheSynopsis from './claude--pavel-durovs-language-abilities--7942d357/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

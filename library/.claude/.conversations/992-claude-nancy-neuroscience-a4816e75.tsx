import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--nancy-neuroscience--a4816e75/.cover.tsx';
import TheSynopsis from './claude--nancy-neuroscience--a4816e75/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nancy &gt; Neuroscience ]]( claude--Nancy &gt; Neuroscience--a4816e75 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Nancy &gt; Neuroscience ]]( claude--Nancy &gt; Neuroscience--a4816e75 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

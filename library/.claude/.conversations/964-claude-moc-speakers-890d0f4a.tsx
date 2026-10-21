import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moc-speakers--890d0f4a/.cover.tsx';
import TheSynopsis from './claude--moc-speakers--890d0f4a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[12 October 2026](2026-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MoC Speakers ]]( claude--MoC Speakers--890d0f4a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ MoC Speakers ]]( claude--MoC Speakers--890d0f4a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

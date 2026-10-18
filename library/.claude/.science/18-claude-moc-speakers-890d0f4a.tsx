import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moc-speakers--890d0f4a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moc-speakers--890d0f4a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MoC Speakers ]]( claude--MoC Speakers--890d0f4a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ MoC Speakers ]]( claude--MoC Speakers--890d0f4a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

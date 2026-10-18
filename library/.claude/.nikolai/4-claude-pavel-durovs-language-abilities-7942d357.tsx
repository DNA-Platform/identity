import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pavel-durovs-language-abilities--7942d357/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pavel-durovs-language-abilities--7942d357/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

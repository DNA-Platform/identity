import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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

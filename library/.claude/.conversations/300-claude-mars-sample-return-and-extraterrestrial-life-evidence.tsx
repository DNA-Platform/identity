import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover.tsx';
import TheSynopsis from './claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Title>
        <Paragraph>
            <Caption />
            A conversation, 68 exchanges: <Means>$[[ Mars sample return and extraterrestrial life evidence ]]( claude--Mars sample return and extraterrestrial life evidence--0ff8e5ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-alphabet-and-hand-gestures--45600aa7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-alphabet-and-hand-gestures--45600aa7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

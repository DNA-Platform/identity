import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-alphabet-and-hand-gestures--45600aa7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-alphabet-and-hand-gestures--45600aa7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

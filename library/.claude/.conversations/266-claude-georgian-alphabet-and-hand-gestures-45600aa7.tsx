import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-alphabet-and-hand-gestures--45600aa7/.cover.tsx';
import TheSynopsis from './claude--georgian-alphabet-and-hand-gestures--45600aa7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Georgian alphabet and hand gestures ]]( claude--Georgian alphabet and hand gestures--45600aa7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

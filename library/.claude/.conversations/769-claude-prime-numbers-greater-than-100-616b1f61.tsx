import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--prime-numbers-greater-than-100--616b1f61/.cover.tsx';
import TheSynopsis from './claude--prime-numbers-greater-than-100--616b1f61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Prime numbers greater than 100 ]]( claude--Prime numbers greater than 100--616b1f61 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Prime numbers greater than 100 ]]( claude--Prime numbers greater than 100--616b1f61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.cover.tsx';
import TheSynopsis from './claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[17 May 2026](2026-05-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The prodigal son's elder brother reinterpreted ]]( claude--The prodigal son's elder brother reinterpreted--4eec5580 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ The prodigal son's elder brother reinterpreted ]]( claude--The prodigal son's elder brother reinterpreted--4eec5580 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);

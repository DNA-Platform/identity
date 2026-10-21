import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-parable-of-the-talents-explained--e8a774f4/.cover.tsx';
import TheSynopsis from './claude--the-parable-of-the-talents-explained--e8a774f4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The parable of the talents explained ]]( claude--The parable of the talents explained--e8a774f4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ The parable of the talents explained ]]( claude--The parable of the talents explained--e8a774f4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
